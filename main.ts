namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const greyed_npc = SpriteKind.create()
}
function StoryTeller (storie: number) {
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
    story.printCharacterText("Hello there! I'm " + Names._pickRandom() + " a " + Class._pickRandom() + " whose life is anything but ordinary. Allow me to recount a day filled with peculiar predicaments that only someone of my wealth could encounter.  Today begins on a" + Adjective._pickRandom() + "morning in my" + Noun._pickRandom() + " mansion, nestled in " + Noun._pickRandom() + " I had planned to wear my " + Adjective._pickRandom() + "suit, but to my " + Noun._pickRandom() + ", I found it " + Noun._pickRandom() + " shrunk by the laundry service. \"This is " + Adjective._pickRandom() + "!\" I exclaimed." + Noun._pickRandom() + "For breakfast, I fancied some " + Noun._pickRandom() + ", but my chef, " + Names._pickRandom() + ", informed me that the " + Noun._pickRandom() + " was broken. \"Preposterous!\" I cried, opting for a mundane " + Noun._pickRandom() + ".Seeking solace, I decided to visit my " + Noun._pickRandom() + " via my " + Noun._pickRandom() + ". Alas, my " + Noun._pickRandom() + " informed me of a " + Adjective._pickRandom() + ". \"This is utterly " + Noun._pickRandom() + "!\" I grumbled." + Noun._pickRandom() + "Feeling " + Noun._pickRandom() + ", I thought a bit of shopping might help. I desired a " + Noun._pickRandom() + ", but upon reaching " + Noun._pickRandom() + ", I discovered they had just sold the last one. \"How " + Noun._pickRandom() + "!\" I lamented. Lunch was no better. I craved " + Noun._pickRandom() + ", but " + Noun._pickRandom() + " told me we were out of " + Noun._pickRandom() + "!\" I sighed, settling for " + Noun._pickRandom() + ". The afternoon brought its own trials. I wanted to relax in my " + Noun._pickRandom() + ", but " + Noun._pickRandom() + " reported a " + Noun._pickRandom() + " with it. \"Is this a " + Noun._pickRandom() + " joke?\" I wondered. Come dinner, I longed for " + Noun._pickRandom() + ", but a " + Noun._pickRandom() + " made it impossible. \"This is beyond " + Noun._pickRandom() + "!\" I declared, choosing " + Noun._pickRandom() + "instead.  As I retired to my " + Noun._pickRandom() + ", I couldn't help but chuckle at the day's " + Noun._pickRandom() + " mishaps. Despite everything, I knew tomorrow would bring more " + Noun._pickRandom() + " adventures in my life as a " + Class._pickRandom() + ".", Names._pickRandom())
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    StoryTeller(1)
})
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
