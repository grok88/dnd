import './App.css';
import initialData from './initial-data'
import {useState} from "react";
import Column from "./column/column";
import {DragDropContext} from 'react-beautiful-dnd';

function App() {
    const [state, setState] = useState(initialData);

    const onDragEnd = result => {
        console.log(result)
    }
    console.log('state', state);

    return <DragDropContext onDragEnd={onDragEnd}>
        {state.columnOrder.map(columnId => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map(taskId => state.tasks[taskId])
            console.log(tasks)

            return <Column key={column.id} column={column} tasks={tasks}/>
        })}
    </DragDropContext>

}

export default App;
