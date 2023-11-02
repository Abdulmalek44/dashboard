import { Header } from "../../Components"
import { ColorMappingChart } from "../../Components/Charts"

const ColorMapping = () => {
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Color Mappping" title="USA CLIMATE - WEATHER BY MONTH" />
            <div className="w-full">
                <ColorMappingChart />
            </div>
        </div>
    )
}

export default ColorMapping