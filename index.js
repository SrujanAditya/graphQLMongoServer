import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (res, req) => {
    res.send("GraphQl server");
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(8080, () => console.log("Server listening on 8080 port: http://localhost:8080/graphql"));