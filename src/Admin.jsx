import { Outlet } from 'react-router-dom';
import AdminSidebar from './pages-adimin/Navbar';
import './styles/stylesadmin.css';

function Admin() {
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
