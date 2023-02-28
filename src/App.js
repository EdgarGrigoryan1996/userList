import './App.css';
import {useSelector} from "react-redux";
import Edit from "./Edit";
import {useState} from "react";
import Users from "./Components/Users/Users";
import Add from "./Components/Add/Add";
function App() {
    const data = useSelector((state) => {
        return state.data
    })

    const [editStatus,setEditStatus] =useState(false)
    const [addStatus,setAddStatus] = useState(false)
    const [editUser,setEditUser] =useState(null)


  return (
    <div className="App">

        { editStatus && <Edit setEditStatus={setEditStatus} user={editUser}/>}
        { addStatus && <Add setAddStatus={setAddStatus}/>}
      <Users users={data} setEditStatus={setEditStatus} setEditUser={setEditUser} setAddStatus={setAddStatus}/>

    </div>
  );
}

export default App;
