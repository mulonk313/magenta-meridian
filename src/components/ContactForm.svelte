<script>
  import { language } from "../stores/languageStore";
  import Language from "./Language.svelte";
</script>

<form
  class="flex flex-col gap-4 max-w-lg mx-auto bg-slate-100 px-6 py-8 border border-slate-300 rounded-lg shadow-lg mt-12"
>
  <label for="name" class="sr-only">
    <Language en="Name" gr="Όνομα" />
  </label>
  <input
    id="name"
    type="text"
    placeholder={$language === "EN" ? "Name" : "Όνομα"}
    class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label={$language === "EN" ? "Name" : "Όνομα"}
  />

  <label for="email" class="sr-only"
    ><Language en="Email" gr="Ηλεκτρονικό ταχυδρομείο" /></label
  >
  <input
    id="email"
    type="email"
    placeholder={$language === "EN" ? "Email" : "Ηλεκτρονικό ταχυδρομείο"}
    class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label={$language === "EN" ? "Email" : "Ηλεκτρονικό ταχυδρομείο"}
  />

  <label for="message" class="sr-only"
    ><Language en="Message" gr="Μήνυμα" /></label
  >
  <textarea
    id="message"
    placeholder={$language === "EN" ? "Message" : "Μήνυμα"}
    class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    rows="5"
    aria-label={$language === "EN" ? "Message" : "Μήνυμα"}
  ></textarea>

  <button
    type="submit"
    class="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-600 transition-all w-full sm:w-auto mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <Language en="Submit" gr="Υποβολή" />
  </button>
</form>
