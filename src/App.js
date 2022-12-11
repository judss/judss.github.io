import React, { Component } from "react";
import $ from "jquery";
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Skills from "./components/skills";
import GithubCorner from 'react-github-corner';


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  loadResume() {
    $.ajax({
      url: `resume_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.loadSharedData();
    this.loadResume();
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${data.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render(){
    return (
      <div>  
        <Header sharedData={this.state.sharedData.basic_info} />  
        <GithubCorner href="https://github.com/judss" direction="left" target="_blank" octoColor="#001219" bannerColor="#0a9396"/>
        <Skills sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info} />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}


export default App;
