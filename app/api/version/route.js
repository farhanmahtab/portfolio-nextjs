export const getVersion = () => {
  return new Response(
    JSON.stringify({
      name: "Portfolio",
      version: "2.0.2",
      "build-time": "2026-01-7 01.15:00AM BST",
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
