import ApplicationVersion, { IApplicationVersion } from "../models/ApplicationVersion";

/**
 * Fetch a specific version by applicationId + version
 */
export async function getApplicationVersion(applicationId: string, version: number): Promise<IApplicationVersion | null> {
  return ApplicationVersion.findOne({ applicationId, version }).lean();
}

/**
 * Create a new application version (bumping version must be handled by caller)
 */
export async function createApplicationVersion(payload: {
  applicationId: string;
  version: number;
  formData: any;
  createdBy?: string;
  status?: string;
  metadata?: any;
}) {
  return ApplicationVersion.create(payload);
}
