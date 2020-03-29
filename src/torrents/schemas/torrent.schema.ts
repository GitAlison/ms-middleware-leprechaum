import { arrayProp, buildSchema, getModelForClass, prop } from '@typegoose/typegoose';

enum type {
  movie = 'movie',
  serie = 'serie',
}

export class Torrent {
  @prop({ required: true })
  public user: string;

  @prop({ required: true })
  public name: string;

  @prop({ required: false, enum: type })
  public type: string;

  @arrayProp({ items: Object })
  public links?: Object[];
}

class quality {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public url: string;
}

const TorrentModel = getModelForClass(Torrent);

const TorrentSchema = buildSchema(Torrent, { versionKey: false });

export const TorrentFeatureProvider = {
  name: 'Torrent',
  collection: 'Torrent',
  model: TorrentModel,
  schema: TorrentSchema,
};
