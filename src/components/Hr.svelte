<script lang="ts">
  import { inview } from "svelte-inview";
  import Language from "./Language.svelte";

  let visibilityState: Record<string, boolean> = {};

  function handleVisibility(sectionName: string, isVisible: boolean) {
    visibilityState = { ...visibilityState, [sectionName]: isVisible };
  }

  export let Tag: string = "h1";
  export let eng: string = "";
  export let gre: string = "";
  export let sectionName: string = "";
  export let className: string = "";
  export let lang: string = "";
</script>

<div
  use:inview
  on:inview_enter={() => handleVisibility(sectionName, true)}
  on:inview_leave={() => handleVisibility(sectionName, false)}
>
  {#if Tag === "h1"}
    <h1 class={className}>
      <!-- <Language en={eng} gr={gre} /> -->
      {lang}
    </h1>
  {:else if Tag === "h2"}
    <h2 class={className}>
      {lang}
    </h2>
  {:else if Tag === "h3"}
    <h3 class={className}>
      <Language en={eng} gr={gre} />
    </h3>
  {:else if Tag === "p"}
    <p class={className}>
      <Language en={eng} gr={gre} />
    </p>
  {:else}
    <div class={className}>
      <Language en={eng} gr={gre} />
    </div>
  {/if}
  <hr
    class="absolute left-1/2 transform -translate-x-1/2 mt-2 border-t-2 border-blue-500 transition-all w-full"
    class:animate-shrink={!!visibilityState[sectionName]}
  />
</div>
