import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
