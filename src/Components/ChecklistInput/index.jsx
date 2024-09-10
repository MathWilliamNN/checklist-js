import styled from "styled-components"
import itemBag from "../../assets/bag.png"


const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;

`

const StyledImg = styled.img`
    width: 160px;
    margin: 16px;
`

const StyledInput = styled.input`
    width: 220px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 20px;
    padding: 8px;
    margin-bottom: 16px;
`

const StyledButton = styled.button`
    padding: 8px;
    width: 140px;
    font-size: 16px;
    color: var(--white);
    border: none;
    border-radius: 20px;
    background-color: var(--coral);
    display: flex;
    justify-content:center;
    margin-bottom: 32px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`

const ChecklistInput = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulário enviado');
    };

    return(
        <StyledForm onSubmit={handleSubmit}>
            <StyledImg src = {itemBag}/>
            <StyledInput placeholder="Type the item you want to add"/>
            <StyledButton type="submit"> Add item</StyledButton>
        </StyledForm>
    )
}

export default ChecklistInput