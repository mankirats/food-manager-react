import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 14rem;
    z-index: 2;
`;
const HeaderContainer = styled(Container)`
    width: 100%;
    padding: 0.8rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px #070d59;
    font-size: 1rem;
    z-index: 2;
`;
const Logo = styled(Container)`
    font-size: 1.3rem;
    font-family: cursive;
    font-weight: 500;
    letter-spacing: 1px;
    /* font-style: italic; */
`;

const CarouselImage = styled.img`
    position: relative;
    width: 100%;
    height: 500px;
`;
const HeaderCartContainer = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    padding: 0.7rem;
    border-radius: 10px;
    background: none;
    outline: none;
    border: 1px solid #070d59;
    font-size: 1rem;
    letter-spacing: 0.5px;
`;
const HeaderCartImage = styled.img`
    width: 25px;
    height: 25px;
`;
const HeaderCartItems = styled.span`
    position: absolute;
    font-size: 1.1rem;
    top: -5px;
    right: -5px;
    width: 1.2rem;
    background-color: #8fcae6;
    font-weight: 400;
    border-radius: 25px;
`;
export {
    HeaderContainer,
    Container,
    Logo,
    CarouselImage,
    HeaderCartContainer,
    HeaderCartImage,
    HeaderCartItems,
};
