import React from "react"
import Card from "./Card";

class Cards extends React.Component {
    constructor() {
      super();
      this.state = {
        products: null,
        filteredProducts: null,
        categories: null,
        showFiltered: false,
        loaded: false
      }
    }
    filterByCategory = (ev) => {
        if (ev.target.value === "none") {
            this.setState({showFiltered: false})
            return;
        }
        this.setState({showFiltered:true, filteredProducts: this.state.products.filter(product => ev.target.value === product.category)})
    }
    componentDidMount() {
        let getProducts = async () => {
          let newState = {
            products: await (await fetch("https://fakestoreapi.com/products")).json(),
            categories: await (await fetch("https://fakestoreapi.com/products/categories")).json(),
            loaded: true
        }
        this.setState(newState);
      }
      getProducts();
    }
    render() {
        return !this.state.loaded ? (
            <div className="mt-5 container">
                <div className="row justify-content-center">
                    <div className="col-1">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
             ): (
            <>
                <div className="my-5 container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <select onChange={this.filterByCategory} className="form-select" aria-label="Default select example">
                                <option value="none" selected>Category</option>
                                {this.state.categories.map((category, index) => <option key={index} value={category}>{category[0].toUpperCase() + category.slice(1)}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-3 justify-content-center row-cols-4">
                        {
                        this.state.showFiltered?
                            this.state.filteredProducts.map((product, index) => (
                            <div className="col">
                                <Card key = {index} product = {product}></Card>
                            </div>)):
                        this.state.products.map((product, index) => (
                            <div className="col">
                                <Card key = {index} product = {product}></Card>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Cards;