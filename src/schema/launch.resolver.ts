export const launchResolvers = {
  Query: {
    upcoming: async () => {
      const response = await fetch('https://lldev.thespacedevs.com/2.1.0/launch/upcoming');
      const data = await response.json();
      return data.results;
    },
  },
};
