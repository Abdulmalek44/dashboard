import { Header } from "../../Components"
import { AreaChart } from '../../Components/Charts';

const Area = () => {


    return (
        <div className="m-4 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Area" title="Inflation Rate In Percentage" />
            <div className="w-full">
                <AreaChart />
            </div>
        </div>
    )
}

export default Area