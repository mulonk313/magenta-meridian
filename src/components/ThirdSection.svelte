<script>
  import Carousel from "svelte-carousel";
  import { language } from "../stores/languageStore";
  import { onMount } from "svelte";
  import proj1 from "/src/assets/proj1.png";
  import proj2 from "/src/assets/proj2.png";
  import proj3 from "/src/assets/proj3.png";
  import Language from "./Language.svelte";

  let currentLanguage = "EN";
  let carousel;
  let currentIndex = 1;
  let isVisible1 = false;
  let isVisible2 = false;
  let isVisible3 = false;

  function toggleVisibilityProj1() {
    isVisible1 = !isVisible1;
  }

  function toggleVisibilityProj2() {
    isVisible2 = !isVisible2;
  }

  function toggleVisibilityProj3() {
    isVisible3 = !isVisible3;
  }

  function handlePageChange(event) {
    currentIndex = event.detail;
  }

  onMount(() => {
    const unsubscribe = language.subscribe((value) => {
      currentLanguage = value;
    });

    return () => unsubscribe();
  });
</script>

<div class="carousel-wrapper m-auto h-auto w-auto lg:h-[1100px] lg:w-[1100px]">
  <Carousel
    bind:this={carousel}
    bind:startIndex={currentIndex}
    class="h-full w-full"
    particlesToShow="1"
    autoplay="true"
    duration="1000"
    pauseOnFocus="false"
    on:pageChange={handlePageChange}
  >
    <a href="#react" class={currentIndex === 0 ? "z-50" : "z-0"}>
      <div class="relative group">
        <img
          src={proj1.src}
          alt={proj1}
          class="w-full h-auto max-w-[80%] min-[425px]:max-w-[100%]
    rounded-xl shadow-lg cursor-pointer
    transition-transform duration-300 ease-in-out
    object-contain
    mx-auto md:mx-0"
          class:centered={currentIndex === 1}
          class:blurred={currentIndex !== 1}
          loading="eager"
        />
        <span
          class="absolute bottom-0 w-full h-1/2 text-center p-2 lg:p-[65px] opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 text-white transition-opacity duration-300"
        >
          <Language
            en="A React personal project to exercise my skills."
            gr="Ένα προσωπικό έργο με React για εξάσκηση των δεξιοτήτων μου."
          />
        </span>
      </div>
    </a>
    <a href="#vok" class={currentIndex === 1 ? "z-50" : "z-0"}>
      <div class="relative group">
        <img
          class="w-full h-auto max-w-[80%] min-[425px]:max-w-none
    rounded-xl shadow-lg cursor-pointer
    transition-transform duration-300 ease-in-out
    object-contain
    mx-auto md:mx-0"
          class:centered={currentIndex === 1}
          class:blurred={currentIndex !== 1}
          src={proj2.src}
          alt={proj2}
          loading="lazy"
        />
        <p
          class="absolute bottom-0 w-full h-1/2 text-center p-[65px] opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 text-white transition-opacity duration-300"
        >
          <Language
            en="Full stack developing of the booking system for a website."
            gr="Πλήρης ανάπτυξη του συστήματος κρατήσεων για έναν ιστότοπο."
          />
        </p>
      </div>
    </a>
    <a href="#amazon" class={currentIndex === 2 ? "z-50" : "z-0"}>
      <div class="relative group">
        <img
          class="w-full h-auto max-w-[80%] min-[425px]:max-w-none
    rounded-xl shadow-lg cursor-pointer
    transition-transform duration-300 ease-in-out
    object-contain
    mx-auto md:mx-0"
          class:centered={currentIndex === 2}
          class:blurred={currentIndex !== 2}
          src={proj3.src}
          alt={proj3}
          loading="lazy"
        />
        <p
          class="absolute bottom-0 w-full h-1/2 text-center p-[65px] opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 text-white transition-opacity duration-300"
        >
          <Language
            en="A Personal JavaScript Project, clone to Amazon."
            gr="Ένα προσωπικό έργο JavaScript, κλώνος του Amazon."
          />
        </p>
      </div>
    </a>
  </Carousel>
</div>
<div
  class="container -mt-[200px] max-[1024px]:mt-[100px] relative overflow-hidden mx-auto px-4"
>
  <div
    id="react"
    class={`grid md:grid-cols-2 gap-4 mb-12 transition-all duration-700 delay-350 ease-in-out transform ${
      isVisible1
        ? "me-0 text-justify"
        : "me-[475px] max-[1024px]:me-[0px] text-center"
    }`}
  >
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <img
      class={`h-5/6 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
        isVisible1
          ? "translate-x-0 opacity-100 scale-100"
          : "-translate-x-full opacity-0 scale-95"
      }`}
      src="src/assets/proj1-sec.png"
      alt="Building"
      loading="lazy"
      tabindex="0"
    />
    <div>
      <h2 class="text-3xl font-bold mb-6 mt-10">
        <Language en="React project" gr="Έργο React" />
      </h2>
      <button
        class="p-[8px] w-[100px] rounded bg-blue-500 text-xs sm:text-sm text-white"
        on:click={toggleVisibilityProj1}
      >
        Press Me
      </button>
      <hr
        class={`mt-2 border-t-2 border-blue-500 transition-all duration-300 ease-in-out ${
          isVisible1 ? "w-[15%]" : "w-full"
        }`}
      />
      <p class="mt-12 leading-8">
        <Language
          en="This is a personal React component project. I programed it entirely with React and React Bootstrap. I used node.js for the server and mySQL for databases."
          gr="Αυτό είναι ένα προσωπικό έργο στοιχείου React. Το προγραμμάτισα εξ ολοκλήρου με τη React και τη React Bootstrap. Χρησιμοποίησα node.js για τον διακομιστή και mySQL για βάσεις δεδομένων."
        />
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible1
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        <Language
          en="The website consists of a login page, a signUp and a search bar. Main theme of this project is people find what job they like and to apply to the company."
          gr="Ο ιστότοπος αποτελείται από μια σελίδα σύνδεσης, μια εγγραφή και μια γραμμή αναζήτησης. Κύριο θέμα αυτού του έργου είναι οι άνθρωποι να βρουν τη δουλειά που τους αρέσει και να κάνουν αίτηση στην εταιρεία."
        />
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible1
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        <Language
          en="All of job applications and the job list being rendered with APIs."
          gr="Όλες οι αιτήσεις εργασίας και η λίστα εργασιών αποδίδονται με API."
        />
      </p>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <img
        class={`h-6/8 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
          isVisible1
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
        src="src/assets/proj1-sec2.png"
        alt="Building"
        loading="lazy"
        tabindex="0"
      />
    </div>
  </div>
  <div
    id="vok"
    class={`mt-60 grid grid-cols-2 gap-6 transition-all duration-700 delay-350 ease-in-out transform ${
      isVisible2
        ? "ms-0 text-justify"
        : "ms-[475px] max-[1024px]:ms-[0px] text-center"
    }`}
  >
    <div>
      <h2 class="text-3xl font-bold mb-6 mt-10">
        <Language en="Booking System" gr="Σύστημα έκδοσης εισιτηρίων" />
      </h2>
      <button
        class="p-[8px] w-[100px] rounded bg-blue-500 text-xs sm:text-sm text-white"
        on:click={toggleVisibilityProj2}
      >
        Press Me
      </button>
      <hr
        class={`mt-2 border-t-2 border-blue-500 transition-all duration-300 ease-in-out ${isVisible2 ? "w-[15%]" : "w-full"}`}
      />
      <p class="mt-12 -pl-12 leading-8">
        <Language
          en="This project was a self-employed job for the creation of a booking system for a website about hot baths in Iceland."
          gr="Αυτό το έργο ήταν μια αυτοαπασχολούμενη εργασία για τη δημιουργία ενός συστήματος κρατήσεων για έναν ιστότοπο για ζεστά μπάνια στην Ισλανδία."
        />
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible2
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-full opacity-0 scale-95"
        }`}
      >
        <Language
          en="I worked on booking system and how a user can take a ticket and some
        extra personal things with ease. The user inside he system, can first was about to select
        how many people will attend the baths, which day and what hour. After
        he can procceed for payment."
          gr="Εργάστηκα στο σύστημα κρατήσεων και στο πώς ένας χρήστης μπορεί να πάρει ένα εισιτήριο και μερικά
        επιπλέον προσωπικά πράγματα με ευκολία. Ο χρήστης μέσα στο σύστημα, μπορεί πρώτα να επιλέξει
        πόσα άτομα θα παρευρεθούν στα λουτρά, ποια μέρα και ποια ώρα. Μετά
        μπορεί να προχωρήσει στην πληρωμή."
        />
      </p>
      <div
        class="flex flex-row gap-6 justify-normal md:justify-center h-screen mt-[105px] sm:mt-0"
      >
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <img
          class={`h-44 md:h-60 md:w-1/2 w-72 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
            isVisible2
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-full opacity-0 scale-95"
          }`}
          src="src/assets/proj2-sec2.png"
          alt="Building"
          loading="lazy"
          tabindex="0"
        />
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <img
          class={`h-44 md:h-60 md:w-1/2 w-72 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
            isVisible2
              ? "-translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95"
          }`}
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
        class={`h-72 w-92 sm:h-80 md:w-80 scale-x-75 lg:scale-x-150 -translate-x-8 sm:-translate-x-0 justify-center mt-12 ms-10 lg:ms-[150px] transition-all delay-200 duration-700 ease-in-out transform ${
          isVisible2
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-20 opacity-0 scale-95"
        }`}
        src="src/assets/proj2-sec.png"
        alt="Building"
        loading="lazy"
        tabindex="0"
      />
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible2
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        <Language
          en="There we have a popup box with some extra items which someone could
        to select those for his bath."
          gr="Εκεί έχουμε ένα αναδυόμενο πλαίσιο με μερικά επιπλέον στοιχεία που θα μπορούσε κάποιος
        να επιλέξει αυτά για το μπάνιο του."
        />
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible2
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        <Language
          en="
Finally, we have the page where the user will enter his personal info, his credit card info and after he can pay the amount and received the ticket.
"
          gr="
Τέλος, έχουμε τη σελίδα όπου ο χρήστης θα εισάγει τα προσωπικά του στοιχεία, τα στοιχεία της πιστωτικής του κάρτας και αφού μπορεί να πληρώσει το ποσό και να λάβει το εισιτήριο."
        />
      </p>
    </div>
  </div>
  <div id="amazon" class="grid grid-cols-2 gap-4 -mt-96">
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <img
      class="h-84 md:h-5/6 mt-[600px] md:mt-12 sm:mt-12 lg:mt-0 scale-y-[5] sm:scale-y-[0.5] lg:scale-y-[0.5] justify-center transition-transform duration-300 ease-in-out focus:translate-x-2/4 md:focus:scale-[1] lg:focus:scale-0 focus:scale-[2.5] hover:scale-150 md:hover:scale-100"
      src="src/assets/proj3-sec.png"
      alt="Building"
      loading="lazy"
      tabindex="0"
    />
    <div>
      <h2 class="text-3xl font-bold mb-6 mt-10">
        <Language en="Amazon Project" gr="Έργο Amazon" />
      </h2>
      <hr
        class={`mt-2 border-t-2 border-blue-500 transition-all duration-300 easy-in-out width: ${isVisible3 ? "w-[15%]" : "w-full"}`}
      />
      <p class="mt-12 leading-8">
        <Language
          en="In this personal project i recreated the layout of Amazon's website."
          gr="Σε αυτό το προσωπικό έργο αναδημιούργησα τη διάταξη του ιστότοπου της Amazon."
        />
      </p>
      <p class="mt-12 leading-8">
        <Language
          en="The main point was exersice my skills on javascript, i fetched the items
        via localstorage, i made a searchbar and add buttons for adding items. When someone
        select the amount of items, he could proceed to the payment page."
          gr="Το κύριο σημείο ήταν να ασκήσω τις δεξιότητές μου στη javascript, πήρα τα αντικείμενα
        μέσω τοπικής αποθήκευσης, έφτιαξα μια γραμμή αναζήτησης και πρόσθεσα κουμπιά για την προσθήκη στοιχείων. Όταν κάποιος επιλέξει το ποσό των στοιχείων, θα μπορούσε να προχωρήσει στη σελίδα πληρωμής."
        />
      </p>
      <p class="mt-12 leading-8">
        <Language
          en="In payment page, i created only the UI with card items for
        shipment,amount and date. And there the user can see the way and choose
        how can recieve the item which bought."
          gr="Στη σελίδα πληρωμής, δημιούργησα μόνο τη διεπαφή χρήστη με στοιχεία κάρτας για
        αποστολή, ποσό και ημερομηνία. Και εκεί ο χρήστης μπορεί να δει τον τρόπο και να επιλέξει
        πώς μπορείτε να παραλάβετε το αντικείμενο που αγόρασε."
        />
      </p>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <img
        class="h-44 md:h-6/8 scale-[1.2] scale-x-[1.8] md:scale-x-[1.5] justify-center mt-4 transition-transform duration-300 ease-in-out -translate-x-2/4 lg:translate-x-2/4 lg:hover:scale-[2.5] sm:focus:-translate-x-2/4 focus:scale-150 hover:scale-150 hover:-translate-y-2/4"
        src="src/assets/proj3-sec2.png"
        alt="Building"
        loading="lazy"
        tabindex="0"
      />
    </div>
  </div>
</div>
