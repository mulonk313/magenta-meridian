<script lang="ts">
  export let name: string = "";
  export let email: string = "";
  export let message: string = "";
  export let submit: string = "";
</script>

<form
  class="flex flex-col gap-4 max-w-lg mx-auto bg-slate-100 px-6 py-8 border border-slate-300 rounded-lg shadow-lg mt-12"
>
  <label for="name" class="sr-only">
    {name}
  </label>
  <input
    id="name"
    type="text"
    placeholder={name}
    aria-label={name}
    class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <label for="email" class="sr-only">
    {email}
  </label>
  <input
    id="email"
    type="email"
    placeholder={email}
    aria-label={email}
    class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <label for="message" class="sr-only">
    {message}
  </label>
  <textarea
    id="message"
    placeholder={message}
    aria-label={message}
    class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    rows="5"
  ></textarea>

  <button
    type="submit"
    class="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-600 transition-all w-full sm:w-auto mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {submit}
  </button>
</form>
