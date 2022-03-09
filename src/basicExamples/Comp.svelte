<script>
  import Fruits from './Fruits.svelte';

  let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];
</script>

<Fruits {fruits} />
<Fruits {fruits} reverse />
<Fruits {fruits} slice="-2" />
<Fruits {fruits} slice="0, 3" />