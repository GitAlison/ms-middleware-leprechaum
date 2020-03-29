import { IsString, IsObject } from 'class-validator';

export class CreateTorrentDto {
  @IsString()
  readonly user: string;

  @IsString()
  readonly name?: string;

  @IsString()
  readonly type?: string;

  @IsObject()
  readonly links?: Object[];
}
