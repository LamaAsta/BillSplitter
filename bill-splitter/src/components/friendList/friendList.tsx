import { useState } from "react";
import type { friendListProps, IFriend} from "../../interfaces/Interaces";
import { FriendPillImpl } from "./friendPill";
import "./friendList.css"

export function FriendListImpl(props:friendListProps){
    const [newMember,setNewMember] = useState<string>('');
    const [editMode,setEditMode] = useState<boolean>(false);

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
            <div className="friendListPanelTitle">

                <h3 className="panelTitle">Friends</h3>
                <span
                    className="editButton"
                    onClick={()=>{setEditMode(!editMode)}}
                >
                    {
                        editMode ?
                        <img src = 'https://cdn-icons-png.flaticon.com/512/33/33281.png'/>
                        :
                        <img src = 'https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png'/>
                    }
                </span>
            </div>

            {props.friendsList.length === 0 ? (
                <p className="emptyHint">Add friends to start splitting items.</p>
            ) : (
                <ul className="friendList">
                    {props.friendsList.map((friend:IFriend)=>
                        <FriendPillImpl
                            friend={friend}
                            removeFriend={handleDeleteMember}
                            editMode={editMode}
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