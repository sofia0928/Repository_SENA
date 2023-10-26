import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error('useTasks must be used eithin a TaksProvider')
    }


return context;
}

export function TaksProvider({ children }){
    const[task, setTasks] = useState([]);



    return(
        <TaskContext.Provider value={{
            task
            
            }}>
            { children }
        </TaskContext.Provider>
    )
}