<script lang="ts">
  import { inview } from "svelte-inview";
  import { onMount } from "svelte";
  import { useTranslations, getLangFromUrl } from "../i18n/utils";

  import image1 from "../assets/image1.webp";
  import image2 from "../assets/image2.webp";
  import image3 from "../assets/image3.jpg";

  let info: {
    description: string;
    future: string;
    interviewContent: string;
  } | null = null;

  let images = [image1, image2, image3];

  let isVisible: Record<string, boolean> = {
    intro: false,
    section1: false,
    section2: false,
    section3: false,
  };

  export let currentLanguage: URL;
  const lang = getLangFromUrl(currentLanguage);
  const t = useTranslations(lang);

  async function fetchData() {
    const res = await fetch(`http://localhost:4321/api/${lang}`);
    if (res.ok) {
      info = await res.json();
    } else {
      console.error("Failed to fetch data");
    }
  }

  onMount(fetchData);
  $: if (lang) fetchData();

  function handleEnter(section: string) {
    if (!isVisible[section]) {
      isVisible = { ...isVisible, [section]: true };
    }
  }
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
              {t(`section2.i${index === 1 ? "1" : index === 2 ? "2" : "3"}`)}
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
              alt={`section${index}`}
              class="w-full h-auto object-cover rounded-md"
              loading={index === 1 ? "eager" : "lazy"}
            />
          </div>
        {:else}
          <div class:animate-slideInLeft={isVisible[`section${index}`]}>
            <img
              src={images[index - 1].src}
              alt={`section${index}`}
              class="w-full h-auto object-cover rounded-md"
              loading="lazy"
            />
          </div>
          <div
            class="flex flex-col justify-center"
            class:animate-slideInRight={isVisible[`section${index}`]}
          >
            <h5 class="text-1xl font-bold">
              {t(`section2.i${index === 1 ? "1" : index === 2 ? "2" : "3"}`)}
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
    <p>{t("section2.loading")}</p>
  {/if}
</div>
