import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Main from "@/components/main/Main";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skill/Skills";

export default function page() {
  return (
    <div className="flex flex-col">
      <Main />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
