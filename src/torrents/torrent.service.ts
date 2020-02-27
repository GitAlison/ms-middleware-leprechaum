import { Injectable } from '@nestjs/common';
import { Torrent } from './interfaces/torrent.interface';
import mqtt = require('mqtt')
@Injectable()
export class TorrentsService {
  private readonly torrents: Torrent[] = [];

  create(torrent: Torrent) {
    // TODO: Incluir aqui chamada ao MQTT, Publish Single
    const options = {
      clientId:"mqttjs01",
      username: "thapfjdc",
      password: "zrck8U2c81Rg"
    }
    const client = mqtt.connect("mqtt://hairdresser.cloudmqtt.com:18370", options)
    client.publish("test", "message")
    client.end();
    // TODO: No futuro trocar por chamada .save no mongo
    this.torrents.push(torrent);
  }

  findAll(): Torrent[] {
    return this.torrents;
  }
}
