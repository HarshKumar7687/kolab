import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router-dom';

function Home() {
    const [roomId,setRoomId] = useState("");
    const [username,setUsername] = useState("");
    const navigate = useNavigate();

    const generateRoomId = (e)=>{
        e.preventDefault();
        const id = uuid();
        setRoomId(id);
        toast.success("New Room Created");
    }

    const joinRoom = ()=>{
        if(!roomId || !username){
            toast.error("Room Id and Username both are required!");
            return;
        }
        navigate(`/editor/${roomId}`,{state: {username}});
        toast.success(`${username} joined the room!`);
    }
  return (
    <div className='container-fluid p-0 overflow-hidden'>
        <div className='row justify-content-center align-items-center min-vh-100'>
          <div className='col-12 col-md-6'>
            <div className='card shadow-sm p-2 mb-5 bg-secondary rounded'>
                <div className='card-body text-center bg-dark'>
                    <img src="/kolab.png" alt="Kolab" className='img-fluid mx-auto d-block' style={{ maxWidth: '180px' }} />
                    <h1 className='text-light'>Welcome to Kolab</h1>
                    <div className='form-group'>
                        <input value={roomId} onChange={(e)=>setRoomId(e.target.value)} type="text" className='form-control form-control-lg mb-2' placeholder='Enter Room ID' />
                    </div>
                    <div className='form-group'>
                        <input value={username} onChange={(e)=>setUsername(e.target.value) } type="text" className='form-control form-control-lg mb-2' placeholder='Enter Username' />
                    </div>
                    <button onClick={joinRoom} className='btn btn-success btn-lg btn-block'>JOIN</button>
                    <p className='text-light mt-3'>Don't have a room id? {" "}<span className="text-success p-2" style={{ cursor: 'pointer' }} onClick={generateRoomId}>New Room!</span></p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
