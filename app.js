/// <reference path="phaser.d.ts"/>
var SimpleGame = /** @class */ (function () {
    function SimpleGame() {
        var config = {
            type: Phaser.AUTO,
            parent: 'content',
            width: 800,
            height: 600,
            scene: {
                preload: this.preload,
                create: this.create
            }
        };
        this.game = new Phaser.Game(config);
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('logo', 'assets/logo.png');
    };
    SimpleGame.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    };
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
