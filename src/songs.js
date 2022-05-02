import { v4 as uuidv4 } from "uuid";

function songs() {
  return [
    {
      name: "Timelapse",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/03/7a886841c0f684c40ae9a6d1abd0c30f72269977-1024x1024.jpg",
      artist: "Kissamilé",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32885",
      color: ["#222222", "#3f466f"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Blue Moment",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/7e2c880b50c6647e59330b1c371101ce2950625f-1024x1024.jpg",
      artist: "Sugi.wa, Tom Ford",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32978",
      color: ['#a5b5ab', '#303d69'],
      id: uuidv4(),
      active: false,
    },
    {
        name: "Glow",
        cover:
          "https://chillhop.com/wp-content/uploads/2022/03/efb56e836d82d26e857b341a951f0337ace66b8b-1024x1024.jpg",
        artist: "Tesk",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=32888",
        color: ['#ddba00', '#2c3965'],
        id: uuidv4(),
        active: false,
      },
  ];
}

export default songs;
