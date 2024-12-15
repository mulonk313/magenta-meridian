<script lang="ts">
  function scrollToSection(info: any) {
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

  export let ClassN: string = "";
  export let langButton: string = "";
</script>

<button
  on:click={() => scrollToSection(ClassN)}
  class="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
>
  {langButton}
</button>
