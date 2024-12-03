export async function GET() {
  const data = {
    description: "This is a brief description about me."
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
