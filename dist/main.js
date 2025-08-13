"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const RPC = __importStar(require("discord-rpc"));
const clientId = 'YOUR_CLIENT_ID_HERE'; // Replace with your Discord App ID
const imageKey = 'your_image_name'; // Must match the image key you uploaded
// Create a new RPC client
const rpc = new RPC.Client({ transport: 'ipc' });
// Set activity
function setActivity() {
    if (!rpc)
        return;
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
