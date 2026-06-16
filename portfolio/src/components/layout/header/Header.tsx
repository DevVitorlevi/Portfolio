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
  const [isPastHero, setIsPastHero] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sectionIds = ['hero', 'techs', 'timeline', 'projetos'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setActiveSection(id);
              if (id !== 'hero') {
                setIsPastHero(true);
              } else {
                setIsPastHero(false);
              }
            }
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));

    const handleScrollFallback = () => {
      if (window.scrollY < 50) {
        setActiveSection('hero');
        setIsPastHero(false);
      }
    };
    window.addEventListener('scroll', handleScrollFallback);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      window.removeEventListener('scroll', handleScrollFallback);
    };
  }, []);

  return (
    <>
      <HeaderWrapper id="header" $isBlack={isPastHero} $menuOpen={menuOpen}>
        <HeaderContent>
          <HamburgerButton id="hamburger" aria-label="Menu" onClick={toggleMenu}>
            {menuOpen ? <X size={34} /> : <Menu size={34} />}
          </HamburgerButton>

          <nav id="nav">
            <NavList $open={menuOpen}>
              {[
                { id: 'hero', label: 'Início' },
                { id: 'techs', label: 'Habilidades' },
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
