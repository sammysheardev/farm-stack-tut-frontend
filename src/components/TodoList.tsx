import React from "react";
import AddTodo from "./AddTodo";
import Todo, { TodoType } from "./Todo";

interface TodoListProps {
    list: TodoType[]
    changeChecked: (event: React.MouseEvent<HTMLInputElement>, nanoid: string) => void;
    changeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    changeDesc: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function TodoList(props: TodoListProps) {
    return(
        <div className="todo-list-container">
            {props.list.map((item) => {
                return(
                    <Todo nanoid={item.nanoid} title={item.title} desc={item.desc} checked={item.checked} changeChecked={props.changeChecked} /> 
                );
            })}
            <AddTodo changeTitle={props.changeTitle} changeDesc={props.changeDesc} submit={props.submit} />
        </div>
    );
}

export default TodoList;