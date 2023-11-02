
import { useState } from "react";
import { ColorPickerComponent, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';

import { Header } from "../Components";


const ColorPicker = () => {


    const [color, setColor] = useState('#008000');
    const change = (args: ColorPickerEventArgs): void => {
        setColor(args.currentValue.hex);
    }


    return (

        < div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:text-gray-200 dark:bg-secondary-dark-bg" >
            <Header category="App" title="Color Picker" />
            <div className="text-center">
                <div id="preview" style={{ backgroundColor: color }} />
                <div className="flex justify-center items-center gap-20 flex-wrap">
                    <div>
                        <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
                        <ColorPickerComponent id='inline-palette' mode='Palette' modeSwitcher={false} inline={true} showButtons={false} change={change}></ColorPickerComponent>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
                        <ColorPickerComponent id='inline-picker' mode='Picker' modeSwitcher={false} inline={true} showButtons={false} change={change}></ColorPickerComponent>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ColorPicker;