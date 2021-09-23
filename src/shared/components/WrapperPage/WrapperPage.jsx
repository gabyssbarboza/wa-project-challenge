import React from 'react'
import { Container, Content, Wrapper } from './_WrapperPage'

export const WrapperPage = ({children}) => {
    return (
        <Container>
            <Wrapper>
            {children}
            </Wrapper>
        </Container>
    )
}
