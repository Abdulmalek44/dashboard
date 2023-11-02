import { Button, SubHeading } from "."
import { userProfileData } from "../Constants";
import useStateContext from "../Context/useStateContext";
import avatar from '../assets/avatar.jpg'

const UserProfile = () => {
    const { handleClosingClick, currentColor } = useStateContext()

    return (
        <div className=" nav-item bg-white dark:text-white dark:bg-secondary-dark-bg absolute top-16 right-0 md:right-2 w-full md:w-96 rounded-lg p-8" >
            <SubHeading
                title="User Profile"
                func={() => handleClosingClick("notification")}
            />
            <div className="flex gap-5 py-6 border-b-1 border-color dark:border-gray-600">
                <img src={avatar} alt="personal" className="rounded-full w-24 h-24" />
                <div>
                    <h2 className="text-xl font-semibold dark:text-gray-200">
                        Ramy Adham
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Administrator
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                        info@shop.com
                    </p>
                </div>
            </div>
            <div className="flex flex-col  justify-center gap-1">
                {userProfileData.map((item, index) =>
                    <div key={index}
                        className="flex gap-5 items-center p-3 border-b-1 border-color dark:border-gray-600 cursor-pointer"
                    >
                        <div
                            className="rounded-lg w-12 h-12 flex justify-center items-center text-xl"
                            style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                        >
                            {item.icon}
                        </div>
                        <div className="flex-1 flex flex-col">
                            <p className="font-semibold dark:text-gray-200">{item.title}</p>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</span>
                        </div>
                    </div>
                )}
                <Button
                    color={"white"}
                    text="Logout"
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

export default UserProfile