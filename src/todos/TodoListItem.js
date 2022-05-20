import react from "react";

const TodoListItem = ({todo}) => {
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark as comleted</button>
            <button className="removed-button">Remove</button>
        </div>
        </div>
}

export default TodoListItem;