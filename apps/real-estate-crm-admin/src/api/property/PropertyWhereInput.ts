import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PropertyWhereInput = {
  agentAssignments?: AgentAssignmentListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  bathrooms?: IntNullableFilter;
  bedrooms?: IntNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  propertyAddress?: StringNullableFilter;
  squareFootage?: IntNullableFilter;
};
