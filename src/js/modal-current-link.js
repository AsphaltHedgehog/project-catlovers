function addCurentModalLinkNewClass() {
    
    const linkElModal = document.querySelectorAll('.modal-link-nav');
    let pathModal = window.location.pathname; 
    
    
    linkElModal.forEach(function (link) {
        let linkPathModal = link.getAttribute('href');
        if (pathModal === linkPathModal) {
            link.classList.add('current-modal');
        }
    })
}

addCurentModalLinkNewClass();