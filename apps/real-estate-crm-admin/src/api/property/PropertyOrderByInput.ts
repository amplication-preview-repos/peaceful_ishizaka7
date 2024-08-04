import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  bathrooms?: SortOrder;
  bedrooms?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  propertyAddress?: SortOrder;
  squareFootage?: SortOrder;
  updatedAt?: SortOrder;
};
