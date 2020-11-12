<div><button on:click="{() => filterTodos()}">{title}</button></div>

<script lang="ts">
  import type { Status } from '../domain/models';
  import { status } from '../store/status.store';
  export let title: string;
  export let statusProps: Status;

  const filterTodos = (): void => {
    status.update(() => statusProps);
  };
</script>

<style lang="scss">
  button {
    width: 100%;
  }
</style>
