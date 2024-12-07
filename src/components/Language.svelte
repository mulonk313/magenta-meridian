<script>
  import { language } from "../stores/languageStore";

  export let en = "";
  export let gr = "";

  let currentLanguage;

  $: currentLanguage = $language;
</script>

<span>
  {#if currentLanguage === "EN"}
    {en}
  {:else}
    {gr}
  {/if}
</span>
