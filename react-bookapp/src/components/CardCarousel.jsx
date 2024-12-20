import { useState } from "react";

function CardCarousel() {
    let imgUrls = [
        "/assets/img/card-carousel-bgs/service-13.png",
        "/assets/img/card-carousel-bgs/service-14.png",
        "/assets/img/card-carousel-bgs/service-15.png",
        "/assets/img/card-carousel-bgs/service-16.png"
    ]
    const [page, setPage] = useState(0);
    const [state, setState] = useState([
        {
            url: "/assets/img/card-carousel-bgs/service-13.png"
        },
        {
            url: "/assets/img/card-carousel-bgs/service-14.png"
        }
    ]);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={state[0].url} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={state[1].url} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center my-3">
                <div className="col-1 d-flex justify-content-evenly">
                    <div onClick={() => {
                        setPage(0);
                        setState([
                            {
                                url: imgUrls[0]
                            },
                            {
                                url: imgUrls[1]
                            }
                        ]);
                    }} style={{backgroundColor: page === 0 ? "darkred" : "tomato", width: 10, height: 10}} className="rounded-circle"></div>
                    <div onClick={() => {
                        setPage(1);
                        setState([
                            {
                                url: imgUrls[1]
                            },
                            {
                                url: imgUrls[2]
                            }
                        ]);
                    }} style={{backgroundColor: page === 1 ? "darkred" : "tomato", width: 10, height: 10}} className="rounded-circle"></div>
                    <div onClick={() => {
                        setPage(2);
                        setState([
                            {
                                url: imgUrls[2]
                            },
                            {
                                url: imgUrls[3]
                            }
                        ]);
                    }} style={{backgroundColor: page === 2 ? "darkred" : "tomato", width: 10, height: 10}} className="rounded-circle"></div>
                </div>
            </div>
        </div>
    )
}

export default CardCarousel;