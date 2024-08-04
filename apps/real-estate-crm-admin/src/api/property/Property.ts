import { AgentAssignment } from "../agentAssignment/AgentAssignment";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  agentAssignments?: Array<AgentAssignment>;
  appointments?: Array<Appointment>;
  bathrooms: number | null;
  bedrooms: number | null;
  createdAt: Date;
  id: string;
  price: number | null;
  propertyAddress: string | null;
  squareFootage: number | null;
  updatedAt: Date;
};
