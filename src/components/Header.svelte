<script>
  import { language } from "../stores/languageStore";
  import { onMount } from "svelte";

  let currentLanguage;
  let isMenuOpen = false;

  language.subscribe((value) => {
    currentLanguage = value;
  });

  function changeLanguage(lang) {
    language.set(lang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.pushState({}, "", url);
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang");
    if (langParam) {
      language.set(langParam);
    }
  });
</script>

<nav
  class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
>
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a
      href="/?lang={currentLanguage}"
      class="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >My Portfolio</span
      >
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div class="flex space-x-2">
        <button
          class={`px-3 py-1 rounded ${currentLanguage === "EN" ? "bg-blue-500" : "bg-gray-500"} text-xs sm:text-sm`}
          on:click={() => changeLanguage("EN")}
        >
          EN
        </button>
        <button
          class={`px-3 py-1 rounded ${currentLanguage === "GR" ? "bg-blue-500" : "bg-gray-500"} text-xs sm:text-sm`}
          on:click={() => changeLanguage("GR")}
        >
          GR
        </button>
      </div>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="z-50 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded={isMenuOpen ? "true" : "false"}
        on:click={toggleMenu}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      id="navbar-sticky"
      class={`md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"} md:block md:relative md:mt-0 md:mr-0 md:ml-0 absolute w-full`}
    >
      <ul
        class="flex flex-col p-4 md:p-0 mt-[265px] mr-[16px] ml-[250px] md:mr-0 md:ml-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <a
            href="/?lang={currentLanguage}"
            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            {currentLanguage === "EN" ? "Home" : "Αρχική"}
          </a>
        </li>
        <li>
          <a
            href="/?lang={currentLanguage}"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            {currentLanguage === "EN" ? "About" : "Σχετικά"}
          </a>
        </li>
        <li>
          <a
            href="/?lang={currentLanguage}"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            {currentLanguage === "EN" ? "Projects" : "Έργα"}
          </a>
        </li>
        <li>
          <a
            href="/?lang={currentLanguage}"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            {currentLanguage === "EN" ? "Contact" : "Επικοινωνία"}
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
