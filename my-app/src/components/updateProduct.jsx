import React, { Component } from "react";
import axios from "axios";
class AdminUpdateProduct extends Component {
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
      Isavailable: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const id = localStorage.getItem("productId");
    const product = await axios
      .get(`api/products/${id}`)
      .then((response) => {
        this.setState({ productId: response.data._id });
        this.setState({ productCode: response.data.productCode });
        this.setState({ name: response.data.name });
        this.setState({ description: response.data.description });
        this.setState({ manufacturer: response.data.manufacturer });
        this.setState({ price: response.data.price });
        this.setState({ category: response.data.category });
        this.setState({ Isavailable: response.data.Isavailable });
        this.setState({ image: response.data.image });
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <div className="col d-flex justify-content-center">
        <div className="card" style={{ width: "45rem" }}>
          <form className="row g-3" onSubmit={this.handleSubmit}>
            <div className="col-md-6">
              <label for="inputname" className="form-label">
                Item Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputcatogary" className="form-label">
                Catogary
              </label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputmanufacturer" className="form-label">
                Manufacturer
              </label>
              <input
                type="text"
                className="form-control"
                name="manufacturer"
                value={this.state.manufacturer}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputitemcode" className="form-label">
                Product Code
              </label>
              <input
                type="text"
                className="form-control"
                name="productCode"
                value={this.state.productCode}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6">
              <label for="inputprice" className="form-label">
                Item Price
              </label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12">
              <label for="inputdescription" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12">
              <label for="inputURL" className="form-label">
                Image URL
              </label>
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
                checked={this.state.Isavailable}
                value={this.state.Isavailable}
                onChange={this.handleChange}
              />
              <label className="form-check-label" for="gridCheck">
                Availability
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Udate
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
    const id = localStorage.getItem("productId");
    try {
      const { data } = await axios
        .put(`api/products/${id}`, {
          productCode: this.state.productCode,
          name: this.state.name,
          description: this.state.description,
          price: this.state.price,
          category: this.state.category,
          manufacturer: this.state.manufacturer,
          image: this.state.image,
          Isavailable: this.state.Isavailable,
        })
        .catch((error) => {
          alert("Please fill all the required fiels..!");
        });
      if (data) {
        alert("Product Update Successfully..!");
      }
    } catch {
      alert("Something went wrong..!");
    }
    
  }
}

export default AdminUpdateProduct;
