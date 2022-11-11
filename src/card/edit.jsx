import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Alert } from 'bootstrap';

function EditPost() {
    const token = localStorage.getItem('token')
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [validation, setValidation] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {

        //panggil function "getPostById"
        getPostById();

    }, []);

    const updatePost = () => {
        navigate("/")


    }

    const getPostById = async () => {

        //get data from server
        const response = await axios.get(`https://jcc.brandingyou.id/api/post/${id}`, {
            
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
             });
        //get response data
        const data = await response.data.data
        

        //assign data to state
        setTitle(data.title);
        setContent(data.content);

    };

    const editPost = async (e) => {
        e.preventDefault();

        await axios.post(`https://jcc.brandingyou.id/api/post/${id}` , {
            title: title,
            content: content
        },{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        } )
        navigate("../dashboard")
    }
    return (
        <Container className="mt-3" >
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>

                            {
                                validation.errors &&
                                <Alert variant="danger">
                                    <ul class="mt-0 mb-0">
                                        {validation.errors.map((error, index) => (
                                            <li key={index}>{`${error.param} : ${error.msg}`}</li>
                                        ))}
                                    </ul>
                                </Alert>
                            }

                            <Form onSubmit={updatePost}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TITLE</Form.Label>
                                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={editPost}>
                                    UPDATE
                                </Button>
                                <Button variant="primary" type="submit" onClick={() => navigate(-1)} >
                                    BACK
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default EditPost;