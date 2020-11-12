<div class="top">
  <h1>Svelte Todo App</h1>
  <TodoAddForm />
  <div class="buttons">
    <TodoActiveFilterButton />
    <TodoCompletedFilterButton />
    <TodoAllButton />
  </div>
  <TodoList />
</div>

<script lang="ts">
  import TodoList from '../components/TodoList.svelte';
  import TodoAddForm from '../components/TodoAddForm.svelte';
  import TodoActiveFilterButton from '../components/TodoActiveFilterButton.svelte';
  import TodoCompletedFilterButton from '../components/TodoCompletedFilterButton.svelte';
  import TodoAllButton from '../components/TodoAllButton.svelte';
</script>

<style lang="scss">
  .top {
    display: grid;
    place-items: center;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }
</style>
