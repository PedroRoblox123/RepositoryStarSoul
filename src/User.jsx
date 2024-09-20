import { Outlet } from 'react-router-dom'
import Header from './components/common/Header/index.jsx'
import Footer from './components/common/Footer/index.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx';


function User() {
    return (
        <div>
            <ScrollToTop />
                <Header/>
                    <Outlet />
                <Footer />
        </div>
    )
}

export default User