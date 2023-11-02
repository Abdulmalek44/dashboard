import { Header } from "../Components"
import { scheduleData } from "../Constants"
import {
    ScheduleComponent,
    Day,
    Week,
    WorkWeek,
    Month,
    Agenda,
    Inject,
    Resize,
    DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

const Calendar = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="App" title="Calendar" />
            <ScheduleComponent
                height={"650px"}
                eventSettings={{
                    dataSource: scheduleData,
                }}
            >
                <Inject
                    services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
                />
            </ScheduleComponent>
        </div>
    )
}

export default Calendar