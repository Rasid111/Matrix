import { Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import { ColorModeContext } from "../context/ColorModeContext";
import { CurrencyContext } from "../context/CurrencyContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";



function ClientSide() {
    const lang = useContext(LangContext)[0];
    const colorMode = useContext(ColorModeContext)[0];
    // const currency = useContext(CurrencyContext)[0]

    const [products, setProducts] = useState([]);
    const [input, setInput] = useState("");
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("")

    useEffect(() => {
        const url = 'https://dummyjson.com/products/categories';
        axios.get(url)
            .then(function (response) {
                setCategories(response.data);
                console.log(response);
            })
    }, []);

    useEffect(() => {
        const url = `https://dummyjson.com/products?limit=0`

        axios.get(url).
            then(function (response) {
                setProducts(response.data.products);
            })
    }, [])

    return (
        <>

            <Form className='mt-5'>
                <Container>
                    <Row>
                        <Col>
                            <Form.Control type="text" value={input} placeholder={lang === "EN" ? "Search" : "Axtar"} onInput={(ev) => {
                                setInput(ev.target.value);
                            }} />
                        </Col>
                        <Col>
                            <Form.Select value={category} onChange={(ev) => {
                                setCategory(ev.target.value);
                            }}>
                                <option value="">{lang === "EN" ? "All categories" : "Bütün kateqoriyalar"}</option>
                                {categories.map((c, index) =>
                                    <option key={index} value={c.slug}>{c.name}</option>)}
                            </Form.Select>
                        </Col>
                    </Row>
                </Container>
            </Form>
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col sm={2}>
                        <Link className={`btn ${colorMode === "dark" ? "btn-light" : "btn-dark"} mt-5`} to="/">Server-Side</Link>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Container className='mt-5'>
                    {products.length > 0 ? (
                        <Row sm={1} md={2} lg={3} xl={4} className="g-5">
                            {(products.filter((p) => p.title.toLowerCase().includes(input.toLowerCase()) && (category !== "" ? p.category === category : true)).map((p) => {
                                console.log(p.category, category)
                                return (
                                    <Col key={p.id}>
                                        <Card style={{ width: '18rem' }} className='h-100'>
                                            <Card.Img variant="top" src={p.thumbnail} className='h-75 object-fit-contain' />
                                            <Card.Body>
                                                <Card.Title>{p.title}</Card.Title>
                                                <Card.Text>
                                                    {p.price} USD
                                                    {/* {currency === "usd" ?
                                                        `${p.price} USD` :
                                                        `${Math.round(p.price / usdToAznRate * 100) / 100} AZN`
                                                    } */}
                                                </Card.Text>
                                                <Link className={`btn ${colorMode === "dark" ? 'btn-light' : "btn-dark"}`} onClick={(ev) => {
                                                    ev.stopPropagation();
                                                }} to={`/product/${p.id}`}> {lang === "EN" ? "More" : "Daha çox"}</Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }))}
                        </Row>
                    ) : (
                        <Row>
                            <Col xs={12} className="text-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </Col>
                        </Row>
                    )}
                </Container>
            </Container>
        </>
    )
}

export default ClientSide;