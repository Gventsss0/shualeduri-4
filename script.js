//---------------darkmode-----------

let isDarkMode = false;

document.querySelector(".moon1").addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode", isDarkMode);

  const modeText = isDarkMode ? "LIGHT" : "DARK";
  document.querySelector(".text2").textContent = modeText;

  const moonIcon = document.querySelector(".moon1");
  const sunIcon = document.querySelector(".iconDiv img");

  moonIcon.src = isDarkMode ? "./photos/002-sun.png" : "./photos/moon.png";
  moonIcon.alt = isDarkMode ? "Sun Icon" : "Moon Icon";
  // sunIcon.src = isDarkMode ? "./photos/002-sun.png" : "./photos/moon.png";
  // sunIcon.alt = isDarkMode ? "Sun Icon" : "Moon Icon";
});

//-----------------------fetch--------------------

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   fetchData();
// });

// async function getData() {
//   try {
//     let username = input.value.trim();
//     if (!username) {
//       showError("no username.");
//       return;
//     }
//     const res = await fetch(`https://api.github.com/users/${username}`);
//     if (!res.ok) {
//       showError("User not found. Please try another username.");
//       return;
//     }
//     const data = await res.json();
//     renderToHtml(data);
//   } catch (error) {
//     console.error(error);
//     showError("Something went wrong. Please try again later.");
//   }
// }
