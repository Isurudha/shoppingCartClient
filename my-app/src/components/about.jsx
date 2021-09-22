import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="col d-flex justify-content-center">
        <div className="card" style={{ width: "85rem" }}>
          <h1 className="text-center">About Us</h1>
          
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <div className="card" style={{ width: "20rem" }}>
                    <img
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FooRhiJ_transparent-users-icon-png-flat-user-icon-png%2F&psig=AOvVaw0Tx_NzStQdcQyR14B435-6&ust=1632258905692000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDfmLi8jvMCFQAAAAAdAAAAABAD"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Isuru Dhanisha</h5>
                    </div>
                  </div>
                </th>
                <th scope="col">
                  <div className="card" style={{ width: "20rem" }}>
                    <img
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FooRhiJ_transparent-users-icon-png-flat-user-icon-png%2F&psig=AOvVaw0Tx_NzStQdcQyR14B435-6&ust=1632258905692000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDfmLi8jvMCFQAAAAAdAAAAABAD"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Ravindu Tharaka</h5>
                    </div>
                  </div>
                </th>
                <th scope="col">
                  <div className="card" style={{ width: "20rem" }}>
                    <img
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACrystal_Clear_kdm_user_female.svg&psig=AOvVaw0Tx_NzStQdcQyR14B435-6&ust=1632258905692000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDfmLi8jvMCFQAAAAAdAAAAABAI"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Ishanka Withanage</h5>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
export default About;
