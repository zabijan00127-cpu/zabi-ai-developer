const tabs = document.querySelectorAll(".categories span");
const content = document.getElementById("content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    if (tab.innerText.includes("Recent")) {
      content.innerHTML = "🔥 Your recent AI creations will appear here.";
    } 
    else if (tab.innerText.includes("Projects")) {
      content.innerHTML = "🧠 Your AI projects dashboard is coming soon.";
    } 
    else if (tab.innerText.includes("Templates")) {
      content.innerHTML = "📦 Ready-to-use AI templates will be listed here.";
    }
  });
});
