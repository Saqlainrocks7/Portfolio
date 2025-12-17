import { Hero } from "@/components/Hero";
import { MotionInView } from "@/components/MotionInView";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectCards } from "@/components/ProjectCards";
import { SkillBars } from "@/components/SkillBars";
import { EducationCards } from "@/components/EducationCards";
import { Contact } from "@/components/Contact";
import { Publications, ResearchAreas } from "@/components/ResearchAndPubs";

export default function Page() {
  return (
    <main>
      <Hero />

      <section id="experience" className="py-20 sm:py-28">
        <div className="container-max">
          <MotionInView>
            <SectionHeading
              chip="🗂 work_history"
              title="Experience"
              subtitle="Building impactful solutions across research and sports technology"
            />
          </MotionInView>
          <ExperienceTimeline />
        </div>
      </section>

      <section id="projects" className="py-20 sm:py-28">
        <div className="container-max">
          <MotionInView>
            <SectionHeading
              chip="📁 featured_projects"
              title="Projects"
              subtitle="Showcasing full-stack applications with modern architectures"
            />
          </MotionInView>
          <MotionInView delay={0.05}>
            <ProjectCards />
          </MotionInView>

          <div className="mt-10 flex justify-center">
            <a className="btn" href="https://github.com/Saqlainrocks7" target="_blank" rel="noreferrer">
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 sm:py-28">
        <div className="container-max">
          <MotionInView>
            <SectionHeading
              chip="</> tech_stack"
              title="Skills"
              subtitle="Technologies I've worked with across the full stack"
            />
          </MotionInView>
          <MotionInView delay={0.05}>
            <SkillBars />
          </MotionInView>
        </div>
      </section>

      <section id="research" className="py-20 sm:py-28">
        <div className="container-max">
          <MotionInView>
            <SectionHeading
              chip="🧪 research_area"
              title="Research Area"
              subtitle="Current interests and directions (dummy content — replace with your real work)"
            />
          </MotionInView>
          <MotionInView delay={0.05}>
            <ResearchAreas />
          </MotionInView>
        </div>
      </section>

      <section id="publications" className="py-20 sm:py-28">
        <div className="container-max">
          <MotionInView>
            <SectionHeading
              chip="📄 publications"
              title="Publications"
              subtitle="Selected papers and reports (dummy content — replace with your real publications)"
            />
          </MotionInView>
          <MotionInView delay={0.05}>
            <Publications />
          </MotionInView>
        </div>
      </section>

      <section id="education" className="py-20 sm:py-28">
        <div className="container-max">
          <MotionInView>
            <SectionHeading
              chip="🎓 education"
              title="Education"
              subtitle="Academic foundation in Computer Science"
            />
          </MotionInView>
          <MotionInView delay={0.05}>
            <EducationCards />
          </MotionInView>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-28">
        <div className="container-max">
          <MotionInView>
            <SectionHeading
              chip="✉️ get_in_touch"
              title="Let's Connect"
              subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!"
            />
          </MotionInView>
          <MotionInView delay={0.05}>
            <Contact />
          </MotionInView>

          <div className="mt-14 text-center subtle text-sm">
            © {new Date().getFullYear()} Sk Saqlain Ali. Built with Next.js.
          </div>
        </div>
      </section>
    </main>
  );
}
