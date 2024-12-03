<script>
  import { inview } from "svelte-inview";

  let isVisible = false;

  function handleEnter() {
    isVisible = true;
  }

  function handleLeave() {
    isVisible = false;
  }

  function scrollToSection() {
    const section = document.getElementById("info");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Section not found!");
    }
  }
</script>

<section class="text-center py-16 bg-gray-100 mb-12">
  <div>
    <h1
      class="container mx-auto text-4xl font-bold relative"
      use:inview
      on:inview_enter={handleEnter}
      on:inview_leave={handleLeave}
    >
      Welcome to my portfolio
      <hr
        class="absolute left-1/2 transform -translate-x-1/2 mt-2 border-t-2 border-blue-500 transition-all"
        class:animate-shrink={isVisible}
        style="width: 100%;"
      />
    </h1>
    <p class="mt-4 text-lg">
      Discover who i am, what i have done and some of my projects.
    </p>
    <button
      on:click={scrollToSection}
      class="mt-6 px-6 py-2 bg-blue-500 text-white rounded"
    >
      See More
    </button>
  </div>
</section>
