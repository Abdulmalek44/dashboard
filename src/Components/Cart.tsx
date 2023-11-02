import { MdOutlineCancel } from 'react-icons/md';
import useStateContext from '../Context/useStateContext';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { cartData } from '../Constants';
import { Button } from '.';

const Cart = () => {
    const { currentColor, handleClosingClick } = useStateContext();

    return (
        <div className="w-screen bg-half-transparent h-screen fixed top-0 right-0 nav-item">
            <div className="h-screen float-right text-black dark:text-gray-200 bg-white dark: dark:bg-[#484B52] w-screen md:w-400 px-5 md:px-2 ">
                <div className="flex items-center justify-between ml-3 p-2 mt-4 ">
                    <p className="text-xl font-semibold">Shopping Cart</p>
                    <button
                        type="button"
                        style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                        className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        onClick={() => handleClosingClick('cart')}
                    >
                        <MdOutlineCancel />
                    </button>
                </div>
                {cartData?.map((item, index) => (
                    <div key={index} className='flex gap-3 items-center  m-3 border-b-1 border-color dark:border-gray-600'>
                        <div className="flex items-center  leading-8 gap-5 pb-6 p-4">
                            <img src={item.image} alt={item.name} className="rounded-xl h-24 w-24" />
                        </div>
                        <div className='flex flex-col items-start'>
                            <p className="font-semibold ">{item.name}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                            <div className="flex mt-2 gap-4">
                                <p>{item.price}</p>
                                <div className="flex gap-2 justify-center items-center">
                                    <AiOutlineMinusSquare className=" text-red-600 text-2xl cursor-pointer" />
                                    <span>0</span>
                                    <AiOutlinePlusSquare className=" text-green-600 text-2xl cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='ml-3 px-4 '>
                    <div className="my-3 mb-5 ">
                        <div className="flex gap-4 mt-4 justify-between mb-3">
                            <span className="text-gray-500 dark:text-gray-200">Sub Total</span>
                            <span className="font-semibold">$890</span>
                        </div>
                        <div className="flex gap-4 mt-4 justify-between">
                            <span className="text-gray-500 dark:text-gray-200">Total</span>
                            <span className="font-semibold">$890</span>
                        </div>
                    </div>

                    <Button
                        color={"white"}
                        text={"Place Order"}
                        borderRadius={"10px"}
                        size={"md"}
                        bgColor={currentColor}
                        func={() => handleClosingClick("cart")}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cart