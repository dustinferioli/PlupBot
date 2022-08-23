require('dotenv').config()
const tmi = require('tmi.js');
const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'plupyumyumbot',
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: ['plup', 'madloverdusty']
});

client.connect();

client.on('chat', (channel, tags, message, self) => {
  // console.log(tags)
  // switch (tags.username){
  //   case 'ilacklogic':
  //     client.say(channel, 'YOURMOM');
  //     break;
  //   case 'cazador_':
  //     client.say(channel, 'YOURMOM')
  //   case 'groenevis':
  //     client.say(channel, 'BatChest')
  //   case 'jacktaz':
  //     client.say(channel, 'plupYUMYUM');
  //     break; 
  //   default:
  //       break;
  // }
})

client.on('message', async (channel, tags, message, self) => {
  // Ignore echoed messages.
  if(self) return;


  switch (message) {
    case 'plupYUMYUM':
      client.say(channel, `plupYUMYUM`);
      break;
    // case 'ICANT':
    //   client.say(channel, `@plup remove ICANT`);
    //   break;
    // case 'PogBones':
    //   client.say(channel, `PogBones`);
    //   break;
    // case 'plupLoffun':
    //   client.say(channel, 'plupLoffun')  
    case 'AYAYA':
      client.say(channel, 'WEEBSDETECTED');
      break;
    case '!bestchatter':
      client.say(channel, 'MADLOVERdusty')  
    default:
      break;  
    }

    // if (message.startsWith('!js Math')){
    //   let jsCommand = message.slice(4);
    //   let jsMsg = await eval(jsCommand)
    //   console.log(jsMsg)
    //   // client.say(channel, 'This is your result: ', jsMsg)
    //   client.say(channel, jsMsg)
    // } else if (message.startsWith('!js')){
    //   let jsCommand = message.slice(4);
    //   let jsMsg = await eval(jsCommand)
    //   client.say(channel, jsMsg)
    // }

});