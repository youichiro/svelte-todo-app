<div class="top">
  <img src="images/svelte-logo.png" alt="svelte-logo" width="300px" />
  <h2>simple todo app demo <a href="https://github.com/youichiro/svelte-todo-app">[GitHub]</a></h2>
  <TodoAddForm />
  <div class="buttons">
    <TodoFilterButton title="Active" status="active" selected="{$statusStore === 'active'}" />
    <TodoFilterButton title="Completed" status="completed" selected="{$statusStore === 'completed'}" />
    <TodoFilterButton title="All" status="all" selected="{$statusStore === 'all'}" />
  </div>
  <TodoList />
</div>

<script lang="ts">
  import TodoList from '../components/TodoList.svelte';
  import TodoAddForm from '../components/TodoAddForm.svelte';
  import TodoFilterButton from '../components/TodoFilterButton.svelte';
  import { statusStore } from '../store/status.store';
</script>

<style lang="scss">
  .top {
    margin-top: 40px;
    display: grid;
    place-items: center;
  }
  h2 {
    color: #888888;
    font-size: medium;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }
</style>
