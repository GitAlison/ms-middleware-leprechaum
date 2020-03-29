import { IsString, IsObject } from 'class-validator';

export class UpdateTorrentDto {
  @IsString()
  readonly user?: string;

  @IsString()
  readonly name?: string;
  
  readonly newname?: string;

  @IsString()
  readonly type?: string;

  @IsObject()
  readonly links?: Object[];
}
