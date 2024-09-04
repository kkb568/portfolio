import "./Projects.scss";
import { projects } from "../data";
import { ProjectData } from "./ProjectData";

export default function Projects() {
  const projectsData = projects.map((project) => {
    const { id, imageUrl, name } = project;

    return <ProjectData key={id} imageUrl={imageUrl} name={name} id={id} />;
  });

  return (
    <>
      <h1>Projects</h1>
      <div className="projects">{projectsData}</div>
    </>
  );
}
