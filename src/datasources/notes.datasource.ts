import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Notes',
  connector: 'mongodb',
  url: "mongodb+srv://rewatiramansahu:test1234@cluster0.ybz51jq.mongodb.net/NotesDB?retryWrites=true&w=majority",
  useNewUrlParser: true,
  useUnifiedTopology: true // Adding this option for better compatibility
};


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
