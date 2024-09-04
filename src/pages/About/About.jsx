import Brian from "../../images/Brian.jpeg";
import "./About.scss";

export default function About() {
  return (
    <div className="about-content">
      <img src={Brian} alt="Selfie of Brian Koome" />
      <div className="about">
        <h1>About me</h1>
        <p>
          My name is Brian Koome from Nairobi, Kenya and I completed my studies at African Leadership College studying Bsc. in Computing.
        </p>
        <p>
          I am versatile and skilled in UX design and front-end development with HTML, CSS, SCSS, JavaScript, TypeScript and Reactjs
          library.
        </p>
        <p>Click on the projects link to know more of my expertise so far.</p>
      </div>
    </div>
  );
}
