if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", addDiv);
}

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    data.data.forEach((item) => {
      const { paragraph, imageUrl, githublink } = item;
      addDiv(imageUrl, paragraph, githublink);
    });
  })
  .catch((error) => console.error("Error loading JSON: ", error));

var i = 1;
function addDiv(imageUrl, contentcard, githublink) {
  var template = document.getElementById("template");
  var clone = template.cloneNode(true);
  clone.setAttribute("class", "content-container p" + i);
  clone.querySelector(".grid-header").textContent = "Project " + i;

  if (imageUrl == null) {
    clone.querySelector(".content-image").remove();
  } else {
    cloneImage = clone.querySelector(".content-image").src = imageUrl;
  }

  if (githublink == null) {
    clone.querySelector(".gitlink").remove();
  } else {
    cloneGitLink = clone.querySelector(".gitlink").href = githublink;
  }

  clone.querySelector(".content-card").textContent = contentcard;
  document.getElementsByClassName("main-container")[0].appendChild(clone);
  clone.style.display = "block";
  i++;
}
