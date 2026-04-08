import type { IItem,addItemProps } from "../../interfaces/Interaces";
import {  useState } from "react";

export function AddItemImpl(props:addItemProps){
    const [newItem,setNewItem] = useState<IItem>({name:"Name",cost:0});
    
    const handleAddNewItem = ()=>{
        if(newItem.cost<=0 || !newItem.name) return;
        props.setItemList([...props.itemList,newItem]);
        setNewItem({name:"Name",cost:0})
    }

    return(
        <>
            <input 
                type="text" 
                value={newItem.name}
                onChange={(e)=>setNewItem({...newItem,name:e.target.value})}
            />
            <input 
                type="text"
                value={newItem.cost}
                onChange={(e)=>setNewItem({...newItem,cost:Number(e.target.value)})}
            />
            <button
                onClick={()=>{handleAddNewItem();console.log('is it not extending',props.itemList)}}
            >
                add 
            </button>

        </>
    )

}