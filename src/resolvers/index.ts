import { mergeResolvers } from '@graphql-tools/merge';
import { userResolvers } from './user.js';

export const resolvers = mergeResolvers([userResolvers]);
