<script>
export let animes;
import Card from '../components/Card.svelte';
</script>

<section class="mt-2 pl-2 w-full">
  <div class="grid grid-cols-2 md:grid-cols-3 w-full items-center lg:grid-cols-4 gap-2 max-w-6xl">
    {#each animes as anime}
        <Card anime={anime} />
    {/each}
  </div>
</section>