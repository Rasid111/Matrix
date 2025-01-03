import { Card, Container, Row, Col } from "react-bootstrap"

function Review({text, src, name, idk}) {
    return (
        <Card className="h-100">
            <Card.Body>
                <Container fluid className="p-0">
                    <Row className="justify-content-between">
                        <Col>
                            <Card.Title style={{fontSize: 30}}>* * * * *</Card.Title>
                        </Col>
                        <Col>
                            <Card.Title style={{fontSize: 30}} className="text-end">``</Card.Title>
                        </Col>
                    </Row>
                </Container>
                <Card.Text style={{fontSize: 17}}>{text}</Card.Text>
                <Container>
                    <Row className="align-items-center">
                        <Col className="p-0" xs={2}>
                            <img className="rounded-5" src={src} alt="profile picture" />
                        </Col>
                        <Col xs={10}>
                            <Container fluid>
                                <Row xs={1}>
                                    <Col>
                                        <h4>{name}</h4>
                                    </Col>
                                    <Col>
                                        <span>{idk}</span>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default Review