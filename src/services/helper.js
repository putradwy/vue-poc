import instance from "./instance";

export const queryPageEndpoint =
  (endpoint, defaultOptions) =>
  async (value = {}) => {
    const { page = 1, options, ...args } = value;
    const finalEndpoint =
      typeof endpoint === "function"
        ? endpoint({ options, ...args })
        : endpoint;

    const { data } = await instance.get(finalEndpoint, {
      params: { page },
      ...defaultOptions,
      ...options,
    });
    return data;
};