import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Addform from "../components/Addfrom/Addform";
function Main(){
    return(
        <main>
            <Hero/>
            <Movies/>
            <Addform/>
        </main>
    );
}
function Home(){
    return(
        <div>
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    );
}


export default Home;