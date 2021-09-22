import React, { Component } from "react";
import axios from "axios";
class UpdateAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="col d-flex justify-content-center">
        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-12">
            <label className="form-label">Address Line 01</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address1"
              value={this.state.address1}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Address Line 02</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              name="address2"
              value={this.state.address2}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
          </div>
         
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
  async componentDidMount() {
    const user = localStorage.getItem("userId");
    const adress = await axios
      .get(`api/address/${user}`)
      .then((response) => {
        this.setState({ user: response.data.user });
        this.setState({ address1: response.data.address1 });
        this.setState({ address2: response.data.address2 });
        this.setState({ city: response.data.city });
        this.setState({ state: response.data.state });
        this.setState({ price: response.data.price });
      })
      .catch((error) => {
        alert(error);
      });
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const user = localStorage.getItem("userId");
    const { data } = await axios.post(`api/address`, {
      user: user,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
    });
    if (data) {
      alert("user address Update Successfully..!");
      this.props.history.push("/googlePay");
    }
  }
}
export default UpdateAddress;