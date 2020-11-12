<div><button on:click="{() => filterCompletedTodos()}">Completed</button></div>

<script lang="ts">
  import { status } from '../store/status.store';

  const filterCompletedTodos = (): void => {
    status.update(() => 'completed');
  };
</script>
