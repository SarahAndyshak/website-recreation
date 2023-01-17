  //const firstHeading = document.createElement ("h1");
  // firstHeading.append("Webpage Recreation Practice");
  // firstHeading; 
  // console.log("1st h1: ", firstHeading);
  // firstHeading.innerText;
  // console.log("1st h1.innerText: ", firstHeading.innerText);

window.addEventListener("load", function(){
  const firstH1 = document.querySelector("h1");
  firstH1.remove();
  console.log("This is definitely running.");
  const firstHeading = document.createElement ("h1");
  const secondHeading = document.createElement ("h1");
  firstHeading.append("Webpage Recreation Practice");
  secondHeading.append("Facts about the Multicolored Tanager");

  const body = document.querySelector("body");
  document.querySelector("body").append(firstHeading, secondHeading);
  const p1 = document.createElement("p");
  
  p1.append("The HTML of this webpage was created with JavaScript.");
  document.querySelector("h1").after(p1);

  const image = document.createElement ("img");
  //document.querySelector("img").setAttribute("src"); NOT NEEDED
  image.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  image.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
  image.style.width = "50%";
  p1.append(image);

  // ul
  const ulList = document.createElement("ul");
  // ul.after(secondHeading); secondHeading = element referenced, .after places object in ()
  secondHeading.after(ulList);

  // console.log("ul: ", ulList);
  // li's
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");

  liOne.append("It is endemic to the mountains of Colombia.");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  
  // document.querySelector("ul"); 
  ulList.append(liOne);
  ulList.append(liTwo);

  // console.log("doc ul>li: ", ulList, liOne, liTwo);

  const h2Header = document.createElement("h2");
  h2Header.append("Source");
  ulList.after(h2Header);

  const anchor = document.createElement("a");
  anchor.append("Wikipedia");
  // anchor.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  anchor.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  //both methods above work!
  h2Header.after(anchor);

})