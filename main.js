homePage = document.getElementById("homePage");
contactPage = document.getElementById("contactPage");
photographyPage = document.getElementById("photographyPage");
visitorPage = document.getElementById("visitorPage");

homeBtn = document.getElementById("homeBtn");
contactBtn = document.getElementById("contactBtn");
photographyBtn = document.getElementById("photographyBtn");
visitorBtn = document.getElementById("visitorBtn");

homeBtn.style.boxShadow = "3px -3px white";

function contact(){
  homePage.style.display = "none";
  visitorPage.style.display = "none";
  contactPage.style.display = "grid";
  photographyPage.style.display = "none";
  contactBtn.style.boxShadow= "3px -3px white";
  photographyBtn.style.boxShadow = "";
  visitorBtn.style.boxShadow = "";
  homeBtn.style.boxShadow = "";
  homePage.classList.remove("fade-in");
  visitorPage.classList.remove("fade-in");
  photographyPage.classList.remove("fade-in");
  contactPage.classList.add("fade-in");
}

function photography() {
  homePage.style.display = "none";
  visitorPage.style.display = "none";
  contactPage.style.display = "none";
  photographyPage.style.display = "flex";
  photographyBtn.style.boxShadow = "3px -3px white";
  contactBtn.style.boxShadow = "";
  visitorBtn.style.boxShadow = "";
  homeBtn.style.boxShadow = "";
  homePage.classList.remove("fade-in");
  contactPage.classList.remove("fade-in");
  visitorPage.classList.remove("fade-in");
  photographyPage.classList.add("fade-in");
}

function visitor() {
  homePage.style.display = "none";
  contactPage.style.display = "none";
  photographyPage.style.display = "none";
  visitorPage.style.display = "grid";
  visitorBtn.style.boxShadow = "3px -3px white";
  contactBtn.style.boxShadow = "";
  photographyBtn.style.boxShadow = "";
  homeBtn.style.boxShadow = "";
  homePage.classList.remove("fade-in");
  contactPage.classList.remove("fade-in");
  photographyPage.classList.remove("fade-in");
  visitorPage.classList.add("fade-in");
}

function home() {
  homePage.style.display = "grid";
  contactPage.style.display = "none";
  visitorPage.style.display = "none";
  photographyPage.style.display = "none";
  homeBtn.style.boxShadow = "3px -3px white";
  contactBtn.style.boxShadow = "";
  visitorBtn.style.boxShadow = "";
  photographyBtn.style.boxShadow = "";
  contactPage.classList.remove("fade-in");
  visitorPage.classList.remove("fade-in");
  photographyPage.classList.remove("fade-in");
  homePage.classList.add("fade-in");
}