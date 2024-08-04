import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bathrooms" source="bathrooms" />
        <TextField label="Bedrooms" source="bedrooms" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="PropertyAddress" source="propertyAddress" />
        <TextField label="SquareFootage" source="squareFootage" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
