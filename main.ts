namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const greyed_npc = SpriteKind.create()
}
function StoryTeller (Stories: any[]) {
    Noun = [
    "map",
    "computer",
    "control",
    "procedure",
    "explanation",
    "historian",
    "republic",
    "office",
    "bread",
    "arrival",
    "insect",
    "success",
    "advice",
    "attitude",
    "medicine",
    "soup",
    "flight",
    "childhood",
    "enthusiasm",
    "ear",
    "member",
    "restaurant",
    "bedroom",
    "guidance",
    "highway",
    "permission",
    "analysis",
    "marketing",
    "surgery",
    "thought",
    "lake",
    "reputation",
    "fortune",
    "thing",
    "news",
    "accident",
    "chest",
    "newspaper",
    "heart",
    "conversation",
    "championship",
    "friendship",
    "science",
    "event",
    "guest",
    "fishing",
    "bath",
    "area",
    "mixture",
    "hotel"
    ]
    Adjective = ["Adjective 1", "Adjective 2", "Adjective 3"]
    Verb = ["Verb 1", "Verb 2", "Verb 3"]
    Adverb = ["Adverb 1", "Adverb 2", "Adverb 3"]
    Names = ["Bob", "Brett", "Bingo"]
    Class = ["Millionaire", "Billionaire", "Trillionaire"]
    story.printCharacterText("Hello there! I'm" + Names._pickRandom() + "a" + Class._pickRandom() + "whose life is anything but ordinary. Allow me to recount a day filled with peculiar predicaments that only someone of my wealth could encounter.  Today begins on a" + Class._pickRandom() + "morning in my" + Class._pickRandom() + " mansion, nestled in " + Class._pickRandom() + " I had planned to wear my " + Class._pickRandom() + " suit, but to my", Names._pickRandom())
}
function place_character_at_spot (spot: number) {
    customer = sprites.create(assets.image`myImage2`, SpriteKind.npc)
    if (spot == 0) {
        tiles.placeOnTile(customer, tiles.getTileLocation(2, 5))
        customer.y += -3
    } else if (spot == 1) {
        tiles.placeOnTile(customer, tiles.getTileLocation(10, 5))
        customer.y += -3
        customer.x += -2
    } else if (spot == 2) {
        tiles.placeOnTile(customer, tiles.getTileLocation(14, 5))
        customer.y += -3
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (true) {
        customer.y = randint(32, 98)
        customer.x = randint(32, 128)
        list = [0, 1]
        game.showLongText("TEXT HERE", DialogLayout.Bottom)
        info.setScore(info.score() + 1)
    }
})
let list: number[] = []
let customer: Sprite = null
let Class: string[] = []
let Names: string[] = []
let Adverb: string[] = []
let Adjective: string[] = []
let Noun: string[] = []
let Verb: string[] = []
info.setScore(0)
scene.setBackgroundImage(assets.image`cityscape0`)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
Verb = ["This is Message A", "This is Message B", "This is Message C"]
let cursor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 c 1 . . . . . . . 
    . . . . . . 1 c 1 . . . . . . . 
    . . . 1 1 1 1 c 1 1 1 1 . . . . 
    . . . 1 c c c c c c c 1 . . . . 
    . . . 1 1 1 1 c 1 1 1 1 . . . . 
    . . . . . . 1 c 1 . . . . . . . 
    . . . . . . 1 c 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(cursor)
cursor.z = 30
place_character_at_spot(1)
