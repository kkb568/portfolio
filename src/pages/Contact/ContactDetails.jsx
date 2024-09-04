export function ContactDetails(props) {
  return (
    <div className="details">
      <img src={props.url} />
      <p>{props.name}</p>
    </div>
  );
}
