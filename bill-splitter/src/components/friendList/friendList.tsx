import { useState } from "react";
import type { friendListProps,IFriend} from "../../interfaces/Interaces";
import "./friendList.css"

export function FriendListImpl(props:friendListProps){
    const [newMember,setNewMember] = useState<string>('');
    const namePlate = (friend:IFriend)=>{
        return(
            <div className = 'namePlate'>
                {friend.name}
            </div>
        )
    }
    const handleAddMember = ()=>{
        if(!newMember.trim()){
            return;
        }
        props.setFriendsList([...props.friendsList,{name:newMember,owes:0,isActive:true}])
        setNewMember('');
    }
    return(
        <>
            <h3>
                Friends List
            </h3>
            <div>
                {props.friendsList.map(namePlate)}
            </div>
            <div className=''>
                <input 
                    value = {newMember}
                    onChange={(e)=>{setNewMember(e.target.value)}}
                >
                </input>
                <button 
                    className='addMemberButton'
                    onClick={()=>{
                        handleAddMember();
                    }}
                >
                    +
                </button>
            </div>
        </>
    )
}