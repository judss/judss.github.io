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

function buildBookCard(item) {
  const card = document.createElement('div');
  card.className = 'reading-card reading-card--book';

  const media = document.createElement('div');
  media.className = 'reading-card__media';

  const img = document.createElement('img');
  img.src = `assets/books/${item.cover}`;
  img.alt = `Cover of ${item.title} by ${item.author}`;
  img.className = 'reading-cover';
  img.addEventListener('error', () => {
    media.classList.add('reading-cover--fallback');
    img.remove();
  }, { once: true });
  media.appendChild(img);

  const body = document.createElement('div');
  body.className = 'reading-card__body';

  const pill = document.createElement('span');
  pill.className = 'reading-type-pill reading-type-pill--book';
  pill.textContent = 'Book';

  const title = document.createElement('p');
  title.className = 'reading-card__title';
  title.textContent = item.title;

  const author = document.createElement('p');
  author.className = 'reading-card__author';
  author.textContent = item.author;

  const anecdote = document.createElement('p');
  anecdote.className = 'reading-card__anecdote';
  anecdote.textContent = item.anecdote;

  body.append(pill, title, author, anecdote);
  card.append(media, body);
  return card;
}

function buildArticleCard(item) {
  const card = document.createElement('div');
  card.className = 'reading-card reading-card--article';

  const media = document.createElement('div');
  media.className = 'reading-card__media reading-card__media--article';
  media.style.backgroundColor = item.pubColor;
  media.setAttribute('role', 'img');
  media.setAttribute('aria-label', `${item.source} logo`);

  if (item.thumbnail) {
    const img = document.createElement('img');
    img.src = `assets/articles/${item.thumbnail}`;
    img.alt = `${item.source} thumbnail`;
    img.className = 'reading-cover';
    media.appendChild(img);
  } else {
    const logo = document.createElement('span');
    logo.className = 'reading-pub-logo';
    logo.textContent = item.pubInitials;
    media.appendChild(logo);
  }

  const body = document.createElement('div');
  body.className = 'reading-card__body';

  const pill = document.createElement('span');
  pill.className = 'reading-type-pill reading-type-pill--article';
  pill.textContent = 'Article';

  const title = document.createElement('p');
  title.className = 'reading-card__title';
  title.textContent = item.title;

  const source = document.createElement('p');
  source.className = 'reading-card__source';
  source.textContent = item.source;

  const anecdote = document.createElement('p');
  anecdote.className = 'reading-card__anecdote';
  anecdote.textContent = item.anecdote;

  const link = document.createElement('a');
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'reading-card__link';
  link.setAttribute('aria-label', `Read ${item.title} (opens in new tab)`);
  link.textContent = 'Read article ↗';

  body.append(pill, title, source, anecdote, link);
  card.append(media, body);
  return card;
}

function renderReadingGrid() {
  const grid = document.getElementById('reading-grid');
  const fragment = document.createDocumentFragment();

  readingItems
    .filter(item => item.visible)
    .forEach(item => {
      const card = item.type === 'book' ? buildBookCard(item) : buildArticleCard(item);
      fragment.appendChild(card);
    });

  grid.appendChild(fragment);
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
