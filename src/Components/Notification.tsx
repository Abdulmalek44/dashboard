import { Button, SubHeading } from "."
import { chatData } from "../Constants";
import useStateContext from "../Context/useStateContext";

const Notification = () => {
    const { handleClosingClick, currentColor } = useStateContext()

    return (
        <div className=" nav-item bg-white dark:text-white dark:bg-secondary-dark-bg absolute top-16 right-0 md:right-36 w-full md:w-96 rounded-lg p-8" >
            <SubHeading
                title="Notification"
                secText="3 New"
                func={() => handleClosingClick("notification")}
            />
            <div className="flex flex-col  justify-center gap-1">
                {chatData.map((item, index) =>
                    <div key={index}
                        className="flex gap-5 items-center p-3 border-b-1 border-color dark:border-gray-600 cursor-pointer"
                    >
                        <img src={item.image} alt={item.desc} className="rounded-full w-10 h-10" />
                        <div className="flex-1 flex flex-col">
                            <p className="font-semibold dark:text-gray-200">{item.message}</p>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</span>
                        </div>
                    </div>
                )}
                <Button
                    color={"white"}
                    text="See all notification"
                    borderRadius={"10px"}
                    size={"md"}
                    classes="w-full mt-5"
                    bgColor={currentColor}
                    func={() => handleClosingClick("notification")}
                />
            </div>
        </div>
    )
}

export default Notification