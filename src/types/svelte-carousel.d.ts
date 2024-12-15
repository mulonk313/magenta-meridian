declare module 'svelte-carousel' {
    import { SvelteComponentTyped } from "svelte";
  
    export interface CarouselProps {
      [key: string]: any;
    }
  
    export default class Carousel extends SvelteComponentTyped<CarouselProps> {}
  }
  