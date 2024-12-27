import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Modal, Form, Button, Col, Container, Row, Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState({
    page: 1,
    limit: 8,
    category: "",
    searchInput: "",
    sort: "",
    order: "",
  });
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({products: [], total: 0});
  const [modal, setModal] = useState({data: {}, show: false})
  useEffect(() => {
    const url = 'https://dummyjson.com/products/categories';
    axios.get(url)
    .then(function (response) {
      setCategories(response.data);
      console.log(response);
    })
  }, []);

  useEffect(() => {
    const url = `https://dummyjson.com/products${state.category === ""?"":`/category/${state.category}`}${state.searchInput === ""?"":`/search`}?q=${state.searchInput}&limit=${state.limit}&skip=${(state.page-1)*state.limit}&select=id,title,price,thumbnail&sortBy=${state.sort}&order=${state.order}`
    axios.get(url)
    .then(function (response) {
      setProducts({products: response.data.products, total: response.data.total});
      console.log(response);
    })
  }, [state]);
  
  return (
    <>
    <Modal show={modal.show} onHide={() => setModal(prevState => ({...prevState, show: false}))}>
        <Modal.Header closeButton>
          <Modal.Title>{modal.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='w-100 object-fit-contain' src={modal.data.thumbnail} alt="product" />
          <p>{modal.data.description}</p>
          <p>{modal.data.price}$</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModal(prevState => ({...prevState, show: false}))}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Form className='mt-5'>
        <Container>
          <Row>
            <Col>
                <Form.Control type="text" value={state.searchInput} placeholder="Search" onInput={(ev) => {setState(prevState => ({
                                              ...prevState,
                                              searchInput: ev.target.value,
                                              page: 0,
                                              category: ""
                                            }));}}/>
            </Col>
            <Col>
              <Form.Select value={state.category} onChange={(ev) => {setState(prevState => ({
                                              ...prevState,
                                              searchInput: "",
                                              page: 0,
                                              category: ev.target.value
                                            }));}}>
                <option value="">All categories</option>
                {categories.map((c, index) => 
                <option key={index} value={c.slug}>{c.name}</option>)}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select defaultValue={state.sort} onChange={(ev) => {
                setState(prevState => ({
                  ...prevState,
                  sort: ev.target.value.split(";")[0],
                  order: ev.target.value.split(";")[1]
                }))
              }}>
                <option value="">Unsorted</option>
                <option value="price;desc">By Price (from highest)</option>
                <option value="price;asc">By Price (from lowest)</option>
                <option value="title;asc">By Name (from A-Z)</option>
                <option value="title;desc">By Name (from Z-A)</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select onChange={(ev) => {
                setState(prevState => ({
                  ...prevState,
                  page: 0,
                  limit: parseInt(ev.target.value)
                }))
              }}>
                <option value="8">8 items per page</option>
                <option value="16">16 items per page</option>
                <option value="24">24 items per page</option>
                <option value="32">32 items per page</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </Form>
      <Container className='mt-5'>
        <Row lg={4} className="g-5">
          {products.products.map(p => (
            <Col key={p.id}>
              <Card onClick={() => {
                console.log(1);
                
                axios.get(`https://dummyjson.com/products/${p.id}`)
                .then(function (response) {
                  setModal({data: response.data, show: true});
                  console.log(response);
                })
                setModal(prevState => ({...prevState, show: true}))
                }} style={{ width: '18rem'}} className='h-100'>
                <Card.Img variant="top" src={p.thumbnail} className='h-75 object-fit-contain'/>
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>
                    {p.price}$
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>)
          )}
        </Row>
      </Container>
      <Container className='my-5 w-75'>
        <Container className='w-25'>
          <Row className='row-cols-4 text-center justify-content-center g-3'>
            {Array.from({length: Math.ceil(products.total / state.limit)}, (_, index) => (
              <Col key={index}>
                <Button className='btn-light' onClick={() => setState(prevState => ({ ...prevState, page: index + 1 }))}>{index + 1}</Button>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default App
