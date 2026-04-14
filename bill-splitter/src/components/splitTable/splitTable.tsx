import { useState } from "react";
import type { IFriend,splitTableProps } from "../../interfaces/Interaces";

export function SplitTableImpl(props:splitTableProps){
    const [tax,setTax] = useState<number>(0)
    const [finalSplit,setFinalSplit] = useState<IFriend[]>([])

    const handleTaxChange = (tax:number)=>{
        const n = props.friendsList.length
        const share = tax/n
        const updateFriendList = props.friendsList.map((friend:IFriend) => {
            return {
            ...friend,
            owes:friend.owes + share,
        }})
        console.log("updated:",updateFriendList)
        setFinalSplit(updateFriendList);
    }


    return(
        <>
            <div>
                <input
                    value = {tax}
                    onChange = {(e:any)=>setTax(e.target.value)}
                />
                <button
                    onClick = {()=>handleTaxChange(tax)}
                >
                    add
                </button>


                <table>
                    <thead>
                        {finalSplit.map((e:IFriend)=>
                            <td>
                                {e.name}
                            </td>
                        )}
                    </thead>
                    <tbody>
                        <tr>
                            {finalSplit.map((e:IFriend)=>
                            <td>
                                {e.owes}
                            </td>
                        )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}