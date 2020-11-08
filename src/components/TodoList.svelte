<div>
  <ul>
    {#each $todos as todo (todo.id)}
      <li>
        <input type="checkbox" bind:checked={todo.completed}> {todo.title}
      </li>
    {/each}
  </ul>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchTodos } from '../gateways/todo.gateway';
  import { todos } from '../store/todo.store';

  onMount(async () => {
    todos.set(await fetchTodos());
  })
</script>

<style lang="scss">
  li {
    list-style: none;
  }
</style>
