export const getAssetPath = (path: string) => {
  // import.meta.env.BASE_URL is automatically set by Vite based on the base config
  // It usually ends with a slash (e.g., "/~avni/")
  const baseUrl = import.meta.env.BASE_URL;
  
  // Remove leading slash from path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${baseUrl}${cleanPath}`;
};
