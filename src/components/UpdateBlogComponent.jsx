import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { updateBlog } from '../slices/blogSlices';
import { useDispatch, useSelector } from 'react-redux';

export const UpdateBlogComponent = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [id, setId] = useState(0);

    const { selectedBlog } = useSelector((state) => state.blogs);


    const dispatch = useDispatch();


    const submitEdit = (e) => {
        e.preventDefault();
        props.onHide();
        dispatch(updateBlog({ id, title, content, image }));
        console.log("Blog updated");
    }

    useEffect(() => {
        if (Object.keys(selectedBlog).length !== 0) {
            setTitle(selectedBlog.title);
            setContent(selectedBlog.content);
            setImage(selectedBlog.image);
            setId(selectedBlog.id);
        }
    }, [selectedBlog])
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Blog
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="my-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='h4 mb-4'>Blog Title</Form.Label>
                            <Form.Control type="text" value={title}
                                onChange={(e) => setTitle(e.target.value)} placeholder="Enter Update Title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='h4 mb-4'>Blog Content</Form.Label>
                            <Form.Control type="text" value={content}
                                onChange={(e) => setContent(e.target.value)} placeholder="Enter Update Content" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit"
                        onClick={(e) => submitEdit(e)}>
                        update
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
