import React, { useState } from 'react';
import {
    HeaderWrapper,
    HeaderContent,
    HamburgerButton,
    NavList,
    NavItem,
    NavLink,
    Overlay,
} from './HeaderStyle';
import { Menu, X } from 'lucide-react'; // Importa os dois ícones

export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <HeaderWrapper id="header">
                <HeaderContent>
                    <HamburgerButton id="hamburger" aria-label="Menu" onClick={toggleMenu}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </HamburgerButton>

                    <nav id="nav">
                        <NavList $open={menuOpen}>
                            <NavItem>
                                <NavLink href="#hero" onClick={closeMenu}>
                                    Início
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#about" onClick={closeMenu}>
                                    Sobre Mim
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#techs" onClick={closeMenu}>
                                    Techs & Tools
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#services" onClick={closeMenu}>
                                    Serviços
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#projetos" onClick={closeMenu}>
                                    Projetos
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contato" onClick={closeMenu}>
                                    Contato
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </nav>
                </HeaderContent>
            </HeaderWrapper>

            <Overlay $active={menuOpen} onClick={closeMenu} id="overlay" />

        </>
    );
};
