<div><button on:click="{() => filterActiveTodos()}">Active</button></div>

<script lang="ts">
  import { status } from '../store/status.store';

  const filterActiveTodos = (): void => {
    status.update(() => 'active');
  };
</script>

<style lang="scss">
  button {
    width: 100%;
  }
</style>
