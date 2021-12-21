var mqtt=require('mqtt');
console.log("Connecting..")
var client = mqtt.connect("mqtt://<ec2-public-ip>:<port>", {
    username:"<broker user_name>",
    password:"<broker password>"
  });

client.on("connect", () => {
        client.subscribe("vehicle_crashed")
        console.log("mqtt client is on now")
})
client.on("message", (topic, message)=>{
    console.log(message.toString())
})