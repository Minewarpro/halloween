/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-terrain-4', 'assets/level/background-2/bg2-terrain-4.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('bgWB', 'assets/level/background-1/bg-wooden-bridge.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gStone2', 'assets/level/ground/g-stone-2.png');
        this.load.image('gStone1', 'assets/level/ground/g-stone-1.png');
        this.load.image('gStone3', 'assets/level/ground/g-stone-3.png');
        this.load.image('gStone5', 'assets/level/ground/g-stone-5.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gTree3', 'assets/level/ground/g-tree-3.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gWB', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gBox', 'assets/level/ground/g-box-2.png');
        this.load.image('gVine', 'assets/level/ground/g-vine-a.png');
        this.load.image('gFTree1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gSpike1', 'assets/level/ground/g-spike-1.png');
        this.load.image('Z1', 'assets/images/z1.png');
        this.load.image('Z2', 'assets/images/z2.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let i=1;i<=3;i++){
            this.load.image('filterFilm'+i, 'assets/level/filters/film/frame-'+i+'.png');
        }
        for(let i=1;i<=3;i++) {
            this.load.image('filterBlood' + i, 'assets/level/filters/bloody/frame' + i + '.png');
        }

        for(let i=1;i<=3;i++) {
            this.load.image('filterRain' + i, 'assets/level/weather/rain/frame' + i + '.png');
        }

        for(let i=1;i<=5;i++) {
            this.load.image('filterSnow' + i, 'assets/level/weather/snow/frame-' + i + '.png');
        }
        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let i=1;i<=3;i++){
            this.load.image('bg-animation-'+i, 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }
    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);

        let bg2Terrain1=this.add.image(750,150, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        bg2Terrain1.setScale(0.4)

        let bg2Terrain4=this.add.image(1050,150, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);
        bg2Terrain4.setScale(0.9)

        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(460,-35, 'bg2-tree-2').setOrigin(0,0);
        bg2Tree2.setScale(0.5)
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=0; //pencher l'arbre de -5 degrèslet bg2Tree2=this.add.image(460,-35, 'bg2-tree-2').setOrigin(0,0);
        bg2Tree2.setScale(0.5)

        let bg2Tree3=this.add.image(750,-40, 'bg2-tree-3').setOrigin(0,0);
        bg2Tree3.setScale(0.8)
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-5; //pencher l'arbre de -5 degrès

        let bg2Tree4=this.add.image(1250,-40, 'bg2-tree-3').setOrigin(0,0);
        bg2Tree4.setScale(0.8)
        this.bg2Container.add(bg2Tree4);

        let bg2Tree5=this.add.image(1550,-40, 'bg2-tree-3').setOrigin(0,0);
        bg2Tree5.setScale(0.8)
        this.bg2Container.add(bg2Tree5);

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */

        let Z2=this.add.image(1250,285, 'Z2').setOrigin(0,1);
        this.bg1Container.add(Z2);
        Z2.setScale(0.7)

        let bg1Terrain3=this.add.image(-205,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bg1Terrain1=this.add.image(600,300, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        bg1Terrain1.setScale(0.5)

        let bg1Terrain2=this.add.image(1500,250, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain2);
        bg1Terrain2.setScale(0.8)

        let bg1Terrain4=this.add.image(750,200, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain4);
        bg1Terrain3.setScale(0.7)
        /**
         * pont
         * @type {Phaser.GameObjects.Image}
         */
        let bgWB=this.add.image(1330,250, 'bgWB').setOrigin(0,0);
        this.bg1Container.add(bgWB);
        bgWB.setScale(1)
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(-25,-40, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);
        bg1Tree1.setScale(0.7)

        let bg1Tree3=this.add.image(150,-80, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);
        bg1Tree3.setScale(0.6)

        let bg1Tree4=this.add.image(920,-30, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree4);
        bg1Tree4.setScale(0.7)

        let bg1Tree5=this.add.image(1100,-30, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree5);
        bg1Tree5.setScale(0.7)

        let bg1Tree6=this.add.image(1700,-30, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree6);
        bg1Tree6.setScale(0.7)

        let bg1Tree7=this.add.image(1850,-10, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree7);
        bg1Tree7.setScale(0.7)

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Zombie
         * @type {Phaser.GameObjects.Image}
         */
        let Z1=this.add.image(1250,375, 'Z1').setOrigin(0,1);
        this.groundContainer.add(Z1);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */

        let tree2=this.add.image(250,375, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        tree2.setScale(0.7)

        let tree3=this.add.image(30,375, 'gTree3').setOrigin(0,1);
        this.groundContainer.add(tree3);
        tree3.setScale(0.7)

        let tree1=this.add.image(900,375, 'gTree1').setOrigin(0,1);
        this.groundContainer.add(tree1);
        tree1.setScale(0.7)
        tree1.angle=-10
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(-150,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Herbe marine
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass7=this.add.image(425,400, 'g-grass-4').setOrigin(0,0);
        gGrass7.setScale(2.5)
        this.groundContainer.add(gGrass7);

        let gGrass8=this.add.image(575,400, 'g-grass-4').setOrigin(0,0);
        gGrass8.setScale(2.5)
        this.groundContainer.add(gGrass8);

        let gGrass9=this.add.image(685,400, 'g-grass-4').setOrigin(0,0);
        gGrass9.setScale(2.5)
        this.groundContainer.add(gGrass9);
        /**
         * De l'eau
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gWater=this.add.image(425,385, 'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);
        /**
         * Stone
         * @type {Phaser.GameObjects.Image}
         */
        let gStone2=this.add.image(350,335, 'gStone2').setOrigin(0,0);
        this.groundContainer.add(gStone2);

        let gStone4=this.add.image(790,350, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gStone4);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * Terrain 4
         * @type {Phaser.GameObjects.Image}
         */
        let gMid4=this.add.image(775,365, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);
        /**
         * De l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass1=this.add.image(390,310, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass1);

        let gGrass2=this.add.image(340,310, 'g-grass-2').setOrigin(0,0);
        this.groundContainer.add(gGrass2);

        let gGrass5=this.add.image(175,300, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass5);

        let gGrass3=this.add.image(105,300, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass3);

        let gGrass4=this.add.image(5,310, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(gGrass4);

        let gGrass6=this.add.image(875,325, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass6);
        /**
         * Champignon
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gMushroom1=this.add.image(140,268, 'gMushroom1').setOrigin(0,0);
        gMushroom1.angle=10;
        this.groundContainer.add(gMushroom1);
        /**
         * WB
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gWB=this.add.image(425,300, 'gWB').setOrigin(0,0);
        gWB.setScale(0.8)
        this.groundContainer.add(gWB);
        /**
         * Caisse
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gBox=this.add.image(525,293, 'gBox').setOrigin(0,0);
        gBox.setScale(0.6)
        gBox.angle=5
        this.groundContainer.add(gBox);
        /**
         * Vine
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gVine=this.add.tileSprite(570,-3, 20, 400,'gVine').setOrigin(0,0);
        gVine.setScale(0.5)
        this.groundContainer.add(gVine);

        let gVine2=this.add.tileSprite(600,-3, 20, 250,'gVine').setOrigin(0,0);
        gVine2.setScale(0.5)
        this.groundContainer.add(gVine2);




        /**
         * Deuxième Image
         */
        /**
         * Terrain 5
         */
        let gMid5=this.add.image(gMid4.x+gMid4.width,365, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid5);

         /**
         * Terrain 6
         */
        let gMid6=this.add.image(gMid5.x+gMid5.width,365, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid6);
        /**
         * Terrain 7
         */
        let gMid7=this.add.image(gMid6.x+gMid6.width,365, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid7);
        /**
         * Terrain 8
         */
        let gMid8=this.add.image(gMid7.x+gMid7.width,365, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid8);
        /**
         * Terrain 9
         */
        let gMid9=this.add.image(2050,395, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid9);
        /**
         * follen Arbre
         * @type {Phaser.GameObjects.Image}
         */

        let tree4=this.add.image(960,375, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree4);
        tree4.setScale(2.5)

        let tree5=this.add.image(1250,375, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree5);
        tree5.setScale(0.7)
        /**
         * Herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass10=this.add.image(1225,320, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass10);

        let gGrass11=this.add.image(1210,320, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass11);

        let gGrass12=this.add.image(1580,320, 'g-grass-2').setOrigin(0,0);
        this.groundContainer.add(gGrass12);

        let gGrass13=this.add.image(1685,335, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass13);

        let gGrass14=this.add.image(2080,365, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass14);
        /**
         * Stone
         * @type {Phaser.GameObjects.Image}
         */
        let gStone3=this.add.image(1220,325, 'gStone5').setOrigin(0,0);
        this.groundContainer.add(gStone3);
        gStone3.setScale(1.5)
        /**
         * Champignon
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gMushroom2=this.add.image(1610,325, 'gMushroom1').setOrigin(0,0);
        gMushroom1.angle=10;
        this.groundContainer.add(gMushroom2);
        gMushroom2.setScale(0.7)
        /**
         * fellen Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let gFTree1=this.add.image(1735,300, 'gFTree1').setOrigin(0,0);
        gFTree1.angle=7;
        this.groundContainer.add(gFTree1);
        gFTree1.setScale(0.8)
        /**
         * Spike
         * @type {Phaser.GameObjects.Image}
         */
        let gSpike1=this.add.image(1790,450, 'gSpike1').setOrigin(0,0);
        this.groundContainer.add(gSpike1);
        gSpike1.setScale(1.3)

        /**
         * filtre type Rain au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterRain = this.add.sprite(1190, 0, 'filterRain1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'Rain',
            frames: [
                {key:'filterRain1'},
                {key:'filterRain2'},
                {key:'filterRain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterRain.play('Rain');

        /**
         * filtre type Snow au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterSnow = this.add.sprite(1190, 0, 'filterSnow1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'Snow',
            frames: [
                {key:'filterSnow1'},
                {key:'filterSnow2'},
                {key:'filterSnow3'},
                {key:'filterSnow4'},
                {key:'filterSnow5'},
            ],
            frameRate: 16,
            repeat: -1,

        });
        this.filterSnow.play('Snow');
        this.filterSnow.visible=false;

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterBlood = this.add.sprite(1190, 0, 'filterBlood1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'blood',
            frames: [
                {key:'filterBlood1'},
                {key:'filterBlood2'},
                {key:'filterBlood3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterBlood.play('blood');


        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');


        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 1080, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.filterBlood.scrollFactorX=10;
        this.filterRain.scrollFactorX=10;
        this.filterSnow.scrollFactorX=10;
        this.bg2Container.scrollFactorX=6;
        this.bg1Container.scrollFactorX=8;
        this.groundContainer.scrollFactorX=10;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.filterRain.visible=false;
                    me.filterSnow.visible=false;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.filterRain.visible=true;
                    me.filterSnow.visible=false;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.filterSnow.visible=true;
                    me.filterRain.visible=false;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
