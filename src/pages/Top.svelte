<div class="top">
  <h1>Svelte Todo App</h1>
  <TodoAddForm />
  <TodoList />
</div>

<script lang="ts">
  import TodoList from '../components/TodoList.svelte';
  import TodoAddForm from '../components/TodoAddForm.svelte';
</script>

<style lang="scss">
  .top {
    display: grid;
    place-items: center;
  }
</style>
