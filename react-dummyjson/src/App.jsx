import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form, Button, Col, Container, Row, Card } from 'react-bootstrap';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import { LangContext } from './context/LangContext';
import ControlPanel from './components/ControlPanel';
import { ColorModeContext } from './context/ColorModeContext';
import { CurrencyContext } from './context/CurrencyContext';
import CurrencyAPI from '@everapi/currencyapi-js';
import ClientSide from './components/ClientSide';
import Cart from './components/Cart';
import { useCart } from 'react-use-cart';

function App() {

  const { addItem } = useCart();

  const [state, setState] = useState({
    page: 1,
    limit: 8,
    category: "",
    searchInput: "",
    sort: "",
    order: "",
  });

  const [usdToAznRate, setUsdToAznRate] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({ products: [], total: 0 });
  const [modal, setModal] = useState({ data: {}, show: false })

  const lang = useContext(LangContext)[0];
  const colorMode = useContext(ColorModeContext)[0];
  const currency = useContext(CurrencyContext)[0]

  useEffect(() => {
    const url = 'https://dummyjson.com/products/categories';
    axios.get(url)
      .then(function (response) {
        setCategories(response.data);
        console.log(response);
      })
  }, []);

  useEffect(() => {
    const client = new CurrencyAPI({/*'cur_live_wFeoVDQippnLsVZw27pMvmUFQJluzzfrE5edPeNT'*/ })
    client.latest({
      base_currency: 'USD',
      currencies: 'AZN'
    }).then(response => {
      setUsdToAznRate(response.data.AZN.value);
    });
  }, [])

  useEffect(() => {
    const url = `https://dummyjson.com/products${state.category === "" ? "" : `/category/${state.category}`}${state.searchInput === "" ? "" : `/search`}?q=${state.searchInput}&limit=${state.limit}&skip=${(state.page - 1) * state.limit}&select=id,title,price,thumbnail&sortBy=${state.sort}&order=${state.order}`
    axios.get(url)
      .then(function (response) {
        setProducts({ products: response.data.products, total: response.data.total });
        console.log(response);
      })
  }, [state]);

  return (
    <BrowserRouter>
      <ControlPanel></ControlPanel>
      <Routes>
        <Route path="/" element={
          <>
            <Modal show={modal.show} onHide={() => setModal(prevState => ({ ...prevState, show: false }))}>
              <Modal.Header closeButton>
                <Modal.Title>{modal.data.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img className='w-100 object-fit-contain' src={modal.data.thumbnail} alt="product" />
                <p>{modal.data.description}</p>
                <p>{Math.round(modal.data.price * (currency === "usd" ? 1 : 0.588) * 100) / 100}{currency === "usd" ? " USD" : " AZN"}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setModal(prevState => ({ ...prevState, show: false }))}>
                  {lang === "EN" ? "Close" : "Bagla"}
                </Button>
              </Modal.Footer>
            </Modal>
            <Form className='mt-5'>
              <Container>
                <Row>
                  <Col>
                    <Form.Control type="text" value={state.searchInput} placeholder={lang === "EN" ? "Search" : "Axtar"} onInput={(ev) => {
                      setState(prevState => ({
                        ...prevState,
                        searchInput: ev.target.value,
                        page: 0,
                        category: ""
                      }));
                    }} />
                  </Col>
                  <Col>
                    <Form.Select value={state.category} onChange={(ev) => {
                      setState(prevState => ({
                        ...prevState,
                        searchInput: "",
                        page: 0,
                        category: ev.target.value
                      }));
                    }}>
                      <option value="">{lang === "EN" ? "All categories" : "Bütün kateqoriyalar"}</option>
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
                      <option value="">{lang === "EN" ? "Unsorted" : "Çeşidlənməmiş"}</option>
                      <option value="price;desc">{lang === "EN" ? "By Price (from highest)" : "Qiymətə görə (ən yüksəkdən)"}</option>
                      <option value="price;asc">{lang === "EN" ? "By Price (from lowest)" : "Qiymətə görə (ən aşağıdan)"}</option>
                      <option value="title;asc">{lang === "EN" ? "By Name (from A to Z)" : "Ada görə (A-dan Z-yə)"}</option>
                      <option value="title;desc">{lang === "EN" ? "By Name (from Z to A)" : "Ada görə (Z-dən A-ya)"}</option>
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
                      <option value="8">8 {lang === "EN" ? "items per page" : "səhifə başına maddələr"}</option>
                      <option value="16">16 {lang === "EN" ? "items per page" : "səhifə başına maddələr"}</option>
                      <option value="24">24 {lang === "EN" ? "items per page" : "səhifə başına maddələr"}</option>
                      <option value="32">32 {lang === "EN" ? "items per page" : "səhifə başına maddələr"}</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Container>
            </Form>
            <Container>
              <Row className='mt-4 justify-content-center text-center'>
                <Col xs={3}>
                  <Link className={`btn ${colorMode === "dark" ? "btn-light" : "btn-dark"}`} to="/client-side">Client-Side</Link>
                </Col>
              </Row>
              <Row className='mt-4 justify-content-center text-center'>
                <Col xs={3}>
                  <Link className={`btn ${colorMode === "dark" ? "btn-light" : "btn-dark"}`} to="/cart">Cart</Link>
                </Col>
              </Row>
            </Container>
            <Container className='mt-5'>
              <Row sm={1} md={2} lg={3} xl={4} className="g-5">
                {products.products.map(p => (
                  <Col key={p.id}>
                    <Card onClick={() => {
                      axios.get(`https://dummyjson.com/products/${p.id}`)
                        .then(function (response) {
                          setModal({ data: response.data, show: true });
                          console.log(response);
                        })
                      setModal(prevState => ({ ...prevState, show: true }))
                    }} style={{ width: '18rem' }} className='h-100'>
                      <Card.Img variant="top" src={p.thumbnail} className='h-75 object-fit-contain' />
                      <Card.Body>
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Text>
                          {currency === "usd" ?
                            `${p.price} USD` :
                            `${Math.round(p.price / usdToAznRate * 100) / 100} AZN`
                          }
                        </Card.Text>
                        <Link className={`btn ${colorMode === "dark" ? 'btn-light' : "btn-dark"}`} onClick={(ev) => {
                          ev.stopPropagation();
                        }} to={`/product/${p.id}`}> {lang === "EN" ? "More" : "Daha çox"}</Link>
                        <Button className={`ms-2 btn ${colorMode === "dark" ? 'btn-light' : "btn-dark"}`} onClick={(ev) => {
                          ev.stopPropagation();
                          addItem(p);
                        }}>Add to cart</Button>
                      </Card.Body>
                    </Card>
                  </Col>)
                )}
              </Row>
            </Container>
            <Container className='my-5 w-75'>
              <Container className='w-25'>
                <Row className='row-cols-4 text-center justify-content-center g-3'>
                  {Array.from({ length: Math.ceil(products.total / state.limit) }, (_, index) => (
                    <Col key={index}>
                      <Button className={colorMode === "dark" ? 'btn-light' : "btn-dark"} onClick={() => setState(prevState => ({ ...prevState, page: index + 1 }))}>{index + 1}</Button>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Container>
          </>}>
        </Route>
        <Route path='/product/:id' element={<ProductPage></ProductPage>}></Route>
        <Route path='/client-side' element={<ClientSide></ClientSide>}></Route>
        <Route path="*" element={
          <>
            <Container className='text-center mt-5'>
              <Row>
                <Col>
                  <h1>404</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/">Go Back</Link>
                </Col>
              </Row>
            </Container>
          </>
        }>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}>
        </Route>
      </Routes>
    </ BrowserRouter>
  )
}

export default App