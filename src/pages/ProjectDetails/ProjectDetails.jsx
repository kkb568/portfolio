import { useParams } from "react-router-dom";
import { projects } from "../data";
import { useEffect, useState } from "react";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./ProjectDetails.scss";

export default function ProjectDetails() {
  const [projectObject, setProjectObject] = useState({
    name: "",
    imageUrl: "",
    details: "",
    siteUrl: "",
  });
  const [ifProjectFound, setIfProjectFound] = useState(false);

  const { id } = useParams();

  const { name, imageUrl, details, siteUrl } = projectObject;

  useEffect(() => {
    const filteredProject = projects.filter((project) => projects.indexOf(project) === parseInt(id));

    if (filteredProject.length === 0) {
      setIfProjectFound(false);
      return;
    }

    const { name, imageUrl, details, siteUrl } = filteredProject[0];

    setIfProjectFound(true);
    setProjectObject((prevState) => {
      return { ...prevState, name, imageUrl, details, siteUrl };
    });
  }, [id]);

  if (!ifProjectFound) {
    return <PageNotFound />;
  }

  return (
    <div className="projectDetails">
      <img src={imageUrl} alt={`${name} outline`} />
      <div className="details">
        <h1>{name}</h1>
        <p>{details}</p>
        <p>
          You can{" "}
          <a href={siteUrl} target="_blank" rel="noreferrer">
            check the project site here
          </a>
        </p>
      </div>
    </div>
  );
}
