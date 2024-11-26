// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const newTitleDiv = document.createElement("div");
      newTitleDiv.className = "title";
      const newTitleContent = document.createTextNode(item.title);
      newTitleDiv.appendChild(newTitleContent);
      const newBodyDiv = document.createElement("div");
      newBodyDiv.className = "content";
      const newBodyContent = document.createTextNode(item.body);
      newBodyDiv.appendChild(newBodyContent);
      document.body.append(newTitleDiv);
      document.body.append(newBodyDiv);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
