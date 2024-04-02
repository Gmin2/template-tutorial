import paho.mqtt.client as mqtt

from utils import on_message

mqttBroker = "test.mosquitto.org"

class TemperatureServiceClient:

  def __init__(self):
              self.client = mqtt.Client()
              self.client.connect(mqttBroker)
              self.client.on_message = on_message
              if will_topic and will_payload:
                  self.client.will_set(will_topic, will_payload, qos=will_qos, retain=will_retain)

  def sendTemperatureDrop(self, id, qos=0, retain=False):
          topic = "temperature/dropped"
          self.client.publish(topic, id, qos=qos, retain=retain)
  def sendTemperatureRise(self, id, qos=0, retain=False):
          topic = "temperature/risen"
          self.client.publish(topic, id, qos=qos, retain=retain)

