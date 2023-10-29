import './App.css';
import Navigation from "./components/Navigation";
import ContainerFluid from "./components/Container-Fluid";
import MainContainer from "./components/Main-Container";
import Tickets from "./components/Tickets";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <ContainerFluid/>
            <MainContainer/>

            <Tickets/>

            <div className="container">
                <Schedule/>
            </div>

            <Footer/>
        </div>
    )
}


export default App;