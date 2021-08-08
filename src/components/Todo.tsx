import React from "react";

export type TodoType = {
    nanoid: string;
    title: string;
    desc: string;
    checked: boolean;
}

interface TodoProps extends TodoType {
    changeChecked: (event: React.MouseEvent<HTMLInputElement>, nanoid: string) => void;
}

function Todo(props: TodoProps) {
    return(
        <div className="todo-container">
            <h1>{props.title}</h1>
            <span>{props.desc}</span>
            <footer>
                <input type="checkbox" checked={props.checked} onClick={(e) => props.changeChecked(e, props.nanoid)} />
            </footer>
        </div>
    );
}

export default Todo;