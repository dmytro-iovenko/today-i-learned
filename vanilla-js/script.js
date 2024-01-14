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

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

loadFacts();

async function loadFacts() {
    const res = await fetch("https://jpnjisjdtomhzxdyhcrm.supabase.co/rest/v1/facts", {
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwbmppc2pkdG9taHp4ZHloY3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyMDcxMTAsImV4cCI6MjAyMDc4MzExMH0.TKk0U1CZ3fpZuHyOpFWR_mWeesO2HC-YCv9vrKmhO_w",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwbmppc2pkdG9taHp4ZHloY3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyMDcxMTAsImV4cCI6MjAyMDc4MzExMH0.TKk0U1CZ3fpZuHyOpFWR_mWeesO2HC-YCv9vrKmhO_w",
        }
      });
      const data = await res.json();
      console.log(data);
      createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
                  <p>
                    ${fact.text}
                      <a
                        class="source"
                        href=${fact.source}
                        target="_blank"
                        >(Source)</a
                      >
                    </p>
                    <span class="tag" style="background-color: #3b82f6"
                      >${fact.category}</span
                    >
                </li>`
  );
  const html = htmlArr.join("");

  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
