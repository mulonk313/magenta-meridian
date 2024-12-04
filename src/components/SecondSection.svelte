<script lang="ts">
  import { inview } from "svelte-inview";
  let image1 = "src/assets/image1.webp";
  let image2 = "src/assets/image2.webp";
  let image3 = "src/assets/image3.webp";

  let isVisible = false;

  function handleEnter() {
    isVisible = true;
  }

  function handleLeave() {
    isVisible = false;
  }

  import { onMount } from "svelte";

  interface AboutInfo {
    description: string;
    future: string;
    interviewContent: string;
  }

  let info: AboutInfo | null = null;

  onMount(async () => {
    try {
      const response = await fetch("/api/about");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: AboutInfo = await response.json();

      info = data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  });
</script>

<section id="info" class="sm:container sm:mx-auto mb-12">
  <div class="text-center mb-8">
    <h2
      class="text-3xl font-bold relative"
      use:inview
      on:inview_enter={handleEnter}
      on:inview_leave={handleLeave}
    >
      Introduction
      <hr
        class="absolute left-1/2 transform -translate-x-1/2 mt-2 border-t-2 border-blue-500 transition-all"
        class:animate-shrink={isVisible}
        style="width: 100%;"
      />
    </h2>
  </div>
  <div>
    {#if info}
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h5 class="text-1xl font-bold">About me</h5>
          <p class="mb-8">{info.description}</p>
        </div>
        <div>
          <img src={image1} alt="People" loading="lazy" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <img src={image2} alt="Building" loading="lazy" />
        </div>
        <div>
          <h5 class="text-1xl font-bold">About my future</h5>
          <p class="mb-8">{info.future}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h5 class="text-1xl font-bold">About my interview</h5>
          <p class="mb-8">{info.interviewContent}</p>
        </div>
        <div>
          <img src={image3} alt="Offer" loading="lazy" />
        </div>
      </div>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</section>
