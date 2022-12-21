const port = window.location.port ? `:${window.location.port}` : "";
export const baseUrl = `${window.location.protocol}//${window.location.hostname}${port}`;
