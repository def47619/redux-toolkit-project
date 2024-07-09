import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from "uuid";

import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { addUser } from './userSlice';


const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "", 
        email: ""
    });

    const handleAddUser = () => {
        setValues({name: "", email: ""});
        dispatch(addUser({
            id: uuidv4(), 
            name: values.name, 
            email: values.email
        }));
        navigate("/");
    };

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField 
                label="name"
                value={values.name}
                // 나머지는 놔두고 name만 새로 생성, 이미 있으면 변경 
                onChange={(e) => setValues({...values, name: e.target.value})} 
                inputProps={{type: "text", placeholder: "John Doe"}}
            />
            <br />
            <TextField 
                label="Email"
                value={values.email}
                onChange={(e) => setValues({...values, email: e.target.value})}
                inputProps={{type: "email", placeholder: "JohnDoe@mail.com"}}
            />
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    );
};

export default AddUser;