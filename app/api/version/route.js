export const getVersion = () => {
  const apiEnv = process.env.APP_ENV || process.env.NODE_ENV;
  return new Response(
    JSON.stringify({
      name: "Portfolio",
      version: "2.0.0",
      "build-time": "2026-01-6 10.00:00PM BST",
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
