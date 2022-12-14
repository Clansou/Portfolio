const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
    panel .addEventListener("click",()=>{
        removeActiveClasses();
        panel.classList.add("active");
    });
});

const removeActiveClasses = () =>{
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};


let anchorSelector = 'a[href^="#"]';
let anchorList = document.querySelectorAll(anchorSelector);
anchorList.forEach(link => {
    link.onclick = function (scroll) {

        scroll.preventDefault();

        let destination =
            document.querySelector(this.hash);
        
 
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});


