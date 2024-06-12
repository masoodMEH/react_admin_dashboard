import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './footer';
import Sidebar from './sidebar';
import TopNav from './top-nav';

const MainLayout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    if (!token) {
        navigate('/login');
    }
    return (
        <div className="wrapper" style={{ minHeight: '100h' }}>
            <Sidebar />
            <div className="main">
                <TopNav />
                <main className="content">
                    <div className="p-0 container-fluid">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
