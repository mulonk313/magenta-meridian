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

<section class="container mx-auto mt-12 mb-12">
  <div>
    <h2
      class="text-center text-3xl font-bold mb-10 relative"
      use:inview
      on:inview_enter={handleEnter}
      on:inview_leave={handleLeave}
    >
      Contact Me
      <hr
        class="absolute left-1/2 transform -translate-x-1/2 mt-2 border-t-2 border-blue-500 transition-all"
        class:animate-shrink={isVisible}
        style="width: 100%;"
      />
    </h2>
    <form class="flex flex-col gap-4">
      <input type="text" placeholder="Name" class="border p-2" />
      <input type="email" placeholder="Email" class="border p-2" />
      <textarea placeholder="Message" class="border p-2"></textarea>
      <button class="bg-blue-500 text-white p-2">Sumbit</button>
    </form>
  </div>
</section>
