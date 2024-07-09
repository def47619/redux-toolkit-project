import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserList from "./features/users/UserList";
import Adduser from './features/users/AddUser';
import EditUser from './features/users/EditUser';

const App = () => {
    return (
        <h1 className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
            <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD with redux toolkit</h1>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/add-user" element={<Adduser />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
            </Routes>
        </h1>
    );
};

export default App;