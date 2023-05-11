import React from 'react';
import styles from './scrollbar.module.css'
import { useEffect, useState } from 'react';


    function Scrollbar (){
        const [users, setUsers] = useState ([])

        useEffect(() => {
            fetch('https://reqres.in/api/users/')
            .then(response => response.json())
            .then(data => setUsers(data.data))
            .catch(error => console.log(error));
        },[]);

        return(
            <div className={styles.container}>
            {users.map((user, index) => (
            <div className={styles.card} key={index}>
            <img className={styles.imag} src={user.avatar} alt="avatar" />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
            </div> 
            ))}
            </div>
        );
    };

export default Scrollbar;
