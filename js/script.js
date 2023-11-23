
    const hamburger = document.querySelector('.hamburger')

    hamburger.addEventListener('click', () => {
        console.log('clicked')
        
        const navLinks = document.querySelector('.nav-links')
        
        if (navLinks) {
            const navLinksStyle = window.getComputedStyle(navLinks)

            if (navLinksStyle.display === 'none' || navLinksStyle.display === '') {
                navLinks.style.display = 'flex'
            } else {
                navLinks.style.display = 'none'
            }
        } else {
            console.error('.nav-links not found')
        }
    })

