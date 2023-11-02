import { ButtonProps } from "../Types"

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, classes, func }: ButtonProps) => {
    return (
        <div
            style={{ backgroundColor: bgColor, color, borderRadius }}
            onClick={() => func?.()}
            className={`${classes} text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} text-center cursor-pointer`}
        >
            {icon} {text}
        </div>
    )
}

export default Button