import email from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import relaxation_room from "../images/relaxation_room.png";
import map_locate from "../images/map_locate.png";

export const contacts = [
  {
    imageUrl: email,
    name: "briankoome56@gmail.com",
  },
  {
    imageUrl: linkedin,
    name: "Brian Koome",
  },
];

export const projects = [
  {
    id: 1,
    name: "Virtual relaxation room",
    siteUrl: "https://virtualrelaxationroom-aluwellness-alueducation.com/",
    imageUrl: relaxation_room,
    details:
      "It's a website in which the African Leadership College students can engage with video and article resources based on how they are currently feeling. This helps the students to assist their emotional wellbeing and get help from the team of wellness and peer counsellors. It's created using HTML, CSS and Javascript language.",
  },
  {
    id: 2,
    name: "Map locate application",
    siteUrl: "https://map-locate.onrender.com/signup",
    imageUrl: map_locate,
    details:
      "This application is used to connect African Leadership University students, staff and alumni through us of Google maps and pins to show the user's location. As the user clicks one of the pins (showing other users), it takes to a form page whereby the user sends a message to the recepient and is sent to the recepient's email. The app is created using HTML, SCSS, Javascript and Nodejs with MongoDB database.",
  },
];
