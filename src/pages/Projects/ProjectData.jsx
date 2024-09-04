import { Link } from "react-router-dom";

export function ProjectData(props) {
  return (
    <div className="project">
      <img src={props.imageUrl} alt={`${props.name} outline`} />
      <p>{props.name}</p>
      <Link to={`/projects/${props.id}`}>View more</Link>
    </div>
  );
}
