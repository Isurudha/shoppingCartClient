import React, { Component } from "react";
import CartRow from "./cart-row";
import axios from "axios";
class Cart extends Component {
  state = {
    total: 0,
    allitems: [],
  };
  render() {
    return (
      <div class="col d-flex justify-content-center">
        <div class="card" style={{ width: "45rem" }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Item Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allitems.map((item) => (
                <CartRow
                  key={item.id}
                  item={item}
                  onDelete={() => this.deleteItem(item.id)}
                />
              ))}
            </tbody>
          </table>
          <form className="text">
            <div className="row mb-3">
              <label for="input" class="col-sm-3 col-form-label">
                Total Amount :-
              </label>
              <div className="col text-right"></div>
              <p for="input" class="col-sm-2 col-form-label">
                Rs. {this.state.total}
              </p>
            </div>
          </form>
          <br></br>
          <div>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                this.props.history.push("/updateAddress");
              }}
            >
              Check Out
            </button>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
  async handleSubmit(event) {
    event.preventDefault();
    const user = localStorage.getItem("userId");
    this.props.history.push("/updateAddress");
  }
  async componentDidMount() {
    const id = localStorage.getItem("userId");
    const { data } = await axios.get(`api/carts/items/${id}`);
    let tot = 0;
    let items = data.map((item) => {
      tot = tot + item.price;
      return {
        id: item._id,
        productId: item.productId,
        qty: item.qty,
        price: item.price,
        title: item.title,
        productCode: item.productCode,
        imagePath: item.imagePath,
      };
    });
    this.setState({ allitems: items });
    this.setState({ total: tot });
    localStorage.setItem("total", tot);
  }

  async deleteItem(id) {
    const user = localStorage.getItem("userId");
    await axios.post(`api/carts/${id}/${user}`);
    let updateditem = this.state.allitems.filter((item) => item.id !== id);
    this.setState({ allitems: updateditem });
    window.location.reload(false);
  }
}

export default Cart;
