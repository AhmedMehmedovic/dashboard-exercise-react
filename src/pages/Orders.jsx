import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";

import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../components";

function Orders() {
  return (
    <div className="m-2  p-2  bg-white rounded-3xl">
      <Header title="Orders" category="Page" />
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
}

export default Orders;
