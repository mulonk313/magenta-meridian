<script lang="ts">
  import Carousel from "svelte-carousel";
  import proj1 from "/src/assets/proj1.webp";
  import proj2 from "/src/assets/proj2.webp";
  import proj3 from "/src/assets/proj3.webp";
  import proj11Sec from "/src/assets/proj1-sec.webp";
  import proj12Sec from "/src/assets/proj1-sec2.webp";
  import proj21Sec from "/src/assets/proj2-sec.webp";
  import proj22Sec from "/src/assets/proj2-sec2.webp";
  import proj23Sec from "/src/assets/proj2-sec3.webp";
  import proj31Sec from "/src/assets/proj3-sec.webp";
  import proj32Sec from "/src/assets/proj3-sec2.webp";

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

  function handlePageChange(event: any) {
    currentIndex = event.detail;
  }

  export let projectProps = {
    projectName1: "",
    title1: "",
    par11: "",
    par12: "",
    par13: "",
    projectName2: "",
    title2: "",
    par21: "",
    par22: "",
    par23: "",
    par24: "",
    projectName3: "",
    title3: "",
    par31: "",
    par32: "",
    par33: "",
  };

  export let button = "";
</script>

<div
  class="carousel-wrapper m-auto h-auto w-auto min-[1441px]:h-[1100px] min-[1440px]:w-[1100px] min-[1024px]:h-[800px] min-[1024px]:w-[800px]"
>
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
          alt="Screenshot of a React-based job application project."
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
          class="rounded-b-xl absolute bottom-0 w-full h-1/2 text-center p-2 lg:p-[65px] opacity-0 group-hover:opacity-100 bg-opacity-70 text-white transition-opacity duration-300 bg-gradient-to-r from-black"
        >
          {projectProps.projectName1}
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
          alt="A booking system UI for hot baths in Iceland."
          loading="lazy"
        />
        <p
          class="rounded-b-xl absolute bottom-0 w-full h-1/2 text-center p-2 lg:p-[65px] opacity-0 group-hover:opacity-100 bg-opacity-70 text-white transition-opacity duration-300 bg-gradient-to-r from-black"
        >
          {projectProps.projectName2}
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
          alt="Screenshot of an Amazon clone website layout."
          loading="lazy"
        />
        <p
          class="rounded-b-xl absolute bottom-0 w-full h-1/2 text-center p-2 lg:p-[65px] opacity-0 group-hover:opacity-100 bg-opacity-70 text-white transition-opacity duration-300 bg-gradient-to-r from-black"
        >
          {projectProps.projectName3}
        </p>
      </div>
    </a>
  </Carousel>
</div>
<div class="container md:mt-[200px] relative overflow-hidden mx-auto px-4">
  <div
    id="react"
    class={`grid md:grid-cols-2 gap-4 mb-12 transition-all duration-700 delay-350 ease-in-out transform ${
      isVisible1
        ? "text-justify md:-translate-x-[0px] md:grid-cols-2"
        : "text-center  md:-translate-x-[20%] md:grid-rows-none"
    }`}
  >
    <img
      class={`rounded-xl h-5/6 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
        isVisible1
          ? "translate-x-0 opacity-100 md:h-[50%] lg:h-[60%] xl:h-5/6"
          : "-translate-x-full opacity-0 scale-95 "
      }`}
      src={proj11Sec.src}
      alt="Building"
      loading="lazy"
    />
    <div>
      <h2 class="text-3xl font-bold mb-6 mt-10">
        {projectProps.title1}
      </h2>
      <button
        class="p-[8px] w-[100px] rounded bg-blue-500 text-xs sm:text-sm text-white"
        on:click={toggleVisibilityProj1}
      >
        {button}
      </button>
      <hr
        class={`mt-2 border-t-2 border-blue-500 transition-all duration-300 ease-in-out ${
          isVisible1 ? "w-[15%]" : "w-full"
        }`}
      />
      <p
        class={`mt-12 leading-8 ${
          isVisible1
            ? "text-left md:text-justify"
            : "text-center md:text-center"
        }`}
      >
        {projectProps.par11}
      </p>
      <p
        class={`text-left md:text-justify mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible1
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par12}
      </p>
      <p
        class={`text-left md:text-justify mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible1
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par13}
      </p>
      <img
        class={`rounded-xl h-6/8 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
          isVisible1
            ? "-translate-x-0 md:scale-[2] md:translate-x-[-50%] md:translate-y-[40%] xl:scale-100 xl:translate-x-[0] xl:translate-y-[0%] opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
        src={proj12Sec.src}
        alt="Building"
        loading="lazy"
      />
    </div>
  </div>
  <div
    id="vok"
    class={`mt-60 grid gap-6 mb-12 transition-all duration-700 delay-350 ease-in-out transform ${
      isVisible2
        ? "text-justify md:translate-x-[0px] grid-cols-2"
        : "text-center md:translate-x-[31%] grid-cols-none md:grid-cols-2"
    }`}
  >
    <div>
      <h2 class="text-3xl font-bold mb-6 mt-10">
        {projectProps.title2}
      </h2>
      <button
        class="p-[8px] w-[100px] rounded bg-blue-500 text-xs sm:text-sm text-white"
        on:click={toggleVisibilityProj2}
      >
        {button}
      </button>
      <hr
        class={`mt-2 border-t-2 border-blue-500 transition-all duration-300 ease-in-out ${isVisible2 ? "w-[15%]" : "w-full"}`}
      />
      <p class={`mt-12 -pl-12 ${isVisible2 ? "text-left" : "text-center"}`}>
        {projectProps.par21}
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform text-left ${
          isVisible2
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par22}
      </p>
      <div
        class="flex flex-row gap-4 justify-normal md:justify-center h-screen mt-[105px] md:-mt-5"
      >
        <img
          class={`rounded h-44 sm:h-60 sm:w-1/2 w-72 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
            isVisible2
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-full opacity-0 scale-95"
          }`}
          src={proj22Sec.src}
          alt="Building"
          loading="lazy"
        />
        <img
          class={`rounded h-44 sm:h-60 sm:w-1/2 w-72 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
            isVisible2
              ? "-translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95"
          }`}
          src={proj23Sec.src}
          alt="Building"
          loading="lazy"
        />
      </div>
    </div>
    <div>
      <img
        class={`rounded h-72 w-92 sm:h-80 md:w-80 scale-x-85 lg:scale-x-150 sm:-translate-x-0 justify-center mt-12 ms-5 sm:ms-0 lg:ms-[150px] transition-all delay-200 duration-700 ease-in-out transform ${
          isVisible2
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-20 opacity-0 scale-95"
        }`}
        src={proj21Sec.src}
        alt="Building"
        loading="lazy"
      />
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform text-left ${
          isVisible2
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par23}
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform text-left ${
          isVisible2
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par24}
      </p>
    </div>
  </div>
  <div id="amazon" class="grid grid-cols-2 gap-4 -mt-96 mb-[200px]">
    <img
      class="rounded-xl h-84 md:h-5/6 mt-[440px] lg:-mt-[130px] scale-y-[3] md:mt-0 md:scale-y-[0.5] lg:scale-y-[0.5] justify-center transition-transform duration-300 ease-in-out focus:translate-x-3/4 md:focus:scale-[1] lg:focus:scale-0 focus:scale-[2.5] hover:scale-150 md:hover:scale-100"
      src={proj31Sec.src}
      alt="Building"
      loading="lazy"
    />
    <div>
      <h2 class="text-3xl font-bold mb-6 mt-10">
        {projectProps.title3}
      </h2>
      <hr
        class={`mt-2 border-t-2 border-blue-500 transition-all duration-300 easy-in-out width: ${isVisible3 ? "w-[15%]" : "w-full"}`}
      />
      <p class="mt-12 leading-8">
        {projectProps.par31}
      </p>
      <p class="mt-12 leading-8">
        {projectProps.par32}
      </p>
      <p class="mt-12 leading-8">
        {projectProps.par33}
      </p>
      <img
        class="mt-[170px] rounded-xl h-44 md:h-6/8 lg:scale-[2.5] scale-[2] justify-center transition-transform duration-300 ease-in-out -translate-x-2/4 lg:hover:scale-[2.5] sm:focus:-translate-x-2/4 focus:scale-150 hover:scale-150 hover:-translate-y-2/4"
        src={proj32Sec.src}
        alt="Building"
        loading="lazy"
      />
    </div>
  </div>
</div>
