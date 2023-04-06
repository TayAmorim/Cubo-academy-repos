const input = document.getElementsByName("meu-input");

input.forEach((input) => {
  setTimeout(() => {
    input.style.border = "1px solid blue";
  }, 2000);
});
