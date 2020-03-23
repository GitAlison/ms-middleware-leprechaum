import * as mongoose from 'mongoose';

export const TorrentSchema = new mongoose.Schema({
  user: String,
  name: String,
  type: String,
  link: String
});