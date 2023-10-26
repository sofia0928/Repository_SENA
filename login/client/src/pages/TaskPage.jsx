import { useAuth } from '../context/AuthContex'


const TaskPage = () => {

const { user } =useAuth()
console.log(user);

    return (
      <div>
        TASKS
      </div>
    )
  }
  
  export default TaskPage
