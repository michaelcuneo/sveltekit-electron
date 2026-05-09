<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children?: Snippet } = $props();
</script>

<div class="app">
  {@render children?.()}
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, sans-serif;
  }

  .app {
    padding: 2rem;
  }
</style>
