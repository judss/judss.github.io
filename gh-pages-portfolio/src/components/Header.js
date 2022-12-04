import React, { Component } from "react";
import Typical from "react-typical";
import profile from '../img/me.jpg';

class Header extends Component {
  render() {

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <img class="profile-picture" src={profile} alt="{Profile}" />
              <br/>
              <h1 className="mb-0">
                <Typical steps={["Jordan Gregory-Wallis"]} wrapper="p" />
              </h1>
              <div className="title-container">
                <Typical className="title-styles" steps={["Software Engineer"]} />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;