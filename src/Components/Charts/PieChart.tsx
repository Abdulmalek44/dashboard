import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import useStateContext from '../../Context/useStateContext';
import { PieChartProps } from '../../Types';

const PieChart = ({ id, data, height, visible }: PieChartProps) => {
    const { currentMode } = useStateContext();

    return (
        <AccumulationChartComponent
            id={id}
            legendSettings={{ visible: visible, background: currentMode === 'Dark' ? '#33373E' : '#fff' }}
            height={height}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            tooltip={{ enable: true }}
        >
            <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                    name="Sale"
                    dataSource={data}
                    xName="x"
                    yName="y"
                    innerRadius="40%"
                    startAngle={0}
                    endAngle={360}
                    radius="70%"
                    explode
                    explodeOffset="10%"
                    explodeIndex={2}
                    dataLabel={{
                        visible: true,
                        name: 'text',
                        position: 'Inside',
                        font: {
                            fontWeight: '600',
                            color: '#fff',
                        },
                    }}
                />
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    );
}

export default PieChart