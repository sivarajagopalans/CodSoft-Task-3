import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addBlog } from '../slices/blogSlices';



export const BlogForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const formSumbmit = (e) => {
    e.preventDefault();
    dispatch(addBlog({ title, content, image }));
    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <div>
      <Container className='my-5'>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='h4'>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Blog Title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='h4'>Content</Form.Label>
                <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)}
                  rows={3} />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className='h4'>Image</Form.Label>
                <Form.Control type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
              </Form.Group>
              <div className='text-sm-end text-center my-5'>
                <Button variant="secondary" type="submit"
                  onClick={(e) => formSumbmit(e)}>
                  Submit
                </Button>
              </div>


            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
