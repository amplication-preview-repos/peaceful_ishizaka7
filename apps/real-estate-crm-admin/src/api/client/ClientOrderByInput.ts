import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  preferredContactMethod?: SortOrder;
  updatedAt?: SortOrder;
};
