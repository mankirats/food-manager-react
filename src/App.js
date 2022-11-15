import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Carousel from "./UI/Carousel";
import HomeMealSummary from "./UI/HomeMealSummary";
function App() {
    return (
        <div className="App">
            <Header></Header>
            <Carousel></Carousel>
            <HomeMealSummary></HomeMealSummary>
            <Meals width="100%"></Meals>
        </div>
    );
}

export default App;
