import "./Home.scss";

export default function Home() {
  return (
    <div className="home-content">
      <p className="emoji">&#9995;</p>
      <div className="content">
        <h1>Hello and welcome</h1>
        <p>
          Who am I? A young man passionate and knowledgeable in UX design and front-end development. Click on the{" "}
          <a href="/about">about link</a> to know who exactly am I.
        </p>
      </div>
    </div>
  );
}
