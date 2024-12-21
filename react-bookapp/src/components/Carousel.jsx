import React, { Component } from "react";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            url: "/assets/img/carousel-bgs/service-lg-1.jpg",
        };
        this.imgUrls = [
            "/assets/img/carousel-bgs/service-lg-1.jpg",
            "/assets/img/carousel-bgs/service-lg-2.jpg",
            "/assets/img/carousel-bgs/service-lg-3.jpg",
        ];
    }
    render() {
        return (
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-1 text-center">
                        <button onClick={() => this.setState({id: this.state.id === 0 ? 2 : this.state.id - 1, url: this.imgUrls[this.state.id === 0 ? 2 : this.state.id - 1]})} style={{width: "50px", heigth: "50px"}} className="btn btn-danger"><img style={{width: "100%", height: "100%", objectFit: "contain"}} src="../../public/assets/icons/arrow.png" alt="" /></button>
                    </div>
                    <div className="col-8 position-relative">
                        <div style={{backgroundImage: `url(${this.state.url})`, backgroundSize: "cover", height: "500px"}} className="container rounded mt-3">
                            <div style={{left:0, bottom: "15px"}} className="container position-absolute p-0">
                                <div className="row gy-2 justify-content-center">
                                    <div onClick={() => this.setState({id: 0, url: this.imgUrls[0]})} style={{height: "100px", backgroundImage: `url(${this.imgUrls[0]})`, backgroundSize: "cover"}} className="col-3 border border-white rounded"></div>
                                    <div onClick={() => this.setState({id: 1, url: this.imgUrls[1]})} style={{height: "100px", backgroundImage: `url(${this.imgUrls[1]})`, backgroundSize: "cover"}} className="col-3 border border-white rounded"></div>
                                    <div onClick={() => this.setState({id: 2, url: this.imgUrls[2]})} style={{height: "100px", backgroundImage: `url(${this.imgUrls[2]})`, backgroundSize: "cover"}} className="col-3 border border-white rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 text-center">
                        <button onClick={() => this.setState({id: this.state.id === 2 ? 0 : this.state.id + 1, url: this.imgUrls[this.state.id === 2 ? 0 : this.state.id + 1]})} style={{width: "50px", heigth: "50px", transform: "rotate(180deg)"}} className="btn btn-danger"><img style={{width: "100%", height: "100%", objectFit: "contain"}} src="../../public/assets/icons/arrow.png" alt="" /></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;