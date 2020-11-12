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
  import { todos } from '../store/todo.store';
  import { TodoGateway } from '../gateways/todo.gateway';
  import TodoItem from './TodoItem.svelte';
  import type { Todo } from '../domain/models';
  import { status } from '../store/status.store';

  let displayTodos: Todo[];

  onMount(
    async (): Promise<void> => {
      const fetchedTodos = await TodoGateway.fetchTodos();
      todos.set(fetchedTodos);
      displayTodos = fetchedTodos;
    },
  );

  const getDisplayTodos = status.subscribe((value) => {
    let items = $todos.sort((a, b) => b.id - a.id);
    items = value === 'active' ? items.filter((item) => !item.completed) : items;
    items = value === 'completed' ? items.filter((item) => item.completed) : items;
    displayTodos = items;
  });

  onDestroy(getDisplayTodos);
</script>

<style lang="scss">
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
</style>
