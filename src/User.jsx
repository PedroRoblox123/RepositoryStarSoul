import { Outlet } from 'react-router-dom'
import Header from './components/common/Header/index.jsx'
import Footer from './components/common/Footer/index.jsx'
import useScrollToTop from './components/common/ScrollToTop';


function User() {
    useScrollToTop(); // Chame o hook aqui

    return (
        <div>
                <Header/>
                    <Outlet />
                <Footer />
        </div>
    )
}

export default User