import HeaderCart from "../Cart/HeaderCart";
import { Container, HeaderContainer, Logo } from "../CustomStyle";
const Header = (props) => {
    return (
        <HeaderContainer>
            <Logo>Logo</Logo>
            <Container>
                <HeaderCart>Cart</HeaderCart>
                <span>Account</span>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
