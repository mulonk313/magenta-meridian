<script lang="ts">
  import Carousel from "svelte-carousel";
  import proj1 from "/src/assets/proj1.png";
  import proj2 from "/src/assets/proj2.png";
  import proj3 from "/src/assets/proj3.png";
  import proj11Sec from "/src/assets/proj1-sec.png";
  import proj12Sec from "/src/assets/proj1-sec2.png";
  import proj21Sec from "/src/assets/proj2-sec.png";
  import proj22Sec from "/src/assets/proj2-sec2.png";
  import proj23Sec from "/src/assets/proj2-sec3.png";
  import proj31Sec from "/src/assets/proj3-sec.png";
  import proj32Sec from "/src/assets/proj3-sec2.png";

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
          class="absolute bottom-0 w-full h-1/2 text-center p-2 lg:p-[65px] opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 text-white transition-opacity duration-300"
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
          class="absolute bottom-0 w-full h-1/2 text-center p-[65px] opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 text-white transition-opacity duration-300"
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
          class="absolute bottom-0 w-full h-1/2 text-center p-[65px] opacity-0 group-hover:opacity-100 bg-black bg-opacity-70 text-white transition-opacity duration-300"
        >
          {projectProps.projectName3}
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
    <img
      class={`h-5/6 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
        isVisible1
          ? "translate-x-0 opacity-100 scale-100"
          : "-translate-x-full opacity-0 scale-95"
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
        Press Me
      </button>
      <hr
        class={`mt-2 border-t-2 border-blue-500 transition-all duration-300 ease-in-out ${
          isVisible1 ? "w-[15%]" : "w-full"
        }`}
      />
      <p class="mt-12 leading-8">
        {projectProps.par11}
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible1
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par12}
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible1
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par13}
      </p>
      <img
        class={`h-6/8 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
          isVisible1
            ? "-translate-x-0 opacity-100 scale-100"
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
    class={`mt-60 grid grid-cols-2 gap-6 transition-all duration-700 delay-350 ease-in-out transform ${
      isVisible2
        ? "ms-0 text-justify"
        : "ms-[475px] max-[1024px]:ms-[0px] text-center"
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
        Press Me
      </button>
      <hr
        class={`mt-2 border-t-2 border-blue-500 transition-all duration-300 ease-in-out ${isVisible2 ? "w-[15%]" : "w-full"}`}
      />
      <p class="mt-12 -pl-12 leading-8">
        {projectProps.par21}
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible2
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par22}
      </p>
      <div
        class="flex flex-row gap-6 justify-normal md:justify-center h-screen mt-[105px] sm:mt-0"
      >
        <img
          class={`h-44 md:h-60 md:w-1/2 w-72 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
            isVisible2
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-full opacity-0 scale-95"
          }`}
          src={proj22Sec.src}
          alt="Building"
          loading="lazy"
        />
        <img
          class={`h-44 md:h-60 md:w-1/2 w-72 justify-center mt-12 transition-all delay-200 duration-700 ease-in-out transform ${
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
        class={`h-72 w-92 sm:h-80 md:w-80 scale-x-75 lg:scale-x-150 -translate-x-8 sm:-translate-x-0 justify-center mt-12 ms-10 lg:ms-[150px] transition-all delay-200 duration-700 ease-in-out transform ${
          isVisible2
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-20 opacity-0 scale-95"
        }`}
        src={proj21Sec.src}
        alt="Building"
        loading="lazy"
      />
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible2
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par23}
      </p>
      <p
        class={`mt-12 transition-all duration-700 ease-in-out delay-200 transform leading-8 ${
          isVisible2
            ? "-translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        }`}
      >
        {projectProps.par24}
      </p>
    </div>
  </div>
  <div id="amazon" class="grid grid-cols-2 gap-4 -mt-96">
    <img
      class="h-84 md:h-5/6 mt-[600px] md:mt-12 sm:mt-12 lg:mt-0 scale-y-[5] sm:scale-y-[0.5] lg:scale-y-[0.5] justify-center transition-transform duration-300 ease-in-out focus:translate-x-2/4 md:focus:scale-[1] lg:focus:scale-0 focus:scale-[2.5] hover:scale-150 md:hover:scale-100"
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
        class="h-44 md:h-6/8 scale-[1.2] scale-x-[1.8] md:scale-x-[1.5] justify-center mt-4 transition-transform duration-300 ease-in-out -translate-x-2/4 lg:translate-x-2/4 lg:hover:scale-[2.5] sm:focus:-translate-x-2/4 focus:scale-150 hover:scale-150 hover:-translate-y-2/4"
        src={proj32Sec.src}
        alt="Building"
        loading="lazy"
      />
    </div>
  </div>
</div>
