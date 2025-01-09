import User from './User';
import { Col, Container, Row } from 'react-bootstrap';


function Users({users}) {

  return (
    <Container className='mt-4'>
        <Row xs={1} md={2} lg={3} xxl={4} className='g-4'>
            {users.map(u => (
                <Col key={u.id}>
                    <User data={u}></User>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Users;