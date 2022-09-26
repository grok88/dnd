import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

import styles from './styles.module.scss';

const Task = ({task, index}) => {
    console.log(333,task, index)
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div className={styles.container}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}
                >
                     {task.content}
                </div>
            )}
        </Draggable>
    );
};

export default Task;