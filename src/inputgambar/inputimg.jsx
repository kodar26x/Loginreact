import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react'


function Imagedragon() {
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const Auth = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('content',content)
            formData.append('image',image)
            const respon = await axios.post('https://jcc.brandingyou.id/api/post', formData,{
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            // localStorage.setItem("token", respon.data.data.token)
            // localStorage.setItem("user", JSON.stringify(respon.data.data.user))
            navigate("/Dashboard");
        } catch (error) {
            if (!this.state.isNgedit) {
                // setMsg(error.response.data.msg);
            }
            else {
                axios.put(`https://jcc.brandingyou.id/api/post/${this.title.body.id}`, this.state.datapost)
                    .then(res => {
                        this.setState({
                            isNgedit:false
                        })
                        this.getdata()
                    })
            }
        }
    
    }

    
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlFile" >
                <Form.Label>input gambar</Form.Label>
                <input type="file"className="mb-3" onChange={(e) => setImage(e.target.files[0])}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>nama barang</Form.Label>
                <Form.Control type="text" placeholder="masukan nama barang" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>detail barang</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="masukan detail"value={content} onChange={(e) => setcontent(e.target.value)}/>
            </Form.Group>
            <button className="button is-success is-fullwidth" onClick={e=> Auth(e)}>enter</button>
        </Form>

        
            );
}

export default Imagedragon;