export async function GET() {
  const data = {
    description: "My name is Karounis Ioannis and i have bachelor degree in the department of Informatics and Computer Engineering."
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
