<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';

  let name = 'something';
  let h1;

  function moreDot() {
    name += '.';
  }

  beforeUpdate(() => {
    console.log('Before update');
    console.log(h1 && h1.innerText);
  });

  onMount(() => {
    console.log('onMount - 컴포넌트 연결 이후에 실행됨.');
    h1 = document.querySelector('h1');

    return () => {
      console.log('destroy in mount');
    };
  });

  afterUpdate(() => {
    console.log('After update');
    console.log(h1.innerText);
  });

  onDestroy(() => {
    console.log('onDestroy - 컴포넌트 연결 해제 이전에 실행됨.')
    const h1 = document.querySelector('h1');
    console.log(h1.innerText);
  });
</script>

<h1 on:click={moreDot}>{name}</h1>