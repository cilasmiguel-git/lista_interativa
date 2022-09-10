import { type } from '@testing-library/user-event/dist/type';
import {ChangeEvent} from 'react';
import './App.css';
import {useContagem} from './hooks/contagem';
import { usePeopleList } from './hooks/peopleList';
import { useState } from 'react';


function App() {
  const[List,Dispatch] = usePeopleList();
  const [nameInput,setNameInput] = useState('');
  const handleAddButton = ()=>{
    if(nameInput)
    {
      Dispatch({type:'ADD',payload:{name:nameInput}});
      setNameInput('')
    }
  }
  const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setNameInput(e.target.value);
  }
  const deletePerson = (id:string)=>
  {
    Dispatch({
      type:'DEL',
      payload:{id}
    })
  }
  const handleOrderButton = () =>
  {
    Dispatch({
      type:'ORDER'
    })
  }
  return (
    <div className="p-5">
      <input className='border-2' type="text" value={nameInput} onChange={handleInputChange}/>
      <button onClick={handleAddButton}>adicionar</button>
      <hr />
      <button className='p-1' onClick={handleOrderButton}>| Ordenar |</button>
      <hr />
      lista de pessoas:
      {List.map((item,index)=>(
        <li className='p-1' key={index}>
          {item.name}
          <button onClick={()=>deletePerson(item.id)}>. |  deletar |</button>
        </li>
      ))}
    </div>
  );
}

export default App;
