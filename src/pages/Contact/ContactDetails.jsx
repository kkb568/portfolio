export function ContactDetails(props) {
  return (
    <div className="details">
      <img src={props.url} alt={props.imageName} />
      <p>{props.name}</p>
    </div>
  );
}
