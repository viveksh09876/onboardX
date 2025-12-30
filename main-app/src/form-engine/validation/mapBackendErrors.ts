export const mapBackendErrors = (errors: Record<string, string>) => {
  const domainErrors: Record<string, any> = {};

  Object.entries(errors).forEach(([key, msg]) => {
    const [domain, field] = key.split(".");
    if (!domainErrors[domain]) {
      domainErrors[domain] = {};
    }
    domainErrors[domain][field] = msg;
  });

  return domainErrors;
};
