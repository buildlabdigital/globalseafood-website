<script>
  import { onMount } from "svelte";
  import flatpickr from "flatpickr";
  import "flatpickr/dist/flatpickr.css";
  import "flatpickr/dist/themes/dark.css";

  export let value;
  export let mode = "date";

  let picker;

  onMount(() => {
    flatpickr(picker, {
      enableTime: mode === "datetime",
      dateFormat: "m-d-Y",
      minDate: "today",
      defaultDate: new Date(value),
    });
  });
</script>

<input
  bind:this={picker}
  class="block w-full flex-1 rounded-md border border-white bg-transparent px-3 py-2 text-white focus:border-white focus:outline-none focus:ring-white sm:text-sm sm:leading-5 "
  bind:value
  name="datepicker"
/>

<style lang="postcss">
  :global(.flatpickr-months) {
    @apply bg-gse-pacificBlue;
  }

  :global(.flatpickr-current-month .flatpickr-monthDropdown-months) {
    @apply bg-transparent;
  }

  :global(.flatpickr-months .flatpickr-month) {
    @apply bg-transparent;
  }

  :global(.flatpickr-day.flatpickr-disabled) {
    /* @apply text-gse-pacificGrey; */
  }

  :global(.flatpickr-weekdays, span.flatpickr-weekday) {
    @apply bg-gse-pacificBlueAccent;
  }

  :global(.flatpickr-calendar, .flatpickr-innerContainer) {
    @apply bg-gse-pacificBlue;
  }
</style>
