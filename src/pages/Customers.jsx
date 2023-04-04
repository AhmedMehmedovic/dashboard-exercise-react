import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Page, Sort, Toolbar, Selection, Inject } from "@syncfusion/ej2-react-grids";
import React, { useEffect } from "react";
import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";
import { useTitle } from "react-use";

function Customers() {
  useTitle("Customers");
  return (
    <div className="m-2  p-2  bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        width="auto"
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
}

export default Customers;
