import styled from "styled-components"
import Title from "../Title"
import ShoppingItem from "../ShoppingItem"


const StyledHr = styled.hr`
    background-color: var(--coral);
    border: 1px solid var(--coral);
    border-radius: 1px;
    width: 100%;
    height: 1px;
    `
const StyledContainer = styled.div`
    text-align:center;  
    width:60%;
    margin: 8px;
`

const ShoppingList = ({ title}) => {

    const items = ["tomate", "miojo", "alho", 'cebola', 'macarrao'];

    return (

        <StyledContainer>
            <Title> {title} </Title>
            <StyledHr />
            {items ?
                items.map((item, index) => <ShoppingItem key = {index} item={item} />)
                :
                <h2> This list is still empty...</h2>
            }

        </StyledContainer>

    )
}

export default ShoppingList