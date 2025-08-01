const hamburger = document.getElementById('hamburger');
        const navList = document.querySelector('.nav-list');
        const overlay = document.getElementById('overlay');

        function openMenu() {
            navList.classList.add('open');
            overlay.classList.add('active');
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        }

        function closeMenu() {
            navList.classList.remove('open');
            overlay.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }

        hamburger.addEventListener('click', () => {
            if (navList.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        overlay.addEventListener('click', () => {
            closeMenu();
        });

        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });