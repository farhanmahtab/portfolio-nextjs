export const getVersion = () => {
  return new Response(
    JSON.stringify({
      name: "Portfolio",
      version: "2.0.1",
      "build-time": "2026-01-7 12.45:00PM BST",
      "current-time": new Date().toISOString(),
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export async function GET() {
  return getVersion();
}
