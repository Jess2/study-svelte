<script>
  let name = 'World';
  let age = 99;
  let toggle = false;

  function assign() {
    name = 'Jess2';
    age = 31;
  }
</script>

<h1>Hello {name}</h1>
<h2 class={age < 85 ? 'active' : ''}>my age : {age}</h2>
<img src="" alt={name} />
<input type="text" bind:value={name} />
<button on:click={assign}>
  클릭!
</button>

<hr />

<button on:click={() => toggle = !toggle}>
  토글
</button>
{#if toggle}
  Opened!
{:else}
  Closed!
{/if}

<style>
  h1 {
    color: red;
  }
  .active {
    color: blue;
  }
</style>