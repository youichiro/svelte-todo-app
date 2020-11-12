<div><button on:click="{() => filterTodos()}">{title}</button></div>

<script lang="ts">
  import type { Status } from '../domain/models';
  import { statusStore } from '../store/status.store';
  export let title: string;
  export let status: Status;

  const filterTodos = (): void => {
    statusStore.update(() => status);
  };
</script>

<style lang="scss">
  button {
    width: 100%;
  }
</style>
