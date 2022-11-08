import React from "react";
import {
    HeaderCartContainer,
    HeaderCartImage,
    HeaderCartItems,
} from "../CustomStyle";
import CartIcon from "../assets/Cart1.png";
const HeaderCart = (props) => {
    return (
        <HeaderCartContainer>
            <HeaderCartImage src={CartIcon}></HeaderCartImage>
            <span>&nbsp;CART</span>
            <HeaderCartItems>32</HeaderCartItems>
        </HeaderCartContainer>
    );
};

export default HeaderCart;
