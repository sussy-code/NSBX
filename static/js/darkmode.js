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
      const textInputBoxShadow = isDarkMode ? "0 0 10px rgba(255, 255, 255, 0.05)" : "0 0 10px rgba(0, 0, 0, 0.05)";
      textInput.style.backgroundColor = textInputBackgroundColor;
      textInput.style.color = textInputColor;
      textInput.style.border = textInputBorder;
      textInput.style.boxShadow = textInputBoxShadow;
    }

    // Set color for paste-title
    const titleInput = document.querySelector(".paste-title");
    if (titleInput) {
      const titleInputBackgroundColor = isDarkMode ? "#535353" : "#cacaca";
      const titleInputColor = isDarkMode ? "#f0f0f0" : "#494949";
      const titleInputBorder = isDarkMode ? "1px solid #535353" : "1px solid #cacaca";
      const titleInputBoxShadow = isDarkMode ? "0 0 10px rgba(255, 255, 255, 0.05)" : "0 0 10px rgba(0, 0, 0, 0.05)";
      titleInput.style.backgroundColor = titleInputBackgroundColor;
      titleInput.style.color = titleInputColor;
      titleInput.style.border = titleInputBorder;
      titleInput.style.boxShadow = titleInputBoxShadow;
    }

    // Set color for text-wrapper
    const buttonInput = document.querySelector('#login-form-submit');
    if (buttonInput) {
      const buttonInputBackgroundColor = isDarkMode ? '#535353' : '#cacaca';
      const buttonInputColor = isDarkMode ? "#f0f0f0" : "#494949";
      const buttonInputBorder = isDarkMode ? "1px solid #535353" : "1px solid #cacaca";
      const buttonInputBoxShadow = isDarkMode ? "0 0 10px rgba(255, 255, 255, 0.05)" : "0 0 10px rgba(0, 0, 0, 0.05)";
      buttonInput.style.backgroundColor = buttonInputBackgroundColor;
      buttonInput.style.color = buttonInputColor;
      buttonInput.style.border = buttonInputBorder;
      buttonInput.style.boxShadow = buttonInputBoxShadow;
    }
  }
});
