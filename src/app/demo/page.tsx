import { Skills } from "@/components/ui/skills-showcase";

export default function Page() {
  return (
    <main className="min-h-screen transition-colors duration-500 w-full">
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8 w-full">
        <Skills />
      </div>
    </main>
  );
}
