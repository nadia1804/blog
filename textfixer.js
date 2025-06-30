function fixText() {
  const input = document.getElementById("inputText").value;

  let fixed = input
    .replace(/\s+/g, " ")
    .replace(/([.!?])\s*(\w)/g, (m, p1, p2) => p1 + " " + p2.toUpperCase())
    .replace(/^([a-z])/, (m, p1) => p1.toUpperCase());

  document.getElementById("outputText").value = fixed.trim();
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
