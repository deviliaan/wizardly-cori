<script>
export let animes;
</script>

<section class="text-center">
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
    {#each animes as anime}
        <h2>{anime.title}</h2>
    {/each}
  </div>
</section>