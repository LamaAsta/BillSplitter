import { useState } from "react";
import type { IFriend,splitTableProps } from "../../interfaces/Interaces";

export function SplitTableImpl(props:splitTableProps){
    const [tax,setTax] = useState<number>(0)
    const [discount,setDiscount] = useState<number>(0)
    const [finalSplit,setFinalSplit] = useState<IFriend[]>([])

    const handleTaxDiscountChange = (tax:number,discount:number)=>{
        const n = props.friendsList.filter((friend:IFriend)=>friend.isActive).length
        const share = tax/n
        const multiplier = (100-discount)/100
        const updateFriendList = props.friendsList.map((friend:IFriend) => {
            return friend.isActive ?  
            {
            ...friend,
            owes:(friend.owes + share)*multiplier,
            }
            :
            friend    
    })
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
                        <div className="taxLabel">Discount</div>
                        <input
                            className="discountInput"
                            value = {discount}
                            onChange={(e:any)=>setDiscount(e.target.value)}
                        />
                    </div>
                    <button
                        className="taxButton"
                        onClick = {()=>handleTaxDiscountChange(tax,discount)}
                    >
                        calculate total
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