<div><button on:click="{() => displayAllTodos()}">All</button></div>

<script lang="ts">
  import { status } from '../store/status.store';

  const displayAllTodos = (): void => {
    status.update(() => 'all');
  };
</script>

<style lang="scss">
  button {
    width: 100%;
  }
</style>
