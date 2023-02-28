import React from 'react';
import s from "./Users.module.css"
import {deleteData} from "../../Redux/Reducers/dataReducer";
import {useDispatch} from "react-redux";

const User = ({user,setEditStatus,setEditUser}) => {
    const dispatch = useDispatch()


    const handleDelete = (id) => {
        dispatch(deleteData(id))
    }

    const handleEdit = (user) => {
        setEditStatus(true)
        setEditUser(user)
    }
    return (
        <div className={s.box}>
            <div className={s.infoBlock}>
                <div className={s.name}>{user?.name}</div>
                <div className={s.age}>{user?.age}</div>
            </div>

            <div className={s.buttonsBlock}>
                <div><button className={s.edit} onClick={() => {handleEdit(user)}}>Edit</button></div>
                <div><button className={s.delete} onClick={() => {handleDelete(user.id)}}>Delete</button></div>
            </div>

        </div>
    );
};

export default User;