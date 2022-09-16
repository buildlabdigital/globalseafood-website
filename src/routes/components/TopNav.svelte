<script>
  import {
    Icon,
    Menu,
    X,
    DesktopComputer,
    DeviceMobile,
    Users,
    ChevronDown,
    ChevronRight,
    ChatAlt,
    Globe,
    User,
  } from "svelte-hero-icons";
  import { page } from "$app/stores";
  import MobileMenu from "./MobileMenu.svelte";

  let flyOutMenu1Open = false;
  let flyOutMenu2Open = false;
  let mobileMenuOpen = false;

  let links = [
    { label: "Marketplace", href: "/marketplace", icon: Globe },
    { label: "Team", href: "/team", icon: User },
    { label: "Contact", href: "/contact", icon: ChatAlt },
  ];

  let flyOutMenu1Links = [
    {
      label: "Web",
      href: "/web",
      icon: DesktopComputer,
      message: "Learn about our web software.",
    },
    {
      label: "iOS",
      href: "/mobile",
      icon: DeviceMobile,
      message: "Learn about our mobile software.",
    },
    // { label: "Contact", href: "/contact", icon: ChatAlt },
  ];

  let flyOutMenu2Links = [
    {
      label: "Team",
      href: "/team",
      icon: Users,
      message: "Meet our team.",
    },
    {
      label: "Sustainability",
      href: "/sustainability",
      icon: DeviceMobile,
      message:
        "Learn about our efforts towards sustainable oceans and fish stocks.",
    },
    // { label: "Contact", href: "/contact", icon: ChatAlt },
  ];

  $: segment = $page.url.pathname;

  let flyOutMenu1Clicked = () => {
    flyOutMenu1Open = !flyOutMenu1Open;
    flyOutMenu2Open = false;
  };

  let flyOutMenu2Clicked = () => {
    flyOutMenu2Open = !flyOutMenu2Open;
    flyOutMenu1Open = false;
  };

  let menuClicked = () => {
    flyOutMenu1Open = false;
    flyOutMenu2Open = false;
    mobileMenuOpen = false;
  };
</script>

<svelte:body on:click={menuClicked} />

<!-- This example requires Tailwind CSS v2.0+ -->

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gse-pacificBlueAccent">
  <div
    class="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
  >
    <div>
      <a href="/" class="flex">
        <span class="sr-only">Global Seafood Exchange</span>
        <img class="h-8 w-auto sm:h-10" src="/GSELogo.svg" alt="GSE" />
      </a>
    </div>
    <div class="-my-2 -mr-2 md:hidden">
      <button
        on:click|stopPropagation={() => (mobileMenuOpen = !mobileMenuOpen)}
        type="button"
        class="hover:bg-gse-pacificBlue inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gse-pacificGrey hover:ring-2 hover:ring-white focus:outline-none {mobileMenuOpen
          ? 'bg-gse-pacificBlue focus:ring-2'
          : ''} focus:ring-inset focus:ring-white"
        aria-expanded="false"
      >
        <span class="sr-only">Open menu</span>
        <Icon
          src={Menu}
          class="{mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6"
        />
        <Icon src={X} class="{mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6" />
      </button>
    </div>
    <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
      <nav class="flex space-x-10">
        <div class="relative">
          <button
            on:click|stopPropagation={flyOutMenu1Clicked}
            type="button"
            class="text-white group inline-flex items-center rounded-md bg-gse-pacificBlueAccent text-base font-medium hover:text-gse-pacificGrey "
            aria-expanded="false"
          >
            <span>Learn</span>
            <Icon
              src={ChevronRight}
              class="{flyOutMenu1Open ? 'hidden' : 'block'} ml-1 h-4 w-4"
            />
            <Icon
              src={ChevronDown}
              class="{flyOutMenu1Open ? 'block' : 'hidden'} ml-1 h-4 w-4"
            />
          </button>

          {#if flyOutMenu1Open}
            <div
              class="absolute z-20 -ml-4 mt-9 w-screen max-w-md transform lg:max-w-3xl"
            >
              <div
                class="overflow-hidden rounded-lg shadow-lg ring-1 ring-white ring-opacity-5"
              >
                <div
                  class="relative grid gap-6 bg-gse-pacificBlueAccent px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
                >
                  {#each flyOutMenu1Links as link}
                    <a
                      href={link.href}
                      class="-m-3 flex items-start rounded-lg p-3 hover:bg-gse-pacificBlue"
                    >
                      <div
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gse-pacificBlueMessage text-white sm:h-12 sm:w-12"
                      >
                        <Icon src={link.icon} class="h-6 w-6" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-white">
                          {link.label}
                        </p>
                        <p class="mt-1 text-sm text-gse-pacificGrey">
                          {link.message}
                        </p>
                      </div>
                    </a>
                  {/each}
                </div>
                <div class="bg-white p-5 sm:p-8">
                  <a href="demo" class="-m-3 flow-root rounded-md p-3">
                    <div class="flex items-center">
                      <div class="text-base font-medium text-gse-pacificBlue">
                        Want A Demo?
                      </div>
                      <span
                        class="ml-3 inline-flex items-center rounded-full hover:bg-gse-pacificGrey bg-gse-pacificBlueMessage px-3 py-0.5 text-xs font-medium leading-5 text-white"
                        >Book Now</span
                      >
                    </div>
                    <p class="mt-1 text-sm text-gse-pacificGrey">
                      Schedule a demo today to learn how Global Seafood Exchange
                      can help you buy and sell seafood B2B.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          {/if}
        </div>

        <!-- Fly Out Menu 2 -->
        <div class="relative">
          <button
            on:click|stopPropagation={flyOutMenu2Clicked}
            type="button"
            class="text-white group inline-flex items-center rounded-md bg-gse-pacificBlueAccent text-base font-medium hover:text-gse-pacificGrey "
            aria-expanded="false"
          >
            <span>More</span>
            <Icon
              src={ChevronRight}
              class="{flyOutMenu2Open ? 'hidden' : 'block'} ml-1 h-4 w-4"
            />
            <Icon
              src={ChevronDown}
              class="{flyOutMenu2Open ? 'block' : 'hidden'} ml-1 h-4 w-4"
            />
          </button>

          <!-- Fly Out Menu 2 if-->
          {#if flyOutMenu2Open}
            <!-- <div
              class="absolute left-1/2 z-10 mt-9 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0"
            > -->
            <div
              class="absolute z-20 -ml-4 mt-9 w-screen max-w-xs transform lg:max-w-md"
            >
              <div
                class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div
                  class="relative grid gap-6 bg-gse-pacificBlueAccent px-5 py-6 sm:gap-8 sm:p-8"
                >
                  {#each flyOutMenu2Links as link}
                    <a
                      href={link.href}
                      class="-m-3 block rounded-md p-3 hover:bg-gse-pacificBlue"
                    >
                      <!-- <div
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gse-pacificBlueMessage text-white sm:h-12 sm:w-12"
                      >
                        <Icon src={link.icon} class="h-6 w-6" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-white">
                          {link.label}
                        </p>
                        <p class="mt-1 text-sm text-gse-pacificGrey">
                          {link.message}
                        </p>
                      </div> -->
                      <p class="text-base font-medium text-white">
                        {link.label}
                      </p>
                      <p class="mt-1 text-sm text-gse-pacificGrey">
                        {link.message}
                      </p>
                    </a>
                  {/each}
                </div>
              </div>
            </div>
          {/if}
        </div>

        <!-- Contact Link -->
        <a
          href="/contact"
          class="text-base font-medium text-white hover:text-gse-pacificGrey"
          >Contact</a
        >
      </nav>

      <!-- Main Menu Sign In, Sign Up, & Book Demo -->
      <div class="flex items-center md:ml-12">
        <a
          href="https://app.globalseafoodexchange.com/"
          class="text-base font-medium text-white hover:text-gse-pacificGrey"
          >GSE Live</a
        >
        <a
          href="/demo"
          class="ml-4 inline-flex items-center justify-center rounded-md border border-transparent bg-gse-pacificBlueMessage px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gse-pacificGrey"
          >Book Demo</a
        >
      </div>
    </div>
  </div>

  {#if mobileMenuOpen}
    <div
      class="absolute z-20 inset-x-0 origin-top-right transform p-2 transition md:hidden"
    >
      <div
        class="divide-y-2 divide-gse-pacificBlue rounded-lg bg-gse-pacificBlueAccent shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <div class="px-5 pt-5 pb-6">
          <!-- <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="/GSELogo.svg" alt="GSE" />
            </div>
            <div class="-mr-2">
              <button
                on:click|stopPropagation={() =>
                  (mobileMenuOpen = !mobileMenuOpen)}
                type="button"
                class="hover:bg-gse-pacificBlue inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gse-pacificGrey hover:ring-2 hover:ring-white focus:outline-none {mobileMenuOpen
                  ? 'focus:ring-2'
                  : ''} focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Close menu</span>
                <Icon
                  src={X}
                  class="{mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6"
                />
              </button>
            </div>
          </div> -->
          <div class="">
            <nav class="grid gap-6">
              {#each flyOutMenu1Links as link}
                <a
                  href={link.href}
                  class="-m-3 flex items-center rounded-lg p-3 hover:bg-gse-pacificBlue"
                >
                  <div
                    class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gse-pacificBlueMessage text-white"
                  >
                    <Icon src={link.icon} class="h-6 w-6" />
                  </div>
                  <div class="ml-4 text-base font-medium text-white">
                    {link.label}
                  </div>
                </a>
              {/each}
            </nav>
          </div>
        </div>
        <div class="py-6 px-5">
          <div class="grid grid-cols-2 gap-4">
            {#each flyOutMenu2Links as link}
              <a
                href={link.href}
                class="text-base font-medium text-white hover:text-gse-pacificGrey"
                >{link.label}</a
              >
            {/each}
          </div>
          <div class="mt-6">
            <a
              href="/demo"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-gse-pacificBlueMessage px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gse-pacificGrey"
              >Book Demo</a
            >
            <p class="mt-6 text-center text-base font-medium text-white">
              <a
                href="https://app.globalseafoodexchange.com/"
                class="text-white hover:text-gse-pacificGrey">Sign in</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
