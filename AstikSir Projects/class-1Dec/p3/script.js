const addHandler = () => {
  const itemName = document.getElementById("itemName");
  const list = document.getElementById("itemList");
  if (itemName.value === "") {
      return
  }
    const liEl = document.createElement("li");
    
  liEl.innerText = itemName.value;
  liEl.addEventListener("click", () => {
    liEl.style.textDecoration = "line-through";
    liEl.style.color = "grey";
  });
  list.appendChild(liEl);
  itemName.value = "";
};
