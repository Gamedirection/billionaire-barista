let textSprite: TextSprite = null
info.setScore(0)
scene.setBackgroundImage(assets.image`cityscape`)
let mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
let player2 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
controller.player1.moveSprite(mySprite, 100, 100)
controller.player2.moveSprite(player2, 100, 100)
textSprite.setIcon(assets.image`myImage0`)
textSprite.setText("This good for a title?")