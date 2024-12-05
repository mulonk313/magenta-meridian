<script lang="ts">
  import { inview } from "svelte-inview";
  import { onMount } from "svelte";
  import { language } from "../stores/languageStore";

  let info: AboutInfo | null = null;
  let images = [
    "src/assets/image1.webp",
    "src/assets/image2.webp",
    "src/assets/image3.webp",
  ];

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

  let currentLanguage: string;

  $: currentLanguage = $language;

  async function fetchData() {
    const res = await fetch(
      `http://localhost:4321/api/about?lang=${currentLanguage}`
    );
    if (res.ok) {
      info = await res.json();
    }
  }

  onMount(() => {
    fetchData();
  });

  $: currentLanguage, fetchData();
</script>

<section id="info" class="sm:container p-6 sm:mx-auto mb-12">
  <div class="text-center mb-8">
    <h2
      class="text-3xl font-bold relative"
      use:inview
      on:inview_enter={() => handleEnter("intro")}
    >
      {$language === "EN" ? "Introduction" : "Παρουσίαση"}
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
                  ? currentLanguage === "EN"
                    ? "About me"
                    : "Σχετικά με εμένα"
                  : index === 2
                    ? currentLanguage === "EN"
                      ? "About my future"
                      : "Σχετικά με το μέλλον μου"
                    : currentLanguage === "EN"
                      ? "About my interview"
                      : "Σχετικά με τη συνέντευξή μου"}
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
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          {:else}
            <div class:animate-slideInLeft={isVisible[`section${index}`]}>
              <img
                src={images[index - 1]}
                alt={`Section ${index}`}
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div
              class="flex flex-col justify-center"
              class:animate-slideInRight={isVisible[`section${index}`]}
            >
              <h5 class="text-1xl font-bold">
                {index === 1
                  ? currentLanguage === "EN"
                    ? "About me"
                    : "Σχετικά με εμένα"
                  : index === 2
                    ? currentLanguage === "EN"
                      ? "About my future"
                      : "Σχετικά με το μέλλον μου"
                    : currentLanguage === "EN"
                      ? "About my interview"
                      : "Σχετικά με τη συνέντευξή μου"}
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
      <p>{currentLanguage === "EN" ? "Loading..." : "Φόρτωση..."}</p>
    {/if}
  </div>
</section>
