import React from "react";
import { Header } from "../components";
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Search, Toolbar } from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { useTitle } from "react-use";

function Employee() {
  useTitle("Employee");
  return (
    <div className="m-2  p-2  bg-white rounded-3xl">
      <Header title="Employess" category="Page" />
      <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={["Search"]} width="auto">
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default Employee;
