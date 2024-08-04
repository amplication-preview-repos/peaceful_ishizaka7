import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  dateTime?: Date | null;
  location?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
