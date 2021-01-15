import './App.css';
import Header from "./components/header/Header";
import MainContent from "./components/content/home_page/MainContent";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route} from "react-router-dom"
import Content from "./components/content/Content";


function App() {


    return (
        <BrowserRouter>

            <div className="wrapper">

                <Header/>

                <div className="content">
                    <Content/>
                </div>

                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;
