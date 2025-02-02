import "dotenv/config.js";
import "../../config/connectionDb.js";
import Recipe from "../Recipe.js";
import Item from "../Item.js";

const recipes = [
	{
		"item": "Acacia Boat",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Acacia Planks",
			null,
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks"
		],
		"shapeless": false
	},
	{
		"item": "Acacia Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Acacia Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Acacia Door",
		"quantity": 3,
		"recipe": [
			"Acacia Planks",
			"Acacia Planks",
			null,
			"Acacia Planks",
			"Acacia Planks",
			null,
			"Acacia Planks",
			"Acacia Planks",
			null
		],
		"shapeless": false
	},
	{
		"item": "Acacia Fence",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Acacia Planks",
			"Stick",
			"Acacia Planks",
			"Acacia Planks",
			"Stick",
			"Acacia Planks"
		],
		"shapeless": false
	},
	{
		"item": "Acacia Fence Gate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stick",
			"Acacia Planks",
			"Stick",
			"Stick",
			"Acacia Planks",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Acacia Planks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Acacia Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Acacia Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Acacia Planks",
			"Acacia Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Acacia Sign",
		"quantity": 3,
		"recipe": [
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Acacia Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks"
		],
		"shapeless": false
	},
	{
		"item": "Acacia Stairs",
		"quantity": 4,
		"recipe": [
			"Acacia Planks",
			null,
			null,
			"Acacia Planks",
			"Acacia Planks",
			null,
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks"
		],
		"shapeless": false
	},
	{
		"item": "Acacia Trapdoor",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks",
			"Acacia Planks"
		],
		"shapeless": false
	},
	{
		"item": "Acacia Wood",
		"quantity": 3,
		"recipe": [
			"Acacia Log",
			"Acacia Log",
			null,
			"Acacia Log",
			"Acacia Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Activator Rail",
		"quantity": 6,
		"recipe": [
			"Iron Ingot",
			"Stick",
			"Iron Ingot",
			"Iron Ingot",
			"Redstone Torch",
			"Iron Ingot",
			"Iron Ingot",
			"Stick",
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Andesite",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Diorite",
			"Cobblestone",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Andesite Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Andesite",
			"Andesite",
			"Andesite"
		],
		"shapeless": false
	},
	{
		"item": "Andesite Stairs",
		"quantity": 4,
		"recipe": [
			"Andesite",
			null,
			null,
			"Andesite",
			"Andesite",
			null,
			"Andesite",
			"Andesite",
			"Andesite"
		],
		"shapeless": false
	},
	{
		"item": "Andesite Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Andesite",
			"Andesite",
			"Andesite",
			"Andesite",
			"Andesite",
			"Andesite"
		],
		"shapeless": false
	},
	{
		"item": "Anvil",
		"quantity": 1,
		"recipe": [
			"Block of Iron",
			"Block of Iron",
			"Block of Iron",
			null,
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Armor Stand",
		"quantity": 1,
		"recipe": [
			"Stick",
			"Stick",
			"Stick",
			null,
			"Stick",
			null,
			"Stick",
			"Smooth Stone Slab",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Arrow",
		"quantity": 4,
		"recipe": [
			null,
			"Flint",
			null,
			null,
			"Stick",
			null,
			null,
			"Feather",
			null
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Fire Resistance",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Fire Resistance",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Harming",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Harming",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Healing",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Healing",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Invisibility",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Invisibility",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Leaping",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Leaping",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Luck",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Luck",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Night Vision",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Night Vision",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Poison",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Poison",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Regeneration",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Regeneration",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Slow Falling",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Slow Falling",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Slowness",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Slowness",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Splashing",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Water Bottle",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Strength",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Strength",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Swiftness",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Swiftness",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Water Breathing",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Water Breathing",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of Weakness",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of Weakness",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Arrow of the Turtle Master",
		"quantity": 8,
		"recipe": [
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow",
			"Lingering Potion of the Turtle Master",
			"Arrow",
			"Arrow",
			"Arrow",
			"Arrow"
		],
		"shapeless": false
	},
	{
		"item": "Barrel",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Barrel",
		"quantity": 1,
		"recipe": [
			"Stick",
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			"Stick",
			"Stick",
			null,
			"Stick",
			"Stick",
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Beacon",
		"quantity": 1,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			null,
			"Glass",
			"Obsidian",
			"Obsidian",
			"Obsidian"
		],
		"shapeless": false
	},
	{
		"item": "Beehive",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			"Honeycomb",
			"Honeycomb",
			"Honeycomb",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Beetroot Soup",
		"quantity": 1,
		"recipe": [
			"Beetroot",
			"Beetroot",
			"Beetroot",
			"Beetroot",
			"Beetroot",
			"Beetroot",
			null,
			"Bowl",
			null
		],
		"shapeless": true
	},
	{
		"item": "Birch Boat",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Birch Planks",
			null,
			"Birch Planks",
			"Birch Planks",
			"Birch Planks",
			"Birch Planks"
		],
		"shapeless": false
	},
	{
		"item": "Birch Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Birch Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Birch Door",
		"quantity": 3,
		"recipe": [
			"Birch Planks",
			"Birch Planks",
			null,
			"Birch Planks",
			"Birch Planks",
			null,
			"Birch Planks",
			"Birch Planks",
			null
		],
		"shapeless": false
	},
	{
		"item": "Birch Fence",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Birch Planks",
			"Stick",
			"Birch Planks",
			"Birch Planks",
			"Stick",
			"Birch Planks"
		],
		"shapeless": false
	},
	{
		"item": "Birch Fence Gate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stick",
			"Birch Planks",
			"Stick",
			"Stick",
			"Birch Planks",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Birch Planks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Birch Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Birch Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Birch Planks",
			"Birch Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Birch Sign",
		"quantity": 3,
		"recipe": [
			"Birch Planks",
			"Birch Planks",
			"Birch Planks",
			"Birch Planks",
			"Birch Planks",
			"Birch Planks",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Birch Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Birch Planks",
			"Birch Planks",
			"Birch Planks"
		],
		"shapeless": false
	},
	{
		"item": "Birch Stairs",
		"quantity": 4,
		"recipe": [
			"Birch Planks",
			null,
			null,
			"Birch Planks",
			"Birch Planks",
			null,
			"Birch Planks",
			"Birch Planks",
			"Birch Planks"
		],
		"shapeless": false
	},
	{
		"item": "Birch Trapdoor",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Birch Planks",
			"Birch Planks",
			"Birch Planks",
			"Birch Planks",
			"Birch Planks",
			"Birch Planks"
		],
		"shapeless": false
	},
	{
		"item": "Birch Wood",
		"quantity": 3,
		"recipe": [
			"Birch Log",
			"Birch Log",
			null,
			"Birch Log",
			"Birch Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Black Banner",
		"quantity": 1,
		"recipe": [
			"Black Wool",
			"Black Wool",
			"Black Wool",
			"Black Wool",
			"Black Wool",
			"Black Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Black Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Black Banner",
			"Black Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Black Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Black Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Black Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Black Wool",
			"Black Wool",
			"Black Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Black Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Black Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Black Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Black Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Black Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Black Wool",
			"Black Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Black Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Black Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Black Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Ink Sac",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Black Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Wither Rose",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Black Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Black Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Black Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Black Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Black Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Black Stained Glass",
			"Black Stained Glass",
			"Black Stained Glass",
			"Black Stained Glass",
			"Black Stained Glass",
			"Black Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Black Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Black Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Black Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Black Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Black Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Black Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Blackstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Blackstone",
			"Blackstone",
			"Blackstone"
		],
		"shapeless": false
	},
	{
		"item": "Blackstone Stairs",
		"quantity": 4,
		"recipe": [
			"Blackstone",
			null,
			null,
			"Blackstone",
			"Blackstone",
			null,
			"Blackstone",
			"Blackstone",
			"Blackstone"
		],
		"shapeless": false
	},
	{
		"item": "Blackstone Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Blackstone",
			"Blackstone",
			"Blackstone",
			"Blackstone",
			"Blackstone",
			"Blackstone"
		],
		"shapeless": false
	},
	{
		"item": "Blast Furnace",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Furnace",
			"Iron Ingot",
			"Smooth Stone",
			"Smooth Stone",
			"Smooth Stone"
		],
		"shapeless": false
	},
	{
		"item": "Blaze Powder",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			null,
			"Blaze Rod",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Block of Amethyst",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Amethyst Shard",
			"Amethyst Shard",
			null,
			"Amethyst Shard",
			"Amethyst Shard",
			null
		],
		"shapeless": false
	},
	{
		"item": "Block of Coal",
		"quantity": 1,
		"recipe": [
			"Coal",
			"Coal",
			"Coal",
			"Coal",
			"Coal",
			"Coal",
			"Coal",
			"Coal",
			"Coal"
		],
		"shapeless": false
	},
	{
		"item": "Block of Copper",
		"quantity": 1,
		"recipe": [
			"Copper Ingot",
			"Copper Ingot",
			"Copper Ingot",
			"Copper Ingot",
			"Copper Ingot",
			"Copper Ingot",
			"Copper Ingot",
			"Copper Ingot",
			"Copper Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Block of Diamond",
		"quantity": 1,
		"recipe": [
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond"
		],
		"shapeless": false
	},
	{
		"item": "Block of Emerald",
		"quantity": 1,
		"recipe": [
			"Emerald",
			"Emerald",
			"Emerald",
			"Emerald",
			"Emerald",
			"Emerald",
			"Emerald",
			"Emerald",
			"Emerald"
		],
		"shapeless": false
	},
	{
		"item": "Block of Gold",
		"quantity": 1,
		"recipe": [
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Block of Iron",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Block of Lapis Lazuli",
		"quantity": 1,
		"recipe": [
			"Lapis Lazuli",
			"Lapis Lazuli",
			"Lapis Lazuli",
			"Lapis Lazuli",
			"Lapis Lazuli",
			"Lapis Lazuli",
			"Lapis Lazuli",
			"Lapis Lazuli",
			"Lapis Lazuli"
		],
		"shapeless": false
	},
	{
		"item": "Block of Netherite",
		"quantity": 1,
		"recipe": [
			"Netherite Ingot",
			"Netherite Ingot",
			"Netherite Ingot",
			"Netherite Ingot",
			"Netherite Ingot",
			"Netherite Ingot",
			"Netherite Ingot",
			"Netherite Ingot",
			"Netherite Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Block of Raw Copper",
		"quantity": 1,
		"recipe": [
			"Raw Copper",
			"Raw Copper",
			"Raw Copper",
			"Raw Copper",
			"Raw Copper",
			"Raw Copper",
			"Raw Copper",
			"Raw Copper",
			"Raw Copper"
		],
		"shapeless": false
	},
	{
		"item": "Block of Raw Gold",
		"quantity": 1,
		"recipe": [
			"Raw Gold",
			"Raw Gold",
			"Raw Gold",
			"Raw Gold",
			"Raw Gold",
			"Raw Gold",
			"Raw Gold",
			"Raw Gold",
			"Raw Gold"
		],
		"shapeless": false
	},
	{
		"item": "Block of Raw Iron",
		"quantity": 1,
		"recipe": [
			"Raw Iron",
			"Raw Iron",
			"Raw Iron",
			"Raw Iron",
			"Raw Iron",
			"Raw Iron",
			"Raw Iron",
			"Raw Iron",
			"Raw Iron"
		],
		"shapeless": false
	},
	{
		"item": "Block of Redstone",
		"quantity": 1,
		"recipe": [
			"Redstone Dust",
			"Redstone Dust",
			"Redstone Dust",
			"Redstone Dust",
			"Redstone Dust",
			"Redstone Dust",
			"Redstone Dust",
			"Redstone Dust",
			"Redstone Dust"
		],
		"shapeless": false
	},
	{
		"item": "Blue Banner",
		"quantity": 1,
		"recipe": [
			"Blue Wool",
			"Blue Wool",
			"Blue Wool",
			"Blue Wool",
			"Blue Wool",
			"Blue Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Blue Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Blue Banner",
			"Blue Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Blue Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Blue Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Blue Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Blue Wool",
			"Blue Wool",
			"Blue Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Blue Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Blue Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Blue Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Blue Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Blue Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Blue Wool",
			"Blue Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Blue Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Blue Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Blue Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Lapis Lazuli",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Blue Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Cornflower",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Blue Ice",
		"quantity": 1,
		"recipe": [
			"Packed Ice",
			"Packed Ice",
			"Packed Ice",
			"Packed Ice",
			"Packed Ice",
			"Packed Ice",
			"Packed Ice",
			"Packed Ice",
			"Packed Ice"
		],
		"shapeless": false
	},
	{
		"item": "Blue Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Blue Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Blue Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Blue Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Blue Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Blue Stained Glass",
			"Blue Stained Glass",
			"Blue Stained Glass",
			"Blue Stained Glass",
			"Blue Stained Glass",
			"Blue Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Blue Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Blue Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Blue Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Blue Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Blue Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Blue Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Bone Block",
		"quantity": 1,
		"recipe": [
			"Bone Meal",
			"Bone Meal",
			"Bone Meal",
			"Bone Meal",
			"Bone Meal",
			"Bone Meal",
			"Bone Meal",
			"Bone Meal",
			"Bone Meal"
		],
		"shapeless": false
	},
	{
		"item": "Bone Meal",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			"Bone",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Bone Meal",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Bone Block",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Book",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Paper",
			"Paper",
			null,
			"Paper",
			"Leather",
			null
		],
		"shapeless": true
	},
	{
		"item": "Book and Quill",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Book",
			"Ink Sac",
			null,
			null,
			"Feather",
			null
		],
		"shapeless": true
	},
	{
		"item": "Bookshelf",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			"Book",
			"Book",
			"Book",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Bow",
		"quantity": 1,
		"recipe": [
			null,
			"Stick",
			"String",
			"Stick",
			null,
			"String",
			null,
			"Stick",
			"String"
		],
		"shapeless": false
	},
	{
		"item": "Bow",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Bow",
			"Bow",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Bowl",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Bread",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Wheat",
			"Wheat",
			"Wheat",
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Brewing Stand",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Blaze Rod",
			null,
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			]
		],
		"shapeless": false
	},
	{
		"item": "Brick Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Bricks",
			"Bricks",
			"Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Brick Stairs",
		"quantity": 4,
		"recipe": [
			"Bricks",
			null,
			null,
			"Bricks",
			"Bricks",
			null,
			"Bricks",
			"Bricks",
			"Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Brick Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Bricks",
			"Bricks",
			"Bricks",
			"Bricks",
			"Bricks",
			"Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Bricks",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Brick",
			"Brick",
			null,
			"Brick",
			"Brick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Brown Banner",
		"quantity": 1,
		"recipe": [
			"Brown Wool",
			"Brown Wool",
			"Brown Wool",
			"Brown Wool",
			"Brown Wool",
			"Brown Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Brown Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Brown Banner",
			"Brown Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Brown Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Brown Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Brown Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Brown Wool",
			"Brown Wool",
			"Brown Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Brown Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Brown Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Brown Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Brown Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Brown Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Brown Wool",
			"Brown Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Brown Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Brown Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Brown Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Cocoa Beans",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Brown Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Brown Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Brown Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Brown Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Brown Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Brown Stained Glass",
			"Brown Stained Glass",
			"Brown Stained Glass",
			"Brown Stained Glass",
			"Brown Stained Glass",
			"Brown Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Brown Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Brown Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Brown Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Brown Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Brown Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Brown Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Bucket",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Ingot",
			null,
			"Iron Ingot",
			null,
			"Iron Ingot",
			null
		],
		"shapeless": false
	},
	{
		"item": "Buried Treasure Map",
		"quantity": 4,
		"recipe": [
			"Empty Map",
			"Empty Map",
			"Empty Map",
			"Buried Treasure Map",
			"Empty Map",
			null,
			"Empty Map",
			"Empty Map",
			"Empty Map"
		],
		"shapeless": true
	},
	{
		"item": "Cake",
		"quantity": 1,
		"recipe": [
			"Milk Bucket",
			"Milk Bucket",
			"Milk Bucket",
			"Sugar",
			"Egg",
			"Sugar",
			"Wheat",
			"Wheat",
			"Wheat"
		],
		"shapeless": false
	},
	{
		"item": "Campfire",
		"quantity": 1,
		"recipe": [
			null,
			"Stick",
			null,
			"Stick",
			[
				"Coal",
				"Charcoal"
			],
			"Stick",
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			],
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			],
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			]
		],
		"shapeless": false
	},
	{
		"item": "Candle",
		"quantity": 1,
		"recipe": [
			null,
			"String",
			null,
			null,
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Carrot on a Stick",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Fishing Rod",
			null,
			null,
			null,
			"Carrot"
		],
		"shapeless": false
	},
	{
		"item": "Carrot on a Stick",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Carrot on a Stick",
			"Carrot on a Stick",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Cartography Table",
		"quantity": 1,
		"recipe": [
			"Paper",
			"Paper",
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Cauldron",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Chain",
		"quantity": 1,
		"recipe": [
			null,
			"Iron Nugget",
			null,
			null,
			"Iron Ingot",
			null,
			null,
			"Iron Nugget",
			null
		],
		"shapeless": false
	},
	{
		"item": "Chainmail Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Chainmail Boots",
			"Chainmail Boots",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Chainmail Chestplate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Chainmail Chestplate",
			"Chainmail Chestplate",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Chainmail Helmet",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Chainmail Helmet",
			"Chainmail Helmet",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Chainmail Leggings",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Chainmail Leggings",
			"Chainmail Leggings",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Chest",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Chiseled Deepslate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Cobbled Deepslate Slab",
			null,
			null,
			"Cobbled Deepslate Slab",
			null
		],
		"shapeless": false
	},
	{
		"item": "Chiseled Nether Bricks",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Nether Brick Slab",
			null,
			null,
			"Nether Brick Slab",
			null
		],
		"shapeless": false
	},
	{
		"item": "Chiseled Polished Blackstone",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Polished Blackstone Slab",
			null,
			null,
			"Polished Blackstone Slab",
			null
		],
		"shapeless": false
	},
	{
		"item": "Chiseled Quartz Block",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Quartz Slab",
			null,
			null,
			"Quartz Slab",
			null
		],
		"shapeless": false
	},
	{
		"item": "Chiseled Red Sandstone",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Red Sandstone Slab",
			null,
			null,
			"Red Sandstone Slab",
			null
		],
		"shapeless": false
	},
	{
		"item": "Chiseled Sandstone",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Sandstone Slab",
			null,
			null,
			"Sandstone Slab",
			null
		],
		"shapeless": false
	},
	{
		"item": "Chiseled Stone Bricks",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Stone Brick Slab",
			null,
			null,
			"Stone Brick Slab",
			null
		],
		"shapeless": false
	},
	{
		"item": "Clay",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Clay Ball",
			"Clay Ball",
			null,
			"Clay Ball",
			"Clay Ball",
			null
		],
		"shapeless": false
	},
	{
		"item": "Coal",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Coal",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Coarse Dirt",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Dirt",
			"Gravel",
			null,
			"Gravel",
			"Dirt",
			null
		],
		"shapeless": false
	},
	{
		"item": "Cobbled Deepslate Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Cobbled Deepslate",
			"Cobbled Deepslate",
			"Cobbled Deepslate"
		],
		"shapeless": false
	},
	{
		"item": "Cobbled Deepslate Stairs",
		"quantity": 4,
		"recipe": [
			"Cobbled Deepslate",
			null,
			null,
			"Cobbled Deepslate",
			"Cobbled Deepslate",
			null,
			"Cobbled Deepslate",
			"Cobbled Deepslate",
			"Cobbled Deepslate"
		],
		"shapeless": false
	},
	{
		"item": "Cobbled Deepslate Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Cobbled Deepslate",
			"Cobbled Deepslate",
			"Cobbled Deepslate",
			"Cobbled Deepslate",
			"Cobbled Deepslate",
			"Cobbled Deepslate"
		],
		"shapeless": false
	},
	{
		"item": "Cobblestone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Cobblestone",
			"Cobblestone",
			"Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Cobblestone Stairs",
		"quantity": 4,
		"recipe": [
			"Cobblestone",
			null,
			null,
			"Cobblestone",
			"Cobblestone",
			null,
			"Cobblestone",
			"Cobblestone",
			"Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Cobblestone Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Cobblestone",
			"Cobblestone",
			"Cobblestone",
			"Cobblestone",
			"Cobblestone",
			"Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Composter",
		"quantity": 1,
		"recipe": [
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			null,
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			null,
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			]
		],
		"shapeless": false
	},
	{
		"item": "Conduit",
		"quantity": 1,
		"recipe": [
			"Nautilus Shell",
			"Nautilus Shell",
			"Nautilus Shell",
			"Nautilus Shell",
			"Heart of the Sea",
			"Nautilus Shell",
			"Nautilus Shell",
			"Nautilus Shell",
			"Nautilus Shell"
		],
		"shapeless": false
	},
	{
		"item": "Cookie",
		"quantity": 8,
		"recipe": [
			null,
			null,
			null,
			"Wheat",
			"Cocoa Beans",
			"Wheat",
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Copper Ingot",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Copper",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Copper Ingot",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Waxed Block of Copper",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Crafting Table",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Crimson Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Crimson Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Crimson Door",
		"quantity": 3,
		"recipe": [
			"Crimson Planks",
			"Crimson Planks",
			null,
			"Crimson Planks",
			"Crimson Planks",
			null,
			"Crimson Planks",
			"Crimson Planks",
			null
		],
		"shapeless": false
	},
	{
		"item": "Crimson Fence",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Crimson Planks",
			"Stick",
			"Crimson Planks",
			"Crimson Planks",
			"Stick",
			"Crimson Planks"
		],
		"shapeless": false
	},
	{
		"item": "Crimson Fence Gate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stick",
			"Crimson Planks",
			"Stick",
			"Stick",
			"Crimson Planks",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Crimson Hyphae",
		"quantity": 3,
		"recipe": [
			"Crimson Stem",
			"Crimson Stem",
			null,
			"Crimson Stem",
			"Crimson Stem",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Crimson Planks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Crimson Stem",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Crimson Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Crimson Planks",
			"Crimson Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Crimson Sign",
		"quantity": 3,
		"recipe": [
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Crimson Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks"
		],
		"shapeless": false
	},
	{
		"item": "Crimson Stairs",
		"quantity": 4,
		"recipe": [
			"Crimson Planks",
			null,
			null,
			"Crimson Planks",
			"Crimson Planks",
			null,
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks"
		],
		"shapeless": false
	},
	{
		"item": "Crimson Trapdoor",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks",
			"Crimson Planks"
		],
		"shapeless": false
	},
	{
		"item": "Crossbow",
		"quantity": 1,
		"recipe": [
			"Stick",
			"Iron Ingot",
			"Stick",
			"String",
			"Tripwire Hook",
			"String",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Crossbow",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"Crossbow",
				"Crossbow",
				"Crossbow"
			],
			[
				"Crossbow",
				"Crossbow",
				"Crossbow"
			],
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Cut Copper",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Block of Copper",
			"Block of Copper",
			null,
			"Block of Copper",
			"Block of Copper",
			null
		],
		"shapeless": false
	},
	{
		"item": "Cut Copper Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Cut Copper",
			"Cut Copper",
			"Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Cut Copper Stairs",
		"quantity": 4,
		"recipe": [
			"Cut Copper",
			null,
			null,
			"Cut Copper",
			"Cut Copper",
			null,
			"Cut Copper",
			"Cut Copper",
			"Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Cut Red Sandstone",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Red Sandstone",
			"Red Sandstone",
			null,
			"Red Sandstone",
			"Red Sandstone",
			null
		],
		"shapeless": false
	},
	{
		"item": "Cut Red Sandstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Cut Red Sandstone",
			"Cut Red Sandstone",
			"Cut Red Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Cut Sandstone",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Sandstone",
			"Sandstone",
			null,
			"Sandstone",
			"Sandstone",
			null
		],
		"shapeless": false
	},
	{
		"item": "Cut Sandstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Cut Sandstone",
			"Cut Sandstone",
			"Cut Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Cyan Banner",
		"quantity": 1,
		"recipe": [
			"Cyan Wool",
			"Cyan Wool",
			"Cyan Wool",
			"Cyan Wool",
			"Cyan Wool",
			"Cyan Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Cyan Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Cyan Banner",
			"Cyan Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Cyan Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Cyan Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Cyan Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Cyan Wool",
			"Cyan Wool",
			"Cyan Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Cyan Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Cyan Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Cyan Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Cyan Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Cyan Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Cyan Wool",
			"Cyan Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Cyan Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Cyan Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Cyan Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Blue Dye",
			"Green Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Cyan Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Cyan Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Cyan Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Cyan Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Cyan Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Cyan Stained Glass",
			"Cyan Stained Glass",
			"Cyan Stained Glass",
			"Cyan Stained Glass",
			"Cyan Stained Glass",
			"Cyan Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Cyan Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Cyan Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Cyan Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Cyan Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Cyan Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Cyan Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Dark Oak Boat",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Dark Oak Planks",
			null,
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Dark Oak Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Door",
		"quantity": 3,
		"recipe": [
			"Dark Oak Planks",
			"Dark Oak Planks",
			null,
			"Dark Oak Planks",
			"Dark Oak Planks",
			null,
			"Dark Oak Planks",
			"Dark Oak Planks",
			null
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Fence",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Dark Oak Planks",
			"Stick",
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Stick",
			"Dark Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Fence Gate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stick",
			"Dark Oak Planks",
			"Stick",
			"Stick",
			"Dark Oak Planks",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Planks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Dark Oak Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Dark Oak Planks",
			"Dark Oak Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Sign",
		"quantity": 3,
		"recipe": [
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Stairs",
		"quantity": 4,
		"recipe": [
			"Dark Oak Planks",
			null,
			null,
			"Dark Oak Planks",
			"Dark Oak Planks",
			null,
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Trapdoor",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks",
			"Dark Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Dark Oak Wood",
		"quantity": 3,
		"recipe": [
			"Dark Oak Log",
			"Dark Oak Log",
			null,
			"Dark Oak Log",
			"Dark Oak Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Dark Prismarine",
		"quantity": 1,
		"recipe": [
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard",
			"Black Dye",
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard"
		],
		"shapeless": false
	},
	{
		"item": "Dark Prismarine Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Dark Prismarine",
			"Dark Prismarine",
			"Dark Prismarine"
		],
		"shapeless": false
	},
	{
		"item": "Dark Prismarine Stairs",
		"quantity": 4,
		"recipe": [
			"Dark Prismarine",
			null,
			null,
			"Dark Prismarine",
			"Dark Prismarine",
			null,
			"Dark Prismarine",
			"Dark Prismarine",
			"Dark Prismarine"
		],
		"shapeless": false
	},
	{
		"item": "Daylight Detector",
		"quantity": 1,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Nether Quartz",
			"Nether Quartz",
			"Nether Quartz",
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			]
		],
		"shapeless": false
	},
	{
		"item": "Deepslate Brick Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Deepslate Bricks",
			"Deepslate Bricks",
			"Deepslate Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Deepslate Brick Stairs",
		"quantity": 4,
		"recipe": [
			"Deepslate Bricks",
			null,
			null,
			"Deepslate Bricks",
			"Deepslate Bricks",
			null,
			"Deepslate Bricks",
			"Deepslate Bricks",
			"Deepslate Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Deepslate Brick Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Deepslate Bricks",
			"Deepslate Bricks",
			"Deepslate Bricks",
			"Deepslate Bricks",
			"Deepslate Bricks",
			"Deepslate Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Deepslate Bricks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Polished Deepslate",
			"Polished Deepslate",
			null,
			"Polished Deepslate",
			"Polished Deepslate",
			null
		],
		"shapeless": false
	},
	{
		"item": "Detector Rail",
		"quantity": 6,
		"recipe": [
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			"Stone Pressure Plate",
			"Iron Ingot",
			"Iron Ingot",
			"Redstone Dust",
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Diamond",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Diamond",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Diamond Axe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond Axe",
			"Diamond Axe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Diamond Axe",
		"quantity": 1,
		"recipe": [
			"Diamond",
			"Diamond",
			null,
			"Diamond",
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Diamond Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond",
			null,
			"Diamond",
			"Diamond",
			null,
			"Diamond"
		],
		"shapeless": false
	},
	{
		"item": "Diamond Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond Boots",
			"Diamond Boots",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Diamond Chestplate",
		"quantity": 1,
		"recipe": [
			"Diamond",
			null,
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond"
		],
		"shapeless": false
	},
	{
		"item": "Diamond Chestplate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond Chestplate",
			"Diamond Chestplate",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Diamond Helmet",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			null,
			"Diamond"
		],
		"shapeless": false
	},
	{
		"item": "Diamond Helmet",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond Helmet",
			"Diamond Helmet",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Diamond Hoe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond Hoe",
			"Diamond Hoe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Diamond Hoe",
		"quantity": 1,
		"recipe": [
			"Diamond",
			"Diamond",
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Diamond Leggings",
		"quantity": 1,
		"recipe": [
			"Diamond",
			"Diamond",
			"Diamond",
			"Diamond",
			null,
			"Diamond",
			"Diamond",
			null,
			"Diamond"
		],
		"shapeless": false
	},
	{
		"item": "Diamond Leggings",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond Leggings",
			"Diamond Leggings",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Diamond Pickaxe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond Pickaxe",
			"Diamond Pickaxe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Diamond Pickaxe",
		"quantity": 1,
		"recipe": [
			"Diamond",
			"Diamond",
			"Diamond",
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Diamond Shovel",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond Shovel",
			"Diamond Shovel",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Diamond Shovel",
		"quantity": 1,
		"recipe": [
			null,
			"Diamond",
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Diamond Sword",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diamond Sword",
			"Diamond Sword",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Diamond Sword",
		"quantity": 1,
		"recipe": [
			null,
			"Diamond",
			null,
			null,
			"Diamond",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Diorite",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Cobblestone",
			"Nether Quartz",
			null,
			"Nether Quartz",
			"Cobblestone",
			null
		],
		"shapeless": false
	},
	{
		"item": "Diorite Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Diorite",
			"Diorite",
			"Diorite"
		],
		"shapeless": false
	},
	{
		"item": "Diorite Stairs",
		"quantity": 4,
		"recipe": [
			"Diorite",
			null,
			null,
			"Diorite",
			"Diorite",
			null,
			"Diorite",
			"Diorite",
			"Diorite"
		],
		"shapeless": false
	},
	{
		"item": "Diorite Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Diorite",
			"Diorite",
			"Diorite",
			"Diorite",
			"Diorite",
			"Diorite"
		],
		"shapeless": false
	},
	{
		"item": "Dispenser",
		"quantity": 1,
		"recipe": [
			"Cobblestone",
			"Cobblestone",
			"Cobblestone",
			"Cobblestone",
			"Bow",
			"Cobblestone",
			"Cobblestone",
			"Redstone Dust",
			"Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Dried Kelp",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Dried Kelp Block",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Dried Kelp Block",
		"quantity": 1,
		"recipe": [
			"Dried Kelp",
			"Dried Kelp",
			"Dried Kelp",
			"Dried Kelp",
			"Dried Kelp",
			"Dried Kelp",
			"Dried Kelp",
			"Dried Kelp",
			"Dried Kelp"
		],
		"shapeless": false
	},
	{
		"item": "Dripstone Block",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Pointed Dripstone",
			"Pointed Dripstone",
			null,
			"Pointed Dripstone",
			"Pointed Dripstone",
			null
		],
		"shapeless": false
	},
	{
		"item": "Dropper",
		"quantity": 1,
		"recipe": [
			"Cobblestone",
			"Cobblestone",
			"Cobblestone",
			"Cobblestone",
			null,
			"Cobblestone",
			"Cobblestone",
			"Redstone Dust",
			"Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Emerald",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Emerald",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Empty Map",
		"quantity": 1,
		"recipe": [
			"Paper",
			"Paper",
			"Paper",
			"Paper",
			null,
			"Paper",
			"Paper",
			"Paper",
			"Paper"
		],
		"shapeless": false
	},
	{
		"item": "Enchanting Table",
		"quantity": 1,
		"recipe": [
			null,
			"Book",
			null,
			"Diamond",
			"Obsidian",
			"Diamond",
			"Obsidian",
			"Obsidian",
			"Obsidian"
		],
		"shapeless": false
	},
	{
		"item": "End Rod",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Blaze Rod",
			null,
			null,
			"Popped Chorus Fruit",
			null
		],
		"shapeless": false
	},
	{
		"item": "End Stone Brick Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"End Stone Bricks",
			"End Stone Bricks",
			"End Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "End Stone Brick Stairs",
		"quantity": 4,
		"recipe": [
			"End Stone Bricks",
			null,
			null,
			"End Stone Bricks",
			"End Stone Bricks",
			null,
			"End Stone Bricks",
			"End Stone Bricks",
			"End Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "End Stone Brick Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"End Stone Bricks",
			"End Stone Bricks",
			"End Stone Bricks",
			"End Stone Bricks",
			"End Stone Bricks",
			"End Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "End Stone Bricks",
		"quantity": 4,
		"recipe": [
			"End Stone",
			"End Stone",
			null,
			"End Stone",
			"End Stone",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Ender Chest",
		"quantity": 1,
		"recipe": [
			"Obsidian",
			"Obsidian",
			"Obsidian",
			"Obsidian",
			"Eye of Ender",
			"Obsidian",
			"Obsidian",
			"Obsidian",
			"Obsidian"
		],
		"shapeless": false
	},
	{
		"item": "Exposed Cut Copper",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Exposed Copper",
			"Exposed Copper",
			null,
			"Exposed Copper",
			"Exposed Copper",
			null
		],
		"shapeless": false
	},
	{
		"item": "Exposed Cut Copper Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Exposed Cut Copper",
			"Exposed Cut Copper",
			"Exposed Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Exposed Cut Copper Stairs",
		"quantity": 4,
		"recipe": [
			"Exposed Cut Copper",
			null,
			null,
			"Exposed Cut Copper",
			"Exposed Cut Copper",
			null,
			"Exposed Cut Copper",
			"Exposed Cut Copper",
			"Exposed Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Eye of Ender",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Blaze Powder",
			"Ender Pearl",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Fermented Spider Eye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Brown Mushroom",
			"Sugar",
			null,
			null,
			"Spider Eye",
			null
		],
		"shapeless": true
	},
	{
		"item": "Fire Charge",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Blaze Powder",
			"Coal",
			null,
			null,
			"Gunpowder",
			null
		],
		"shapeless": true
	},
	{
		"item": "Fire Charge",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Blaze Powder",
			"Charcoal",
			null,
			null,
			"Gunpowder",
			null
		],
		"shapeless": true
	},
	{
		"item": "Firework Rocket",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Paper",
			"Gunpowder",
			[
				null,
				"Gunpowder"
			],
			[
				null,
				"Gunpowder"
			],
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Firework Rocket",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Firework Star",
			"Paper",
			"Gunpowder",
			[
				null,
				"Gunpowder"
			],
			[
				null,
				"Gunpowder"
			],
			null
		],
		"shapeless": true
	},
	{
		"item": "Firework Star",
		"quantity": 1,
		"recipe": [
			"Gunpowder",
			[
				"White Dye",
				"Orange Dye",
				"Magenta Dye",
				"Light Blue Dye",
				"Yellow Dye",
				"Lime Dye",
				"Pink Dye",
				"Gray Dye",
				"Light Gray Dye",
				"Cyan Dye",
				"Purple Dye",
				"Blue Dye",
				"Brown Dye",
				"Green Dye",
				"Red Dye",
				"Black Dye"
			],
			[
				null,
				"White Dye",
				"Orange Dye",
				"Magenta Dye",
				"Light Blue Dye",
				"Yellow Dye",
				"Lime Dye",
				"Pink Dye",
				"Gray Dye",
				"Light Gray Dye",
				"Cyan Dye",
				"Purple Dye",
				"Blue Dye",
				"Brown Dye",
				"Green Dye",
				"Red Dye",
				"Black Dye",
				"Skeleton Skull",
				"Wither Skeleton Skull",
				"Zombie Head",
				"Player Head",
				"Creeper Head",
				"Dragon Head",
				"Gold Nugget",
				"Feather",
				"Fire Charge"
			],
			[
				null,
				"White Dye",
				"Orange Dye",
				"Magenta Dye",
				"Light Blue Dye",
				"Yellow Dye",
				"Lime Dye",
				"Pink Dye",
				"Gray Dye",
				"Light Gray Dye",
				"Cyan Dye",
				"Purple Dye",
				"Blue Dye",
				"Brown Dye",
				"Green Dye",
				"Red Dye",
				"Black Dye",
				"Glowstone"
			],
			[
				null,
				"White Dye",
				"Orange Dye",
				"Magenta Dye",
				"Light Blue Dye",
				"Yellow Dye",
				"Lime Dye",
				"Pink Dye",
				"Gray Dye",
				"Light Gray Dye",
				"Cyan Dye",
				"Purple Dye",
				"Blue Dye",
				"Brown Dye",
				"Green Dye",
				"Red Dye",
				"Black Dye",
				"Diamond"
			],
			[
				null,
				"White Dye",
				"Orange Dye",
				"Magenta Dye",
				"Light Blue Dye",
				"Yellow Dye",
				"Lime Dye",
				"Pink Dye",
				"Gray Dye",
				"Light Gray Dye",
				"Cyan Dye",
				"Purple Dye",
				"Blue Dye",
				"Brown Dye",
				"Green Dye",
				"Red Dye",
				"Black Dye"
			],
			[
				null,
				"White Dye",
				"Orange Dye",
				"Magenta Dye",
				"Light Blue Dye",
				"Yellow Dye",
				"Lime Dye",
				"Pink Dye",
				"Gray Dye",
				"Light Gray Dye",
				"Cyan Dye",
				"Purple Dye",
				"Blue Dye",
				"Brown Dye",
				"Green Dye",
				"Red Dye",
				"Black Dye"
			],
			[
				null,
				"White Dye",
				"Orange Dye",
				"Magenta Dye",
				"Light Blue Dye",
				"Yellow Dye",
				"Lime Dye",
				"Pink Dye",
				"Gray Dye",
				"Light Gray Dye",
				"Cyan Dye",
				"Purple Dye",
				"Blue Dye",
				"Brown Dye",
				"Green Dye",
				"Red Dye",
				"Black Dye"
			],
			[
				null,
				"White Dye",
				"Orange Dye",
				"Magenta Dye",
				"Light Blue Dye",
				"Yellow Dye",
				"Lime Dye",
				"Pink Dye",
				"Gray Dye",
				"Light Gray Dye",
				"Cyan Dye",
				"Purple Dye",
				"Blue Dye",
				"Brown Dye",
				"Green Dye",
				"Red Dye",
				"Black Dye"
			]
		],
		"shapeless": true
	},
	{
		"item": "Firework Star",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Firework Star",
			[
				"White Dye",
				"Orange Dye",
				"Magenta Dye",
				"Light Blue Dye",
				"Yellow Dye",
				"Lime Dye",
				"Pink Dye",
				"Gray Dye",
				"Light Gray Dye",
				"Cyan Dye",
				"Purple Dye",
				"Blue Dye",
				"Brown Dye",
				"Green Dye",
				"Red Dye",
				"Black Dye"
			],
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Fishing Rod",
		"quantity": 1,
		"recipe": [
			null,
			null,
			"Stick",
			null,
			"Stick",
			"String",
			"Stick",
			null,
			"String"
		],
		"shapeless": false
	},
	{
		"item": "Fishing Rod",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Fishing Rod",
			"Fishing Rod",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Fletching Table",
		"quantity": 1,
		"recipe": [
			"Flint",
			"Flint",
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Flint and Steel",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Ingot",
			"Flint",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Flint and Steel",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Flint and Steel",
			"Flint and Steel",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Flower Pot",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Brick",
			null,
			"Brick",
			null,
			"Brick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Furnace",
		"quantity": 1,
		"recipe": [
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			null,
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			]
		],
		"shapeless": false
	},
	{
		"item": "Glass Bottle",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Glass",
			null,
			"Glass",
			null,
			"Glass",
			null
		],
		"shapeless": false
	},
	{
		"item": "Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Glistering Melon Slice",
		"quantity": 1,
		"recipe": [
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Melon Slice",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget"
		],
		"shapeless": false
	},
	{
		"item": "Glow Item Frame",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Glow Ink Sac",
			"Item Frame",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Glowstone",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Glowstone Dust",
			"Glowstone Dust",
			null,
			"Glowstone Dust",
			"Glowstone Dust",
			null
		],
		"shapeless": false
	},
	{
		"item": "Gold Ingot",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Gold",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Gold Ingot",
		"quantity": 1,
		"recipe": [
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget"
		],
		"shapeless": false
	},
	{
		"item": "Gold Nugget",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Gold Ingot",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Golden Apple",
		"quantity": 1,
		"recipe": [
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Apple",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Golden Axe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Golden Axe",
			"Golden Axe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Golden Axe",
		"quantity": 1,
		"recipe": [
			"Gold Ingot",
			"Gold Ingot",
			null,
			"Gold Ingot",
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Golden Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Gold Ingot",
			null,
			"Gold Ingot",
			"Gold Ingot",
			null,
			"Gold Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Golden Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Golden Boots",
			"Golden Boots",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Golden Carrot",
		"quantity": 1,
		"recipe": [
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Carrot",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget",
			"Gold Nugget"
		],
		"shapeless": false
	},
	{
		"item": "Golden Chestplate",
		"quantity": 1,
		"recipe": [
			"Gold Ingot",
			null,
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Golden Chestplate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Golden Chestplate",
			"Golden Chestplate",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Golden Helmet",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			null,
			"Gold Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Golden Helmet",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Golden Helmet",
			"Golden Helmet",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Golden Hoe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Golden Hoe",
			"Golden Hoe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Golden Hoe",
		"quantity": 1,
		"recipe": [
			"Gold Ingot",
			"Gold Ingot",
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Golden Leggings",
		"quantity": 1,
		"recipe": [
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			null,
			"Gold Ingot",
			"Gold Ingot",
			null,
			"Gold Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Golden Leggings",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Golden Leggings",
			"Golden Leggings",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Golden Pickaxe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Golden Pickaxe",
			"Golden Pickaxe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Golden Pickaxe",
		"quantity": 1,
		"recipe": [
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Golden Shovel",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Golden Shovel",
			"Golden Shovel",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Golden Shovel",
		"quantity": 1,
		"recipe": [
			null,
			"Gold Ingot",
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Golden Sword",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Golden Sword",
			"Golden Sword",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Golden Sword",
		"quantity": 1,
		"recipe": [
			null,
			"Gold Ingot",
			null,
			null,
			"Gold Ingot",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Granite",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Diorite",
			"Nether Quartz",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Granite Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Granite",
			"Granite",
			"Granite"
		],
		"shapeless": false
	},
	{
		"item": "Granite Stairs",
		"quantity": 4,
		"recipe": [
			"Granite",
			null,
			null,
			"Granite",
			"Granite",
			null,
			"Granite",
			"Granite",
			"Granite"
		],
		"shapeless": false
	},
	{
		"item": "Granite Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Granite",
			"Granite",
			"Granite",
			"Granite",
			"Granite",
			"Granite"
		],
		"shapeless": false
	},
	{
		"item": "Gray Banner",
		"quantity": 1,
		"recipe": [
			"Gray Wool",
			"Gray Wool",
			"Gray Wool",
			"Gray Wool",
			"Gray Wool",
			"Gray Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Gray Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Gray Banner",
			"Gray Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Gray Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Gray Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Gray Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Gray Wool",
			"Gray Wool",
			"Gray Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Gray Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Gray Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Gray Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Gray Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Gray Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Gray Wool",
			"Gray Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Gray Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Gray Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Gray Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Black Dye",
			"White Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Gray Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Gray Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Gray Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Gray Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Gray Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Gray Stained Glass",
			"Gray Stained Glass",
			"Gray Stained Glass",
			"Gray Stained Glass",
			"Gray Stained Glass",
			"Gray Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Gray Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Gray Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Gray Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Gray Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Gray Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Gray Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Green Banner",
		"quantity": 1,
		"recipe": [
			"Green Wool",
			"Green Wool",
			"Green Wool",
			"Green Wool",
			"Green Wool",
			"Green Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Green Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Green Banner",
			"Green Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Green Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Green Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Green Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Green Wool",
			"Green Wool",
			"Green Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Green Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Green Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Green Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Green Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Green Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Green Wool",
			"Green Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Green Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Green Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Green Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Green Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Green Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Green Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Green Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Green Stained Glass",
			"Green Stained Glass",
			"Green Stained Glass",
			"Green Stained Glass",
			"Green Stained Glass",
			"Green Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Green Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Green Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Green Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Green Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Green Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Green Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Grindstone",
		"quantity": 1,
		"recipe": [
			"Stick",
			"Stone Slab",
			"Stick",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Hay Bale",
		"quantity": 1,
		"recipe": [
			"Wheat",
			"Wheat",
			"Wheat",
			"Wheat",
			"Wheat",
			"Wheat",
			"Wheat",
			"Wheat",
			"Wheat"
		],
		"shapeless": false
	},
	{
		"item": "Heavy Weighted Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Ingot",
			"Iron Ingot",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Honey Block",
		"quantity": 1,
		"recipe": [
			"Honey Bottle",
			"Honey Bottle",
			null,
			"Honey Bottle",
			"Honey Bottle",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Honey Bottle",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Glass Bottle",
			"Glass Bottle",
			"Honey Block",
			"Glass Bottle",
			"Glass Bottle",
			null
		],
		"shapeless": true
	},
	{
		"item": "Honeycomb Block",
		"quantity": 1,
		"recipe": [
			"Honeycomb",
			"Honeycomb",
			null,
			"Honeycomb",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Hopper",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			"Chest",
			"Iron Ingot",
			null,
			"Iron Ingot",
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Axe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Axe",
			"Iron Axe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Iron Axe",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Bars",
		"quantity": 16,
		"recipe": [
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Iron Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Boots",
			"Iron Boots",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Iron Chestplate",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Iron Chestplate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Chestplate",
			"Iron Chestplate",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Iron Door",
		"quantity": 3,
		"recipe": [
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Helmet",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Iron Helmet",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Helmet",
			"Iron Helmet",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Iron Hoe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Hoe",
			"Iron Hoe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Iron Hoe",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			"Iron Ingot",
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Ingot",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Iron",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Ingot",
		"quantity": 1,
		"recipe": [
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget"
		],
		"shapeless": false
	},
	{
		"item": "Iron Leggings",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Iron Leggings",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Leggings",
			"Iron Leggings",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Iron Nugget",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Iron Ingot",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Pickaxe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Pickaxe",
			"Iron Pickaxe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Iron Pickaxe",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Shovel",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Shovel",
			"Iron Shovel",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Iron Shovel",
		"quantity": 1,
		"recipe": [
			null,
			"Iron Ingot",
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Sword",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Sword",
			"Iron Sword",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Iron Sword",
		"quantity": 1,
		"recipe": [
			null,
			"Iron Ingot",
			null,
			null,
			"Iron Ingot",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Iron Trapdoor",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			null
		],
		"shapeless": false
	},
	{
		"item": "Item Frame",
		"quantity": 1,
		"recipe": [
			"Stick",
			"Stick",
			"Stick",
			"Stick",
			"Leather",
			"Stick",
			"Stick",
			"Stick",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Jack o'Lantern",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Carved Pumpkin",
			null,
			null,
			"Torch",
			null
		],
		"shapeless": false
	},
	{
		"item": "Jukebox",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			"Diamond",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Jungle Boat",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Jungle Planks",
			null,
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks"
		],
		"shapeless": false
	},
	{
		"item": "Jungle Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Jungle Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Jungle Door",
		"quantity": 3,
		"recipe": [
			"Jungle Planks",
			"Jungle Planks",
			null,
			"Jungle Planks",
			"Jungle Planks",
			null,
			"Jungle Planks",
			"Jungle Planks",
			null
		],
		"shapeless": false
	},
	{
		"item": "Jungle Fence",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Jungle Planks",
			"Stick",
			"Jungle Planks",
			"Jungle Planks",
			"Stick",
			"Jungle Planks"
		],
		"shapeless": false
	},
	{
		"item": "Jungle Fence Gate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stick",
			"Jungle Planks",
			"Stick",
			"Stick",
			"Jungle Planks",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Jungle Planks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Jungle Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Jungle Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Jungle Planks",
			"Jungle Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Jungle Sign",
		"quantity": 3,
		"recipe": [
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Jungle Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks"
		],
		"shapeless": false
	},
	{
		"item": "Jungle Stairs",
		"quantity": 4,
		"recipe": [
			"Jungle Planks",
			null,
			null,
			"Jungle Planks",
			"Jungle Planks",
			null,
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks"
		],
		"shapeless": false
	},
	{
		"item": "Jungle Trapdoor",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks",
			"Jungle Planks"
		],
		"shapeless": false
	},
	{
		"item": "Jungle Wood",
		"quantity": 3,
		"recipe": [
			"Jungle Log",
			"Jungle Log",
			null,
			"Jungle Log",
			"Jungle Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Ladder",
		"quantity": 3,
		"recipe": [
			"Stick",
			null,
			"Stick",
			"Stick",
			"Stick",
			"Stick",
			"Stick",
			null,
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Lantern",
		"quantity": 1,
		"recipe": [
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Torch",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget"
		],
		"shapeless": false
	},
	{
		"item": "Lapis Lazuli",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Lapis Lazuli",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Lead",
		"quantity": 2,
		"recipe": [
			"String",
			"String",
			null,
			"String",
			"Slimeball",
			null,
			null,
			null,
			"String"
		],
		"shapeless": false
	},
	{
		"item": "Leather",
		"quantity": 1,
		"recipe": [
			"Rabbit Hide",
			"Rabbit Hide",
			null,
			"Rabbit Hide",
			"Rabbit Hide",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Leather Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Leather",
			null,
			"Leather",
			"Leather",
			null,
			"Leather"
		],
		"shapeless": false
	},
	{
		"item": "Leather Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Leather Boots",
			"Leather Boots",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Leather Cap",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Leather",
			"Leather",
			"Leather",
			"Leather",
			null,
			"Leather"
		],
		"shapeless": false
	},
	{
		"item": "Leather Cap",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Leather Cap",
			"Leather Cap",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Leather Horse Armor",
		"quantity": 1,
		"recipe": [
			"Leather",
			null,
			"Leather",
			"Leather",
			"Leather",
			"Leather",
			"Leather",
			null,
			"Leather"
		],
		"shapeless": false
	},
	{
		"item": "Leather Pants",
		"quantity": 1,
		"recipe": [
			"Leather",
			"Leather",
			"Leather",
			"Leather",
			null,
			"Leather",
			"Leather",
			null,
			"Leather"
		],
		"shapeless": false
	},
	{
		"item": "Leather Pants",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Leather Pants",
			"Leather Pants",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Leather Tunic",
		"quantity": 1,
		"recipe": [
			"Leather",
			null,
			"Leather",
			"Leather",
			"Leather",
			"Leather",
			"Leather",
			"Leather",
			"Leather"
		],
		"shapeless": false
	},
	{
		"item": "Leather Tunic",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Leather Tunic",
			"Leather Tunic",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Lectern",
		"quantity": 1,
		"recipe": [
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			null,
			"Bookshelf",
			null,
			null,
			[
				"Oak Slab",
				"Spruce Slab",
				"Birch Slab",
				"Jungle Slab",
				"Acacia Slab",
				"Dark Oak Slab",
				"Crimson Slab",
				"Warped Slab"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Lever",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Stick",
			null,
			null,
			"Cobblestone",
			null
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Banner",
		"quantity": 1,
		"recipe": [
			"Light Blue Wool",
			"Light Blue Wool",
			"Light Blue Wool",
			"Light Blue Wool",
			"Light Blue Wool",
			"Light Blue Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Light Blue Banner",
			"Light Blue Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Blue Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Light Blue Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Blue Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Light Blue Wool",
			"Light Blue Wool",
			"Light Blue Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Light Blue Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Blue Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Light Blue Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Light Blue Wool",
			"Light Blue Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Light Blue Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Light Blue Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Blue Orchid",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Blue Dye",
			"White Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Blue Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Light Blue Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Blue Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Light Blue Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Light Blue Stained Glass",
			"Light Blue Stained Glass",
			"Light Blue Stained Glass",
			"Light Blue Stained Glass",
			"Light Blue Stained Glass",
			"Light Blue Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Light Blue Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Light Blue Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Light Blue Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Light Blue Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Gray Banner",
		"quantity": 1,
		"recipe": [
			"Light Gray Wool",
			"Light Gray Wool",
			"Light Gray Wool",
			"Light Gray Wool",
			"Light Gray Wool",
			"Light Gray Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Light Gray Banner",
			"Light Gray Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Gray Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Light Gray Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Gray Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Light Gray Wool",
			"Light Gray Wool",
			"Light Gray Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Light Gray Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Gray Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Light Gray Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Light Gray Wool",
			"Light Gray Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Light Gray Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Light Gray Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Azure Bluet",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Oxeye Daisy",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"White Tulip",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Dye",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Black Dye",
			"White Dye",
			null,
			null,
			"White Dye",
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Gray Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Gray Dye",
			"White Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Gray Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Light Gray Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Gray Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Light Gray Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Light Gray Stained Glass",
			"Light Gray Stained Glass",
			"Light Gray Stained Glass",
			"Light Gray Stained Glass",
			"Light Gray Stained Glass",
			"Light Gray Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Light Gray Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Light Gray Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Light Gray Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Light Gray Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Light Weighted Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Gold Ingot",
			"Gold Ingot",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Lightning Rod",
		"quantity": 1,
		"recipe": [
			null,
			"Copper Ingot",
			null,
			null,
			"Copper Ingot",
			null,
			null,
			"Copper Ingot",
			null
		],
		"shapeless": false
	},
	{
		"item": "Lime Banner",
		"quantity": 1,
		"recipe": [
			"Lime Wool",
			"Lime Wool",
			"Lime Wool",
			"Lime Wool",
			"Lime Wool",
			"Lime Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Lime Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Lime Banner",
			"Lime Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Lime Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Lime Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Lime Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Lime Wool",
			"Lime Wool",
			"Lime Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Lime Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Lime Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Lime Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Lime Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Lime Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Lime Wool",
			"Lime Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Lime Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Lime Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Lime Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Green Dye",
			"White Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Lime Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Lime Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Lime Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Lime Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Lime Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Lime Stained Glass",
			"Lime Stained Glass",
			"Lime Stained Glass",
			"Lime Stained Glass",
			"Lime Stained Glass",
			"Lime Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Lime Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Lime Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Lime Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Lime Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Lime Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Lime Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Lodestone",
		"quantity": 1,
		"recipe": [
			"Chiseled Stone Bricks",
			"Chiseled Stone Bricks",
			"Chiseled Stone Bricks",
			"Chiseled Stone Bricks",
			"Netherite Ingot",
			"Chiseled Stone Bricks",
			"Chiseled Stone Bricks",
			"Chiseled Stone Bricks",
			"Chiseled Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Loom",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"String",
			"String",
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Magenta Banner",
		"quantity": 1,
		"recipe": [
			"Magenta Wool",
			"Magenta Wool",
			"Magenta Wool",
			"Magenta Wool",
			"Magenta Wool",
			"Magenta Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Magenta Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Magenta Banner",
			"Magenta Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Magenta Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Magenta Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Magenta Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Magenta Wool",
			"Magenta Wool",
			"Magenta Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Magenta Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Magenta Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Magenta Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Magenta Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Magenta Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Magenta Wool",
			"Magenta Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Magenta Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Magenta Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Magenta Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Allium",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Magenta Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			null,
			"Lilac",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Magenta Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Purple Dye",
			"Pink Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Magenta Dye",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Blue Dye",
			"Red Dye",
			null,
			null,
			"Pink Dye",
			null
		],
		"shapeless": true
	},
	{
		"item": "Magenta Dye",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Blue Dye",
			"Red Dye",
			null,
			"Red Dye",
			"White Dye",
			null
		],
		"shapeless": true
	},
	{
		"item": "Magenta Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Magenta Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Magenta Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Magenta Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Magenta Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Magenta Stained Glass",
			"Magenta Stained Glass",
			"Magenta Stained Glass",
			"Magenta Stained Glass",
			"Magenta Stained Glass",
			"Magenta Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Magenta Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Magenta Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Magenta Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Magenta Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Magenta Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Magenta Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Magma Cream",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Blaze Powder",
			"Slimeball",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Melon",
		"quantity": 1,
		"recipe": [
			"Melon Slice",
			"Melon Slice",
			"Melon Slice",
			"Melon Slice",
			"Melon Slice",
			"Melon Slice",
			"Melon Slice",
			"Melon Slice",
			"Melon Slice"
		],
		"shapeless": false
	},
	{
		"item": "Melon Seeds",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Melon Slice",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Minecart",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot",
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Minecart with Chest",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Chest",
			"Minecart",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Minecart with Furnace",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Furnace",
			"Minecart",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Minecart with Hopper",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Hopper",
			"Minecart",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Minecart with TNT",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"TNT",
			"Minecart",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Moss Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Moss Block",
			"Moss Block",
			null
		],
		"shapeless": false
	},
	{
		"item": "Mossy Cobblestone",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Cobblestone",
			"Vines",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Mossy Cobblestone",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Cobblestone",
			"Moss Block",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Mossy Cobblestone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Mossy Cobblestone",
			"Mossy Cobblestone",
			"Mossy Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Mossy Cobblestone Stairs",
		"quantity": 4,
		"recipe": [
			"Mossy Cobblestone",
			null,
			null,
			"Mossy Cobblestone",
			"Mossy Cobblestone",
			null,
			"Mossy Cobblestone",
			"Mossy Cobblestone",
			"Mossy Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Mossy Cobblestone Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Mossy Cobblestone",
			"Mossy Cobblestone",
			"Mossy Cobblestone",
			"Mossy Cobblestone",
			"Mossy Cobblestone",
			"Mossy Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Mossy Stone Brick Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Mossy Stone Bricks",
			"Mossy Stone Bricks",
			"Mossy Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Mossy Stone Brick Stairs",
		"quantity": 4,
		"recipe": [
			"Mossy Stone Bricks",
			null,
			null,
			"Mossy Stone Bricks",
			"Mossy Stone Bricks",
			null,
			"Mossy Stone Bricks",
			"Mossy Stone Bricks",
			"Mossy Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Mossy Stone Brick Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Mossy Stone Bricks",
			"Mossy Stone Bricks",
			"Mossy Stone Bricks",
			"Mossy Stone Bricks",
			"Mossy Stone Bricks",
			"Mossy Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Mossy Stone Bricks",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stone Bricks",
			"Vines",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Mossy Stone Bricks",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stone Bricks",
			"Moss Block",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Mushroom Stew",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Red Mushroom",
			"Brown Mushroom",
			null,
			null,
			"Bowl",
			null
		],
		"shapeless": true
	},
	{
		"item": "Nether Brick Fence",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Nether Bricks",
			"Nether Brick",
			"Nether Bricks",
			"Nether Bricks",
			"Nether Brick",
			"Nether Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Nether Brick Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Nether Bricks",
			"Nether Bricks",
			"Nether Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Nether Brick Stairs",
		"quantity": 4,
		"recipe": [
			"Nether Bricks",
			null,
			null,
			"Nether Bricks",
			"Nether Bricks",
			null,
			"Nether Bricks",
			"Nether Bricks",
			"Nether Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Nether Brick Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Nether Bricks",
			"Nether Bricks",
			"Nether Bricks",
			"Nether Bricks",
			"Nether Bricks",
			"Nether Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Nether Bricks",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Nether Brick",
			"Nether Brick",
			null,
			"Nether Brick",
			"Nether Brick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Nether Wart Block",
		"quantity": 1,
		"recipe": [
			"Nether Wart",
			"Nether Wart",
			"Nether Wart",
			"Nether Wart",
			"Nether Wart",
			"Nether Wart",
			"Nether Wart",
			"Nether Wart",
			"Nether Wart"
		],
		"shapeless": false
	},
	{
		"item": "Netherite Axe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Netherite Axe",
			"Netherite Axe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Netherite Boots",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Netherite Boots",
			"Netherite Boots",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Netherite Chestplate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Netherite Chestplate",
			"Netherite Chestplate",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Netherite Helmet",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Netherite Helmet",
			"Netherite Helmet",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Netherite Hoe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Netherite Hoe",
			"Netherite Hoe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Netherite Ingot",
		"quantity": 1,
		"recipe": [
			"Netherite Scrap",
			"Netherite Scrap",
			"Netherite Scrap",
			"Netherite Scrap",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			"Gold Ingot",
			null
		],
		"shapeless": true
	},
	{
		"item": "Netherite Ingot",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Netherite",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Netherite Leggings",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Netherite Leggings",
			"Netherite Leggings",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Netherite Pickaxe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Netherite Pickaxe",
			"Netherite Pickaxe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Netherite Shovel",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Netherite Shovel",
			"Netherite Shovel",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Netherite Sword",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Netherite Sword",
			"Netherite Sword",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Note Block",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			"Redstone Dust",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Oak Boat",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Oak Planks",
			null,
			"Oak Planks",
			"Oak Planks",
			"Oak Planks",
			"Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Oak Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Oak Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Oak Door",
		"quantity": 3,
		"recipe": [
			"Oak Planks",
			"Oak Planks",
			null,
			"Oak Planks",
			"Oak Planks",
			null,
			"Oak Planks",
			"Oak Planks",
			null
		],
		"shapeless": false
	},
	{
		"item": "Oak Fence",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Oak Planks",
			"Stick",
			"Oak Planks",
			"Oak Planks",
			"Stick",
			"Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Oak Fence Gate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stick",
			"Oak Planks",
			"Stick",
			"Stick",
			"Oak Planks",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Oak Planks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Oak Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Oak Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Oak Planks",
			"Oak Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Oak Sign",
		"quantity": 3,
		"recipe": [
			"Oak Planks",
			"Oak Planks",
			"Oak Planks",
			"Oak Planks",
			"Oak Planks",
			"Oak Planks",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Oak Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Oak Planks",
			"Oak Planks",
			"Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Oak Stairs",
		"quantity": 4,
		"recipe": [
			"Oak Planks",
			null,
			null,
			"Oak Planks",
			"Oak Planks",
			null,
			"Oak Planks",
			"Oak Planks",
			"Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Oak Trapdoor",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Oak Planks",
			"Oak Planks",
			"Oak Planks",
			"Oak Planks",
			"Oak Planks",
			"Oak Planks"
		],
		"shapeless": false
	},
	{
		"item": "Oak Wood",
		"quantity": 3,
		"recipe": [
			"Oak Log",
			"Oak Log",
			null,
			"Oak Log",
			"Oak Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Observer",
		"quantity": 1,
		"recipe": [
			"Cobblestone",
			"Cobblestone",
			"Cobblestone",
			"Redstone Dust",
			"Redstone Dust",
			"Nether Quartz",
			"Cobblestone",
			"Cobblestone",
			"Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Ocean Explorer Map",
		"quantity": 2,
		"recipe": [
			"Empty Map",
			"Empty Map",
			"Empty Map",
			"Ocean Explorer Map",
			"Empty Map",
			"Empty Map",
			"Empty Map",
			"Empty Map",
			"Empty Map"
		],
		"shapeless": true
	},
	{
		"item": "Ocean Explorer Map",
		"quantity": 5,
		"recipe": [
			"Empty Map",
			"Empty Map",
			null,
			"Ocean Explorer Map",
			"Empty Map",
			null,
			"Empty Map",
			"Empty Map",
			"Empty Map"
		],
		"shapeless": true
	},
	{
		"item": "Orange Banner",
		"quantity": 1,
		"recipe": [
			"Orange Wool",
			"Orange Wool",
			"Orange Wool",
			"Orange Wool",
			"Orange Wool",
			"Orange Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Orange Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Orange Banner",
			"Orange Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Orange Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Orange Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Orange Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Orange Wool",
			"Orange Wool",
			"Orange Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Orange Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Orange Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Orange Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Orange Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Orange Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Orange Wool",
			"Orange Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Orange Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Orange Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Orange Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Orange Tulip",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Orange Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Red Dye",
			"Yellow Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Orange Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Orange Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Orange Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Orange Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Orange Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Orange Stained Glass",
			"Orange Stained Glass",
			"Orange Stained Glass",
			"Orange Stained Glass",
			"Orange Stained Glass",
			"Orange Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Orange Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Orange Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Orange Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Orange Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Orange Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Orange Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Oxidized Cut Copper",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Oxidized Copper",
			"Oxidized Copper",
			null,
			"Oxidized Copper",
			"Oxidized Copper",
			null
		],
		"shapeless": false
	},
	{
		"item": "Oxidized Cut Copper Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Oxidized Cut Copper",
			"Oxidized Cut Copper",
			"Oxidized Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Oxidized Cut Copper Stairs",
		"quantity": 4,
		"recipe": [
			"Oxidized Cut Copper",
			null,
			null,
			"Oxidized Cut Copper",
			"Oxidized Cut Copper",
			null,
			"Oxidized Cut Copper",
			"Oxidized Cut Copper",
			"Oxidized Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Packed Ice",
		"quantity": 1,
		"recipe": [
			"Ice",
			"Ice",
			"Ice",
			"Ice",
			"Ice",
			"Ice",
			"Ice",
			"Ice",
			"Ice"
		],
		"shapeless": false
	},
	{
		"item": "Painting",
		"quantity": 1,
		"recipe": [
			"Stick",
			"Stick",
			"Stick",
			"Stick",
			[
				"White Wool",
				"Orange Wool",
				"Magenta Wool",
				"Light Blue Wool",
				"Yellow Wool",
				"Lime Wool",
				"Pink Wool",
				"Gray Wool",
				"Light Gray Wool",
				"Cyan Wool",
				"Purple Wool",
				"Blue Wool",
				"Brown Wool",
				"Green Wool",
				"Red Wool",
				"Black Wool"
			],
			"Stick",
			"Stick",
			"Stick",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Paper",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Sugar Cane",
			"Sugar Cane",
			"Sugar Cane",
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Pink Banner",
		"quantity": 1,
		"recipe": [
			"Pink Wool",
			"Pink Wool",
			"Pink Wool",
			"Pink Wool",
			"Pink Wool",
			"Pink Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Pink Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Pink Banner",
			"Pink Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Pink Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Pink Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Pink Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Pink Wool",
			"Pink Wool",
			"Pink Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Pink Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Pink Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Pink Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Pink Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Pink Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Pink Wool",
			"Pink Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Pink Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Pink Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Pink Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			null,
			"Peony",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Pink Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Pink Tulip",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Pink Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Red Dye",
			"White Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Pink Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Pink Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Pink Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Pink Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Pink Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Pink Stained Glass",
			"Pink Stained Glass",
			"Pink Stained Glass",
			"Pink Stained Glass",
			"Pink Stained Glass",
			"Pink Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Pink Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Pink Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Pink Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Pink Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Pink Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Pink Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Piston",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			"Cobblestone",
			"Iron Ingot",
			"Cobblestone",
			"Cobblestone",
			"Redstone Dust",
			"Cobblestone"
		],
		"shapeless": false
	},
	{
		"item": "Polished Andesite",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Andesite",
			"Andesite",
			null,
			"Andesite",
			"Andesite",
			null
		],
		"shapeless": false
	},
	{
		"item": "Polished Andesite Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Polished Andesite",
			"Polished Andesite",
			"Polished Andesite"
		],
		"shapeless": false
	},
	{
		"item": "Polished Andesite Stairs",
		"quantity": 4,
		"recipe": [
			"Polished Andesite",
			null,
			null,
			"Polished Andesite",
			"Polished Andesite",
			null,
			"Polished Andesite",
			"Polished Andesite",
			"Polished Andesite"
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Blackstone",
			"Blackstone",
			null,
			"Blackstone",
			"Blackstone",
			null
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone Brick Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone Brick Stairs",
		"quantity": 4,
		"recipe": [
			"Polished Blackstone Bricks",
			null,
			null,
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks",
			null,
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone Brick Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks",
			"Polished Blackstone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone Bricks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Polished Blackstone",
			"Polished Blackstone",
			null,
			"Polished Blackstone",
			"Polished Blackstone",
			null
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Polished Blackstone",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Polished Blackstone",
			"Polished Blackstone",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Polished Blackstone",
			"Polished Blackstone",
			"Polished Blackstone"
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone Stairs",
		"quantity": 4,
		"recipe": [
			"Polished Blackstone",
			null,
			null,
			"Polished Blackstone",
			"Polished Blackstone",
			null,
			"Polished Blackstone",
			"Polished Blackstone",
			"Polished Blackstone"
		],
		"shapeless": false
	},
	{
		"item": "Polished Blackstone Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Polished Blackstone",
			"Polished Blackstone",
			"Polished Blackstone",
			"Polished Blackstone",
			"Polished Blackstone",
			"Polished Blackstone"
		],
		"shapeless": false
	},
	{
		"item": "Polished Deepslate",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Cobbled Deepslate",
			"Cobbled Deepslate",
			null,
			"Cobbled Deepslate",
			"Cobbled Deepslate",
			null
		],
		"shapeless": false
	},
	{
		"item": "Polished Deepslate Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Polished Deepslate",
			"Polished Deepslate",
			"Polished Deepslate"
		],
		"shapeless": false
	},
	{
		"item": "Polished Deepslate Stairs",
		"quantity": 4,
		"recipe": [
			"Polished Deepslate",
			null,
			null,
			"Polished Deepslate",
			"Polished Deepslate",
			null,
			"Polished Deepslate",
			"Polished Deepslate",
			"Polished Deepslate"
		],
		"shapeless": false
	},
	{
		"item": "Polished Deepslate Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Polished Deepslate",
			"Polished Deepslate",
			"Polished Deepslate",
			"Polished Deepslate",
			"Polished Deepslate",
			"Polished Deepslate"
		],
		"shapeless": false
	},
	{
		"item": "Polished Diorite",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Diorite",
			"Diorite",
			null,
			"Diorite",
			"Diorite",
			null
		],
		"shapeless": false
	},
	{
		"item": "Polished Diorite Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Polished Diorite",
			"Polished Diorite",
			"Polished Diorite"
		],
		"shapeless": false
	},
	{
		"item": "Polished Diorite Stairs",
		"quantity": 4,
		"recipe": [
			"Polished Diorite",
			null,
			null,
			"Polished Diorite",
			"Polished Diorite",
			null,
			"Polished Diorite",
			"Polished Diorite",
			"Polished Diorite"
		],
		"shapeless": false
	},
	{
		"item": "Polished Granite",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Granite",
			"Granite",
			null,
			"Granite",
			"Granite",
			null
		],
		"shapeless": false
	},
	{
		"item": "Polished Granite Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Polished Granite",
			"Polished Granite",
			"Polished Granite"
		],
		"shapeless": false
	},
	{
		"item": "Polished Granite Stairs",
		"quantity": 4,
		"recipe": [
			"Polished Granite",
			null,
			null,
			"Polished Granite",
			"Polished Granite",
			null,
			"Polished Granite",
			"Polished Granite",
			"Polished Granite"
		],
		"shapeless": false
	},
	{
		"item": "Powered Rail",
		"quantity": 6,
		"recipe": [
			"Gold Ingot",
			null,
			"Gold Ingot",
			"Gold Ingot",
			"Stick",
			"Gold Ingot",
			"Gold Ingot",
			"Redstone Dust",
			"Gold Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Prismarine Brick Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Prismarine Bricks",
			"Prismarine Bricks",
			"Prismarine Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Prismarine Brick Stairs",
		"quantity": 4,
		"recipe": [
			"Prismarine Bricks",
			null,
			null,
			"Prismarine Bricks",
			"Prismarine Bricks",
			null,
			"Prismarine Bricks",
			"Prismarine Bricks",
			"Prismarine Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Prismarine Bricks",
		"quantity": 1,
		"recipe": [
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard",
			"Prismarine Shard"
		],
		"shapeless": false
	},
	{
		"item": "Pumpkin Pie",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Pumpkin",
			"Sugar",
			null,
			null,
			"Egg",
			null
		],
		"shapeless": true
	},
	{
		"item": "Pumpkin Seeds",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Pumpkin",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Purple Banner",
		"quantity": 1,
		"recipe": [
			"Purple Wool",
			"Purple Wool",
			"Purple Wool",
			"Purple Wool",
			"Purple Wool",
			"Purple Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Purple Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Purple Banner",
			"Purple Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Purple Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Purple Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Purple Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Purple Wool",
			"Purple Wool",
			"Purple Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Purple Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Purple Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Purple Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Purple Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Purple Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Purple Wool",
			"Purple Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Purple Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Purple Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Purple Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Blue Dye",
			"Red Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Purple Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Purple Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Purple Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Purple Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Purple Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Purple Stained Glass",
			"Purple Stained Glass",
			"Purple Stained Glass",
			"Purple Stained Glass",
			"Purple Stained Glass",
			"Purple Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Purple Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Purple Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Purple Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Purple Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Purple Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Purple Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Purpur Block",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Popped Chorus Fruit",
			"Popped Chorus Fruit",
			null,
			"Popped Chorus Fruit",
			"Popped Chorus Fruit",
			null
		],
		"shapeless": false
	},
	{
		"item": "Purpur Pillar",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Purpur Slab",
			null,
			null,
			"Purpur Slab",
			null
		],
		"shapeless": false
	},
	{
		"item": "Purpur Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"Purpur Block",
				"Purpur Pillar"
			],
			[
				"Purpur Block",
				"Purpur Pillar"
			],
			[
				"Purpur Block",
				"Purpur Pillar"
			]
		],
		"shapeless": false
	},
	{
		"item": "Purpur Stairs",
		"quantity": 4,
		"recipe": [
			[
				"Purpur Block",
				"Purpur Pillar"
			],
			null,
			null,
			[
				"Purpur Block",
				"Purpur Pillar"
			],
			[
				"Purpur Block",
				"Purpur Pillar"
			],
			null,
			[
				"Purpur Block",
				"Purpur Pillar"
			],
			[
				"Purpur Block",
				"Purpur Pillar"
			],
			[
				"Purpur Block",
				"Purpur Pillar"
			]
		],
		"shapeless": false
	},
	{
		"item": "Quartz Bricks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Block of Quartz",
			"Block of Quartz",
			null,
			"Block of Quartz",
			"Block of Quartz",
			null
		],
		"shapeless": false
	},
	{
		"item": "Quartz Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"Block of Quartz",
				"Chiseled Quartz Block",
				"Quartz Pillar"
			],
			[
				"Block of Quartz",
				"Chiseled Quartz Block",
				"Quartz Pillar"
			],
			[
				"Block of Quartz",
				"Chiseled Quartz Block",
				"Quartz Pillar"
			]
		],
		"shapeless": false
	},
	{
		"item": "Quartz Stairs",
		"quantity": 4,
		"recipe": [
			[
				"Block of Quartz",
				"Chiseled Quartz Block",
				"Quartz Pillar"
			],
			null,
			null,
			[
				"Block of Quartz",
				"Chiseled Quartz Block",
				"Quartz Pillar"
			],
			[
				"Block of Quartz",
				"Chiseled Quartz Block",
				"Quartz Pillar"
			],
			null,
			[
				"Block of Quartz",
				"Chiseled Quartz Block",
				"Quartz Pillar"
			],
			[
				"Block of Quartz",
				"Chiseled Quartz Block",
				"Quartz Pillar"
			],
			[
				"Block of Quartz",
				"Chiseled Quartz Block",
				"Quartz Pillar"
			]
		],
		"shapeless": false
	},
	{
		"item": "Rabbit Stew",
		"quantity": 1,
		"recipe": [
			null,
			"Cooked Rabbit",
			null,
			"Carrot",
			"Baked Potato",
			[
				"Red Mushroom",
				"Brown Mushroom"
			],
			null,
			"Bowl",
			null
		],
		"shapeless": false
	},
	{
		"item": "Rail",
		"quantity": 16,
		"recipe": [
			"Iron Ingot",
			null,
			"Iron Ingot",
			"Iron Ingot",
			"Stick",
			"Iron Ingot",
			"Iron Ingot",
			null,
			"Iron Ingot"
		],
		"shapeless": false
	},
	{
		"item": "Raw Copper",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Raw Copper",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Raw Gold",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Raw Gold",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Raw Iron",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Raw Iron",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Red Banner",
		"quantity": 1,
		"recipe": [
			"Red Wool",
			"Red Wool",
			"Red Wool",
			"Red Wool",
			"Red Wool",
			"Red Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Red Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Red Banner",
			"Red Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Red Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Red Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Red Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Red Wool",
			"Red Wool",
			"Red Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Red Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Red Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Red Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Red Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Red Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Red Wool",
			"Red Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Red Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Red Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Red Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Poppy",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Red Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Red Tulip",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Red Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Beetroot",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Red Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			null,
			"Rose Bush",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Red Nether Brick Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Red Nether Bricks",
			"Red Nether Bricks",
			"Red Nether Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Red Nether Brick Stairs",
		"quantity": 4,
		"recipe": [
			"Red Nether Bricks",
			null,
			null,
			"Red Nether Bricks",
			"Red Nether Bricks",
			null,
			"Red Nether Bricks",
			"Red Nether Bricks",
			"Red Nether Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Red Nether Brick Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Red Nether Bricks",
			"Red Nether Bricks",
			"Red Nether Bricks",
			"Red Nether Bricks",
			"Red Nether Bricks",
			"Red Nether Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Red Nether Bricks",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Nether Wart",
			"Nether Brick",
			null,
			"Nether Brick",
			"Nether Wart",
			null
		],
		"shapeless": false
	},
	{
		"item": "Red Sandstone",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Red Sand",
			"Red Sand",
			null,
			"Red Sand",
			"Red Sand",
			null
		],
		"shapeless": false
	},
	{
		"item": "Red Sandstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Red Sandstone",
			"Red Sandstone",
			"Red Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Red Sandstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Chiseled Red Sandstone",
			"Chiseled Red Sandstone",
			"Chiseled Red Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Red Sandstone Stairs",
		"quantity": 4,
		"recipe": [
			"Red Sandstone",
			null,
			null,
			"Red Sandstone",
			"Red Sandstone",
			null,
			"Red Sandstone",
			"Red Sandstone",
			"Red Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Red Sandstone Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Red Sandstone",
			"Red Sandstone",
			"Red Sandstone",
			"Red Sandstone",
			"Red Sandstone",
			"Red Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Red Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Red Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Red Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Red Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Red Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Red Stained Glass",
			"Red Stained Glass",
			"Red Stained Glass",
			"Red Stained Glass",
			"Red Stained Glass",
			"Red Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Red Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Red Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Red Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Red Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Red Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Red Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Redstone Comparator",
		"quantity": 1,
		"recipe": [
			null,
			"Redstone Torch",
			null,
			"Redstone Torch",
			"Nether Quartz",
			"Redstone Torch",
			"Stone",
			"Stone",
			"Stone"
		],
		"shapeless": false
	},
	{
		"item": "Redstone Dust",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Block of Redstone",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Redstone Lamp",
		"quantity": 1,
		"recipe": [
			null,
			"Redstone Dust",
			null,
			"Redstone Dust",
			"Glowstone",
			"Redstone Dust",
			null,
			"Redstone Dust",
			null
		],
		"shapeless": false
	},
	{
		"item": "Redstone Repeater",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Redstone Torch",
			"Redstone Dust",
			"Redstone Torch",
			"Stone",
			"Stone",
			"Stone"
		],
		"shapeless": false
	},
	{
		"item": "Redstone Torch",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Redstone Dust",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Respawn Anchor",
		"quantity": 1,
		"recipe": [
			"Crying Obsidian",
			"Crying Obsidian",
			"Crying Obsidian",
			"Glowstone",
			"Glowstone",
			"Glowstone",
			"Crying Obsidian",
			"Crying Obsidian",
			"Crying Obsidian"
		],
		"shapeless": false
	},
	{
		"item": "Sandstone",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Sand",
			"Sand",
			null,
			"Sand",
			"Sand",
			null
		],
		"shapeless": false
	},
	{
		"item": "Sandstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Sandstone",
			"Sandstone",
			"Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Sandstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Chiseled Sandstone",
			"Chiseled Sandstone",
			"Chiseled Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Sandstone Stairs",
		"quantity": 4,
		"recipe": [
			"Sandstone",
			null,
			null,
			"Sandstone",
			"Sandstone",
			null,
			"Sandstone",
			"Sandstone",
			"Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Sandstone Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Sandstone",
			"Sandstone",
			"Sandstone",
			"Sandstone",
			"Sandstone",
			"Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Scaffolding",
		"quantity": 6,
		"recipe": [
			"Bamboo",
			"String",
			"Bamboo",
			"Bamboo",
			null,
			"Bamboo",
			"Bamboo",
			null,
			"Bamboo"
		],
		"shapeless": false
	},
	{
		"item": "Shears",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Iron Ingot",
			null,
			"Iron Ingot",
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Shears",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Shears",
			"Shears",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Shield",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			"Iron Ingot",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Shield",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Shield",
			"Shield",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			"Shulker Shell",
			null,
			null,
			"Chest",
			null,
			null,
			"Shulker Shell",
			null
		],
		"shapeless": false
	},
	{
		"item": "Slime Block",
		"quantity": 1,
		"recipe": [
			"Slimeball",
			"Slimeball",
			"Slimeball",
			"Slimeball",
			"Slimeball",
			"Slimeball",
			"Slimeball",
			"Slimeball",
			"Slimeball"
		],
		"shapeless": false
	},
	{
		"item": "Slimeball",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Slime Block",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Smithing Table",
		"quantity": 1,
		"recipe": [
			"Iron Ingot",
			"Iron Ingot",
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Smoker",
		"quantity": 1,
		"recipe": [
			null,
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			],
			null,
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			],
			"Furnace",
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			],
			null,
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Smooth Quartz Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Smooth Quartz Block",
			"Smooth Quartz Block",
			"Smooth Quartz Block"
		],
		"shapeless": false
	},
	{
		"item": "Smooth Quartz Stairs",
		"quantity": 4,
		"recipe": [
			"Smooth Quartz Block",
			null,
			null,
			"Smooth Quartz Block",
			"Smooth Quartz Block",
			null,
			"Smooth Quartz Block",
			"Smooth Quartz Block",
			"Smooth Quartz Block"
		],
		"shapeless": false
	},
	{
		"item": "Smooth Red Sandstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Smooth Red Sandstone",
			"Smooth Red Sandstone",
			"Smooth Red Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Smooth Red Sandstone Stairs",
		"quantity": 4,
		"recipe": [
			"Smooth Red Sandstone",
			null,
			null,
			"Smooth Red Sandstone",
			"Smooth Red Sandstone",
			null,
			"Smooth Red Sandstone",
			"Smooth Red Sandstone",
			"Smooth Red Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Smooth Sandstone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Smooth Sandstone",
			"Smooth Sandstone",
			"Smooth Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Smooth Sandstone Stairs",
		"quantity": 4,
		"recipe": [
			"Smooth Sandstone",
			null,
			null,
			"Smooth Sandstone",
			"Smooth Sandstone",
			null,
			"Smooth Sandstone",
			"Smooth Sandstone",
			"Smooth Sandstone"
		],
		"shapeless": false
	},
	{
		"item": "Smooth Stone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Smooth Stone",
			"Smooth Stone",
			"Smooth Stone"
		],
		"shapeless": false
	},
	{
		"item": "Snow",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Snow Block",
			"Snow Block",
			"Snow Block",
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Snow Block",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Snowball",
			"Snowball",
			null,
			"Snowball",
			"Snowball",
			null
		],
		"shapeless": false
	},
	{
		"item": "Soul Campfire",
		"quantity": 1,
		"recipe": [
			null,
			"Stick",
			null,
			"Stick",
			[
				"Soul Sand",
				"Soul Soil"
			],
			"Stick",
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			],
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			],
			[
				"Oak Log",
				"Spruce Log",
				"Birch Log",
				"Jungle Log",
				"Acacia Log",
				"Dark Oak Log",
				"Crimson Stem",
				"Warped Stem",
				"Stripped Oak Log",
				"Stripped Spruce Log",
				"Stripped Birch Log",
				"Stripped Jungle Log",
				"Stripped Acacia Log",
				"Stripped Dark Oak Log",
				"Stripped Crimson Stem",
				"Stripped Warped Stem",
				"Oak Wood",
				"Spruce Wood",
				"Birch Wood",
				"Jungle Wood",
				"Acacia Wood",
				"Dark Oak Wood",
				"Crimson Hyphae",
				"Warped Hyphae",
				"Stripped Oak Wood",
				"Stripped Spruce Wood",
				"Stripped Birch Wood",
				"Stripped Jungle Wood",
				"Stripped Acacia Wood",
				"Stripped Dark Oak Wood",
				"Stripped Crimson Hyphae",
				"Stripped Warped Hyphae"
			]
		],
		"shapeless": false
	},
	{
		"item": "Soul Lantern",
		"quantity": 1,
		"recipe": [
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Soul Torch",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget",
			"Iron Nugget"
		],
		"shapeless": false
	},
	{
		"item": "Soul Torch",
		"quantity": 4,
		"recipe": [
			null,
			"Coal",
			null,
			null,
			"Stick",
			null,
			null,
			"Soul Soil",
			null
		],
		"shapeless": false
	},
	{
		"item": "Soul Torch",
		"quantity": 4,
		"recipe": [
			null,
			"Charcoal",
			null,
			null,
			"Stick",
			null,
			null,
			"Soul Sand",
			null
		],
		"shapeless": false
	},
	{
		"item": "Spectral Arrow",
		"quantity": 2,
		"recipe": [
			null,
			"Glowstone Dust",
			null,
			"Glowstone Dust",
			"Arrow",
			"Glowstone Dust",
			null,
			"Glowstone Dust",
			null
		],
		"shapeless": false
	},
	{
		"item": "Spruce Boat",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Spruce Planks",
			null,
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks"
		],
		"shapeless": false
	},
	{
		"item": "Spruce Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Spruce Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Spruce Door",
		"quantity": 3,
		"recipe": [
			"Spruce Planks",
			"Spruce Planks",
			null,
			"Spruce Planks",
			"Spruce Planks",
			null,
			"Spruce Planks",
			"Spruce Planks",
			null
		],
		"shapeless": false
	},
	{
		"item": "Spruce Fence",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Spruce Planks",
			"Stick",
			"Spruce Planks",
			"Spruce Planks",
			"Stick",
			"Spruce Planks"
		],
		"shapeless": false
	},
	{
		"item": "Spruce Fence Gate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stick",
			"Spruce Planks",
			"Stick",
			"Stick",
			"Spruce Planks",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Spruce Planks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Spruce Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Spruce Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Spruce Planks",
			"Spruce Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Spruce Sign",
		"quantity": 3,
		"recipe": [
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Spruce Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks"
		],
		"shapeless": false
	},
	{
		"item": "Spruce Stairs",
		"quantity": 4,
		"recipe": [
			"Spruce Planks",
			null,
			null,
			"Spruce Planks",
			"Spruce Planks",
			null,
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks"
		],
		"shapeless": false
	},
	{
		"item": "Spruce Trapdoor",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks",
			"Spruce Planks"
		],
		"shapeless": false
	},
	{
		"item": "Spruce Wood",
		"quantity": 3,
		"recipe": [
			"Spruce Log",
			"Spruce Log",
			null,
			"Spruce Log",
			"Spruce Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Spyglass",
		"quantity": 1,
		"recipe": [
			null,
			"Amethyst Shard",
			null,
			null,
			"Copper Ingot",
			null,
			null,
			"Copper Ingot",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stick",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Stick",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Bamboo",
			null,
			null,
			"Bamboo",
			null
		],
		"shapeless": false
	},
	{
		"item": "Sticky Piston",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Slimeball",
			null,
			null,
			"Piston",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Axe",
		"quantity": 1,
		"recipe": [
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			null,
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Axe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stone Axe",
			"Stone Axe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Stone Axe",
		"quantity": 1,
		"recipe": [
			"Cobblestone",
			"Cobblestone",
			null,
			"Cobblestone",
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Brick Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Stone Bricks",
			"Stone Bricks",
			"Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Stone Brick Stairs",
		"quantity": 4,
		"recipe": [
			"Stone Bricks",
			null,
			null,
			"Stone Bricks",
			"Stone Bricks",
			null,
			"Stone Bricks",
			"Stone Bricks",
			"Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Stone Brick Wall",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			"Stone Bricks",
			"Stone Bricks",
			"Stone Bricks",
			"Stone Bricks",
			"Stone Bricks",
			"Stone Bricks"
		],
		"shapeless": false
	},
	{
		"item": "Stone Bricks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Stone",
			"Stone",
			null,
			"Stone",
			"Stone",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Stone",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Hoe",
		"quantity": 1,
		"recipe": [
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Hoe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stone Hoe",
			"Stone Hoe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Stone Hoe",
		"quantity": 1,
		"recipe": [
			"Cobblestone",
			"Cobblestone",
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Pickaxe",
		"quantity": 1,
		"recipe": [
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Pickaxe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stone Pickaxe",
			"Stone Pickaxe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Stone Pickaxe",
		"quantity": 1,
		"recipe": [
			"Cobblestone",
			"Cobblestone",
			"Cobblestone",
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stone",
			"Stone",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Shovel",
		"quantity": 1,
		"recipe": [
			null,
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Shovel",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stone Shovel",
			"Stone Shovel",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Stone Shovel",
		"quantity": 1,
		"recipe": [
			null,
			"Cobblestone",
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Stone",
			"Stone",
			"Stone"
		],
		"shapeless": false
	},
	{
		"item": "Stone Stairs",
		"quantity": 4,
		"recipe": [
			"Stone",
			null,
			null,
			"Stone",
			"Stone",
			null,
			"Stone",
			"Stone",
			"Stone"
		],
		"shapeless": false
	},
	{
		"item": "Stone Sword",
		"quantity": 1,
		"recipe": [
			null,
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			null,
			null,
			[
				"Cobblestone",
				"Blackstone",
				"Cobbled Deepslate"
			],
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stone Sword",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stone Sword",
			"Stone Sword",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Stone Sword",
		"quantity": 1,
		"recipe": [
			null,
			"Cobblestone",
			null,
			null,
			"Cobblestone",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Stripped Acacia Wood",
		"quantity": 3,
		"recipe": [
			"Stripped Acacia Log",
			"Stripped Acacia Log",
			null,
			"Stripped Acacia Log",
			"Stripped Acacia Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Stripped Birch Wood",
		"quantity": 3,
		"recipe": [
			"Stripped Birch Log",
			"Stripped Birch Log",
			null,
			"Stripped Birch Log",
			"Stripped Birch Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Stripped Crimson Hyphae",
		"quantity": 3,
		"recipe": [
			"Stripped Crimson Stem",
			"Stripped Crimson Stem",
			null,
			"Stripped Crimson Stem",
			"Stripped Crimson Stem",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Stripped Dark Oak Wood",
		"quantity": 3,
		"recipe": [
			"Stripped Dark Oak Log",
			"Stripped Dark Oak Log",
			null,
			"Stripped Dark Oak Log",
			"Stripped Dark Oak Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Stripped Jungle Wood",
		"quantity": 3,
		"recipe": [
			"Stripped Jungle Log",
			"Stripped Jungle Log",
			null,
			"Stripped Jungle Log",
			"Stripped Jungle Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Stripped Oak Wood",
		"quantity": 3,
		"recipe": [
			"Stripped Oak Log",
			"Stripped Oak Log",
			null,
			"Stripped Oak Log",
			"Stripped Oak Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Stripped Spruce Wood",
		"quantity": 3,
		"recipe": [
			"Stripped Spruce Log",
			"Stripped Spruce Log",
			null,
			"Stripped Spruce Log",
			"Stripped Spruce Log",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Stripped Warped Hyphae",
		"quantity": 3,
		"recipe": [
			"Stripped Warped Stem",
			"Stripped Warped Stem",
			null,
			"Stripped Warped Stem",
			"Stripped Warped Stem",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Sugar",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Sugar Cane",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Sugar",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			"Honey Bottle",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Suspicious Stew",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Red Mushroom",
			"Brown Mushroom",
			null,
			"Bowl",
			[
				"Oxeye Daisy",
				"Cornflower",
				"Lily of the Valley",
				"Wither Rose",
				"Red Tulip",
				"Orange Tulip",
				"White Tulip",
				"Pink Tulip",
				"Azure Bluet",
				"Allium",
				"Blue Orchid",
				"Poppy",
				"Dandelion"
			],
			null
		],
		"shapeless": true
	},
	{
		"item": "TNT",
		"quantity": 1,
		"recipe": [
			"Gunpowder",
			"Sand",
			"Gunpowder",
			"Sand",
			"Gunpowder",
			"Sand",
			"Gunpowder",
			"Sand",
			"Gunpowder"
		],
		"shapeless": false
	},
	{
		"item": "TNT",
		"quantity": 1,
		"recipe": [
			"Gunpowder",
			"Red Sand",
			"Gunpowder",
			"Red Sand",
			"Gunpowder",
			"Red Sand",
			"Gunpowder",
			"Red Sand",
			"Gunpowder"
		],
		"shapeless": false
	},
	{
		"item": "Target",
		"quantity": 1,
		"recipe": [
			null,
			"Redstone Dust",
			null,
			"Redstone Dust",
			"Hay Bale",
			"Redstone Dust",
			null,
			"Redstone Dust",
			null
		],
		"shapeless": false
	},
	{
		"item": "Tinted Glass",
		"quantity": 2,
		"recipe": [
			null,
			"Amethyst Shard",
			null,
			"Amethyst Shard",
			"Glass",
			"Amethyst Shard",
			null,
			"Amethyst Shard",
			null
		],
		"shapeless": false
	},
	{
		"item": "Torch",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Coal",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Torch",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Charcoal",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Trapped Chest",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Tripwire Hook",
			"Chest",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Tripwire Hook",
		"quantity": 2,
		"recipe": [
			null,
			"Iron Ingot",
			null,
			null,
			"Stick",
			null,
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null
		],
		"shapeless": false
	},
	{
		"item": "Turtle Shell",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Scute",
			"Scute",
			"Scute",
			"Scute",
			null,
			"Scute"
		],
		"shapeless": false
	},
	{
		"item": "Turtle Shell",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Turtle Shell",
			"Turtle Shell",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Warped Button",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Warped Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Warped Door",
		"quantity": 3,
		"recipe": [
			"Warped Planks",
			"Warped Planks",
			null,
			"Warped Planks",
			"Warped Planks",
			null,
			"Warped Planks",
			"Warped Planks",
			null
		],
		"shapeless": false
	},
	{
		"item": "Warped Fence",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			"Warped Planks",
			"Stick",
			"Warped Planks",
			"Warped Planks",
			"Stick",
			"Warped Planks"
		],
		"shapeless": false
	},
	{
		"item": "Warped Fence Gate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Stick",
			"Warped Planks",
			"Stick",
			"Stick",
			"Warped Planks",
			"Stick"
		],
		"shapeless": false
	},
	{
		"item": "Warped Fungus on a Stick",
		"quantity": 1,
		"recipe": [
			"Fishing Rod",
			null,
			null,
			null,
			"Warped Fungus",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Warped Fungus on a Stick",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Damaged Warped Fungus on a Stick",
			"Damaged Warped Fungus on a Stick",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Warped Hyphae",
		"quantity": 3,
		"recipe": [
			"Warped Stem",
			"Warped Stem",
			null,
			"Warped Stem",
			"Warped Stem",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Warped Planks",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			null,
			"Warped Stem",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Warped Pressure Plate",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Warped Planks",
			"Warped Planks",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Warped Sign",
		"quantity": 3,
		"recipe": [
			"Warped Planks",
			"Warped Planks",
			"Warped Planks",
			"Warped Planks",
			"Warped Planks",
			"Warped Planks",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Warped Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Warped Planks",
			"Warped Planks",
			"Warped Planks"
		],
		"shapeless": false
	},
	{
		"item": "Warped Stairs",
		"quantity": 4,
		"recipe": [
			"Warped Planks",
			null,
			null,
			"Warped Planks",
			"Warped Planks",
			null,
			"Warped Planks",
			"Warped Planks",
			"Warped Planks"
		],
		"shapeless": false
	},
	{
		"item": "Warped Trapdoor",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			"Warped Planks",
			"Warped Planks",
			"Warped Planks",
			"Warped Planks",
			"Warped Planks",
			"Warped Planks"
		],
		"shapeless": false
	},
	{
		"item": "Waxed Block of Copper",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Block of Copper",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Waxed Cut Copper",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Cut Copper",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Waxed Cut Copper",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Waxed Block of Copper",
			"Waxed Block of Copper",
			null,
			"Waxed Block of Copper",
			"Waxed Block of Copper",
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Cut Copper Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Waxed Cut Copper",
			"Waxed Cut Copper",
			"Waxed Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Waxed Cut Copper Slab",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Cut Copper Slab",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Cut Copper Stairs",
		"quantity": 4,
		"recipe": [
			"Waxed Cut Copper",
			null,
			null,
			"Waxed Cut Copper",
			"Waxed Cut Copper",
			null,
			"Waxed Cut Copper",
			"Waxed Cut Copper",
			"Waxed Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Waxed Cut Copper Stairs",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Cut Copper Stairs",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Exposed Copper",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Exposed Copper",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Waxed Exposed Cut Copper",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Exposed Cut Copper",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Waxed Exposed Cut Copper",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Waxed Exposed Copper",
			"Waxed Exposed Copper",
			null,
			"Waxed Exposed Copper",
			"Waxed Exposed Copper",
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Exposed Cut Copper Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Waxed Exposed Cut Copper",
			"Waxed Exposed Cut Copper",
			"Waxed Exposed Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Waxed Exposed Cut Copper Slab",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Exposed Cut Copper Slab",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Exposed Cut Copper Stairs",
		"quantity": 4,
		"recipe": [
			"Waxed Exposed Cut Copper",
			null,
			null,
			"Waxed Exposed Cut Copper",
			"Waxed Exposed Cut Copper",
			null,
			"Waxed Exposed Cut Copper",
			"Waxed Exposed Cut Copper",
			"Waxed Exposed Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Waxed Exposed Cut Copper Stairs",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Exposed Cut Copper Stairs",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Oxidized Copper",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Oxidized Copper",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Waxed Oxidized Cut Copper",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Oxidized Cut Copper",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Waxed Oxidized Cut Copper",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Waxed Oxidized Copper",
			"Waxed Oxidized Copper",
			null,
			"Waxed Oxidized Copper",
			"Waxed Oxidized Copper",
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Oxidized Cut Copper Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Waxed Oxidized Cut Copper",
			"Waxed Oxidized Cut Copper",
			"Waxed Oxidized Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Waxed Oxidized Cut Copper Slab",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Oxidized Cut Copper Slab",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Oxidized Cut Copper Stairs",
		"quantity": 4,
		"recipe": [
			"Waxed Oxidized Cut Copper",
			null,
			null,
			"Waxed Oxidized Cut Copper",
			"Waxed Oxidized Cut Copper",
			null,
			"Waxed Oxidized Cut Copper",
			"Waxed Oxidized Cut Copper",
			"Waxed Oxidized Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Waxed Oxidized Cut Copper Stairs",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Oxidized Cut Copper Stairs",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Weathered Copper",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Weathered Copper",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Waxed Weathered Cut Copper",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Weathered Cut Copper",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Waxed Weathered Cut Copper",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Waxed Weathered Copper",
			"Waxed Weathered Copper",
			null,
			"Waxed Weathered Copper",
			"Waxed Weathered Copper",
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Weathered Cut Copper Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Waxed Weathered Cut Copper",
			"Waxed Weathered Cut Copper",
			"Waxed Weathered Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Waxed Weathered Cut Copper Slab",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Weathered Cut Copper Slab",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Waxed Weathered Cut Copper Stairs",
		"quantity": 4,
		"recipe": [
			"Waxed Weathered Cut Copper",
			null,
			null,
			"Waxed Weathered Cut Copper",
			"Waxed Weathered Cut Copper",
			null,
			"Waxed Weathered Cut Copper",
			"Waxed Weathered Cut Copper",
			"Waxed Weathered Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Waxed Weathered Cut Copper Stairs",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Weathered Cut Copper Stairs",
			"Honeycomb",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Weathered Cut Copper",
		"quantity": 4,
		"recipe": [
			null,
			null,
			null,
			"Weathered Copper",
			"Weathered Copper",
			null,
			"Weathered Copper",
			"Weathered Copper",
			null
		],
		"shapeless": false
	},
	{
		"item": "Weathered Cut Copper Slab",
		"quantity": 6,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Weathered Cut Copper",
			"Weathered Cut Copper",
			"Weathered Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Weathered Cut Copper Stairs",
		"quantity": 4,
		"recipe": [
			"Weathered Cut Copper",
			null,
			null,
			"Weathered Cut Copper",
			"Weathered Cut Copper",
			null,
			"Weathered Cut Copper",
			"Weathered Cut Copper",
			"Weathered Cut Copper"
		],
		"shapeless": false
	},
	{
		"item": "Wheat",
		"quantity": 9,
		"recipe": [
			null,
			null,
			null,
			null,
			"Hay Bale",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "White Banner",
		"quantity": 1,
		"recipe": [
			"White Wool",
			"White Wool",
			"White Wool",
			"White Wool",
			"White Wool",
			"White Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "White Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Banner",
			"White Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "White Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"White Wool",
			"White Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "White Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"White Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "White Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"White Wool",
			"White Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "White Concrete Powder",
		"quantity": 8,
		"recipe": [
			"White Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "White Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Bone Meal",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "White Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Lily of the Valley",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "White Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"White Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "White Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"White Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "White Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"White Stained Glass",
			"White Stained Glass",
			"White Stained Glass",
			"White Stained Glass",
			"White Stained Glass",
			"White Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "White Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"White Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "White Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"White Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "White Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"String",
			"String",
			null,
			"String",
			"String",
			null
		],
		"shapeless": false
	},
	{
		"item": "Wooden Axe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Wooden Axe",
			"Wooden Axe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Wooden Axe",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Wooden Hoe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Wooden Hoe",
			"Wooden Hoe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Wooden Hoe",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Wooden Pickaxe",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Wooden Pickaxe",
			"Wooden Pickaxe",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Wooden Pickaxe",
		"quantity": 1,
		"recipe": [
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Wooden Shovel",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Wooden Shovel",
			"Wooden Shovel",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Wooden Shovel",
		"quantity": 1,
		"recipe": [
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			null,
			"Stick",
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Wooden Sword",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Wooden Sword",
			"Wooden Sword",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Wooden Sword",
		"quantity": 1,
		"recipe": [
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			null,
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			null,
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Woodland Explorer Map",
		"quantity": 3,
		"recipe": [
			"Empty Map",
			"Empty Map",
			"Empty Map",
			"Woodland Explorer Map",
			"Empty Map",
			"Empty Map",
			"Empty Map",
			"Empty Map",
			"Empty Map"
		],
		"shapeless": true
	},
	{
		"item": "Woodland Explorer Map",
		"quantity": 6,
		"recipe": [
			"Empty Map",
			null,
			null,
			"Woodland Explorer Map",
			"Empty Map",
			null,
			"Empty Map",
			"Empty Map",
			"Empty Map"
		],
		"shapeless": true
	},
	{
		"item": "Written Book",
		"quantity": 1,
		"recipe": [
			"Written Book",
			"Book and Quill",
			null,
			null,
			null,
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Written Book",
		"quantity": 2,
		"recipe": [
			"Written Book",
			"Book and Quill",
			"Book and Quill",
			null,
			null,
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Written Book",
		"quantity": 3,
		"recipe": [
			"Written Book",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			null,
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Written Book",
		"quantity": 4,
		"recipe": [
			"Written Book",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Written Book",
		"quantity": 5,
		"recipe": [
			"Written Book",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Written Book",
		"quantity": 6,
		"recipe": [
			"Written Book",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Written Book",
		"quantity": 7,
		"recipe": [
			"Written Book",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			null
		],
		"shapeless": true
	},
	{
		"item": "Written Book",
		"quantity": 8,
		"recipe": [
			"Written Book",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill",
			"Book and Quill"
		],
		"shapeless": true
	},
	{
		"item": "Yellow Banner",
		"quantity": 1,
		"recipe": [
			"Yellow Wool",
			"Yellow Wool",
			"Yellow Wool",
			"Yellow Wool",
			"Yellow Wool",
			"Yellow Wool",
			null,
			"Stick",
			null
		],
		"shapeless": false
	},
	{
		"item": "Yellow Banner",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Yellow Banner",
			"Yellow Banner",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Yellow Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Bed",
			"Yellow Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Yellow Bed",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Yellow Wool",
			"Yellow Wool",
			"Yellow Wool",
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			],
			[
				"Oak Planks",
				"Spruce Planks",
				"Birch Planks",
				"Jungle Planks",
				"Acacia Planks",
				"Dark Oak Planks",
				"Crimson Planks",
				"Warped Planks"
			]
		],
		"shapeless": false
	},
	{
		"item": "Yellow Candle",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"Candle",
			"Yellow Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Yellow Carpet",
		"quantity": 8,
		"recipe": [
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"Yellow Dye",
			"White Carpet",
			"White Carpet",
			"White Carpet",
			"White Carpet"
		],
		"shapeless": false
	},
	{
		"item": "Yellow Carpet",
		"quantity": 3,
		"recipe": [
			null,
			null,
			null,
			null,
			null,
			null,
			"Yellow Wool",
			"Yellow Wool",
			null
		],
		"shapeless": false
	},
	{
		"item": "Yellow Concrete Powder",
		"quantity": 8,
		"recipe": [
			"Yellow Dye",
			"Sand",
			"Sand",
			"Sand",
			"Sand",
			"Gravel",
			"Gravel",
			"Gravel",
			"Gravel"
		],
		"shapeless": true
	},
	{
		"item": "Yellow Dye",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			null,
			"Dandelion",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Yellow Dye",
		"quantity": 2,
		"recipe": [
			null,
			null,
			null,
			null,
			"Sunflower",
			null,
			null,
			null,
			null
		],
		"shapeless": false
	},
	{
		"item": "Yellow Shulker Box",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			[
				"White Shulker Box",
				"Orange Shulker Box",
				"Magenta Shulker Box",
				"Light Blue Shulker Box",
				"Yellow Shulker Box",
				"Lime Shulker Box",
				"Pink Shulker Box",
				"Gray Shulker Box",
				"Light Gray Shulker Box",
				"Cyan Shulker Box",
				"Purple Shulker Box",
				"Blue Shulker Box",
				"Brown Shulker Box",
				"Green Shulker Box",
				"Red Shulker Box",
				"Black Shulker Box"
			],
			"Yellow Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	},
	{
		"item": "Yellow Stained Glass",
		"quantity": 8,
		"recipe": [
			"Glass",
			"Glass",
			"Glass",
			"Glass",
			"Yellow Dye",
			"Glass",
			"Glass",
			"Glass",
			"Glass"
		],
		"shapeless": false
	},
	{
		"item": "Yellow Stained Glass Pane",
		"quantity": 16,
		"recipe": [
			null,
			null,
			null,
			"Yellow Stained Glass",
			"Yellow Stained Glass",
			"Yellow Stained Glass",
			"Yellow Stained Glass",
			"Yellow Stained Glass",
			"Yellow Stained Glass"
		],
		"shapeless": false
	},
	{
		"item": "Yellow Stained Glass Pane",
		"quantity": 8,
		"recipe": [
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Yellow Dye",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane",
			"Glass Pane"
		],
		"shapeless": false
	},
	{
		"item": "Yellow Terracotta",
		"quantity": 8,
		"recipe": [
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Yellow Dye",
			"Terracotta",
			"Terracotta",
			"Terracotta",
			"Terracotta"
		],
		"shapeless": false
	},
	{
		"item": "Yellow Wool",
		"quantity": 1,
		"recipe": [
			null,
			null,
			null,
			"White Wool",
			"Yellow Dye",
			null,
			null,
			null,
			null
		],
		"shapeless": true
	}
]

const insertRecipes = async () => {
	try {
		const items = await Item.find();
		for (const recipe of recipes) {
			const item = items.find(item => item.name === recipe.item);
			recipe.item = item._id;
			const recipeCreated = await Recipe.create(recipe);
			console.log(recipeCreated.name, recipeCreated._id);
		}
	} catch (error) {
		console.log(`Error: ${error}`)
	}
}

insertRecipes()