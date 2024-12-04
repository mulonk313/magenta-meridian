import { writable } from "svelte/store";

export const language = writable("EN");

export const translations = {
  EN: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  GR: {
    home: "Αρχική",
    about: "Σχετικά",
    projects: "Έργα",
    contact: "Επικοινωνία",
  },
};
