import Content from "./main-container-components/Content";
import Speakers from "./main-container-components/Speakers";

function MainContainer() {
    return (
        <div className="container">
            <Content/>
            <Speakers/>
        </div>
    )
}

export default MainContainer;