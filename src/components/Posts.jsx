import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlog, setSeletedTBlog } from '../slices/blogSlices'
import { Link } from 'react-router-dom';
import { UpdateBlogComponent } from './UpdateBlogComponent';


export const Posts = () => {
   const { blogList } = useSelector((state) => state.blogs);
   const [editBlog, setEditBlog] = useState(false);


   const dispatch = useDispatch();

   const removeBlogBtn = (post) => {
      dispatch(removeBlog(post.id));
   }

   const updateBlogBtn = (post) => {
      setEditBlog(true);
      dispatch(setSeletedTBlog(post));
   }
   return (
      <Container>
         <Row >
            {
               (blogList.length > 0) ? blogList.map((post, index) => {
                  return (
                     <Col md={3} key={index}>
                        <CardGroup >
                           <Card className='my-5'>
                              <Card.Img variant="top" height={"250px"} width={"120px"} className='p-2' src={post.image} />
                              <hr />
                              <Card.Body style={{ height: "100px", overflow: "hidden" }}>
                                 <Card.Title>{post.title}</Card.Title>
                                 <Card.Text>{post.content}</Card.Text>
                              </Card.Body>
                              <Card.Footer className='d-flex justify-content-around'>
                                 <Button variant="secondary" onClick={() => updateBlogBtn(post)}>
                                    <i className="bi bi-pencil"></i>
                                 </Button>
                                 <Button variant="danger" onClick={() => removeBlogBtn(post)}>
                                    <i className="bi bi-trash3"></i>
                                 </Button>
                              </Card.Footer>
                           </Card>
                        </CardGroup>
                     </Col>
                  )
               })
                  :

                  <section className='text-center my-5'>
                     <h2 className='text-center text-info'>No Posts in your Page</h2>
                     <Link className='h3' to='/'>Create New Posts</Link>
                  </section>
            }
         </Row>
         <UpdateBlogComponent show={editBlog}
            onHide={() => setEditBlog(false)} />
      </Container >
   )
}
