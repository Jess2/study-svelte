<script>
  import { tick } from 'svelte';

  let count = 0;
  // let double = 0;

  // $: {
  //   double = count * 2;
  // }

  $: double = count * 2; // 계산된 데이터의 결과물. count가 변경된 후 대기 로직이 처리되고 화면이 갱신되어야 그 때 반응성 구문($:)이 실행됨.

  async function assign() {
    count += 1;
    await tick();
    console.log(double);
  }
</script>

<button on:click={assign}>Click</button>

<h2>{count}</h2>
<h2>{double}</h2>