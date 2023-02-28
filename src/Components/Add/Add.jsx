import React, {useState} from 'react';
import s from "./Add.module.css"
import {useDispatch} from "react-redux";
import {addData} from "../../Redux/Reducers/dataReducer";
const Add = (props) => {
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    const [age,setAge] = useState(null)
    const user = {
        name,
        age
    }
    const handleAdd = () => {
        dispatch(addData(user))
        props.setAddStatus(false)
    }
    return (
        <div className={s.addBlockBackground}>

            <div className={s.addBlock}>
                <span onClick={() => {props.setAddStatus(false)}}>x</span>
                <form action="">
                    <div>
                        <input type="text"  onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <input type="number"  onChange={(e) => {
                           setAge(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <button onClick={(e) => {handleAdd()}}>ADD</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add;