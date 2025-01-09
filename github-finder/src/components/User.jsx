import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function User({data}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.avatar_url} />
      <Card.Body>
        <Card.Title>{data.login}</Card.Title>
        <Card.Text>
            
        </Card.Text>
        <Button href={data.html_url} variant="light">Go to profile</Button>
      </Card.Body>
    </Card>
  )
}

export default User;