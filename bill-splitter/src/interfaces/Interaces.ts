export interface IItem  {
    cost:number;
    name:string;
}

export interface friendListProps{
    setFriendsList:(args:string[])=>void;
    friendsList:string[];
}

export interface addItemProps{
    itemList:IItem[];
    setItemList:(args:IItem[])=>void;
}