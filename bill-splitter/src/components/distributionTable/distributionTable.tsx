import type { IItem,IFriend,distributionTableProps } from "../../interfaces/Interaces";
import "./distributionTable.css"

export function DistributionTableImpl(
    props:distributionTableProps
){

    const createTop = (friendList:IFriend[])=>{
        return [<th> </th>, ...friendList.map((e:IFriend)=><th> {e.name} </th>)];
    }
    const createBody = (itemList:IItem[],friendList:IFriend[])=>{
        const inputCells = (e:IItem)=>friendList.map((f:IFriend)=>
            <td>
                <input 
                    type="checkbox"
                    onClick={(s)=>handleChange(e,f,s)}
                >
                </input>
            </td>
        )
        const rows = itemList.map(
            (e:IItem)=> <tr key = {e.name}>
                <td>
                    {e.name}
                </td>
                {inputCells(e)}
            </tr>
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
            <tr>
                <td></td>
                {...props.friendsList.map((friend:IFriend)=><td>{friend.owes.toFixed(2)}</td>)}
            </tr>
        )
    }

    const handleChange = (item:IItem,friend:IFriend,s)=>{
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
    return(
        <>
            <table className="distributionTable">
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
        </>
    )
}