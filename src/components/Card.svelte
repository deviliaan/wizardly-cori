<script>
  export let anime;
  import {Card,Badge } from 'flowbite-svelte';
</script>
<Card padding="none">
    <a href="/animes">
      <img src="{anime.image}" alt="Next" />
    </a>
    <div class="px-5 pb-5 w-full ml-0 pb-0 mt-2 pr-0 pl-2">
      <p class="text-xs font-bold text-gray-900 dark:text-white truncate">{anime.title}</p>
    </div>
    <div class="m-0 pb-2">
      <Badge color="green">Episode: {anime.episodeNumber}</Badge>
    </div>
</Card>