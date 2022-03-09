<script>
  import { storeName } from './store';
  import Parent from './Parent.svelte';

  let name = 'world';
  $storeName = name;
</script>

<h1>Hello {name}</h1>
<Parent />
