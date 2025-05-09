document.querySelectorAll(".accordion-question").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log("clicked!");

    let accordionCollapse = item.nextElementSibling;


    if(!item.classList.contains('open')){

        accordionCollapse.style.display = 'block';
        let accHeight = accordionCollapse.clientHeight;
        
        setTimeout(() => {
          accordionCollapse.style.height = accHeight + 'px';
          accordionCollapse.style.display = '';
        }, 1);

        accordionCollapse.classList = 'accordion-collapse collapsing';


        setTimeout(() => {
            accordionCollapse.classList = 'accordion-collapse open';
        }, 300);
    }
    //close accordion item
    else{
        accordionCollapse.classList = 'accordion-collapse collapsing';

        setTimeout(() => {
            accordionCollapse.classList = 'accordion-collapse collapse';
        }, 300);
        accordionCollapse.style.height = ''; 
    }

    item.classList.toggle('open');


  });
});
