<div>
  <ul>
    {#each $todos as todo (todo.id)}
      <li>
        <input
          type="checkbox"
          checked="{todo.completed}"
          on:click="{() => toggleCompleted(todo)}"
          disabled="{disabled}" />
        {todo.title}
        <button on:click="{() => deleteTodo(todo.id)}">x</button>
      </li>
    {/each}
  </ul>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { todos } from '../store/todo.store';
  import { TodoGateway } from '../gateways/todo.gateway';
  import type { Todo } from '../domain/models';

  let disabled: boolean = false;

  onMount(
    async (): Promise<void> => {
      todos.set(await TodoGateway.fetchTodos());
    },
  );

  const deleteTodo = async (id: number): Promise<void> => {
    TodoGateway.deleteTodo(id);
    todos.deleteTodo(id);
  };

  const toggleCompleted = async (previousTodo: Todo) => {
    disabled = true;
    const todo: Todo = {
      ...previousTodo,
      completed: !previousTodo.completed,
    };
    await TodoGateway.updateTodo(todo);
    todos.updateTodo(todo);
    disabled = false;
  };
</script>

<style lang="scss">
  li {
    list-style: none;
  }
  button {
    opacity: 0;
  }
  li:hover button {
    opacity: 1;
  }
</style>
