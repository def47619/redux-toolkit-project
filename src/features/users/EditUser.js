import React, {useState} from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from './userSlice';

const EditUser = () => {
    const params = useParams();
     // console.log(params.id); // 1
    const users = useSelector(store => store.users);
    // console.log(users);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);

    const {name, email} = existingUser[0];
    // console.log(name + email);

    const [values, setValues] = useState({
        name: name, 
        email: email
    });

    const handleEditUser = () => {
        setValues({name: "", email: ""});
        dispatch(editUser({
            id: params.id, 
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
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    );
};

export default EditUser;