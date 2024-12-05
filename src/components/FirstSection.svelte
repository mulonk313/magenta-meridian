<script>
  import { inview } from "svelte-inview";
  import { language } from "../stores/languageStore";

  let isVisible = false;

  function handleEnter() {
    isVisible = true;
  }

  function handleLeave() {
    isVisible = false;
  }

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
</script>

<section class="text-center py-16 bg-gray-100 mb-12 mt-12">
  <div>
    <h1
      class="sm:container sm:mx-auto text-4xl font-bold relative mb-8"
      use:inview
      on:inview_enter={handleEnter}
      on:inview_leave={handleLeave}
    >
      {$language === "EN"
        ? "Welcome to my portfolio"
        : "Καλωσήρθατε στο πορτφόλιό μου"}

      <hr
        class="absolute left-1/2 transform -translate-x-1/2 mt-2 border-t-2 border-blue-500 transition-all"
        class:animate-shrink={isVisible}
        style="width: 100%;"
      />
    </h1>
    <p class="mt-4 text-lg">
      {$language === "EN"
        ? "Discover who i am, my knowledge on programming and some of my projects."
        : "Ανακαλύψτε ποιος είμαι, τις γνώσεις μου στον προγραμματισμό και μερικά από τα έργα μου."}
    </p>
    <button
      on:click={() => scrollToSection("info")}
      class="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      {$language === "EN" ? "See More" : "Δείτε Περισσότερα"}
    </button>
  </div>
</section>
