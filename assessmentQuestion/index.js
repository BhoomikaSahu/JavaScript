const grid = document.getElementById("grid");
const rgb = document.getElementsByName("rgb");
const errorSpan = document.getElementById("errorSpan");
let selectedColor = null;

rgb.forEach(input => {
  input.addEventListener('change', () => {
    selectedColor = input.value;
    console.log(selectedColor);
  });
});

for(let i=1; i<10; i++){
  let box = document.createElement("div");
  box.className = "box";
  grid.append(box);
  box.innerText = i;
}

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("mouseover", () => {
    boxes.forEach(b => b.classList.remove("dots"));
    box.classList.add("dots");
  });
  box.addEventListener("mouseout", () => {
    box.classList.remove("dots");
  });
  box.addEventListener('click', () => {
    box.classList.remove('red', 'green', 'blue');
    box.classList
    if(selectedColor){
      box.classList.add(selectedColor)
    }
  let test = box.classList.contains(['red', 'green', 'bule'])
  console.log('test', test);
    console.log((box.classList), 'bhoomi');
    // console.log(box.classList.includes('red'), '--');
  })
});

// const boxes = document.querySelectorAll('.box');
// const radios = document.getElementsByName('RGB');
// const resetButton = document.getElementById('reset');
// const randomizeButton = document.getElementById('randomize');
// const errorSpan = document.getElementById('errorSpan');

// let selectedColor = null;

// // Function to apply color class to box
// function applyColorClass(box) {
//   box.classList.remove('red', 'blue', 'green');
//   if (selectedColor) {
//     box.classList.add(selectedColor);
//   }
// }

// // Add event listeners
// boxes.forEach(box => {
//   box.addEventListener('click', () => {
//     if (!selectedColor) {
//       errorSpan.textContent = 'Please select a color before clicking on the boxes.';
//       return;
//     }
    
//     if (box.classList.contains(selectedColor)) {
//       errorSpan.textContent = `Already applied ${selectedColor} color.`;
//       return;
//     }
    
//     errorSpan.textContent = '';
//     applyColorClass(box);
//   });
  
//   box.addEventListener('mouseover', () => {
//     box.classList.add('dot');
//   });
  
//   box.addEventListener('mouseout', () => {
//     box.classList.remove('dot');
//   });
// });

// radios.forEach(radio => {
//   radio.addEventListener('change', () => {
//     selectedColor = radio.value;
//     errorSpan.textContent = '';
//     boxes.forEach(box => applyColorClass(box));
//   });
// });

// resetButton.addEventListener('click', () => {
//   selectedColor = null;
//   errorSpan.textContent = '';
//   boxes.forEach(box => {
//     box.classList.remove('red', 'blue', 'green');
//     box.style.backgroundColor = '#ccc';
//   });
// });

// randomizeButton.addEventListener('click', () => {
//   const numbers = Array.from({ length: 9 }, (_, index) => index + 1);
//   numbers.sort(() => Math.random() - 0.5);

//   boxes.forEach((box, index) => {
//     box.textContent = numbers[index];
//     applyColorClass(box);
//   });
// });