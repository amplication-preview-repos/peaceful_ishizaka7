import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  agentAssignments?: AgentAssignmentListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  preferredContactMethod?: "Option1";
};
