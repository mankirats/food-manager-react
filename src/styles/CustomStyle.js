import styled from "styled-components";

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
export const HeaderContainer = styled(Container)`
    width: 100%;
    padding: 0.8rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px #070d59;
    font-size: 1rem;
    z-index: 2;
`;
export const Logo = styled(Container)`
    font-size: 1.3rem;
    font-family: cursive;
    font-weight: 500;
    letter-spacing: 1px;
    /* font-style: italic; */
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

export const HomeMealSummaryContainer = styled(Container)`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    background-color: none;
    justify-content: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.7);
    div:nth-child(2) {
        /* width: 60%; */
        text-align: justify;
    }
    margin: auto;
    padding: 0rem 2rem 1rem 2rem;
    border-radius: 10px;
`;
export const MealContainer = styled(Container)`
    border: 1px solid #070d59;
    border-radius: 5px;
    flex-direction: row;
    width: 45%;
    padding: 0 1rem 1rem 2rem;
    margin-top: 1rem;
`;
export const MealItemCartButton = styled.button`
    color: #525252;
    outline: none;
    border: 1px solid #070d59;
    background: none;
    padding: 0.7rem;
    border-radius: 7px;
    font-size: 0.9rem;
    transition: 0.6s;
    width: 100%;
    /* position: relative; */
    position: relative;
    transition: all 0.5s linear 0s; /* only transition top property */
    top: 0;
    &:hover {
        background: rgba(143, 202, 230, 0.6);
        border: 1px solid white;
    }
    &:active {
        top: -1px;
        /* width: calc(100% - 2px);
        height: calc(100% - 2px); */
    }
`;
export const MealPrice = styled.div`
    color: grey;
`;
