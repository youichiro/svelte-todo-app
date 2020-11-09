<div>
  <form on:submit|preventDefault="{handleSubmit}">
    <input type="text" bind:value="{title}" placeholder="enter todo title" />
    <button type="submit">+</button>
  </form>
</div>

<script lang="ts">
  import type { Todo, TodoPostParams } from '../domain/models';
  import { TodoGateway } from '../gateways/todo.gateway';
  import { todos } from '../store/todo.store';

  let title: string = '';
  let lastId: number;

  const handleSubmit = async () => {
    const params: TodoPostParams = {
      userId: 1,
      title,
      completed: false,
    };
    const todo: Todo = await TodoGateway.createTodo(params);
    lastId = lastId ? lastId + 1 : todo.id;
    todos.insert({ ...todo, id: lastId });
    title = '';
  };
</script>
