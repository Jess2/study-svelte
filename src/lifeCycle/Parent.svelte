<script>
  import Child from './Child.svelte';

  let toggle = false;
</script>

<button on:click={() => {toggle = !toggle}}>
  toggle
</button>

{#if toggle}
  <Child />
{/if}