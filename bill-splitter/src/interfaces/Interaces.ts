export interface IItem  {
    cost:number;
    name:string;
    dividedAmong:string[];
}

export interface IFriend{
    name:string;
    owes:number;
    isActive:boolean;
}

export interface friendListProps{
    handleItemOnUserDelete:(args:string)=>void;
    setFriendsList:(args:IFriend[])=>void;
    friendsList:IFriend[];
}

export interface friendPillProps{
    friend:IFriend;
    removeFriend:(args:IFriend)=>void;
    editMode:boolean;
}

export interface addItemProps{
    itemList:IItem[];
    setItemList:(args:IItem[])=>void;
}

export interface distributionTableProps{
    setFriendsList:(args:IFriend[])=>void;
    friendsList:IFriend[];
    itemList:IItem[];
    setItemList:(args:IItem[])=>void;
}

export interface splitTableProps{
    friendsList:IFriend[],
    setFriendsList:(args:IFriend[])=>void;
}