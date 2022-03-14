import './App.css';
import { useState } from 'react';
import List from './components/List/List';
import NewListItem from './components/NewListItem/NewListItem';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const Dummy_Data = [
    {
      id: Math.floor(Math.random() * 100), title: 'Intellectual', description: 'Some random description for intellectual', hour: 102,
    },
    {
      id: Math.floor(Math.random() * 100), title: 'Physical', description: 'Some random description for physical', hour: 51,
    },
    {
      id: Math.floor(Math.random() * 100), title: 'Creativity', description: 'Some random description for creativity', hour: 49,
    },
  ];

  const [list, setList] = useState(Dummy_Data);
  const [Range, setRange] = useState('all');
  // const [CurrentLists , setCurrentLists] = useState(list);

  const saveListData = (newListData) => {
    newListData.id = Math.floor(Math.random() * 100);
    setList((prevList) => [...prevList, newListData]);
  };

  const filterListData = (range) => {
    setRange(range);
  };

  return (
    <div className="App">
      <Dropdown onFilterListData={filterListData} />
      <List list={list} value={Range} />
      <NewListItem onSaveListData={saveListData} />
    </div>
  );
}

export default App;
