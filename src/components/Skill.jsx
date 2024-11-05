/**
 * @copyright 2024 de-horst
 * @licence Apache-2.0
 */

/**
 * COMPONENTS
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "./images/python.svg",
    label: "Python",
    desc: "Programming Language",
  },
  {
    imgSrc: "./images/django.svg",
    label: "Django",
    desc: "Python Framework",
  },
  {
    imgSrc: "./images/java.svg",
    label: "Java",
    desc: "Programming Language",
  },
  {
    imgSrc: "./images/html.svg",
    label: "HTML",
    desc: "Web Tool",
  },
  {
    imgSrc: "./images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "./images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "./images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "./images/vscode.svg",
    label: "VS Code",
    desc: "IDE",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Skills</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
