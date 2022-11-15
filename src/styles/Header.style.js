import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 0.8rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px #070d59;
    font-size: 1rem;
    z-index: 2;
`;

export const Logo = styled.div`
    font-size: 1.3rem;
    font-family: cursive;
    font-weight: 500;
    letter-spacing: 1px;
    /* font-style: italic; */
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${(props) => props.column && "column"};
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    width: ${(props) => props.width || "auto"};
    padding: ${(props) => props.padding};
    z-index: 2;
`;

export const CarouselImage = styled.img`
    position: relative;
    width: 100%;
    height: 500px;
`;
export const HeaderCartContainer = styled.button`
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
export const HeaderCartImage = styled.img`
    width: 25px;
    height: 25px;
`;
export const HeaderCartItems = styled.span`
    position: absolute;
    font-size: 1.1rem;
    top: -7px;
    right: -10px;
    min-width: 1.5rem;
    padding: 0.2rem;
    background-color: #8fcae6;
    font-weight: 400;
    border-radius: 40px;
`;
