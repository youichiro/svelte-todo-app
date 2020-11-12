<div>
  <form on:submit|preventDefault="{handleSubmit}">
    <input type="text" bind:value="{title}" placeholder="Enter todo title" />
    <button type="submit">+</button>
  </form>
</div>

<script lang="ts">
  import type { Todo, TodoPostParams } from '../domain/models';
  import { TodoGateway } from '../gateways/todo.gateway';
  import { todoStore } from '../store/todo.store';

  let title: string = '';
  let lastId: number;

  const handleSubmit = async () => {
    if (title === '') {
      return;
    }
    const params: TodoPostParams = {
      userId: 1,
      title,
      completed: false,
    };
    const todo: Todo = await TodoGateway.createTodo(params);
    lastId = lastId ? lastId + 1 : todo.id;
    todoStore.insert({ ...todo, id: lastId });
    title = '';
  };
</script>

<style lang="scss">
  input {
    width: 50vw;

    @media screen and (max-width: 480px) {
      width: 80vw;
    }
  }
  button {
    background-color: white;
  }
  button:hover {
    background-color: orange;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
