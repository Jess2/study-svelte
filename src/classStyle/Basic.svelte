<script>
  let isActive = false;
  let color = {
    t: 'tomato',
    w: '#fff'
  }
  let letterSpacing = 'letter-spacing: 10px;';

  function toggle() {
    isActive = !isActive;
  }
</script>

<button on:click={toggle}>
  Toggle!
</button>

<div class={isActive ? 'active' : ''}>
  Box1
</div>

<div class:active={isActive}>
  Box2
</div>

<h2 style="background-color: {color.t}; color:{color.w}; {letterSpacing}">
  Hello world!
</h2>

<style>
  div {
    width: 120px;
    height: 200px;
    background-color: rosybrown;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    color: white;
    font-size: 20px;
    transition: .4s;
    margin: 10px;
  }

  .active {
    width: 250px;
    background-color: forestgreen;
  }
</style>