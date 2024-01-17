<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="app bg-slate-800">
	<main class="flex flex-col min-h-screen">
    	<Navbar />
		<slot />
		<Footer />
	</main>
</div>

