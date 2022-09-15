<script>
  import "../app.postcss";
  import TopNav from "./components/TopNav.svelte";
  import FooterNav from "./components/FooterNav.svelte";
</script>

<div class="bg-gse-pacificBlue min-h-screen">
  <TopNav />
  <slot />
  <FooterNav />
</div>
