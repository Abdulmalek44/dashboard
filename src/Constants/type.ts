export interface GridOrderImageProps {
    ProductImage: string;
}

export interface GridOrderStatusProps {
    StatusBg: string;
    Status: string;
}
export interface GridEmployeeProfileProps {
    EmployeeImage: string,
    Name: string
}
export interface GridEmployeeCountryProps {
    StatusBg: string;
    Status: string;
}
interface SparklineDataPointProps {
    x: number;
    yval: number;
}

export interface gridOrderImageProps {
    ProductImage: string;
}

export interface gridOrderStatusProps {
    StatusBg: string;
}

export interface gridEmployeeProfileProps {
    EmployeeImage: string;
}
export interface gridEmployeeProfileProps {
    EmployeeImage: string;
}

export interface customerGridImageProps {
    CustomerImage?: string;
}

export interface customerGridStatusProps {
    StatusBg?: string;
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
