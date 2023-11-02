import { Header } from "../../Components"
import { StackedChart } from "../../Components/Charts"

const Stacked = () => {
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Stacked" title="Revenue Breakdown" />
            <div className="w-full">
                <StackedChart width="full" height="full" />
            </div>
        </div>
    )
}

export default Stacked