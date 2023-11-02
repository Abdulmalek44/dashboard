import { Header } from "../../Components"
import { BarChart } from "../../Components/Charts"

const Bar = () => {
    return (
        <div className="m-4 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Bar" title="Olympic Medal Counts - RIO" />
            <div className="w-full">
                <BarChart />
            </div>
        </div>
    )
}

export default Bar