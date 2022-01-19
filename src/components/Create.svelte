<script>
  import SellOfferDetail from "./SellOfferDetail.svelte";
  let logo = `/GSELogo.png`;
  let create = "/Create.png";
  let tagline = `The World's Seafood Marketplace`;
  let subTagline = `Connecting the World's seafood wholesalers and processors to make buying and selling seafood easy.`;
  let contactEmail = "gse@globalseafoodexchange.com";
  let appleLink = "/";
  let googleLink = "/";
</script>

<div class="relative mt-24">
  <div
    class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
  >
    <div
      class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
    >
      <div>
        <div>
          <span
            class="h-12 w-12 rounded-md flex items-center justify-center bg-gse-pacificBlueMessage"
          >
            <!-- Heroicon name: outline/inbox -->
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </span>
        </div>
        <div class="mt-6">
          <h2 class="text-3xl font-extrabold tracking-tight text-white">
            Create Listings
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Easliy Sell or Offer... Easliy Sell or Offer... Easliy Sell or
            Offer... Easliy Sell or Offer... Easliy Sell or Offer... Easliy Sell
            or Offer... Easliy Sell or Offer... Easliy Sell or Offer...
          </p>
          <!-- <div class="mt-6">
              <a
                href="/"
                class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gse-pacificBlueMessage hover:bg-indigo-700"
              >
                Get started
              </a>
            </div> -->
        </div>
      </div>
      <!-- <div class="mt-8 border-t border-gray-200 pt-6">
          <blockquote>
            <div>
              <p class="text-base text-gray-500">
                &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam.
                Sit orci risus aenean curabitur donec aliquet. Mi venenatis in
                euismod ut.&rdquo;
              </p>
            </div>
            <footer class="mt-3">
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <img
                    class="h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt=""
                  />
                </div>
                <div class="text-base font-medium text-gray-700">
                  Marcia Hill, Digital Marketing Manager
                </div>
              </div>
            </footer>
          </blockquote>
        </div> -->
    </div>
    <div class="mt-12 sm:mt-16 lg:mt-0">
      <div
        class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
      >
        <img
          class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-40 lg:h-full lg:w-auto lg:max-w-none"
          src={create}
          alt="Inbox user interface"
        />
      </div>
    </div>
  </div>
</div>
