import { Card, Container, Row, Col } from "react-bootstrap";

function BlogCard({src, children}) {
    return (
        <Card className="border-0">
            <Card.Img variant="top" src={src} />
            <Container className="ps-3">
                <Row className="justify-contnet-between">
                    <Col><span>UI/UX</span></Col>
                    <Col className="text-end"><span>3 min read</span></Col>
                </Row>
            </Container>
            <Card.Body className="ps-3">
                <Card.Title>{children}</Card.Title>
            </Card.Body>
            <Container className="ps-3">
                <Row className="justify-contnet-between">
                    <Col>
                        <img src="https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img5.png" alt="profile picture" />
                        <span>Alex Carry</span>
                    </Col>
                    <Col className="text-end"><span>Oct 26, 2024</span></Col>
                </Row>
            </Container>
        </Card>
    )
}

export default BlogCard;