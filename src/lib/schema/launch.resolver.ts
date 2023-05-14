export const launchResolver = {
  Query: {
    upcoming: async () => {
      const response = await fetch(process.env.LL2_API_URL + '/launch/upcoming');
      const data = await response.json();

      return data.results;
    },

    launch: async (_: unknown, { id }: { id: string }) => {
      const response = await fetch(process.env.LL2_API_URL + '/launch/' + id);
      const data = await response.json();

      return data;
    },
  },
};
