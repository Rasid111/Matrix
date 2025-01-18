import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { LangContext } from "../context/LangContext";
import { ColorModeContext } from "../context/ColorModeContext";

function Cart() {

    const lang = useContext(LangContext)[0];
    const colorMode = useContext(ColorModeContext)[0];

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return (
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Link className={`btn ${colorMode === "dark" ? "btn-light" : "btn-dark"} mt-5`} to="/">{lang === "EN" ? "Back" : "Dala"}</Link>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Row className="mt-5 text-center">
                <Col>
                    <h1>You cart is empty</h1>
                </Col>
            </Row>
        </Container>
    );

    return (
        <>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Link className={`btn ${colorMode === "dark" ? "btn-light" : "btn-dark"} mt-5`} to="/">{lang === "EN" ? "Back" : "Dala"}</Link>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <Row className="mt-5">
                    {(items.map((p) => {
                        return (
                            <Col key={p.id}>
                                <Card>
                                    <Row>
                                        <Col xs={3}>
                                            <Card.Img style={{ height: 200 }} className="object-fit-contain" variant="top" src={p.thumbnail} />
                                        </Col>
                                        <Col>
                                            <Card.Body>
                                                <Card.Title>{p.title}</Card.Title>
                                                <Card.Text>
                                                    {`${p.price} USD`}
                                                    {/* {currency === "usd" ?
                                                        `${p.price} USD` :
                                                        `${Math.round(p.price / usdToAznRate * 100) / 100} AZN`
                                                    } */}
                                                </Card.Text>
                                                <Card.Text>
                                                    {p.quantity} in cart
                                                </Card.Text>
                                                <Button className={`btn ${colorMode === "dark" ? 'btn-light' : "btn-dark"}`} onClick={(ev) => {
                                                    updateItemQuantity(p.id, (p.quantity ?? 0) - 1)
                                                }}>-1 from cart</Button>
                                                <Button className={`ms-2 btn ${colorMode === "dark" ? 'btn-light' : "btn-dark"}`} onClick={(ev) => {
                                                    updateItemQuantity(p.id, (p.quantity ?? 0) + 1)
                                                }}>+1 to cart</Button>
                                                <Button className={`ms-2 btn ${colorMode === "dark" ? 'btn-light' : "btn-dark"}`} onClick={(ev) => {
                                                    removeItem(p.id)
                                                }}>Remove from cart</Button>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                    }))}
                </Row>
            </Container>
        </>
    );
}

export default Cart;