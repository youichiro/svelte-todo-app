<div>
  <ul>
    {#each displayTodos as todo (todo.id)}
      <li>
        <TodoItem todo="{todo}" />
      </li>
    {/each}
  </ul>
</div>

<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { todoStore } from '../store/todo.store';
  import { TodoGateway } from '../gateways/todo.gateway';
  import TodoItem from './TodoItem.svelte';
  import type { Status, Todo } from '../domain/models';
  import { statusStore } from '../store/status.store';

  let displayTodos: Todo[];

  onMount(
    async (): Promise<void> => {
      const todos = await TodoGateway.fetchTodos();
      todoStore.set(todos);
      displayTodos = prepareTodos(todos, $statusStore);
    },
  );

  const prepareTodos = (todos: Todo[], status: Status): Todo[] => {
    const items = todos.sort((a, b) => b.id - a.id);
    if (status === 'active') {
      return items.filter((item) => !item.completed);
    }
    if (status === 'completed') {
      return items.filter((item) => item.completed);
    }
    return items;
  };

  const unsubscribeTodos = todoStore.subscribe((todos) => {
    displayTodos = prepareTodos(todos, $statusStore);
  });

  const unsubscribeStatus = statusStore.subscribe((status) => {
    displayTodos = prepareTodos($todoStore, status);
  });

  onDestroy(unsubscribeTodos);
  onDestroy(unsubscribeStatus);
</script>

<style lang="scss">
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
</style>
