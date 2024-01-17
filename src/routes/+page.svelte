<script>
	export let data;
	import RecentEpisodes from '../components/RecentEpisodes.svelte';
</script>

<svelte:head>
	<title>69 Anime Watch All Anime For Free</title>
</svelte:head>

<section class="">
	<div class="grid grid-cols-1 w-full max-w-6xl">
		<div class="w-full">
			<div class="w-full">
			<!-- content -->
				<RecentEpisodes animes={data?.animes} type={data?.type}/>
			</div>
		</div>
		<div class="hidden md:block">
		</div>
	</div>
</section>