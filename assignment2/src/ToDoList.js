import React from 'react';
import { ListGroup, Button, Form, Container, Row, Col, Tab } from 'react-bootstrap';
import "./ToDoList.css"

function TodoList() {
  const todos = [
    { title: 'Todo 1', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`, dueDate: '2024-10-03' },

    { title: 'Todo 2', description: `Sed auctor nunc nec nisi ultrices, in molestie nibh mattis. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Suspendisse potenti. Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. 
    Vivamus nec nisi nec nunc mattis molestie. Sed auctor nunc nec nisi ultrices, in molestie nibh mattis.`, dueDate: '2024-09-17' },

    { title: 'Todo 3', description: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Suspendisse potenti. Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. Vivamus nec nisi nec nunc mattis molestie. 
    Sed auctor nunc nec nisi ultrices, in molestie nibh mattis. Pellentesque habitant morbi tristique 
    senectus et netus et malesuada fames ac turpis egestas.`, dueDate: '2024-09-15' },

    { title: 'Todo 4', description: `Suspendisse potenti. Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. 
    Vivamus nec nisi nec nunc mattis molestie. Sed auctor nunc nec nisi ultrices, in molestie nibh mattis. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. 
    Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. `, dueDate: '2024-09-13' },
  ];

  const getVariant = (dueDate) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));

    if (diffDays < 2) {
      return 'danger';
    } else if (diffDays < 4) {
      return 'warning';
    } else if (diffDays < 7) {
      return 'success';
    } else {
      return 'primary';
    }
  };

  return (
    <Container className="p-3">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center">Assignment 2: ToDo List</h1>
        </Col>
      </Row>
      <Row className="d-flex align-items-start">
        <Col md={4} className="form-container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicToDo">
              <Form.Label>ToDo Item</Form.Label>
              <Form.Control type="text" placeholder="Add todo item" className="p-2" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" className="p-2" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
                Add Todo
            </Button>
          </Form>
        </Col>
        <Col md={8}>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {todos.map((todo, index) => (
                    <ListGroup.Item action href={`#link${index+1}`} key={index} variant={getVariant(todo.dueDate)} className="mb-2">
                      <div>{todo.title}</div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {todos.map((todo, index) => (
                    <Tab.Pane eventKey={`#link${index+1}`} key={index}>
                      <p contentEditable className="mb-2">{todo.description}</p>
                      <input type="date" defaultValue={todo.dueDate} className="p-2" />
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;