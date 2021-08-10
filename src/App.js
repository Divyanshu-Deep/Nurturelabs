import React from 'react';
import "./Components/style.css"
import Navbar from './Components/Navbar';
import Sidepanel from './Components/SidePanel';
import Main from './Components/Main';
const App = () => {
  const [table, setTable] = React.useState([]);
  const response = async () => {
    const res = await fetch("https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard")
    const json = await res.json();
    setTable(json.data);
  };
  React.useEffect(() => {
    response();
  }, []);
  return (
    <div className="container-left">
      <Sidepanel />
     <div className="conatiner-right">
     <Navbar />  
      <Main table={table}/>
     </div>
    </div>
  )
}

export default App
