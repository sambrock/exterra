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
    agency_id: Int
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
    launch_library_id: String
    name: String
    description: String
    launch_designator: String
    type: String
    orbit: Orbit
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

  type Manufacturer {
    id: Int
    url: String
    name: String
    featured: Boolean
    type: String
    country_code: String
    abbrev: String
    description: String
    administrator: String
    founding_year: String
    launchers: String
    spacecraft: String
    launch_library_url: String
    total_launch_count: Int
    consecutive_successful_launches: Int
    successful_launches: Int
    failed_launches: Int
    pending_launches: Int
    consecutive_successful_landings: Int
    successful_landings: Int
    failed_landings: Int
    attempted_landings: Int
    info_url: String
    wiki_url: String
    logo_url: String
    image_url: String
    nation_url: String
  }

  type Configuration {
    id: Int
    launch_library_id: Int
    url: String
    name: String
    description: String
    family: String
    full_name: String
    variant: String
    alias: String
    min_stage: Int
    max_stage: Int
    length: Float
    diameter: Float
    maiden_flight: String
    launch_mass: Int
    leo_capacity: Int
    gto_capacity: Int
    to_thrust: Int
    apogee: Int
    vehicle_range: String
    image_url: String
    info_url: String
    wiki_url: String
    total_launch_count: Int
    consecutive_successful_launches: Int
    successful_launches: Int
    failed_launches: Int
    pending_launches: Int
    program: [Program]
    manufacturer: Manufacturer
  }

  type Rocket {
    id: Int
    spacecraft_stage: String
    launcher_stage: [String]
    configuration: Configuration
  }

  type LaunchServiceProvider {
    id: Int
    url: String
    name: String
    featured: Boolean
    type: String
    country_code: String
    abbrev: String
    description: String
    administrator: String
    founding_year: String
    launchers: String
    spacecraft: String
    launch_library_url: String
    total_launch_count: Int
    consecutive_successful_launches: Int
    successful_launches: Int
    failed_launches: Int
    pending_launches: Int
    consecutive_successful_landings: Int
    successful_landings: Int
    failed_landings: Int
    attempted_landings: Int
    info_url: String
    wiki_url: String
    logo_url: String
    image_url: String
    nation_url: String
  }

  type Status {
    id: Int
    name: String
    abbrev: String
    description: String
  }

  type Launch {
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
    webcast_live: Boolean
    image: String
    infographic: String
    orbital_launch_attempt_count: Int
    location_launch_attempt_count: Int
    pad_launch_attempt_count: Int
    agency_launch_attempt_count: Int
    orbital_launch_attempt_count_year: Int
    location_launch_attempt_count_year: Int
    pad_launch_attempt_count_year: Int
    agency_launch_attempt_count_year: Int
    program: Program
    vidURLs: [String]
    infoURLs: [String]
    pad: Pad
    mission: Mission
    rocket: Rocket
    launch_service_provider: LaunchServiceProvider
    status: Status
  }

  type Query {
    upcoming: [Launch]
    launch(id: String!): Launch
  }
`;
