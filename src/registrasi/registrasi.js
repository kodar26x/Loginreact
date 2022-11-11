import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://jcc.brandingyou.id/api/register', {
                name: name,
                email: email,
                username: username,
                password: Password

            });
            history(-1);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div>

            <section className="d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    <div className="container">
                        <div className="bg-dark text-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '3000px' }}>
                            <div className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                                <h2 className="fw-bold mb-2 text-uppercase">Registrasi</h2>
                                <p className="text-white-50 mb-5">Selamat melakukan tugas</p>


                                <form onSubmit={Register} className="box">
                                    <p className="has-text-centered">{msg}</p>
                                    <div className="field mt-5">
                                        <label className="label">Nama</label>
                                        <div className="controls">
                                            <input type="text" className="w-100 text-black" placeholder="Name"
                                                value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field mt-5">
                                        <label className="label">Email</label>
                                        <div className="controls">
                                            <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field mt-5">
                                        <label className="label">Username</label>
                                        <div className="controls">
                                            <input type="text" className="input" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field mt-5">
                                        <label className="label">Password</label>
                                        <div className="controls">
                                            <input type="password" className="input" placeholder="******" value={Password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field mt-5">
                                        <button className="mx-2 px-5" color='black' size='lg'>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register;