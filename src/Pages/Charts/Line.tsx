import { Header } from "../../Components"
import { LineChart } from "../../Components/Charts"

const Line = () => {
    return (
        <div className="m-4 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Line" title="Inflation Rate" />
            <div className="w-full">
                <LineChart />
            </div>
        </div>
    )
}

export default Line