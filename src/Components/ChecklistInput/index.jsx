import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import itemBag from "../../assets/bag.png"
import { ItemsContext } from "../../Context"


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

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const [newItemName, setNewItemName] = useState('');
    const { setItems, setEditMode, editMode, editItem, items } = useContext(ItemsContext);

    useEffect(() => {
        if (editMode && editItem) {
            setNewItemName(editItem.name);
        }
    }, [editMode, editItem]);

    const handleSubmit = (event) => {

        event.preventDefault();

        if (editMode) {
            const updatedItems = items.map(item =>
                item === editItem ? { ...item, name: newItemName } : item
            );
            setItems(updatedItems);
            setEditMode(false);
        } else {

           const dateOfPurchase = new Date()

            const newItem = {
                name: newItemName,
                purchased: false,
                date:`${daysOfWeek[dateOfPurchase.getDay()]} (${dateOfPurchase.getDate()}/${dateOfPurchase.getMonth() + 1}/${dateOfPurchase.getFullYear()}) at ${dateOfPurchase.getHours()}:${dateOfPurchase.getMinutes()}` 
            };


            setItems((prevItems) => [...prevItems, newItem]);
            console.log('Novo item adicionado:', newItem);
        }

        setNewItemName('');
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledImg src={itemBag} />
            <StyledInput
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Type the item you want to add" />
            <StyledButton type="submit"> Add item</StyledButton>
        </StyledForm>
    )
}

export default ChecklistInput