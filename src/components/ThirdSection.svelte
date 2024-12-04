<script>
  import { inview } from "svelte-inview";

  let isVisible = false;

  function handleEnter() {
    isVisible = true;
  }

  function handleLeave() {
    isVisible = false;
  }
</script>

<section class="mb-12 bg-gray-100 py-5">
  <div class="sm:container sm:mx-auto">
    <h2
      class="text-3xl font-bold text-center relative mb-10"
      use:inview
      on:inview_enter={handleEnter}
      on:inview_leave={handleLeave}
    >
      My Projects
      <hr
        class="absolute left-1/2 transform -translate-x-1/2 mt-2 border-t-2 border-blue-500 transition-all"
        class:animate-shrink={isVisible}
        style="width: 100%;"
      />
    </h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-gray-200 p-4"></div>
      <div class="bg-gray-200 p-4"></div>
    </div>
  </div>
</section>
