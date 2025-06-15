const FACTS = document.getElementById("facts");
const GETFACTBTN = document.getElementById("getFactBtn");

GETFACTBTN.addEventListener("click", () => {
  fetch("https://catfact.ninja/fact")

    .then(response => {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })

    .then(data => {
      const factElement = document.createElement("p");
      factElement.textContent = data.fact;
      FACTS.prepend(factElement);
    })
    
    .catch(error => {
      alert("Failed to fetch cat fact: " + error.message);
    });
});