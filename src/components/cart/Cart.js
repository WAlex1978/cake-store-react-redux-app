import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'shards-react';
import Styled from '../../styled-components/Styled';

import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CartFooter from './CartFooter';

class Cart extends Component {
    render() { 
        return (
            <Fragment>

                {/* Header section */}
                <Styled.Section top="60px">
                    <Styled.Wrapper width="75%">

                        {/* Continue shopping button */}
                        {/* Links back to main page */}
                        <Link to="/"><Button size="lg" theme="null">{"<"} Continue Shopping</Button></Link>

                    </Styled.Wrapper>
                </Styled.Section>

                {/* Table section for shopping cart */}
                <Styled.Section top="20px">
                    <Styled.Wrapper width="70%">

                        {/* Container from Shards-React */}
                        {/* Renders three seperate components */}
                        <Container fluid>
                            <CartHeader />
                            <CartItems />
                            <CartFooter />
                        </Container>

                    </Styled.Wrapper>
                </Styled.Section>
            </Fragment>
        );
    }
}
 
export default Cart;