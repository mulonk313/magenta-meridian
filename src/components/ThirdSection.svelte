<script>
  import { inview } from "svelte-inview";
  import Carousel from "svelte-carousel";
  import { language } from "../stores/languageStore";
  import { onMount } from "svelte";

  let currentLanguage = "EN";
  let carousel;
  let currentIndex = 1;

  function handlePageChange(event) {
    currentIndex = event.detail;
  }

  let isVisible = false;

  function handleEnter() {
    isVisible = true;
  }

  function handleLeave() {
    isVisible = false;
  }

  onMount(() => {
    const unsubscribe = language.subscribe((value) => {
      currentLanguage = value;
    });

    return () => unsubscribe();
  });
</script>

<section class="mb-12 bg-gray-100 p-6">
  <div class="sm:container sm:mx-auto max-w-4xl mx-auto px-4 mb-52">
    <h2
      class="text-3xl font-bold text-center relative mb-10"
      use:inview
      on:inview_enter={handleEnter}
      on:inview_leave={handleLeave}
    >
      {currentLanguage === "EN" ? "My Projects" : "Τα έργα μου"}

      <hr
        class="absolute left-1/2 transform -translate-x-1/2 mt-2 border-t-2 border-blue-500 transition-all"
        class:animate-shrink={isVisible}
        style="width: 100%;"
      />
    </h2>
    <Carousel
      bind:this={carousel}
      bind:startIndex={currentIndex}
      class="max-w-sm sm:max-w-md md:max-w-lg mx-auto p-auto "
      autoplay="true"
      pauseOnFocus="true"
      particlesToShow="1"
      duration="800"
      on:pageChange={handlePageChange}
    >
      <a href="#react" class={currentIndex === 0 ? "z-50" : "z-0"}>
        <div class="relative group">
          <img
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl shadow-lg carousel-item group-hover:opacity-80 cursor-pointer"
            class:centered={currentIndex === 0}
            class:blurred={currentIndex !== 0}
            alt="I1"
            src="src/assets/proj1.png"
          />
          <p
            class="absolute bottom-64 w-full text-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white p-2 transition-opacity duration-300"
          >
            {currentLanguage === "EN"
              ? "A React personal project to exercise my skills."
              : "Ένα προσωπικό έργο με React για εξάσκηση των δεξιοτήτων μου."}
          </p>
        </div>
      </a>
      <a href="#vok" class={currentIndex === 1 ? "z-50" : "z-0"}>
        <div class="relative group">
          <img
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl shadow-lg carousel-item group-hover:opacity-80 cursor-pointer"
            class:centered={currentIndex === 1}
            class:blurred={currentIndex !== 1}
            alt="I2"
            src="src/assets/proj2.png"
          />
          <p
            class="absolute bottom-64 w-full text-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white p-2 transition-opacity duration-300"
          >
            {currentLanguage === "EN"
              ? "Full stack developing of the booking system for a website."
              : "Πλήρης ανάπτυξη του συστήματος κρατήσεων για έναν ιστότοπο."}
          </p>
        </div>
      </a>
      <a href="#amazon" class={currentIndex === 2 ? "z-50" : "z-0"}>
        <div class="relative group">
          <img
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl shadow-lg carousel-item group-hover:opacity-80 cursor-pointer"
            class:centered={currentIndex === 2}
            class:blurred={currentIndex !== 2}
            alt="I3"
            src="src/assets/proj3.png"
          />
          <p
            class="absolute bottom-64 w-full text-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white p-2 transition-opacity duration-300"
          >
            {currentLanguage === "EN"
              ? "A Personal JavaScript Project, clone to Amazon."
              : "Ένα προσωπικό έργο JavaScript, κλώνος του Amazon."}
          </p>
        </div>
      </a>
    </Carousel>
  </div>
  <div class="sm:p-6 sm:container sm:mx-auto mt-12">
    <div id="react" class="grid sm:grid-cols-2 gap-4 mb-12">
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <img
        class="h-5/6 justify-center mt-12 transition-transform duration-300 ease-in-out focus:scale-150 hover:scale-150"
        src="src/assets/proj1-sec.png"
        alt="Building"
        loading="lazy"
        tabindex="0"
      />
      <div>
        <h2 class="text-3xl font-bold mb-6 mt-10">React Project</h2>
        <hr class="mt-2 border-t-2 border-blue-500" style="width: 15%;" />
        <p class="mt-12 leading-8">
          This is a personal React component project. I programm it entiry with
          React and React Bootstrap. I use node.js for the server and mySQL for
          databases.
        </p>
        <p class="mt-12 leading-8">
          I have a login, a signUp and a search. Main theme of this project is
          people find what job they like and apply to the company.
        </p>
        <p class="mt-12 leading-8">
          All of job applications and the job list rendering with APIs.
        </p>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <img
          class="h-6/8 justify-center mt-4 transition-transform duration-300 ease-in-out focus:scale-150 hover:scale-150"
          src="src/assets/proj1-sec2.png"
          alt="Building"
          loading="lazy"
          tabindex="0"
        />
      </div>
    </div>
    <div id="vok" class="grid grid-cols-2 gap-6 mt-60">
      <div>
        <h2 class="text-3xl font-bold mb-6 mt-10">Booking System</h2>
        <hr class="mt-2 border-t-2 border-blue-500" style="width: 15%;" />
        <p class="mt-12 -pl-12 leading-8">
          This project was a self-employend job about a website for hot baths in
          Iceland.
        </p>
        <p class="mt-12 leading-8">
          I worked on booking system and how a user can take a ticket and some
          extra personal things with ease. The system, first was about to select
          how many people will attend the baths, which day and what hour. After
          you could procceed for payment.
        </p>
        <div
          class="flex flex-row gap-6 justify-normal md:justify-center h-screen mt-[105px] sm:mt-0"
        >
          <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
          <img
            class="h-44 md:h-60 md:w-1/2 w-72 transition-transform duration-300 ease-in-out md:translate-x-0 focus:translate-x-0 hover:translate-x-0 md:hover:translate-x-3/4 md:focus:translate-x-3/4 md:focus:scale-[2] focus:scale-[2.5] hover:scale-[2.5]"
            src="src/assets/proj2-sec2.png"
            alt="Building"
            loading="lazy"
            tabindex="0"
          />
          <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
          <img
            class="h-44 md:h-60 md:w-1/2 w-72 transition-transform duration-300 ease-in-out md:translate-x-0 focus:-translate-x-0 md:focus:-translate-x-3/4 md:focus:scale-[2] focus:scale-[2.5] hover:scale-[2.5]"
            src="src/assets/proj2-sec3.png"
            alt="Building"
            loading="lazy"
            tabindex="0"
          />
        </div>
      </div>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <div>
        <img
          class="h-72 w-92 scale-x-75 lg:scale-x-150 -translate-x-8 sm:-translate-x-0 sm:h-80 md:w-80 justify-center mt-12 ms-10 lg:ms-[150px] transition-transform duration-300 ease-in-out focus:-translate-x-3/4 sm:focus:-translate-x-0 lg:focus:scale-[2] lg:hover:scale-[2] focus:scale-[2] hover:scale-[2] sm:focus:scale-150 sm:hover:scale-150"
          src="src/assets/proj2-sec.png"
          alt="Building"
          loading="lazy"
          tabindex="0"
        />
        <p class="mt-12 leading-8">
          There we have a popup box with some extra items which someone could
          select for his baths.
        </p>
        <p class="mt-12 leading-8">
          Finally, we have the page where the user will enter his personal info,
          his credit card info and after he can pay the ammount and recieve the
          ticket.
        </p>
      </div>
    </div>
    <div id="amazon" class="grid grid-cols-2 gap-4 -mt-96">
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <img
        class="h-84 md:h-5/6 mt-[600px] md:mt-12 sm:mt-12 lg:mt-0 scale-y-[5] md:scale-y-[0.5] justify-center transition-transform duration-300 ease-in-out focus:translate-x-2/4 md:focus:scale-[1.2] focus:scale-[2.5] hover:scale-150"
        src="src/assets/proj3-sec.png"
        alt="Building"
        loading="lazy"
        tabindex="0"
      />
      <div>
        <h2 class="text-3xl font-bold mb-6 mt-10">Amazon Project</h2>
        <hr class="mt-2 border-t-2 border-blue-500" style="width: 15%;" />
        <p class="mt-12 leading-8">
          In this personal project i recreated the layout of Amazon's website.
        </p>
        <p class="mt-12 leading-8">
          The main point was exersice my skills on javascript, i fetched the
          items via localstorage, made a searchbar and add buttons. When someone
          was selected the amount of items, he could proceed to the payment
          page.
        </p>
        <p class="mt-12 leading-8">
          In payment page, i created only the UI with card items for
          shipment,amount and date. And there the user can see the way and
          choose how can recieve the item which bought.
        </p>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <img
          class="h-44 md:h-6/8 scale-[1.2] scale-x-[1.8] md:scale-x-[1.5] justify-center mt-4 transition-transform duration-300 ease-in-out -translate-x-2/4 lg:hover:scale-[2.5] sm:focus:-translate-x-2/4 focus:scale-150 hover:scale-150"
          src="src/assets/proj3-sec2.png"
          alt="Building"
          loading="lazy"
          tabindex="0"
        />
      </div>
    </div>
  </div>
</section>

<style>
  .carousel-item {
    transition:
      transform 0.3s ease,
      filter 0.3s ease;
    object-fit: contain;
    width: 100%;
    height: auto;
  }

  .centered {
    transform: scale(1.2);
    z-index: 1;
  }

  .blurred {
    filter: blur(3px);
    opacity: 0.6;
  }

  @media (max-width: 425px) {
    .carousel-item {
      max-width: 80%;
      margin: 0 auto;
    }
    .centered {
      transform: scale(1.1);
    }
  }
</style>
