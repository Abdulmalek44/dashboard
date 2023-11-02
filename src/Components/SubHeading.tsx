import { MdOutlineCancel } from "react-icons/md"
import { SubHeadingProps } from "../Types"

const SubHeading = ({ title, secText, func }: SubHeadingProps) => {

    return (
        <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-4">
                <p className="text-xl font-semibold">{title}</p>
                <span className="text-sm">{secText}</span>
            </div>
            <div>
                <button
                    type="button"
                    style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                    className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    onClick={() => func()}
                >
                    <MdOutlineCancel />
                </button>
            </div>
        </div>
    )
}

export default SubHeading