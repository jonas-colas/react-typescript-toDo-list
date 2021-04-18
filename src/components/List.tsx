import React from 'react'
import {ITask} from '../interfaces'

interface Props {
  task: ITask
}

export const List = ({task} : Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{task.taskName}</h6>
      </div>
      <span className="text-muted">{task.deadline}</span>
    </li>
  )
}
