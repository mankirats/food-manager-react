import React from "react";
import {
    Container,
    HeaderCartItems,
    MealContainer,
    MealItemCartButton,
    MealPrice,
} from "../styles/CustomStyle";

const MealItem = (props) => {
    return (
        <MealContainer>
            <Container column width="75%" align="baseline">
                <div>
                    <h3>{props.mealTitle}</h3>
                </div>
                <div>
                    <span>{props.mealDesc}</span>
                </div>
            </Container>
            <Container column width="25%">
                <MealPrice>
                    <h3>&#8377; {props.price}</h3>
                </MealPrice>
                <MealItemCartButton>
                    {props.price ? "ADD TO CART" : ""}
                </MealItemCartButton>
            </Container>
        </MealContainer>
    );
};

export default MealItem;
