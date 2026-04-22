import type { friendPillProps } from "../../interfaces/Interaces";
import './friendList.css'

export function FriendPillImpl(props:friendPillProps){

    return(
        <>
            <li className="friendPill" key={props.friend.name}>
                <span className="friendName">{props.friend.name}</span>
            </li>
            <div className="deleteUser" onClick={()=>props.removeFriend(props.friend)}>
                x
            </div>
        </>
    )
}