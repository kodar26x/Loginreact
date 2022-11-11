import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'react-bootstrap'
import './Login.css'


const Login1 = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const respon = await axios.post('https://jcc.brandingyou.id/api/login', {
                username: username,
                password: password
            });
            localStorage.setItem("token", respon.data.data.token)
            localStorage.setItem("user", JSON.stringify(respon.data.data.user))
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <div className="container">
                    <div className="bg-dark text-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                        <div className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className="text-white-50 mb-5">Please enter your login and password!</p>


                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    {/* <label className="label">Username</label> */}
                                    <div className="controls">
                                        <input type="text" className="w-100" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    {/* <label className="label">Password</label> */}
                                    <div className="controls">
                                        <input type="password" className="w-100" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="mx-2 px-5" color='white' size='lg'>Login</button>
                                </div>
                                <div>
                                    <p>silahkan untuk melakukan <Link to="/register">Registrasi</Link></p>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login1;