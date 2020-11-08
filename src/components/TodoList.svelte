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
  import { todos } from '../store/todo.store';
  import { TodoGateway } from '../gateways/todo.gateway';

  onMount(async (): Promise<void> => {
    todos.set(await TodoGateway.fetchTodos())
  })
</script>

<style lang="scss">
  li {
    list-style: none;
  }
</style>
