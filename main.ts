namespace SpriteKind {
    export const pion = SpriteKind.create()
    export const pion2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Souris.overlapsWith(pion1)) {
        pion1.follow(Souris, 200)
    } else if (Souris.overlapsWith(m)) {
        m.follow(Souris, 200)
    } else if (Souris.overlapsWith(t)) {
        t.follow(Souris, 200)
    } else if (Souris.overlapsWith(s)) {
        s.follow(Souris, 200)
    } else if (Souris.overlapsWith(pion22)) {
        pion22.follow(Souris, 200)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Souris.overlapsWith(pion1)) {
        pion1.follow(Souris, 0)
    } else if (Souris.overlapsWith(m)) {
        m.follow(Souris, 0)
    } else if (Souris.overlapsWith(t)) {
        t.follow(Souris, 0)
    } else if (Souris.overlapsWith(s)) {
        s.follow(Souris, 0)
    } else if (Souris.overlapsWith(pion22)) {
        pion22.follow(Souris, 0)
    }
})
let Souris: Sprite = null
let pion22: Sprite = null
let s: Sprite = null
let t: Sprite = null
let m: Sprite = null
let pion1: Sprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 256   
    export const ARCADE_SCREEN_HEIGHT = 160
    }
tiles.setCurrentTilemap(tilemap`niveau2`)
pion1 = sprites.create(assets.image`pion1`, SpriteKind.pion)
tiles.placeOnRandomTile(pion1, assets.tile`myTile2`)
m = sprites.create(assets.image`pion1`, SpriteKind.pion)
tiles.placeOnRandomTile(m, assets.tile`myTile2`)
t = sprites.create(assets.image`pion1`, SpriteKind.pion)
tiles.placeOnRandomTile(t, assets.tile`myTile2`)
s = sprites.create(assets.image`pion1`, SpriteKind.pion)
tiles.placeOnRandomTile(s, assets.tile`myTile2`)
pion22 = sprites.create(assets.image`pion0`, SpriteKind.pion2)
tiles.placeOnRandomTile(pion22, assets.tile`myTile1`)
Souris = sprites.create(assets.image`p`, SpriteKind.Player)
grid.moveWithButtons(Souris)
