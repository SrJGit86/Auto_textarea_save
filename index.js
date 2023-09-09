const text_input = document.getElementById("text_area");

function saveAtLocalStorage() {
    localStorage.setItem("saveText", text_input.value)
}

if (localStorage.getItem("saveText")) {
    text_input.value = localStorage.getItem("saveText")
}

text_input.addEventListener("input", saveAtLocalStorage)