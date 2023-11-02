import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    DateTime,
    SplineAreaSeries,
    Legend
} from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../Constants"
import useStateContext from '../../Context/useStateContext';

const AreaChart = () => {
    const { currentMode } = useStateContext();

    return (
        <ChartComponent
            id="charts"
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{
                textStyle: { color: currentMode === "Dark" ? "#fff" : "black" },
            }}
        >
            <Inject services={[SplineAreaSeries, DateTime, Legend]} />
            <SeriesCollectionDirective>
                {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent >
    )
}

export default AreaChart