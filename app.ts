class SimpleGame {
    game: Phaser.Game;
    map: Phaser.Tilemap;
    layer: Phaser.TilemapLayer;

    constructor() {
        this.game = new Phaser.Game(720, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update, render: this.render });
    }

    preload() {
        this.game.load.image('logo', 'Content/sprite/GUI/Startscreen_Airstrike.png');
        this.game.load.image('red_soldier', 'Content/sprite/Animation/Red/Soldier.png');

        this.game.load.tilemap('plain', 'Content/map/plain.json', null, Phaser.Tilemap.TILED_JSON);

        this.game.load.image('terrain', 'Content/sprite/terrain.png');
    }

    create() {
        //var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);

        //var terrain = this.game.add.sprite(0, 0, 'terrain');

        this.game.stage.backgroundColor = '#787878';
        
        //  The 'plain' key here is the Loader key given in game.load.tilemap
        this.map = this.game.add.tilemap('plain');

        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'
        this.map.addTilesetImage('terrain', 'terrain');

        //  Creates a layer from the World1 layer in the map data.
        //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
        this.layer = this.map.createLayer('background');
        

        //  This resizes the game world to match the layer dimensions
        //this.layer.resizeWorld();
        //this.layer.debug = true;
    }

    update() {

    }

    render() {
        this.game.debug.pointer(this.game.input.activePointer);
        this.game.debug.text(this.map.tileWidth.toString(), 20, 20);
        //this.game.debug.text(, 50, 50);
        this.map.tilesets[0].draw(this.game.context, 0, 0, 0);
    }
}

window.onload = () => {
    var game = new SimpleGame();
};