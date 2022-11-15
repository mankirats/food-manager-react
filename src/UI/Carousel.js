import React from "react";
import backImg from "../assets/back.jpg";
import { CarouselImage } from "../styles/CustomStyle";
const Carousel = (props) => {
    return (
        <div>
            <CarouselImage src={backImg} alt="" srcset="" />
        </div>
    );
};

export default Carousel;
