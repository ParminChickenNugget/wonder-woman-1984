// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010100000000010101010102010100000000000101000000000101000101010101010101010101010001000001010101010101010101000000010001000000000000000000000001010100010100010101010001010101010101000101000101010100010101010101010001010000000001000000000000000000010100000101010101010001010101010101000101010101010100010101010101010001010101010101000000000000000100000000000001010001010101010101010101000100000100010101010101010101010001010000000101010101010101010100010101010001010101010101010101000101010100010101010101`, img`
2 2 2 2 2 2 . . . . 2 2 2 2 2 . 
2 2 . . . . . 2 2 . . . . 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 . . 
2 2 2 2 2 2 2 2 2 2 . . . 2 . 2 
. . . . . . . . . . . 2 2 2 . 2 
2 . 2 2 2 2 . 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 . 2 2 2 2 2 2 2 . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 . 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 . . . . . . . 
2 . . . . . . 2 2 . 2 2 2 2 2 2 
2 2 2 2 . 2 . . 2 . 2 2 2 2 2 2 
2 2 2 2 . 2 2 . . . 2 2 2 2 2 2 
2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 
2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
