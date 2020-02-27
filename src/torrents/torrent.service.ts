import { Injectable } from '@nestjs/common';
import { Torrent } from './interfaces/torrent.interface';
import mqtt = require('mqtt')
@Injectable()
export class TorrentsService {
  private readonly torrents: Torrent[] = [];

  create(torrent: Torrent) {
    // TODO: Tirar username password daqui :) isso tem q vir do .ENV
    const options = {username: "thapfjdc", password:"zrck8U2c81Rg"}
    const client  = mqtt.connect('mqtt://hairdresser.cloudmqtt.com:18370', options)
    const user = torrent.user;
    const system = "TorrentSystem";
    const message = torrent.link;
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
    // TODO: No futuro trocar por chamada .save no mongo
    this.torrents.push(torrent);
  }

  findAll(): Torrent[] {
    return this.torrents;
  }
}
