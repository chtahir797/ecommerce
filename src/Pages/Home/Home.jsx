import HeaderTop from "../../Components/Header/HeaderTop"
import Header from "../../Components/Header/Header"
import Nav from "../../Components/Header/Nav"
import Slider from "../../Components/Slider/Slider"
import Catagories from "../../Components/Catagories/Catagories"
import Service from "../../Components/Service/Service"
import Footer from "../../Components/Footer/Footer"
const Home =()=>{
    return (
        <>
            <HeaderTop />
            <Header />
            <Nav />
            <Slider />
            <Catagories />
            <Service />
            <Footer />
        </>
    )
}
export default Home