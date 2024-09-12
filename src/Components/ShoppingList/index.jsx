import styled from "styled-components"
import Title from "../Title"
import ShoppingItem from "../ShoppingItem"
import { useContext } from "react"
import { ItemsContext } from "../../Context"


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

const ShoppingList = () => {

    const { items } = useContext(ItemsContext);

    return (
        <>
            <StyledContainer>
                <Title> Shopping List </Title>
                <StyledHr />
                {items.some(item => !item.purchased) ?
                    items
                        .filter(item => !item.purchased)
                        .map((item, index) => (
                            <ShoppingItem key={index} item={item} />
                        ))
                    :
                    <h2> This list is still empty...</h2>}
            </StyledContainer>

            {items.some(item => item.purchased) ? (
                <StyledContainer>
                    <Title> Purchased </Title>
                    <StyledHr />
                    {items
                        .filter(item => item.purchased)
                        .map((item, index) => (
                            <ShoppingItem key={index} item={item} />
                        ))}
                </StyledContainer>
            ) : null}
        </>
    )

}

export default ShoppingList