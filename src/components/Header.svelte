<script>
  let language = "EN";

  function changeLanguage(lang) {
    language = lang;
  }
</script>

<header class="bg-gray-800 text-white p-4">
  <nav class="flex justify-between">
    <ul class="flex space-x-4">
      <li><a href="/" class="hover:underline">Home</a></li>
      <li><a href="/about" class="hover:underline">About</a></li>
      <li><a href="/projects" class="hover:underline">Projects</a></li>
      <li><a href="/contact" class="hover:underline">Contact</a></li>
    </ul>
    <div>
      <button
        class="bg-blue-500 px-3 py-1 rounded"
        on:click={() => changeLanguage("EN")}
        class:selected={language === "EN"}
      >
        EN
      </button>
      <button
        class="bg-gray-500 px-3 py-1 rounded"
        on:click={() => changeLanguage("GR")}
        class:selected={language === "GR"}
      >
        GR
      </button>
    </div>
  </nav>
</header>
