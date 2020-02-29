import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTorrentDto } from './dto/create-torrent.dto';
import { Torrent } from './interfaces/torrent.interface';
import mqtt = require('mqtt')

@Injectable()
export class TorrentsService {
  constructor(
    @InjectModel('Torrent') private readonly torrentModel: Model<Torrent>,
    ) {}

  async create(createTorrentDto: CreateTorrentDto): Promise<Torrent> {
    // TODO: Tirar username password daqui :) isso tem q vir do .ENV
    const options = {username: "thapfjdc", password:"zrck8U2c81Rg"}
    const client  = mqtt.connect('mqtt://hairdresser.cloudmqtt.com:18370', options)
    const user = createTorrentDto.user;
    const system = "TorrentSystem";
    const message = createTorrentDto.link;
    const id = "in";
    
    // TODO: Transformar isso aqui em metodo. A ideia eh q talvez o mqtt possa ser um bom metodo de comunicacao.
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

