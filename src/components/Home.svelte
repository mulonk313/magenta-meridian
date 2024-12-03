<script lang="ts">
  import { onMount } from "svelte";

  interface AboutInfo {
    description: string;
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

  function scrollToSection() {
    const section = document.getElementById("info");
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

<main>
  <!-- 1st Section -->
  <div class="text-center py-16 bg-gray-100 mb-12">
    <h1 class="text-4xl font-bold">Welcome to my portfolio</h1>
    <p class="mt-4 text-lg">
      Discover who i am, what i have done and some of my projects.
    </p>
    <button
      on:click={scrollToSection}
      class="mt-6 px-6 py-2 bg-blue-500 text-white rounded"
    >
      Δείτε Περισσότερα
    </button>
  </div>

  <!-- 2nd Section -->
  <div id="info" class="text-center mb-12">
    <h2 class="text-3xl font-bold">Λίγα λόγια για εμένα</h2>
    {#if info}
      <p>{info.description}</p>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>

  <!-- 3rd Section (projects list) -->
  <div class="mb-12">
    <h2>My Projects</h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-gray-200 p-4">Project 1</div>
      <div class="bg-gray-200 p-4">Project 2</div>
    </div>
  </div>

  <!-- 4th Section (contact form) -->
  <div class="mb-12">
    <h2>Contact Me</h2>
    <form class="flex flex-col gap-4">
      <input type="text" placeholder="Όνομα" class="border p-2" />
      <input type="email" placeholder="Email" class="border p-2" />
      <textarea placeholder="Μήνυμα" class="border p-2"></textarea>
      <button class="bg-blue-500 text-white p-2">Αποστολή</button>
    </form>
  </div>
</main>
