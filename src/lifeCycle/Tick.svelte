<script>
  import { tick } from 'svelte';
  // tick : 데이터가 갱신되고 나서 화면이 바뀌는 반응성을 가질 때까지 잠시 기다리게 해주는 능력을 가진 라이프 사이클
  // tick은 Promise 객체를 반환하기 때문에 비동기로 실행해야함.
  let name = 'world';

  async function handler() {
    name = 'Jess2'; // 바로 화면이 갱신되지 않음.
    await tick(); // 화면이 갱신될 때까지 잠시 기다림.
    const h1 = document.querySelector('h1');
    console.log(h1.innerText);
  }
</script>

<h1 on:click={handler}>Hello {name}!</h1>
