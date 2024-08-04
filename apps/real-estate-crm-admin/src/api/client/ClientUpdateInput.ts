import { AgentAssignmentUpdateManyWithoutClientsInput } from "./AgentAssignmentUpdateManyWithoutClientsInput";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  agentAssignments?: AgentAssignmentUpdateManyWithoutClientsInput;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  fullName?: string | null;
  phoneNumber?: string | null;
  preferredContactMethod?: "Option1" | null;
};
