export const getVersion = () => {
  return new Response(
    JSON.stringify({
      name: "Portfolio",
      version: "2.0.2",
      "build-time": "2026-04-02 12.10:00AM BST",
      "current-time": new Date().toISOString(),
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};

export async function GET() {
  return getVersion();
}
