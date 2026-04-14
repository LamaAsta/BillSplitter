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
        {
          name:'GJ',
          owes:0,
        },{
          name:'Amal',
          owes:0,
        },{
          name:'Ananya',
          owes:0,
        },{
          name:'Ankith',
          owes:0,
        },{
          name:'Anushka',
          owes:0,
        }
      ];
      setFriendsList(defaultList);
  },
  [])


  return (
    <>
      <div className = 'container'>
        <div>
          <TitleImpl/>
        </div>
        <div>
          <div className = 'leftPanel'>
            <AddItemImpl
              itemList={itemList}
              setItemList={setItemList}
            />
          </div>
          <div className = 'rightPanel'>
            <FriendListImpl
              friendsList={friendsList}
              setFriendsList={setFriendsList}
            />
          </div>
        </div>
        <div>
            <DistributionTableImpl
              itemList={itemList}
              setItemList={setItemList}
              friendsList={friendsList}
              setFriendsList={setFriendsList}
            />
        </div>
        <div>
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
