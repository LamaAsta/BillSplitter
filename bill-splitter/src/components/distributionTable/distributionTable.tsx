import type { IItem, IFriend, distributionTableProps } from "../../interfaces/Interaces";
import "./distributionTable.css";
import React from "react";

export function DistributionTableImpl(
    props:distributionTableProps
){

    const createTop = (friendList:IFriend[])=>{
        return [
            <th key="item-col" scope="col">Item</th>,
            ...friendList.map((e:IFriend)=>(
                <th key={e.name} scope="col" className={e.isActive ? "" : "disabled-header"}>
                    <button
                        type="button"
                        className="tableHeaderButton"
                        onClick={()=>handleIsActive(e.name)}
                        aria-pressed={e.isActive}
                        aria-label={`Toggle ${e.name} active`}
                    >
                        {e.name}
                    </button>
                </th>
            ))
        ];
    }
    const createBody = (itemList:IItem[],friendList:IFriend[])=>{
        const inputCells = (e:IItem)=>friendList.map((f:IFriend)=>(
            <td key={`${e.name}:${f.name}`}>
                <input
                    type="checkbox"
                    checked={e.dividedAmong.includes(f.name)}
                    onChange={(s)=>handleChange(e,f,s)}
                    aria-label={`Split ${e.name} with ${f.name}`}
                />
            </td>
        ))
        const rows = itemList.map(
            (e:IItem)=> (
                <tr key={e.name}>
                    <th scope="row">{e.name}</th>
                    {inputCells(e)}
                </tr>
            )
        )
        return rows
    }

    const createBottom = (itemList:IItem[],friendsList:IFriend[])=>{
        
        friendsList.map((friend:IFriend)=>{
            friend.owes = 0;
        })
        itemList.map((item:IItem)=>{   
            const n = item.dividedAmong.length;
            const share = item.cost/n 

            return friendsList.map((friend:IFriend)=>{
                if(item.dividedAmong.includes(friend.name)){
                    friend.owes += share
                }
                return friend
            })
        })
        return (
            <tr className="totalRow">
                <th scope="row">Total</th>
                {...props.friendsList.map((friend:IFriend)=>
                    <td key={`total:${friend.name}`}>
                        {friend.owes.toFixed(2)}
                    </td>
                )}
            </tr>
        )
    }

    const handleChange = (item:IItem,friend:IFriend,s:React.ChangeEvent<HTMLInputElement>)=>{
        let dA = []
        if(s.target.checked){
            dA = [...item.dividedAmong,friend.name]
        }
        else{
            dA = item.dividedAmong.filter((e)=>e!=friend.name)
        }
        props.setItemList(
            props.itemList.map((e:IItem)=>
                e.name === item.name ? {
                    ...e, dividedAmong: dA
                } : e
            )
        )
    }

    const handleIsActive = (name:string)=>{
        const updatedList = props.friendsList.map((friend:IFriend)=>
            friend.name === name ? {...friend,"isActive":!friend.isActive} : friend
        )
        props.setFriendsList(updatedList);
    }
    return(
        <>
            <div className="tableMobileView">
                <table >
                    <thead>
                        <tr>
                            {createTop(props.friendsList)}
                        </tr>
                    </thead>
                    <tbody>
                        {createBody(props.itemList,props.friendsList)}
                        {createBottom(props.itemList,props.friendsList)}
                    </tbody>
                </table>
            </div>
        </>
    )
}