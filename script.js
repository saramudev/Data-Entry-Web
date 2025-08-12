document.getElementById("entryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const title = document.getElementById("title").value.trim();
  const hometown = document.getElementById("hometown").value.trim();

  if (!name || !title) {
    document.getElementById("error").innerText = "Please fill in all required fields.";
    return;
  }

  const entry = { name, age, title, hometown };

  // Save to LocalStorage
  localStorage.setItem("lastEntry", JSON.stringify(entry));

  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push(entry);
  localStorage.setItem("entries", JSON.stringify(entries));

  window.location.href = "confirm.html";
});
