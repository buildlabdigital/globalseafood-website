<script context="module">
  import NavBar from "$components/NavBar.svelte";
  import Footer from "$components/Footer.svelte";
  export const prerender = true;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<NavBar />

<div class="mt-6 p-8">
  <h2 class="text-3xl font-extrabold tracking-tight text-white pt-8">About</h2>
  <p class="mt-4 text-lg text-white">Comming Soon</p>
</div>

<Footer />
