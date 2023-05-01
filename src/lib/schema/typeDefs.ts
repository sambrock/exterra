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

  type Orbit {
    id: Int
    name: String
    abbrev: String
  }

  type Mission {
    id: Int
    launch_library_id: Int
    name: String
    description: String
    launch_designator: String
    type: String
    orbit: Orbit
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

  type Agencies {
  id: Int
  url: String
  name: String
  type: String
}

type Program {
  id: Int
  url: String
  name: String
  description: String
  image_url: String
  start_date: String
  end_date: String
  info_url: String
  wiki_url: String
  agencies: [Agencies]
}

  type Results {
    id: String
    url: String
    launch_library_id: Int
    slug: String
    name: String
    net: String
    window_end: String
    window_start: String
    inhold: Boolean
    tbdtime: Boolean
    tbddate: Boolean
    probability: Int
    holdreason: String
    failreason: String
    hashtag: String
    webcast_live: Boolean
    image: String
    infographic: String
    program: [Program]
    pad: Pad
    mission: Mission
    rocket: Rocket
    launch_service_provider: LaunchServiceProvider
    status: Status
  }

  type Query {
    upcoming: [Results]
  }
`;
