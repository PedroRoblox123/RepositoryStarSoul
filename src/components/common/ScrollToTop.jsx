import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Role para o topo da página quando a rota mudar
    scroll.scrollToTop({ duration: 500, smooth: true });
  }, [location]);

  return null;
};

export default useScrollToTop;
