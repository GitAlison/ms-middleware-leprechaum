import { buildSchema, getModelForClass, prop } from '@typegoose/typegoose';

export class User {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public username: string;

  @prop({ required: true })
  public password: string;

}

const UserModel = getModelForClass(User);

const UserSchema = buildSchema(User, { versionKey: false });

export const UserFeatureProvider = {
  name: 'User',
  collection: 'User',
  model: UserModel,
  schema: UserSchema,
};
