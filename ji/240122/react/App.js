import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import qs from "qs";

function App() {

  const [list, setList] = useState([]);
  const [mem, setMem] = useState([]);
  const [qMem, setQMem] = useState([]);

  // useEffect(() => {
  //   axios.get("/api")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  // }, []);

  const getList = async () => {
    const res = await (await axios.get("/api")).data;
    setList(res);
  }

  const getMem = async () => {
    const res = await (await axios.get("/api/getMem")).data;
    console.log(res);
    setMem(res);
  }

  const reqMem = async () => {
    const res = await (await axios.get("/api/reqMem", {
      params:{
        seq:1,
      },
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat:'brackets'})
      }
    }
    )).data;
    console.log(res);
    setQMem(res);
  }

  useEffect(() => {
    getList();
    getMem();
    reqMem();
  }, []);

  return (
    <div>
      <h1>react</h1>
      <h2>{list.data}</h2>
      <h3>{list.name}</h3>
      <h3>{list.age}</h3>
      <h3>{list.loc}</h3>
      <h1>mem</h1>
      <h2>{mem.seq}</h2>
      <h2>{mem.subject}</h2>
      <h2>{mem.content}</h2>
      <h2>{mem.name}</h2>
      <h2>{mem.reg_date}</h2>
      <h2>{mem.readcount}</h2>
      <h1>qMem</h1>
      <h2>{qMem.seq}</h2>
      <h2>{qMem.subject}</h2>
      <h2>{qMem.content}</h2>
      <h2>{qMem.name}</h2>
      <h2>{qMem.reg_date}</h2>
      <h2>{qMem.readcount}</h2>
    </div>
  );
}

export default App;
