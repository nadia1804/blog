function fixText() {
  const input = document.getElementById("inputText").value;

  let fixed = input
    .replace(/\s+/g, " ")
    .replace(/([.!?])\s*(\w)/g, (m, p1, p2) => p1 + " " + p2.toUpperCase())
    .replace(/^([a-z])/, (m, p1) => p1.toUpperCase());

  const output = document.getElementById("outputText");
  output.value = fixed.trim();

  // Salin otomatis ke clipboard
  output.select();
  document.execCommand("copy");
}

function copyText() {
  const output = document.getElementById("outputText");
  output.select();
  document.execCommand("copy");
}

function resetText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}

// Deteksi keyboard
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inputText");

  input.addEventListener("keydown", function (e) {
    const isTouch = navigator.maxTouchPoints > 0;

    if (!isTouch && e.key === "Enter") {
      if (e.shiftKey) {
        // Shift+Enter → baris baru
        e.preventDefault();
        const start = input.selectionStart;
        const end = input.selectionEnd;
        input.value =
          input.value.substring(0, start) + "\n" + input.value.substring(end);
        input.selectionStart = input.selectionEnd = start + 1;
      } else {
        // Enter → eksekusi + salin
        e.preventDefault();
        fixText();
      }
    }
  });
});

