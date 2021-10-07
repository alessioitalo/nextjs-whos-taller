import Navbar from "./Navbar";
import Footer from "./Footer";
import { StyledMain } from "./styled";

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <StyledMain>
        {children}
        </StyledMain>
        <Footer />
        </>
    );
}
 
export default Layout;