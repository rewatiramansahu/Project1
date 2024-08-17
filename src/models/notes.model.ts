import {Entity, model, property} from '@loopback/repository';

@model()
export class Notes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  content?: string;

  @property({
    type: 'date',
  })
  createdAt?: string;


  constructor(data?: Partial<Notes>) {
    super(data);
  }
}

export interface NotesRelations {
  // describe navigational properties here
}

export type NotesWithRelations = Notes & NotesRelations;
