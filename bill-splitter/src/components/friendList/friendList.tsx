import { useState } from "react";
import type { friendListProps } from "../../interfaces/Interaces";
import "./friendList.css"

export function FriendListImpl(props:friendListProps){
    const [newMember,setNewMember] = useState<string>('');
    const namePlate = (name:string)=>{
        return(
            <div className = 'namePlate'>
                {name}
            </div>
        )
    }
    const handleAddMember = ()=>{
        if(!newMember.trim()){
            return;
        }
        props.setFriendsList([...props.friendsList,newMember])
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