//testing whether JavaScript file is linked to HTML
//alert("hello");


const sections = document.querySelectorAll(".fade-on-scroll");
console.log(sections);


//creating an intersection observer//
const observer = new IntersectionObserver(handleIntersect,{
    root:null,
    rootMargin:"0px",
    threshold: 0.2   
})

//handle intersect//
function handleIntersect(entries, observer){
entries.forEach(function(entry) {
//conditional statement (if-else) to see which section is on view.
if (entry.isIntersecting) {
    //SECTION IN VIEW//

//when section is in view,we want it to be visible//
      entry.target.classList.add("fade-in");
      entry.target.classList.remove("fade-out");

   } else {
 entry.target.classList.remove("fade-in");
 entry.target.classList.add("fade-out");
   }
})

}


sections.forEach(function(section){
    //console.log(section)//
observer.observe(section);
})