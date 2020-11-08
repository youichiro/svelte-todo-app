import { writable } from 'svelte/store';
import type { Todo } from '../domain/models';

const todosStore = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set: (todos: Todo[]) => set(todos),
    updateTodo: (todo: Todo) => update(todos => todos.map((t) => t.id === todo.id ? todo : t)),
    reset: () => set([])
  };
}

export const todos = todosStore();
