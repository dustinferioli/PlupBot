require("dotenv").config();
const tmi = require("tmi.js");
const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: "plupyumyumbot",
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: [
    // "plup", 
    "madloverdusty", 
    // "hungrybox"
  ],
});

client.connect();

let lastMessage = []
function lastMessageFunc(message){
  array.push(message)
  if (array.length === 1){
    myLastMsgArray.splice(1, 0, message);
  }
  return array
}


// Write a function that adds an invisible space if lastMessage is the same as the message you're trying to send

client.on("message", async (channel, tags, message, self) => {
  // Ignore echoed messages.

  try {
    if (self) {
      lastMessageFunc(message)
      console.log(lastMessage)
    } 

    switch (message) {
      case "plupYUMYUM":
        client.say(channel, `plupYUMYUM`);
        break;
      case "ICANT":
        client.say(channel, `@plup remove ICANT`);
        break;
      // case 'PogBones':
      //   client.say(channel, `PogBones`);
      //   break;
      // case 'plupLoffun':
      //   client.say(channel, 'plupLoffun')
      case "AYAYA":
        client.say(channel, "WEEBSDETECTED");
        break;
      case "!bestchatter":
        client.say(channel, "MADLOVERdusty"); 
      default:
        break;
    }
  } catch (error) {
    console.error(error)
  }

});



let array = [];
function lastFive(message){
  array.push(message)
  if (array.length === 6){
    array.shift();
    return array;
  }


  return array;
}





client.on("message", async (channel, tags, message, self) => {
  if (message){
    const blah = lastFive(message)
      console.log(blah)
  } 
})

client.on("message", async (channel, tags, message, self) => {
  if (message.startsWith('!js ')){
    let jsCommand = message.slice(4);
    let jsMsg = eval(jsCommand)
    client.say(channel, jsMsg)
  }
});
