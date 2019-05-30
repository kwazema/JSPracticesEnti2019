class GameScene extends Phaser.Scene{ //extends significa herencia (en este caso de Phaser.Scene)
    constructor(){
        super({ // llamamos al contructor del padre
            key: 'Game' // Es una manera de poder referenciar
        });
    }

    preload() { // metodo
        this.load.spritesheet(
            'player',
            'assets/images/player_spritesheet.png',
            {frameWidth:28, frameHeight:30, spacing: 1}
        );

        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('platform', 'assets/images/platform.png');
        this.load.image('barrel', 'assets/images/barrel.png');
    }
    
    create() { // metodo
        // DEFINE WORLD SIZE
        this.cameras.main.setBounds(0, 0, 360, 700);
        this.physics.world.setBoundsCollision(true,true,false,false);
        // SET CAMER
        this.cameras.main.centerOn(0, 700);

        // CREATE GORUND
        this.ground = this.physics.add.sprite(0, 638, 'ground');
        this.ground.body.allowGravity = false;
        this.ground.body.immovable = true;
        this.ground.setOrigin(0,0);
        

        // CREATE PLATFORMS
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(0, 430, 'platform');
        this.platforms.create(45, 560, 'platform');
        this.platforms.create(90, 290, 'platform');
        this.platforms.create(0, 140, 'platform');
        this.platforms.getChildren().forEach((c) => { 
            c.setOrigin(0,0);
            c.refreshBody();
        }) // Cada uno de los bloques lo estamos poniendo en las cordenadas 0, 0

        // CREATE SPRITE
        this.cameras.main.setBackgroundColor('#0B6138');
        //Al crear player utilizando this, creamos un objeto de clase,
            // y nos permitira acceder deade cualquier clase.
        this.player = this.physics.add.sprite(120, 50, 'player');
        this.player.setBounce(0.25); // Rebote
        this.player.setFrame(3);
        
        //Set Animation
        this.anims.create({
            key: 'walk',
            frames: [
                { key: 'player', frame: 0 },
                { key: 'player', frame: 1 },
                { key: 'player', frame: 2 },
                { key: 'player', frame: 1 },
            ],
            frameRate: 10,
            repeat: -1
        });
        this.player.anims.load('walk');
        
        //BARRELS ZONE
        this.setUpBarrels();

        //this.player.anims.play('walk', true);
        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.player, this.platforms);

    }

    setUpBarrels() {
        this.barrels = this.physics.add.group();
        
        this.time.addEvent({
            delay:5000,
            callback: this.createSingleBarrel,
            callbackScope: this,
            loop: true
        })
        
        
        this.createSingleBarrel();
        this.physics.add.collider(this.barrels, this.ground);
        this.physics.add.collider(this.barrels, this.platforms);
    }

    createSingleBarrel() {
        const barrel = this.barrels.create(10, 0, 'barrel');

        barrel.setVelocityX(180);
        barrel.setCollideWorldBounds(true, 1);
    }

    update() { // metodo
        // 1 - Obtener referencia a las teclas de direccion
        const cursorKeys = this.input.keyboard.createCursorKeys();
        const isLeftDown = cursorKeys.left.isDown;
        const isRightDown = cursorKeys.right.isDown;
        const isSpaceDown = cursorKeys.space.isDown;

        if (isSpaceDown && this.player.body.wasTouching.down) {
            this.player.setVelocityY(-500);
        }

        // 2 - Comprobar si se pullsa
        if (isLeftDown) {
            // Lanzar animación
            this.player.anims.play('walk', true);
            this.player.setVelocityX(-180);
            this.player.flipX = false;

        } else if (isRightDown) {
            // Lanzar animación
            this.player.anims.play('walk', true);
            this.player.setVelocityX(180);
            this.player.flipX = true;
            
        } else {
            // Parar animacion
            this.player.anims.stop('walk');
            this.player.setVelocityX(0);
            this.player.setFrame(3);
        }
    }

}

export default GameScene;