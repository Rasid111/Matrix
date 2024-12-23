import { useState } from "react";

function Carousel() {
    const [url, setUrl] = useState({id: 0, url: "/assets/img/carousel-bgs/service-lg-1.jpg"});
    let imgUrls = ["/assets/img/carousel-bgs/service-lg-1.jpg", "/assets/img/carousel-bgs/service-lg-2.jpg", "/assets/img/carousel-bgs/service-lg-3.jpg"];
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-1 text-center">
                    <button onClick={() => setUrl({id: url.id === 0 ? 2 : url.id - 1, url: imgUrls[url.id === 0 ? 2 : url.id - 1]})} style={{width: "50px", heigth: "50px"}} className="btn btn-danger"><img style={{width: "100%", height: "100%", objectFit: "contain"}} src="../../public/assets/icons/arrow.png" alt="" /></button>
                </div>
                <div className="col-8 position-relative">
                    <div style={{backgroundImage: `url(${url.url})`, backgroundSize: "cover", height: "500px"}} className="container rounded mt-3">
                        <div style={{left:0, bottom: "15px"}} className="container position-absolute w-100 m-0 p-0">
                            <div className="row gy-2 justify-content-center">
                                <div onClick={() => setUrl({id: 0,url: "/assets/img/carousel-bgs/service-lg-1.jpg"})} style={{height: "100px", backgroundImage: `url(${imgUrls[0]})`, backgroundSize: "cover"}} className="col-3 border border-white rounded"></div>
                                <div onClick={() => setUrl({id: 1,url: "/assets/img/carousel-bgs/service-lg-2.jpg"})} style={{height: "100px", backgroundImage: `url(${imgUrls[1]})`, backgroundSize: "cover"}} className="col-3 border border-white rounded"></div>
                                <div onClick={() => setUrl({id: 2,url: "/assets/img/carousel-bgs/service-lg-3.jpg"})} style={{height: "100px", backgroundImage: `url(${imgUrls[2]})`, backgroundSize: "cover"}} className="col-3 border border-white rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1 text-center">
                    <button onClick={() => setUrl({id: url.id === 2 ? 0 : url.id + 1, url: imgUrls[url.id === 2 ? 0 : url.id + 1]})} style={{width: "50px", heigth: "50px", transform: "rotate(180deg)"}} className="btn btn-danger"><img style={{width: "100%", height: "100%", objectFit: "contain"}} src="../../public/assets/icons/arrow.png" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;