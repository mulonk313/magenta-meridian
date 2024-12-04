<script lang="ts">
  import { inview } from "svelte-inview";
  import { onMount } from "svelte";

  let images = [
    "src/assets/image1.webp",
    "src/assets/image2.webp",
    "src/assets/image3.webp",
  ];

  // Visibility tracking
  let isVisible: Record<string, boolean> = {
    intro: false,
    section1: false,
    section2: false,
    section3: false,
  };

  function handleEnter(section: string) {
    if (!isVisible[section]) {
      isVisible[section] = true;
    }
  }

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

<section id="info" class="sm:container sm:p-6 sm:mx-auto mb-12">
  <div class="text-center mb-8">
    <h2
      class="text-3xl font-bold relative"
      use:inview
      on:inview_enter={() => handleEnter("intro")}
    >
      Introduction
      <hr
        class="absolute left-1/2 transform -translate-x-1/2 mt-2 border-t-2 border-blue-500 transition-all"
        class:animate-shrink={isVisible.intro}
        style="width: 100%;"
      />
    </h2>
  </div>
  <div>
    {#if info}
      {#each [1, 2, 3] as index (index)}
        <div
          class="grid sm:grid-cols-2 gap-4 mb-12"
          use:inview
          on:inview_enter={() => handleEnter(`section${index}`)}
        >
          {#if index % 2 === 1}
            <div
              class="flex flex-col justify-center"
              class:animate-slideInLeft={isVisible[`section${index}`]}
            >
              <h5 class="text-1xl font-bold">
                {index === 1
                  ? "About me"
                  : index === 2
                    ? "About my future"
                    : "About my interview"}
              </h5>
              <p class="mb-8">
                {index === 1
                  ? info.description
                  : index === 2
                    ? info.future
                    : info.interviewContent}
              </p>
            </div>
            <div class:animate-slideInRight={isVisible[`section${index}`]}>
              <img
                src={images[index - 1]}
                alt={`Section ${index}`}
                loading="lazy"
              />
            </div>
          {:else}
            <div class:animate-slideInLeft={isVisible[`section${index}`]}>
              <img
                src={images[index - 1]}
                alt={`Section ${index}`}
                loading="lazy"
              />
            </div>
            <div
              class="flex flex-col justify-center"
              class:animate-slideInRight={isVisible[`section${index}`]}
            >
              <h5 class="text-1xl font-bold">
                {index === 1
                  ? "About me"
                  : index === 2
                    ? "About my future"
                    : "About my interview"}
              </h5>
              <p class="mb-8">
                {index === 1
                  ? info.description
                  : index === 2
                    ? info.future
                    : info.interviewContent}
              </p>
            </div>
          {/if}
        </div>
      {/each}
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</section>
