import { GraphQLResolveInfo } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Agencies = {
  __typename?: 'Agencies';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Configuration = {
  __typename?: 'Configuration';
  alias?: Maybe<Scalars['String']>;
  apogee?: Maybe<Scalars['Int']>;
  consecutive_successful_launches?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Scalars['Float']>;
  failed_launches?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  gto_capacity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  info_url?: Maybe<Scalars['String']>;
  launch_library_id?: Maybe<Scalars['Int']>;
  launch_mass?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  leo_capacity?: Maybe<Scalars['Int']>;
  maiden_flight?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Manufacturer>;
  max_stage?: Maybe<Scalars['Int']>;
  min_stage?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pending_launches?: Maybe<Scalars['Int']>;
  program?: Maybe<Array<Maybe<Program>>>;
  successful_launches?: Maybe<Scalars['Int']>;
  to_thrust?: Maybe<Scalars['Int']>;
  total_launch_count?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
  vehicle_range?: Maybe<Scalars['String']>;
  wiki_url?: Maybe<Scalars['String']>;
};

export type Launch = {
  __typename?: 'Launch';
  agency_launch_attempt_count?: Maybe<Scalars['Int']>;
  agency_launch_attempt_count_year?: Maybe<Scalars['Int']>;
  failreason?: Maybe<Scalars['String']>;
  hashtag?: Maybe<Scalars['String']>;
  holdreason?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  infoURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  infographic?: Maybe<Scalars['String']>;
  inhold?: Maybe<Scalars['Boolean']>;
  launch_library_id?: Maybe<Scalars['String']>;
  launch_service_provider?: Maybe<LaunchServiceProvider>;
  location_launch_attempt_count?: Maybe<Scalars['Int']>;
  location_launch_attempt_count_year?: Maybe<Scalars['Int']>;
  mission?: Maybe<Mission>;
  name?: Maybe<Scalars['String']>;
  net?: Maybe<Scalars['String']>;
  orbital_launch_attempt_count?: Maybe<Scalars['Int']>;
  orbital_launch_attempt_count_year?: Maybe<Scalars['Int']>;
  pad?: Maybe<Pad>;
  pad_launch_attempt_count?: Maybe<Scalars['Int']>;
  pad_launch_attempt_count_year?: Maybe<Scalars['Int']>;
  probability?: Maybe<Scalars['String']>;
  program?: Maybe<Program>;
  rocket?: Maybe<Rocket>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  tbddate?: Maybe<Scalars['Boolean']>;
  tbdtime?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  vidURLs?: Maybe<Array<Maybe<Scalars['String']>>>;
  webcast_live?: Maybe<Scalars['Boolean']>;
  window_end?: Maybe<Scalars['String']>;
  window_start?: Maybe<Scalars['String']>;
};

export type LaunchServiceProvider = {
  __typename?: 'LaunchServiceProvider';
  abbrev?: Maybe<Scalars['String']>;
  administrator?: Maybe<Scalars['String']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  consecutive_successful_landings?: Maybe<Scalars['Int']>;
  consecutive_successful_launches?: Maybe<Scalars['Int']>;
  country_code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  failed_landings?: Maybe<Scalars['Int']>;
  failed_launches?: Maybe<Scalars['Int']>;
  featured?: Maybe<Scalars['Boolean']>;
  founding_year?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  info_url?: Maybe<Scalars['String']>;
  launch_library_url?: Maybe<Scalars['String']>;
  launchers?: Maybe<Scalars['String']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nation_url?: Maybe<Scalars['String']>;
  pending_launches?: Maybe<Scalars['Int']>;
  spacecraft?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  successful_launches?: Maybe<Scalars['Int']>;
  total_launch_count?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wiki_url?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  country_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  map_image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  total_landing_count?: Maybe<Scalars['Int']>;
  total_launch_count?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  abbrev?: Maybe<Scalars['String']>;
  administrator?: Maybe<Scalars['String']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  consecutive_successful_landings?: Maybe<Scalars['Int']>;
  consecutive_successful_launches?: Maybe<Scalars['Int']>;
  country_code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  failed_landings?: Maybe<Scalars['Int']>;
  failed_launches?: Maybe<Scalars['Int']>;
  featured?: Maybe<Scalars['Boolean']>;
  founding_year?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  info_url?: Maybe<Scalars['String']>;
  launch_library_url?: Maybe<Scalars['String']>;
  launchers?: Maybe<Scalars['String']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nation_url?: Maybe<Scalars['String']>;
  pending_launches?: Maybe<Scalars['Int']>;
  spacecraft?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  successful_launches?: Maybe<Scalars['Int']>;
  total_launch_count?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wiki_url?: Maybe<Scalars['String']>;
};

export type Mission = {
  __typename?: 'Mission';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  launch_designator?: Maybe<Scalars['String']>;
  launch_library_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orbit?: Maybe<Orbit>;
  type?: Maybe<Scalars['String']>;
};

export type Orbit = {
  __typename?: 'Orbit';
  abbrev?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Pad = {
  __typename?: 'Pad';
  agency_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info_url?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  longitude?: Maybe<Scalars['String']>;
  map_image?: Maybe<Scalars['String']>;
  map_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  total_launch_count?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  wiki_url?: Maybe<Scalars['String']>;
};

export type Program = {
  __typename?: 'Program';
  agencies?: Maybe<Array<Maybe<Agencies>>>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  info_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wiki_url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  launch?: Maybe<Launch>;
  upcoming?: Maybe<Array<Maybe<Launch>>>;
};


export type QueryLaunchArgs = {
  id: Scalars['String'];
};

export type Rocket = {
  __typename?: 'Rocket';
  configuration?: Maybe<Configuration>;
  id?: Maybe<Scalars['Int']>;
  launcher_stage?: Maybe<Array<Maybe<Scalars['String']>>>;
  spacecraft_stage?: Maybe<Scalars['String']>;
};

export type Status = {
  __typename?: 'Status';
  abbrev?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Agencies: ResolverTypeWrapper<Agencies>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Configuration: ResolverTypeWrapper<Configuration>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Launch: ResolverTypeWrapper<Launch>;
  LaunchServiceProvider: ResolverTypeWrapper<LaunchServiceProvider>;
  Location: ResolverTypeWrapper<Location>;
  Manufacturer: ResolverTypeWrapper<Manufacturer>;
  Mission: ResolverTypeWrapper<Mission>;
  Orbit: ResolverTypeWrapper<Orbit>;
  Pad: ResolverTypeWrapper<Pad>;
  Program: ResolverTypeWrapper<Program>;
  Query: ResolverTypeWrapper<{}>;
  Rocket: ResolverTypeWrapper<Rocket>;
  Status: ResolverTypeWrapper<Status>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Agencies: Agencies;
  Boolean: Scalars['Boolean'];
  Configuration: Configuration;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Launch: Launch;
  LaunchServiceProvider: LaunchServiceProvider;
  Location: Location;
  Manufacturer: Manufacturer;
  Mission: Mission;
  Orbit: Orbit;
  Pad: Pad;
  Program: Program;
  Query: {};
  Rocket: Rocket;
  Status: Status;
  String: Scalars['String'];
};

export type AgenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agencies'] = ResolversParentTypes['Agencies']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Configuration'] = ResolversParentTypes['Configuration']> = {
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  apogee?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  consecutive_successful_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  failed_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  family?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gto_capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  info_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  launch_library_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  launch_mass?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  leo_capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maiden_flight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['Manufacturer']>, ParentType, ContextType>;
  max_stage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min_stage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pending_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  program?: Resolver<Maybe<Array<Maybe<ResolversTypes['Program']>>>, ParentType, ContextType>;
  successful_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  to_thrust?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_launch_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vehicle_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wiki_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LaunchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Launch'] = ResolversParentTypes['Launch']> = {
  agency_launch_attempt_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  agency_launch_attempt_count_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failreason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hashtag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holdreason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  infoURLs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  infographic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inhold?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  launch_library_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  launch_service_provider?: Resolver<Maybe<ResolversTypes['LaunchServiceProvider']>, ParentType, ContextType>;
  location_launch_attempt_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  location_launch_attempt_count_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mission?: Resolver<Maybe<ResolversTypes['Mission']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  net?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orbital_launch_attempt_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orbital_launch_attempt_count_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pad?: Resolver<Maybe<ResolversTypes['Pad']>, ParentType, ContextType>;
  pad_launch_attempt_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pad_launch_attempt_count_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  probability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  program?: Resolver<Maybe<ResolversTypes['Program']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  tbddate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tbdtime?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vidURLs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  webcast_live?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  window_end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  window_start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LaunchServiceProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchServiceProvider'] = ResolversParentTypes['LaunchServiceProvider']> = {
  abbrev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  administrator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attempted_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  consecutive_successful_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  consecutive_successful_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  failed_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failed_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  founding_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  info_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  launch_library_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  launchers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nation_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pending_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spacecraft?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  successful_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  successful_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_launch_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wiki_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  map_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total_landing_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_launch_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManufacturerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manufacturer'] = ResolversParentTypes['Manufacturer']> = {
  abbrev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  administrator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attempted_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  consecutive_successful_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  consecutive_successful_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  failed_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failed_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  founding_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  info_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  launch_library_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  launchers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nation_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pending_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spacecraft?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  successful_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  successful_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_launch_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wiki_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mission'] = ResolversParentTypes['Mission']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  launch_designator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  launch_library_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orbit?: Resolver<Maybe<ResolversTypes['Orbit']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrbitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Orbit'] = ResolversParentTypes['Orbit']> = {
  abbrev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pad'] = ResolversParentTypes['Pad']> = {
  agency_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  info_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  map_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  map_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total_launch_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wiki_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgramResolvers<ContextType = any, ParentType extends ResolversParentTypes['Program'] = ResolversParentTypes['Program']> = {
  agencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Agencies']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  info_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wiki_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  launch?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, RequireFields<QueryLaunchArgs, 'id'>>;
  upcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType>;
};

export type RocketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rocket'] = ResolversParentTypes['Rocket']> = {
  configuration?: Resolver<Maybe<ResolversTypes['Configuration']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  launcher_stage?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  spacecraft_stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = {
  abbrev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Agencies?: AgenciesResolvers<ContextType>;
  Configuration?: ConfigurationResolvers<ContextType>;
  Launch?: LaunchResolvers<ContextType>;
  LaunchServiceProvider?: LaunchServiceProviderResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Manufacturer?: ManufacturerResolvers<ContextType>;
  Mission?: MissionResolvers<ContextType>;
  Orbit?: OrbitResolvers<ContextType>;
  Pad?: PadResolvers<ContextType>;
  Program?: ProgramResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rocket?: RocketResolvers<ContextType>;
  Status?: StatusResolvers<ContextType>;
};


export type GetUpcomingLaunchesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUpcomingLaunchesQuery = { __typename?: 'Query', upcoming?: Array<{ __typename?: 'Launch', id?: string | null, name?: string | null, failreason?: string | null, hashtag?: string | null, holdreason?: string | null, image?: string | null, inhold?: boolean | null, tbddate?: boolean | null, tbdtime?: boolean | null, url?: string | null, webcast_live?: boolean | null, window_end?: string | null, window_start?: string | null, probability?: string | null, rocket?: { __typename?: 'Rocket', configuration?: { __typename?: 'Configuration', full_name?: string | null } | null } | null, pad?: { __typename?: 'Pad', name?: string | null, latitude?: string | null, longitude?: string | null, location?: { __typename?: 'Location', name?: string | null } | null } | null, launch_service_provider?: { __typename?: 'LaunchServiceProvider', id?: number | null, name?: string | null } | null, status?: { __typename?: 'Status', id?: number | null, abbrev?: string | null, name?: string | null, description?: string | null } | null, mission?: { __typename?: 'Mission', id?: number | null, name?: string | null, description?: string | null } | null, program?: { __typename?: 'Program', id?: number | null, name?: string | null } | null } | null> | null };

export type GetLaunchQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetLaunchQuery = { __typename?: 'Query', launch?: { __typename?: 'Launch', id?: string | null, name?: string | null, failreason?: string | null, hashtag?: string | null, inhold?: boolean | null, net?: string | null, probability?: string | null, image?: string | null, tbddate?: boolean | null, tbdtime?: boolean | null, url?: string | null, window_end?: string | null, window_start?: string | null, mission?: { __typename?: 'Mission', name?: string | null, description?: string | null, launch_designator?: string | null, type?: string | null, orbit?: { __typename?: 'Orbit', name?: string | null, abbrev?: string | null } | null } | null, launch_service_provider?: { __typename?: 'LaunchServiceProvider', name?: string | null, type?: string | null, description?: string | null, logo_url?: string | null, founding_year?: string | null, attempted_landings?: number | null, consecutive_successful_landings?: number | null, consecutive_successful_launches?: number | null, failed_landings?: number | null, failed_launches?: number | null, launchers?: string | null, url?: string | null, wiki_url?: string | null, successful_landings?: number | null, successful_launches?: number | null, total_launch_count?: number | null, country_code?: string | null } | null, pad?: { __typename?: 'Pad', info_url?: string | null, location?: { __typename?: 'Location', name?: string | null, country_code?: string | null, url?: string | null } | null } | null, rocket?: { __typename?: 'Rocket', configuration?: { __typename?: 'Configuration', full_name?: string | null, name?: string | null, variant?: string | null, family?: string | null, launch_mass?: number | null, length?: number | null, maiden_flight?: string | null, manufacturer?: { __typename?: 'Manufacturer', type?: string | null } | null } | null } | null, status?: { __typename?: 'Status', id?: number | null, name?: string | null, description?: string | null, abbrev?: string | null } | null } | null };


export const GetUpcomingLaunchesDocument = gql`
    query getUpcomingLaunches {
  upcoming {
    id
    name
    failreason
    hashtag
    holdreason
    image
    inhold
    tbddate
    tbdtime
    url
    webcast_live
    window_end
    window_start
    probability
    tbddate
    tbdtime
    rocket {
      configuration {
        full_name
      }
    }
    pad {
      name
      latitude
      longitude
      location {
        name
      }
    }
    launch_service_provider {
      id
      name
    }
    status {
      id
      abbrev
      name
      description
    }
    mission {
      id
      name
      description
    }
    program {
      id
      name
    }
  }
}
    `;
export const GetLaunchDocument = gql`
    query getLaunch($id: String!) {
  launch(id: $id) {
    id
    name
    failreason
    hashtag
    inhold
    net
    probability
    image
    tbddate
    tbdtime
    url
    window_end
    window_start
    mission {
      name
      description
      launch_designator
      type
      orbit {
        name
        abbrev
      }
    }
    launch_service_provider {
      name
      type
      description
      logo_url
      founding_year
      attempted_landings
      consecutive_successful_landings
      consecutive_successful_launches
      failed_landings
      failed_launches
      launchers
      url
      wiki_url
      successful_landings
      successful_launches
      total_launch_count
      country_code
    }
    pad {
      info_url
      location {
        name
        country_code
        url
      }
    }
    rocket {
      configuration {
        full_name
        name
        variant
        family
        launch_mass
        length
        maiden_flight
        manufacturer {
          type
        }
      }
    }
    status {
      id
      name
      description
      abbrev
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUpcomingLaunches(variables?: GetUpcomingLaunchesQueryVariables, requestHeaders?: any): Promise<GetUpcomingLaunchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUpcomingLaunchesQuery>(GetUpcomingLaunchesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUpcomingLaunches', 'query');
    },
    getLaunch(variables: GetLaunchQueryVariables, requestHeaders?: any): Promise<GetLaunchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLaunchQuery>(GetLaunchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLaunch', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;