import React from 'react';
import s from "./Users.module.css"
import User from "./User";

const Users = ({users,setEditStatus,setEditUser,setAddStatus}) => {
    return (
        <div className={s.boxWrapper}>
            <div className={s.boxBlock}>
                {users.map((user) => {
                    return (
                        <User user={user} setEditStatus={setEditStatus} setEditUser={setEditUser}/>
                    )
                })}
                <button onClick={() => {
                    setAddStatus(true)
                }}>ADD</button>
            </div>

        </div>
    );
};

export default Users;