<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="app bg-slate-800">
	<main>
    	<Navbar />
		<slot />
		<Footer />
	</main>
</div>

