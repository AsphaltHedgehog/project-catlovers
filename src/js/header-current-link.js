function addCurentLinkNewClass() {
    
    const linkEl = document.querySelectorAll('.link-nav');
    let path = window.location.pathname; 
    console.log(path);
    
    linkEl.forEach(function (link) {
        let linkPath = link.getAttribute('href');
        if (path === linkPath) {
            link.classList.add('current');
        }
    })
}

addCurentLinkNewClass();