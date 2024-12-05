export async function GET({ url }: { url: URL }) {
  const lang = (url.searchParams.get("lang") || "EN") as "EN" | "GR";

  const data = {
    EN: {
      description:
        "My name is Karounis Ioannis and I have a bachelor's degree in the department of Informatics and Computer Engineering. Recently, I am trying to learn more technologies around full-end development and become a good developer who improves day by day.",
      future:
        "To be honest, 5 years is a lot of time and for now, I can't think of it so clearly. Even so, I want to improve myself in many aspects, and especially in my work, I want to learn new skills with daily training. So, maybe in the future I will have many more opportunities.",
      interviewContent:
        "In our conversation, we discussed a lot about technologies and what I will use in websites. I liked very much the modern frameworks like Astro and Svelte and, of course, the innovative way of CSS with Tailwind.",
    },
    GR: {
      description:
        "Ονομάζομαι Καρούνης Ιωάννης και έχω πτυχίο στο τμήμα Πληροφορικής και Μηχανικών Υπολογιστών. Τελευταία, προσπαθώ να μάθω περισσότερες τεχνολογίες γύρω από την πλήρη ανάπτυξη και να γίνω ένας καλός προγραμματιστής που βελτιώνεται μέρα με τη μέρα.",
      future:
        "Για να είμαι ειλικρινής, 5 χρόνια είναι πολύς χρόνος και προς το παρόν δεν μπορώ να το σκεφτώ τόσο καθαρά. Παρ' όλα αυτά, θέλω να βελτιώσω τον εαυτό μου σε πολλούς τομείς και ειδικά στη δουλειά μου, θέλω να μάθω νέες δεξιότητες με καθημερινή εκπαίδευση. Ίσως, στο μέλλον να έχω πολλές περισσότερες ευκαιρίες.",
      interviewContent:
        "Στη συζήτησή μας, συζητήσαμε πολλά για τις τεχνολογίες και τι θα χρησιμοποιήσω στις ιστοσελίδες. Μου άρεσαν πολύ τα σύγχρονα frameworks όπως το Astro και το Svelte και φυσικά ο καινοτόμος τρόπος με το CSS χρησιμοποιώντας το Tailwind.",
    },
  };

  const selectedData = data[lang] || data.EN;

  return new Response(JSON.stringify(selectedData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
