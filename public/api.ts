import { ITask } from "@/types/tasks";

const baseurl = 'http://localhost:3002';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseurl}/tasks`, {cache: 'no-store'});
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
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

export const editTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseurl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const updatedToDo = await res.json();
    return updatedToDo;
}

export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseurl}/tasks/${id}`, {
        method: 'DELETE',
    });
}