import React, { Component } from "react";
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
class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="col d-flex justify-content-center">
        <div className="card" style={{ width: "45rem" }}>
          <form className="text-center" onSubmit={this.handleSubmit}>
            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputPassword3" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
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
      await axios
        .post(`api/auth`, {
          email: this.state.email,
          password: this.state.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isAdmin", response.data.isAdmin);
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("login", true);
          this.props.history.push("/");
        })
        .catch((error) => {
          localStorage.setItem("isAdmin", false);
          console.log("Error!", "An Error Occured!");
          alert("Please check the email & password");
        });
    }
    catch {
         alert("Please check the details");
    }
  }
}

export default SignIn;
