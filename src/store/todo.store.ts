import { writable } from 'svelte/store';
import type { Todo } from '../domain/models';

const createTodoStore = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set: (todos: Todo[]) => set(todos),
    insert: (todo: Todo) => update((todos) => [...todos, todo]),
    updateTodo: (todo: Todo) => update((todos) => todos.map((t) => (t.id === todo.id ? todo : t))),
    deleteTodo: (id: number) => update((todos) => todos.filter((todo) => todo.id !== id)),
    reset: () => set([]),
  };
};

export const todoStore = createTodoStore();
