import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

// const config = {
//   name: 'Notes',
//   connector: 'mongodb',
//   url: 'mongodb+srv://rewatiramansahu:test1234@cluster0.ybz51jq.mongodb.net/?retryWrites=true&w=majority',
//   host: 'cluster0.ybz51jq.mongodb.net',
//   port: 27017,
//   user: 'rewatiramansahu',
//   password: 'test1234',
//   database: 'NotesDB',
//   useNewUrlParser: true
// };

const config = {
  name: 'Notes',
  connector: 'mongodb',
  url: 'mongodb+srv://rewatiramansahu:test1234@cluster0.ybz51jq.mongodb.net/NotesDB?retryWrites=true&w=majority',
  useNewUrlParser: true
};


// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class NotesDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Notes';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Notes', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
