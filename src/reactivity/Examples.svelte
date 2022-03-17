<script>
  let count = 0;

  // 선언
  $: double = count * 2;

  // 블록
  $: {
    console.log(count);
    console.log(double);
  }

  // 함수 실행
  $: count, log();

  // 즉시 실행 함수
  $: count, (() => {
    console.log('Hello World!');
  })();

  // 조건문
  $: if (count > 0) {
    console.log('if: ', double);
  }

  // 반복문
  $: for (let i = 0; i < 3; i += 1) {
    count
    console.log('for: ', i);
  }

  // 조건문
  $: switch (count) {
    case 1:
      console.log('switch: 1');
      break;
    default:
      console.log('switch default');
  }

  // 유효범위
  $: {
    function scope1() {
      console.log('scope1');
      function scope2() {
        console.log('scope2');
        function scope3() {
          console.log('scope3', count);
        }
        scope3();
      }
      scope2();
    }
    scope1();
  }

  function log() {
    console.log('log');
  }

  function assign() {
    count += 1;
  }
</script>


<button on:click={assign}>Assign</button>