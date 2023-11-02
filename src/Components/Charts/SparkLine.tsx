import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { SparkLineProps } from '../../Types';




const SparkLine = ({ id, height, width, color, data, type, currentColor }: SparkLineProps) => {
    return (
        <SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={2}
            valueType="Numeric"
            fill={color}
            border={{ color: currentColor, width: 2 }}
            tooltipSettings={{
                visible: true,
                format: '${x} : data ${yval}',
                trackLineSettings: {
                    visible: true,
                },
            }}
            markerSettings={{ visible: ['All'], size: 6, fill: currentColor }}
            dataSource={data}
            xName="x"
            yName="yval"
            type={type}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    );
}

export default SparkLine