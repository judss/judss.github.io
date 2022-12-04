import React, { Component } from "react";
import $ from "jquery";
import './App.css';
import Header from "./components/header.js";



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
        <Header />        
      </div>
    );
  }
}


export default App;
