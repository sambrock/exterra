export const launchResolver = {
  Query: {
    upcoming: async () => {
      const response = await fetch(process.env.LL2_API_URL + '/launch/upcoming');
      const data = await response.json();

      return data.results;
    },
  },
};
