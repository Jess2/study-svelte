<script>
  import { writable } from 'svelte/store';
  import Todo from './Todo.svelte';

  let title = '';
  let todos = writable([]);
  let id = 0;

  function createTodo() {
    if (!title.trim()) {
      title = '';
      return;
    }
    $todos = [...$todos, {
      id,
      title,
    }]
    title = '';
    id += 1;
  }
</script>

<input type="text"
       bind:value={title}
       on:keydown={(e) => e.key === 'Enter' && createTodo()} />
<button on:click={createTodo}>
  Create Todo
</button>

{#each $todos as todo}
  <Todo {todos} {todo} />
{/each}
