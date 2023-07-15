import { useEffect, useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import { scrollToTop } from '../../helper/scrollHelper';
import { ButtonStyles } from './ScrollTopButton.styled';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const scroll = document.documentElement.scrollTop;

      if (scroll > 300) {
        setIsVisible(true);
      }

      if (scroll <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleVisibility);

    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  return (
    <ButtonStyles>
      <BsArrowUpSquareFill
        onClick={scrollToTop}
        style={{ display: isVisible ? 'inline' : 'none' }}
      />
    </ButtonStyles>
  );
};

export default ScrollTopButton;
