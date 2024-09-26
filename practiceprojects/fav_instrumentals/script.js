const audios = Array(
  "./audios/euphoria.mp3",
  "./audios/life-goes-on.mp3",
  "./audios/magic-shop.mp3",
  "./audios/on-the-street.mp3",
  "./audios/serendipity.mp3",
  "./audios/still-with-you.mp3"
);
let audio;
let previous;
// let src;

const buttons = document.querySelectorAll(".sounds>button");

document.querySelector(".stop").addEventListener("click", () => {
  stopAudios();
  removeActiveClasses();
});

for (let i = 0; i <= audios.length; i++) {
  buttons[i].addEventListener("click", function () {
    removeActiveClasses();
    stopAudios();
    document.querySelectorAll(".container>div")[i].classList.add("active");
    document.getElementById(`${i}`).play();
  });
}

function removeActiveClasses() {
  document.querySelectorAll(".container>div").forEach((btn) => {
    btn.classList.remove("active");
  });
}

function stopAudios() {
  for (let j = 0; j < audios.length; j++) {
    const song = document.getElementById(`${j}`);
    // if (song && !song.paused) {
    song.pause();
    song.currentTime = 0;
    // }
  }
}

// function playAudio(event) {
//   switch (event) {
//     case "Euphoria":
//       new Audio(audios[0]).play();
//       buttons[0].disabled = True;
//       break;
//     case "Life Goes On":
//       new Audio(audios[1]).play();
//       buttons[2].disabled = True;
//       break;
//     case "Magic Shop":
//       new Audio(audios[2]).play();
//       break;
//     case "On the Street":
//       new Audio(audios[3]).play();
//       break;
//     case "Serendipity":
//       new Audio(audios[4]).play();
//       break;
//     case "Still With You":
//       new Audio(audios[5]).play();
//       break;
//   }
//}
