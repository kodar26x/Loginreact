import React, { useState, useEffect } from 'react'
import Nabur from '../navbar/Navbarlogout';
import  axios  from 'axios';
import Cardsaya from '../card/card';
import Imagedragon from '../inputgambar/inputimg';

const Dashboard = () => {

    const BASE_URL = 'https://jcc.brandingyou.id/api/'
    const token = localStorage.getItem('token')
    const [loadPost, setLoadPost] = useState([]);
    const getPost = () => {
        axios.get(`${BASE_URL}post`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

            //4-1
            .then(function (response) {
                // console.log(response);
                setLoadPost(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //5
    useEffect(() => {
        getPost();
        console.log(loadPost)
    }, [])
    const hapus = (id) => {
        axios.delete(`https://jcc.brandingyou.id/api/post/${id}`,{
            headers:{
                Authorization : `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });
    }


    return (
        <>
            <Nabur />
            <div className="container mt-5">
                <h1>Welcome Back: {JSON.parse(localStorage.getItem('user')).name}</h1>

                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{JSON.parse(localStorage.getItem('user')).name}</td>
                            <td>{JSON.parse(localStorage.getItem('user')).email}</td>
                        </tr>
                    </tbody>
                </table>
                <Imagedragon/>
                    <div>

                        {/* 6 */}
                        <div className="container">
                            <div className="row">
                                {
                                    loadPost.map(isiPost => {
                                        return <Cardsaya key={isiPost.id} id={isiPost.id} delet={hapus} nama={isiPost.author} title={isiPost.title} body={isiPost.content} img={isiPost.image} />
                                    })
                                }
                            </div>

                        </div>
                    </div>

                
            </div>
        </>
    )
}

export default Dashboard;