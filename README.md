This is a repository containing the tutorial of [AsyncAPI creating a template tutorial](https://www.asyncapi.com/docs/tools/generator/generator-template).
The template tutorial provides a simple generator template using a Python MQTT client. It allows you to create a template that generates Python code for an MQTT client based on an AsyncAPI document. The generated client can publish messages to MQTT topics specified in the AsyncAPI document.

I have added some new functionallity to that of the tutorial one:

**1. Retained Messages Support**
-  Retained messages are messages that are stored on the MQTT broker and sent to new subscribers when they subscribe to a topic.
- The modifications enable the generated client to publish retained messages by adding a retain parameter to the send{OperationId} functions.
- This allows the client to publish messages that will be retained on the broker and delivered to future subscribers, enabling scenarios like sending the last known state of a device to new subscribers.

**2. Last Will and Testament Support**
- The Last Will and Testament is an MQTT feature that allows a client to set a message that will be published by the broker when the client disconnects unexpectedly.
- The changes introduce a new constructor (__init__) in the generated client.py file that accepts parameters for setting the Last Will and Testament message, topic, QoS level, and retain flag.
- This feature can be useful for applications that need to notify other clients or systems about unexpected disconnections, enabling better error handling and recovery mechanisms.
