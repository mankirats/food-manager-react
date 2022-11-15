import HeaderCart from "../Cart/HeaderCart";
import { Container, HeaderContainer, Logo } from "../styles/Header.style";
const Header = (props) => {
    return (
        <HeaderContainer>
            <Logo>Logo</Logo>
            <Container width="14rem" justify="space-between">
                <HeaderCart>Cart</HeaderCart>
                <span>Account</span>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
