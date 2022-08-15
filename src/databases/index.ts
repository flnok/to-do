import { DB_HOST, DB_PORT, DB_DATABASE, DB_NAME, DB_PASSWORD, DB_COLLECTION } from '@config';

export const dbConnection = {
  url: `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@portfolio.pmwsmwv.mongodb.net/${DB_COLLECTION}?retryWrites=true&w=majority`,

  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
