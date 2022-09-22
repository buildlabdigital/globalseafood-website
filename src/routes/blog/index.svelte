<script context="module">
  export const prerender = true;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
  class="relative bg-gse-pacificBlue px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
>
  <div class="absolute inset-0">
    <div class="h-1/3 bg-gse-pacificBlue sm:h-2/3" />
  </div>
  <div class="relative mx-auto max-w-7xl">
    <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        GSE Blog
      </h2>
      <p class="mx-auto mt-3 max-w-2xl text-xl text-gse-pacificGrey sm:mt-4">
        About our journey to change the way the world buys and sells seafood.
      </p>
    </div>
    <div
      class="mx-auto mt-12 grid max-w-lg gap-x-5 gap-y-16 lg:max-w-none lg:grid-cols-3"
    >
      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <a href="/blog/youngs-lobster-company">
            <img
              class="h-48 w-full object-cover"
              src="/YoungsLobsterCompanyCover.jpg"
              alt=""
            /></a
          >
        </div>
        <div
          class="flex flex-1 flex-col justify-between bg-gse-pacificBlueAccent p-6"
        >
          <div class="flex-1">
            <p class="text-sm font-medium text-gse-pacificBlueMessage">
              <a href="/blog/youngs-lobster-company" class="hover:underline"
                >New Company</a
              >
            </p>
            <a href="/blog/youngs-lobster-company" class="mt-2 block">
              <p class="text-xl font-semibold text-white">
                GSE Welcomes Young's Lobster Company
              </p>
              <p class="mt-3 text-base text-gse-pacificGrey">
                We're thrilled to welcome Young's Lobster Compnay to GSE Live.
                Learn more about their buinsess, seafood specialties, and
                efforts towards sustainalbe fisheries.
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="/blog/youngs-lobster-company">
                <span class="sr-only">Jon Thornham</span>
                <img
                  class="h-10 w-10 object-cover rounded-full"
                  src="/JonThornhamHeadShot.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">
                <a href="/blog/youngs-lobster-company" class="hover:underline"
                  >Jon Thornham</a
                >
              </p>
              <div class="flex space-x-1 text-sm text-gse-pacificGrey">
                <time datetime="2020-03-16">Sep 19, 2022</time>
                <span aria-hidden="true">&middot;</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <a href="/blog/chad-brown-seafoods">
            <img
              class="h-48 w-full object-cover"
              src="/ChadBrownSeafoodsCover.jpg"
              alt=""
            /></a
          >
        </div>
        <div
          class="flex flex-1 flex-col justify-between bg-gse-pacificBlueAccent p-6"
        >
          <div class="flex-1">
            <p class="text-sm font-medium text-gse-pacificBlueMessage">
              <a href="/blog/chad-brown-seafoods" class="hover:underline"
                >New Company</a
              >
            </p>
            <a href="/blog/chad-brown-seafoods" class="mt-2 block">
              <p class="text-xl font-semibold text-white">
                GSE Welcomes Chad Brown Seafoods
              </p>
              <p class="mt-3 text-base text-gse-pacificGrey">
                Welcome Chad Brown Seafoods. Read more to learn how you can get
                their Atlantic lobster, softshell clams, and more.
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="/blog/chad-brown-seafoods">
                <span class="sr-only">Jon Thornham</span>
                <img
                  class="h-10 w-10 object-cover rounded-full"
                  src="/JonThornhamHeadShot.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">
                <a href="/blog/chad-brown-seafoods" class="hover:underline"
                  >Jon Thornham</a
                >
              </p>
              <div class="flex space-x-1 text-sm text-gse-pacificGrey">
                <time datetime="2020-03-16">Sep 16, 2022</time>
                <span aria-hidden="true">&middot;</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <a href="/blog/canadian-seafood-show-2022">
            <img
              class="h-48 w-full object-cover"
              src="/CanadianSeafoodShow.jpg"
              alt=""
            /></a
          >
        </div>
        <div
          class="flex flex-1 flex-col justify-between bg-gse-pacificBlueAccent p-6"
        >
          <div class="flex-1">
            <p class="text-sm font-medium text-gse-pacificBlueMessage">
              <a href="/blog/canadian-seafood-show-2022" class="hover:underline"
                >Trade Show</a
              >
            </p>
            <a href="/blog/canadian-seafood-show-2022" class="mt-2 block">
              <p class="text-xl font-semibold text-white">
                Canadian Seafood Show 2022
              </p>
              <p class="mt-3 text-base text-gse-pacificGrey">
                We spent two days at the Canadian Seafood show in Montreal,
                Canada. Click to learn more about our recap from the show.
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="/blog/canadian-seafood-show-2022">
                <span class="sr-only">Jon Thornham</span>
                <img
                  class="h-10 w-10 object-cover rounded-full"
                  src="/JonThornhamHeadShot.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">
                <a
                  href="/blog/canadian-seafood-show-2022"
                  class="hover:underline">Jon Thornham</a
                >
              </p>
              <div class="flex space-x-1 text-sm text-gse-pacificGrey">
                <time datetime="2020-03-16">Sep 12, 2022</time>
                <span aria-hidden="true">&middot;</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <a href="/blog/gse-live-web-beta">
            <img
              class="h-48 w-full object-cover"
              src="/gseLiveWebCover.jpg"
              alt=""
            /></a
          >
        </div>
        <div
          class="flex flex-1 flex-col justify-between bg-gse-pacificBlueAccent p-6"
        >
          <div class="flex-1">
            <p class="text-sm font-medium text-gse-pacificBlueMessage">
              <a href="/blog/gse-live-web-beta" class="hover:underline"
                >Software Update</a
              >
            </p>
            <a href="/blog/gse-live-web-beta" class="mt-2 block">
              <p class="text-xl font-semibold text-white">
                GSE Live Web Beta Released
              </p>
              <p class="mt-3 text-base text-gse-pacificGrey">
                Our GSE Live web software is offically live in Beta. Click to
                learn more about our new software for buying and selling seafood
                B2B. Book your live demo now.
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="/blog/gse-live-web-beta">
                <span class="sr-only">Jon Thornham</span>
                <img
                  class="h-10 w-10 object-cover rounded-full"
                  src="/JonThornhamHeadShot.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">
                <a href="/blog/gse-live-web-beta" class="hover:underline"
                  >Jon Thornham</a
                >
              </p>
              <div class="flex space-x-1 text-sm text-gse-pacificGrey">
                <time datetime="2020-03-16">Sep 1, 2022</time>
                <span aria-hidden="true">&middot;</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <a href="/blog/na-seafood-show-2022">
            <img
              class="h-48 w-full object-cover"
              src="/NASeafood2022Cover.jpg"
              alt=""
            /></a
          >
        </div>
        <div
          class="flex flex-1 flex-col justify-between bg-gse-pacificBlueAccent p-6"
        >
          <div class="flex-1">
            <p class="text-sm font-medium text-gse-pacificBlueMessage">
              <a href="/blog/na-seafood-show-2022" class="hover:underline"
                >Trade Show</a
              >
            </p>
            <a href="/blog/na-seafood-show-2022" class="mt-2 block">
              <p class="text-xl font-semibold text-white">
                North American Seafood Expo 2022
              </p>
              <p class="mt-3 text-base text-gse-pacificGrey">
                One of our founders Chris spent time at the North American
                Seafood Expo. Click to learn more about our trip.
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="/blog/na-seafood-show-2022">
                <span class="sr-only">Jon Thornham</span>
                <img
                  class="h-10 w-10 object-cover rounded-full"
                  src="/JonThornhamHeadShot.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">
                <a href="/blog/na-seafood-show-2022" class="hover:underline"
                  >Jon Thornham</a
                >
              </p>
              <div class="flex space-x-1 text-sm text-gse-pacificGrey">
                <time datetime="2020-03-16">Mar 17, 2022</time>
                <span aria-hidden="true">&middot;</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <a href="/blog/gse-live-ios-beta">
            <img
              class="h-48 w-full object-cover"
              src="/gseLiveiOSBetaCover.jpg"
              alt=""
            /></a
          >
        </div>
        <div
          class="flex flex-1 flex-col justify-between bg-gse-pacificBlueAccent p-6"
        >
          <div class="flex-1">
            <p class="text-sm font-medium text-gse-pacificBlueMessage">
              <a href="/blog/gse-live-ios-beta" class="hover:underline"
                >Software Update</a
              >
            </p>
            <a href="/blog/gse-live-ios-beta" class="mt-2 block">
              <p class="text-xl font-semibold text-white">
                GSE Live iOS in Beta Testing
              </p>
              <p class="mt-3 text-base text-gse-pacificGrey">
                Our GSE Live software for iOS is offically being beta tested by
                seafood processors. Click to learn more about the software.
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="/blog/gse-live-ios-beta">
                <span class="sr-only">Jon Thornham</span>
                <img
                  class="h-10 w-10 object-cover rounded-full"
                  src="/JonThornhamHeadShot.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">
                <a href="/blog/gse-live-ios-beta" class="hover:underline"
                  >Jon Thornham</a
                >
              </p>
              <div class="flex space-x-1 text-sm text-gse-pacificGrey">
                <time datetime="2020-03-16">Feb 28, 2022</time>
                <span aria-hidden="true">&middot;</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
