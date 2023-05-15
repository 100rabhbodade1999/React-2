import React, {useState} from 'react';
import styles from './listParent.module.css'

function ListToDo() {

    const[activity, setActivity] = useState("");
    const[list, setList] = useState([]);  /* To make list */
    const[count, setCount] = useState(0);  /* For counting the pending tasks */


    function addActivity(){
        setList((list) => {
          const updatedList = [...list, activity]
          setActivity('');
          return updatedList
        })
    }

    function updateCount(){
      setCount(count+1)
    }

    function addAndUpdate(){
      addActivity();
      updateCount()
    }

    function removeActivity(i){
      const updatedListData = list.filter((ele, id) =>{
        return i!=id;
      })
      setList(updatedListData);
    }

    function completeActivity(i){
      const updatedList = [...list];
      updatedList[i] = <s>{list[i]}</s>
      setList(updatedList);
    }

    function decreaseCount(){
      setCount(count-1);
      if(count<1){
        setCount(0)
      }
    }

    function decAndComp(i, count){
      decreaseCount(count);
      completeActivity(i)
    }


  return (
    <div className={styles.container}>
    <div className={styles.child}>

    <h2>Pending tasks({count})</h2>

    <input
     placeholder='Add a new task'
     type='text'
     value={activity}
     onChange={(e) => setActivity(e.target.value)}
    />

    <button onClick={addAndUpdate}>Add</button>

    {list.length !==0 && list.map((data, i) => {
      return(
        <div key={i} className={styles.result}>
            <div className={styles.list}>{data}</div>
            <button onClick={() => decAndComp(i,count)}> Complete </button>
            <button onClick={() => removeActivity(i)}> X </button>
          </div>
          )
    })
    }

    </div>
    </div>
  )
}

export default ListToDo;
