import axios from 'axios';
import type { Todo } from '../domain/models';

const apiBase = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});

export const TodoGateway = {
  async fetchTodos(): Promise<Todo[]> {
    try {
      const res = await apiBase.get('/');
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
  async deleteTodo(id: number): Promise<void> {
    try {
      await apiBase.delete(`/${id}`);
    } catch (err) {
      console.error(err);
    }
  },
  async updateTodo(todo: Todo): Promise<Todo> {
    try {
      const res = await apiBase.put(`/${todo.id}`, todo)
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
};
