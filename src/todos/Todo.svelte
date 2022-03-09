<script>
  export let todos;
  export let todo;

  let isEdit = false;
  let title = '';

  function onEditTodo() {
    isEdit = true;
    title = todo.title;
  }
  function offEditTodo() {
    isEdit = false;
  }
  function updateTodo() {
    todo.title = title;
    offEditTodo();
  }
  function onDeleteTodo() {
    $todos = $todos.filter(t => t.id !== todo.id);
  }
</script>

{#if isEdit}
  <div>
    <input type="text"
           bind:value={title}
           on:keydown={(e) => e.key === 'Enter' && updateTodo()} />
    <button on:click={updateTodo}>
      OK
    </button>
    <button on:click={offEditTodo}>
      Cancel
    </button>
  </div>
{:else}
  <div>
    <p>{todo.title}
    <button on:click={onEditTodo}>
      Edit
    </button>
    <button on:click={onDeleteTodo}>
      Delete
    </button>
  </div>
{/if}
