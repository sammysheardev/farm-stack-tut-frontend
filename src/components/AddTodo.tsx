import React from "react";

interface AddTodoProps {
    submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    changeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    changeDesc: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function AddTodo(props: AddTodoProps) {
    return(
        <div className="todo-container add-todo-container">
            <input type="text" className="title" placeholder="Title..." onChange={props.changeTitle} />
            <textarea className="desc" placeholder="Description..." onChange={props.changeDesc}>
            </textarea>
            <button className="submit" onClick={props.submit}>Add Todo</button>
        </div>
    );
}

export default AddTodo;