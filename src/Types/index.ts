import { ReactElement } from "react";

export interface ContextProviderProps {
    children: React.ReactNode
}

export type Color = string;
export type Mode = string

export interface State {
    chat: boolean,
    cart: boolean,
    userProfile: boolean,
    notification: boolean,
}

export interface ContextState {
    screenSize: number;
    currentColor: Color
    currentMode: Mode
    themeSettings: boolean
    activeMenu: boolean
    initialState: State;
    isClicked: State
    setMode: (arg: React.ChangeEvent<HTMLInputElement>) => void,
    setColor: (arg: string) => void;
    handleClick: (arg: string) => void;
    handleClosingClick: (arg: string) => void;
    setScreenSize: React.Dispatch<React.SetStateAction<number>>
    setIsClicked: React.Dispatch<React.SetStateAction<State>>
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>
    setCurrentMode: React.Dispatch<React.SetStateAction<Mode>>
    setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>

}

export interface NavButtonProps {
    color: string,
    dotColor?: string,
    title: string,
    icon: ReactElement;
    customFunc: (arg?: string) => void;
}


export interface ButtonProps {
    bgColor: string,
    color: string,
    text: string,
    borderRadius: string,
    bgHoverColor?: string,
    size?: string,
    width?: number,
    icon?: ReactElement,
    classes?: string,
    func?: (arg?: string) => void
}

interface SparklineDataPointProps {
    x: number;
    yval: number;
}

type Type = "Line" | "Column" | "WinLoss" | "Pie" | "Area" | undefined

export interface SparkLineProps {
    id: string,
    height: string,
    width: string,
    color: string,
    data: SparklineDataPointProps[],
    type: Type
    currentColor: string,
}
export interface StackedProps {
    height: string,
    width: string,
}

export interface HeaderProps {
    title: string,
    category: string,
}

type Data = {
    x: string;
    y: number;
    text: string;
}[]

export interface PieChartProps {
    id: string,
    data: Data,
    height: string,
    visible: boolean,
}

export interface FilterValueProps {
    x: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}[]

export interface SubHeadingProps {
    title: string,
    secText?: string,
    func: (arg?: string) => void;
}