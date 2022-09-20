<script>
  export let align = "bottom";

  /**
   * Set the direction of the tooltip relative to the button
   * Need to implement
   */
  export let direction = "bottom";
  export let open = false;
  export let hideIcon = false;
  export let tooltipId = "ccs-" + Math.random().toString(36);

  export let ref = null;

  /** Obtain a reference to the tooltip HTML element */
  export let refTooltip = null;

  /** Obtain a reference to the icon HTML element */
  export let refIcon = null;

  import { createEventDispatcher, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { Icon, InformationCircle } from "svelte-hero-icons";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();
  const tooltipOpen = writable(open);

  setContext("Tooltip", { tooltipOpen });

  {
    /*

  function onKeydown(e) {
    if (e.key === "Escape" || e.key === "Tab") {
      e.stopPropagation();
      if (e.key === "Escape") refIcon?.focus();
      open = false;
    } else if (e.key === " " || e.key === "Enter") {
      e.stopPropagation();
      e.preventDefault();
      open = true;
    }
  }

  function onBlur({ relatedTarget }) {
    if (refTooltip && !refTooltip.contains(relatedTarget)) {
      open = false;
    }
  }

  function onFocus() {
    open = true;
  }


  function onMousedown() {
    // determine the desired state before the focus event triggers.
    const shouldClose = open;
    // ensure changes are scheduled at the end, i.e. after the possible focus event.
    setTimeout(() => {
      open = shouldClose ? false : true;
    });
  }

	*/
  }

  $: tooltipOpen.set(open);
  $: dispatch(open ? "open" : "close");
</script>

<div
  {...$$restProps}
  class=" inline-block min-w-max"
  style="{open ? 'z-index: 1;' : ''}{$$restProps.style}; position: relative;"
  on:mouseenter={() => {
    open = !open;
  }}
  on:mouseleave={() => {
    open = !open;
  }}
>
  {#if !hideIcon}
    <div bind:this={ref} class:bx--tooltip__label={true}>
      <slot name="trigger" />
      <div bind:this={refIcon} aria-describedby={tooltipId}>
        <slot name="icon">
          <Icon src={InformationCircle} class="h-5 w-5" />
        </slot>
      </div>
    </div>
  {:else}
    <div
      bind:this={ref}
      aria-describedby={tooltipId}
      on:mouseenter={({ target }) => {
        if (open) {
          if (target.contains(refTooltip)) {
            if (refIcon) {
              refIcon.focus();
            } else if (ref) {
              ref.focus();
            }
          }
        }
      }}
      on:mouseleave={({ target }) => {
        if (open && !ref.contains(target) && !refTooltip.contains(target)) {
          setTimeout(() => {
            open = false;
          });
        }
      }}
    >
      <slot name="trigger" />
    </div>
  {/if}
  {#if open}
    <div
      bind:this={refTooltip}
      id={tooltipId}
      class={`tooltipBox-${align} bg-gse-pacificBlue border-gse-pacificBlue absolute rounded border p-4 font-normal text-gray-200 shadow-xl`}
      data-floating-menu-direction={direction}
      transition:fade={{ duration: 120 }}
    >
      <div class="relative w-64">
        <!-- <span class={`tooltipCaret-${align}`} /> -->
        <div
          on:click|stopPropagation
          on:mousedown|stopPropagation
          class:bx--tooltip__content={true}
          tabIndex="-1"
          role="dialog"
        >
          <slot />
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .tooltipBox-top {
    bottom: 100%;
    left: calc(0% - 2.5px);
    margin-bottom: 10px;
  }

  .tooltipCaret-top {
    position: absolute;
    bottom: calc(0% - 11px);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid white;
  }

  .tooltipBox-bottom {
    top: 100%;
    left: calc(0% - 2.5px);
    margin-top: 10px;
  }

  .tooltipCaret-bottom {
    position: absolute;
    top: calc(0% - 11px);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid white;
  }

  .tooltipBox-top {
    bottom: 100%;
    left: calc(0% - 2.5px);
    margin-bottom: 10px;
  }

  .tooltipCaret-top {
    position: absolute;
    bottom: calc(0% - 11px);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid white;
  }

  .tooltipBox-top {
    bottom: 100%;
    left: calc(0% - 2.5px);
    margin-bottom: 10px;
  }

  .tooltipCaret-top {
    position: absolute;
    bottom: calc(0% - 11px);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid white;
  }
</style>
