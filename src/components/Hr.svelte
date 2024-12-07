<script lang="ts">
  import { inview } from "svelte-inview";
  import Language from "./Language.svelte";

  let visibilityState: Record<string, boolean> = {};

  function handleEnter(sectionName: string) {
    visibilityState[sectionName] = true;
  }

  function handleLeave(sectionName: string) {
    visibilityState[sectionName] = false;
  }

  export let eng = "";
  export let gre = "";
  export let sectionName = "";
  export let className = "";
</script>

<h1
  class={className}
  use:inview
  on:inview_enter={() => handleEnter(sectionName)}
  on:inview_leave={() => handleLeave(sectionName)}
>
  <Language en={eng} gr={gre} />
  <hr
    class="absolute left-1/2 transform -translate-x-1/2 mt-2 border-t-2 border-blue-500 transition-all"
    class:animate-shrink={visibilityState[sectionName]}
    style="width: 100%;"
  />
</h1>
