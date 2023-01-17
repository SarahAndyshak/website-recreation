function makeWebpage(){
  // e.preventDefault(); removed 
  const firstH1 = document.querySelector("h1");
  firstH1.remove();
  console.log("This is definitely running.");

  const firstHeading = document.createElement ("h1");
  firstHeading.append("Webpage Recreation Practice");
  firstHeading; 
  console.log("1st h1: ", firstHeading);
  firstHeading.innerText;
  console.log("1st h1.innerText: ", firstHeading.innerText);

  // add 2nd h1
  //  h1 > ul > li1, li2
  // const secondH1 = document.createElement("h1");
  // secondH1.append("Facts about the Multicolored Tanager");
  // ul
  // const ulList = document.createElement("ul");
  // ulList.append(secondH1);
  // // li's
  // const liOne = document.createElement("li");
  // const liTwo = document.createElement("li");

//   liOne.append("It is endemic to the mountains of Colombia.");
//   liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");

//  document.querySelector(ulList).append(liOne, liTwo);
  
}

window.addEventListener("load", function(){
  makeWebpage();
})
//look up event.preventDefault issue