<script context="module">
  import sendgrid from "@sendgrid/mail";
  import { notifications } from "./../../stores/notifications";
  import api from "./../../lib/api";
  const sendgridApiKey = import.meta.env.SENDGRID_API_KEY;

  sendgrid.setApiKey(sendgridApiKey);

  export const prerender = true;

  let submitLoading = false;

  let message = { subject: "GSE Contact Form" };

  async function sendEmail(req, res) {
    submitLoading = true;
    try {
      console.log("Before Try");
      await api.email.sendEmail(message);
      console.log("After Try");
      message = {};
      submitLoading = false;
    } catch (error) {
      console.log(error);
      message = {};
      submitLoading = false;
    }
  }
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div
  class="overflow-hidden bg-gse-pacificBlue py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
>
  <div class="relative mx-auto max-w-xl">
    <svg
      class="absolute left-full translate-x-1/2 transform"
      width="404"
      height="404"
      fill="none"
      viewBox="0 0 404 404"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
        height="404"
        fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
      />
    </svg>
    <svg
      class="absolute right-full bottom-0 -translate-x-1/2 transform"
      width="404"
      height="404"
      fill="none"
      viewBox="0 0 404 404"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
        height="404"
        fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
      />
    </svg>
    <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Contact Us
      </h2>
      <p class="mt-4 text-lg leading-6 text-white">Let's talk seafood.</p>
    </div>
    <div class="mt-12">
      <form
        on:submit|preventDefault={sendEmail}
        method="POST"
        class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <div>
          <label for="first-name" class="block text-sm font-medium text-white"
            >First Name *</label
          >
          <div class="mt-1">
            <!-- <Input label={`Minimum Offer Number of`} type="number" /> -->
            <input
              type="text"
              name="first-name"
              id="first-name"
              bind:value={message.firstName}
              required="true"
              class="block w-full bg-gse-pacificBlueAccent text-white rounded-md border-gse-pacificGrey py-3 px-4 shadow-sm focus:border-white focus:ring-white"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-medium text-white"
            >Last Name *</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              bind:value={message.lastName}
              required="true"
              class="block w-full bg-gse-pacificBlueAccent text-white rounded-md border-gse-pacificGrey py-3 px-4 shadow-sm focus:border-white focus:ring-white"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-medium text-white"
            >Company *</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="company"
              id="company"
              bind:value={message.companyName}
              required="true"
              class="block w-full bg-gse-pacificBlueAccent text-white rounded-md border-gse-pacificGrey py-3 px-4 shadow-sm focus:border-white focus:ring-white"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-medium text-white"
            >Email *</label
          >
          <div class="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              bind:value={message.email}
              required="true"
              class="block w-full bg-gse-pacificBlueAccent text-white rounded-md border-gse-pacificGrey py-3 px-4 shadow-sm focus:border-white focus:ring-white"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-medium text-white"
            >Phone Number</label
          >
          <div class="relative mt-1 rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select
                id="country"
                name="country"
                class="h-full rounded-md border-transparent bg-gse-pacificBlueAccent py-0 pl-4 pr-8 text-gse-pacificGrey focus:border-white focus:ring-white"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
            </div>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              bind:value={message.phoneNumber}
              class="block w-full rounded-md bg-gse-pacificBlueAccent placeholder-gse-pacificGrey text-gse-pacificGrey border-gray-300 py-3 px-4 pl-20 focus:border-white focus:ring-white"
              placeholder="+1 (555) 987-6543"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-medium text-white"
            >Message *</label
          >
          <div class="mt-1">
            <textarea
              id="message"
              name="message"
              rows="4"
              required="true"
              bind:value={message.text}
              class="block w-full bg-gse-pacificBlueAccent text-white rounded-md border-gse-pacificGrey py-3 px-4 shadow-sm focus:border-white focus:ring-white"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
              <button
                type="button"
                class="bg-gse-pacificBlueMessage relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Agree to policies</span>
                <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                <span
                  aria-hidden="true"
                  class="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                />
              </button>
            </div>
            <div class="ml-3">
              <p class="text-base text-gse-pacificGrey">
                By selecting this, you agree to the
                <a
                  href="/privacy"
                  class="font-medium text-gse-pacificBlueMessage underline"
                  >Privacy Policy</a
                >
                and
                <a
                  href="/terms"
                  class="font-medium text-gse-pacificBlueMessage underline"
                  >Terms</a
                >.
              </p>
            </div>
          </div>
        </div>
        <div class="sm:col-span-2">
          <button
            type="submit"
            disabled={submitLoading}
            class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gse-pacificBlueMessage px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gse-pacificBlueMessage focus:outline-none focus:ring-2 focus:ring-gse-pacificBlueMessage focus:ring-offset-2"
            >Send Message</button
          >
        </div>
      </form>
    </div>
  </div>
</div>
