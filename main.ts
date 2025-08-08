import * as RPC from 'discord-rpc';

const clientId = 'YOUR_CLIENT_ID_HERE'; // Replace with your Discord App ID
const imageKey = 'your_image_name';     // Must match the image key you uploaded

// Create a new RPC client
const rpc = new RPC.Client({ transport: 'ipc' });

// Set activity
function setActivity() {
  if (!rpc) return;

  rpc.setActivity({
    details: 'Your Rich Presence Title',
    state: 'Custom Status Here',
    largeImageKey: imageKey,
    largeImageText: 'Hover Text for Large Image',
    buttons: [
      {
        label: 'Visit Website',
        url: 'https://yourwebsite.com',
      },
    ],
    startTimestamp: Date.now(), // Optional timer
  });
}

// Login and setup
rpc.on('ready', () => {
  console.log('Discord RPC is ready!');
  setActivity();

  // You can update activity periodically if needed
  setInterval(() => {
    setActivity();
  }, 15e3); // every 15 seconds
});

rpc.login({ clientId }).catch(console.error);