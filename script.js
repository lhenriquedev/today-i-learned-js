const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const shareButton = document.querySelector(".btn-open");
const factForm = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Toggle form visibility
shareButton.addEventListener("click", () => {
  if (factForm.classList.contains("hidden")) {
    factForm.classList.remove("hidden");
    shareButton.textContent = "Close";
  } else {
    factForm.classList.add("hidden");
    shareButton.textContent = "Share a fact";
  }
});

// Load data from Supabase
async function loadFacts() {
  const response = await fetch(
    "https://wnvjllhvwpewvbokaqzi.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndudmpsbGh2d3Bld3Zib2thcXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NzMzMTEsImV4cCI6MTk4NzA0OTMxMX0.DIqfqqFFQFgpUXKiIhYWHnxpc3YmxMOUlIQyvbmsRHU",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndudmpsbGh2d3Bld3Zib2thcXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NzMzMTEsImV4cCI6MTk4NzA0OTMxMX0.DIqfqqFFQFgpUXKiIhYWHnxpc3YmxMOUlIQyvbmsRHU",
      },
    }
  );
  const data = await response.json();
  createFactList(data);
}

loadFacts();

// Create Dom elements: Render facts in list
factsList.innerHTML = "";
function createFactList(dataArr) {
  const htmlArr = dataArr.map((fact) => {
    return `<li class="fact">
      <p>${fact.text}  
        <a class="source" href=${fact.source} target="_blank">(Source)</a>
      </p>
      // Busca a cor no array de categorias que bate com a categoria do "fact"
      <span class="tag" style="background: ${
        CATEGORIES.find((cat) => cat.name === fact.category).color
      }">${fact.category}</span>
    </li>`;
  });
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
