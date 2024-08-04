import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "propertyAddress";

export const PropertyTitle = (record: TProperty): string => {
  return record.propertyAddress?.toString() || String(record.id);
};
