import type { IItem,addItemProps } from "../../interfaces/Interaces";
import {  useState } from "react";

export function AddItemImpl(props:addItemProps){
    const [newItem,setNewItem] = useState<IItem>({name:"Name",cost:0,dividedAmong:[]});
    
    const handleAddNewItem = ()=>{
        if(newItem.cost<=0 || !newItem.name || newItem.name === "Name") return;
        props.setItemList([...props.itemList,newItem]);
        setNewItem({name:"Name",cost:0,dividedAmong:[]})
    }

    const handleDeleteItem = (name:string)=>{
        props.setItemList(
            props.itemList.filter((item:IItem)=>item.name!= name)
        )
    }
    return(
        <>
            <h3 className="panelTitle">Items</h3>

            <div className="fieldRow">
                <div className="field">
                    <label className="fieldLabel" htmlFor="item-name">Item</label>
                    <input
                        id="item-name"
                        type="text"
                        value={newItem.name === "Name" ? "" : newItem.name}
                        placeholder="e.g. Pizza"
                        onChange={(e)=>setNewItem({...newItem,name:e.target.value})}
                        aria-label="Item name"
                    />
                </div>

                <div className="field">
                    <label className="fieldLabel" htmlFor="item-cost">Cost</label>
                    <input
                        id="item-cost"
                        type="number"
                        inputMode="decimal"
                        min={0}
                        step="0.01"
                        value={Number.isFinite(newItem.cost) && newItem.cost !== 0 ? newItem.cost : ""}
                        placeholder="0.00"
                        onChange={(e)=>setNewItem({...newItem,cost:Number(e.target.value)})}
                        aria-label="Item cost"
                    />
                </div>

                <button
                    className="primaryButton"
                    onClick={()=>{handleAddNewItem()}}
                    type="button"
                >
                    Add item
                </button>
            </div>

            {props.itemList.length === 0 ? (
                <p className="emptyHint">No items yet — add one above.</p>
            ) : (
                <div className="tableMobileView">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.itemList.map((item:IItem)=>(
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.cost.toFixed(2)}</td>
                                    <td>
                                        <span 
                                            className="editButton"
                                            onClick={()=>{handleDeleteItem(item.name)}}
                                        >
                                            <img src="https://cdn-icons-png.flaticon.com/512/54/54195.png"/>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )

}