import { AgentAssignmentCreateNestedManyWithoutClientsInput } from "./AgentAssignmentCreateNestedManyWithoutClientsInput";
import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutClientsInput;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  fullName?: string | null;
  phoneNumber?: string | null;
  preferredContactMethod?: "Option1" | null;
};
