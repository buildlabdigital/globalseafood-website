<script>
  import DateTimePicker from "./DateTimePicker.svelte";
  import Tooltip from "./Tooltip.svelte";
  export let type = "text";
  export let label = "label";
  export let description = "";
  export let disabled = false;
  export let id = label;
  export let min = 0;
  export let checked = false;
  export let placeholder = label;
  export let value = "";
  export let prefix = "";
  export let selectValue = null;
  export let rows = "4";
  export let required = false;
  export let errorMessage = "";
  export let hasError = false;
  export let options = [];
  export let link = "link";
  export let tooltip = "";
  // export let selected
  // export let includeEmptyOption = false
  let isDirty = false;
</script>

<div class="w-full">
  {#if !["checkbox"].includes(type)}
    <label for={id} class="leading-0 flex text-sm font-medium ">
      {label}
      {#if tooltip}
        <span class="ml-1 inline text-gse-pacificGrey">
          <Tooltip>{tooltip}</Tooltip>
        </span>
      {/if}
    </label>
    {#if description}
      <div class="ml-2 text-sm">
        <span id="comments-description" class="">
          {description || ""}
        </span>
      </div>
    {/if}
  {/if}
  <div>
    {#if type === "text" || !type}
      <div class="relative mt-1 rounded-md shadow-sm">
        <input
          on:click={(e) => e.target.select()}
          on:keypress|once={() => (isDirty = true)}
          on:keydown
          bind:value
          {id}
          {required}
          {placeholder}
          {disabled}
          {...$$restProps}
          class="focus:shadow-outline-white form-input mt-1 block w-full rounded-md border border-gse-pacificGrey bg-transparent px-3 py-2 shadow-sm transition duration-150 ease-in-out focus:border-white focus:outline-4 sm:text-sm sm:leading-5"
        />
      </div>
    {:else if type === "password"}
      <div class="relative mt-1 rounded-md shadow-sm">
        <input
          on:click={(e) => e.target.select()}
          on:keypress|once={() => (isDirty = true)}
          on:keydown
          bind:value
          type="password"
          {id}
          {required}
          {placeholder}
          {disabled}
          {...$$restProps}
          class="focus:shadow-outline-white form-input mt-1 block w-full rounded-md border border-gse-pacificGrey bg-transparent px-3 py-2 shadow-sm transition duration-150 ease-in-out focus:border-white focus:outline-4 sm:text-sm sm:leading-5"
        />
      </div>
    {:else if type === "prefix"}
      <div class="mt-1 w-full sm:mt-1">
        <div class="flex w-full rounded-md shadow-sm">
          <span
            class="inline-flex items-center rounded-l-md border border-r-0 border-gse-pacificGrey bg-gse-pacificBlueAccent px-3 py-2 text-gse-pacificGrey sm:text-sm"
          >
            {prefix}
          </span>
          <input
            on:click={(e) => e.target.select()}
            on:keypress|once={() => (isDirty = true)}
            on:keydown
            bind:value
            {id}
            {required}
            {placeholder}
            {disabled}
            class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gse-pacificGrey bg-transparent px-3 py-2 sm:text-sm"
          />
        </div>
      </div>
    {:else if type === "combo"}
      <div class="relative mt-1 rounded-md shadow-sm">
        <input
          on:click={(e) => e.target.select()}
          on:keypress|once={() => (isDirty = true)}
          bind:value
          {id}
          {min}
          {required}
          {placeholder}
          {disabled}
          class="mt-1 block w-full rounded-md border-white shadow-sm focus:border-white focus:ring-white sm:text-sm"
        />
        <div class="absolute inset-y-0 right-0 flex items-center">
          <label for="currency" class="sr-only">Currency</label>
          <select
            on:change
            bind:value={selectValue}
            class="h-full cursor-pointer rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-white focus:ring-white sm:text-sm"
          >
            {#each options as option}
              {#if typeof option === "string"}
                <option value={option}>{option}</option>
              {:else}
                <option value={option.value}
                  >{option.label || option.value}</option
                >
              {/if}
            {/each}
          </select>
        </div>
      </div>
    {:else if type === "number"}
      <div class="relative mt-1 rounded-md shadow-sm">
        <input
          on:click={(e) => e.target.select()}
          on:keypress|once={() => (isDirty = true)}
          bind:value
          type="number"
          step="0.01"
          {id}
          {min}
          {required}
          {placeholder}
          {disabled}
          class="mt-1 block w-full rounded-md border-white  shadow-sm focus:border-white focus:ring-white sm:text-sm"
        />
      </div>
    {:else if type === "checkbox"}
      <div class="relative flex items-center justify-center">
        <div class="flex h-5 items-center">
          <input
            {id}
            {disabled}
            {required}
            bind:checked
            on:change|stopPropagation
            type="checkbox"
            class="h-4 w-4 cursor-pointer rounded border-white text-gse-pacificBlueMessage focus:ring-white"
          />
        </div>
        <div class="ml-2 text-sm">
          <a href={link} class="hover:text-gse-pacificBlueMessage">
            <label for="comments" class="font-medium ">{label}</label>
          </a>
          <span id="comments-description" class="">
            <span class="sr-only">{label}</span>
            {description || ""}
          </span>
        </div>
      </div>
    {:else if type === "email"}
      <div class="relative mt-1 rounded-md shadow-sm">
        <input
          on:keypress|once={() => (isDirty = true)}
          bind:value
          type="email"
          {id}
          {required}
          {placeholder}
          {disabled}
          class="focus:shadow-outline-white form-input mt-1 block w-full rounded-md border border-white px-3 py-2 shadow-sm transition duration-150 ease-in-out focus:border-white focus:outline-none sm:text-sm sm:leading-5"
        />
      </div>
    {:else if type === "date"}
      <DateTimePicker bind:value {required} />
    {:else if type === "textarea"}
      <div>
        <div class="relative mt-1 rounded-md shadow-sm">
          <textarea
            id="about"
            name="about"
            {rows}
            {disabled}
            bind:value
            {required}
            class="mt-1 block w-full rounded-md border-white shadow-sm focus:border-white focus:ring-white sm:text-sm"
            {placeholder}
          />
        </div>
        <p class="mt-2 text-sm " />
      </div>
    {:else if type === "select"}
      <div class="relative mt-1 rounded-md shadow-sm">
        <select
          on:change
          bind:value
          {required}
          class="mt-1 block w-full cursor-pointer rounded-md border-white bg-transparent py-2 pl-3 pr-10 text-base focus:border-white focus:outline-none focus:ring-white {!value
            ? 'opacity-50'
            : ''}"
        >
          {#if placeholder}
            <option disabled selected={!value} value>{placeholder}</option>
          {/if}
          {#each options as option}
            <option value={option.value}>{option.label || option.value}</option>
          {/each}
        </select>
      </div>
    {:else}
      <div class="relative mt-1 rounded-md shadow-sm">
        <input
          on:click={(e) => e.target.select()}
          on:keypress|once={() => (isDirty = true)}
          on:keydown
          bind:value
          {id}
          {required}
          {placeholder}
          {disabled}
          {...$$restProps}
          class="focus:shadow-outline-white form-input mt-1 block w-full rounded-md border border-gse-pacificGrey bg-transparent px-3 py-2 shadow-sm transition duration-150 ease-in-out focus:border-white focus:outline-4 sm:text-sm sm:leading-5"
        />
      </div>
    {/if}
    {#if hasError && isDirty}
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <svg
          class="h-5 w-5 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012
          0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    {/if}
    {#if hasError && isDirty}
      <p class="mt-2 text-sm text-red-600">{errorMessage}</p>
    {/if}
  </div>
</div>

<style lang="postcss">
  input,
  textarea {
    @apply bg-transparent;
  }
</style>
