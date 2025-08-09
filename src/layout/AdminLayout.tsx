import React from 'react';
import { Outlet } from 'react-router';

const AdminLayout = () => {
    return (
        <div>
            <h1>this is an admin layout</h1>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;