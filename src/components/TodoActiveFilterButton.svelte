<div><button on:click="{() => filterActiveTodos()}">Active</button></div>

<script lang="ts">
  import { status } from '../store/status.store';

  const filterActiveTodos = (): void => {
    status.update(() => 'active');
  };
</script>
