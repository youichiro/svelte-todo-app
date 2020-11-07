<div>
  <h1>TodoList</h1>
  <ul>
    {#each todoList as todo (todo.id)}
      <li>{todo.title}</li>
    {/each}
  </ul>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchTodos } from '../gateways/todo.gateway';

  let todoList = [];

  onMount(async () => {
    todoList = await fetchTodos();
  });
</script>
