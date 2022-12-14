import React, { Component } from "react";
import Typical from "react-typical";
import profile from '../img/me.jpg';

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
  }

  render() {
    console.log(this.props);
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <img className="profile-picture" src={profile} alt="{Profile}" />
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <Typical className="title-styles" steps={["Full Stack Software Engineer"]} />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;