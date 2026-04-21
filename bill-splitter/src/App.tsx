import { useState,useEffect } from 'react'
import './App.css'

import type { IItem,IFriend } from './interfaces/Interaces';

import { TitleImpl } from './components/title/title';
import { FriendListImpl } from './components/friendList/friendList';
import { AddItemImpl } from './components/addItem/addItem';
import { DistributionTableImpl } from './components/distributionTable/distributionTable';
import { SplitTableImpl } from './components/splitTable/splitTable';

function App() {
  const [friendsList,setFriendsList] = useState<IFriend[]>([]);
  const [itemList,setItemList] = useState<IItem[]>([]);
  useEffect(()=>{
      const defaultList:IFriend[]= [
      ];
      setFriendsList(defaultList);
  },
  [])


  return (
    <>
      <div className = 'container'>
        <div className="panel">
          <TitleImpl/>
        </div>

        <div className="row">
          <div className="panel">
            <AddItemImpl
              itemList={itemList}
              setItemList={setItemList}
            />
          </div>
          <div className="panel">
            <FriendListImpl
              friendsList={friendsList}
              setFriendsList={setFriendsList}
            />
          </div>
        </div>

        <div className="panel">
          <DistributionTableImpl
            itemList={itemList}
            setItemList={setItemList}
            friendsList={friendsList}
            setFriendsList={setFriendsList}
          />
        </div>

        <div className="panel">
          <SplitTableImpl
            friendsList={friendsList}
            setFriendsList={setFriendsList}
          />
        </div>
      </div>
    </>
  )
}

export default App
