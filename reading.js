// Book covers: save images to assets/books/ and set cover to the filename (e.g. 'deep-work.jpg')
const readingItems = [
  {
    type: 'article',
    title: 'Advanced Context Engineering',
    source: 'HumanLayer',
    url: 'https://www.humanlayer.dev/blog/advanced-context-engineering',
    pubColor: '#4f46e5',
    pubInitials: 'HL',
    thumbnail: null,
    anecdote: "Context engineering is quickly becoming one of the most important skills for developers working with AI. This article goes beyond basic prompting — covering how to structure, compress, and manage the information you give a model to get consistently useful output. Directly relevant to getting the most out of tools like Claude Code day to day.",
    visible: true
  },
  {
    type: 'book',
    title: "It's Your Ship",
    author: 'D. Michael Abrashoff',
    cover: 'its-your-ship.jpg',
    anecdote: "A masterclass in leadership through ownership. I think about this book whenever I'm leading a team or reviewing someone else's code.",
    visible: true
  },
  {
    type: 'article',
    title: 'Harness Engineering',
    source: 'Martin Fowler',
    url: 'https://martinfowler.com/articles/harness-engineering.html',
    pubColor: '#4a7c59',
    pubInitials: 'MF',
    thumbnail: 'martin-fowler.png',
    anecdote: "A great articulation of the engineering investment required to make large-scale refactoring safe. Building the harness — the tests, tooling, and scaffolding around the code — is what makes the actual change possible. Directly applicable to modernisation work where the risk isn't the new code, it's the unknown behaviour of the old.",
    visible: true
  },
  {
    type: 'book',
    title: 'Deep Work',
    author: 'Cal Newport',
    cover: 'deep-work.jpg',
    anecdote: "This book changed how I structure my working day — protecting long uninterrupted blocks for complex problems rather than context-switching constantly.",
    visible: true
  },
  {
    type: 'book',
    title: 'Never Split the Difference',
    author: 'Chris Voss',
    cover: 'never-split-the-difference.jpg',
    anecdote: "Written by a former FBI hostage negotiator, but the techniques apply everywhere — technical discussions, stakeholder conversations, salary negotiations. Tactical empathy and calibrated questions have genuinely made me better at working with people.",
    visible: false
  },
  {
    type: 'article',
    title: 'Strangler Fig',
    source: 'Martin Fowler',
    url: 'https://martinfowler.com/bliki/StranglerFigApplication.html',
    pubColor: '#4a7c59',
    pubInitials: 'MF',
    thumbnail: 'martin-fowler.png',
    anecdote: "The pattern that quietly ran in the background during years of modernisation work at Ignite. Rather than a risky big-bang rewrite, the strangler fig lets you incrementally replace legacy pieces while keeping the system live — something I applied in practice long before I knew it had a name.",
    visible: true
  },
  {
    type: 'book',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'project-hail-mary.jpg',
    anecdote: "The best kind of problem-solving story — a lone astronaut wakes up with no memory, figures out he's humanity's last hope, and has to science his way through every obstacle. Genuinely hard to put down.",
    visible: true
  }
];

function renderReadingGrid() {
  const grid = document.getElementById('reading-grid');
  grid.innerHTML = readingItems.map(item => {
    if(!item.visible) {
      return '';
    }
    if (item.type === 'book') {
      return `
        <div class="reading-card reading-card--book">
          <div class="reading-card__media">
            <img
              src="assets/books/${item.cover}"
              alt="Cover of ${item.title} by ${item.author}"
              class="reading-cover"
              onerror="this.parentElement.classList.add('reading-cover--fallback'); this.remove();"
            />
          </div>
          <div class="reading-card__body">
            <span class="reading-type-pill reading-type-pill--book">Book</span>
            <p class="reading-card__title">${item.title}</p>
            <p class="reading-card__author">${item.author}</p>
            <p class="reading-card__anecdote">${item.anecdote}</p>
          </div>
        </div>`;
    } else {
      const mediaContent = item.thumbnail
        ? `<img src="assets/articles/${item.thumbnail}" alt="${item.source} thumbnail" class="reading-cover" />`
        : `<span class="reading-pub-logo">${item.pubInitials}</span>`;
      return `
        <div class="reading-card reading-card--article">
          <div class="reading-card__media reading-card__media--article" style="background-color: ${item.pubColor}" role="img" aria-label="${item.source} logo">
            ${mediaContent}
          </div>
          <div class="reading-card__body">
            <span class="reading-type-pill reading-type-pill--article">Article</span>
            <p class="reading-card__title">${item.title}</p>
            <p class="reading-card__source">${item.source}</p>
            <p class="reading-card__anecdote">${item.anecdote}</p>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="reading-card__link" aria-label="Read ${item.title} (opens in new tab)">Read article ↗</a>
          </div>
        </div>`;
    }
  }).join('');
}

function observeReadingCards() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('#reading-grid .reading-card').forEach(el => {
    el.classList.add('reveal');
    obs.observe(el);
  });
}

renderReadingGrid();
observeReadingCards();
