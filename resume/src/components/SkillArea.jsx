import { Card, Col, Container, Row } from "react-bootstrap";

function SkillArea({src, title, text}){
    return (
        
        <Card className="text-center pt-3">
        <Container>
            <Row className="justify-content-center">
                <Col className="rounded-3" xs={4} style={{backgroundColor: "rgb(55,74,74)"}}>
                    <img src={src} alt={text} />
                </Col>
            </Row>
        </Container>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default SkillArea