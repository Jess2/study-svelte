<script>
  import Fruits from './Fruits.svelte';
</script>

<h2>App</h2>
<ul class="fruits">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<Fruits />

<style>
  :global(.fruits) {
    color: red;
  }

  .fruits {
    background-color: yellow;
  }
</style>