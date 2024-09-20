// src/shared/useScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/' && location.hash) {
            // Se houver hash, role para o elemento específico
            const element = document.querySelector(location.hash);
            if (element) {
                const headerOffset = 170; // Ajuste conforme a altura do cabeçalho
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition + window.pageYOffset,
                    behavior: 'smooth'
                });
            }
        } else {
            // Se não houver hash, role para o topo
            window.scrollTo(0, 0);
        }
    }, [location]);
};

export default useScrollToTop;
