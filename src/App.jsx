import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './shared/ScrollToTop';


function App() {
    return (
        <div>
            <ScrollToTop />
                <Header/>
                    <Outlet />
                <Footer />
        </div>
    )
}

export default App