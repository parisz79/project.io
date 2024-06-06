const moonIcon = document.querySelector("#moon");
const sunIcon = document.querySelector("#sun");

//
// const userTheme = localStorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
// if (userTheme === "dark" || (!userTheme && systemTheme)) {
//   document.documentElement.classList.add("dark");
//   moonIcon.classList.add("hidden");
// } else {
//   document.documentElement.classList.remove("dark");
//   sunIcon.classList.add("hidden");
// }
// switcher
// themeSwitchersBtns.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     const theme = e.target.dataset.theme;
//     console.log(theme);
//   });
// });

//
moonIcon.addEventListener("click", (e) => {
  document.documentElement.classList.remove("dark");
//   userTheme = localStorage.setItem("theme", "light");
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
});

sunIcon.addEventListener("click", (e) => {
  document.documentElement.classList.add("dark");
//   userTheme = localStorage.setItem("theme", "dark");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
});
