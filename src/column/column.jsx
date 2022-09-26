import React from 'react';
import Task from "../task/task";
import {Droppable} from 'react-beautiful-dnd';
import styles from './styles.module.scss';

const Column = ({column, tasks}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>  {column.title}</h3>
            <Droppable droppableId={column.id}>
                {
                    (provided) => {
                       return  <div className={styles.tasksList}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                       >
                            {tasks.map((task, index) => {
                                return <Task key={task.id} task={task} index={index}/>
                            })}
                           {provided.placeholder}
                        </div>
                    }
                }

            </Droppable>

        </div>

    );
};

export default Column;