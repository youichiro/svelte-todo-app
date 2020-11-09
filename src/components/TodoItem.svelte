<div class="todo-item">
  <input type="checkbox" checked="{todo.completed}" on:click="{() => toggleCompleted(todo)}" disabled="{disabled}" />
  {todo.title}
  <button on:click="{() => deleteTodo(todo.id)}">x</button>
</div>

<script lang="ts">
  import type { Todo } from '../domain/models';
  import { TodoGateway } from '../gateways/todo.gateway';
  import { todos } from '../store/todo.store';
  export let todo: Todo;

  let disabled: boolean = false;

  const deleteTodo = async (id: number): Promise<void> => {
    TodoGateway.deleteTodo(id);
    todos.deleteTodo(id);
  };

  const toggleCompleted = async (previousTodo: Todo) => {
    disabled = true;
    const todo: Todo = {
      ...previousTodo,
      completed: !previousTodo.completed,
    };
    await TodoGateway.updateTodo(todo);
    todos.updateTodo(todo);
    disabled = false;
  };
</script>

<style lang="scss">
  button {
    opacity: 0;
  }
  .todo-item:hover button {
    opacity: 1;
  }
</style>
