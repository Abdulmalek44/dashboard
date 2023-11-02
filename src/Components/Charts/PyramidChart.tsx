import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';
import { PyramidData } from "../../Constants"
import useStateContext from '../../Context/useStateContext';

const PyramidChart = () => {
    const { currentMode } = useStateContext();

    return (
        <AccumulationChartComponent
            id="pyramid-chart"
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{
                textStyle: { color: currentMode === "Dark" ? "#fff" : "black" },
            }}
        >
            <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                    name="Food"
                    dataSource={PyramidData}
                    xName="x"
                    yName="y"
                    type="Pyramid"
                    width="45%"
                    height="80%"
                    neckWidth="15%"
                    gapRatio={0.03}
                    explode
                    emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                    dataLabel={{
                        visible: true,
                        position: 'Inside',
                        name: 'text',
                    }}

                />
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    )
}

export default PyramidChart