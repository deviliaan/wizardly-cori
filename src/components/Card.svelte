<script>
  export let anime,type;
  import {Card,Badge } from 'flowbite-svelte';
</script>
<Card padding="none" class="w-[95%] h-full">
      <img class="object-cover h-[90%] min-h-[70%] w-full" src="{anime.image}" alt="Next" />
    <div class="px-5 pb-5 w-full ml-0 pb-0 mt-2 pr-0 pl-2">
      <p class="text-xs font-bold text-gray-900 dark:text-white truncate">{anime.title}</p>
    </div>
    <div class="m-0 pt-1 pb-2 flex gap-2 px-2 flex-wrap justify-around">
      <Badge color="green" class="truncate h-5">Episode: {anime.episodeNumber}</Badge>
      <Badge color="red" class="truncate h-5">{type == 1?'Sub': type==2? 'Dub': 'ONA'}</Badge>
    </div>
</Card>