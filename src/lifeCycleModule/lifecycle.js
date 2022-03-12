import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
import { writable } from "svelte/store";

export function lifecycle() {
  onMount(() => {
    console.log('Mounted!');
  });

  onDestroy(() => {
    console.log('Before destroy!');
  });

  beforeUpdate(() => {
    console.log('Before update!');
  });

  afterUpdate(() => {
    console.log('After update!');
  });
}

export function delayRender() {
  let render = writable(false);
  onMount((delay = 3000) => {
    setTimeout(() => {
      render.set(true);
    }, delay);
  });
  return render;
}