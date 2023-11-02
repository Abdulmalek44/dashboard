import { createContext, useState } from "react";

import {
  Color,
  ContextProviderProps,
  ContextState,
  Mode,
  State,
} from "../Types";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const StateContext = createContext<ContextState | undefined>(undefined);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [screenSize, setScreenSize] = useState<number>(10);
  const [currentColor, setCurrentColor] = useState<Color>('#ff5c8e');
  const [currentMode, setCurrentMode] = useState<Mode>('Dark');
  const [themeSettings, setThemeSettings] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<State>(initialState);

  const handleClick = (clicked: string): void => setIsClicked({ ...initialState, [clicked]: true });
  const handleClosingClick = (clicked: string): void => setIsClicked({ ...initialState, [clicked]: false });

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value
    setCurrentMode(event);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        handleClosingClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

