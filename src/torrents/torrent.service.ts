import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from '../users/users.service';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import mqtt = require('mqtt')
import { TorrentFeatureProvider, Torrent } from './schemas/torrent.schema';
import { ReturnModelType } from '@typegoose/typegoose';
@Injectable()
export class TorrentsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    @InjectModel(TorrentFeatureProvider.name) private readonly TorrentModel: ReturnModelType<typeof Torrent>,
  ) {}

  async create(createTorrentDto: CreateTorrentDto) {
    const MQTT_USER = this.configService.get<string>('MQTT_USER');
    const MQTT_PASSWORD = this.configService.get<string>('MQTT_PASSWORD');
    const MQTT_URL = this.configService.get<string>('MQTT_URL'); 
    const MQTT_PORT = this.configService.get<string>('MQTT_PORT');
    const MQTT_LINK = this.configService.get<string>('mqtt.url');
    
    const MQTT_OPTIONS = {username: MQTT_USER, password: MQTT_PASSWORD}
    const client  = mqtt.connect(MQTT_LINK, MQTT_OPTIONS);
    const user = createTorrentDto.user;
    const system = "TorrentSystem";
    const message = createTorrentDto.link;
    const id = "in";

    const myUser = await this.usersService.findOne(user)
    if (!myUser) {
      throw new HttpException(`User: ${user} don't exist`, HttpStatus.FORBIDDEN);
    }

    client.on('connect', function () {
      const topic = `${user}/${system}/${id}`
      console.log("Teste")
      client.subscribe(topic);
      client.publish(topic, message);
    });
    
    client.on('message', function (topic, message) {
      client.end();
    });

    const name = await this.findTorrentByName(createTorrentDto.name)
    if (name) {
      throw new HttpException('Media already exists in Database. Starting download', HttpStatus.ACCEPTED);
    }


    const created = new this.TorrentModel(createTorrentDto);
    created.save();
    return createTorrentDto;
  }

  async findAll() {
    return this.TorrentModel.find().exec();
  }

  async findTorrentByName(name) {
    return this.TorrentModel.findOne({ name: name }).exec();
  }

  async findAllUsername(username) {
    return this.TorrentModel.find({ user: username }).exec();
  }

  async findName(name, username) {
    return this.TorrentModel.find({ name: name, user: username }).exec();
  }
  // Update
  public async update(username: string, dto: CreateTorrentDto) {
    const doc = await this.TorrentModel.update(username);
    if (!doc) {
      return `Not Updated`
    }
    doc.set(dto);
    return doc.save();
  }

  // Delete
  public async delete(id: string) {
    await this.TorrentModel.findByIdAndDelete(id);
  }
}

