<script context="module">
  import { onMount } from "svelte";
  import { notifications } from "./../../stores/notifications";
  import Input from "./../../../src/components/ui-elements/Input.svelte";
  import { goto, afterNavigate } from "$app/navigation";
  import api from "./../../lib/api";

  export const prerender = true;

  let submitLoading = false;
  let firstName = "";
  let lastName = "";
  let companyName = "";
  let email = "";
  let phoneNumber = "";
  let message = "";

  // onMount(async () => {
  //   // clearForm();
  // });

  async function sendContactEmail() {
    submitLoading = true;

    let messageObj = {
      subject: "GSE Contact Form",
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    };
    try {
      // console.log("Before Try");
      await api.email.sendEmail(messageObj);
      goto("/contact/contact-complete");
      clearForm();
      // console.log("After Try");
      submitLoading = false;
    } catch (error) {
      console.log(error);
      clearForm();
      submitLoading = false;
    }
  }

  let clearForm = () => {
    console.log("Called?");
    firstName = "";
    lastName = "";
    companyName = "";
    email = "";
    phoneNumber = "";
    message = "";
  };
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
        on:submit|preventDefault={sendContactEmail}
        method="POST"
        class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <div>
          <label for="first-name" class="block text-sm font-medium text-white"
            >First Name *</label
          >
          <div class="mt-1">
            <!-- <Input
              label="Business Address 1"
              type="text"
              bind:value={message.firstName}
              required={true}
            /> -->
            <input
              type="text"
              name="first-name"
              id="first-name"
              bind:value={firstName}
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
              bind:value={lastName}
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
              bind:value={companyName}
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
              bind:value={email}
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
              bind:value={phoneNumber}
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
              bind:value={message}
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
            class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gse-pacificBlueMessage px-6 py-3 text-base font-medium text-white hover:bg-gse-pacificGrey focus:outline-none"
            >Send Message</button
          >
        </div>
      </form>
    </div>
  </div>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gse-pacificBlue">
    <div class="mx-auto max-w-7xl py-16 px-4 mt-8 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8"
      >
        <div>
          <h2
            class="text-2xl font-bold text-white sm:text-3xl sm:tracking-tight"
          >
            Sales Support
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gse-pacificGrey">
              Contact us to learn more about GSE Live and how we can help you
              buy and sell seafood B2B.
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <!-- Heroicon name: outline/phone -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div class="ml-3 text-base text-white">
                <p>+1-702-518-2998</p>
                <!-- <p class="mt-1">Mon-Fri 8am to 6pm PST</p> -->
              </div>
            </div>
            <!-- <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div class="ml-3 text-base text-gse-pacificGrey">
                <p>gse@globalseafoodexchange.com</p>
              </div>
            </div> -->
          </div>
        </div>
        <div class="mt-12 sm:mt-16 md:mt-0">
          <h2
            class="text-2xl font-bold text-white sm:text-3xl sm:tracking-tight"
          >
            Technical Support
          </h2>
          <div class="mt-3">
            <p class="text-lg text-gse-pacificGrey">
              Currently using GSE Live? Contact us for anything. We're happy to
              help.
            </p>
          </div>
          <div class="mt-9">
            <div class="flex">
              <div class="flex-shrink-0">
                <!-- Heroicon name: outline/phone -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div class="ml-3 text-base text-white">
                <p>+1-702-518-2998</p>
                <!-- <p class="mt-1">Mon-Fri 8am to 6pm PST</p> -->
              </div>
            </div>
            <!-- <div class="mt-6 flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div class="ml-3 text-base text-gray-500">
                <p>support@example.com</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
