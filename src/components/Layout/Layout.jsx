import "./Layout.css"; 
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

const Layout = ({children}) => {
    return (
        <div className="main">
            <Header/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
