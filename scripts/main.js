//image change on click
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/album-cover-Lithe-92-Ends-EP.jpg") {
    myImage.setAttribute("src", "images/lithe-profile-picture.jpg");
  } else {
    myImage.setAttribute("src", "images/album-cover-Lithe-92-Ends-EP.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `NEW RELEASE, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `NEW RELEASE, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };