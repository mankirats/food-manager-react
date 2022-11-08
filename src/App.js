import Header from "./Layout/Header";
import Carousel from "./UI/Carousel";
import HomeMealSummary from "./UI/HomeMealSummary";
function App() {
    return (
        <div className="App">
            <Header></Header>
            <Carousel></Carousel>
            <HomeMealSummary></HomeMealSummary>
        </div>
    );
}

export default App;
