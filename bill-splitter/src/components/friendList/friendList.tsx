import { useState } from "react";
import type { friendListProps, IFriend} from "../../interfaces/Interaces";
import { FriendPillImpl } from "./friendPill";
import "./friendList.css"

export function FriendListImpl(props:friendListProps){
    const [newMember,setNewMember] = useState<string>('');
    const handleAddMember = ()=>{
        if(!newMember.trim()){
            return;
        }
        props.setFriendsList([...props.friendsList,{name:newMember,owes:0,isActive:true}])
        setNewMember('');
    }

    const handleDeleteMember = (friend:IFriend)=>{
        props.setFriendsList(
            props.friendsList.filter(
                (item:IFriend)=>item.name !== friend.name
            )
        )
        props.handleItemOnUserDelete(friend.name)
    }
    return(
        <>
            <h3 className="panelTitle">Friends</h3>

            {props.friendsList.length === 0 ? (
                <p className="emptyHint">Add friends to start splitting items.</p>
            ) : (
                <ul className="friendList">
                    {props.friendsList.map((friend:IFriend)=>
                        <FriendPillImpl
                            friend={friend}
                            removeFriend={handleDeleteMember}
                        />)
                    }
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