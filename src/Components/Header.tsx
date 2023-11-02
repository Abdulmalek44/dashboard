import { HeaderProps } from "../Types"


const Header = ({ title, category }: HeaderProps) => {
    return (
        <div className="mb-10">
            <p className="text-gray-400 " > {category}</p >
            <p className="text-3xl font-extrabold tracking-tighter text-black dark:text-white">{title}</p>
        </div >
    )
}

export default Header