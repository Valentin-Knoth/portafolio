const ancla = document.querySelectorAll(".menu li a");

ancla.forEach(item => {
    item.addEventListener('click', evt => {
        evt.preventDefault();
        document.querySelectorAll('.menu li a').forEach(link => link.classList.remove('active'));
        
        item.classList.add('active');
        const targetId = item.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
    
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
    })
})

