import React from "react"

class Card extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <>
                <div className="p-2 card" style={{width: "14rem"}}>
                    <img style={{height: "14rem", objectFit: "contain"}} src={this.props.product.image} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.title}</h5>
                        <p className="card-text">{this.props.product.category[0].toUpperCase() + this.props.product.category.slice(1)}</p>
                        <p className="card-text">{this.props.product.price}$</p>
                        <button onClick={() => {
                            let cartJson = localStorage.getItem("cart");
                            let cart;
                            if (cartJson !== null) {
                                cart = JSON.parse(cartJson);
                            }
                            else
                                cart = [];
                            cart.push(this.props.product);
                            localStorage.setItem("cart", JSON.stringify(cart));
                        }} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Card;