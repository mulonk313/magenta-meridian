<script>
  import { language, translations } from "../stores/languageStore";

  function changeLanguage(lang) {
    language.set(lang);
  }
</script>

<header class="bg-gray-800 text-white p-4">
  <nav class="flex sm:justify-between sm:container sm:mx-auto">
    <ul class="flex space-x-4">
      <li>
        <a href="/" class="hover:underline">
          {translations[$language].home}
        </a>
      </li>
      <li>
        <a href="/about" class="hover:underline">
          {translations[$language].about}
        </a>
      </li>
      <li>
        <a href="/projects" class="hover:underline">
          {translations[$language].projects}
        </a>
      </li>
      <li>
        <a href="/contact" class="hover:underline">
          {translations[$language].contact}
        </a>
      </li>
    </ul>

    <div>
      <button
        class="px-3 py-1 rounded {$language === 'EN'
          ? 'bg-blue-500'
          : 'bg-gray-500'}"
        on:click={() => changeLanguage("EN")}
      >
        EN
      </button>
      <button
        class="px-3 py-1 rounded {$language === 'GR'
          ? 'bg-blue-500'
          : 'bg-gray-500'}"
        on:click={() => changeLanguage("EN")}
      >
        GR
      </button>
    </div>
  </nav>
</header>
