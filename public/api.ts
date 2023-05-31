import { ITask } from "../types/tasks";

const baseurl = 'http://localhost:3002';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseurl}/tasks`);
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask[]> => {
    const res = await fetch(`${baseurl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const newTodo = await res.json();
    return newTodo;
}