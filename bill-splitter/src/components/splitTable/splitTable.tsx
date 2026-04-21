import { useState } from "react";
import type { IFriend,splitTableProps } from "../../interfaces/Interaces";

export function SplitTableImpl(props:splitTableProps){
    const [tax,setTax] = useState<number>(0)
    const [finalSplit,setFinalSplit] = useState<IFriend[]>([])

    const handleTaxChange = (tax:number)=>{
        console.log(props.friendsList.filter((friend:IFriend)=>friend.isActive))
        const n = props.friendsList.filter((friend:IFriend)=>friend.isActive).length
        const share = tax/n
        const updateFriendList = props.friendsList.map((friend:IFriend) => {
            return friend.isActive ?  
            {
            ...friend,
            owes:friend.owes + share,
            }
            :
            friend    
    })
        console.log("updated:",updateFriendList)
        setFinalSplit(updateFriendList);
    }


    return(
        <>
            <div className="container">
                <div className="taxBar">
                    <div className="taxField">
                        <div className="taxLabel">Tax / tip / fees</div>
                    <input
                        className="taxInput"
                        value = {tax}
                        onChange = {(e:any)=>setTax(e.target.value)}
                    />
                    </div>
                    <button
                        className="taxButton"
                        onClick = {()=>handleTaxChange(tax)}
                    >
                        add
                    </button>
                </div>
                <div className="tableMobileView">   
                    <table>
                        <thead>
                            {finalSplit.map((e:IFriend)=>
                                <th>
                                    {e.name}
                                </th>
                            )}
                        </thead>
                        <tbody>
                            <tr>
                                {finalSplit.map((e:IFriend)=>
                                <td>
                                    {e.owes.toFixed(2)}
                                </td>
                            )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}