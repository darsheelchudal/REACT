import {createContext, useContext} from "react"

export const ToDoContext = createContext({
    todos:[
        {
         id:1,
         todo: "Todo message",
         completed:false,
        },
    ],
    addToDo: (todo) => {},
    updateToDo: (id,todo) => {},
    deleteToDo:(id) => {},
    toggleComplete: (id)=>{}
});

export default useToDo = () => {
    return useContext(ToDoContext);

}

export const ToDoProvider = ToDoContext.Provider;
