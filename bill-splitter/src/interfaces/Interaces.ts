export interface IItem  {
    cost:Number;
    name:String;
}

export interface friendListProps{
    setFriendsList:(args:string[])=>void;
    friendsList:string[];
}