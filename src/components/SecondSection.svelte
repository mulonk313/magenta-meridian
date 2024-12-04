<script lang="ts">
  import { inview } from "svelte-inview";

  let image1 = "src/assets/image1.webp";
  let image2 = "src/assets/image2.webp";
  let image3 = "src/assets/image3.webp";

  let isVisible = false;
  let isVisible1 = false;
  let isVisible2 = false;
  let isVisible3 = false;

  function handleEnter() {
    isVisible = true;
  }

  function handleEnter1() {
    isVisible1 = true;
  }

  function handleEnter2() {
    isVisible2 = true;
  }

  function handleEnter3() {
    isVisible3 = true;
  }

  function handleLeave() {
    isVisible = false;
  }

  function handleLeave1() {
    isVisible1 = false;
  }

  function handleLeave2() {
    isVisible2 = false;
  }

  function handleLeave3() {
    isVisible3 = false;
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
      <div
        class="grid grid-cols-2 gap-4 mb-12"
        use:inview
        on:inview_enter={handleEnter1}
        on:inview_leave={handleLeave1}
      >
        <div
          class="flex flex-col justify-center"
          class:animate-slideInLeft={isVisible1}
        >
          <h5 class="text-1xl font-bold">About me</h5>
          <p class="mb-8">{info.description}</p>
        </div>
        <div class:animate-slideInRight={isVisible1}>
          <img
            src={image1}
            alt="People"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div
        class="grid grid-cols-2 gap-4 mb-12"
        use:inview
        on:inview_enter={handleEnter2}
        on:inview_leave={handleLeave2}
      >
        <div class:animate-slideInLeft={isVisible2}>
          <img src={image2} alt="Building" loading="lazy" />
        </div>
        <div
          class="flex flex-col justify-center"
          class:animate-slideInRight={isVisible2}
        >
          <h5 class="text-1xl font-bold">About my future</h5>
          <p class="mb-8">{info.future}</p>
        </div>
      </div>
      <div
        class="grid grid-cols-2 gap-4 mb-12"
        use:inview
        on:inview_enter={handleEnter2}
        on:inview_leave={handleLeave2}
      >
        <div
          class="flex flex-col justify-center"
          class:animate-slideInLeft={isVisible3}
        >
          <h5 class="text-1xl font-bold">About my interview</h5>
          <p class="mb-8">{info.interviewContent}</p>
        </div>
        <div class:animate-slideInRight={isVisible3}>
          <img src={image3} alt="Offer" loading="lazy" />
        </div>
      </div>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</section>
