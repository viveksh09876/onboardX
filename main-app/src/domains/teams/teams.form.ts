import type { FormConfig } from "../../form-engine/types";

export const teamsFormConfig: FormConfig = {
  fields: [
    {
      id: "teamSize",
      type: "number",
      labelKey: "teams.teamSize",
      required: true,
    },
    {
      id: "hasRemoteMembers",
      type: "select",
      labelKey: "teams.hasRemoteMembers",
      required: true,
      options: [
        { labelKey: "common.yes", value: true },
        { labelKey: "common.no", value: false },
      ],
    },
    {
      id: "remoteCountries",
      type: "text",
      labelKey: "teams.remoteCountries",
      conditions: [
        {
          fieldId: "hasRemoteMembers",
          equals: true,
        },
      ],
    },
  ],
};
