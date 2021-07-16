
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {

  const callApi = async()=>{
    axios.get("/api").then((res) => console.log(res.data.test));
  };

  useEffect(() => {
    callApi();
  }, []);

  return <div>test</div>;
}



export default App;
