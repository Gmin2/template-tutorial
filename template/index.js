import { File, Text } from "@asyncapi/generator-react-sdk";
import { TopicFunction } from "../components/TopicFunction"

export default function ({ asyncapi, params }) {
  return (
    <File name="client.py">
      <Text newLines={2}>import paho.mqtt.client as mqtt</Text>
      <Text newLines={2}>from utils import on_message</Text>
      <Text newLines={2}>mqttBroker = "{asyncapi.servers().get(params.server).url()}"</Text>
      <Text newLines={2}>class {asyncapi.info().title().replaceAll(' ', '')}Client:</Text>
      <Text indent={2} newLines={2}>
        {`def __init__(self):
            self.client = mqtt.Client()
            self.client.connect(mqttBroker)
            self.client.on_message = on_message
            if will_topic and will_payload:
                self.client.will_set(will_topic, will_payload, qos=will_qos, retain=will_retain)`}
      </Text>
      <Text indent={2}>
        <TopicFunction channels={asyncapi.channels().filterByReceive()} />
      </Text> 
    </File>
  );
}
