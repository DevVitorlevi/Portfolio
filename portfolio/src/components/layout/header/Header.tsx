import { useState, useEffect } from 'react';
import {
  HeaderWrapper,
  HeaderContent,
  HamburgerButton,
  NavList,
  NavItem,
  NavLink,
  Overlay,
} from './HeaderStyle';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 120;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderWrapper id="header">
        <HeaderContent>
          <HamburgerButton id="hamburger" aria-label="Menu" onClick={toggleMenu}>
            {menuOpen ? <X size={34} /> : <Menu size={34} />}
          </HamburgerButton>

          <nav id="nav">
            <NavList $open={menuOpen}>
              {[
                { id: 'hero', label: 'Início' },
                { id: 'about', label: 'Sobre Mim' },
                { id: 'techs', label: 'Tecnologias' },
                { id: 'timeline', label: 'Experiências' },
                { id: 'projetos', label: 'Projetos' },
              ].map(link => (
                <NavItem key={link.id}>
                  <NavLink
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    $active={activeSection === link.id}
                  >
                    {link.label}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </nav>
        </HeaderContent>
      </HeaderWrapper>

      <Overlay $active={menuOpen} onClick={closeMenu} id="overlay" />
    </>
  );
};
