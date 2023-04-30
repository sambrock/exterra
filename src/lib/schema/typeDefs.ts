import gql from 'graphql-tag';

export const typeDefs = gql`
  type Location {
    id: Int
    url: String
    name: String
    country_code: String
    map_image: String
    total_launch_count: Int
    total_landing_count: Int
  }

  type Pad {
    id: Int
    url: String
    agency_id: String
    name: String
    info_url: String
    wiki_url: String
    map_url: String
    latitude: String
    longitude: String
    map_image: String
    total_launch_count: Int
    location: Location
  }

  type Configuration {
    id: Int
    launch_library_id: Int
    url: String
    name: String
    family: String
    full_name: String
    variant: String
  }

  type Rocket {
    id: Int
    configuration: Configuration
  }

  type LaunchServiceProvider {
    id: Int
    url: String
    name: String
    type: String
  }

  type Status {
    id: Int
    name: String
    abbrev: String
    description: String
  }

  type Results {
    id: String
    url: String
    launch_library_id: String
    slug: String
    name: String
    net: String
    window_end: String
    window_start: String
    inhold: Boolean
    tbdtime: Boolean
    tbddate: Boolean
    probability: String
    holdreason: String
    failreason: String
    hashtag: String
    mission: String
    webcast_live: Boolean
    image: String
    infographic: String
    program: [String]
    pad: Pad
    rocket: Rocket
    launch_service_provider: LaunchServiceProvider
    status: Status
  }

  type Query {
    upcoming: [Results]
  }
`;
