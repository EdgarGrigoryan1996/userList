import data from "../../Data/data.json"
const DELETE = "DELETE"
const UPDATE = "UPDATE"
const ADD = "ADD"
const initialState = data

const dataReducer = (state = initialState,action) => {
    switch (action.type) {
        case DELETE:
            return state.filter((user) => {
                return user.id !== action.payload.id
            })
        case UPDATE:
            return state.map((user) => {
                if(user.id === action.payload.id){
                    return {
                        ...user,
                        name:action.payload.name,
                        age:action.payload.age
                    }
                } else {
                    return user
                }
            })
        case ADD:
            return [
                ...state,
                {
                    ...action.payload.user
                }
            ]
        default:
            return state
    }
}

export const deleteData = (id) => {
    return {
        type:DELETE,
        payload:{
            id
        }
    }
}

export const updateData = (id,name,age) => {
    return {
        type:UPDATE,
        payload:{
            id,
            name,
            age
        }
    }
}

export const addData = (user) => {
    return {
        type:ADD,
        payload:{
            user
        }
    }
}

export default dataReducer