import React, { useEffect, useState } from 'react';
import './TodoList.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoList = () => {
    const getItems = ()=>{
       const list = localStorage.getItem('list');
       if(list){
        return JSON.parse(localStorage.getItem('list'));
       }else{
        return [];
       }
    }

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getItems());
    const [isUpdate, setUpdateItem] = useState();

    const handleAdd = ()=>{
        if(!inputData){

        }else{
            const allInputData = {id: new Date().getTime().toString(), name:inputData}
            setItems([...items, allInputData]);
            setInputData('');
        }     
    };
  
    useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(items))
    },[items]);

    const handleDelete = (id)=>{
        const filteredItems = items.filter((ele, index)=>{
           return id !== ele.id;
        });
        setItems(filteredItems);
    };

  const handleEdit = (id)=>{
    const newEditItem = items.find((ele)=>{
      return ele.id === id
    });
    setInputData(newEditItem.name);
    setUpdateItem(id);
  };

  const handleUpdate = ()=>{
    if(inputData){
        setItems(
         items.map((item)=>{
              if(item.id === isUpdate){
                 return {...item, name:inputData}
              }
              return item;
         })
        );
     }
     setInputData('');
  };
  
  return (
    <>
    <div>
        <input 
        placeholder='Add Item'
        type="text" 
        value={inputData}
        onChange={(e)=>setInputData(e.target.value)}
        />
        </div>
        <button className="btn btn-primary button" onClick={handleAdd}>Add</button>
        <button className="btn btn-primary button" onClick={handleUpdate}>Update</button>
        <div>
            {items.map((item)=>{
                return (
                    <div key={item.id} className="items">
                        
                        <h3>{item.name}
                        <button className='deleteIcon' onClick={()=>handleEdit(item.id)}>
                            <EditIcon />
                            </button>
                        <button className='deleteIcon' onClick={()=>handleDelete(item.id)}>
                            <DeleteIcon />
                            </button>
                            </h3>
                           
                        </div>
                );
            })}
        </div>
    </>
  )
}

export default TodoList