import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "../assets/css/bigclass.css";
import "../assets/css/index.css";

const Layout = ({ children }) => {
    const [showSide, setShowSide] = React.useState(false);
    const toggleSide = () => setShowSide(!showSide);
    return (  
        <>
            <Navbar toggleSide={toggleSide} />
            {children}
            <Footer />
            <Sidebar showSide={showSide} toggleSide={toggleSide} />
        </>
    );
}
 
export default Layout;