import { Header } from '../Components';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Inject,
    Search,
    Toolbar,
    Sort,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from '../Constants';

const Employees = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10  mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Page" title="Employees" />
            <GridComponent
                dataSource={employeesData}
                allowPaging
                allowSorting
                toolbar={["Search"]}
                width={"auto"}
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} 
                        />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar, Sort]} />
            </GridComponent>
        </div>
    );
};

export default Employees;
