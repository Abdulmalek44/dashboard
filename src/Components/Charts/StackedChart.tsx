import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip
} from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../Constants';
import useStateContext from '../../Context/useStateContext';
import { StackedProps } from '../../Types';


const StackedChart = ({ width, height }: StackedProps) => {
  const { currentMode, currentColor } = useStateContext();


  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{
        textStyle: { color: currentMode === "Dark" ? "#fff" : "black" },
      }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective
          key={index}
          {...item}
          fill={
            index === 0
              ? currentColor
              : currentMode === "Dark"
                ? "#9ca3af"
                : "#404041"
          }
        />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}


export default StackedChart