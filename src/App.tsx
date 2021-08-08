import axios from "axios";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { TodoType } from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
    const [todoList, setTodoList] = useState<TodoType[]>([]);

    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_BACKEND_URL + "/api/get-todo")
            .then((res) => {
                setTodoList(res.data);
            });
    }, []);

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    const changeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(event.currentTarget.value);
    };

    const changeChecked = (
        event: React.MouseEvent<HTMLInputElement>,
        id: string
    ) => {
        let temp = [...todoList];
        let tempIndex = 0;
        temp.forEach((item, i) => {
            if (item.nanoid === id) {
                item.checked = !item.checked;
                tempIndex = i;
            }
        });
        setTodoList(temp);
        let item = todoList[tempIndex];
        axios.put(
            process.env.REACT_APP_BACKEND_URL +
                `/api/update-todo/${item.nanoid}`,
                { nanoid: item.nanoid, title: item.title, desc: item.desc, checked: item.checked}
        );
    };

    const addTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        let newTodo: TodoType = {
            nanoid: nanoid(),
            title: title,
            desc: desc,
            checked: false,
        };
        setTodoList([...todoList, newTodo]);
        axios.post(
            process.env.REACT_APP_BACKEND_URL + "/api/add-todo",
            JSON.stringify(newTodo)
        );
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>To-Do List</h1>
            </header>
            <div className="content">
                <TodoList
                    submit={addTodo}
                    changeDesc={changeDesc}
                    changeTitle={changeTitle}
                    list={todoList}
                    changeChecked={changeChecked}
                />
            </div>
        </div>
    );
}

export default App;
