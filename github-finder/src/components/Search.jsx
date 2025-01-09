import { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';


function Search({search}) {

  const [keyword, setKeyword] = useState("");

  const submit = (ev) => {
    ev.preventDefault();
    if (!keyword)
      alert("Enter a username");
    else{
      search(keyword);
      setKeyword("")
    }
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={3} className='text-center'>
        <Form onSubmit={(ev) => submit(ev)}>
          <InputGroup className="mt-4">
            <Form.Control value={keyword} onInput={(ev) => setKeyword(ev.target.value)} placeholder="Enter username"/>
            <Button type='submit' className='btn-light'>Search</Button>
          </InputGroup>
        </Form>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Search;