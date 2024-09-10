import styled from "styled-components"


const StyledBody = styled.div`

    margin: 64px;
    padding: 20px 0 20px 0;
    width: 400px;

    background-color: var(--white);
    border-radius: 8px;
    display:flex;
    
    flex-direction: column;
    justify-content: center;
    align-items:center;

`

const ChecklistBody = ({children}) => {
    return (
        <StyledBody>
            {children}
        </StyledBody>
    )
}

export default ChecklistBody