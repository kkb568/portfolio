import { useParams } from "react-router-dom";
import { projects } from "../data";
import { useEffect, useState } from "react";
import "./ProjectDetails.scss";

export default function ProjectDetails() {
  const [projectObject, setProjectObject] = useState({
    name: "",
    imageUrl: "",
    details: "",
    siteUrl: "",
  });
  const { id } = useParams();

  const { name, imageUrl, details, siteUrl } = projectObject;

  useEffect(() => {
    projects
      .filter((project) => project.id === parseInt(id))
      .map((filteredProject) => {
        const { name, imageUrl, details, siteUrl } = filteredProject;

        setProjectObject((prevState) => {
          return {
            ...prevState,
            name,
            imageUrl,
            details,
            siteUrl,
          };
        });
      });
  }, [id]);

  return (
    <div className="projectDetails">
      <img src={imageUrl} />
      <div className="details">
        <h3>{name}</h3>
        <p>{details}</p>
        <p>
          You can check the project site <a href={siteUrl}>here</a>
        </p>
      </div>
    </div>
  );
}
