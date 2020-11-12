<div><button class:selected on:click="{() => filterTodos()}">{title}</button></div>

<script lang="ts">
  import type { Status } from '../domain/models';
  import { statusStore } from '../store/status.store';
  export let title: string;
  export let status: Status;
  export let selected: boolean;

  const filterTodos = (): void => {
    statusStore.update(() => status);
  };
</script>

<style lang="scss">
  button {
    width: 100%;
    color: gray;
    font-size: small;
  }
  .selected {
    color: black;
    border-color: gray;
  }
</style>
