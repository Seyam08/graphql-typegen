import express from 'express';
import { createYoga } from 'graphql-yoga';
import { schema } from './schema.js';

const app = express();

const PORT = 3000;

// Create and use the GraphQL handler.
const yoga = createYoga({
  schema,

  graphqlEndpoint: '/api',
  fetchAPI: { Response },
  graphiql: true,
});

app.use(yoga.graphqlEndpoint, yoga);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
