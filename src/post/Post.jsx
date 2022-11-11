import axios from "axios";
import { useEffect, useState } from "react";
import Cardsaya from "../card/card";

const Post = () => {

    //1
    const BASE_URL = 'https://jcc.brandingyou.id/api/'

    //3
    const token = localStorage.getItem('token')

    //4-2
    const [loadPost, setLoadPost] = useState([]); 
    
    //2
    const getPost = () =>{
        // console.log(user)
        // e.preventDefault();
        axios.get(`${BASE_URL}post`, {
            headers:{
                'Authorization' : `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
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

    return (
        <div>
            
            {/* 6 */}
            <div className="container">
            <div className="row">
            {
                loadPost.map(isiPost => {
                    return <Cardsaya key={isiPost.id} title={isiPost.title} body={isiPost.content} img={isiPost.image}/>
                })
            }
            </div>
            
            </div>
        </div>
    )
}

export default Post; 