<div class="top">
  <h1>Svelte Todo App</h1>
  <TodoAddForm />
  <div class="buttons">
    <TodoFilterButton title="Active" statusProps="active" />
    <TodoFilterButton title="Completed" statusProps="completed" />
    <TodoFilterButton title="All" statusProps="all" />
  </div>
  <TodoList />
</div>

<script lang="ts">
  import TodoList from '../components/TodoList.svelte';
  import TodoAddForm from '../components/TodoAddForm.svelte';
  import TodoFilterButton from '../components/TodoFilterButton.svelte';
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
