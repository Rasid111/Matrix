import React from "react"

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            cart: []
        }
    }
    componentDidMount(){
        const cart = JSON.parse(localStorage.getItem("cart"))
        console.log(cart);
        this.setState({cart: cart});
        
    }
    render() {
        return (
            <>
                <ul className="list-group mt-5">
                    {this.state.cart.map((product) => (<li classname="list-group-item"><p>{product.title}</p></li>))}
                </ul>
            </>
        )
    }
}

export default Cart;