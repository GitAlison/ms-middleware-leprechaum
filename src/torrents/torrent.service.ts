import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './interfaces/torrent.interface';
import mqtt = require('mqtt')
@Injectable()
export class TorrentsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    @InjectModel('Torrent') private readonly torrentModel: Model<Torrent>,
  ) { }

  async create(createTorrentDto: CreateTorrentDto) {
    const MQTT_USER = this.configService.get<string>('MQTT_USER');
    const MQTT_PASSWORD = this.configService.get<string>('MQTT_PASSWORD');
    const MQTT_LINK = this.configService.get<string>('mqtt.url');

    const MQTT_OPTIONS = { username: MQTT_USER, password: MQTT_PASSWORD }
    const client = mqtt.connect(MQTT_LINK, MQTT_OPTIONS);
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
      client.subscribe(topic);
      client.publish(topic, message);
    });

    client.on('message', function (topic, message) {

      client.end();
    })

    const name = await this.findTorrentByName(createTorrentDto.name)
    if (name) {
      throw new HttpException('Media already exists in Database. Starting download', HttpStatus.ACCEPTED);
    }


    const created = new this.torrentModel(createTorrentDto);
    created.save();
    return createTorrentDto;
  }

  async findAll() {
    return this.torrentModel.find().exec();
  }

  async findTorrentByName(name) {
    return this.torrentModel.findOne({name: name}).exec();
  }

  async findAllUsername(username) {
    return this.torrentModel.find({ user: username }).exec();
  }

  async findName(name, username) {
    return this.torrentModel.find({ name: name, user: username }).exec();
  }
  // Update
  public async update(username: string, dto: CreateTorrentDto) {
    const doc = await this.torrentModel.update(username);
    if (!doc) {
      return `Not Updated`
    }
    doc.set(dto);
    return doc.save();
  }

  // Delete
  public async delete(id: string) {
    await this.torrentModel.findByIdAndDelete(id);
  }
}

