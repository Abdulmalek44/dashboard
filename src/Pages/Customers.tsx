import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Inject,
    Toolbar,
    Sort,
    Edit,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from '../Constants';
import { Header } from "../Components";

const Customers = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Page" title="Customers" />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]}
                width={"auto"}
                selectionSettings={{ type: "Multiple", mode: "Row" }}
                editSettings={{
                    allowEditing: true,
                    allowAdding: true,
                    allowDeleting: true,
                    mode: "Dialog",
                }}
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Sort, Edit]} />
            </GridComponent>
        </div>
    );
}

export default Customers