<script>
  import Language from "./Language.svelte";

  function scrollToSection(info) {
    const section = document.getElementById(info);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Section not found!");
    }
  }

  export let ClassN = "";
</script>

<button
  on:click={() => scrollToSection(ClassN)}
  class="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
>
  <Language en="See More" gr="Δείτε Περισσότερα" />
</button>
