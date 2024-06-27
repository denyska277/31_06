let X2 = 0
let Y = 0
player.onChat("магазин", function () {
    X2 = -6
    Y = 0
    blocks.fill(
    ORANGE_CONCRETE,
    pos(-7, -1, -7),
    pos(7, 15, 7),
    FillOperation.Hollow
    )
    blocks.fill(
    GLOWSTONE,
    pos(-7, 5, -7),
    pos(7, 5, 7),
    FillOperation.Hollow
    )
    blocks.fill(
    GLOWSTONE,
    pos(-7, 10, -7),
    pos(7, 10, 7),
    FillOperation.Hollow
    )
    for (let index = 0; index < 11; index++) {
        blocks.place(STONE_BRICK_STAIRS, pos(X2, Y, 6))
        X2 += 1
        Y += 1
    }
})
