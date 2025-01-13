import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"

function ProductPage() {
    const params = useParams();
    const [productInfo, setProductInfo] = useState({});

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
                <Col>
                    <Link className="btn btn-light mt-5" to="/">Back</Link>
                </Col>
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
                    <p>${productInfo.price}</p>
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