import { Header } from "../../Components"
import { PyramidChart } from "../../Components/Charts"



const Pyramid = () => {
    return (
        <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Pyramid" title="Food Comparison Chart" />
            <div className="w-full">
                <PyramidChart />
            </div>
        </div>
    )
}

export default Pyramid