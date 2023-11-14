import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState, useRef } from 'react';

// const dummyList = [
//   {
//     id:1,
//     author:"GDSC",
//     content:"Hi",
//     emotion:5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author:"Hi-arc",
//     content:"Bye",
//     emotion:4,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author:"COK",
//     content:"Hi",
//     emotion:5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:4,
//     author:"Attract",
//     content:"Bye",
//     emotion:4,
//     created_date: new Date().getTime()
//   },
// ]

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
