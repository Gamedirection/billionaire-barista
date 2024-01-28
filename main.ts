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
    Adjective = [
    "tightfisted",
    "wistful",
    "responsible",
    "educated",
    "magical",
    "beneficial",
    "unique",
    "painstaking",
    "round",
    "half",
    "hungry",
    "handy",
    "embarrassed",
    "available",
    "victorious",
    "nasty",
    "premium",
    "red",
    "sturdy",
    "young",
    "familiar",
    "good",
    "tender",
    "spurious",
    "witty",
    "traditional",
    "testy",
    "groovy",
    "rural",
    "roomy",
    "voracious",
    "abstracted",
    "ordinary",
    "impartial",
    "profuse",
    "miniature",
    "stingy",
    "quixotic",
    "cruel",
    "harmonious",
    "pink",
    "several",
    "garrulous",
    "joyous",
    "cultural",
    "chief",
    "momentous",
    "brash",
    "slimy",
    "Grieving"
    ]
    Verb = [
    "return",
    "mention",
    "head",
    "argue",
    "shop",
    "perform",
    "hurt",
    "presume",
    "price",
    "work",
    "delay",
    "restore",
    "start",
    "combine",
    "watch",
    "trap",
    "execute",
    "pause",
    "monitor",
    "regain",
    "win",
    "mean",
    "toss",
    "occur",
    "await",
    "transmit",
    "recruit",
    "unite",
    "exist",
    "change",
    "affect",
    "frighten",
    "echo",
    "attain",
    "target",
    "remember",
    "adapt",
    "decline",
    "age",
    "reverse",
    "attribute",
    "round",
    "contact",
    "help",
    "mutter",
    "swing",
    "establish",
    "weaken",
    "purchase",
    "activate"
    ]
    Adverb = [
    "essentially",
    "willfully",
    "quarrelsomely",
    "dreamily",
    "initially",
    "seriously",
    "devotedly",
    "often",
    "kookily",
    "vaguely",
    "questionably",
    "never",
    "briskly",
    "boldly",
    "recklessly",
    "selfishly",
    "daily",
    "immediately",
    "gently",
    "energetically",
    "youthfully",
    "bleakly",
    "unimpressively",
    "truthfully",
    "ultimately",
    "ahead",
    "cheerfully",
    "inwardly",
    "oddly",
    "wildly",
    "continually",
    "zestily",
    "effectively",
    "specifically",
    "tomorrow",
    "together",
    "officially",
    "beautifully",
    "mechanically",
    "safely",
    "acidly",
    "primarily",
    "accidentally",
    "jubilantly",
    "recently",
    "shyly",
    "rightfully",
    "quietly"
    ]
    Names = [
    "Rich Munny",
    "Bill Yonaire",
    "Penny Profits",
    "Cashley Banks",
    "Barry Treasure",
    "Goldie Sacks",
    "Diamond DiMintz",
    "Sterling Silverman",
    "Buckminster Fullerwallet",
    "Chip Stockman",
    "Crystal Shandalear",
    "Dollarson Ford",
    "Fortune Hunter",
    "Ima Cashroll",
    "Jack Potts",
    "Jewell Sparks",
    "Ledgy R. Note",
    "Lotta Coin",
    "Monea Tree",
    "Nick L. Worth",
    "Payton Savvy",
    "Ruby Riches",
    "Sapphire Stash",
    "Stu Pendouswealth",
    "Ty Coon",
    "Warren Buffit",
    "Winnie Lott",
    "Ella Vate",
    "Ben T. Bills",
    "Ivana Bankroll",
    "Penny Pincher",
    "Fonda Money",
    "Mark Eting",
    "Phil A. Mint",
    "Gail Forcewealth",
    "Sandy Richman",
    "Max Profit",
    "Pearl Portfolia",
    "Rex Riches",
    "Donny Vesture",
    "Hugh G. Earnings",
    "Mimi Dividends",
    "Rusty Money",
    "Charity Bigbucks",
    "Mel Moneybags",
    "Dina Mitecapital",
    "Robin Banks",
    "Sal E. Taire",
    "Joy Fullpocket",
    "Charity Bigbucks"
    ]
    Class = ["Millionaire", "Billionaire", "Trillionaire"]
    morning_stories = ["I woke up on a " + Adjective._pickRandom() + " morning and got out of my " + Adjective._pickRandom() + " bed. then I went to my " + Adjective._pickRandom() + " bathroom, only to find a " + Adjective._pickRandom() + " " + Noun._pickRandom() + " on the floor! I was so [adjective], but I [adverb] carried on with my day and asked [name] to make me [exotic food]." + Adjective._pickRandom() + ", but I [adverb] carried on with my day and asked [name] to make me [exotic food]." + Adverb._pickRandom() + " carried on with my day and asked [name] to make me [exotic food]." + Names._pickRandom() + " to make me some" + Noun._pickRandom() + ".", "I woke up on a generally " + Adjective._pickRandom() + " day. I was going to go and eat some " + Noun._pickRandom() + " but " + Names._pickRandom() + ", my chef said that he asked for the day off. Of course I was " + Adjective._pickRandom() + " and I " + Adverb._pickRandom() + " fixed my own  breakfast. Then I went upstairs to my room and changed into my " + Adjective._pickRandom() + " " + Noun._pickRandom() + ".", "I woke up on this " + Adjective._pickRandom() + " day and turned on the light to my room. I started to " + Verb._pickRandom() + " down the stairs. Then out of nowhere my " + Noun._pickRandom() + " shouted and I " + Adverb._pickRandom() + " fell down the stairs. And to make things worse, " + Names._pickRandom() + " saw it all happen! I then " + Adverb._pickRandom() + " went and got my breakfast."]
    lunch_stories = ["At lunch time I was utterly " + Adjective._pickRandom() + ". I decided to go to [place] for some food." + Noun._pickRandom() + " for some food.", "For lunch, I decided to stay in " + "[place]" + " to eat. I ordered some " + Noun._pickRandom() + " and it was [adjective], so i tipped [random # from 5-75] thousand dollars. they were [adjective] with me, but they didn't deserve to look at me, so i walked to my [noun] and left" + Adjective._pickRandom() + ", so i tipped " + randint(5, 75) + " thousand dollars. they were " + Adjective._pickRandom() + " with me, but they didn't deserve to look at me, so i walked to my " + Noun._pickRandom() + " and left."]
    fillers = [
    "My " + Noun._pickRandom() + " decided to " + Verb._pickRandom() + "! It's absolutely " + Adjective._pickRandom() + "! Even my gold-plated " + Noun._pickRandom() + " isn't working. Being a billionaire is tough!",
    "My diamond-encrusted " + Noun._pickRandom() + " just had to " + Verb._pickRandom() + " today, how " + Adjective._pickRandom() + "! And to top it off, my velvet " + Noun._pickRandom() + " is too " + Adjective._pickRandom() + "! Truly, a hard day.",
    "My " + Adjective._pickRandom() + " " + Noun._pickRandom() + ", which refused to " + Verb._pickRandom() + ", Even my limited-edition " + Noun._pickRandom() + " is acting " + Adjective._pickRandom() + " today!",
    "In " + Names._pickRandom() + "'s " + Adjective._pickRandom() + " mansion, their " + Noun._pickRandom() + " suddenly wouldn't " + Verb._pickRandom() + ". 'And now my crystal " + Noun._pickRandom() + " is " + Adjective._pickRandom() + "!' they cried. 'Why must money bring such trials?'",
    "",
    ""
    ]
    story.printCharacterText("Hello there! I'm " + Names._pickRandom() + " a " + Class._pickRandom() + " whose life is anything but ordinary. Allow me to recount a day filled with peculiar predicaments that only someone of my wealth could encounter.  Today begins on a" + Adjective._pickRandom() + "morning in my" + Noun._pickRandom() + " mansion, nestled in " + Noun._pickRandom() + " I had planned to wear my " + Adjective._pickRandom() + "suit, but to my " + Noun._pickRandom() + ", I found it " + Noun._pickRandom() + " shrunk by the laundry service. \"This is " + Adjective._pickRandom() + "!\" I exclaimed." + Noun._pickRandom() + " For breakfast, I fancied some " + Noun._pickRandom() + ", but my chef, " + Names._pickRandom() + ", informed me that the " + Noun._pickRandom() + " was broken. \"Preposterous!\" I cried, opting for a mundane " + Noun._pickRandom() + ". Seeking solace, I decided to visit my " + Noun._pickRandom() + " via my " + Noun._pickRandom() + ". Alas, my " + Noun._pickRandom() + " informed me of a " + Adjective._pickRandom() + ". \"This is utterly " + Noun._pickRandom() + "!\" I grumbled. " + Noun._pickRandom() + " Feeling " + Noun._pickRandom() + ", I thought a bit of shopping might help. I desired a " + Noun._pickRandom() + ", but upon reaching " + Noun._pickRandom() + ", I discovered they had just sold the last one. \"How " + Noun._pickRandom() + "!\" I lamented. Lunch was no better. I craved " + Noun._pickRandom() + ", but " + Noun._pickRandom() + " told me we were out of " + Noun._pickRandom() + "!\" I sighed, settling for " + Noun._pickRandom() + ". The afternoon brought its own trials. I wanted to relax in my " + Noun._pickRandom() + ", but " + Noun._pickRandom() + " reported a " + Noun._pickRandom() + " with it. \"Is this a " + Noun._pickRandom() + " joke?\" I wondered. Come dinner, I longed for " + Noun._pickRandom() + ", but a " + Noun._pickRandom() + " made it impossible. \"This is beyond " + Noun._pickRandom() + "!\" I declared, choosing " + Noun._pickRandom() + "instead.  As I retired to my " + Noun._pickRandom() + ", I couldn't help but chuckle at the day's " + Noun._pickRandom() + " mishaps. Despite everything, I knew tomorrow would bring more " + Noun._pickRandom() + " adventures in my life as a " + Class._pickRandom() + ".", Names._pickRandom())
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
	
})
let customer: Sprite = null
let fillers: string[] = []
let lunch_stories: string[] = []
let morning_stories: string[] = []
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
