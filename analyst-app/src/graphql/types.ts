export interface GetApplicationResponse {
  getApplication: {
    applicationId: string;
    currentVersion: number;
    status: string;
    formData: any;
    metadata: any;
  };
}

export interface GetApplicationVars {
  applicationId: string;
}
