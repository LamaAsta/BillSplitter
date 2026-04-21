import { useState } from "react";
import type { friendListProps,IFriend} from "../../interfaces/Interaces";
import "./friendList.css"

export function FriendListImpl(props:friendListProps){
    const [newMember,setNewMember] = useState<string>('');
    const namePlate = (friend:IFriend)=>{
        return(
            <li className="friendPill" key={friend.name}>
                <span className="friendName">{friend.name}</span>
            </li>
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
            <h3 className="panelTitle">Friends</h3>

            {props.friendsList.length === 0 ? (
                <p className="emptyHint">Add friends to start splitting items.</p>
            ) : (
                <ul className="friendList">
                    {props.friendsList.map(namePlate)}
                </ul>
            )}

            <div className="fieldRow friendAddRow">
                <div className="field friendAddField">
                    <label className="fieldLabel" htmlFor="new-friend-name">Friend name</label>
                    <input
                        id="new-friend-name"
                        value={newMember}
                        placeholder="e.g. Alex"
                        onChange={(e)=>{setNewMember(e.target.value)}}
                        onKeyDown={(e)=>{
                            if(e.key === "Enter") handleAddMember();
                        }}
                        aria-label="Friend name"
                    />
                </div>
                <button
                    className="primaryButton"
                    onClick={()=>{
                        handleAddMember();
                    }}
                    type="button"
                >
                    Add friend
                </button>
            </div>
        </>
    )
}