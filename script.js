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
console.log()
document.addEventListener('wheel', (event) => {console.log('i scrolled')});


