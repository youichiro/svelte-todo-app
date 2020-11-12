<div class="top">
  <h1>Svelte Todo App</h1>
  <TodoAddForm />
  <TodoActiveFilterButton />
  <TodoCompletedFilterButton />
  <TodoList />
</div>

<script lang="ts">
  import TodoList from '../components/TodoList.svelte';
  import TodoAddForm from '../components/TodoAddForm.svelte';
  import TodoActiveFilterButton from '../components/TodoActiveFilterButton.svelte';
  import TodoCompletedFilterButton from '../components/TodoCompletedFilterButton.svelte';
</script>

<style lang="scss">
  .top {
    display: grid;
    place-items: center;
  }
</style>
