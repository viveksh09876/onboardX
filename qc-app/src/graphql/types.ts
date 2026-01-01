export interface ApplicationVersion {
  version: number;
  status: string;
  formData: any;
  metadata: any;
  analystComment?: string;
}

export interface GetApplicationVersionsResponse {
  getApplicationVersions: ApplicationVersion[];
}

export interface GetApplicationVersionsVars {
  applicationId: string;
}
