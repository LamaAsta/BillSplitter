import { useState,useEffect } from 'react'
import './App.css'

import type { IItem } from './interfaces/Interaces';

import { TitleImpl } from './components/title/title';
import { FriendListImpl } from './components/friendList/friendList';

function App() {
  const [friendsList,setFriendsList] = useState<string[]>([]);
  const [itemList,setItemList] = useState<IItem[]>([]);
  useEffect(()=>{
      const defaultList= ['GJ','Amal','Ananya','Ankith','Anushka'];
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
          <div className = 'leftPanel'>add item</div>
          <div className = 'rightPanel'>
            <FriendListImpl
              friendsList={friendsList}
              setFriendsList={setFriendsList}
            />
          </div>
        </div>
        <div>
            table
        </div>
        <div>
            splits 
        </div>
      </div>
    </>
  )
}

export default App
