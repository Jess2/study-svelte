<script>
  import { lifecycle, delayRender } from "./lifeCycleModule/lifecycle";

  let done = delayRender();
  lifecycle();
</script>

{#if $done}
  <h1>Hello lifecycle!</h1>
{/if}
