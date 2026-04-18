import type { IItem,addItemProps } from "../../interfaces/Interaces";
import {  useState } from "react";

export function AddItemImpl(props:addItemProps){
    const [newItem,setNewItem] = useState<IItem>({name:"Name",cost:0,dividedAmong:[]});
    
    const handleAddNewItem = ()=>{
        if(newItem.cost<=0 || !newItem.name) return;
        props.setItemList([...props.itemList,newItem]);
        setNewItem({name:"Name",cost:0,dividedAmong:[]})
    }

    return(
        <>
            <div className="container">
                <div>
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
                        onClick={()=>{handleAddNewItem()}}
                    >
                        add 
                    </button>
                </div>
                <div className="tableMobileView">
                    <table>
                        <thead>
                            <th>
                                Item Name
                            </th>
                            <th>
                                Price
                            </th>
                        </thead>
                        <tbody>
                            {props.itemList.map((item:IItem)=>{
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.cost}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
                

        </>
    )

}