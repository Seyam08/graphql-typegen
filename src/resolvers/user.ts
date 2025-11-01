import {
  Greetings,
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  Resolvers,
  Test,
  User,
} from '../graphQL/graphQL-Types.js';

export const userResolvers: Resolvers = {
  Query: {
    greetings: (): Greetings => ({ first: 'Hello', last: true }),
    hello: (): Test => ({ text: 'he is a liar!', state: true }),
  },
  Mutation: {
    createUser: (_: unknown, args: MutationCreateUserArgs) => ({
      id: 'dsg',
      name: args.name,
    }),
    updateUser: (_: unknown, args: MutationUpdateUserArgs): User => ({
      id: '124124',
      name: args?.name ?? '',
    }),
  },
};
