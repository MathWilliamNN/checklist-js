import styled from "styled-components"

const StyledTitle = styled.h2`

    font-family: var(--font-primary);
    font-size:24px;
    font-weight: 500;
    color: var(--coral);
`

const Title = ({ children }) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}

export default Title