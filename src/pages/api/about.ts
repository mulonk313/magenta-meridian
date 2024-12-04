export async function GET() {
  const data = {
    description: "My name is Karounis Ioannis and i have bachelor degree in the department of Informatics and Computer Engineering. Latest, i am trying to learn more technologies around full-end development and become a good developer who gonna improved day by day.",
    future: "To be honest, 5 years is a lot of time and for now i can't think of it so clearly. Even so, i want to improve myself in a lot of aspects and especially in my work, i want to learn new skills with every day training. So, maybe in the future i will have many more opportunities.",
    interviewContent: "In our conversation, we discussed a lot about technologies and what i will use in websites. So i liked very much the modern frameworks like Astro and Svelte and of course the innovative way of css with Tailwind.",
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
