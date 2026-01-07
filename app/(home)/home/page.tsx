import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Main from "@/components/main/Main";
import Showcase from "@/components/projects/Showcase";
import Skills from "@/components/skill/Skills";

export default function page() {
  return (
    <div className="flex flex-col">
      <Main />
      <About />
      <Skills />
      <Experience />
      <Showcase />
      <Contact />
    </div>
  );
}
