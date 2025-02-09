import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { add, update, remove } from './tools/slices/todoSlice';
import Swal from "sweetalert2";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

function App() {

  let data = useSelector(store => store.todo.todos);
  const dispatch = useDispatch();
  const inputAddRef = useRef();
  const [updateInfo, setUpdateInfo] = useState({
    id: -1,
    value: ""
  });

  const formAdd = (ev) => {
    ev.preventDefault();
    if (!inputAddRef.current.value) {
      Swal.fire({
        title: "Empty input",
        text: "Please fill the input!",
        icon: "error"
      });
    } else {
      dispatch(add(inputAddRef.current.value));
      inputAddRef.current.value = "";
    }
  }

  const formUpdate = (ev, id) => {
    ev.preventDefault();
    const item = {
      ...Object.fromEntries(new FormData(ev.target).entries()),
      id: id,
    }
    if (item.title == "") {
      Swal.fire({
        title: "Empty input",
        text: "Please fill the input!",
        icon: "error"
      });
    } else {
      dispatch(update(item));
      setUpdateInfo({ id: -1, value: "" });
    }
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center my-5 text-center">
        <Col xs={6}>
          <Form onSubmit={formAdd}>
            <Form.Control className="mb-3" ref={inputAddRef} type="text"></Form.Control>
            <Button type="submit">Add</Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-5">
        <Col xs={6}>
          <Container fluid className="px-0">
            {data.map((item) => (
              <Row key={item.id} className="justify-content-center align-items-center">
                <Col xs={8}>
                  <div className="border rounded p-2 my-2 d-flex align-items-center w-100" style={{ height: 38, fontSize: 19 }}>
                    {item.title}
                  </div>
                </Col>
                <Col xs={2}>
                  <Button onClick={() => setUpdateInfo({ id: item.id, value: "" })}>Update</Button>
                </Col>
                <Col xs={2}>
                  <Button variant="danger" onClick={() => dispatch(remove(item.id))}>Delete</Button>
                </Col>
                <Col className={`${updateInfo.id != item.id ? "d-none" : ""}`} xs={12}>
                  <Form onSubmit={(ev) => formUpdate(ev, item.id)}>
                    <Form.Control name="title" onChange={(ev) => setUpdateInfo({id: item.id, value: ev.target.value})} value={updateInfo.value} className="mb-3" type="text"></Form.Control>
                    <Button type="submit">Submit</Button>
                    <Button className="ms-2" variant="secondary" type="button" onClick={() => setUpdateInfo({ id: -1, value: "" })}>Cancel</Button>
                  </Form>
                </Col>
              </Row>
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App
