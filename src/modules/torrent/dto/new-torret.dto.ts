import { IsString } from 'class-validator';

export class NewTorrentDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;

  @IsString()
  readonly url: string;
}