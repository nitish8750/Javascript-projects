const container = document.querySelector(".container");
let br = document.createElement("br");

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollHeight - 5 < clientHeight + scrollTop) {
    setTimeout(createPost, 500);
  }
});

function createPost() {
  let divElem = document.createElement("div");
  let h1Elem = document.createElement("h1");
  let pElem = document.createElement("p");
  let h1TextNode = document.createTextNode("Lorem ipsum dolor sit amet");
  let pTextNode =
    document.createTextNode(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eos, atque sed saepe
          tempore, sequi qui excepturi voluptate ut perspiciatis culpa sit harum, corrupti ullam
          voluptatibus obcaecati sint dignissimos quas.`);
  h1Elem.appendChild(h1TextNode);
  pElem.appendChild(pTextNode);
  divElem.className = "text";
  divElem.appendChild(h1Elem);
  divElem.appendChild(pElem);
  container.appendChild(divElem);
}
