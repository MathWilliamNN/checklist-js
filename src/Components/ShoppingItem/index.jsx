import styled from "styled-components"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ItemsContext } from "../../Context"
import { useContext } from "react";


const ItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    gap: 8px;
    margin: 8px;
`
const DataContainer = styled.div`
    display:flex;
    justify-content: space-between;
`
const TextContainer = styled.form`
    display: flex;
    align-items: center;

`
const ButtonsContainer = styled.div`
    display:flex;
    gap: 8px;
    color: var(--marine-blue);

    & > * {
        cursor: pointer;

        &:hover {   
            transform: scale(1.15);
        }
    }
`
const StyledItemName = styled.h2`

    font-size: 16px;
    font-weight: 500;
    padding-left: 4px;
    text-decoration: ${props => props.purchased ? 'line-through' : 'none'};

    &::first-letter {
    text-transform: uppercase;

    
}
`
const Time = styled.h3`
    text-align:left;
    font-size: 12px;
    margin: 0 0 0 8px ;
`
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none; 
    width: 20px;
    height: 20px;
    border: 2px solid var(--coral);
    border-radius: 4px; 
    cursor: pointer;
    position: relative;
    outline: none;

    &:checked::before {
        content: '✔'; 
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        color: var(--white); 
    }

    &:checked {
        background-color: var(--coral); 
    }
`

const ShoppingItem = ({ item }) => {


    const { handleStatusChange, handleDelete } = useContext(ItemsContext);

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        handleStatusChange(item, isChecked);
    };

    return (

        <ItemContainer>
            <DataContainer>
                <TextContainer>
                    <StyledCheckbox checked={item.purchased} onChange={handleCheckboxChange} />
                    <StyledItemName purchased={item.purchased}>{item.nome}</StyledItemName>
                </TextContainer>
                <ButtonsContainer>
                    <MdEdit size={20} />
                    <MdDelete size={20} onClick={() => handleDelete(item)} />
                </ButtonsContainer>
            </DataContainer>
            <Time> Placeholder (hora da compra) </Time>
        </ItemContainer>
    )
}

export default ShoppingItem