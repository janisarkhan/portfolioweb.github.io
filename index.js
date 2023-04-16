//header toggle

let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('Mobile-nav-active');
    this.classList.toggle('fa-times')
})

// typing effect

let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!', 'Back-End Learning!', 'UI Designer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

// Active link state on scroll
// get all links
let navlinks = document.querySelector('nav ul li a')
// console.log(navlinks);
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollpos = window.scrollY + 20
    sections.forEach(section=>{
       if(scrollpos > section.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)){
        navlinks.forEach(link => {
            link.classList.remove('active');
             if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                link.classList.add('active')
             }
        });
       } 
    });
});