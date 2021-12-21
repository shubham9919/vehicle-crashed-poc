var mqtt=require('mqtt');
console.log("Connecting..")
var client = mqtt.connect("mqtt://<ec2-public-ip>:<port>", {
    username:"<broker user_name>",
    password:"<broker password>"
  });

  console.log("Connection successful")

client.on("connect", () => {
    setInterval(() => {
        let a = `{
            userName : "random123",
            lat :"12.22",
            long: "22.34"
        }`        
        client.publish("vehicle_crashed", a)
        console.log("Message published on mqtt topic")
    },5000);
})