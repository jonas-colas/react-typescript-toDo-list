import React, { FC, ChangeEvent, useState} from 'react'
import {ITask} from './interfaces'
import {List} from './components/List'

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])


  const handleSubmit = (e:any): void => {
    e.preventDefault()
    const newTask = {taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
    console.log(todoList)
  }

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>To Do List</h2>
      </div>
      <div className="row">
        {/* Left Side */}
        <div className="col-md-8 order-md-1">
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Task</label>
                <input type="text" className="form-control" placeholder="enter task ..." 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
                value={task} />
              </div>
              <div className="col-md-6 mb-3">
                <label>Deadline</label>
                <input type="number" className="form-control" placeholder="0" 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDeadline(Number(e.target.value))} 
                value={deadline} />
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">Add Task</button>
          </form>
        </div>
        {/*End Left Side */}
        {/* Right Side */}
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">List</span>
          </h4>
          <ul className="list-group mb-3">
            {todoList.map((ta: ITask, i:number) => (
                <List key={i} task={ta} />
              )
            )}
          </ul>
        </div>
        {/*End right Side */}
      </div>
    </div>
  );
}

export default App;
