// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => {
    for (i = 0; i < 10; i++) {
      const newImg = document.createElement("img");
      newImg.src = data[i].url;
      newImg.onclick = function () {
        alert(data[i].title);
      };
      document.body.append(newImg);
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
