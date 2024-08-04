import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AgentAssignmentTitle } from "../agentAssignment/AgentAssignmentTitle";
import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="agentAssignments"
          reference="AgentAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AgentAssignmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Bathrooms" source="bathrooms" />
        <NumberInput step={1} label="Bedrooms" source="bedrooms" />
        <NumberInput label="Price" source="price" />
        <TextInput label="PropertyAddress" source="propertyAddress" />
        <NumberInput step={1} label="SquareFootage" source="squareFootage" />
      </SimpleForm>
    </Edit>
  );
};
