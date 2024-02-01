// JavaScript for dark mode toggle
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("change", toggleDarkMode);

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = darkModeToggle.checked;

    // Set background color for body
    document.body.style.backgroundColor = isDarkMode ? "#323232" : "#f0f0f0";

    // Set overlay color for top bar and container
    const overlayColor = isDarkMode ? "#3a3a3a" : "#dddddd";
    const container = document.querySelector(".container");
    const topBar = document.querySelector(".top-bar");
    if (container) {
      container.style.backgroundColor = overlayColor;
    }
    if (topBar) {
      topBar.style.backgroundColor = overlayColor;
    }

    // Set color for h1
    const h1Color = isDarkMode ? "#c0c0c0" : "#333";
    document.querySelector("h1").style.color = h1Color;

    // Set color for text-input
    const textInput = document.querySelector(".text-input");
    if (textInput) {
      const textInputBackgroundColor = isDarkMode ? "#535353" : "#cacaca";
      const textInputColor = isDarkMode ? "#f0f0f0" : "#494949";
      const textInputBorder = isDarkMode ? "1px solid #535353" : "1px solid #cacaca";
      const textInputBoxShadow = isDarkMode ? "0 0 10px rgba(255, 255, 255, 0.1)" : "0 0 10px rgba(0, 0, 0, 0.1)";
      textInput.style.backgroundColor = textInputBackgroundColor;
      textInput.style.color = textInputColor;
      textInput.style.border = textInputBorder;
      textInput.style.boxShadow = textInputBoxShadow;
    }

    // Set color for author
    const authorInput = document.querySelector(".author");
    if (authorInput) {
      const authorInputBackgroundColor = isDarkMode ? "#535353" : "#cacaca";
      const authorInputColor = isDarkMode ? "#f0f0f0" : "#494949";
      const authorInputBorder = isDarkMode ? "1px solid #535353" : "1px solid #cacaca";
      const authorInputBoxShadow = isDarkMode ? "0 0 10px rgba(255, 255, 255, 0.1)" : "0 0 10px rgba(0, 0, 0, 0.1)";
      authorInput.style.backgroundColor = authorInputBackgroundColor;
      authorInput.style.color = authorInputColor;
      authorInput.style.border = authorInputBorder;
      authorInput.style.boxShadow = authorInputBoxShadow;
    }

    // Set color for paste-title
    const titleInput = document.querySelector(".paste-title");
    if (titleInput) {
      const titleInputBackgroundColor = isDarkMode ? "#535353" : "#cacaca";
      const titleInputColor = isDarkMode ? "#f0f0f0" : "#494949";
      const titleInputBorder = isDarkMode ? "1px solid #535353" : "1px solid #cacaca";
      const titleInputBoxShadow = isDarkMode ? "0 0 10px rgba(255, 255, 255, 0.1)" : "0 0 10px rgba(0, 0, 0, 0.1)";
      titleInput.style.backgroundColor = titleInputBackgroundColor;
      titleInput.style.color = titleInputColor;
      titleInput.style.border = titleInputBorder;
      titleInput.style.boxShadow = titleInputBoxShadow;
    }

    // Set color for text-wrapper
    const textWrapper = document.querySelector('.text-wrapper');
    if (textWrapper) {
      const textWrapperColor = isDarkMode ? '#c0c0c0' : '#535353';
      textWrapper.style.color = textWrapperColor;
    }
  }
});
