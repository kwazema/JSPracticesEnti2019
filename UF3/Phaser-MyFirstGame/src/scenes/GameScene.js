class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }
    
    preload() {
        this.load.spritesheet('player', 'assets/images/player_spritesheet.png', { frameWidth: 28, frameHeight: 30, spacing: 1 });
        this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', { frameWidth: 20, frameHeight: 21, spacing: 1 });

        this.load.image('platform', 'assets/images/platform.png');
        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('barrel', 'assets/images/barrel.png');
        this.load.image('goal', 'assets/images/gorilla3.png');
        this.load.image('heart', 'assets/images/heart.png');

        this.load.audio('overworld', ['assets/audios/overworld.ogg', 'assets/audios/overworld.mp3']);
        this.load.audio('gameover', ['assets/audios/smb_mariodie.mp3','assets/audios/smb_mariodie.ogg']);
    }
    
    create() {
        // SETUP WORLD
        this.cameras.main.setBounds(0,0,360,700);
        this.physics.world.setBoundsCollision(true, true, false, false);
        //this.cameras.main.centerOn(0, 700);
        this.cameras.main.setBackgroundColor('#0B6138');

        // SOUND
        this.audio = this.sound.add('overworld', {volume: 0.1, loop: true});
        this.audio.play();
        this.audioGameOver = this.sound.add('gameover', {volume: 0.1});


        // ADD GROUND
        this.ground = this.physics.add.sprite(0, 638, 'ground');
        this.ground.body.allowGravity = false;
        this.ground.body.immovable = true;
        this.ground.setOrigin(0, 0);
        
        // PLAYER & PLAYER ANIMATION
        this.player = this.physics.add.sprite(0, 500, 'player');

        // BOUNDS COLLIDE
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);
        this.cameras.main.startFollow(this.player);
        
        // CREATE ANIMATION
        this.anims.create({
            key: 'walk',
            frames: [
                { key: 'player', frame: 0 },
                { key: 'player', frame: 1 },
                { key: 'player', frame: 2 },
                { key: 'player', frame: 1 }
            ],

            frameRate: 10,  
            repeat: -1
        });
        
        this.player.anims.load('walk');
        
        // CREATE PLATFORM
        const platforms = this.physics.add.staticGroup();
        platforms.create(0, 430, 'platform');
        platforms.create(45, 560, 'platform');
        platforms.create(90, 290, 'platform');
        platforms.create(0, 140, 'platform');

        platforms.getChildren().forEach((c) => {
            c.setOrigin(0, 0);
            c.refreshBody();
        });
        
        // Barrels
        this.barrels = this.physics.add.group();
        this.createBarrel();

        this.time.addEvent({
            delay: 5000, // ms
            callback: this.createBarrel,
            //args: [],
            callbackScope: this,
            loop: true
        });
        
        // CREATE FIRES
        const fires = this.physics.add.staticGroup();
        fires.create(200, 538, 'fire');
        fires.create(60, 408, 'fire');
        fires.create(190, 408, 'fire');
        fires.create(180, 268, 'fire');
        fires.create(200, 118, 'fire');

        // CREATE ANIM FIRE
        this.anims.create({
            key: 'burn',
            frames: [
                { key: 'fire', frame: 0 },
                { key: 'fire', frame: 1 },
            ],
            
            frameRate: 4,
            repeat: -1
        });

        fires.getChildren().forEach((fire) => {
            fire.anims.load('burn');
            fire.anims.play('burn', true);
            fire.setOrigin(0, 0);
            fire.refreshBody();
        });
        
        // HEART
        this.hearts = this.add.group('heart');
        this.hearts.create(25, 200, 'heart');
        this.hearts.create(80, 200, 'heart');
        this.hearts.create(135, 200, 'heart');

        this.hearts.getChildren().forEach((heart) => {
            heart.setScale(.1, .1);
        });

        // GOAL
        const goal = this.physics.add.sprite(20, 90, 'goal');
        goal.body.allowGravity = false;
        goal.setOrigin(0, 0);
        
        // Collider
        this.physics.add.collider(this.player, platforms);
        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.barrels, this.ground);
        this.physics.add.collider(this.barrels, platforms);
        
        //Overlap
        this.collisionPlayerToBarrel = this.physics.add.overlap(this.player, this.barrels, this.killPlayer, null, this);
        this.collisionPlayerToFire = this.physics.add.overlap(this.player, fires, this.killPlayer, null, this);
        this.collisionPlayerToGoal = this.physics.add.overlap(this.player, goal, this.win, null, this);

        // TIME SCORE
        this.score = 0;
        this.scoreText = this.add.text(170, 65, `Your Time:  ${this.score}`, {font: 'bold 25px Arial'}).setScrollFactor(0);
        this.scoreText.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        this.scoreBest = localStorage.getItem('scoreBest');
        if (!this.scoreBest)
            this.scoreBest = 0;

        this.scoreBestText = this.add.text(170, 90, `Best Time: ${this.scoreBest}`, {font: 'bold 25px Arial'}).setScrollFactor(0);
        this.scoreBestText.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        this.canMovePlayer = true;

    }
    
    killPlayer() {
        this.audio.stop();
        this.audioGameOver.play();
        this.canMovePlayer = false;

        this.player.setVelocityX(0);
        this.player.setVelocityY(0);

        this.collisionPlayerToBarrel.destroy();
        this.collisionPlayerToFire.destroy();
        this.collisionPlayerToGoal.destroy();

        this.tweens.add({
            targets: this.player,    
            scaleX: 1.2,
            scaleY: 1.2,
            y: '-=50',
            //x: '-=15',
            yoyo: true,
            duration: 1500,
            onComplete: () => {this.scene.start("Home")}
        });
    }
    
    win() {
        this.audio.stop();
        this.canMovePlayer = false;

        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
        
        this.collisionPlayerToBarrel.destroy();
        this.collisionPlayerToFire.destroy();
        this.collisionPlayerToGoal.destroy();
        
        if (this.score > this.scoreBest) {
            this.scoreBest = Math.round(this.score * 10)/10;
            localStorage.setItem('scoreBest', this.scoreBest);
            this.scoreBestText.setText(`Best Time:  ${this.scoreBest}`);
        }

        this.tweens.add({
            targets: this.player,    
            scaleX: 1.1,
            scaleY: 1.1,
            y: '-=35',
            //x: '-=15',
            yoyo: true,
            duration: 1500,
            onComplete: () => {this.scene.start("Home")}
        });
    }
    
    createBarrel() {
        let barrel = this.barrels.getFirstDead();
        
        if(!barrel) {
            barrel = this.barrels.create(0, 0, 'barrel');
        }
    
        barrel.setCollideWorldBounds(true, 1);
        // Alive reuse barrels
        barrel.setActive(true);
        barrel.setVisible(true);
        barrel.x = 20;
        barrel.y = 90;
        barrel.setVelocityX(120);

        this.tweens.add({
            targets: barrel,
            angle: 360,
            durations: 500,
            repeat: -1
        });
    }
    
    update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();
        const isUpDown = cursorKeys.up.isDown || cursorKeys.space.isDown;
        
        const isLeftDown = cursorKeys.left.isDown;
        const isRightDown = cursorKeys.right.isDown;
        
        if (this.canMovePlayer) {
            if (isLeftDown) {
                this.player.anims.play('walk', true);
                this.player.setVelocityX(-180);
                this.player.scaleX = 1;
                this.player.flipX = false;
            }
            else if (isRightDown) {
                this.player.anims.play('walk', true);
                this.player.setVelocityX(180);
                this.player.flipX = true;
            }
            else {
                this.player.anims.stop('walk');
                this.player.setFrame(3);
                this.player.setVelocityX(0);
            }

            if (isUpDown && this.player.body.wasTouching.down) {
                this.player.setVelocityY(-550);
            }
        }

        // KILL BARREL
        this.barrels.getChildren().forEach((barrel) => {
            if(barrel.x < 10 && barrel.y > 600) {
                this.barrels.killAndHide(barrel); // Only Sprite
                // TODO: MOVE BARREL
            }
        });

        this.score += 1/60;
        this.scoreText.setText(`Your Time:  ${Math.round(this.score * 10)/10}` );
    }
    
}
    
export default GameScene;