<script>
  //   import { dbUser } from "$stores/user";
  // import Avatar from '$components/Avatar.svelte'
  //   import { Auth } from "$lib/db";
  export let dropdownOpen;

  // $: image = $dbUser && $dbUser.logoUrl ? $dbUser.logoUrl : ''

  // const links = [
  // 	// { label: 'Marketplace', href: '/listings' },
  // 	{ label: 'Listings', href: '/history/listings' },
  // 	{ label: 'Orders', href: '/history/orders' },
  // 	{ label: 'Offers', href: '/history/offers' },
  // 	// { label: 'Messenger', href: '/messages' },
  // 	{ label: 'Account', href: '/account' },
  // 	// { label: 'Reports', href: '/reports', icon: DocumentReport },
  // ]

  let links = [
    { label: "Marketplace", href: "/marketplace" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  // function signOut() {
  // 	Auth.signOut()
  // }
</script>

<svelte:body on:click={() => (dropdownOpen = false)} />

<div class="{!dropdownOpen ? 'hidden' : 'block'} lg:hidden">
  <div class="px-2 pt-2 pb-3">
    {#each links as link}
      <a
        href={link.href}
        class="block rounded-md px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out focus:bg-gse-pacificGrey focus:text-white focus:outline-none"
      >
        {link.label}
      </a>
    {/each}
  </div>
  <!-- <div class="border-t border-gray-700 pt-4 pb-3">
		<div class="flex items-center px-5">
			<div class="flex-shrink-0">
				<Avatar classes="w-10 h-10" {image} />
			</div>
			<div class="ml-3">
				{#if $dbUser}
					<div class="text-base font-medium leading-6 text-white">{$dbUser.businessName}</div>
					<div class="text-sm font-medium leading-5 text-gray-400">{$dbUser.email}</div>
				{/if}
			</div>
		</div>
		<div class="mt-3 px-2">
			<a
				href="account"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
			>
				Account Settings
			</a>
			<span
				on:click={signOut}
				class="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-400 transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
			>
				Sign out
			</span>
		</div>
	</div> -->
</div>
