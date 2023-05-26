import Footer from "../components/Footer";
import Header from "../components/guests/Header";
import Content from "../components/guests/Content";
import TopTen from "../components/guests/TopTen";
import NavBar from "../components/guests/Navbar";

export default function Home() {
    return (
        <>
        <div>
            <div className="sticky top-0 z-50">
                <NavBar />
            </div>
            <div>
                <Header />
            </div>
            <div>
                <TopTen />
            </div>
            <div>
                <Content />
            </div>
            <div>
                <Footer />
            </div>
        </div> 
        </>
    )
}