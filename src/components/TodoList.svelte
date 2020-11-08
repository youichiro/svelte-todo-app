<div>
  {#await fetchTodos()}
    <p>..loading</p>
  {:then todos}
    <ul>
      {#each todos as todo (todo.id)}
        <li>{todo.title}</li>
      {/each}
    </ul>
  {:catch error}
    <p>{error.message}</p>
  {/await}
</div>

<script lang="ts">
  import { fetchTodos } from '../gateways/todo.gateway';
</script>
