import { Header } from "../../Components"
import { FinancialChart } from "../../Components/Charts"

const Financial = () => {
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Financial" title="AAPLE Historical" />
            <div className="w-full">
                <FinancialChart />
            </div>
        </div>
    )
}

export default Financial