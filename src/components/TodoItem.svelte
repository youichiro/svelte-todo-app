<div class="todo-item">
  <input type="checkbox" checked="{todo.completed}" on:click="{() => toggleCompleted(todo)}" disabled="{disabled}" />
  <span class:completed="{todo.completed}"> {todo.title} </span>
  <button on:click="{() => deleteTodo(todo.id)}">x</button>
</div>

<script lang="ts">
  import type { Todo } from '../domain/models';
  import { TodoGateway } from '../gateways/todo.gateway';
  import { todoStore } from '../store/todo.store';
  export let todo: Todo;

  let disabled: boolean = false;

  const deleteTodo = async (id: number): Promise<void> => {
    TodoGateway.deleteTodo(id);
    todoStore.deleteTodo(id);
  };

  const toggleCompleted = async (previousTodo: Todo) => {
    disabled = true;
    const todo: Todo = {
      ...previousTodo,
      completed: !previousTodo.completed,
    };
    await TodoGateway.updateTodo(todo);
    todoStore.updateTodo(todo);
    disabled = false;
  };
</script>

<style lang="scss">
  button {
    opacity: 0.4;
    color: gray;
    background-color: white;
    border: none;
    cursor: pointer;
  }
  .todo-item:hover button {
    opacity: 1;
  }
  .completed {
    color: #d9d9d9;
    text-decoration: line-through;
  }
</style>
