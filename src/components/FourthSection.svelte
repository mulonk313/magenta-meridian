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

<section class="container mx-auto mt-12 px-4">
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
    <form
      class="flex flex-col gap-4 max-w-lg mx-auto bg-slate-100 px-6 py-8 border border-slate-300 rounded-lg shadow-lg"
    >
      <label for="name" class="sr-only">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Name"
        class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label for="email" class="sr-only">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label for="message" class="sr-only">Message</label>
      <textarea
        id="message"
        placeholder="Message"
        class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="5"
      ></textarea>
      <button
        class="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-600 transition-all w-full sm:w-auto mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  </div>
</section>
