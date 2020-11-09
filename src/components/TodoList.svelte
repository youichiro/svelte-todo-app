<div>
  <ul>
    {#each sortByIdDesc($todos) as todo (todo.id)}
      <li>
        <TodoItem todo="{todo}" />
      </li>
    {/each}
  </ul>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { todos } from '../store/todo.store';
  import { TodoGateway } from '../gateways/todo.gateway';
  import TodoItem from './TodoItem.svelte';
  import type { Todo } from '../domain/models';

  onMount(
    async (): Promise<void> => {
      todos.set(await TodoGateway.fetchTodos());
    },
  );

  const sortByIdDesc = (todos: Todo[]) => {
    return todos.sort((a: Todo, b: Todo) => b.id - a.id);
  };
</script>

<style lang="scss">
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
</style>
