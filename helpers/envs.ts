const ENV_DEFAULTS = {
  NEXT_PUBLIC_BACKEND_URL: "http://localhost:3001",
  BACKEND_URL: "http://localhost:3001",
};

export const getEnv = (key: string) => {
  const value = process.env[key];
  console.log(process.env[key]);

  return value || ENV_DEFAULTS[key as keyof typeof ENV_DEFAULTS] || undefined;
};
