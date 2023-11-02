import { Header } from "../../Components"
import { PieChart } from "../../Components/Charts"
import { pieChartData } from "../../Constants"

const Pie = () => {
    return (
        <div className="m-4 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Pie" title="Project Cost Breakdown" />
            <div className="w-full">
                <PieChart id="chart-pie" data={pieChartData} visible height="full" />
            </div>
        </div>
    )
}

export default Pie