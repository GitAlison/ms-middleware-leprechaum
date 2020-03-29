import { buildSchema, getModelForClass, prop } from '@typegoose/typegoose';

export class Torrent {
  @prop({ required: true })
  public user: string;

  @prop({ required: true })
  public name: string;

  @prop({ required: false })
  public type: string;

  @prop({ required: true })
  public link: string;
}

const TorrentModel = getModelForClass(Torrent);

const TorrentSchema = buildSchema(Torrent, { versionKey: false });

export const TorrentFeatureProvider = {
  name: 'Torrent',
  collection: 'Torrent',
  model: TorrentModel,
  schema: TorrentSchema,
};
