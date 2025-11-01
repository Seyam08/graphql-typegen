import express from 'express';
import { createYoga } from 'graphql-yoga';
import { schema } from './schema.js';

const app = express();

const PORT = 3000;

// Create and use the GraphQL handler.
const yoga = createYoga({
  schema,

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: '/api',

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
  graphiql: true,
});

// Bind GraphQL Yoga to the graphql endpoint to avoid rendering the playground on any path
app.use(yoga.graphqlEndpoint, yoga);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
