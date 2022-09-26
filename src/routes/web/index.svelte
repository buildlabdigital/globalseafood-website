<script context="module">
  import { Icon, Inbox } from "svelte-hero-icons";
  export const prerender = true;
</script>

<svelte:head>
  <title>Web</title>
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
        GSE Live
      </h2>
      <p
        class="mt-2 text-4xl text-white font-bold tracking-tight text-gwhite sm:text-5xl"
      >
        A Better Way to Buy & Sell Seafood
      </p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gse-pacificGrey">
        GSE Live is designed to help you buy and sell seafood B2B. Custom shop
        pages, unique products links, and order management is just the
        beginning.
      </p>
    </div>
    <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
      <img
        class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
        src="/web/SeafoodStorePublic.png"
        alt=""
      />
    </div>
  </div>
</div>
<!-- Section 1 - Text Block  -->
<div class="bg-gse-pacificBlue mt-10">
  <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-semibold text-gse-pacificBlueMessage">
        Listings
      </h2>
      <p
        class="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        Simple Buy & Sell Listings
      </p>
      <p class="mx-auto mt-5 max-w-xl text-xl text-gse-pacificGrey">
        We've created simple two way listings. Looking to sell seafood? Create a
        Buy listing. Looking to buy seafood? Create a Sell listing. Manage your
        sales and purchasing 24/7 with your own Seafood Store.
      </p>
    </div>
  </div>
</div>
<!-- Section 2 - Text Image Right  -->
<div class="relative overflow-hidden mt-10 bg-gse-pacificBlue pt-10 pb-32">
  <div class="relative">
    <div
      class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
    >
      <div
        class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0"
      >
        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-gse-pacificBlueMessage"
            >
              <!-- Heroicon name: outline/inbox -->
              <Icon src={Inbox} class="h-6 w-6 text-white" />
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-bold tracking-tight text-white">
              Listing Management
            </h2>
            <p class="mt-4 text-lg text-gse-pacificGrey">
              See all of your lisitngs in one convenient location. Make edits to
              exisitng listings to managed inventory levels or update shipment
              dates. You can also create pre-orders for buying or selling
              seafood at a future date to hedge your pricing.
            </p>
            <div class="mt-6">
              <a
                href="https://app.globalseafoodexchange.com/"
                class="inline-flex rounded-md border border-transparent bg-gse-pacificBlueMessage px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gse-pacificGrey"
                >Get Started</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0">
        <div
          class="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"
        >
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/web/ListingsWeb.png"
            alt="Inbox user interface"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Section 3 - Text Block  -->
  <div class="bg-gse-pacificBlue mt-10">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-semibold text-gse-pacificBlueMessage">
          Seafood
        </h2>
        <p
          class="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          50+ Species of Seafood
        </p>
        <p class="mx-auto mt-5 max-w-xl text-xl text-gse-pacificGrey">
          We have more than 50 species of seafood available. Don't see the
          species you need? Simple ask and we will get it added.
        </p>
      </div>
    </div>
  </div>
  <!-- Section 4 - Text Image Left  -->
  <div class="mt-10">
    <div
      class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
    >
      <div
        class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0"
      >
        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-gse-pacificBlueMessage"
            >
              <!-- Heroicon name: outline/sparkles -->
              <Icon src={Inbox} class="h-6 w-6 text-white" />
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-bold tracking-tight text-white">
              Receive Orders & Offers 24/7
            </h2>
            <p class="mt-4 text-lg text-gse-pacificGrey">
              With direct links to you products, your seafood is available 24/7.
              Wether you're buying or selling your Seafood Store works for you
              around the clock. You can also accept offers to engage with
              customers wanting to negotiate pricing.
            </p>
            <div class="mt-6">
              <a
                href="https://app.globalseafoodexchange.com/"
                class="inline-flex rounded-md border border-transparent bg-gse-pacificBlueMessage px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gse-pacificGrey"
                >Get Started</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
        <div
          class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"
        >
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/web/ListingWeb.png"
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Section 5 - Text Block  -->
  <div class="bg-gse-pacificBlue mt-10">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-semibold text-gse-pacificBlueMessage">
          Pricing Protection
        </h2>
        <p
          class="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Protect Your Pricing
        </p>
        <p class="mx-auto mt-5 max-w-xl text-xl text-gse-pacificGrey">
          Protecting your pricing is simple when you only allow for offers on
          your listings. You do not expose your pricing to potentail customers
          and let them make the offers to you.
        </p>
      </div>
    </div>
  </div>
  <!-- Section 6 - Text Image Right -->
  <div class="relative mt-10">
    <div
      class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
    >
      <div
        class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0"
      >
        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-gse-pacificBlueMessage"
            >
              <!-- Heroicon name: outline/inbox -->
              <Icon src={Inbox} class="h-6 w-6 text-white" />
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-bold tracking-tight text-white">
              Manage Your Orders and Offers
            </h2>
            <p class="mt-4 text-lg text-gse-pacificGrey">
              Manage all incoming and outgoing orders and offers in one place.
              Keep track of who needs to be paid and who owes you money. Accept
              or reject offers made. Best of all, receive orders and offers 24/7
              through you Seafood Store page.
            </p>
            <div class="mt-6">
              <a
                href="https://app.globalseafoodexchange.com/"
                class="inline-flex rounded-md border border-transparent bg-gse-pacificBlueMessage px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gse-pacificGrey"
                >Get Started</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0">
        <div
          class="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"
        >
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/web/ListingsWeb.png"
            alt="Inbox user interface"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Section 7 - Text Block  -->
  <div class="bg-gse-pacificBlue mt-10">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-semibold text-gse-pacificBlueMessage">
          Exporting
        </h2>
        <p
          class="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Export Your Orders
        </p>
        <p class="mx-auto mt-5 max-w-xl text-xl text-gse-pacificGrey">
          Year end reporting has never been easier. Export all of your orders
          and make your bookkeepers day. No more managing orders in excel or on
          paper.
        </p>
      </div>
    </div>
  </div>
  <!-- Section 8 - Text Image Left  -->
  <div class="mt-10">
    <div
      class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
    >
      <div
        class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0"
      >
        <div>
          <div>
            <span
              class="flex h-12 w-12 items-center justify-center rounded-md bg-gse-pacificBlueMessage"
            >
              <!-- Heroicon name: outline/sparkles -->
              <Icon src={Inbox} class="h-6 w-6 text-white" />
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-bold tracking-tight text-white">
              Manage Your Account
            </h2>
            <p class="mt-4 text-lg text-gse-pacificGrey">
              Your account page allows for quick management of your Seafood
              Store page, addresses, bank accounts, and more. Powerful tools
              made simple to help you buy and seel seafood.
            </p>
            <div class="mt-6">
              <a
                href="https://app.globalseafoodexchange.com/"
                class="inline-flex rounded-md border border-transparent bg-gse-pacificBlueMessage px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gse-pacificGrey"
                >Get Started</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
        <div
          class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"
        >
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/web/AccountWebWide.png"
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Section 9 - Text Block  -->
  <div class="bg-gse-pacificBlue mt-10">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-semibold text-gse-pacificBlueMessage">
          38 Currencies
        </h2>
        <p
          class="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Currencies For Your Business
        </p>
        <p class="mx-auto mt-5 max-w-xl text-xl text-gse-pacificGrey">
          Create listings and transact in currencies that make sense for your
          business. With 38 currencies, the choice is yours.
        </p>
      </div>
    </div>
  </div>
  <!-- Section 10 - Text Block  -->
  <div class="bg-gse-pacificBlue mt-10">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-semibold text-gse-pacificBlueMessage">
          Coming Soon
        </h2>
        <p
          class="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          GSE Marketplace
        </p>
        <p class="mx-auto mt-5 max-w-xl text-xl text-gse-pacificGrey">
          Coming soon is the GSE Marketplace. See all listing from every company
          in one place. Filter listings to easily find what you need. Finding
          new customers will be a breeze. Use the power of the GSE Marketplace
          to buy and sell seafood.
        </p>
      </div>
    </div>
  </div>
</div>
