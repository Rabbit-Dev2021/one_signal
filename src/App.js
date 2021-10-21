import logo from './logo.svg';
import './App.css';
import OneSignal from "react-onesignal"
import { useEffect, useState } from 'react';

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    OneSignal.init({ appId: '0a38bb4a-98a2-4852-bcd8-3c2f268cce7a' })
  }, [])

  
  const clickedButton = () => {

  }

  return (
    <div>
      <button onClick={clickedButton}>One Signal</button>
      
    </div>
  );
}

export default App;
