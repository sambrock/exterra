import { GraphQLResolveInfo } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Configuration = {
  __typename?: 'Configuration';
  family?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  launch_library_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type LaunchServiceProvider = {
  __typename?: 'LaunchServiceProvider';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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

export type Pad = {
  __typename?: 'Pad';
  agency_id?: Maybe<Scalars['String']>;
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

export type Query = {
  __typename?: 'Query';
  upcoming?: Maybe<Array<Maybe<Results>>>;
};

export type Results = {
  __typename?: 'Results';
  failreason?: Maybe<Scalars['String']>;
  hashtag?: Maybe<Scalars['String']>;
  holdreason?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  infographic?: Maybe<Scalars['String']>;
  inhold?: Maybe<Scalars['Boolean']>;
  launch_library_id?: Maybe<Scalars['String']>;
  launch_service_provider?: Maybe<LaunchServiceProvider>;
  mission?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  net?: Maybe<Scalars['String']>;
  pad?: Maybe<Pad>;
  probability?: Maybe<Scalars['String']>;
  program?: Maybe<Array<Maybe<Scalars['String']>>>;
  rocket?: Maybe<Rocket>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  tbddate?: Maybe<Scalars['Boolean']>;
  tbdtime?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  webcast_live?: Maybe<Scalars['Boolean']>;
  window_end?: Maybe<Scalars['String']>;
  window_start?: Maybe<Scalars['String']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  configuration?: Maybe<Configuration>;
  id?: Maybe<Scalars['Int']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Configuration: ResolverTypeWrapper<Configuration>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LaunchServiceProvider: ResolverTypeWrapper<LaunchServiceProvider>;
  Location: ResolverTypeWrapper<Location>;
  Pad: ResolverTypeWrapper<Pad>;
  Query: ResolverTypeWrapper<{}>;
  Results: ResolverTypeWrapper<Results>;
  Rocket: ResolverTypeWrapper<Rocket>;
  Status: ResolverTypeWrapper<Status>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Configuration: Configuration;
  Int: Scalars['Int'];
  LaunchServiceProvider: LaunchServiceProvider;
  Location: Location;
  Pad: Pad;
  Query: {};
  Results: Results;
  Rocket: Rocket;
  Status: Status;
  String: Scalars['String'];
};

export type ConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Configuration'] = ResolversParentTypes['Configuration']> = {
  family?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  launch_library_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LaunchServiceProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaunchServiceProvider'] = ResolversParentTypes['LaunchServiceProvider']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type PadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pad'] = ResolversParentTypes['Pad']> = {
  agency_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  upcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results']>>>, ParentType, ContextType>;
};

export type ResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Results'] = ResolversParentTypes['Results']> = {
  failreason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hashtag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holdreason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  infographic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inhold?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  launch_library_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  launch_service_provider?: Resolver<Maybe<ResolversTypes['LaunchServiceProvider']>, ParentType, ContextType>;
  mission?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  net?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pad?: Resolver<Maybe<ResolversTypes['Pad']>, ParentType, ContextType>;
  probability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  program?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  tbddate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tbdtime?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  webcast_live?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  window_end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  window_start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RocketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rocket'] = ResolversParentTypes['Rocket']> = {
  configuration?: Resolver<Maybe<ResolversTypes['Configuration']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  Configuration?: ConfigurationResolvers<ContextType>;
  LaunchServiceProvider?: LaunchServiceProviderResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Pad?: PadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Results?: ResultsResolvers<ContextType>;
  Rocket?: RocketResolvers<ContextType>;
  Status?: StatusResolvers<ContextType>;
};


export type GetUpcomingLaunchesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUpcomingLaunchesQuery = { __typename?: 'Query', upcoming?: Array<{ __typename?: 'Results', id?: string | null, name?: string | null, pad?: { __typename?: 'Pad', longitude?: string | null, latitude?: string | null } | null } | null> | null };


export const GetUpcomingLaunchesDocument = gql`
    query getUpcomingLaunches {
  upcoming {
    id
    name
    pad {
      longitude
      latitude
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUpcomingLaunches(variables?: GetUpcomingLaunchesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUpcomingLaunchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUpcomingLaunchesQuery>(GetUpcomingLaunchesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUpcomingLaunches', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;