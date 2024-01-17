<script>
	export let data;
	import RecentEpisodes from '../components/RecentEpisodes.svelte';
</script>

<svelte:head>
	<title>69 Anime Watch All Anime For Free</title>
</svelte:head>

<section class="text-center">
	<div class="grid grid-cols-1 max-w-6xl mx-auto">
		<div >
			<div>
			<!-- content -->
				<RecentEpisodes animes={data?.animes} />
			</div>
		</div>
		<div class="hidden md:block">
		</div>
	</div>
</section>