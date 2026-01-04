import About from "@/components/about/About";
import Main from "@/components/main/Main";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skill/Skills";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
