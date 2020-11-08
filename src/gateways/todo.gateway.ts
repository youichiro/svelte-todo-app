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
      const res = await apiBase({ method: 'get', url: '/' });
      return res.data;
    } catch (err) {
      console.error(err)
    }
  }
}
