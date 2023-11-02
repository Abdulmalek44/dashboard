import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import useStateContext from '../../Context/useStateContext';
import { ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, colorMappingData, rangeColorMapping } from '../../Constants';


const ColorMappingChart = () => {
    const { currentMode } = useStateContext();

    return (
        <ChartComponent
            id="charts"
            primaryXAxis={ColorMappingPrimaryXAxis}
            primaryYAxis={ColorMappingPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{
                textStyle: { color: currentMode === "Dark" ? "#fff" : "black" },
                mode: 'Range',
            }}
        >
            <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
            <SeriesCollectionDirective>
                <SeriesDirective
                    dataSource={colorMappingData[0]}
                    name="USA"
                    xName="x"
                    yName="y"
                    type="Column"
                    cornerRadius={{
                        topLeft: 10,
                        topRight: 10,
                    }}
                />
            </SeriesCollectionDirective>
            <RangeColorSettingsDirective>
                {rangeColorMapping.map((item, index) => (
                    <RangeColorSettingDirective key={index} {...item} />
                ))}
            </RangeColorSettingsDirective>
        </ChartComponent>
    )
}

export default ColorMappingChart
