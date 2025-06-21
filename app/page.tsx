import { redirect } from "next/navigation";

export default function Home() {
  const shouldRedirect = true; // Change this condition in the future as needed
  if (shouldRedirect) {
    redirect("/dashboard");
  }
  // Home page content (will not render while shouldRedirect is true)
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to Bitcoin Frenzy</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the home page. You will be redirected to the dashboard.
      </p>
    </main>
  );
}
