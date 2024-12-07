<script lang="ts">
  import { inview } from "svelte-inview";
  import { onMount } from "svelte";
  import { language } from "../stores/languageStore";
  import Language from "./Language.svelte";

  import image1 from "../assets/image1.webp";
  import image2 from "../assets/image2.webp";
  import image3 from "../assets/image3.webp";

  let info: AboutInfo | null = null;
  let images = [image1, image2, image3];

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
              {#if index === 1}
                <Language en="About me" gr="Σχετικά με εμένα" />
              {:else if index === 2}
                <Language en="About my future" gr="Σχετικά με το μέλλον μου" />
              {:else}
                <Language
                  en="About my interview"
                  gr="Σχετικά με τη συνέντευξή μου"
                />
              {/if}
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
              src={images[index - 1].src}
              width={images[index - 1].width}
              height={images[index - 1].height}
              alt={`Section ${index}`}
              class="w-full h-auto object-cover rounded-md"
              loading="eager"
            />
          </div>
        {:else}
          <div class:animate-slideInLeft={isVisible[`section${index}`]}>
            <img
              src={images[index - 1].src}
              width={images[index - 1].width}
              height={images[index - 1].height}
              alt={`Section ${index}`}
              class="w-full h-auto object-cover rounded-md"
              loading="lazy"
            />
          </div>
          <div
            class="flex flex-col justify-center"
            class:animate-slideInRight={isVisible[`section${index}`]}
          >
            <h5 class="text-1xl font-bold">
              {#if index === 1}
                <Language en="About me" gr="Σχετικά με εμένα" />
              {:else if index === 2}
                <Language en="About my future" gr="Σχετικά με το μέλλον μου" />
              {:else}
                <Language
                  en="About my interview"
                  gr="Σχετικά με τη συνέντευξή μου"
                />
              {/if}
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
    <p><Language en="Loading..." gr="Φόρτωση..." /></p>
  {/if}
</div>
