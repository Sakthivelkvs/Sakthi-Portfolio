/**
 * @copyright 2024 de-horst
 * @licence Apache-2.0
 */

/**
 * COMPONENTS
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "./images/project-1.jpg",
    title: "Mech Manage",
    tags: ["API", "MVT", "Development"],
    projectLink: "https://github.com/Sakthivelkvs/MechLand",
  },
  {
    imgSrc: "./images/project-2.jpg",
    title: "Smart Bus Pass",
    tags: ["API", "MVT", "Development"],
    projectLink: "https://github.com/Sakthivelkvs/Smart-Bus-Pass",
  },
  {
    imgSrc: "./images/project-3.jpg",
    title: "Tourist App",
    tags: ["Development", "API"],
    projectLink: "https://github.com/Sakthivelkvs/TouristApp-React",
  },
  // {
  //   imgSrc: "/images/project-4.jpg",
  //   title: "Real state website",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee-org/wealthome",
  // },
  // {
  //   imgSrc: "/images/project-5.jpg",
  //   title: "eCommerce website",
  //   tags: ["eCommerce", "Development"],
  //   projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  // },
  // {
  //   imgSrc: "/images/project-6.jpg",
  //   title: "vCard Personal portfolio",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  // },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
