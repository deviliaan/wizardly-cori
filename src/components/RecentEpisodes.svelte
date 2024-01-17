<script>
export let animes;
import Card from '../components/Card.svelte';
</script>

<section class="text-center">
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
    {#each animes as anime}
        <Card anime={anime}/>
    {/each}
  </div>
</section>