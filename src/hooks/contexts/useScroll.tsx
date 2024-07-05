import { createContext, useEffect, useState, useMemo } from 'react';

export const ScrollContext = createContext(
  {
    scrollPosition: 0,
    scrollPercentage: 0,
  }
);

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ScrollContextProvider = ({ children }: Props) => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollPosition = () => { setScrollPosition(window.scrollY) };
    window.addEventListener('scroll', scrollPosition);

    // remove event listener
    return () => {
      window.removeEventListener('scroll', scrollPosition);
    }
  }, [])

  const scrollPercentage = useMemo(() => {

    const documentHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const scroll = (scrollPosition / (documentHeight - windowHeight)) * 100

    return scroll
  }, [scrollPosition])

  return (
    <ScrollContext.Provider
      value={{
        scrollPosition,
        scrollPercentage
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}