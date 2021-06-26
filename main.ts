scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . 5 5 2 2 5 5 . . . . . . 
    . . . f f d d d f f f . . . . . 
    . . . f f f d f d f f . . . . . 
    . . . f f d d d d f f . . . . . 
    . . . f f d f d d f f . . . . . 
    . . . f . 5 2 2 5 . f . . . . . 
    . . d d 5 2 f f 2 5 d d . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . . d . . d . . . . . . . 
    . . . . . d . . d . . . . . . . 
    . . . . . f . . f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(10)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
