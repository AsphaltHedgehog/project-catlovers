function addCurentLinkNewClass() {
    
    const linkEl = document.querySelectorAll('.link-nav');
    const svgEl = document.querySelector('.icon-nav')
    let path = window.location.pathname; 
    console.log(svgEl);
    
    linkEl.forEach(function (link) {
        let linkPath = link.getAttribute('href');
        if (path === linkPath) {
            link.classList.add('current');
            svgEl.classList.add('svg-current')
        }
    })
}

addCurentLinkNewClass();