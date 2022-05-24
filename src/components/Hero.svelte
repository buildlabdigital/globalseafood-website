<script>
  let logo = `/GSELogo.png`;
  let listings = "/Listings.png";
  let tagline = `The World's Seafood Marketplace`;
  let subTagline = `Connecting the World's fisherman, wholesalers, processors, importers, exporters an everything in between to make buying and selling seafood easy.`;
  let contactEmail = "gse@globalseafoodexchange.com";
  let appleLink = "/";
  let googleLink = "/";
</script>

<div class="pb-8 sm:pb-12 lg:pb-12">
  <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
    <div
      class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
    >
      <div>
        <div>
          <img
            class="h-40 rounded-lg p-0 bg-gse-pacificBlue w-auto"
            src={logo}
            alt="Global Seafood Exchange"
          />
          <!-- <span class="font-bold text-2xl">Global Seafood Exchange</span> -->
        </div>
        <div class="mt-20">
          <div>
            <div class="inline-flex space-x-4">
              <span
                class="rounded bg-gse-pacificBlueMessage px-2.5 py-1 text-s font-semibold text-white tracking-wide uppercase"
              >
                Coming Q2 2022
              </span>
              <span
                class="inline-flex items-center text-s font-semibold text-white space-x-1"
              >
                <a href="mailto:{contactEmail}">Contact</a>
                <!-- Heroicon name: solid/chevron-right -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div class="mt-6 sm:max-w-xl">
            <h1
              class="text-4xl font-extrabold text-white tracking-tight sm:text-5xl"
            >
              {tagline}
            </h1>
            <p class="mt-6 text-xl text-gse-pacificGrey">
              {subTagline}
            </p>
          </div>
          <!-- <form action="#" class="mt-12 sm:max-w-lg sm:w-full sm:flex">
            <div class="min-w-0 flex-1">
              <label for="hero-email" class="sr-only">Email address</label>
              <input
                id="hero-email"
                type="email"
                class="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                class="block w-full rounded-md border border-transparent px-5 py-3 bg-blue-600 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-10"
                >Notify me</button
              >
            </div>
          </form> -->
          <div class="mt-6 mx-auto">
            <div class="flex items-center divide-x divide-gse-pacificGrey">
              <div
                class="min-w-0 flex-1 flex items-center justify-center sm:justify-start py-1 text-sm text-gray-500 sm:py-3"
              >
                <a href={appleLink} class="flex justify-center">
                  <img
                    class="h-20 py-4 w-auto"
                    src="/app_store_black.svg"
                    alt="Apple app store"
                  />
                </a>
                <!-- <a href={googleLink} class="h-20 py-1 flex justify-center">
                  <img
                    class="h-full"
                    src="/google-play-badge.png"
                    alt="Google Play store"
                  />
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div
        class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <div class="hidden sm:block">
          <div
            class="absolute inset-y-0 left-1/2 w-screen bg-gse-pacificBlueMessage rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"
          />
          <svg
            class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gse-pacificGrey"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
            />
          </svg>
        </div>
        <div
          class="relative sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12"
        >
          <img
            class="w-full drop-shadow-2xl lg:h-full lg:w-auto lg:max-w-none"
            src={listings}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>
