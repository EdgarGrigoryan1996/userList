import React, {useState} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {updateData} from "./Redux/Reducers/dataReducer";

const Edit = (props) => {
    const dispatch = useDispatch()
    const [name,setName] = useState(props.user.name)
    const [age,setAge] = useState(props.user.age)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateData(props.user.id,name,age))
        props.setEditStatus(false)
    }

    return (
        <div className={"edit-Block-background"}>

            <div className={"edit-block"}>
                <span onClick={() => {props.setEditStatus(false)}}>x</span>
                <form action="">
                    <div>
                        <input type="text" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <input type="number" value={age} onChange={(e) => {
                            setAge(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <button onClick={(e) => {handleSubmit(e)}}>Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;