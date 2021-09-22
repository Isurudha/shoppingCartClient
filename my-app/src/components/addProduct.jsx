import React, { Component } from "react";
import axios from "axios";
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: "",
      name: "",
      description: "",
      price: 0.0,
      category: "",
      manufacturer: "",
      image: "",
      Isavailable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="col d-flex justify-content-center">
        <div className="card" style={{ width: "45rem" }}>
          <form className="row g-3" onSubmit={this.handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Catogary</label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Manufacturer</label>
              <input
                type="text"
                className="form-control"
                name="manufacturer"
                value={this.state.manufacturer}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Product Code</label>
              <input
                type="text"
                className="form-control"
                name="productCode"
                value={this.state.productCode}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Item Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>
            <div className="text-center">
              <input
                className="form-check-input"
                type="checkbox"
                name="Isavailable"
                onChange={this.handleChange}
              />
              <label className="form-check-label">Availability</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    );
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
    const { data } = await axios.post(`api/products`, {
      productCode: this.state.productCode,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      category: this.state.category,
      manufacturer: this.state.manufacturer,
      image: this.state.image,
      Isavailable: this.state.Isavailable,
    });
    if (data) {
      alert("Product Saved Successfully..!");
    }
  }
}

export default AddProduct;
