<script>
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    console.log('onMount - 컴포넌트 연결 이후에 실행됨.');
    const h1 = document.querySelector('h1');
    console.log(h1.innerText);

    return () => {
      console.log('destroy in mount');
    };
  });

  onDestroy(() => {
    console.log('onDestroy - 컴포넌트 연결 해제 이전에 실행됨.')
    const h1 = document.querySelector('h1');
    console.log(h1.innerText);
  });
</script>

<h1>Hello!</h1>