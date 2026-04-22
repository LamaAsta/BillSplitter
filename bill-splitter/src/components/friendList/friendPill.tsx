import type { friendPillProps } from "../../interfaces/Interaces";
import './friendList.css'

export function FriendPillImpl(props:friendPillProps){

    return(
        <>
            <div >
                <div 
                    className={`deleteUser  ${props.editMode? " " : "hiddenTicks"}`} 
                    onClick={()=>props.removeFriend(props.friend)}
                >
                    x
                </div>
                <li className={`friendPill ${props.editMode?"vibrate":""}`} key={props.friend.name}>
                    <span className="friendName">{props.friend.name}</span>
                </li>
            </div>
        </>
    )
}