import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import { LangContext } from "../context/LangContext";
import { ColorModeContext } from "../context/ColorModeContext";
import { CurrencyContext } from "../context/CurrencyContext";

function ProductPage() {
    const params = useParams();
    const [productInfo, setProductInfo] = useState({});

    const lang = useContext(LangContext)[0];
    const colorMode = useContext(ColorModeContext)[0];
    const currency = useContext(CurrencyContext)[0]

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.id}`)
            .then(function (response) {
                setProductInfo(response.data);
            })
    }, []);

    console.log(productInfo.reviews)

    return (
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Link className={`btn ${colorMode === "dark" ? "btn-light" : "btn-dark"} mt-5`} to="/">{lang === "EN" ? "Back" : "Dala"}</Link>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Row className="mt-3">
                <Col sm={2}></Col>
                <Col sm={8}>
                    <h1>{productInfo.title}</h1>
                    <h3>{productInfo.brand}</h3>
                    <img src={productInfo.thumbnail} alt="thumbnail" />
                    {productInfo.images === undefined ? (<></>) : productInfo.images.map((url, index) => {
                        <img key={index} src={url} alt={`img${index}`} />
                    })}
                    <p>{productInfo.description}</p>
                    <p>{Math.round(productInfo.price * (currency === "usd" ? 1 : 0.588) * 100) / 100}{currency === "usd" ? " USD" : " AZN"}</p>
                    <p className="mt-2">{productInfo.rating} / 5</p>
                    <Container fluid className="p-0">
                        <Row sm={1} className="g-3">
                            {productInfo.reviews === undefined ? (<></>) : productInfo.reviews.map((review, index) => {
                                return (
                                    <Col className="border rounded p-2" key={index}>
                                        <p className="m-0">{review.reviewerName}</p>
                                        <p className="m-0">{review.rating} / 5</p>
                                        <p className="m-0">{review.comment}</p>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage