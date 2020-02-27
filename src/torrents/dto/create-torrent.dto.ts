import { IsString } from 'class-validator';

export class CreateTorrentDto {
  @IsString()
  readonly user: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;

  @IsString()
  readonly link: string;
}
