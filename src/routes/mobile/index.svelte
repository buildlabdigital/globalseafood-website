<script context="module">
  import { Icon, Inbox } from "svelte-hero-icons";
  export const prerender = true;
</script>

<svelte:head>
  <title>Mobile</title>
</svelte:head>

<!-- Hero Image -->
<div
  class="relative overflow-hidden bg-gse-pacificBlue pt-16 sm:pt-24 lg:pt-32"
>
  <div
    class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <div>
      <h2 class="text-3xl font-semibold text-gse-pacificBlueMessage">
        GSE Live for iOS
      </h2>
      <p
        class="mt-2 text-4xl text-white font-bold tracking-tight text-gwhite sm:text-5xl"
      >
        GSE Live is Coming to iOS Soon
      </p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gse-pacificGrey">
        Harness the power of GSE Live through iOS. Soon you will be able to make
        buying and selling seafood easy from the palm of your hand.
      </p>
    </div>
    <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
      <img
        class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
        src="/gseLiveiOSBetaCover.jpg"
        alt=""
      />
    </div>
  </div>
</div>
