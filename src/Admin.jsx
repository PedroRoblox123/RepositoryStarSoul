import { Outlet } from 'react-router-dom';
import AdminSidebar from './backoffice/AdminSidebar';
import React, { useEffect } from 'react';
import './styles/backoffice.css';

function Admin() {

    useEffect(() => {
        document.body.classList.add('admin-page');
        
        return () => {
          document.body.classList.remove('admin-page');
        };
      }, [])

    return (
        <div className='admin'>
            <AdminSidebar />

            <main className="admin-layout__content" id='admin-content'>
                <Outlet />
            </main>
        </div>

    );
}

export default Admin;
