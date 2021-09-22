import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";

const responseSuccessGoogle = async (response) => {
  console.log(response);
  await axios
    .post(`api/users/google`, {
      token: response.tokenId,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isAdmin", response.data.isAdmin);
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("login", true);
    })
    .catch((error) => {
      localStorage.setItem("isAdmin", false);
      console.log("Error!", "An Error Occured!");
    });
};

const responseErrorGoogle = (response) => {
  console.log(response);
};
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div classNameName="col d-flex justify-content-center">
        <div className="card" style={{ width: "45rem" }}>
          <form className="row g-3" onSubmit={this.handleSubmit}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Enter Your Name
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <br />
              <br />
              <GoogleLogin
                clientId="479086141536-98k9sop145i8cvd195g4r55krq5ta2j6.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <br />
              <br />
            </div>
            <div className="text-center">
              <Link to="/signin" className="nav-link">
                Alredy Have an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const { data } = await axios.post(`api/users`, {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      });
      localStorage.setItem("isAdmin", false);
      localStorage.setItem("login", true);
      alert("Sign Up Successfully..!");
      this.props.history.push("/");
    }
    catch {
      alert("Please enter correct details");
    }
  }
}
export default SignUp;
