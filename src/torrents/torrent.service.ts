import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './interfaces/torrent.interface';
import mqtt = require('mqtt')
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TorrentsService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel('Torrent') private readonly torrentModel: Model<Torrent>,
    ) {}

  async create(createTorrentDto: CreateTorrentDto): Promise<Torrent> {
    const options = {username: this.configService.get<string>('MQTT_USER'), password: this.configService.get<string>('MQTT_PASSWORD')}
    const client  = mqtt.connect(this.configService.get<string>('mqtt.url'), options)
    const user = createTorrentDto.user;
    const system = "TorrentSystem";
    const message = createTorrentDto.link;
    const id = "in";
    
    client.on('connect', function () {
        const topic = `${user}/${system}/${id}`
        client.subscribe(topic);
        client.publish(topic,message);
    });
    
    client.on('message', function (topic, message){
      
        client.end();
    })
    
    const created = new this.torrentModel(createTorrentDto);
    return created.save();
    
  }

  async findAll(){
    return this.torrentModel.find().exec();
  }

  async findAllUsername(username){
    return this.torrentModel.find({user: username}).exec();
  }

  async findName(name, username){
    return this.torrentModel.find({name: name, user: username}).exec();
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

