import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';

class GameLevelFood {
    constructor(path){
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        let width = GameEnv.innerWidth;
        let height = GameEnv.innerHeight;


        const image_src_space = path + "/images/gamify/desert.png";
        const image_data_space = {
            name: 'space',
            greeting: "Good luck surviving in space! Find food to keep yourself fed!",
            src: image_src_space,
            pixels: {height: 580, width: 1038}
        }
    }
}