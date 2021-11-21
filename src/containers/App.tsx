import { useState } from 'react';

import './App.css';

import ExpandButton from '../components/ExpandButton/ExpandButton';
import SideBar from 'components/SideBar/SideBar';

function App() {

  
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="App">
      <ExpandButton onExpand = {() => setIsOpen(e => !e)}/>
      <SideBar open = {isOpen} />
    </div>
  );
}

export default App;
