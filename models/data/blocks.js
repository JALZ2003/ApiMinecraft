import "dotenv/config.js";
import "../../config/connectionDb.js";
import Block from "../Block.js";
import Item from "../Item.js";

const blocks = [
	{
		"name": "Acacia Button",
		"namespacedId": "acacia_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_button.png",
		"item": "Acacia Button",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [142, 75, 42],
				"amount": 0.608
			},
			{
				"color": [182, 102, 56],
				"amount": 0.192
			},
			{
				"color": [92, 49, 26],
				"amount": 0.139
			},
			{
				"color": [111, 60, 34],
				"amount": 0.058
			}
		]
	},
	{
		"name": "Acacia Door",
		"namespacedId": "acacia_door",
		"description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_door.png",
		"item": "Acacia Door",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [111, 59, 36],
				"amount": 0.717
			},
			{
				"color": [142, 74, 47],
				"amount": 0.107
			},
			{
				"color": [148, 92, 60],
				"amount": 0.061
			},
			{
				"color": [57, 47, 39],
				"amount": 0.06
			},
			{
				"color": [174, 97, 61],
				"amount": 0.054
			}
		]
	},
	{
		"name": "Acacia Fence",
		"namespacedId": "acacia_fence",
		"description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_fence.png",
		"item": "Acacia Fence",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [122, 65, 35],
				"amount": 0.659
			},
			{
				"color": [181, 100, 55],
				"amount": 0.137
			},
			{
				"color": [154, 84, 49],
				"amount": 0.094
			},
			{
				"color": [87, 47, 27],
				"amount": 0.055
			},
			{
				"color": [148, 76, 44],
				"amount": 0.055
			}
		]
	},
	{
		"name": "Acacia Fence Gate",
		"namespacedId": "acacia_fence_gate",
		"description": "A fence gate is a block that shares the functions of both the door and the fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_fence_gate.png",
		"item": "Acacia Fence Gate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [141, 76, 42],
				"amount": 0.82
			},
			{
				"color": [81, 44, 24],
				"amount": 0.089
			},
			{
				"color": [194, 108, 61],
				"amount": 0.061
			},
			{
				"color": [103, 56, 33],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Acacia Leaves",
		"namespacedId": "acacia_leaves",
		"description": "Leaves are natural blocks that generate as part of trees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_leaves.png",
		"item": "Acacia Leaves",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [46, 113, 14],
				"amount": 0.361
			},
			{
				"color": [26, 69, 11],
				"amount": 0.344
			},
			{
				"color": [36, 93, 12],
				"amount": 0.198
			},
			{
				"color": [20, 45, 4],
				"amount": 0.076
			},
			{
				"color": [36, 83, 12],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Acacia Log",
		"namespacedId": "acacia_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_log.png",
		"item": "Acacia Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [69, 63, 56],
				"amount": 0.503
			},
			{
				"color": [166, 89, 49],
				"amount": 0.42
			},
			{
				"color": [99, 92, 83],
				"amount": 0.041
			},
			{
				"color": [117, 101, 85],
				"amount": 0.025
			},
			{
				"color": [86, 82, 76],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Acacia Planks",
		"namespacedId": "acacia_planks",
		"description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_planks.png",
		"item": "Acacia Planks",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [115, 61, 33],
				"amount": 0.378
			},
			{
				"color": [148, 78, 44],
				"amount": 0.318
			},
			{
				"color": [178, 97, 53],
				"amount": 0.263
			},
			{
				"color": [86, 46, 26],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Acacia Pressure Plate",
		"namespacedId": "acacia_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_pressure_plate.png",
		"item": "Acacia Pressure Plate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [169, 92, 50],
				"amount": 0.478
			},
			{
				"color": [96, 50, 30],
				"amount": 0.229
			},
			{
				"color": [135, 72, 41],
				"amount": 0.185
			},
			{
				"color": [148, 76, 44],
				"amount": 0.072
			},
			{
				"color": [188, 107, 60],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Acacia Sapling",
		"namespacedId": "acacia_sapling",
		"description": "A sapling is a non-solid block that can be grown into a tree.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_sapling.png",
		"item": "Acacia Sapling",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [113, 138, 27],
				"amount": 0.609
			},
			{
				"color": [116, 85, 16],
				"amount": 0.3
			},
			{
				"color": [133, 105, 25],
				"amount": 0.07
			},
			{
				"color": [138, 120, 28],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Acacia Sign",
		"namespacedId": "acacia_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_sign.png",
		"item": "Acacia Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [135, 71, 41],
				"amount": 0.829
			},
			{
				"color": [71, 64, 60],
				"amount": 0.118
			},
			{
				"color": [176, 96, 56],
				"amount": 0.035
			},
			{
				"color": [108, 56, 31],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Acacia Slab",
		"namespacedId": "acacia_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_slab.png",
		"item": "Acacia Slab",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [126, 67, 38],
				"amount": 0.534
			},
			{
				"color": [179, 98, 54],
				"amount": 0.283
			},
			{
				"color": [91, 48, 28],
				"amount": 0.105
			},
			{
				"color": [156, 83, 47],
				"amount": 0.047
			},
			{
				"color": [158, 92, 51],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Acacia Stairs",
		"namespacedId": "acacia_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_stairs.png",
		"item": "Acacia Stairs",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [126, 67, 38],
				"amount": 0.61
			},
			{
				"color": [179, 98, 54],
				"amount": 0.199
			},
			{
				"color": [91, 48, 28],
				"amount": 0.106
			},
			{
				"color": [156, 84, 46],
				"amount": 0.048
			},
			{
				"color": [157, 92, 52],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Acacia Trapdoor",
		"namespacedId": "acacia_trapdoor",
		"description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_trapdoor.png",
		"item": "Acacia Trapdoor",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [132, 70, 41],
				"amount": 0.621
			},
			{
				"color": [182, 101, 59],
				"amount": 0.225
			},
			{
				"color": [81, 49, 36],
				"amount": 0.134
			},
			{
				"color": [109, 109, 109],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Acacia Wall Sign",
		"namespacedId": "acacia_wall_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_wall_sign.png",
		"item": "Acacia Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [135, 72, 41],
				"amount": 0.539
			},
			{
				"color": [148, 76, 44],
				"amount": 0.227
			},
			{
				"color": [116, 60, 36],
				"amount": 0.113
			},
			{
				"color": [176, 97, 56],
				"amount": 0.107
			},
			{
				"color": [150, 84, 44],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Acacia Wood",
		"namespacedId": "acacia_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/acacia_wood.png",
		"item": "Acacia Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [72, 66, 58],
				"amount": 0.805
			},
			{
				"color": [122, 114, 100],
				"amount": 0.121
			},
			{
				"color": [100, 95, 84],
				"amount": 0.058
			},
			{
				"color": [108, 100, 92],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Activator Rail",
		"namespacedId": "activator_rail",
		"description": "An activator rail is a type of rail that can \"activate\" certain minecarts.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/activator_rail.png",
		"item": "Activator Rail",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.7,
		"colors": [
			{
				"color": [126, 118, 104],
				"amount": 0.643
			},
			{
				"color": [70, 6, 5],
				"amount": 0.274
			},
			{
				"color": [79, 58, 35],
				"amount": 0.054
			},
			{
				"color": [84, 68, 44],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Air",
		"namespacedId": "air",
		"description": "Air is an invisible block used to define empty space where any other blocks could otherwise exist.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/air.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": []
	},
	{
		"name": "Allium",
		"namespacedId": "allium",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/allium.png",
		"item": "Allium",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [195, 140, 237],
				"amount": 0.515
			},
			{
				"color": [228, 197, 251],
				"amount": 0.247
			},
			{
				"color": [124, 77, 164],
				"amount": 0.218
			},
			{
				"color": [164, 92, 228],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Amethyst Cluster",
		"namespacedId": "amethyst_cluster",
		"description": "Amethyst buds are the first three stages of growth of amethyst clusters, which grow on budding amethyst.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/amethyst_cluster.png",
		"item": "Amethyst Cluster",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 5,
		"blastResistance": 1.5,
		"colors": [
			{
				"color": [124, 93, 184],
				"amount": 0.431
			},
			{
				"color": [204, 156, 235],
				"amount": 0.26
			},
			{
				"color": [250, 208, 223],
				"amount": 0.244
			},
			{
				"color": [192, 148, 233],
				"amount": 0.042
			},
			{
				"color": [171, 135, 230],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Ancient Debris",
		"namespacedId": "ancient_debris",
		"description": "Ancient debris is a rare ore found in the Nether, and is the main source of netherite scraps. Its high blast resistance makes it immune to normal explosions. In item form, it floats on lava and cannot be burned by any form of fire.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/ancient_debris.png",
		"item": "Ancient Debris",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1200,
		"colors": [
			{
				"color": [63, 38, 31],
				"amount": 0.747
			},
			{
				"color": [130, 109, 101],
				"amount": 0.208
			},
			{
				"color": [97, 72, 64],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Andesite",
		"namespacedId": "andesite",
		"description": "Andesite is a block of igneous rock, most often found in large pockets in the ground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/andesite.png",
		"item": "Andesite",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [90, 90, 91],
				"amount": 0.644
			},
			{
				"color": [151, 151, 147],
				"amount": 0.155
			},
			{
				"color": [132, 132, 137],
				"amount": 0.125
			},
			{
				"color": [121, 121, 121],
				"amount": 0.073
			}
		]
	},
	{
		"name": "Andesite Slab",
		"namespacedId": "andesite_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/andesite_slab.png",
		"item": "Andesite Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [107, 107, 109],
				"amount": 0.716
			},
			{
				"color": [140, 140, 139],
				"amount": 0.124
			},
			{
				"color": [156, 157, 154],
				"amount": 0.121
			},
			{
				"color": [73, 73, 75],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Andesite Stairs",
		"namespacedId": "andesite_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/andesite_stairs.png",
		"item": "Andesite Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [100, 100, 101],
				"amount": 0.806
			},
			{
				"color": [152, 152, 149],
				"amount": 0.103
			},
			{
				"color": [131, 131, 138],
				"amount": 0.072
			},
			{
				"color": [66, 66, 66],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Andesite Wall",
		"namespacedId": "andesite_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/andesite_wall.png",
		"item": "Andesite Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [96, 96, 98],
				"amount": 0.837
			},
			{
				"color": [128, 128, 128],
				"amount": 0.058
			},
			{
				"color": [140, 140, 135],
				"amount": 0.054
			},
			{
				"color": [157, 158, 154],
				"amount": 0.042
			}
		]
	},
	{
		"name": "Anvil",
		"namespacedId": "anvil",
		"description": "An anvil is a block that allows players to repair items, rename items, and combine enchantments.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/anvil.png",
		"item": "Anvil",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1200,
		"colors": [
			{
				"color": [79, 79, 79],
				"amount": 0.437
			},
			{
				"color": [68, 68, 68],
				"amount": 0.269
			},
			{
				"color": [44, 44, 44],
				"amount": 0.254
			},
			{
				"color": [60, 60, 60],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Attached Melon Stem",
		"namespacedId": "attached_melon_stem",
		"description": "Melon seeds are an item that can be used to grow melon plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/attached_melon_stem.png",
		"item": null,
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [66, 57, 4],
				"amount": 0.668
			},
			{
				"color": [118, 104, 11],
				"amount": 0.171
			},
			{
				"color": [94, 84, 4],
				"amount": 0.156
			}
		]
	},
	{
		"name": "Attached Pumpkin Stem",
		"namespacedId": "attached_pumpkin_stem",
		"description": "Pumpkin Seeds are an item that can be used to grow pumpkin plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/attached_pumpkin_stem.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [65, 58, 4],
				"amount": 0.69
			},
			{
				"color": [121, 105, 12],
				"amount": 0.21
			},
			{
				"color": [92, 84, 4],
				"amount": 0.067
			},
			{
				"color": [38, 31, 4],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Azalea",
		"namespacedId": "azalea",
		"description": "An azalea is a solid block that can be grown into an azalea tree.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/azalea.png",
		"item": "Azalea",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [86, 103, 41],
				"amount": 0.773
			},
			{
				"color": [107, 141, 44],
				"amount": 0.095
			},
			{
				"color": [54, 65, 29],
				"amount": 0.086
			},
			{
				"color": [43, 58, 25],
				"amount": 0.029
			},
			{
				"color": [60, 76, 32],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Azalea Leaves",
		"namespacedId": "azalea_leaves",
		"description": "Leaves are natural blocks that generate as part of trees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/azalea_leaves.png",
		"item": "Azalea Leaves",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [65, 82, 32],
				"amount": 0.758
			},
			{
				"color": [107, 132, 46],
				"amount": 0.148
			},
			{
				"color": [92, 115, 36],
				"amount": 0.064
			},
			{
				"color": [36, 44, 20],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Azure Bluet",
		"namespacedId": "azure_bluet",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/azure_bluet.png",
		"item": "Azure Bluet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [85, 162, 46],
				"amount": 0.422
			},
			{
				"color": [232, 240, 236],
				"amount": 0.292
			},
			{
				"color": [245, 234, 87],
				"amount": 0.252
			},
			{
				"color": [146, 192, 128],
				"amount": 0.022
			},
			{
				"color": [196, 220, 188],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Bamboo",
		"namespacedId": "bamboo",
		"description": "Bamboo is a plant found in jungles, and can be used as fuel for smelting or cooking, to breed pandas, or in crafting scaffolding and sticks. Bamboo is the fastest growing plant in Minecraft.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bamboo.png",
		"item": "Bamboo",
		"tool": "Sword",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [52, 85, 5],
				"amount": 0.691
			},
			{
				"color": [128, 180, 70],
				"amount": 0.232
			},
			{
				"color": [90, 126, 42],
				"amount": 0.042
			},
			{
				"color": [84, 116, 44],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Bamboo Shoot",
		"namespacedId": "bamboo_sapling",
		"description": "Bamboo is a plant found in jungles, and can be used as fuel for smelting or cooking, to breed pandas, or in crafting scaffolding and sticks. Bamboo is the fastest growing plant in Minecraft.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bamboo_sapling.png",
		"item": "Bamboo",
		"tool": "Sword",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [83, 83, 25],
				"amount": 0.52
			},
			{
				"color": [54, 37, 13],
				"amount": 0.265
			},
			{
				"color": [139, 131, 74],
				"amount": 0.176
			},
			{
				"color": [78, 144, 15],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Barrel",
		"namespacedId": "barrel",
		"description": "A barrel is a fisherman's job site block, used to store items. It functions like a single chest although it requires no air space above it to be opened.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/barrel.png",
		"item": "Barrel",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [93, 70, 41],
				"amount": 0.754
			},
			{
				"color": [32, 28, 26],
				"amount": 0.15
			},
			{
				"color": [142, 104, 59],
				"amount": 0.065
			},
			{
				"color": [52, 36, 20],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Barrier",
		"namespacedId": "barrier",
		"description": "A barrier is an invisible block used to create solid boundaries.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/barrier.png",
		"item": "Barrier",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3600000.8,
		"colors": [
			{
				"color": [227, 4, 4],
				"amount": 0.465
			},
			{
				"color": [182, 4, 4],
				"amount": 0.407
			},
			{
				"color": [142, 4, 4],
				"amount": 0.091
			},
			{
				"color": [202, 4, 4],
				"amount": 0.033
			}
		]
	},
	{
		"name": "Basalt",
		"namespacedId": "basalt",
		"description": "Basalt is an igneous rock found in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/basalt.png",
		"item": "Basalt",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [45, 46, 50],
				"amount": 0.654
			},
			{
				"color": [114, 114, 114],
				"amount": 0.162
			},
			{
				"color": [91, 92, 92],
				"amount": 0.141
			},
			{
				"color": [76, 76, 76],
				"amount": 0.038
			}
		]
	},
	{
		"name": "Beacon",
		"namespacedId": "beacon",
		"description": "A beacon is a block that projects a light beam skyward and can provide status effects such as Speed, Jump Boost, Haste, Regeneration, Resistance, or Strength to nearby players.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/beacon.png",
		"item": "Beacon",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 3,
		"colors": [
			{
				"color": [109, 173, 172],
				"amount": 0.678
			},
			{
				"color": [9, 8, 16],
				"amount": 0.236
			},
			{
				"color": [202, 235, 235],
				"amount": 0.055
			},
			{
				"color": [42, 134, 126],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Bedrock",
		"namespacedId": "bedrock",
		"description": "Bedrock is a block that is normally indestructible in Survival.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bedrock.png",
		"item": "Bedrock",
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3600000,
		"colors": [
			{
				"color": [48, 48, 48],
				"amount": 0.585
			},
			{
				"color": [130, 130, 130],
				"amount": 0.261
			},
			{
				"color": [92, 92, 92],
				"amount": 0.082
			},
			{
				"color": [100, 100, 100],
				"amount": 0.05
			},
			{
				"color": [84, 84, 84],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Bee Nest",
		"namespacedId": "bee_nest",
		"description": "Bee nests are naturally generated blocks that house bees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bee_nest.png",
		"item": "Bee Nest",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [123, 89, 50],
				"amount": 0.674
			},
			{
				"color": [229, 197, 86],
				"amount": 0.278
			},
			{
				"color": [182, 134, 67],
				"amount": 0.024
			},
			{
				"color": [158, 135, 79],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Beehive",
		"namespacedId": "beehive",
		"description": "Bee nests are naturally generated blocks that house bees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/beehive.png",
		"item": "Beehive",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.6,
		"colors": [
			{
				"color": [159, 131, 82],
				"amount": 0.588
			},
			{
				"color": [77, 62, 36],
				"amount": 0.165
			},
			{
				"color": [119, 92, 56],
				"amount": 0.135
			},
			{
				"color": [100, 80, 48],
				"amount": 0.109
			}
		]
	},
	{
		"name": "Beetroots",
		"namespacedId": "beetroots",
		"description": "Beetroot seeds are items that can be used to plant beetroot crops.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/beetroots.png",
		"item": "Beetroot Seeds",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [79, 182, 46],
				"amount": 0.37
			},
			{
				"color": [87, 129, 46],
				"amount": 0.357
			},
			{
				"color": [130, 62, 30],
				"amount": 0.174
			},
			{
				"color": [176, 68, 42],
				"amount": 0.098
			}
		]
	},
	{
		"name": "Bell",
		"namespacedId": "bell",
		"description": "A bell is a transparent animated block entity that produces a sound when used. Unlike most utility blocks, bells cannot be crafted.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bell.png",
		"item": "Bell",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 5,
		"colors": [
			{
				"color": [82, 77, 72],
				"amount": 0.616
			},
			{
				"color": [221, 209, 108],
				"amount": 0.254
			},
			{
				"color": [203, 171, 44],
				"amount": 0.066
			},
			{
				"color": [155, 141, 61],
				"amount": 0.059
			}
		]
	},
	{
		"name": "Big Dripleaf",
		"namespacedId": "big_dripleaf",
		"description": "A big dripleaf is a plant that generates within lush caves. It may be used as a block for parkour and platforming.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/big_dripleaf.png",
		"item": "Big Dripleaf",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [118, 151, 52],
				"amount": 0.695
			},
			{
				"color": [74, 94, 44],
				"amount": 0.285
			},
			{
				"color": [151, 193, 64],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Big Dripleaf Stem",
		"namespacedId": "big_dripleaf_stem",
		"description": "A big dripleaf is a plant that generates within lush caves. It may be used as a block for parkour and platforming.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/big_dripleaf_stem.png",
		"item": null,
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [82, 108, 43],
				"amount": 0.52
			},
			{
				"color": [108, 133, 51],
				"amount": 0.382
			},
			{
				"color": [108, 124, 48],
				"amount": 0.056
			},
			{
				"color": [68, 84, 44],
				"amount": 0.039
			}
		]
	},
	{
		"name": "Birch Button",
		"namespacedId": "birch_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_button.png",
		"item": "Birch Button",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [159, 145, 101],
				"amount": 0.677
			},
			{
				"color": [113, 99, 70],
				"amount": 0.21
			},
			{
				"color": [211, 193, 136],
				"amount": 0.092
			},
			{
				"color": [198, 180, 124],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Birch Door",
		"namespacedId": "birch_door",
		"description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_door.png",
		"item": "Birch Door",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [164, 154, 122],
				"amount": 0.93
			},
			{
				"color": [58, 44, 24],
				"amount": 0.037
			},
			{
				"color": [118, 106, 74],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Birch Fence",
		"namespacedId": "birch_fence",
		"description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_fence.png",
		"item": "Birch Fence",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [150, 136, 95],
				"amount": 0.849
			},
			{
				"color": [206, 190, 132],
				"amount": 0.096
			},
			{
				"color": [103, 93, 66],
				"amount": 0.043
			},
			{
				"color": [116, 100, 68],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Birch Fence Gate",
		"namespacedId": "birch_fence_gate",
		"description": "A fence gate is a block that shares the functions of both the door and the fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_fence_gate.png",
		"item": "Birch Fence Gate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [158, 145, 100],
				"amount": 0.785
			},
			{
				"color": [97, 88, 61],
				"amount": 0.141
			},
			{
				"color": [220, 203, 141],
				"amount": 0.054
			},
			{
				"color": [109, 108, 76],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Birch Leaves",
		"namespacedId": "birch_leaves",
		"description": "Leaves are natural blocks that generate as part of trees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_leaves.png",
		"item": "Birch Leaves",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [46, 59, 29],
				"amount": 0.682
			},
			{
				"color": [78, 102, 53],
				"amount": 0.192
			},
			{
				"color": [65, 84, 44],
				"amount": 0.112
			}
		]
	},
	{
		"name": "Birch Log",
		"namespacedId": "birch_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_log.png",
		"item": "Birch Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [168, 162, 143],
				"amount": 0.847
			},
			{
				"color": [59, 58, 51],
				"amount": 0.094
			},
			{
				"color": [212, 212, 212],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Birch Planks",
		"namespacedId": "birch_planks",
		"description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_planks.png",
		"item": "Birch Planks",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [125, 112, 78],
				"amount": 0.503
			},
			{
				"color": [204, 186, 128],
				"amount": 0.229
			},
			{
				"color": [176, 164, 115],
				"amount": 0.123
			},
			{
				"color": [168, 152, 105],
				"amount": 0.113
			},
			{
				"color": [155, 144, 100],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Birch Pressure Plate",
		"namespacedId": "birch_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_pressure_plate.png",
		"item": "Birch Pressure Plate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [193, 176, 122],
				"amount": 0.682
			},
			{
				"color": [112, 101, 72],
				"amount": 0.258
			},
			{
				"color": [152, 137, 92],
				"amount": 0.04
			},
			{
				"color": [152, 138, 100],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Birch Sapling",
		"namespacedId": "birch_sapling",
		"description": "A sapling is a non-solid block that can be grown into a tree.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_sapling.png",
		"item": "Birch Sapling",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [99, 139, 54],
				"amount": 0.514
			},
			{
				"color": [197, 204, 146],
				"amount": 0.46
			},
			{
				"color": [164, 188, 92],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Birch Sign",
		"namespacedId": "birch_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_sign.png",
		"item": "Birch Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [152, 141, 99],
				"amount": 0.926
			},
			{
				"color": [152, 151, 152],
				"amount": 0.029
			},
			{
				"color": [208, 196, 136],
				"amount": 0.024
			},
			{
				"color": [122, 108, 76],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Birch Slab",
		"namespacedId": "birch_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_slab.png",
		"item": "Birch Slab",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [182, 166, 115],
				"amount": 0.761
			},
			{
				"color": [105, 95, 68],
				"amount": 0.119
			},
			{
				"color": [131, 119, 83],
				"amount": 0.106
			},
			{
				"color": [124, 108, 76],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Birch Stairs",
		"namespacedId": "birch_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_stairs.png",
		"item": "Birch Stairs",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [155, 140, 98],
				"amount": 0.759
			},
			{
				"color": [105, 95, 68],
				"amount": 0.128
			},
			{
				"color": [205, 188, 130],
				"amount": 0.097
			},
			{
				"color": [124, 108, 76],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Birch Trapdoor",
		"namespacedId": "birch_trapdoor",
		"description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_trapdoor.png",
		"item": "Birch Trapdoor",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [144, 129, 89],
				"amount": 0.63
			},
			{
				"color": [241, 234, 218],
				"amount": 0.249
			},
			{
				"color": [215, 204, 150],
				"amount": 0.096
			},
			{
				"color": [212, 188, 132],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Birch Wall Sign",
		"namespacedId": "birch_wall_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_wall_sign.png",
		"item": "Birch Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [150, 138, 96],
				"amount": 0.464
			},
			{
				"color": [171, 155, 108],
				"amount": 0.364
			},
			{
				"color": [209, 195, 136],
				"amount": 0.15
			},
			{
				"color": [180, 164, 116],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Birch Wood",
		"namespacedId": "birch_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/birch_wood.png",
		"item": "Birch Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [170, 169, 165],
				"amount": 0.795
			},
			{
				"color": [62, 61, 53],
				"amount": 0.149
			},
			{
				"color": [241, 241, 238],
				"amount": 0.055
			}
		]
	},
	{
		"name": "Black Banner",
		"namespacedId": "black_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_banner.png",
		"item": "Black Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [19, 19, 19],
				"amount": 0.698
			},
			{
				"color": [91, 74, 48],
				"amount": 0.293
			}
		]
	},
	{
		"name": "Black Bed",
		"namespacedId": "black_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_bed.png",
		"item": "Black Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [31, 29, 28],
				"amount": 0.482
			},
			{
				"color": [214, 218, 218],
				"amount": 0.466
			},
			{
				"color": [112, 88, 58],
				"amount": 0.03
			},
			{
				"color": [115, 116, 116],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Black Candle",
		"namespacedId": "black_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_candle.png",
		"item": "Black Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [26, 24, 40],
				"amount": 0.747
			},
			{
				"color": [44, 44, 68],
				"amount": 0.12
			},
			{
				"color": [60, 52, 88],
				"amount": 0.118
			},
			{
				"color": [36, 36, 60],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Black Carpet",
		"namespacedId": "black_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_carpet.png",
		"item": "Black Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [27, 28, 28],
				"amount": 0.379
			},
			{
				"color": [20, 20, 28],
				"amount": 0.275
			},
			{
				"color": [11, 13, 17],
				"amount": 0.193
			},
			{
				"color": [36, 34, 39],
				"amount": 0.079
			},
			{
				"color": [20, 20, 20],
				"amount": 0.074
			}
		]
	},
	{
		"name": "Black Concrete",
		"namespacedId": "black_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_concrete.png",
		"item": "Black Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [12, 12, 15],
				"amount": 0.469
			},
			{
				"color": [4, 12, 12],
				"amount": 0.297
			},
			{
				"color": [4, 4, 12],
				"amount": 0.234
			}
		]
	},
	{
		"name": "Black Concrete Powder",
		"namespacedId": "black_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_concrete_powder.png",
		"item": "Black Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [19, 20, 24],
				"amount": 0.977
			},
			{
				"color": [52, 52, 59],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Black Glazed Terracotta",
		"namespacedId": "black_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_glazed_terracotta.png",
		"item": "Black Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [24, 20, 22],
				"amount": 0.467
			},
			{
				"color": [126, 30, 30],
				"amount": 0.35
			},
			{
				"color": [83, 20, 20],
				"amount": 0.14
			},
			{
				"color": [51, 55, 58],
				"amount": 0.026
			},
			{
				"color": [44, 44, 52],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Black Shulker Box",
		"namespacedId": "black_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_shulker_box.png",
		"item": "Black Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [25, 25, 31],
				"amount": 0.334
			},
			{
				"color": [12, 12, 20],
				"amount": 0.247
			},
			{
				"color": [19, 20, 20],
				"amount": 0.231
			},
			{
				"color": [12, 12, 12],
				"amount": 0.098
			},
			{
				"color": [4, 8, 12],
				"amount": 0.091
			}
		]
	},
	{
		"name": "Black Stained Glass",
		"namespacedId": "black_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_stained_glass.png",
		"item": "Black Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [28, 28, 28],
				"amount": 0.512
			},
			{
				"color": [20, 20, 20],
				"amount": 0.337
			},
			{
				"color": [12, 12, 12],
				"amount": 0.144
			}
		]
	},
	{
		"name": "Black Stained Glass Pane",
		"namespacedId": "black_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_stained_glass_pane.png",
		"item": "Black Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [20, 20, 20],
				"amount": 0.559
			},
			{
				"color": [12, 12, 12],
				"amount": 0.291
			},
			{
				"color": [28, 28, 28],
				"amount": 0.15
			}
		]
	},
	{
		"name": "Black Terracotta",
		"namespacedId": "black_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_terracotta.png",
		"item": "Black Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [28, 20, 12],
				"amount": 0.511
			},
			{
				"color": [36, 21, 17],
				"amount": 0.346
			},
			{
				"color": [20, 12, 12],
				"amount": 0.132
			},
			{
				"color": [28, 12, 12],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Black Wall Banner",
		"namespacedId": "black_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_wall_banner.png",
		"item": "Black Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [19, 19, 19],
				"amount": 0.764
			},
			{
				"color": [92, 75, 48],
				"amount": 0.235
			}
		]
	},
	{
		"name": "Black Wool",
		"namespacedId": "black_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_wool.png",
		"item": "Black Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [29, 29, 32],
				"amount": 0.366
			},
			{
				"color": [10, 12, 15],
				"amount": 0.349
			},
			{
				"color": [20, 20, 28],
				"amount": 0.209
			},
			{
				"color": [20, 20, 20],
				"amount": 0.062
			},
			{
				"color": [20, 28, 28],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Blackstone",
		"namespacedId": "blackstone",
		"description": "Blackstone is a dark-colored block that functions similar to cobblestone or cobbled deepslate. It can be found only in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blackstone.png",
		"item": "Blackstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [27, 22, 24],
				"amount": 0.637
			},
			{
				"color": [55, 50, 61],
				"amount": 0.308
			},
			{
				"color": [44, 43, 52],
				"amount": 0.042
			}
		]
	},
	{
		"name": "Blackstone Slab",
		"namespacedId": "blackstone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blackstone_slab.png",
		"item": "Blackstone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [27, 21, 24],
				"amount": 0.626
			},
			{
				"color": [49, 44, 54],
				"amount": 0.22
			},
			{
				"color": [60, 57, 67],
				"amount": 0.124
			},
			{
				"color": [44, 36, 42],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Blackstone Stairs",
		"namespacedId": "blackstone_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blackstone_stairs.png",
		"item": "Blackstone Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [27, 22, 24],
				"amount": 0.655
			},
			{
				"color": [49, 44, 55],
				"amount": 0.209
			},
			{
				"color": [61, 58, 67],
				"amount": 0.1
			},
			{
				"color": [44, 36, 43],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Blackstone Wall",
		"namespacedId": "blackstone_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blackstone_wall.png",
		"item": "Blackstone Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [26, 19, 19],
				"amount": 0.457
			},
			{
				"color": [52, 48, 60],
				"amount": 0.42
			},
			{
				"color": [35, 35, 42],
				"amount": 0.095
			},
			{
				"color": [44, 36, 43],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Blast Furnace",
		"namespacedId": "blast_furnace",
		"description": "A blast furnace is a block that smelts ores, raw metals, iron and gold armor and tools, similar to a furnace, but at twice the rate. It also serves as an armorer's job site block. It does not craft all things a furnace can, for example it cannot cook food or make charcoal. It works only on specific minerals, like smelting iron ore into iron ingots.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blast_furnace.png",
		"item": "Blast Furnace",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 13,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [72, 72, 73],
				"amount": 0.837
			},
			{
				"color": [138, 138, 140],
				"amount": 0.085
			},
			{
				"color": [116, 116, 116],
				"amount": 0.043
			},
			{
				"color": [108, 108, 116],
				"amount": 0.021
			},
			{
				"color": [30, 30, 37],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Block of Amethyst",
		"namespacedId": "amethyst_block",
		"description": "A block of amethyst is a decorative block crafted from four amethyst shards.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/amethyst_block.png",
		"item": "Block of Amethyst",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1.5,
		"colors": [
			{
				"color": [91, 66, 135],
				"amount": 0.792
			},
			{
				"color": [208, 158, 220],
				"amount": 0.112
			},
			{
				"color": [144, 106, 206],
				"amount": 0.086
			}
		]
	},
	{
		"name": "Block of Coal",
		"namespacedId": "coal_block",
		"description": "A block of coal is a mineral block that can also be used as a fuel.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/coal_block.png",
		"item": "Block of Coal",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [20, 20, 20],
				"amount": 0.482
			},
			{
				"color": [8, 8, 8],
				"amount": 0.39
			},
			{
				"color": [28, 28, 28],
				"amount": 0.097
			},
			{
				"color": [38, 33, 33],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Block of Copper",
		"namespacedId": "copper_block",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/copper_block.png",
		"item": "Block of Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [137, 76, 56],
				"amount": 0.713
			},
			{
				"color": [209, 121, 92],
				"amount": 0.154
			},
			{
				"color": [187, 108, 81],
				"amount": 0.053
			},
			{
				"color": [174, 99, 72],
				"amount": 0.047
			},
			{
				"color": [96, 51, 37],
				"amount": 0.033
			}
		]
	},
	{
		"name": "Block of Diamond",
		"namespacedId": "diamond_block",
		"description": "A block of diamond is a precious mineral block equivalent to nine diamonds.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/diamond_block.png",
		"item": "Block of Diamond",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [65, 171, 163],
				"amount": 0.666
			},
			{
				"color": [137, 212, 196],
				"amount": 0.123
			},
			{
				"color": [88, 235, 226],
				"amount": 0.094
			},
			{
				"color": [194, 222, 216],
				"amount": 0.07
			},
			{
				"color": [32, 133, 135],
				"amount": 0.048
			}
		]
	},
	{
		"name": "Block of Emerald",
		"namespacedId": "emerald_block",
		"description": "A block of emerald is a precious mineral block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/emerald_block.png",
		"item": "Block of Emerald",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [28, 157, 67],
				"amount": 0.723
			},
			{
				"color": [63, 228, 124],
				"amount": 0.189
			},
			{
				"color": [104, 195, 138],
				"amount": 0.072
			},
			{
				"color": [18, 101, 31],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Block of Gold",
		"namespacedId": "gold_block",
		"description": "A block of gold is a precious metal block equivalent to nine gold ingots.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gold_block.png",
		"item": "Block of Gold",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [192, 162, 45],
				"amount": 0.641
			},
			{
				"color": [251, 221, 74],
				"amount": 0.229
			},
			{
				"color": [144, 116, 25],
				"amount": 0.063
			},
			{
				"color": [193, 193, 123],
				"amount": 0.051
			},
			{
				"color": [158, 116, 22],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Block of Iron",
		"namespacedId": "iron_block",
		"description": "A block of iron is a precious metal block equivalent to nine iron ingots.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/iron_block.png",
		"item": "Block of Iron",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [185, 185, 185],
				"amount": 0.525
			},
			{
				"color": [140, 140, 140],
				"amount": 0.202
			},
			{
				"color": [124, 123, 123],
				"amount": 0.163
			},
			{
				"color": [227, 227, 227],
				"amount": 0.074
			},
			{
				"color": [148, 148, 148],
				"amount": 0.036
			}
		]
	},
	{
		"name": "Block of Lapis Lazuli",
		"namespacedId": "lapis_block",
		"description": "A block of lapis lazuli is a decorative mineral block that is crafted from lapis lazuli. It is a medium blue color, with darker and lighter blue markings on it.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lapis_block.png",
		"item": "Block of Lapis Lazuli",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [22, 48, 99],
				"amount": 0.842
			},
			{
				"color": [27, 63, 134],
				"amount": 0.094
			},
			{
				"color": [32, 79, 158],
				"amount": 0.048
			},
			{
				"color": [46, 89, 135],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Block of Netherite",
		"namespacedId": "netherite_block",
		"description": "A block of netherite is a precious metal block made from nine netherite ingots. Unlike most items, it is resistant to fire and lava.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/netherite_block.png",
		"item": "Block of Netherite",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1200,
		"colors": [
			{
				"color": [42, 39, 40],
				"amount": 0.489
			},
			{
				"color": [78, 72, 77],
				"amount": 0.232
			},
			{
				"color": [68, 65, 68],
				"amount": 0.125
			},
			{
				"color": [60, 60, 60],
				"amount": 0.113
			},
			{
				"color": [60, 51, 56],
				"amount": 0.041
			}
		]
	},
	{
		"name": "Block of Quartz",
		"namespacedId": "quartz_block",
		"description": "A block of quartz is a mineral block used only for decoration. It can be turned into a chiseled quartz block, quartz pillar, or quartz bricks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/quartz_block.png",
		"item": "Block of Quartz",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [233, 226, 221],
				"amount": 0.371
			},
			{
				"color": [154, 149, 143],
				"amount": 0.333
			},
			{
				"color": [188, 188, 183],
				"amount": 0.194
			},
			{
				"color": [209, 204, 195],
				"amount": 0.092
			},
			{
				"color": [188, 180, 180],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Block of Raw Copper",
		"namespacedId": "raw_copper_block",
		"description": "A block of raw copper is a raw metal block equivalent to nine raw copper.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/raw_copper_block.png",
		"item": "Block of Raw Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [99, 71, 52],
				"amount": 0.667
			},
			{
				"color": [162, 93, 69],
				"amount": 0.172
			},
			{
				"color": [207, 123, 101],
				"amount": 0.141
			},
			{
				"color": [96, 148, 114],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Block of Raw Gold",
		"namespacedId": "raw_gold_block",
		"description": "A block of raw gold is a raw metal block equivalent to nine raw gold.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/raw_gold_block.png",
		"item": "Block of Raw Gold",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [154, 109, 27],
				"amount": 0.682
			},
			{
				"color": [236, 214, 90],
				"amount": 0.183
			},
			{
				"color": [232, 168, 33],
				"amount": 0.089
			},
			{
				"color": [197, 169, 38],
				"amount": 0.043
			}
		]
	},
	{
		"name": "Block of Raw Iron",
		"namespacedId": "raw_iron_block",
		"description": "A block of raw iron is a raw metal block equivalent to nine raw iron.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/raw_iron_block.png",
		"item": "Block of Raw Iron",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [112, 91, 69],
				"amount": 0.785
			},
			{
				"color": [215, 180, 155],
				"amount": 0.143
			},
			{
				"color": [172, 140, 117],
				"amount": 0.044
			},
			{
				"color": [188, 164, 140],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Block of Redstone",
		"namespacedId": "redstone_block",
		"description": "A block of redstone is a mineral block equivalent to nine redstone dust. It acts as a permanently powered redstone power source that can be pushed by pistons.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/redstone_block.png",
		"item": "Block of Redstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [109, 15, 4],
				"amount": 0.56
			},
			{
				"color": [205, 28, 9],
				"amount": 0.228
			},
			{
				"color": [145, 22, 4],
				"amount": 0.094
			},
			{
				"color": [167, 25, 8],
				"amount": 0.073
			},
			{
				"color": [70, 5, 4],
				"amount": 0.045
			}
		]
	},
	{
		"name": "Blue Banner",
		"namespacedId": "blue_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_banner.png",
		"item": "Blue Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [43, 50, 122],
				"amount": 0.908
			},
			{
				"color": [83, 67, 42],
				"amount": 0.071
			},
			{
				"color": [29, 29, 75],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Blue Bed",
		"namespacedId": "blue_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_bed.png",
		"item": "Blue Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [56, 53, 67],
				"amount": 0.455
			},
			{
				"color": [214, 218, 218],
				"amount": 0.343
			},
			{
				"color": [65, 96, 188],
				"amount": 0.115
			},
			{
				"color": [59, 79, 167],
				"amount": 0.084
			}
		]
	},
	{
		"name": "Blue Candle",
		"namespacedId": "blue_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_candle.png",
		"item": "Blue Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [48, 65, 138],
				"amount": 0.654
			},
			{
				"color": [35, 44, 97],
				"amount": 0.268
			},
			{
				"color": [36, 52, 108],
				"amount": 0.041
			},
			{
				"color": [20, 20, 35],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Blue Carpet",
		"namespacedId": "blue_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_carpet.png",
		"item": "Blue Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [49, 53, 149],
				"amount": 0.751
			},
			{
				"color": [31, 34, 94],
				"amount": 0.081
			},
			{
				"color": [59, 60, 164],
				"amount": 0.068
			},
			{
				"color": [59, 72, 169],
				"amount": 0.066
			},
			{
				"color": [41, 42, 121],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Blue Concrete",
		"namespacedId": "blue_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_concrete.png",
		"item": "Blue Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [36, 36, 116],
				"amount": 0.537
			},
			{
				"color": [44, 44, 140],
				"amount": 0.325
			},
			{
				"color": [28, 28, 87],
				"amount": 0.135
			}
		]
	},
	{
		"name": "Blue Concrete Powder",
		"namespacedId": "blue_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_concrete_powder.png",
		"item": "Blue Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [54, 56, 128],
				"amount": 0.591
			},
			{
				"color": [42, 43, 99],
				"amount": 0.178
			},
			{
				"color": [75, 79, 174],
				"amount": 0.099
			},
			{
				"color": [70, 76, 163],
				"amount": 0.07
			},
			{
				"color": [66, 67, 159],
				"amount": 0.062
			}
		]
	},
	{
		"name": "Blue Glazed Terracotta",
		"namespacedId": "blue_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_glazed_terracotta.png",
		"item": "Blue Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [37, 46, 113],
				"amount": 0.629
			},
			{
				"color": [58, 99, 186],
				"amount": 0.193
			},
			{
				"color": [24, 22, 47],
				"amount": 0.108
			},
			{
				"color": [31, 110, 163],
				"amount": 0.055
			},
			{
				"color": [49, 67, 154],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Blue Ice",
		"namespacedId": "blue_ice",
		"description": "Blue ice is a solid block similar to packed ice and ice, but much more slippery.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_ice.png",
		"item": "Blue Ice",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2.8,
		"colors": [
			{
				"color": [72, 105, 160],
				"amount": 0.721
			},
			{
				"color": [102, 152, 236],
				"amount": 0.135
			},
			{
				"color": [130, 171, 236],
				"amount": 0.092
			},
			{
				"color": [103, 137, 189],
				"amount": 0.042
			}
		]
	},
	{
		"name": "Blue Orchid",
		"namespacedId": "blue_orchid",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_orchid.png",
		"item": "Blue Orchid",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [39, 179, 245],
				"amount": 0.495
			},
			{
				"color": [66, 145, 35],
				"amount": 0.413
			},
			{
				"color": [28, 148, 212],
				"amount": 0.085
			}
		]
	},
	{
		"name": "Blue Shulker Box",
		"namespacedId": "blue_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_shulker_box.png",
		"item": "Blue Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [26, 27, 89],
				"amount": 0.369
			},
			{
				"color": [48, 49, 146],
				"amount": 0.322
			},
			{
				"color": [38, 39, 121],
				"amount": 0.132
			},
			{
				"color": [19, 19, 65],
				"amount": 0.119
			},
			{
				"color": [36, 36, 104],
				"amount": 0.058
			}
		]
	},
	{
		"name": "Blue Stained Glass",
		"namespacedId": "blue_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_stained_glass.png",
		"item": "Blue Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [44, 60, 148],
				"amount": 0.485
			},
			{
				"color": [28, 52, 116],
				"amount": 0.229
			},
			{
				"color": [52, 76, 179],
				"amount": 0.169
			},
			{
				"color": [44, 68, 156],
				"amount": 0.069
			},
			{
				"color": [28, 44, 108],
				"amount": 0.049
			}
		]
	},
	{
		"name": "Blue Stained Glass Pane",
		"namespacedId": "blue_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_stained_glass_pane.png",
		"item": "Blue Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [44, 60, 140],
				"amount": 0.413
			},
			{
				"color": [28, 44, 103],
				"amount": 0.375
			},
			{
				"color": [46, 73, 167],
				"amount": 0.199
			}
		]
	},
	{
		"name": "Blue Terracotta",
		"namespacedId": "blue_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_terracotta.png",
		"item": "Blue Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [60, 47, 74],
				"amount": 0.573
			},
			{
				"color": [76, 59, 90],
				"amount": 0.19
			},
			{
				"color": [44, 36, 52],
				"amount": 0.146
			},
			{
				"color": [44, 36, 60],
				"amount": 0.086
			}
		]
	},
	{
		"name": "Blue Wall Banner",
		"namespacedId": "blue_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_wall_banner.png",
		"item": "Blue Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [43, 50, 122],
				"amount": 0.9
			},
			{
				"color": [79, 64, 48],
				"amount": 0.08
			},
			{
				"color": [28, 28, 76],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Blue Wool",
		"namespacedId": "blue_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_wool.png",
		"item": "Blue Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [32, 35, 99],
				"amount": 0.435
			},
			{
				"color": [55, 60, 160],
				"amount": 0.229
			},
			{
				"color": [48, 51, 145],
				"amount": 0.141
			},
			{
				"color": [44, 52, 131],
				"amount": 0.134
			},
			{
				"color": [42, 44, 125],
				"amount": 0.06
			}
		]
	},
	{
		"name": "Bone Block",
		"namespacedId": "bone_block",
		"description": "Bone blocks are storage blocks equivalent to nine pieces of bone meal.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bone_block.png",
		"item": "Bone Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [139, 137, 128],
				"amount": 0.46
			},
			{
				"color": [189, 187, 167],
				"amount": 0.444
			},
			{
				"color": [180, 172, 156],
				"amount": 0.051
			},
			{
				"color": [220, 218, 194],
				"amount": 0.045
			}
		]
	},
	{
		"name": "Bookshelf",
		"namespacedId": "bookshelf",
		"description": "Bookshelves are decorative blocks that primarily serve to enhance enchanting with an enchanting table.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bookshelf.png",
		"item": "Bookshelf",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.5,
		"colors": [
			{
				"color": [138, 113, 65],
				"amount": 0.633
			},
			{
				"color": [29, 48, 48],
				"amount": 0.227
			},
			{
				"color": [96, 21, 12],
				"amount": 0.106
			},
			{
				"color": [65, 73, 17],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Brain Coral",
		"namespacedId": "brain_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brain_coral.png",
		"item": "Brain Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [185, 65, 138],
				"amount": 0.604
			},
			{
				"color": [232, 137, 193],
				"amount": 0.348
			},
			{
				"color": [220, 102, 166],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Brain Coral Block",
		"namespacedId": "brain_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brain_coral_block.png",
		"item": "Brain Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [157, 67, 119],
				"amount": 0.707
			},
			{
				"color": [113, 38, 86],
				"amount": 0.16
			},
			{
				"color": [218, 116, 175],
				"amount": 0.086
			},
			{
				"color": [210, 86, 153],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Brain Coral Fan",
		"namespacedId": "brain_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brain_coral_fan.png",
		"item": "Brain Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [189, 74, 142],
				"amount": 0.52
			},
			{
				"color": [210, 112, 169],
				"amount": 0.316
			},
			{
				"color": [151, 46, 112],
				"amount": 0.082
			},
			{
				"color": [203, 92, 156],
				"amount": 0.068
			},
			{
				"color": [172, 60, 132],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Brain Coral Wall Fan",
		"namespacedId": "brain_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brain_coral_wall_fan.png",
		"item": "Brain Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [186, 71, 140],
				"amount": 0.61
			},
			{
				"color": [210, 113, 169],
				"amount": 0.194
			},
			{
				"color": [148, 44, 109],
				"amount": 0.088
			},
			{
				"color": [203, 92, 156],
				"amount": 0.077
			},
			{
				"color": [204, 89, 148],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Brewing Stand",
		"namespacedId": "brewing_stand",
		"description": "A brewing stand is a block used for brewing potions, splash potions and lingering potions. They are a cleric's job site block generated in village churches.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brewing_stand.png",
		"item": "Brewing Stand",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 1,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [72, 67, 67],
				"amount": 0.617
			},
			{
				"color": [177, 144, 48],
				"amount": 0.175
			},
			{
				"color": [135, 117, 88],
				"amount": 0.143
			},
			{
				"color": [155, 140, 140],
				"amount": 0.038
			},
			{
				"color": [116, 108, 108],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Brick Slab",
		"namespacedId": "brick_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brick_slab.png",
		"item": "Brick Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [123, 77, 65],
				"amount": 0.724
			},
			{
				"color": [171, 113, 98],
				"amount": 0.178
			},
			{
				"color": [149, 125, 117],
				"amount": 0.055
			},
			{
				"color": [79, 52, 45],
				"amount": 0.042
			}
		]
	},
	{
		"name": "Brick Stairs",
		"namespacedId": "brick_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brick_stairs.png",
		"item": "Brick Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [121, 76, 64],
				"amount": 0.765
			},
			{
				"color": [171, 112, 96],
				"amount": 0.136
			},
			{
				"color": [79, 50, 43],
				"amount": 0.047
			},
			{
				"color": [147, 124, 116],
				"amount": 0.046
			}
		]
	},
	{
		"name": "Brick Wall",
		"namespacedId": "brick_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brick_wall.png",
		"item": "Brick Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [104, 65, 54],
				"amount": 0.776
			},
			{
				"color": [169, 104, 88],
				"amount": 0.107
			},
			{
				"color": [132, 107, 100],
				"amount": 0.061
			},
			{
				"color": [147, 82, 66],
				"amount": 0.034
			},
			{
				"color": [150, 126, 118],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Bricks",
		"namespacedId": "bricks",
		"description": "Bricks are a decorative building block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bricks.png",
		"item": "Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [101, 64, 53],
				"amount": 0.712
			},
			{
				"color": [173, 108, 90],
				"amount": 0.101
			},
			{
				"color": [134, 108, 100],
				"amount": 0.068
			},
			{
				"color": [148, 125, 118],
				"amount": 0.066
			},
			{
				"color": [146, 81, 65],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Brown Banner",
		"namespacedId": "brown_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_banner.png",
		"item": "Brown Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [91, 60, 36],
				"amount": 0.896
			},
			{
				"color": [58, 37, 21],
				"amount": 0.086
			},
			{
				"color": [115, 105, 70],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Brown Bed",
		"namespacedId": "brown_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_bed.png",
		"item": "Brown Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [96, 64, 37],
				"amount": 0.524
			},
			{
				"color": [214, 218, 218],
				"amount": 0.423
			},
			{
				"color": [156, 100, 60],
				"amount": 0.041
			}
		]
	},
	{
		"name": "Brown Candle",
		"namespacedId": "brown_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_candle.png",
		"item": "Brown Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [71, 43, 26],
				"amount": 0.451
			},
			{
				"color": [91, 60, 35],
				"amount": 0.326
			},
			{
				"color": [116, 75, 44],
				"amount": 0.184
			},
			{
				"color": [20, 20, 36],
				"amount": 0.038
			}
		]
	},
	{
		"name": "Brown Carpet",
		"namespacedId": "brown_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_carpet.png",
		"item": "Brown Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [108, 68, 38],
				"amount": 0.591
			},
			{
				"color": [125, 78, 46],
				"amount": 0.231
			},
			{
				"color": [67, 43, 23],
				"amount": 0.112
			},
			{
				"color": [86, 52, 28],
				"amount": 0.034
			},
			{
				"color": [92, 60, 30],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Brown Concrete",
		"namespacedId": "brown_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_concrete.png",
		"item": "Brown Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [92, 60, 28],
				"amount": 0.364
			},
			{
				"color": [60, 36, 20],
				"amount": 0.228
			},
			{
				"color": [76, 44, 28],
				"amount": 0.222
			},
			{
				"color": [76, 52, 28],
				"amount": 0.186
			}
		]
	},
	{
		"name": "Brown Concrete Powder",
		"namespacedId": "brown_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_concrete_powder.png",
		"item": "Brown Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [86, 59, 36],
				"amount": 0.61
			},
			{
				"color": [135, 91, 60],
				"amount": 0.183
			},
			{
				"color": [119, 79, 51],
				"amount": 0.165
			},
			{
				"color": [108, 76, 52],
				"amount": 0.029
			},
			{
				"color": [124, 92, 60],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Brown Glazed Terracotta",
		"namespacedId": "brown_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_glazed_terracotta.png",
		"item": "Brown Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [105, 72, 47],
				"amount": 0.604
			},
			{
				"color": [20, 92, 104],
				"amount": 0.203
			},
			{
				"color": [178, 125, 100],
				"amount": 0.178
			},
			{
				"color": [98, 122, 124],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Brown Mushroom",
		"namespacedId": "brown_mushroom",
		"description": "A mushroom is a variety of fungus that grows and spreads in dark areas. Mushrooms generate as red or brown in color, and small or huge in size.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_mushroom.png",
		"item": "Brown Mushroom",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 1,
		"blastResistance": 0,
		"colors": [
			{
				"color": [126, 93, 70],
				"amount": 0.443
			},
			{
				"color": [185, 139, 115],
				"amount": 0.443
			},
			{
				"color": [91, 72, 60],
				"amount": 0.105
			}
		]
	},
	{
		"name": "Brown Mushroom Block",
		"namespacedId": "brown_mushroom_block",
		"description": "Mushroom blocks are solid blocks that make up huge mushrooms.\nThere are 3 kinds of mushroom blocks: red mushroom block, brown mushroom block and mushroom stem.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_mushroom_block.png",
		"item": "Brown Mushroom Block",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 1,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [91, 68, 52],
				"amount": 0.443
			},
			{
				"color": [120, 88, 68],
				"amount": 0.286
			},
			{
				"color": [146, 108, 84],
				"amount": 0.162
			},
			{
				"color": [148, 116, 84],
				"amount": 0.079
			},
			{
				"color": [126, 100, 73],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Brown Shulker Box",
		"namespacedId": "brown_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_shulker_box.png",
		"item": "Brown Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [59, 37, 20],
				"amount": 0.397
			},
			{
				"color": [109, 65, 35],
				"amount": 0.341
			},
			{
				"color": [88, 56, 30],
				"amount": 0.214
			},
			{
				"color": [76, 44, 25],
				"amount": 0.025
			},
			{
				"color": [76, 52, 28],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Brown Stained Glass",
		"namespacedId": "brown_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_stained_glass.png",
		"item": "Brown Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [60, 48, 35],
				"amount": 0.447
			},
			{
				"color": [84, 60, 44],
				"amount": 0.404
			},
			{
				"color": [100, 76, 52],
				"amount": 0.109
			},
			{
				"color": [90, 68, 44],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Brown Stained Glass Pane",
		"namespacedId": "brown_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_stained_glass_pane.png",
		"item": "Brown Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [85, 61, 44],
				"amount": 0.63
			},
			{
				"color": [60, 44, 28],
				"amount": 0.277
			},
			{
				"color": [100, 76, 51],
				"amount": 0.058
			},
			{
				"color": [92, 76, 44],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Brown Terracotta",
		"namespacedId": "brown_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_terracotta.png",
		"item": "Brown Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [45, 30, 20],
				"amount": 0.344
			},
			{
				"color": [60, 44, 28],
				"amount": 0.326
			},
			{
				"color": [76, 51, 35],
				"amount": 0.274
			},
			{
				"color": [60, 36, 28],
				"amount": 0.036
			},
			{
				"color": [68, 44, 28],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Brown Wall Banner",
		"namespacedId": "brown_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_wall_banner.png",
		"item": "Brown Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [91, 60, 36],
				"amount": 0.945
			},
			{
				"color": [58, 36, 20],
				"amount": 0.034
			},
			{
				"color": [114, 105, 71],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Brown Wool",
		"namespacedId": "brown_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_wool.png",
		"item": "Brown Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [73, 45, 25],
				"amount": 0.419
			},
			{
				"color": [103, 64, 36],
				"amount": 0.232
			},
			{
				"color": [120, 75, 44],
				"amount": 0.222
			},
			{
				"color": [92, 60, 34],
				"amount": 0.124
			}
		]
	},
	{
		"name": "Bubble Column",
		"namespacedId": "bubble_column",
		"description": "A bubble column is a block generated by placing magma blocks or soul sand in water (source). Bubble columns push or pull entities and items in certain directions.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bubble_column.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 100,
		"colors": [
			{
				"color": [35, 180, 252],
				"amount": 0.457
			},
			{
				"color": [115, 212, 252],
				"amount": 0.359
			},
			{
				"color": [233, 251, 252],
				"amount": 0.172
			}
		]
	},
	{
		"name": "Bubble Coral",
		"namespacedId": "bubble_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bubble_coral.png",
		"item": "Bubble Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [180, 28, 174],
				"amount": 0.547
			},
			{
				"color": [115, 9, 125],
				"amount": 0.406
			},
			{
				"color": [203, 66, 187],
				"amount": 0.035
			},
			{
				"color": [134, 12, 141],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Bubble Coral Block",
		"namespacedId": "bubble_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bubble_coral_block.png",
		"item": "Bubble Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [113, 17, 113],
				"amount": 0.751
			},
			{
				"color": [162, 32, 161],
				"amount": 0.101
			},
			{
				"color": [192, 32, 179],
				"amount": 0.1
			},
			{
				"color": [158, 22, 147],
				"amount": 0.035
			},
			{
				"color": [73, 4, 80],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Bubble Coral Fan",
		"namespacedId": "bubble_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bubble_coral_fan.png",
		"item": "Bubble Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [157, 30, 156],
				"amount": 0.447
			},
			{
				"color": [110, 7, 118],
				"amount": 0.386
			},
			{
				"color": [188, 64, 178],
				"amount": 0.081
			},
			{
				"color": [125, 12, 132],
				"amount": 0.079
			}
		]
	},
	{
		"name": "Bubble Coral Wall Fan",
		"namespacedId": "bubble_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/bubble_coral_wall_fan.png",
		"item": "Bubble Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [171, 46, 166],
				"amount": 0.541
			},
			{
				"color": [111, 7, 119],
				"amount": 0.357
			},
			{
				"color": [125, 12, 132],
				"amount": 0.084
			},
			{
				"color": [141, 20, 143],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Budding Amethyst",
		"namespacedId": "budding_amethyst",
		"description": "Budding amethyst is a block found in amethyst geodes that grows amethyst clusters.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/budding_amethyst.png",
		"item": "Budding Amethyst",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1.5,
		"colors": [
			{
				"color": [88, 63, 134],
				"amount": 0.796
			},
			{
				"color": [209, 159, 216],
				"amount": 0.135
			},
			{
				"color": [150, 111, 216],
				"amount": 0.035
			},
			{
				"color": [154, 114, 176],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Cactus",
		"namespacedId": "cactus",
		"description": "A cactus is a plant block that generates naturally in dry areas and causes damage.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cactus.png",
		"item": "Cactus",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.4,
		"colors": [
			{
				"color": [65, 97, 30],
				"amount": 0.856
			},
			{
				"color": [101, 148, 53],
				"amount": 0.07
			},
			{
				"color": [156, 162, 119],
				"amount": 0.065
			}
		]
	},
	{
		"name": "Cake",
		"namespacedId": "cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cake.png",
		"item": "Cake",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [123, 50, 24],
				"amount": 0.514
			},
			{
				"color": [228, 222, 213],
				"amount": 0.414
			},
			{
				"color": [146, 139, 123],
				"amount": 0.031
			},
			{
				"color": [205, 108, 97],
				"amount": 0.026
			},
			{
				"color": [158, 147, 128],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Cake with Black Candle",
		"namespacedId": "black_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/black_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [238, 231, 223],
				"amount": 0.376
			},
			{
				"color": [126, 54, 26],
				"amount": 0.349
			},
			{
				"color": [35, 28, 42],
				"amount": 0.166
			},
			{
				"color": [153, 149, 141],
				"amount": 0.098
			},
			{
				"color": [165, 91, 72],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Cake with Blue Candle",
		"namespacedId": "blue_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/blue_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [238, 231, 223],
				"amount": 0.401
			},
			{
				"color": [126, 54, 26],
				"amount": 0.331
			},
			{
				"color": [45, 52, 104],
				"amount": 0.152
			},
			{
				"color": [153, 149, 141],
				"amount": 0.104
			},
			{
				"color": [165, 91, 72],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Cake with Brown Candle",
		"namespacedId": "brown_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/brown_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [238, 231, 223],
				"amount": 0.409
			},
			{
				"color": [121, 54, 27],
				"amount": 0.397
			},
			{
				"color": [153, 149, 141],
				"amount": 0.106
			},
			{
				"color": [66, 37, 23],
				"amount": 0.074
			},
			{
				"color": [165, 91, 72],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Cake with Candle",
		"namespacedId": "candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [214, 206, 195],
				"amount": 0.64
			},
			{
				"color": [136, 57, 27],
				"amount": 0.223
			},
			{
				"color": [79, 39, 20],
				"amount": 0.107
			},
			{
				"color": [153, 109, 83],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Cake with Cyan Candle",
		"namespacedId": "cyan_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [222, 216, 208],
				"amount": 0.495
			},
			{
				"color": [124, 53, 25],
				"amount": 0.332
			},
			{
				"color": [12, 89, 90],
				"amount": 0.138
			},
			{
				"color": [146, 139, 123],
				"amount": 0.023
			},
			{
				"color": [165, 91, 72],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Cake with Gray Candle",
		"namespacedId": "gray_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [238, 231, 223],
				"amount": 0.401
			},
			{
				"color": [126, 54, 26],
				"amount": 0.332
			},
			{
				"color": [58, 60, 63],
				"amount": 0.143
			},
			{
				"color": [153, 149, 141],
				"amount": 0.104
			},
			{
				"color": [135, 92, 80],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Cake with Green Candle",
		"namespacedId": "green_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [243, 238, 232],
				"amount": 0.459
			},
			{
				"color": [103, 58, 22],
				"amount": 0.366
			},
			{
				"color": [153, 149, 141],
				"amount": 0.092
			},
			{
				"color": [209, 146, 135],
				"amount": 0.083
			}
		]
	},
	{
		"name": "Cake with Light Blue Candle",
		"namespacedId": "light_blue_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [238, 231, 223],
				"amount": 0.401
			},
			{
				"color": [126, 54, 26],
				"amount": 0.331
			},
			{
				"color": [31, 90, 126],
				"amount": 0.152
			},
			{
				"color": [153, 149, 141],
				"amount": 0.104
			},
			{
				"color": [165, 91, 72],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Cake with Light Gray Candle",
		"namespacedId": "light_gray_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [238, 231, 223],
				"amount": 0.409
			},
			{
				"color": [126, 54, 26],
				"amount": 0.339
			},
			{
				"color": [152, 148, 140],
				"amount": 0.112
			},
			{
				"color": [103, 94, 85],
				"amount": 0.086
			},
			{
				"color": [65, 52, 46],
				"amount": 0.055
			}
		]
	},
	{
		"name": "Cake with Lime Candle",
		"namespacedId": "lime_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [243, 238, 232],
				"amount": 0.447
			},
			{
				"color": [107, 69, 22],
				"amount": 0.373
			},
			{
				"color": [153, 149, 141],
				"amount": 0.094
			},
			{
				"color": [209, 145, 134],
				"amount": 0.081
			}
		]
	},
	{
		"name": "Cake with Magenta Candle",
		"namespacedId": "magenta_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [125, 49, 45],
				"amount": 0.438
			},
			{
				"color": [238, 231, 223],
				"amount": 0.415
			},
			{
				"color": [153, 149, 141],
				"amount": 0.108
			},
			{
				"color": [63, 32, 25],
				"amount": 0.027
			},
			{
				"color": [165, 91, 72],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Cake with Orange Candle",
		"namespacedId": "orange_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [131, 58, 22],
				"amount": 0.578
			},
			{
				"color": [227, 221, 214],
				"amount": 0.377
			},
			{
				"color": [153, 143, 127],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Cake with Pink Candle",
		"namespacedId": "pink_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [222, 216, 209],
				"amount": 0.527
			},
			{
				"color": [137, 58, 36],
				"amount": 0.286
			},
			{
				"color": [79, 39, 21],
				"amount": 0.119
			},
			{
				"color": [154, 87, 96],
				"amount": 0.034
			},
			{
				"color": [168, 118, 125],
				"amount": 0.033
			}
		]
	},
	{
		"name": "Cake with Purple Candle",
		"namespacedId": "purple_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [107, 43, 47],
				"amount": 0.495
			},
			{
				"color": [222, 216, 209],
				"amount": 0.435
			},
			{
				"color": [163, 78, 36],
				"amount": 0.051
			},
			{
				"color": [153, 137, 122],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Cake with Red Candle",
		"namespacedId": "red_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [124, 48, 25],
				"amount": 0.438
			},
			{
				"color": [238, 231, 223],
				"amount": 0.415
			},
			{
				"color": [153, 149, 141],
				"amount": 0.108
			},
			{
				"color": [62, 32, 24],
				"amount": 0.027
			},
			{
				"color": [165, 91, 72],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Cake with White Candle",
		"namespacedId": "white_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [211, 207, 200],
				"amount": 0.52
			},
			{
				"color": [123, 53, 26],
				"amount": 0.461
			}
		]
	},
	{
		"name": "Cake with Yellow Candle",
		"namespacedId": "yellow_candle_cake",
		"description": "Cake is a food and a block that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_candle_cake.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [227, 221, 215],
				"amount": 0.485
			},
			{
				"color": [136, 57, 27],
				"amount": 0.249
			},
			{
				"color": [79, 39, 20],
				"amount": 0.121
			},
			{
				"color": [157, 120, 40],
				"amount": 0.096
			},
			{
				"color": [156, 142, 127],
				"amount": 0.05
			}
		]
	},
	{
		"name": "Calcite",
		"namespacedId": "calcite",
		"description": "Calcite is a carbonate mineral, currently used as a decorative block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/calcite.png",
		"item": "Calcite",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.75,
		"colors": [
			{
				"color": [150, 150, 149],
				"amount": 0.625
			},
			{
				"color": [235, 237, 233],
				"amount": 0.182
			},
			{
				"color": [211, 215, 211],
				"amount": 0.106
			},
			{
				"color": [196, 197, 195],
				"amount": 0.085
			}
		]
	},
	{
		"name": "Campfire",
		"namespacedId": "campfire",
		"description": "A campfire is a block that can be used to cook food or act as a light source or smoke signal.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/campfire.png",
		"item": "Campfire",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 2,
		"colors": [
			{
				"color": [119, 88, 49],
				"amount": 0.459
			},
			{
				"color": [227, 177, 64],
				"amount": 0.456
			},
			{
				"color": [44, 42, 36],
				"amount": 0.056
			},
			{
				"color": [162, 131, 84],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Candle",
		"namespacedId": "candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/candle.png",
		"item": "Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [168, 147, 112],
				"amount": 0.734
			},
			{
				"color": [220, 195, 152],
				"amount": 0.153
			},
			{
				"color": [140, 116, 84],
				"amount": 0.064
			},
			{
				"color": [19, 19, 35],
				"amount": 0.046
			}
		]
	},
	{
		"name": "Carrots",
		"namespacedId": "carrots",
		"description": "A carrot is a food item that can be eaten by the player.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/carrots.png",
		"item": "Carrot",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [64, 135, 42],
				"amount": 0.654
			},
			{
				"color": [194, 113, 22],
				"amount": 0.283
			},
			{
				"color": [36, 99, 35],
				"amount": 0.048
			},
			{
				"color": [51, 59, 33],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Cartography Table",
		"namespacedId": "cartography_table",
		"description": "A cartography table is a cartographer's job site block that generates in villages. It is used for cloning, zooming out and locking maps.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cartography_table.png",
		"item": "Cartography Table",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [52, 35, 15],
				"amount": 0.726
			},
			{
				"color": [210, 194, 157],
				"amount": 0.214
			},
			{
				"color": [56, 57, 200],
				"amount": 0.051
			}
		]
	},
	{
		"name": "Carved Pumpkin",
		"namespacedId": "carved_pumpkin",
		"description": "A pumpkin is a fruit block that appears in patches in grassy biomes. Pumpkins have the same texture on all 4 sides.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/carved_pumpkin.png",
		"item": "Carved Pumpkin",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [141, 83, 17],
				"amount": 0.741
			},
			{
				"color": [211, 127, 28],
				"amount": 0.125
			},
			{
				"color": [55, 17, 5],
				"amount": 0.119
			},
			{
				"color": [185, 136, 54],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Cauldron",
		"namespacedId": "cauldron",
		"description": "A cauldron is a block that can contain water, lava and powder snow. In Bedrock Edition, it can also hold potions and dyed water. It also is a job site block used by leatherworkers in villages.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cauldron.png",
		"item": "Cauldron",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [47, 47, 49],
				"amount": 0.689
			},
			{
				"color": [76, 76, 76],
				"amount": 0.153
			},
			{
				"color": [90, 85, 86],
				"amount": 0.105
			},
			{
				"color": [68, 67, 67],
				"amount": 0.037
			},
			{
				"color": [76, 68, 76],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Cave Air",
		"namespacedId": "cave_air",
		"description": "Air is an invisible block used to define empty space where any other blocks could otherwise exist.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/air.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": []
	},
	{
		"name": "Cave Vines",
		"namespacedId": "cave_vines",
		"description": "Glow berries are a food item that is collected from cave vines and can be used to plant them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cave_vines.png",
		"item": "Glow Berries",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 14,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [74, 99, 41],
				"amount": 0.56
			},
			{
				"color": [114, 147, 44],
				"amount": 0.21
			},
			{
				"color": [107, 126, 49],
				"amount": 0.16
			},
			{
				"color": [86, 60, 21],
				"amount": 0.066
			}
		]
	},
	{
		"name": "Cave Vines Plant",
		"namespacedId": "cave_vines_plant",
		"description": "Glow berries are a food item that is collected from cave vines and can be used to plant them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cave_vines_plant.png",
		"item": "Sweet Berries",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 14,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [88, 103, 42],
				"amount": 0.624
			},
			{
				"color": [198, 120, 40],
				"amount": 0.224
			},
			{
				"color": [123, 162, 51],
				"amount": 0.088
			},
			{
				"color": [250, 244, 112],
				"amount": 0.051
			},
			{
				"color": [159, 106, 36],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Chain",
		"namespacedId": "chain",
		"description": "Chains are metallic decoration blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chain.png",
		"item": "Chain",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [65, 73, 89],
				"amount": 0.779
			},
			{
				"color": [36, 44, 60],
				"amount": 0.121
			},
			{
				"color": [52, 60, 76],
				"amount": 0.059
			},
			{
				"color": [45, 52, 68],
				"amount": 0.03
			},
			{
				"color": [60, 60, 76],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Chain Command Block",
		"namespacedId": "chain_command_block",
		"description": "A command block is a block that can execute commands. Because it cannot be obtained or edited in Survival mode without cheats, it is primarily used on multiplayer servers, in Creative worlds, and custom maps.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chain_command_block.png",
		"item": "Chain Command Block",
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3600000,
		"colors": [
			{
				"color": [83, 107, 96],
				"amount": 0.77
			},
			{
				"color": [181, 167, 173],
				"amount": 0.075
			},
			{
				"color": [124, 173, 150],
				"amount": 0.068
			},
			{
				"color": [138, 141, 141],
				"amount": 0.049
			},
			{
				"color": [159, 190, 180],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Chest",
		"namespacedId": "chest",
		"description": "A chest is a block that stores items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chest.png",
		"item": "Chest",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [105, 76, 28],
				"amount": 0.677
			},
			{
				"color": [160, 113, 44],
				"amount": 0.209
			},
			{
				"color": [42, 36, 28],
				"amount": 0.094
			}
		]
	},
	{
		"name": "Chipped Anvil",
		"namespacedId": "chipped_anvil",
		"description": "An anvil is a block that allows players to repair items, rename items, and combine enchantments.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chipped_anvil.png",
		"item": "Chipped Anvil",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1200,
		"colors": [
			{
				"color": [51, 51, 51],
				"amount": 0.681
			},
			{
				"color": [84, 84, 84],
				"amount": 0.125
			},
			{
				"color": [76, 76, 76],
				"amount": 0.11
			},
			{
				"color": [97, 96, 96],
				"amount": 0.084
			}
		]
	},
	{
		"name": "Chiseled Deepslate",
		"namespacedId": "chiseled_deepslate",
		"description": "Chiseled deepslate is the chiseled version of deepslate.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chiseled_deepslate.png",
		"item": "Chiseled Deepslate",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [34, 34, 34],
				"amount": 0.586
			},
			{
				"color": [72, 72, 73],
				"amount": 0.222
			},
			{
				"color": [59, 60, 60],
				"amount": 0.143
			},
			{
				"color": [52, 51, 51],
				"amount": 0.048
			}
		]
	},
	{
		"name": "Chiseled Nether Bricks",
		"namespacedId": "chiseled_nether_bricks",
		"description": "Nether bricks  are blocks used to form nether fortresses in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chiseled_nether_bricks.png",
		"item": "Chiseled Nether Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [32, 15, 19],
				"amount": 0.788
			},
			{
				"color": [62, 31, 38],
				"amount": 0.114
			},
			{
				"color": [52, 26, 28],
				"amount": 0.048
			},
			{
				"color": [12, 10, 12],
				"amount": 0.027
			},
			{
				"color": [44, 28, 28],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Chiseled Polished Blackstone",
		"namespacedId": "chiseled_polished_blackstone",
		"description": "Polished blackstone is the stone-like polished variation of blackstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chiseled_polished_blackstone.png",
		"item": "Chiseled Polished Blackstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [35, 31, 37],
				"amount": 0.726
			},
			{
				"color": [65, 63, 73],
				"amount": 0.223
			},
			{
				"color": [16, 11, 11],
				"amount": 0.035
			},
			{
				"color": [52, 52, 59],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Chiseled Quartz Block",
		"namespacedId": "chiseled_quartz_block",
		"description": "A block of quartz is a mineral block used only for decoration. It can be turned into a chiseled quartz block, quartz pillar, or quartz bricks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chiseled_quartz_block.png",
		"item": "Chiseled Quartz Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [152, 148, 142],
				"amount": 0.488
			},
			{
				"color": [234, 228, 223],
				"amount": 0.252
			},
			{
				"color": [219, 214, 203],
				"amount": 0.127
			},
			{
				"color": [193, 187, 183],
				"amount": 0.11
			},
			{
				"color": [196, 196, 194],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Chiseled Red Sandstone",
		"namespacedId": "chiseled_red_sandstone",
		"description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chiseled_red_sandstone.png",
		"item": "Chiseled Red Sandstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [117, 59, 15],
				"amount": 0.49
			},
			{
				"color": [172, 92, 29],
				"amount": 0.197
			},
			{
				"color": [158, 85, 27],
				"amount": 0.166
			},
			{
				"color": [137, 76, 26],
				"amount": 0.093
			},
			{
				"color": [180, 100, 35],
				"amount": 0.054
			}
		]
	},
	{
		"name": "Chiseled Sandstone",
		"namespacedId": "chiseled_sandstone",
		"description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chiseled_sandstone.png",
		"item": "Chiseled Sandstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [138, 129, 97],
				"amount": 0.469
			},
			{
				"color": [218, 209, 166],
				"amount": 0.379
			},
			{
				"color": [173, 166, 130],
				"amount": 0.1
			},
			{
				"color": [187, 180, 148],
				"amount": 0.029
			},
			{
				"color": [190, 188, 160],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Chiseled Stone Bricks",
		"namespacedId": "chiseled_stone_bricks",
		"description": "Stone bricks and the variants  cracked stone bricks,  mossy stone bricks, and  chiseled stone bricks are materials found in structures such as strongholds, igloo basements, jungle temples, ocean ruins and ruined portals.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chiseled_stone_bricks.png",
		"item": "Chiseled Stone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [81, 80, 81],
				"amount": 0.735
			},
			{
				"color": [145, 140, 145],
				"amount": 0.119
			},
			{
				"color": [124, 123, 124],
				"amount": 0.102
			},
			{
				"color": [111, 111, 111],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Chorus Flower",
		"namespacedId": "chorus_flower",
		"description": "Chorus flowers are plants that are found in the End. They grow on chorus plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chorus_flower.png",
		"item": "Chorus Flower",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.4,
		"colors": [
			{
				"color": [86, 59, 86],
				"amount": 0.555
			},
			{
				"color": [218, 208, 221],
				"amount": 0.307
			},
			{
				"color": [154, 140, 154],
				"amount": 0.086
			},
			{
				"color": [187, 166, 187],
				"amount": 0.051
			}
		]
	},
	{
		"name": "Chorus Plant",
		"namespacedId": "chorus_plant",
		"description": "Chorus plants are blocks that naturally generate on the outer islands of the End. They can be grown using chorus flowers.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/chorus_plant.png",
		"item": "Chorus Flower",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.4,
		"colors": [
			{
				"color": [58, 31, 59],
				"amount": 0.594
			},
			{
				"color": [124, 95, 124],
				"amount": 0.258
			},
			{
				"color": [86, 56, 88],
				"amount": 0.073
			},
			{
				"color": [100, 76, 100],
				"amount": 0.065
			},
			{
				"color": [100, 64, 100],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Clay",
		"namespacedId": "clay",
		"description": "Clay is a block that can be smelted to form terracotta and is usually found in locations where sand or dirt and water are present, most commonly appearing in shallow water, especially along the coast of island groups. When mined, four clay balls will drop; those can be smelted into bricks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/clay.png",
		"item": "Clay",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.6,
		"colors": [
			{
				"color": [112, 116, 124],
				"amount": 0.738
			},
			{
				"color": [168, 170, 187],
				"amount": 0.118
			},
			{
				"color": [154, 164, 172],
				"amount": 0.089
			},
			{
				"color": [156, 156, 172],
				"amount": 0.028
			},
			{
				"color": [145, 151, 167],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Coal Ore",
		"namespacedId": "coal_ore",
		"description": "Coal ore is a mineral block that drops coal when mined.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/coal_ore.png",
		"item": "Coal Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [72, 72, 71],
				"amount": 0.634
			},
			{
				"color": [121, 121, 121],
				"amount": 0.23
			},
			{
				"color": [100, 100, 100],
				"amount": 0.088
			},
			{
				"color": [31, 31, 31],
				"amount": 0.031
			},
			{
				"color": [108, 108, 108],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Coarse Dirt",
		"namespacedId": "coarse_dirt",
		"description": "Coarse dirt is a variation of dirt on which grass blocks cannot spread.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/coarse_dirt.png",
		"item": "Coarse Dirt",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [89, 63, 43],
				"amount": 0.845
			},
			{
				"color": [154, 111, 77],
				"amount": 0.13
			},
			{
				"color": [40, 28, 18],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Cobbled Deepslate",
		"namespacedId": "cobbled_deepslate",
		"description": "Cobbled deepslate is a stone variant that functions similar to cobblestone or blackstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cobbled_deepslate.png",
		"item": "Cobbled Deepslate",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [50, 50, 53],
				"amount": 0.711
			},
			{
				"color": [106, 106, 106],
				"amount": 0.142
			},
			{
				"color": [78, 78, 78],
				"amount": 0.087
			},
			{
				"color": [92, 92, 92],
				"amount": 0.057
			}
		]
	},
	{
		"name": "Cobbled Deepslate Slab",
		"namespacedId": "cobbled_deepslate_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cobbled_deepslate_slab.png",
		"item": "Cobbled Deepslate Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [51, 51, 55],
				"amount": 0.65
			},
			{
				"color": [107, 107, 107],
				"amount": 0.188
			},
			{
				"color": [77, 77, 78],
				"amount": 0.088
			},
			{
				"color": [92, 92, 92],
				"amount": 0.071
			}
		]
	},
	{
		"name": "Cobbled Deepslate Stairs",
		"namespacedId": "cobbled_deepslate_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cobbled_deepslate_stairs.png",
		"item": "Cobbled Deepslate Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [50, 50, 53],
				"amount": 0.69
			},
			{
				"color": [106, 106, 106],
				"amount": 0.166
			},
			{
				"color": [78, 78, 78],
				"amount": 0.082
			},
			{
				"color": [92, 92, 92],
				"amount": 0.06
			}
		]
	},
	{
		"name": "Cobbled Deepslate Wall",
		"namespacedId": "cobbled_deepslate_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cobbled_deepslate_wall.png",
		"item": "Cobbled Deepslate Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [52, 52, 55],
				"amount": 0.565
			},
			{
				"color": [84, 84, 84],
				"amount": 0.227
			},
			{
				"color": [101, 101, 101],
				"amount": 0.194
			},
			{
				"color": [76, 76, 76],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Cobblestone",
		"namespacedId": "cobblestone",
		"description": "Cobblestone is a common block, obtained from mining stone.  It is mainly used for crafting or as a building block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cobblestone.png",
		"item": "Cobblestone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [87, 87, 88],
				"amount": 0.788
			},
			{
				"color": [162, 162, 162],
				"amount": 0.13
			},
			{
				"color": [140, 140, 140],
				"amount": 0.05
			},
			{
				"color": [130, 129, 130],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Cobblestone Slab",
		"namespacedId": "cobblestone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cobblestone_slab.png",
		"item": "Cobblestone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [89, 89, 90],
				"amount": 0.738
			},
			{
				"color": [163, 163, 163],
				"amount": 0.183
			},
			{
				"color": [140, 140, 140],
				"amount": 0.039
			},
			{
				"color": [130, 130, 130],
				"amount": 0.033
			}
		]
	},
	{
		"name": "Cobblestone Stairs",
		"namespacedId": "cobblestone_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cobblestone_stairs.png",
		"item": "Cobblestone Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [89, 88, 90],
				"amount": 0.757
			},
			{
				"color": [160, 160, 161],
				"amount": 0.155
			},
			{
				"color": [140, 140, 140],
				"amount": 0.052
			},
			{
				"color": [130, 129, 130],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Cobblestone Wall",
		"namespacedId": "cobblestone_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cobblestone_wall.png",
		"item": "Cobblestone Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [85, 85, 87],
				"amount": 0.669
			},
			{
				"color": [150, 150, 150],
				"amount": 0.248
			},
			{
				"color": [132, 132, 133],
				"amount": 0.066
			},
			{
				"color": [119, 118, 119],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Cobweb",
		"namespacedId": "cobweb",
		"description": "A cobweb is a block that slows down entity movements.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cobweb.png",
		"item": "Cobweb",
		"tool": "Shears",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 4,
		"colors": [
			{
				"color": [165, 173, 178],
				"amount": 0.498
			},
			{
				"color": [188, 195, 196],
				"amount": 0.387
			},
			{
				"color": [211, 212, 212],
				"amount": 0.091
			},
			{
				"color": [196, 204, 204],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Cocoa",
		"namespacedId": "cocoa",
		"description": "Cocoa beans are a food ingredient obtained from cocoa that can be used to craft cookies and brown dye. Cocoa beans are mainly found in the jungle biomes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cocoa.png",
		"item": "Cocoa Beans",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [125, 75, 35],
				"amount": 0.679
			},
			{
				"color": [189, 133, 78],
				"amount": 0.177
			},
			{
				"color": [65, 29, 7],
				"amount": 0.136
			}
		]
	},
	{
		"name": "Command Block",
		"namespacedId": "command_block",
		"description": "A command block is a block that can execute commands. Because it cannot be obtained or edited in Survival mode without cheats, it is primarily used on multiplayer servers, in Creative worlds, and custom maps.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/command_block.png",
		"item": "Command Block",
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3600000,
		"colors": [
			{
				"color": [129, 93, 71],
				"amount": 0.669
			},
			{
				"color": [199, 145, 113],
				"amount": 0.18
			},
			{
				"color": [156, 155, 162],
				"amount": 0.12
			},
			{
				"color": [57, 47, 29],
				"amount": 0.02
			},
			{
				"color": [171, 148, 124],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Composter",
		"namespacedId": "composter",
		"description": "A composter is a block that converts some biological material into bone meal. It also serves as a farmer villager's job site block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/composter.png",
		"item": "Composter",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.6,
		"colors": [
			{
				"color": [80, 49, 22],
				"amount": 0.762
			},
			{
				"color": [163, 107, 58],
				"amount": 0.117
			},
			{
				"color": [35, 20, 8],
				"amount": 0.063
			},
			{
				"color": [132, 92, 50],
				"amount": 0.033
			},
			{
				"color": [123, 79, 38],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Conduit",
		"namespacedId": "conduit",
		"description": "A conduit is a beacon-like block that provides Conduit Power and attacks hostile mobs underwater.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/conduit.png",
		"item": "Conduit",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 3,
		"colors": [
			{
				"color": [117, 101, 80],
				"amount": 0.775
			},
			{
				"color": [172, 163, 146],
				"amount": 0.105
			},
			{
				"color": [47, 42, 25],
				"amount": 0.068
			},
			{
				"color": [172, 134, 108],
				"amount": 0.039
			},
			{
				"color": [172, 156, 124],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Copper Ore",
		"namespacedId": "copper_ore",
		"description": "Copper ore is a mineral block found underground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/copper_ore.png",
		"item": "Copper Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [86, 89, 86],
				"amount": 0.792
			},
			{
				"color": [142, 130, 125],
				"amount": 0.106
			},
			{
				"color": [123, 124, 124],
				"amount": 0.047
			},
			{
				"color": [198, 108, 75],
				"amount": 0.041
			},
			{
				"color": [77, 154, 130],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Cornflower",
		"namespacedId": "cornflower",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cornflower.png",
		"item": "Cornflower",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [92, 122, 234],
				"amount": 0.598
			},
			{
				"color": [80, 139, 72],
				"amount": 0.274
			},
			{
				"color": [45, 108, 36],
				"amount": 0.051
			},
			{
				"color": [44, 76, 196],
				"amount": 0.044
			},
			{
				"color": [72, 55, 157],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Cracked Deepslate Bricks",
		"namespacedId": "cracked_deepslate_bricks",
		"description": "Deepslate bricks are the brick version of deepslate.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cracked_deepslate_bricks.png",
		"item": "Cracked Deepslate Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [41, 41, 41],
				"amount": 0.77
			},
			{
				"color": [91, 91, 91],
				"amount": 0.154
			},
			{
				"color": [75, 76, 76],
				"amount": 0.046
			},
			{
				"color": [68, 67, 67],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Cracked Deepslate Tiles",
		"namespacedId": "cracked_deepslate_tiles",
		"description": "Deepslate tiles are a decorative variant of deepslate.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cracked_deepslate_tiles.png",
		"item": "Cracked Deepslate Tiles",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [34, 33, 34],
				"amount": 0.662
			},
			{
				"color": [72, 72, 72],
				"amount": 0.175
			},
			{
				"color": [60, 60, 60],
				"amount": 0.099
			},
			{
				"color": [52, 52, 52],
				"amount": 0.063
			}
		]
	},
	{
		"name": "Cracked Nether Bricks",
		"namespacedId": "cracked_nether_bricks",
		"description": "Nether bricks  are blocks used to form nether fortresses in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cracked_nether_bricks.png",
		"item": "Cracked Nether Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [26, 13, 16],
				"amount": 0.694
			},
			{
				"color": [43, 22, 28],
				"amount": 0.168
			},
			{
				"color": [56, 28, 32],
				"amount": 0.133
			}
		]
	},
	{
		"name": "Cracked Polished Blackstone Bricks",
		"namespacedId": "cracked_polished_blackstone_bricks",
		"description": "Polished blackstone bricks are a decorative version of polished blackstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cracked_polished_blackstone_bricks.png",
		"item": "Cracked Polished Blackstone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [58, 54, 66],
				"amount": 0.429
			},
			{
				"color": [25, 19, 22],
				"amount": 0.405
			},
			{
				"color": [52, 44, 52],
				"amount": 0.064
			},
			{
				"color": [44, 44, 51],
				"amount": 0.058
			},
			{
				"color": [36, 35, 44],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Cracked Stone Bricks",
		"namespacedId": "cracked_stone_bricks",
		"description": "Stone bricks and the variants  cracked stone bricks,  mossy stone bricks, and  chiseled stone bricks are materials found in structures such as strongholds, igloo basements, jungle temples, ocean ruins and ruined portals.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cracked_stone_bricks.png",
		"item": "Cracked Stone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [80, 80, 80],
				"amount": 0.759
			},
			{
				"color": [124, 123, 124],
				"amount": 0.103
			},
			{
				"color": [142, 137, 142],
				"amount": 0.083
			},
			{
				"color": [111, 111, 111],
				"amount": 0.054
			}
		]
	},
	{
		"name": "Crafting Table",
		"namespacedId": "crafting_table",
		"description": "A crafting table is a utility block that allows the player to craft a variety of blocks and items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crafting_table.png",
		"item": "Crafting Table",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [101, 75, 45],
				"amount": 0.717
			},
			{
				"color": [167, 106, 64],
				"amount": 0.151
			},
			{
				"color": [26, 19, 10],
				"amount": 0.076
			},
			{
				"color": [164, 164, 164],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Creeper Head",
		"namespacedId": "creeper_head",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/creeper_head.png",
		"item": "Creeper Head",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [65, 110, 61],
				"amount": 0.686
			},
			{
				"color": [123, 197, 113],
				"amount": 0.28
			},
			{
				"color": [10, 18, 7],
				"amount": 0.022
			},
			{
				"color": [153, 153, 153],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Creeper Wall Head",
		"namespacedId": "creeper_wall_head",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/creeper_wall_head.png",
		"item": "Creeper Head",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [65, 110, 61],
				"amount": 0.686
			},
			{
				"color": [123, 197, 113],
				"amount": 0.28
			},
			{
				"color": [10, 18, 7],
				"amount": 0.022
			},
			{
				"color": [153, 153, 153],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Crimson Button",
		"namespacedId": "crimson_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_button.png",
		"item": "Crimson Button",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [69, 36, 50],
				"amount": 0.572
			},
			{
				"color": [113, 53, 77],
				"amount": 0.251
			},
			{
				"color": [36, 20, 28],
				"amount": 0.102
			},
			{
				"color": [97, 44, 67],
				"amount": 0.07
			}
		]
	},
	{
		"name": "Crimson Door",
		"namespacedId": "crimson_door",
		"description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_door.png",
		"item": "Crimson Door",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [84, 40, 59],
				"amount": 0.917
			},
			{
				"color": [49, 28, 38],
				"amount": 0.04
			},
			{
				"color": [142, 61, 92],
				"amount": 0.04
			}
		]
	},
	{
		"name": "Crimson Fence",
		"namespacedId": "crimson_fence",
		"description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_fence.png",
		"item": "Crimson Fence",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [59, 29, 42],
				"amount": 0.544
			},
			{
				"color": [131, 62, 88],
				"amount": 0.166
			},
			{
				"color": [99, 44, 67],
				"amount": 0.128
			},
			{
				"color": [82, 44, 59],
				"amount": 0.084
			},
			{
				"color": [107, 52, 76],
				"amount": 0.078
			}
		]
	},
	{
		"name": "Crimson Fence Gate",
		"namespacedId": "crimson_fence_gate",
		"description": "A fence gate is a block that shares the functions of both the door and the fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_fence_gate.png",
		"item": "Crimson Fence Gate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [69, 34, 48],
				"amount": 0.719
			},
			{
				"color": [131, 61, 88],
				"amount": 0.094
			},
			{
				"color": [108, 52, 76],
				"amount": 0.088
			},
			{
				"color": [100, 44, 68],
				"amount": 0.073
			},
			{
				"color": [37, 21, 28],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Crimson Fungus",
		"namespacedId": "crimson_fungus",
		"description": "A fungus is a mushroom-like block that generates in the Nether. There are two types of fungi: crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_fungus.png",
		"item": "Crimson Fungus",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [236, 106, 48],
				"amount": 0.498
			},
			{
				"color": [104, 18, 17],
				"amount": 0.406
			},
			{
				"color": [162, 36, 38],
				"amount": 0.06
			},
			{
				"color": [124, 92, 84],
				"amount": 0.025
			},
			{
				"color": [130, 71, 68],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Crimson Hyphae",
		"namespacedId": "crimson_hyphae",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_hyphae.png",
		"item": "Crimson Hyphae",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [58, 20, 23],
				"amount": 0.639
			},
			{
				"color": [130, 13, 13],
				"amount": 0.176
			},
			{
				"color": [104, 8, 8],
				"amount": 0.083
			},
			{
				"color": [73, 37, 53],
				"amount": 0.062
			},
			{
				"color": [86, 17, 14],
				"amount": 0.04
			}
		]
	},
	{
		"name": "Crimson Nylium",
		"namespacedId": "crimson_nylium",
		"description": "Nylium is a variant of netherrack that generates in the Nether. It has two variants: warped nylium and crimson nylium which both spawn in different biomes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_nylium.png",
		"item": "Crimson Nylium",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [62, 14, 14],
				"amount": 0.449
			},
			{
				"color": [120, 30, 30],
				"amount": 0.253
			},
			{
				"color": [154, 29, 30],
				"amount": 0.224
			},
			{
				"color": [94, 25, 25],
				"amount": 0.056
			},
			{
				"color": [80, 36, 36],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Crimson Planks",
		"namespacedId": "crimson_planks",
		"description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_planks.png",
		"item": "Crimson Planks",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [69, 33, 48],
				"amount": 0.626
			},
			{
				"color": [118, 56, 81],
				"amount": 0.236
			},
			{
				"color": [41, 21, 29],
				"amount": 0.063
			},
			{
				"color": [96, 44, 67],
				"amount": 0.06
			},
			{
				"color": [100, 52, 76],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Crimson Pressure Plate",
		"namespacedId": "crimson_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_pressure_plate.png",
		"item": "Crimson Pressure Plate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [101, 49, 72],
				"amount": 0.389
			},
			{
				"color": [51, 25, 37],
				"amount": 0.342
			},
			{
				"color": [71, 34, 52],
				"amount": 0.129
			},
			{
				"color": [126, 59, 86],
				"amount": 0.099
			},
			{
				"color": [86, 42, 60],
				"amount": 0.041
			}
		]
	},
	{
		"name": "Crimson Roots",
		"namespacedId": "crimson_roots",
		"description": "Not to be confused with Nether Sprouts.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_roots.png",
		"item": "Crimson Roots",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [96, 4, 38],
				"amount": 0.491
			},
			{
				"color": [159, 10, 39],
				"amount": 0.446
			},
			{
				"color": [136, 4, 50],
				"amount": 0.056
			}
		]
	},
	{
		"name": "Crimson Sign",
		"namespacedId": "crimson_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_sign.png",
		"item": "Crimson Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [80, 39, 57],
				"amount": 0.846
			},
			{
				"color": [107, 52, 76],
				"amount": 0.056
			},
			{
				"color": [78, 17, 15],
				"amount": 0.047
			},
			{
				"color": [122, 51, 71],
				"amount": 0.032
			},
			{
				"color": [49, 25, 36],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Crimson Slab",
		"namespacedId": "crimson_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_slab.png",
		"item": "Crimson Slab",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [72, 35, 51],
				"amount": 0.702
			},
			{
				"color": [125, 58, 86],
				"amount": 0.142
			},
			{
				"color": [107, 52, 76],
				"amount": 0.093
			},
			{
				"color": [40, 20, 29],
				"amount": 0.04
			},
			{
				"color": [100, 46, 68],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Crimson Stairs",
		"namespacedId": "crimson_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_stairs.png",
		"item": "Crimson Stairs",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [69, 33, 48],
				"amount": 0.613
			},
			{
				"color": [118, 56, 81],
				"amount": 0.255
			},
			{
				"color": [96, 44, 67],
				"amount": 0.068
			},
			{
				"color": [40, 20, 29],
				"amount": 0.048
			},
			{
				"color": [100, 52, 76],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Crimson Stem",
		"namespacedId": "crimson_stem",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_stem.png",
		"item": "Crimson Stem",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [59, 21, 26],
				"amount": 0.517
			},
			{
				"color": [126, 53, 75],
				"amount": 0.317
			},
			{
				"color": [98, 48, 71],
				"amount": 0.088
			},
			{
				"color": [100, 10, 10],
				"amount": 0.071
			}
		]
	},
	{
		"name": "Crimson Trapdoor",
		"namespacedId": "crimson_trapdoor",
		"description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_trapdoor.png",
		"item": "Crimson Trapdoor",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [75, 36, 52],
				"amount": 0.355
			},
			{
				"color": [135, 61, 89],
				"amount": 0.286
			},
			{
				"color": [92, 44, 68],
				"amount": 0.174
			},
			{
				"color": [107, 51, 74],
				"amount": 0.166
			},
			{
				"color": [47, 26, 38],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Crimson Wall Sign",
		"namespacedId": "crimson_wall_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crimson_wall_sign.png",
		"item": "Crimson Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [73, 37, 53],
				"amount": 0.494
			},
			{
				"color": [104, 48, 71],
				"amount": 0.266
			},
			{
				"color": [92, 44, 68],
				"amount": 0.179
			},
			{
				"color": [123, 58, 83],
				"amount": 0.048
			},
			{
				"color": [92, 44, 60],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Crying Obsidian",
		"namespacedId": "crying_obsidian",
		"description": "Crying obsidian is a luminous variant of obsidian that can be used to craft a respawn anchor and produces purple particles when placed.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/crying_obsidian.png",
		"item": "Crying Obsidian",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 10,
		"blastResistance": 1200,
		"colors": [
			{
				"color": [10, 7, 17],
				"amount": 0.495
			},
			{
				"color": [89, 4, 160],
				"amount": 0.33
			},
			{
				"color": [45, 8, 97],
				"amount": 0.121
			},
			{
				"color": [31, 16, 62],
				"amount": 0.046
			}
		]
	},
	{
		"name": "Cut Copper",
		"namespacedId": "cut_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cut_copper.png",
		"item": "Cut Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [143, 78, 58],
				"amount": 0.561
			},
			{
				"color": [212, 123, 96],
				"amount": 0.201
			},
			{
				"color": [179, 102, 79],
				"amount": 0.148
			},
			{
				"color": [101, 55, 40],
				"amount": 0.087
			}
		]
	},
	{
		"name": "Cut Copper Slab",
		"namespacedId": "cut_copper_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cut_copper_slab.png",
		"item": "Cut Copper Slab",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [149, 82, 61],
				"amount": 0.623
			},
			{
				"color": [218, 125, 100],
				"amount": 0.149
			},
			{
				"color": [102, 55, 41],
				"amount": 0.135
			},
			{
				"color": [184, 103, 80],
				"amount": 0.062
			},
			{
				"color": [196, 116, 84],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Cut Copper Stairs",
		"namespacedId": "cut_copper_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cut_copper_stairs.png",
		"item": "Cut Copper Stairs",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [144, 79, 58],
				"amount": 0.568
			},
			{
				"color": [212, 123, 96],
				"amount": 0.194
			},
			{
				"color": [102, 55, 41],
				"amount": 0.109
			},
			{
				"color": [175, 99, 73],
				"amount": 0.067
			},
			{
				"color": [187, 108, 89],
				"amount": 0.061
			}
		]
	},
	{
		"name": "Cut Red Sandstone",
		"namespacedId": "cut_red_sandstone",
		"description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cut_red_sandstone.png",
		"item": "Cut Red Sandstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [169, 92, 30],
				"amount": 0.603
			},
			{
				"color": [111, 58, 17],
				"amount": 0.256
			},
			{
				"color": [126, 67, 22],
				"amount": 0.098
			},
			{
				"color": [141, 76, 27],
				"amount": 0.025
			},
			{
				"color": [140, 68, 12],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Cut Red Sandstone Slab",
		"namespacedId": "cut_red_sandstone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cut_red_sandstone_slab.png",
		"item": "Cut Red Sandstone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [172, 92, 30],
				"amount": 0.585
			},
			{
				"color": [114, 64, 18],
				"amount": 0.335
			},
			{
				"color": [148, 76, 27],
				"amount": 0.035
			},
			{
				"color": [134, 68, 17],
				"amount": 0.034
			},
			{
				"color": [200, 108, 36],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Cut Sandstone",
		"namespacedId": "cut_sandstone",
		"description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cut_sandstone.png",
		"item": "Cut Sandstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [136, 129, 99],
				"amount": 0.421
			},
			{
				"color": [218, 209, 166],
				"amount": 0.391
			},
			{
				"color": [173, 167, 130],
				"amount": 0.148
			},
			{
				"color": [186, 180, 148],
				"amount": 0.021
			},
			{
				"color": [191, 188, 159],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Cut Sandstone Slab",
		"namespacedId": "cut_sandstone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cut_sandstone_slab.png",
		"item": "Cut Sandstone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [210, 202, 159],
				"amount": 0.578
			},
			{
				"color": [132, 126, 96],
				"amount": 0.341
			},
			{
				"color": [163, 140, 93],
				"amount": 0.037
			},
			{
				"color": [172, 160, 123],
				"amount": 0.028
			},
			{
				"color": [141, 141, 116],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Cyan Banner",
		"namespacedId": "cyan_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_banner.png",
		"item": "Cyan Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [14, 110, 110],
				"amount": 0.892
			},
			{
				"color": [82, 64, 41],
				"amount": 0.063
			},
			{
				"color": [12, 68, 68],
				"amount": 0.032
			},
			{
				"color": [113, 105, 71],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Cyan Bed",
		"namespacedId": "cyan_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_bed.png",
		"item": "Cyan Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [21, 98, 95],
				"amount": 0.441
			},
			{
				"color": [211, 214, 212],
				"amount": 0.417
			},
			{
				"color": [20, 169, 164],
				"amount": 0.085
			},
			{
				"color": [103, 88, 66],
				"amount": 0.057
			}
		]
	},
	{
		"name": "Cyan Candle",
		"namespacedId": "cyan_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_candle.png",
		"item": "Cyan Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [12, 94, 94],
				"amount": 0.773
			},
			{
				"color": [14, 132, 132],
				"amount": 0.092
			},
			{
				"color": [12, 67, 68],
				"amount": 0.069
			},
			{
				"color": [12, 60, 60],
				"amount": 0.034
			},
			{
				"color": [20, 20, 35],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Cyan Carpet",
		"namespacedId": "cyan_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_carpet.png",
		"item": "Cyan Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [20, 130, 139],
				"amount": 0.774
			},
			{
				"color": [20, 149, 150],
				"amount": 0.1
			},
			{
				"color": [12, 82, 87],
				"amount": 0.094
			},
			{
				"color": [20, 100, 108],
				"amount": 0.019
			},
			{
				"color": [20, 108, 116],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Cyan Concrete",
		"namespacedId": "cyan_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_concrete.png",
		"item": "Cyan Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [20, 115, 131],
				"amount": 0.523
			},
			{
				"color": [20, 94, 108],
				"amount": 0.328
			},
			{
				"color": [12, 75, 84],
				"amount": 0.139
			}
		]
	},
	{
		"name": "Cyan Concrete Powder",
		"namespacedId": "cyan_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_concrete_powder.png",
		"item": "Cyan Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [23, 103, 109],
				"amount": 0.764
			},
			{
				"color": [35, 145, 153],
				"amount": 0.156
			},
			{
				"color": [37, 168, 169],
				"amount": 0.049
			},
			{
				"color": [35, 130, 144],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Cyan Glazed Terracotta",
		"namespacedId": "cyan_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_glazed_terracotta.png",
		"item": "Cyan Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [32, 70, 77],
				"amount": 0.589
			},
			{
				"color": [156, 161, 165],
				"amount": 0.274
			},
			{
				"color": [25, 162, 162],
				"amount": 0.077
			},
			{
				"color": [21, 126, 133],
				"amount": 0.059
			}
		]
	},
	{
		"name": "Cyan Shulker Box",
		"namespacedId": "cyan_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_shulker_box.png",
		"item": "Cyan Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [11, 70, 80],
				"amount": 0.64
			},
			{
				"color": [20, 126, 136],
				"amount": 0.24
			},
			{
				"color": [19, 104, 115],
				"amount": 0.067
			},
			{
				"color": [16, 92, 108],
				"amount": 0.028
			},
			{
				"color": [20, 106, 124],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Cyan Stained Glass",
		"namespacedId": "cyan_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_stained_glass.png",
		"item": "Cyan Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [76, 124, 153],
				"amount": 0.417
			},
			{
				"color": [52, 76, 100],
				"amount": 0.246
			},
			{
				"color": [60, 100, 124],
				"amount": 0.22
			},
			{
				"color": [68, 108, 132],
				"amount": 0.061
			},
			{
				"color": [44, 76, 92],
				"amount": 0.057
			}
		]
	},
	{
		"name": "Cyan Stained Glass Pane",
		"namespacedId": "cyan_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_stained_glass_pane.png",
		"item": "Cyan Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [44, 75, 89],
				"amount": 0.455
			},
			{
				"color": [60, 100, 123],
				"amount": 0.413
			},
			{
				"color": [73, 121, 143],
				"amount": 0.12
			}
		]
	},
	{
		"name": "Cyan Terracotta",
		"namespacedId": "cyan_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_terracotta.png",
		"item": "Cyan Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [84, 89, 90],
				"amount": 0.483
			},
			{
				"color": [69, 75, 76],
				"amount": 0.266
			},
			{
				"color": [52, 55, 55],
				"amount": 0.202
			},
			{
				"color": [68, 68, 68],
				"amount": 0.048
			}
		]
	},
	{
		"name": "Cyan Wall Banner",
		"namespacedId": "cyan_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_wall_banner.png",
		"item": "Cyan Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [14, 110, 110],
				"amount": 0.908
			},
			{
				"color": [92, 75, 48],
				"amount": 0.073
			},
			{
				"color": [12, 68, 68],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Cyan Wool",
		"namespacedId": "cyan_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/cyan_wool.png",
		"item": "Cyan Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [13, 86, 91],
				"amount": 0.436
			},
			{
				"color": [20, 144, 147],
				"amount": 0.172
			},
			{
				"color": [20, 119, 122],
				"amount": 0.16
			},
			{
				"color": [20, 128, 140],
				"amount": 0.141
			},
			{
				"color": [20, 105, 116],
				"amount": 0.092
			}
		]
	},
	{
		"name": "Damaged Anvil",
		"namespacedId": "damaged_anvil",
		"description": "An anvil is a block that allows players to repair items, rename items, and combine enchantments.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/damaged_anvil.png",
		"item": "Damaged Anvil",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1200,
		"colors": [
			{
				"color": [51, 51, 51],
				"amount": 0.682
			},
			{
				"color": [84, 84, 84],
				"amount": 0.114
			},
			{
				"color": [76, 76, 76],
				"amount": 0.108
			},
			{
				"color": [97, 96, 96],
				"amount": 0.096
			}
		]
	},
	{
		"name": "Dandelion",
		"namespacedId": "dandelion",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dandelion.png",
		"item": "Dandelion",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [251, 228, 71],
				"amount": 0.536
			},
			{
				"color": [37, 129, 14],
				"amount": 0.24
			},
			{
				"color": [76, 148, 44],
				"amount": 0.109
			},
			{
				"color": [227, 144, 36],
				"amount": 0.089
			},
			{
				"color": [142, 174, 41],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Dark Oak Button",
		"namespacedId": "dark_oak_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_button.png",
		"item": "Dark Oak Button",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [34, 22, 11],
				"amount": 0.344
			},
			{
				"color": [79, 50, 26],
				"amount": 0.241
			},
			{
				"color": [63, 44, 20],
				"amount": 0.234
			},
			{
				"color": [49, 33, 13],
				"amount": 0.107
			},
			{
				"color": [60, 36, 20],
				"amount": 0.076
			}
		]
	},
	{
		"name": "Dark Oak Door",
		"namespacedId": "dark_oak_door",
		"description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_door.png",
		"item": "Dark Oak Door",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [52, 35, 17],
				"amount": 0.894
			},
			{
				"color": [77, 60, 45],
				"amount": 0.088
			},
			{
				"color": [150, 105, 5],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Dark Oak Fence",
		"namespacedId": "dark_oak_fence",
		"description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_fence.png",
		"item": "Dark Oak Fence",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [50, 33, 15],
				"amount": 0.808
			},
			{
				"color": [36, 20, 12],
				"amount": 0.077
			},
			{
				"color": [80, 50, 25],
				"amount": 0.077
			},
			{
				"color": [28, 19, 6],
				"amount": 0.021
			},
			{
				"color": [68, 44, 20],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Dark Oak Fence Gate",
		"namespacedId": "dark_oak_fence_gate",
		"description": "A fence gate is a block that shares the functions of both the door and the fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_fence_gate.png",
		"item": "Dark Oak Fence Gate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [44, 28, 12],
				"amount": 0.433
			},
			{
				"color": [66, 44, 20],
				"amount": 0.295
			},
			{
				"color": [83, 54, 26],
				"amount": 0.126
			},
			{
				"color": [60, 36, 20],
				"amount": 0.08
			},
			{
				"color": [26, 18, 9],
				"amount": 0.066
			}
		]
	},
	{
		"name": "Dark Oak Leaves",
		"namespacedId": "dark_oak_leaves",
		"description": "Leaves are natural blocks that generate as part of trees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_leaves.png",
		"item": "Dark Oak Leaves",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [36, 86, 12],
				"amount": 0.37
			},
			{
				"color": [27, 67, 11],
				"amount": 0.248
			},
			{
				"color": [43, 107, 12],
				"amount": 0.156
			},
			{
				"color": [51, 129, 19],
				"amount": 0.137
			},
			{
				"color": [20, 47, 4],
				"amount": 0.089
			}
		]
	},
	{
		"name": "Dark Oak Log",
		"namespacedId": "dark_oak_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_log.png",
		"item": "Dark Oak Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [38, 29, 16],
				"amount": 0.747
			},
			{
				"color": [70, 45, 21],
				"amount": 0.163
			},
			{
				"color": [52, 44, 20],
				"amount": 0.04
			},
			{
				"color": [60, 40, 23],
				"amount": 0.036
			},
			{
				"color": [20, 20, 12],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Dark Oak Planks",
		"namespacedId": "dark_oak_planks",
		"description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_planks.png",
		"item": "Dark Oak Planks",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [50, 33, 15],
				"amount": 0.772
			},
			{
				"color": [78, 49, 24],
				"amount": 0.122
			},
			{
				"color": [36, 20, 12],
				"amount": 0.05
			},
			{
				"color": [28, 18, 8],
				"amount": 0.034
			},
			{
				"color": [68, 44, 20],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Dark Oak Pressure Plate",
		"namespacedId": "dark_oak_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_pressure_plate.png",
		"item": "Dark Oak Pressure Plate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [71, 45, 22],
				"amount": 0.747
			},
			{
				"color": [32, 22, 10],
				"amount": 0.158
			},
			{
				"color": [44, 28, 12],
				"amount": 0.064
			},
			{
				"color": [52, 28, 12],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Dark Oak Sapling",
		"namespacedId": "dark_oak_sapling",
		"description": "A sapling is a non-solid block that can be grown into a tree.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_sapling.png",
		"item": "Dark Oak Sapling",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [71, 150, 49],
				"amount": 0.345
			},
			{
				"color": [23, 90, 21],
				"amount": 0.344
			},
			{
				"color": [98, 69, 33],
				"amount": 0.21
			},
			{
				"color": [74, 53, 20],
				"amount": 0.07
			},
			{
				"color": [38, 110, 29],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Dark Oak Sign",
		"namespacedId": "dark_oak_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_sign.png",
		"item": "Dark Oak Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [54, 36, 16],
				"amount": 0.475
			},
			{
				"color": [68, 44, 20],
				"amount": 0.23
			},
			{
				"color": [45, 28, 12],
				"amount": 0.179
			},
			{
				"color": [36, 27, 13],
				"amount": 0.114
			}
		]
	},
	{
		"name": "Dark Oak Slab",
		"namespacedId": "dark_oak_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_slab.png",
		"item": "Dark Oak Slab",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [49, 32, 14],
				"amount": 0.701
			},
			{
				"color": [78, 49, 24],
				"amount": 0.191
			},
			{
				"color": [68, 44, 20],
				"amount": 0.041
			},
			{
				"color": [36, 20, 12],
				"amount": 0.041
			},
			{
				"color": [28, 18, 7],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Dark Oak Stairs",
		"namespacedId": "dark_oak_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_stairs.png",
		"item": "Dark Oak Stairs",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [49, 32, 14],
				"amount": 0.739
			},
			{
				"color": [78, 49, 24],
				"amount": 0.139
			},
			{
				"color": [68, 44, 20],
				"amount": 0.048
			},
			{
				"color": [36, 20, 12],
				"amount": 0.047
			},
			{
				"color": [28, 18, 8],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Dark Oak Trapdoor",
		"namespacedId": "dark_oak_trapdoor",
		"description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_trapdoor.png",
		"item": "Dark Oak Trapdoor",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [62, 41, 18],
				"amount": 0.784
			},
			{
				"color": [85, 53, 28],
				"amount": 0.101
			},
			{
				"color": [108, 72, 35],
				"amount": 0.083
			},
			{
				"color": [34, 24, 12],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Dark Oak Wall Sign",
		"namespacedId": "dark_oak_wall_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_wall_sign.png",
		"item": "Dark Oak Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [56, 36, 17],
				"amount": 0.477
			},
			{
				"color": [68, 44, 20],
				"amount": 0.302
			},
			{
				"color": [44, 28, 12],
				"amount": 0.127
			},
			{
				"color": [36, 28, 12],
				"amount": 0.091
			}
		]
	},
	{
		"name": "Dark Oak Wood",
		"namespacedId": "dark_oak_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_oak_wood.png",
		"item": "Dark Oak Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [36, 28, 16],
				"amount": 0.605
			},
			{
				"color": [73, 53, 30],
				"amount": 0.167
			},
			{
				"color": [60, 52, 28],
				"amount": 0.109
			},
			{
				"color": [52, 37, 20],
				"amount": 0.082
			},
			{
				"color": [60, 44, 27],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Dark Prismarine",
		"namespacedId": "dark_prismarine",
		"description": "Prismarine is a type of stone that appears underwater in ruins and ocean monuments. It periodically changes color between blue and green.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_prismarine.png",
		"item": "Dark Prismarine",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [33, 56, 47],
				"amount": 0.605
			},
			{
				"color": [55, 114, 92],
				"amount": 0.204
			},
			{
				"color": [44, 77, 64],
				"amount": 0.083
			},
			{
				"color": [51, 84, 76],
				"amount": 0.066
			},
			{
				"color": [50, 96, 79],
				"amount": 0.041
			}
		]
	},
	{
		"name": "Dark Prismarine Slab",
		"namespacedId": "dark_prismarine_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_prismarine_slab.png",
		"item": "Dark Prismarine Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [39, 67, 57],
				"amount": 0.656
			},
			{
				"color": [58, 116, 94],
				"amount": 0.238
			},
			{
				"color": [54, 99, 84],
				"amount": 0.05
			},
			{
				"color": [24, 37, 36],
				"amount": 0.028
			},
			{
				"color": [51, 93, 76],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Dark Prismarine Stairs",
		"namespacedId": "dark_prismarine_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dark_prismarine_stairs.png",
		"item": "Dark Prismarine Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [39, 66, 56],
				"amount": 0.737
			},
			{
				"color": [56, 115, 92],
				"amount": 0.183
			},
			{
				"color": [51, 95, 78],
				"amount": 0.05
			},
			{
				"color": [24, 37, 36],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Daylight Detector",
		"namespacedId": "daylight_detector",
		"description": "A daylight detector is a block that outputs a redstone signal based on sunlight.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/daylight_detector.png",
		"item": "Daylight Detector",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [200, 184, 164],
				"amount": 0.624
			},
			{
				"color": [52, 44, 29],
				"amount": 0.35
			},
			{
				"color": [105, 83, 58],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Dead Brain Coral",
		"namespacedId": "dead_brain_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_brain_coral.png",
		"item": "Dead Brain Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [162, 159, 152],
				"amount": 0.547
			},
			{
				"color": [124, 116, 108],
				"amount": 0.424
			},
			{
				"color": [140, 132, 126],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Dead Brain Coral Block",
		"namespacedId": "dead_brain_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_brain_coral_block.png",
		"item": "Dead Brain Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [84, 80, 77],
				"amount": 0.677
			},
			{
				"color": [141, 136, 130],
				"amount": 0.25
			},
			{
				"color": [124, 116, 116],
				"amount": 0.052
			},
			{
				"color": [117, 107, 102],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Dead Brain Coral Fan",
		"namespacedId": "dead_brain_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_brain_coral_fan.png",
		"item": "Dead Brain Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [117, 109, 103],
				"amount": 0.659
			},
			{
				"color": [148, 144, 139],
				"amount": 0.259
			},
			{
				"color": [86, 84, 84],
				"amount": 0.052
			},
			{
				"color": [140, 132, 124],
				"amount": 0.015
			},
			{
				"color": [140, 132, 132],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Dead Brain Coral Wall Fan",
		"namespacedId": "dead_brain_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_brain_coral_wall_fan.png",
		"item": "Dead Brain Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [117, 109, 103],
				"amount": 0.635
			},
			{
				"color": [146, 143, 138],
				"amount": 0.229
			},
			{
				"color": [85, 84, 84],
				"amount": 0.113
			},
			{
				"color": [140, 132, 124],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Dead Bubble Coral",
		"namespacedId": "dead_bubble_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_bubble_coral.png",
		"item": "Dead Bubble Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [125, 116, 109],
				"amount": 0.582
			},
			{
				"color": [157, 150, 143],
				"amount": 0.3
			},
			{
				"color": [92, 92, 92],
				"amount": 0.104
			}
		]
	},
	{
		"name": "Dead Bubble Coral Block",
		"namespacedId": "dead_bubble_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_bubble_coral_block.png",
		"item": "Dead Bubble Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [88, 82, 79],
				"amount": 0.725
			},
			{
				"color": [149, 144, 139],
				"amount": 0.134
			},
			{
				"color": [123, 114, 110],
				"amount": 0.11
			},
			{
				"color": [132, 132, 124],
				"amount": 0.019
			},
			{
				"color": [131, 124, 124],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Dead Bubble Coral Fan",
		"namespacedId": "dead_bubble_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_bubble_coral_fan.png",
		"item": "Dead Bubble Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [145, 140, 136],
				"amount": 0.643
			},
			{
				"color": [108, 100, 93],
				"amount": 0.206
			},
			{
				"color": [88, 86, 85],
				"amount": 0.13
			},
			{
				"color": [115, 108, 100],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Dead Bubble Coral Wall Fan",
		"namespacedId": "dead_bubble_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_bubble_coral_wall_fan.png",
		"item": "Dead Bubble Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [145, 141, 136],
				"amount": 0.636
			},
			{
				"color": [108, 100, 93],
				"amount": 0.223
			},
			{
				"color": [89, 87, 86],
				"amount": 0.114
			},
			{
				"color": [115, 108, 100],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Dead Bush",
		"namespacedId": "dead_bush",
		"description": "Dead bushes are transparent blocks in the form of an aesthetic plant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_bush.png",
		"item": "Dead Bush",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [93, 72, 40],
				"amount": 0.567
			},
			{
				"color": [153, 103, 44],
				"amount": 0.341
			},
			{
				"color": [137, 98, 41],
				"amount": 0.09
			}
		]
	},
	{
		"name": "Dead Fire Coral",
		"namespacedId": "dead_fire_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_fire_coral.png",
		"item": "Dead Fire Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0,
		"colors": [
			{
				"color": [159, 154, 147],
				"amount": 0.595
			},
			{
				"color": [123, 115, 107],
				"amount": 0.387
			}
		]
	},
	{
		"name": "Dead Fire Coral Block",
		"namespacedId": "dead_fire_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_fire_coral_block.png",
		"item": "Dead Fire Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 6,
		"colors": [
			{
				"color": [87, 83, 79],
				"amount": 0.72
			},
			{
				"color": [149, 144, 139],
				"amount": 0.142
			},
			{
				"color": [124, 115, 111],
				"amount": 0.113
			},
			{
				"color": [132, 132, 124],
				"amount": 0.014
			},
			{
				"color": [131, 124, 124],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Dead Fire Coral Fan",
		"namespacedId": "dead_fire_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_fire_coral_fan.png",
		"item": "Dead Fire Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0,
		"colors": [
			{
				"color": [118, 110, 105],
				"amount": 0.528
			},
			{
				"color": [85, 84, 84],
				"amount": 0.269
			},
			{
				"color": [145, 142, 137],
				"amount": 0.174
			},
			{
				"color": [140, 132, 124],
				"amount": 0.015
			},
			{
				"color": [139, 132, 132],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Dead Fire Coral Wall Fan",
		"namespacedId": "dead_fire_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_fire_coral_wall_fan.png",
		"item": "Dead Fire Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0,
		"colors": [
			{
				"color": [118, 110, 104],
				"amount": 0.517
			},
			{
				"color": [85, 84, 84],
				"amount": 0.255
			},
			{
				"color": [145, 142, 137],
				"amount": 0.194
			},
			{
				"color": [139, 132, 132],
				"amount": 0.024
			},
			{
				"color": [140, 132, 124],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Dead Horn Coral",
		"namespacedId": "dead_horn_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_horn_coral.png",
		"item": "Dead Horn Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [128, 118, 112],
				"amount": 0.403
			},
			{
				"color": [155, 148, 140],
				"amount": 0.373
			},
			{
				"color": [139, 132, 124],
				"amount": 0.198
			},
			{
				"color": [164, 164, 156],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Dead Horn Coral Block",
		"namespacedId": "dead_horn_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_horn_coral_block.png",
		"item": "Dead Horn Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [87, 82, 78],
				"amount": 0.677
			},
			{
				"color": [155, 149, 146],
				"amount": 0.154
			},
			{
				"color": [122, 113, 109],
				"amount": 0.091
			},
			{
				"color": [132, 132, 124],
				"amount": 0.06
			},
			{
				"color": [130, 124, 124],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Dead Horn Coral Fan",
		"namespacedId": "dead_horn_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_horn_coral_fan.png",
		"item": "Dead Horn Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [119, 110, 104],
				"amount": 0.672
			},
			{
				"color": [145, 142, 137],
				"amount": 0.239
			},
			{
				"color": [86, 84, 84],
				"amount": 0.046
			},
			{
				"color": [140, 132, 132],
				"amount": 0.026
			},
			{
				"color": [140, 132, 124],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Dead Horn Coral Wall Fan",
		"namespacedId": "dead_horn_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_horn_coral_wall_fan.png",
		"item": "Dead Horn Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [117, 109, 103],
				"amount": 0.754
			},
			{
				"color": [146, 143, 138],
				"amount": 0.166
			},
			{
				"color": [85, 84, 84],
				"amount": 0.052
			},
			{
				"color": [140, 132, 132],
				"amount": 0.017
			},
			{
				"color": [140, 132, 124],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Dead Tube Coral",
		"namespacedId": "dead_tube_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_tube_coral.png",
		"item": "Dead Tube Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [108, 103, 99],
				"amount": 0.578
			},
			{
				"color": [139, 132, 124],
				"amount": 0.231
			},
			{
				"color": [161, 158, 152],
				"amount": 0.127
			},
			{
				"color": [136, 124, 124],
				"amount": 0.053
			},
			{
				"color": [132, 122, 116],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Dead Tube Coral Block",
		"namespacedId": "dead_tube_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_tube_coral_block.png",
		"item": "Dead Tube Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [87, 83, 79],
				"amount": 0.755
			},
			{
				"color": [151, 146, 142],
				"amount": 0.116
			},
			{
				"color": [125, 117, 113],
				"amount": 0.092
			},
			{
				"color": [132, 132, 124],
				"amount": 0.022
			},
			{
				"color": [131, 124, 124],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Dead Tube Coral Fan",
		"namespacedId": "dead_tube_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_tube_coral_fan.png",
		"item": "Dead Tube Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [101, 95, 92],
				"amount": 0.499
			},
			{
				"color": [144, 140, 135],
				"amount": 0.441
			},
			{
				"color": [126, 117, 111],
				"amount": 0.04
			},
			{
				"color": [131, 124, 124],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Dead Tube Coral Wall Fan",
		"namespacedId": "dead_tube_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dead_tube_coral_wall_fan.png",
		"item": "Dead Tube Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [110, 103, 98],
				"amount": 0.406
			},
			{
				"color": [145, 142, 137],
				"amount": 0.357
			},
			{
				"color": [86, 85, 84],
				"amount": 0.151
			},
			{
				"color": [137, 130, 124],
				"amount": 0.076
			}
		]
	},
	{
		"name": "Deepslate",
		"namespacedId": "deepslate",
		"description": "Deepslate is a stone type found deep underground in the Overworld that functions similarly to regular stone, but is significantly more difficult to break.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate.png",
		"item": "Deepslate",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [51, 51, 54],
				"amount": 0.527
			},
			{
				"color": [100, 100, 100],
				"amount": 0.309
			},
			{
				"color": [84, 84, 84],
				"amount": 0.125
			},
			{
				"color": [76, 76, 76],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Deepslate Brick Slab",
		"namespacedId": "deepslate_brick_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_brick_slab.png",
		"item": "Deepslate Brick Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [53, 53, 54],
				"amount": 0.667
			},
			{
				"color": [90, 90, 90],
				"amount": 0.299
			},
			{
				"color": [25, 25, 25],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Deepslate Brick Stairs",
		"namespacedId": "deepslate_brick_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_brick_stairs.png",
		"item": "Deepslate Brick Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [53, 53, 54],
				"amount": 0.71
			},
			{
				"color": [90, 90, 90],
				"amount": 0.249
			},
			{
				"color": [25, 25, 26],
				"amount": 0.038
			}
		]
	},
	{
		"name": "Deepslate Brick Wall",
		"namespacedId": "deepslate_brick_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_brick_wall.png",
		"item": "Deepslate Brick Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [44, 44, 45],
				"amount": 0.607
			},
			{
				"color": [91, 91, 91],
				"amount": 0.213
			},
			{
				"color": [75, 76, 76],
				"amount": 0.145
			},
			{
				"color": [68, 68, 68],
				"amount": 0.021
			},
			{
				"color": [68, 68, 76],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Deepslate Bricks",
		"namespacedId": "deepslate_bricks",
		"description": "Deepslate bricks are the brick version of deepslate.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_bricks.png",
		"item": "Deepslate Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [50, 50, 51],
				"amount": 0.655
			},
			{
				"color": [90, 90, 90],
				"amount": 0.26
			},
			{
				"color": [75, 76, 76],
				"amount": 0.051
			},
			{
				"color": [25, 25, 25],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Deepslate Coal Ore",
		"namespacedId": "deepslate_coal_ore",
		"description": "Coal ore is a mineral block that drops coal when mined.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_coal_ore.png",
		"item": "Deepslate Coal Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [55, 55, 56],
				"amount": 0.86
			},
			{
				"color": [104, 104, 104],
				"amount": 0.106
			},
			{
				"color": [11, 11, 11],
				"amount": 0.02
			},
			{
				"color": [92, 92, 92],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Deepslate Copper Ore",
		"namespacedId": "deepslate_copper_ore",
		"description": "Copper ore is a mineral block found underground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_copper_ore.png",
		"item": "Deepslate Copper Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [63, 67, 67],
				"amount": 0.863
			},
			{
				"color": [186, 102, 71],
				"amount": 0.069
			},
			{
				"color": [120, 103, 92],
				"amount": 0.049
			},
			{
				"color": [76, 152, 128],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Deepslate Diamond Ore",
		"namespacedId": "deepslate_diamond_ore",
		"description": "Diamond ore is a rare ore that generates deep underground, and is the only reliable source of diamonds.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_diamond_ore.png",
		"item": "Deepslate Diamond Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [63, 70, 72],
				"amount": 0.795
			},
			{
				"color": [109, 203, 191],
				"amount": 0.148
			},
			{
				"color": [70, 136, 134],
				"amount": 0.032
			},
			{
				"color": [28, 164, 171],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Deepslate Emerald Ore",
		"namespacedId": "deepslate_emerald_ore",
		"description": "Emerald ore is a rare mineral block that generates only in mountains and windswept hills biomes. It drops emeralds when mined, or itself if mined with a pickaxe with the Silk Touch enchantment.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_emerald_ore.png",
		"item": "Deepslate Emerald Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [61, 68, 64],
				"amount": 0.811
			},
			{
				"color": [84, 206, 128],
				"amount": 0.145
			},
			{
				"color": [25, 135, 54],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Deepslate Gold Ore",
		"namespacedId": "deepslate_gold_ore",
		"description": "Gold ore is a rare mineral block found underground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_gold_ore.png",
		"item": "Deepslate Gold Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [69, 67, 66],
				"amount": 0.725
			},
			{
				"color": [209, 165, 45],
				"amount": 0.215
			},
			{
				"color": [139, 101, 33],
				"amount": 0.049
			}
		]
	},
	{
		"name": "Deepslate Iron Ore",
		"namespacedId": "deepslate_iron_ore",
		"description": "Iron ore is a mineral block found underground. It is a source of raw iron, which can be smelted into iron ingots.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_iron_ore.png",
		"item": "Deepslate Iron Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [69, 67, 66],
				"amount": 0.819
			},
			{
				"color": [183, 150, 127],
				"amount": 0.121
			},
			{
				"color": [127, 113, 97],
				"amount": 0.059
			}
		]
	},
	{
		"name": "Deepslate Lapis Lazuli Ore",
		"namespacedId": "deepslate_lapis_ore",
		"description": "Lapis lazuli ore is the ore block from which lapis lazuli is obtained.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_lapis_ore.png",
		"item": "Deepslate Lapis Lazuli Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [59, 62, 69],
				"amount": 0.707
			},
			{
				"color": [56, 98, 194],
				"amount": 0.147
			},
			{
				"color": [38, 69, 138],
				"amount": 0.086
			},
			{
				"color": [100, 100, 100],
				"amount": 0.036
			},
			{
				"color": [116, 116, 115],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Deepslate Redstone Ore",
		"namespacedId": "deepslate_redstone_ore",
		"description": "Redstone ore is the ore block from which redstone is obtained.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/deepslate_redstone_ore.png",
		"item": "Deepslate Redstone Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 9,
		"blastResistance": 3,
		"colors": [
			{
				"color": [63, 55, 57],
				"amount": 0.764
			},
			{
				"color": [215, 37, 37],
				"amount": 0.097
			},
			{
				"color": [142, 28, 28],
				"amount": 0.09
			},
			{
				"color": [104, 104, 104],
				"amount": 0.039
			}
		]
	},
	{
		"name": "Detector Rail",
		"namespacedId": "detector_rail",
		"description": "A detector rail is a block that can transport minecarts and can be used as a switchable redstone power source.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/detector_rail.png",
		"item": "Detector Rail",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.7,
		"colors": [
			{
				"color": [108, 97, 77],
				"amount": 0.623
			},
			{
				"color": [83, 7, 7],
				"amount": 0.161
			},
			{
				"color": [146, 146, 146],
				"amount": 0.15
			},
			{
				"color": [76, 60, 36],
				"amount": 0.06
			}
		]
	},
	{
		"name": "Diamond Ore",
		"namespacedId": "diamond_ore",
		"description": "Diamond ore is a rare ore that generates deep underground, and is the only reliable source of diamonds.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/diamond_ore.png",
		"item": "Diamond Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [98, 102, 102],
				"amount": 0.875
			},
			{
				"color": [85, 200, 188],
				"amount": 0.062
			},
			{
				"color": [98, 168, 172],
				"amount": 0.028
			},
			{
				"color": [184, 219, 211],
				"amount": 0.023
			},
			{
				"color": [26, 118, 121],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Diorite",
		"namespacedId": "diorite",
		"description": "Diorite is a block of igneous rock, found in large pockets in the ground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/diorite.png",
		"item": "Diorite",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [134, 134, 134],
				"amount": 0.706
			},
			{
				"color": [202, 202, 202],
				"amount": 0.274
			},
			{
				"color": [83, 83, 83],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Diorite Slab",
		"namespacedId": "diorite_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/diorite_slab.png",
		"item": "Diorite Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [146, 145, 147],
				"amount": 0.724
			},
			{
				"color": [218, 218, 219],
				"amount": 0.171
			},
			{
				"color": [92, 92, 92],
				"amount": 0.046
			},
			{
				"color": [188, 188, 196],
				"amount": 0.044
			},
			{
				"color": [195, 196, 198],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Diorite Stairs",
		"namespacedId": "diorite_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/diorite_stairs.png",
		"item": "Diorite Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [145, 144, 146],
				"amount": 0.741
			},
			{
				"color": [216, 216, 217],
				"amount": 0.168
			},
			{
				"color": [188, 188, 196],
				"amount": 0.046
			},
			{
				"color": [92, 92, 92],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Diorite Wall",
		"namespacedId": "diorite_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/diorite_wall.png",
		"item": "Diorite Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [126, 126, 127],
				"amount": 0.683
			},
			{
				"color": [200, 200, 205],
				"amount": 0.213
			},
			{
				"color": [167, 166, 169],
				"amount": 0.051
			},
			{
				"color": [188, 188, 188],
				"amount": 0.036
			},
			{
				"color": [179, 180, 182],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Dirt",
		"namespacedId": "dirt",
		"description": "Dirt is a block found abundantly in most biomes under a layer of grass blocks at the top of the Overworld.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dirt.png",
		"item": "Dirt",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [100, 71, 48],
				"amount": 0.756
			},
			{
				"color": [156, 113, 79],
				"amount": 0.197
			},
			{
				"color": [60, 44, 32],
				"amount": 0.029
			},
			{
				"color": [120, 116, 113],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Dirt Path",
		"namespacedId": "dirt_path",
		"description": "Dirt paths are decorative blocks. They are mainly found in villages.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dirt_path.png",
		"item": "Dirt Path",
		"tool": "Shovel",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.65,
		"colors": [
			{
				"color": [121, 94, 58],
				"amount": 0.868
			},
			{
				"color": [76, 52, 36],
				"amount": 0.056
			},
			{
				"color": [164, 135, 74],
				"amount": 0.05
			},
			{
				"color": [56, 40, 30],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Dispenser",
		"namespacedId": "dispenser",
		"description": "A dispenser is a solid block used as a redstone component to dispense items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dispenser.png",
		"item": "Dispenser",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [92, 92, 93],
				"amount": 0.858
			},
			{
				"color": [146, 146, 149],
				"amount": 0.056
			},
			{
				"color": [52, 52, 52],
				"amount": 0.046
			},
			{
				"color": [32, 30, 30],
				"amount": 0.04
			}
		]
	},
	{
		"name": "Dragon Egg",
		"namespacedId": "dragon_egg",
		"description": "The dragon egg is a decorative block or a \"trophy item\", and is the rarest item obtainable in the game, as it generates once (or twice in Bedrock Edition).[1]",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dragon_egg.png",
		"item": "Dragon Egg",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 1,
		"blastResistance": 9,
		"colors": [
			{
				"color": [7, 7, 9],
				"amount": 0.803
			},
			{
				"color": [38, 4, 42],
				"amount": 0.111
			},
			{
				"color": [28, 4, 28],
				"amount": 0.076
			}
		]
	},
	{
		"name": "Dragon Head",
		"namespacedId": "dragon_head",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dragon_head.png",
		"item": "Dragon Head",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [18, 18, 18],
				"amount": 0.893
			},
			{
				"color": [142, 65, 159],
				"amount": 0.08
			},
			{
				"color": [81, 81, 81],
				"amount": 0.012
			},
			{
				"color": [68, 68, 68],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Dragon Wall Head",
		"namespacedId": "dragon_wall_head",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dragon_wall_head.png",
		"item": "Dragon Head",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [18, 18, 18],
				"amount": 0.893
			},
			{
				"color": [142, 65, 159],
				"amount": 0.08
			},
			{
				"color": [81, 81, 81],
				"amount": 0.012
			},
			{
				"color": [68, 68, 68],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Dried Kelp Block",
		"namespacedId": "dried_kelp_block",
		"description": "Dried kelp blocks are blocks primarily used as fuel in furnaces.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dried_kelp_block.png",
		"item": "Dried Kelp Block",
		"tool": "Hoe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [26, 34, 19],
				"amount": 0.761
			},
			{
				"color": [119, 123, 102],
				"amount": 0.236
			}
		]
	},
	{
		"name": "Dripstone Block",
		"namespacedId": "dripstone_block",
		"description": "The dripstone block is a rock block that allows pointed dripstone to grow beneath it.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dripstone_block.png",
		"item": "Dripstone Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [101, 80, 68],
				"amount": 0.751
			},
			{
				"color": [148, 124, 104],
				"amount": 0.14
			},
			{
				"color": [132, 116, 92],
				"amount": 0.051
			},
			{
				"color": [65, 49, 49],
				"amount": 0.045
			},
			{
				"color": [129, 106, 92],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Dropper",
		"namespacedId": "dropper",
		"description": "A dropper is a block that can be used to eject items or to push items into another container.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/dropper.png",
		"item": "Dropper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [93, 92, 93],
				"amount": 0.856
			},
			{
				"color": [145, 145, 148],
				"amount": 0.055
			},
			{
				"color": [52, 52, 52],
				"amount": 0.045
			},
			{
				"color": [32, 31, 31],
				"amount": 0.041
			}
		]
	},
	{
		"name": "Emerald Ore",
		"namespacedId": "emerald_ore",
		"description": "Emerald ore is a rare mineral block that generates only in mountains and windswept hills biomes. It drops emeralds when mined, or itself if mined with a pickaxe with the Silk Touch enchantment.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/emerald_ore.png",
		"item": "Emerald Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [75, 94, 79],
				"amount": 0.823
			},
			{
				"color": [140, 140, 140],
				"amount": 0.069
			},
			{
				"color": [125, 128, 126],
				"amount": 0.037
			},
			{
				"color": [182, 221, 198],
				"amount": 0.036
			},
			{
				"color": [40, 201, 97],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Enchanting Table",
		"namespacedId": "enchanting_table",
		"description": "An enchanting table is a block that allows players to spend their experience point levels to enchant tools, weapons, books, armor, and certain other items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/enchanting_table.png",
		"item": "Enchanting Table",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1200,
		"colors": [
			{
				"color": [225, 213, 163],
				"amount": 0.372
			},
			{
				"color": [21, 12, 22],
				"amount": 0.296
			},
			{
				"color": [94, 185, 168],
				"amount": 0.23
			},
			{
				"color": [134, 53, 41],
				"amount": 0.101
			}
		]
	},
	{
		"name": "End Gateway",
		"namespacedId": "end_gateway",
		"description": "The end gateway is a block that appears as part of end gateways, which teleport the player between the main island and the other islands in the End.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/end_gateway.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 3600000,
		"colors": [
			{
				"color": [6, 13, 22],
				"amount": 0.897
			},
			{
				"color": [41, 96, 92],
				"amount": 0.057
			},
			{
				"color": [21, 50, 55],
				"amount": 0.022
			},
			{
				"color": [46, 44, 66],
				"amount": 0.014
			}
		]
	},
	{
		"name": "End Portal",
		"namespacedId": "end_portal",
		"description": "The end portal block is a block generated when an end portal or exit portal is activated, which teleports the player between the Overworld and the End.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/end_portal.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 3600000,
		"colors": [
			{
				"color": [4, 12, 20],
				"amount": 0.765
			},
			{
				"color": [33, 41, 59],
				"amount": 0.162
			},
			{
				"color": [14, 24, 37],
				"amount": 0.055
			},
			{
				"color": [18, 36, 44],
				"amount": 0.013
			}
		]
	},
	{
		"name": "End Portal Frame",
		"namespacedId": "end_portal_frame",
		"description": "An end portal frame is a block that resembles end stone with a decorative bluish-green top, with sides decorated in hollow rounded rectangles with the same color as the top.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/end_portal_frame.png",
		"item": "End Portal Frame",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 1,
		"blastResistance": 3600000,
		"colors": [
			{
				"color": [46, 73, 65],
				"amount": 0.557
			},
			{
				"color": [145, 144, 102],
				"amount": 0.263
			},
			{
				"color": [195, 197, 144],
				"amount": 0.163
			},
			{
				"color": [153, 191, 140],
				"amount": 0.016
			}
		]
	},
	{
		"name": "End Rod",
		"namespacedId": "end_rod",
		"description": "An end rod is a decorative light source that emits white particles.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/end_rod.png",
		"item": "End Rod",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 14,
		"blastResistance": 0,
		"colors": [
			{
				"color": [154, 148, 140],
				"amount": 0.698
			},
			{
				"color": [216, 206, 194],
				"amount": 0.214
			},
			{
				"color": [204, 190, 176],
				"amount": 0.059
			},
			{
				"color": [92, 91, 86],
				"amount": 0.022
			}
		]
	},
	{
		"name": "End Stone",
		"namespacedId": "end_stone",
		"description": "End stone is a block that appears in The End and, apart from generated structures, makes up all of the solid ground that exists in that dimension.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/end_stone.png",
		"item": "End Stone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 9,
		"colors": [
			{
				"color": [144, 144, 101],
				"amount": 0.498
			},
			{
				"color": [222, 227, 163],
				"amount": 0.342
			},
			{
				"color": [189, 189, 135],
				"amount": 0.068
			},
			{
				"color": [188, 196, 148],
				"amount": 0.061
			},
			{
				"color": [200, 205, 144],
				"amount": 0.031
			}
		]
	},
	{
		"name": "End Stone Brick Slab",
		"namespacedId": "end_stone_brick_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/end_stone_brick_slab.png",
		"item": "End Stone Brick Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 9,
		"colors": [
			{
				"color": [207, 214, 156],
				"amount": 0.731
			},
			{
				"color": [124, 122, 87],
				"amount": 0.127
			},
			{
				"color": [149, 153, 113],
				"amount": 0.088
			},
			{
				"color": [132, 140, 100],
				"amount": 0.046
			}
		]
	},
	{
		"name": "End Stone Brick Stairs",
		"namespacedId": "end_stone_brick_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/end_stone_brick_stairs.png",
		"item": "End Stone Brick Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [199, 204, 147],
				"amount": 0.742
			},
			{
				"color": [123, 123, 87],
				"amount": 0.138
			},
			{
				"color": [146, 150, 110],
				"amount": 0.06
			},
			{
				"color": [132, 140, 100],
				"amount": 0.052
			}
		]
	},
	{
		"name": "End Stone Brick Wall",
		"namespacedId": "end_stone_brick_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/end_stone_brick_wall.png",
		"item": "End Stone Brick Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 9,
		"colors": [
			{
				"color": [167, 173, 126],
				"amount": 0.77
			},
			{
				"color": [226, 237, 174],
				"amount": 0.124
			},
			{
				"color": [135, 132, 94],
				"amount": 0.045
			},
			{
				"color": [111, 111, 80],
				"amount": 0.039
			},
			{
				"color": [196, 204, 164],
				"amount": 0.022
			}
		]
	},
	{
		"name": "End Stone Bricks",
		"namespacedId": "end_stone_bricks",
		"description": "End stone bricks are an end stone-based brick.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/end_stone_bricks.png",
		"item": "End Stone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 9,
		"colors": [
			{
				"color": [140, 143, 102],
				"amount": 0.567
			},
			{
				"color": [222, 229, 167],
				"amount": 0.299
			},
			{
				"color": [185, 190, 136],
				"amount": 0.094
			},
			{
				"color": [201, 198, 144],
				"amount": 0.023
			},
			{
				"color": [188, 195, 162],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Ender Chest",
		"namespacedId": "ender_chest",
		"description": "Ender chests are a type of chest whose contents are exclusive to each player, and can be accessed from anywhere in the world.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/ender_chest.png",
		"item": "Ender Chest",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 7,
		"blastResistance": 600,
		"colors": [
			{
				"color": [23, 36, 39],
				"amount": 0.839
			},
			{
				"color": [168, 149, 62],
				"amount": 0.12
			},
			{
				"color": [88, 143, 84],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Exposed Copper",
		"namespacedId": "exposed_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/exposed_copper.png",
		"item": "Exposed Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [128, 98, 82],
				"amount": 0.729
			},
			{
				"color": [86, 76, 61],
				"amount": 0.122
			},
			{
				"color": [187, 131, 119],
				"amount": 0.11
			},
			{
				"color": [147, 138, 104],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Exposed Cut Copper",
		"namespacedId": "exposed_cut_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/exposed_cut_copper.png",
		"item": "Exposed Cut Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [105, 85, 70],
				"amount": 0.637
			},
			{
				"color": [153, 115, 99],
				"amount": 0.159
			},
			{
				"color": [184, 129, 118],
				"amount": 0.151
			},
			{
				"color": [136, 108, 92],
				"amount": 0.032
			},
			{
				"color": [115, 137, 96],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Exposed Cut Copper Slab",
		"namespacedId": "exposed_cut_copper_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/exposed_cut_copper_slab.png",
		"item": "Exposed Cut Copper Slab",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [124, 98, 82],
				"amount": 0.736
			},
			{
				"color": [185, 130, 119],
				"amount": 0.163
			},
			{
				"color": [75, 68, 54],
				"amount": 0.072
			},
			{
				"color": [137, 141, 104],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Exposed Cut Copper Stairs",
		"namespacedId": "exposed_cut_copper_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/exposed_cut_copper_stairs.png",
		"item": "Exposed Cut Copper Stairs",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [105, 85, 69],
				"amount": 0.598
			},
			{
				"color": [153, 114, 96],
				"amount": 0.202
			},
			{
				"color": [186, 129, 119],
				"amount": 0.146
			},
			{
				"color": [137, 109, 92],
				"amount": 0.027
			},
			{
				"color": [114, 135, 93],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Farmland",
		"namespacedId": "farmland",
		"description": "Farmland is a block on which seeds, root vegetables, and most saplings can be planted and grown.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/farmland.png",
		"item": "Farmland",
		"tool": "Shovel",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.6,
		"colors": [
			{
				"color": [90, 63, 44],
				"amount": 0.675
			},
			{
				"color": [159, 116, 81],
				"amount": 0.263
			},
			{
				"color": [126, 91, 61],
				"amount": 0.055
			}
		]
	},
	{
		"name": "Fern",
		"namespacedId": "fern",
		"description": "Grass is a non-solid plant block that has wheat seeds as a drop. Its color is biome-dependent, and matches the color of grass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/fern.png",
		"item": "Fern",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [47, 75, 39],
				"amount": 0.326
			},
			{
				"color": [68, 100, 59],
				"amount": 0.278
			},
			{
				"color": [77, 115, 64],
				"amount": 0.219
			},
			{
				"color": [60, 91, 52],
				"amount": 0.173
			}
		]
	},
	{
		"name": "Fire",
		"namespacedId": "fire",
		"description": "Fire is a neutral non-solid block that can spread to nearby flammable blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/fire.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0,
		"colors": [
			{
				"color": [193, 95, 5],
				"amount": 0.463
			},
			{
				"color": [250, 244, 227],
				"amount": 0.36
			},
			{
				"color": [237, 201, 86],
				"amount": 0.09
			},
			{
				"color": [222, 162, 32],
				"amount": 0.087
			}
		]
	},
	{
		"name": "Fire Coral",
		"namespacedId": "fire_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/fire_coral.png",
		"item": "Fire Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0,
		"colors": [
			{
				"color": [163, 35, 44],
				"amount": 0.421
			},
			{
				"color": [124, 28, 36],
				"amount": 0.284
			},
			{
				"color": [224, 58, 52],
				"amount": 0.194
			},
			{
				"color": [195, 43, 52],
				"amount": 0.101
			}
		]
	},
	{
		"name": "Fire Coral Block",
		"namespacedId": "fire_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/fire_coral_block.png",
		"item": "Fire Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 6,
		"colors": [
			{
				"color": [114, 24, 33],
				"amount": 0.658
			},
			{
				"color": [195, 46, 50],
				"amount": 0.133
			},
			{
				"color": [160, 35, 44],
				"amount": 0.119
			},
			{
				"color": [80, 18, 24],
				"amount": 0.056
			},
			{
				"color": [141, 29, 42],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Fire Coral Fan",
		"namespacedId": "fire_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/fire_coral_fan.png",
		"item": "Fire Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0,
		"colors": [
			{
				"color": [197, 46, 51],
				"amount": 0.326
			},
			{
				"color": [120, 26, 36],
				"amount": 0.319
			},
			{
				"color": [154, 33, 44],
				"amount": 0.206
			},
			{
				"color": [174, 37, 48],
				"amount": 0.141
			}
		]
	},
	{
		"name": "Fire Coral Wall Fan",
		"namespacedId": "fire_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/fire_coral_wall_fan.png",
		"item": "Fire Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0,
		"colors": [
			{
				"color": [123, 28, 36],
				"amount": 0.441
			},
			{
				"color": [197, 46, 51],
				"amount": 0.278
			},
			{
				"color": [154, 33, 44],
				"amount": 0.166
			},
			{
				"color": [176, 37, 49],
				"amount": 0.089
			},
			{
				"color": [114, 20, 36],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Fletching Table",
		"namespacedId": "fletching_table",
		"description": "A fletching table is a fletcher's job site block that can generate naturally in villages. The fletching table is used to turn an unemployed villager into a Fletcher.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/fletching_table.png",
		"item": "Fletching Table",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [142, 127, 94],
				"amount": 0.856
			},
			{
				"color": [51, 34, 19],
				"amount": 0.05
			},
			{
				"color": [223, 222, 221],
				"amount": 0.039
			},
			{
				"color": [210, 187, 131],
				"amount": 0.039
			},
			{
				"color": [219, 202, 141],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Flower Pot",
		"namespacedId": "flower_pot",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/flower_pot.png",
		"item": "Flower Pot",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [89, 48, 37],
				"amount": 0.794
			},
			{
				"color": [124, 71, 56],
				"amount": 0.188
			}
		]
	},
	{
		"name": "Flowering Azalea",
		"namespacedId": "flowering_azalea",
		"description": "An azalea is a solid block that can be grown into an azalea tree.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/flowering_azalea.png",
		"item": "Flowering Azalea",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [81, 98, 39],
				"amount": 0.757
			},
			{
				"color": [165, 95, 178],
				"amount": 0.197
			},
			{
				"color": [118, 73, 114],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Flowering Azalea Leaves",
		"namespacedId": "flowering_azalea_leaves",
		"description": "Leaves are natural blocks that generate as part of trees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/flowering_azalea_leaves.png",
		"item": "Flowering Azalea Leaves",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [65, 81, 33],
				"amount": 0.749
			},
			{
				"color": [162, 92, 177],
				"amount": 0.162
			},
			{
				"color": [107, 131, 47],
				"amount": 0.044
			},
			{
				"color": [116, 65, 114],
				"amount": 0.028
			},
			{
				"color": [154, 77, 129],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Frosted Ice",
		"namespacedId": "frosted_ice",
		"description": "Frosted ice is a translucent solid block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/frosted_ice.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [121, 159, 227],
				"amount": 0.725
			},
			{
				"color": [86, 112, 156],
				"amount": 0.191
			},
			{
				"color": [154, 192, 252],
				"amount": 0.05
			},
			{
				"color": [178, 195, 232],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Furnace",
		"namespacedId": "furnace",
		"description": "A furnace is a utility block used for the smelting of blocks and items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/furnace.png",
		"item": "Furnace",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 13,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [81, 81, 81],
				"amount": 0.764
			},
			{
				"color": [140, 140, 142],
				"amount": 0.157
			},
			{
				"color": [21, 21, 21],
				"amount": 0.044
			},
			{
				"color": [124, 124, 124],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Gilded Blackstone",
		"namespacedId": "gilded_blackstone",
		"description": "Gilded blackstone is a variant of blackstone that can drop itself or gold nuggets when mined.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gilded_blackstone.png",
		"item": "Gilded Blackstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [37, 29, 30],
				"amount": 0.849
			},
			{
				"color": [192, 144, 28],
				"amount": 0.11
			},
			{
				"color": [112, 69, 13],
				"amount": 0.033
			}
		]
	},
	{
		"name": "Glass",
		"namespacedId": "glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/glass.png",
		"item": "Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [115, 141, 148],
				"amount": 0.434
			},
			{
				"color": [190, 211, 214],
				"amount": 0.411
			},
			{
				"color": [142, 188, 202],
				"amount": 0.077
			},
			{
				"color": [163, 203, 216],
				"amount": 0.06
			},
			{
				"color": [140, 172, 180],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Glass Pane",
		"namespacedId": "glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/glass_pane.png",
		"item": "Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [105, 130, 135],
				"amount": 0.492
			},
			{
				"color": [153, 177, 179],
				"amount": 0.363
			},
			{
				"color": [124, 156, 164],
				"amount": 0.119
			},
			{
				"color": [191, 217, 217],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Glowstone",
		"namespacedId": "glowstone",
		"description": "Glowstone is a light-emitting block that occurs in branching structures, found hanging from ceilings and overhangs in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/glowstone.png",
		"item": "Glowstone",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [109, 74, 40],
				"amount": 0.582
			},
			{
				"color": [220, 210, 193],
				"amount": 0.237
			},
			{
				"color": [221, 189, 104],
				"amount": 0.108
			},
			{
				"color": [199, 139, 86],
				"amount": 0.043
			},
			{
				"color": [155, 145, 128],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Gold Ore",
		"namespacedId": "gold_ore",
		"description": "Gold ore is a rare mineral block found underground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gold_ore.png",
		"item": "Gold Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [97, 96, 92],
				"amount": 0.736
			},
			{
				"color": [210, 167, 47],
				"amount": 0.188
			},
			{
				"color": [125, 89, 23],
				"amount": 0.049
			},
			{
				"color": [146, 146, 146],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Granite",
		"namespacedId": "granite",
		"description": "Granite is a block of igneous rock, found in large pockets in the ground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/granite.png",
		"item": "Granite",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [116, 80, 66],
				"amount": 0.956
			},
			{
				"color": [180, 143, 127],
				"amount": 0.03
			},
			{
				"color": [58, 39, 32],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Granite Slab",
		"namespacedId": "granite_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/granite_slab.png",
		"item": "Granite Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [128, 87, 72],
				"amount": 0.939
			},
			{
				"color": [71, 48, 41],
				"amount": 0.032
			},
			{
				"color": [184, 143, 129],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Granite Stairs",
		"namespacedId": "granite_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/granite_stairs.png",
		"item": "Granite Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [123, 85, 70],
				"amount": 0.938
			},
			{
				"color": [71, 49, 41],
				"amount": 0.044
			},
			{
				"color": [186, 146, 128],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Granite Wall",
		"namespacedId": "granite_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/granite_wall.png",
		"item": "Granite Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [114, 78, 65],
				"amount": 0.933
			},
			{
				"color": [168, 124, 108],
				"amount": 0.05
			},
			{
				"color": [59, 40, 33],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Grass",
		"namespacedId": "grass",
		"description": "Grass is a non-solid plant block that has wheat seeds as a drop. Its color is biome-dependent, and matches the color of grass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/grass.png",
		"item": "Grass",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [69, 106, 59],
				"amount": 0.784
			},
			{
				"color": [90, 138, 76],
				"amount": 0.142
			},
			{
				"color": [54, 83, 46],
				"amount": 0.066
			}
		]
	},
	{
		"name": "Grass Block",
		"namespacedId": "grass_block",
		"description": "A grass block is a natural block that generates abundantly across the surface of the Overworld.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/grass_block.png",
		"item": "Grass Block",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.6,
		"colors": [
			{
				"color": [68, 67, 42],
				"amount": 0.554
			},
			{
				"color": [75, 115, 65],
				"amount": 0.217
			},
			{
				"color": [132, 96, 65],
				"amount": 0.136
			},
			{
				"color": [104, 72, 52],
				"amount": 0.09
			}
		]
	},
	{
		"name": "Gravel",
		"namespacedId": "gravel",
		"description": "Gravel is a block that is affected by gravity.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gravel.png",
		"item": "Gravel",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.6,
		"colors": [
			{
				"color": [101, 98, 98],
				"amount": 0.849
			},
			{
				"color": [149, 147, 147],
				"amount": 0.097
			},
			{
				"color": [67, 64, 63],
				"amount": 0.031
			},
			{
				"color": [136, 132, 132],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Gray Banner",
		"namespacedId": "gray_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_banner.png",
		"item": "Gray Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [50, 54, 58],
				"amount": 0.94
			},
			{
				"color": [99, 81, 53],
				"amount": 0.045
			}
		]
	},
	{
		"name": "Gray Bed",
		"namespacedId": "gray_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_bed.png",
		"item": "Gray Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [75, 80, 77],
				"amount": 0.674
			},
			{
				"color": [218, 222, 222],
				"amount": 0.296
			},
			{
				"color": [164, 172, 172],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Gray Candle",
		"namespacedId": "gray_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_candle.png",
		"item": "Gray Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [70, 80, 82],
				"amount": 0.504
			},
			{
				"color": [44, 53, 58],
				"amount": 0.284
			},
			{
				"color": [52, 60, 60],
				"amount": 0.124
			},
			{
				"color": [20, 20, 36],
				"amount": 0.045
			},
			{
				"color": [52, 60, 68],
				"amount": 0.043
			}
		]
	},
	{
		"name": "Gray Carpet",
		"namespacedId": "gray_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_carpet.png",
		"item": "Gray Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [61, 66, 69],
				"amount": 0.888
			},
			{
				"color": [37, 39, 42],
				"amount": 0.078
			},
			{
				"color": [44, 52, 52],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Gray Concrete",
		"namespacedId": "gray_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_concrete.png",
		"item": "Gray Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [44, 44, 52],
				"amount": 0.417
			},
			{
				"color": [52, 60, 60],
				"amount": 0.329
			},
			{
				"color": [36, 36, 36],
				"amount": 0.232
			},
			{
				"color": [52, 52, 59],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Gray Concrete Powder",
		"namespacedId": "gray_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_concrete_powder.png",
		"item": "Gray Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [53, 56, 59],
				"amount": 0.599
			},
			{
				"color": [76, 78, 82],
				"amount": 0.262
			},
			{
				"color": [85, 94, 96],
				"amount": 0.068
			},
			{
				"color": [77, 84, 92],
				"amount": 0.043
			},
			{
				"color": [68, 76, 76],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Gray Glazed Terracotta",
		"namespacedId": "gray_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_glazed_terracotta.png",
		"item": "Gray Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [52, 58, 61],
				"amount": 0.711
			},
			{
				"color": [136, 136, 137],
				"amount": 0.178
			},
			{
				"color": [90, 95, 96],
				"amount": 0.056
			},
			{
				"color": [98, 116, 119],
				"amount": 0.031
			},
			{
				"color": [92, 108, 116],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Gray Shulker Box",
		"namespacedId": "gray_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_shulker_box.png",
		"item": "Gray Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [33, 35, 37],
				"amount": 0.679
			},
			{
				"color": [58, 64, 66],
				"amount": 0.23
			},
			{
				"color": [52, 52, 60],
				"amount": 0.055
			},
			{
				"color": [52, 52, 52],
				"amount": 0.02
			},
			{
				"color": [44, 52, 52],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Gray Stained Glass",
		"namespacedId": "gray_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_stained_glass.png",
		"item": "Gray Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [76, 76, 76],
				"amount": 0.386
			},
			{
				"color": [48, 48, 48],
				"amount": 0.345
			},
			{
				"color": [60, 60, 68],
				"amount": 0.152
			},
			{
				"color": [68, 68, 68],
				"amount": 0.06
			},
			{
				"color": [60, 60, 60],
				"amount": 0.057
			}
		]
	},
	{
		"name": "Gray Stained Glass Pane",
		"namespacedId": "gray_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_stained_glass_pane.png",
		"item": "Gray Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [60, 60, 60],
				"amount": 0.442
			},
			{
				"color": [44, 44, 44],
				"amount": 0.323
			},
			{
				"color": [76, 76, 76],
				"amount": 0.12
			},
			{
				"color": [68, 68, 68],
				"amount": 0.116
			}
		]
	},
	{
		"name": "Gray Terracotta",
		"namespacedId": "gray_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_terracotta.png",
		"item": "Gray Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [44, 36, 28],
				"amount": 0.389
			},
			{
				"color": [60, 43, 35],
				"amount": 0.314
			},
			{
				"color": [36, 28, 20],
				"amount": 0.232
			},
			{
				"color": [52, 39, 33],
				"amount": 0.062
			}
		]
	},
	{
		"name": "Gray Wall Banner",
		"namespacedId": "gray_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_wall_banner.png",
		"item": "Gray Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [50, 54, 58],
				"amount": 0.947
			},
			{
				"color": [100, 81, 54],
				"amount": 0.039
			}
		]
	},
	{
		"name": "Gray Wool",
		"namespacedId": "gray_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/gray_wool.png",
		"item": "Gray Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [43, 47, 49],
				"amount": 0.698
			},
			{
				"color": [66, 72, 76],
				"amount": 0.147
			},
			{
				"color": [60, 60, 67],
				"amount": 0.079
			},
			{
				"color": [60, 68, 68],
				"amount": 0.074
			}
		]
	},
	{
		"name": "Green Banner",
		"namespacedId": "green_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_banner.png",
		"item": "Green Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [68, 90, 14],
				"amount": 0.942
			},
			{
				"color": [44, 50, 14],
				"amount": 0.04
			},
			{
				"color": [113, 104, 68],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Green Bed",
		"namespacedId": "green_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_bed.png",
		"item": "Green Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [213, 217, 217],
				"amount": 0.498
			},
			{
				"color": [69, 83, 22],
				"amount": 0.476
			},
			{
				"color": [99, 100, 100],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Green Candle",
		"namespacedId": "green_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_candle.png",
		"item": "Green Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [55, 73, 14],
				"amount": 0.749
			},
			{
				"color": [36, 51, 12],
				"amount": 0.126
			},
			{
				"color": [77, 106, 20],
				"amount": 0.082
			},
			{
				"color": [20, 20, 36],
				"amount": 0.029
			},
			{
				"color": [44, 52, 12],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Green Carpet",
		"namespacedId": "green_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_carpet.png",
		"item": "Green Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [79, 102, 27],
				"amount": 0.735
			},
			{
				"color": [52, 66, 18],
				"amount": 0.133
			},
			{
				"color": [92, 116, 20],
				"amount": 0.074
			},
			{
				"color": [97, 128, 23],
				"amount": 0.056
			}
		]
	},
	{
		"name": "Green Concrete",
		"namespacedId": "green_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_concrete.png",
		"item": "Green Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [60, 75, 28],
				"amount": 0.569
			},
			{
				"color": [76, 91, 36],
				"amount": 0.167
			},
			{
				"color": [44, 52, 20],
				"amount": 0.165
			},
			{
				"color": [44, 60, 20],
				"amount": 0.073
			},
			{
				"color": [68, 92, 36],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Green Concrete Powder",
		"namespacedId": "green_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_concrete_powder.png",
		"item": "Green Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [81, 100, 37],
				"amount": 0.625
			},
			{
				"color": [102, 126, 39],
				"amount": 0.159
			},
			{
				"color": [57, 67, 28],
				"amount": 0.107
			},
			{
				"color": [60, 76, 26],
				"amount": 0.081
			},
			{
				"color": [100, 116, 46],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Green Glazed Terracotta",
		"namespacedId": "green_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_glazed_terracotta.png",
		"item": "Green Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [76, 99, 29],
				"amount": 0.614
			},
			{
				"color": [164, 169, 170],
				"amount": 0.353
			},
			{
				"color": [135, 164, 76],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Green Shulker Box",
		"namespacedId": "green_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_shulker_box.png",
		"item": "Green Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [46, 57, 20],
				"amount": 0.495
			},
			{
				"color": [82, 106, 28],
				"amount": 0.178
			},
			{
				"color": [67, 85, 26],
				"amount": 0.125
			},
			{
				"color": [60, 72, 28],
				"amount": 0.112
			},
			{
				"color": [76, 92, 36],
				"amount": 0.09
			}
		]
	},
	{
		"name": "Green Stained Glass",
		"namespacedId": "green_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_stained_glass.png",
		"item": "Green Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [100, 124, 52],
				"amount": 0.453
			},
			{
				"color": [84, 101, 44],
				"amount": 0.405
			},
			{
				"color": [60, 76, 35],
				"amount": 0.14
			}
		]
	},
	{
		"name": "Green Stained Glass Pane",
		"namespacedId": "green_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_stained_glass_pane.png",
		"item": "Green Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [60, 75, 28],
				"amount": 0.456
			},
			{
				"color": [84, 100, 44],
				"amount": 0.413
			},
			{
				"color": [95, 121, 46],
				"amount": 0.121
			}
		]
	},
	{
		"name": "Green Terracotta",
		"namespacedId": "green_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_terracotta.png",
		"item": "Green Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [45, 52, 27],
				"amount": 0.369
			},
			{
				"color": [76, 82, 42],
				"amount": 0.316
			},
			{
				"color": [60, 68, 36],
				"amount": 0.305
			}
		]
	},
	{
		"name": "Green Wall Banner",
		"namespacedId": "green_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_wall_banner.png",
		"item": "Green Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [68, 89, 14],
				"amount": 0.963
			},
			{
				"color": [43, 53, 12],
				"amount": 0.021
			},
			{
				"color": [114, 105, 70],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Green Wool",
		"namespacedId": "green_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/green_wool.png",
		"item": "Green Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [58, 75, 20],
				"amount": 0.741
			},
			{
				"color": [84, 107, 25],
				"amount": 0.109
			},
			{
				"color": [91, 119, 21],
				"amount": 0.1
			},
			{
				"color": [76, 100, 25],
				"amount": 0.048
			}
		]
	},
	{
		"name": "Grindstone",
		"namespacedId": "grindstone",
		"description": "A grindstone is a block that repairs items and tools as well as removing enchantments from them. It also serves as a weaponsmith's job site block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/grindstone.png",
		"item": "Grindstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [108, 108, 108],
				"amount": 0.712
			},
			{
				"color": [46, 32, 15],
				"amount": 0.247
			},
			{
				"color": [163, 163, 163],
				"amount": 0.028
			},
			{
				"color": [68, 68, 68],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Hanging Roots",
		"namespacedId": "hanging_roots",
		"description": "Hanging roots are a natural decorative block found underground in the lush caves biome.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/hanging_roots.png",
		"item": "Hanging Roots",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [190, 141, 106],
				"amount": 0.461
			},
			{
				"color": [149, 98, 69],
				"amount": 0.372
			},
			{
				"color": [203, 162, 146],
				"amount": 0.161
			}
		]
	},
	{
		"name": "Hay Bale",
		"namespacedId": "hay_block",
		"description": "Hay bales are decorative, flammable blocks that can also be used to feed horses, breed llamas, reduce fall damage, and extend campfire smokes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/hay_block.png",
		"item": "Hay Bale",
		"tool": "Hoe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [113, 95, 24],
				"amount": 0.666
			},
			{
				"color": [180, 151, 11],
				"amount": 0.16
			},
			{
				"color": [101, 47, 25],
				"amount": 0.08
			},
			{
				"color": [153, 131, 23],
				"amount": 0.073
			},
			{
				"color": [164, 148, 35],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Heavy Weighted Pressure Plate",
		"namespacedId": "heavy_weighted_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/heavy_weighted_pressure_plate.png",
		"item": "Heavy Weighted Pressure Plate",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [226, 226, 227],
				"amount": 0.568
			},
			{
				"color": [132, 132, 133],
				"amount": 0.415
			}
		]
	},
	{
		"name": "Honey Block",
		"namespacedId": "honey_block",
		"description": "Honey blocks are sticky blocks craftable from honey bottles. Honey blocks can slow entities, similar to soul sand and slime block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/honey_block.png",
		"item": "Honey Block",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [165, 112, 21],
				"amount": 0.549
			},
			{
				"color": [245, 191, 68],
				"amount": 0.235
			},
			{
				"color": [241, 154, 20],
				"amount": 0.089
			},
			{
				"color": [190, 162, 84],
				"amount": 0.068
			},
			{
				"color": [201, 152, 48],
				"amount": 0.058
			}
		]
	},
	{
		"name": "Honeycomb Block",
		"namespacedId": "honeycomb_block",
		"description": "Honeycomb blocks are decorative blocks crafted from honeycombs.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/honeycomb_block.png",
		"item": "Honeycomb Block",
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.6,
		"colors": [
			{
				"color": [159, 94, 9],
				"amount": 0.492
			},
			{
				"color": [234, 189, 80],
				"amount": 0.296
			},
			{
				"color": [223, 134, 12],
				"amount": 0.166
			},
			{
				"color": [160, 142, 76],
				"amount": 0.028
			},
			{
				"color": [203, 142, 26],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Hopper",
		"namespacedId": "hopper",
		"description": "A hopper is a block that can be used to catch item entities, or to transfer items into and out of containers.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/hopper.png",
		"item": "Hopper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 4.8,
		"colors": [
			{
				"color": [47, 46, 47],
				"amount": 0.624
			},
			{
				"color": [68, 68, 68],
				"amount": 0.203
			},
			{
				"color": [89, 86, 86],
				"amount": 0.094
			},
			{
				"color": [76, 76, 76],
				"amount": 0.078
			}
		]
	},
	{
		"name": "Horn Coral",
		"namespacedId": "horn_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/horn_coral.png",
		"item": "Horn Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [218, 203, 68],
				"amount": 0.635
			},
			{
				"color": [181, 141, 49],
				"amount": 0.294
			},
			{
				"color": [235, 235, 76],
				"amount": 0.036
			},
			{
				"color": [198, 167, 56],
				"amount": 0.023
			},
			{
				"color": [204, 182, 62],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Horn Coral Block",
		"namespacedId": "horn_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/horn_coral_block.png",
		"item": "Horn Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [141, 127, 41],
				"amount": 0.523
			},
			{
				"color": [220, 210, 69],
				"amount": 0.262
			},
			{
				"color": [180, 169, 55],
				"amount": 0.109
			},
			{
				"color": [203, 174, 63],
				"amount": 0.086
			},
			{
				"color": [112, 90, 29],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Horn Coral Fan",
		"namespacedId": "horn_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/horn_coral_fan.png",
		"item": "Horn Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [189, 159, 56],
				"amount": 0.617
			},
			{
				"color": [216, 213, 66],
				"amount": 0.221
			},
			{
				"color": [196, 186, 59],
				"amount": 0.111
			},
			{
				"color": [172, 129, 44],
				"amount": 0.039
			},
			{
				"color": [204, 182, 60],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Horn Coral Wall Fan",
		"namespacedId": "horn_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/horn_coral_wall_fan.png",
		"item": "Horn Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [187, 157, 55],
				"amount": 0.688
			},
			{
				"color": [216, 213, 66],
				"amount": 0.181
			},
			{
				"color": [195, 186, 59],
				"amount": 0.067
			},
			{
				"color": [172, 129, 44],
				"amount": 0.044
			},
			{
				"color": [204, 183, 64],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Ice",
		"namespacedId": "ice",
		"description": "Ice is a translucent solid block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/ice.png",
		"item": "Ice",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [129, 165, 230],
				"amount": 0.632
			},
			{
				"color": [90, 113, 156],
				"amount": 0.23
			},
			{
				"color": [154, 191, 252],
				"amount": 0.062
			},
			{
				"color": [108, 140, 210],
				"amount": 0.05
			},
			{
				"color": [175, 200, 244],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Infested Chiseled Stone Bricks",
		"namespacedId": "infested_chiseled_stone_bricks",
		"description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/infested_chiseled_stone_bricks.png",
		"item": "Infested Chiseled Stone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [81, 80, 81],
				"amount": 0.735
			},
			{
				"color": [145, 140, 145],
				"amount": 0.119
			},
			{
				"color": [124, 123, 124],
				"amount": 0.102
			},
			{
				"color": [111, 111, 111],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Infested Cobblestone",
		"namespacedId": "infested_cobblestone",
		"description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/infested_cobblestone.png",
		"item": "Infested Cobblestone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [87, 87, 88],
				"amount": 0.788
			},
			{
				"color": [162, 162, 162],
				"amount": 0.13
			},
			{
				"color": [140, 140, 140],
				"amount": 0.05
			},
			{
				"color": [130, 129, 130],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Infested Cracked Stone Bricks",
		"namespacedId": "infested_cracked_stone_bricks",
		"description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/infested_cracked_stone_bricks.png",
		"item": "Infested Cracked Stone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [80, 80, 80],
				"amount": 0.759
			},
			{
				"color": [124, 123, 124],
				"amount": 0.103
			},
			{
				"color": [142, 137, 142],
				"amount": 0.083
			},
			{
				"color": [111, 111, 111],
				"amount": 0.054
			}
		]
	},
	{
		"name": "Infested Deepslate",
		"namespacedId": "infested_deepslate",
		"description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/infested_deepslate.png",
		"item": "Infested Deepslate",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [51, 51, 54],
				"amount": 0.527
			},
			{
				"color": [100, 100, 100],
				"amount": 0.309
			},
			{
				"color": [84, 84, 84],
				"amount": 0.125
			},
			{
				"color": [76, 76, 76],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Infested Mossy Stone Bricks",
		"namespacedId": "infested_mossy_stone_bricks",
		"description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/infested_mossy_stone_bricks.png",
		"item": "Infested Mossy Stone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [75, 82, 65],
				"amount": 0.698
			},
			{
				"color": [132, 129, 131],
				"amount": 0.185
			},
			{
				"color": [105, 104, 105],
				"amount": 0.082
			},
			{
				"color": [113, 130, 84],
				"amount": 0.019
			},
			{
				"color": [124, 135, 94],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Infested Stone",
		"namespacedId": "infested_stone",
		"description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/infested_stone.png",
		"item": "Infested Stone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [78, 78, 78],
				"amount": 0.402
			},
			{
				"color": [128, 128, 128],
				"amount": 0.287
			},
			{
				"color": [116, 116, 116],
				"amount": 0.198
			},
			{
				"color": [100, 100, 100],
				"amount": 0.089
			},
			{
				"color": [108, 108, 108],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Infested Stone Bricks",
		"namespacedId": "infested_stone_bricks",
		"description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/infested_stone_bricks.png",
		"item": "Infested Stone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [82, 81, 82],
				"amount": 0.663
			},
			{
				"color": [124, 123, 124],
				"amount": 0.134
			},
			{
				"color": [143, 138, 143],
				"amount": 0.123
			},
			{
				"color": [115, 116, 115],
				"amount": 0.045
			},
			{
				"color": [108, 107, 108],
				"amount": 0.036
			}
		]
	},
	{
		"name": "Iron Bars",
		"namespacedId": "iron_bars",
		"description": "Iron bars are blocks that serve a similar purpose to glass panes, but made of iron instead of glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/iron_bars.png",
		"item": "Iron Bars",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [90, 93, 90],
				"amount": 0.652
			},
			{
				"color": [168, 168, 168],
				"amount": 0.242
			},
			{
				"color": [133, 133, 133],
				"amount": 0.087
			},
			{
				"color": [147, 148, 148],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Iron Door",
		"namespacedId": "iron_door",
		"description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/iron_door.png",
		"item": "Iron Door",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 5,
		"colors": [
			{
				"color": [152, 149, 149],
				"amount": 0.895
			},
			{
				"color": [115, 115, 115],
				"amount": 0.058
			},
			{
				"color": [51, 51, 51],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Iron Ore",
		"namespacedId": "iron_ore",
		"description": "Iron ore is a mineral block found underground. It is a source of raw iron, which can be smelted into iron ingots.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/iron_ore.png",
		"item": "Iron Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [95, 92, 90],
				"amount": 0.803
			},
			{
				"color": [184, 152, 128],
				"amount": 0.122
			},
			{
				"color": [138, 138, 138],
				"amount": 0.039
			},
			{
				"color": [136, 116, 94],
				"amount": 0.036
			}
		]
	},
	{
		"name": "Iron Trapdoor",
		"namespacedId": "iron_trapdoor",
		"description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/iron_trapdoor.png",
		"item": "Iron Trapdoor",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 5,
		"colors": [
			{
				"color": [195, 195, 197],
				"amount": 0.673
			},
			{
				"color": [125, 122, 125],
				"amount": 0.273
			},
			{
				"color": [148, 148, 156],
				"amount": 0.025
			},
			{
				"color": [156, 156, 156],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Jack o'Lantern",
		"namespacedId": "jack_o_lantern",
		"description": "A jack o'lantern is a solid block that provides light.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jack_o_lantern.png",
		"item": "Jack o'Lantern",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 1,
		"colors": [
			{
				"color": [167, 101, 23],
				"amount": 0.769
			},
			{
				"color": [215, 187, 88],
				"amount": 0.111
			},
			{
				"color": [97, 51, 8],
				"amount": 0.092
			},
			{
				"color": [211, 156, 84],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Jigsaw Block",
		"namespacedId": "jigsaw",
		"description": "Jigsaw blocks are technical blocks used in the generation of some structures.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jigsaw.png",
		"item": "Jigsaw Block",
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3600000,
		"colors": [
			{
				"color": [26, 23, 29],
				"amount": 0.58
			},
			{
				"color": [166, 142, 166],
				"amount": 0.394
			},
			{
				"color": [103, 86, 104],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Jukebox",
		"namespacedId": "jukebox",
		"description": "A jukebox is a block used to play music discs.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jukebox.png",
		"item": "Jukebox",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [44, 33, 24],
				"amount": 0.487
			},
			{
				"color": [127, 78, 58],
				"amount": 0.287
			},
			{
				"color": [95, 62, 43],
				"amount": 0.176
			},
			{
				"color": [77, 49, 33],
				"amount": 0.046
			}
		]
	},
	{
		"name": "Jungle Button",
		"namespacedId": "jungle_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_button.png",
		"item": "Jungle Button",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [155, 113, 82],
				"amount": 0.645
			},
			{
				"color": [83, 58, 38],
				"amount": 0.245
			},
			{
				"color": [100, 68, 44],
				"amount": 0.084
			},
			{
				"color": [124, 84, 52],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Jungle Door",
		"namespacedId": "jungle_door",
		"description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_door.png",
		"item": "Jungle Door",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [118, 84, 60],
				"amount": 0.893
			},
			{
				"color": [180, 136, 99],
				"amount": 0.044
			},
			{
				"color": [76, 52, 36],
				"amount": 0.027
			},
			{
				"color": [55, 47, 40],
				"amount": 0.021
			},
			{
				"color": [156, 124, 91],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Jungle Fence",
		"namespacedId": "jungle_fence",
		"description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_fence.png",
		"item": "Jungle Fence",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [118, 84, 57],
				"amount": 0.682
			},
			{
				"color": [76, 52, 33],
				"amount": 0.112
			},
			{
				"color": [179, 131, 99],
				"amount": 0.106
			},
			{
				"color": [148, 108, 84],
				"amount": 0.063
			},
			{
				"color": [156, 116, 83],
				"amount": 0.036
			}
		]
	},
	{
		"name": "Jungle Fence Gate",
		"namespacedId": "jungle_fence_gate",
		"description": "A fence gate is a block that shares the functions of both the door and the fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_fence_gate.png",
		"item": "Jungle Fence Gate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [132, 94, 66],
				"amount": 0.803
			},
			{
				"color": [78, 55, 35],
				"amount": 0.13
			},
			{
				"color": [193, 140, 106],
				"amount": 0.055
			}
		]
	},
	{
		"name": "Jungle Leaves",
		"namespacedId": "jungle_leaves",
		"description": "Leaves are natural blocks that generate as part of trees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_leaves.png",
		"item": "Jungle Leaves",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [30, 76, 11],
				"amount": 0.66
			},
			{
				"color": [53, 131, 18],
				"amount": 0.167
			},
			{
				"color": [45, 109, 11],
				"amount": 0.125
			},
			{
				"color": [44, 96, 5],
				"amount": 0.026
			},
			{
				"color": [20, 46, 4],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Jungle Log",
		"namespacedId": "jungle_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_log.png",
		"item": "Jungle Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [164, 117, 83],
				"amount": 0.525
			},
			{
				"color": [58, 47, 17],
				"amount": 0.461
			},
			{
				"color": [108, 84, 32],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Jungle Planks",
		"namespacedId": "jungle_planks",
		"description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_planks.png",
		"item": "Jungle Planks",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [116, 83, 57],
				"amount": 0.715
			},
			{
				"color": [175, 127, 94],
				"amount": 0.162
			},
			{
				"color": [68, 47, 32],
				"amount": 0.056
			},
			{
				"color": [155, 116, 83],
				"amount": 0.035
			},
			{
				"color": [148, 108, 84],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Jungle Pressure Plate",
		"namespacedId": "jungle_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_pressure_plate.png",
		"item": "Jungle Pressure Plate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [169, 121, 87],
				"amount": 0.624
			},
			{
				"color": [87, 59, 38],
				"amount": 0.289
			},
			{
				"color": [118, 83, 54],
				"amount": 0.073
			}
		]
	},
	{
		"name": "Jungle Sapling",
		"namespacedId": "jungle_sapling",
		"description": "A sapling is a non-solid block that can be grown into a tree.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_sapling.png",
		"item": "Jungle Sapling",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [45, 65, 12],
				"amount": 0.609
			},
			{
				"color": [47, 117, 29],
				"amount": 0.356
			},
			{
				"color": [45, 96, 20],
				"amount": 0.017
			},
			{
				"color": [44, 44, 4],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Jungle Sign",
		"namespacedId": "jungle_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_sign.png",
		"item": "Jungle Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [137, 97, 69],
				"amount": 0.794
			},
			{
				"color": [58, 46, 18],
				"amount": 0.172
			},
			{
				"color": [100, 68, 44],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Jungle Slab",
		"namespacedId": "jungle_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_slab.png",
		"item": "Jungle Slab",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [121, 86, 59],
				"amount": 0.648
			},
			{
				"color": [179, 129, 96],
				"amount": 0.179
			},
			{
				"color": [75, 52, 33],
				"amount": 0.087
			},
			{
				"color": [159, 116, 85],
				"amount": 0.062
			},
			{
				"color": [148, 108, 84],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Jungle Stairs",
		"namespacedId": "jungle_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_stairs.png",
		"item": "Jungle Stairs",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [126, 90, 63],
				"amount": 0.815
			},
			{
				"color": [179, 130, 97],
				"amount": 0.089
			},
			{
				"color": [75, 52, 34],
				"amount": 0.08
			},
			{
				"color": [156, 116, 92],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Jungle Trapdoor",
		"namespacedId": "jungle_trapdoor",
		"description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_trapdoor.png",
		"item": "Jungle Trapdoor",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [165, 119, 86],
				"amount": 0.618
			},
			{
				"color": [101, 72, 50],
				"amount": 0.15
			},
			{
				"color": [70, 53, 38],
				"amount": 0.134
			},
			{
				"color": [116, 76, 52],
				"amount": 0.064
			},
			{
				"color": [122, 87, 59],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Jungle Wall Sign",
		"namespacedId": "jungle_wall_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_wall_sign.png",
		"item": "Jungle Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [133, 94, 64],
				"amount": 0.822
			},
			{
				"color": [148, 108, 84],
				"amount": 0.123
			},
			{
				"color": [94, 64, 42],
				"amount": 0.029
			},
			{
				"color": [178, 130, 97],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Jungle Wood",
		"namespacedId": "jungle_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/jungle_wood.png",
		"item": "Jungle Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [57, 46, 17],
				"amount": 0.805
			},
			{
				"color": [104, 80, 29],
				"amount": 0.108
			},
			{
				"color": [84, 66, 27],
				"amount": 0.075
			}
		]
	},
	{
		"name": "Kelp",
		"namespacedId": "kelp",
		"description": "Kelp is an underwater plant that generates in most oceans.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/kelp.png",
		"item": "Kelp",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [91, 171, 44],
				"amount": 0.406
			},
			{
				"color": [77, 105, 38],
				"amount": 0.302
			},
			{
				"color": [91, 131, 51],
				"amount": 0.291
			}
		]
	},
	{
		"name": "Kelp Plant",
		"namespacedId": "kelp_plant",
		"description": "Kelp is an underwater plant that generates in most oceans.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/kelp_plant.png",
		"item": "Kelp",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [90, 129, 50],
				"amount": 0.532
			},
			{
				"color": [91, 170, 44],
				"amount": 0.346
			},
			{
				"color": [78, 94, 28],
				"amount": 0.09
			},
			{
				"color": [76, 108, 44],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Ladder",
		"namespacedId": "ladder",
		"description": "Ladders are wooden blocks used for climbing walls either vertically or horizontally. They can be placed only on the sides of other blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/ladder.png",
		"item": "Ladder",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.4,
		"colors": [
			{
				"color": [132, 102, 57],
				"amount": 0.368
			},
			{
				"color": [71, 56, 34],
				"amount": 0.322
			},
			{
				"color": [97, 74, 43],
				"amount": 0.226
			},
			{
				"color": [171, 131, 75],
				"amount": 0.055
			},
			{
				"color": [109, 84, 45],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Lantern",
		"namespacedId": "lantern",
		"description": "Lanterns are blocks that emit light.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lantern.png",
		"item": "Lantern",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [63, 55, 57],
				"amount": 0.454
			},
			{
				"color": [191, 145, 84],
				"amount": 0.388
			},
			{
				"color": [74, 76, 100],
				"amount": 0.069
			},
			{
				"color": [138, 89, 44],
				"amount": 0.065
			},
			{
				"color": [148, 148, 76],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Lapis Lazuli Ore",
		"namespacedId": "lapis_ore",
		"description": "Lapis lazuli ore is the ore block from which lapis lazuli is obtained.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lapis_ore.png",
		"item": "Lapis Lazuli Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [91, 93, 95],
				"amount": 0.722
			},
			{
				"color": [59, 100, 195],
				"amount": 0.13
			},
			{
				"color": [23, 56, 120],
				"amount": 0.099
			},
			{
				"color": [141, 141, 141],
				"amount": 0.047
			}
		]
	},
	{
		"name": "Large Amethyst Bud",
		"namespacedId": "large_amethyst_bud",
		"description": "Amethyst buds are the first three stages of growth of amethyst clusters, which grow on budding amethyst.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/large_amethyst_bud.png",
		"item": "Large Amethyst Bud",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 4,
		"blastResistance": 1.5,
		"colors": [
			{
				"color": [120, 88, 178],
				"amount": 0.452
			},
			{
				"color": [246, 220, 217],
				"amount": 0.283
			},
			{
				"color": [204, 157, 235],
				"amount": 0.187
			},
			{
				"color": [194, 148, 232],
				"amount": 0.042
			},
			{
				"color": [172, 137, 233],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Large Fern",
		"namespacedId": "large_fern",
		"description": "Grass is a non-solid plant block that has wheat seeds as a drop. Its color is biome-dependent, and matches the color of grass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/large_fern.png",
		"item": "Large Fern",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [56, 87, 48],
				"amount": 0.46
			},
			{
				"color": [68, 101, 60],
				"amount": 0.214
			},
			{
				"color": [80, 120, 69],
				"amount": 0.157
			},
			{
				"color": [43, 66, 36],
				"amount": 0.092
			},
			{
				"color": [76, 108, 60],
				"amount": 0.077
			}
		]
	},
	{
		"name": "Lava",
		"namespacedId": "lava",
		"description": "Lava is a light-emitting fluid block that causes fire damage, mostly found in the lower reaches of the Overworld and the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lava.png",
		"item": "Lava Bucket",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 100,
		"colors": [
			{
				"color": [145, 58, 10],
				"amount": 0.686
			},
			{
				"color": [206, 79, 14],
				"amount": 0.205
			},
			{
				"color": [207, 137, 47],
				"amount": 0.053
			},
			{
				"color": [164, 101, 34],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Lava Cauldron",
		"namespacedId": "lava_cauldron",
		"description": "A cauldron is a block that can contain water, lava and powder snow. In Bedrock Edition, it can also hold potions and dyed water. It also is a job site block used by leatherworkers in villages.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lava_cauldron.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [54, 54, 55],
				"amount": 0.541
			},
			{
				"color": [209, 97, 24],
				"amount": 0.408
			},
			{
				"color": [99, 92, 91],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Lectern",
		"namespacedId": "lectern",
		"description": "A lectern is a librarian's job site block found in villages. It is used to hold books for multiple players to read in multiplayer.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lectern.png",
		"item": "Lectern",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [165, 130, 78],
				"amount": 0.719
			},
			{
				"color": [100, 79, 46],
				"amount": 0.106
			},
			{
				"color": [60, 57, 43],
				"amount": 0.079
			},
			{
				"color": [128, 36, 29],
				"amount": 0.071
			},
			{
				"color": [199, 162, 108],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Lever",
		"namespacedId": "lever",
		"description": "A lever is a non-solid block that can provide switchable redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lever.png",
		"item": "Lever",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [88, 86, 87],
				"amount": 0.717
			},
			{
				"color": [157, 157, 157],
				"amount": 0.17
			},
			{
				"color": [132, 132, 132],
				"amount": 0.064
			},
			{
				"color": [63, 49, 32],
				"amount": 0.035
			},
			{
				"color": [124, 124, 127],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Light",
		"namespacedId": "light",
		"description": "Light blocks (in Bedrock Edition) or lights (in Java Edition) are invisible blocks, primarily intended for map makers, that can produce any light level from 0 to 15. The light block is also the only light-emitting block capable of producing light level 8.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light.png",
		"item": "Light",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": null,
		"colors": [
			{
				"color": [252, 252, 28],
				"amount": 1
			}
		]
	},
	{
		"name": "Light Blue Banner",
		"namespacedId": "light_blue_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_banner.png",
		"item": "Light Blue Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 1,
		"colors": [
			{
				"color": [43, 126, 155],
				"amount": 0.892
			},
			{
				"color": [85, 68, 43],
				"amount": 0.063
			},
			{
				"color": [27, 76, 93],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Light Blue Bed",
		"namespacedId": "light_blue_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_bed.png",
		"item": "Light Blue Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [53, 72, 77],
				"amount": 0.359
			},
			{
				"color": [214, 218, 218],
				"amount": 0.328
			},
			{
				"color": [41, 154, 211],
				"amount": 0.272
			},
			{
				"color": [25, 121, 179],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Light Blue Candle",
		"namespacedId": "light_blue_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_candle.png",
		"item": "Light Blue Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [26, 104, 149],
				"amount": 0.452
			},
			{
				"color": [20, 84, 124],
				"amount": 0.284
			},
			{
				"color": [36, 134, 186],
				"amount": 0.22
			},
			{
				"color": [20, 20, 35],
				"amount": 0.042
			}
		]
	},
	{
		"name": "Light Blue Carpet",
		"namespacedId": "light_blue_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_carpet.png",
		"item": "Light Blue Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [58, 173, 213],
				"amount": 0.785
			},
			{
				"color": [33, 106, 137],
				"amount": 0.156
			},
			{
				"color": [43, 140, 172],
				"amount": 0.034
			},
			{
				"color": [36, 138, 194],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Light Blue Concrete",
		"namespacedId": "light_blue_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_concrete.png",
		"item": "Light Blue Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [36, 132, 196],
				"amount": 0.501
			},
			{
				"color": [28, 108, 158],
				"amount": 0.276
			},
			{
				"color": [20, 84, 122],
				"amount": 0.209
			},
			{
				"color": [28, 116, 172],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Light Blue Concrete Powder",
		"namespacedId": "light_blue_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_concrete_powder.png",
		"item": "Light Blue Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [46, 114, 137],
				"amount": 0.49
			},
			{
				"color": [69, 172, 208],
				"amount": 0.21
			},
			{
				"color": [85, 192, 217],
				"amount": 0.13
			},
			{
				"color": [57, 144, 172],
				"amount": 0.088
			},
			{
				"color": [69, 158, 180],
				"amount": 0.083
			}
		]
	},
	{
		"name": "Light Blue Glazed Terracotta",
		"namespacedId": "light_blue_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_glazed_terracotta.png",
		"item": "Light Blue Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [49, 122, 157],
				"amount": 0.532
			},
			{
				"color": [194, 210, 212],
				"amount": 0.369
			},
			{
				"color": [66, 178, 218],
				"amount": 0.048
			},
			{
				"color": [37, 39, 115],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Light Blue Shulker Box",
		"namespacedId": "light_blue_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_shulker_box.png",
		"item": "Light Blue Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": null,
		"colors": [
			{
				"color": [33, 117, 158],
				"amount": 0.463
			},
			{
				"color": [20, 81, 117],
				"amount": 0.241
			},
			{
				"color": [52, 166, 209],
				"amount": 0.166
			},
			{
				"color": [22, 91, 135],
				"amount": 0.08
			},
			{
				"color": [46, 148, 174],
				"amount": 0.05
			}
		]
	},
	{
		"name": "Light Blue Stained Glass",
		"namespacedId": "light_blue_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_stained_glass.png",
		"item": "Light Blue Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [84, 124, 180],
				"amount": 0.494
			},
			{
				"color": [60, 100, 140],
				"amount": 0.259
			},
			{
				"color": [100, 148, 212],
				"amount": 0.18
			},
			{
				"color": [60, 92, 132],
				"amount": 0.037
			},
			{
				"color": [90, 132, 188],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Light Blue Stained Glass Pane",
		"namespacedId": "light_blue_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_stained_glass_pane.png",
		"item": "Light Blue Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [60, 89, 127],
				"amount": 0.504
			},
			{
				"color": [84, 124, 172],
				"amount": 0.37
			},
			{
				"color": [95, 143, 204],
				"amount": 0.119
			}
		]
	},
	{
		"name": "Light Blue Terracotta",
		"namespacedId": "light_blue_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_terracotta.png",
		"item": "Light Blue Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [111, 107, 133],
				"amount": 0.445
			},
			{
				"color": [68, 67, 84],
				"amount": 0.273
			},
			{
				"color": [91, 84, 108],
				"amount": 0.18
			},
			{
				"color": [92, 92, 110],
				"amount": 0.093
			}
		]
	},
	{
		"name": "Light Blue Wall Banner",
		"namespacedId": "light_blue_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_wall_banner.png",
		"item": "Light Blue Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 1,
		"colors": [
			{
				"color": [43, 126, 155],
				"amount": 0.897
			},
			{
				"color": [91, 74, 48],
				"amount": 0.064
			},
			{
				"color": [27, 76, 93],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Light Blue Wool",
		"namespacedId": "light_blue_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_blue_wool.png",
		"item": "Light Blue Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 2,
		"colors": [
			{
				"color": [34, 109, 138],
				"amount": 0.485
			},
			{
				"color": [64, 182, 218],
				"amount": 0.228
			},
			{
				"color": [54, 151, 181],
				"amount": 0.106
			},
			{
				"color": [46, 157, 205],
				"amount": 0.091
			},
			{
				"color": [40, 136, 176],
				"amount": 0.089
			}
		]
	},
	{
		"name": "Light Gray Banner",
		"namespacedId": "light_gray_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_banner.png",
		"item": "Light Gray Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 1,
		"colors": [
			{
				"color": [112, 112, 107],
				"amount": 0.889
			},
			{
				"color": [82, 64, 41],
				"amount": 0.055
			},
			{
				"color": [68, 68, 66],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Light Gray Bed",
		"namespacedId": "light_gray_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_bed.png",
		"item": "Light Gray Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [87, 83, 70],
				"amount": 0.546
			},
			{
				"color": [218, 222, 222],
				"amount": 0.255
			},
			{
				"color": [164, 159, 159],
				"amount": 0.105
			},
			{
				"color": [146, 146, 138],
				"amount": 0.073
			},
			{
				"color": [156, 156, 148],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Light Gray Candle",
		"namespacedId": "light_gray_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_candle.png",
		"item": "Light Gray Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [89, 91, 85],
				"amount": 0.786
			},
			{
				"color": [68, 68, 60],
				"amount": 0.095
			},
			{
				"color": [124, 124, 117],
				"amount": 0.079
			},
			{
				"color": [20, 20, 36],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Light Gray Carpet",
		"namespacedId": "light_gray_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_carpet.png",
		"item": "Light Gray Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [138, 138, 131],
				"amount": 0.752
			},
			{
				"color": [85, 86, 81],
				"amount": 0.172
			},
			{
				"color": [108, 108, 102],
				"amount": 0.052
			},
			{
				"color": [116, 116, 108],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Light Gray Concrete",
		"namespacedId": "light_gray_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_concrete.png",
		"item": "Light Gray Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [124, 124, 115],
				"amount": 0.372
			},
			{
				"color": [100, 100, 92],
				"amount": 0.335
			},
			{
				"color": [76, 76, 68],
				"amount": 0.285
			}
		]
	},
	{
		"name": "Light Gray Concrete Powder",
		"namespacedId": "light_gray_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_concrete_powder.png",
		"item": "Light Gray Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [107, 107, 103],
				"amount": 0.723
			},
			{
				"color": [155, 156, 149],
				"amount": 0.113
			},
			{
				"color": [167, 167, 160],
				"amount": 0.086
			},
			{
				"color": [144, 144, 136],
				"amount": 0.068
			}
		]
	},
	{
		"name": "Light Gray Glazed Terracotta",
		"namespacedId": "light_gray_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_glazed_terracotta.png",
		"item": "Light Gray Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [122, 128, 131],
				"amount": 0.692
			},
			{
				"color": [33, 101, 104],
				"amount": 0.207
			},
			{
				"color": [194, 197, 202],
				"amount": 0.089
			}
		]
	},
	{
		"name": "Light Gray Shulker Box",
		"namespacedId": "light_gray_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_shulker_box.png",
		"item": "Light Gray Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": null,
		"colors": [
			{
				"color": [72, 72, 66],
				"amount": 0.517
			},
			{
				"color": [129, 129, 119],
				"amount": 0.371
			},
			{
				"color": [108, 108, 100],
				"amount": 0.097
			},
			{
				"color": [100, 100, 91],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Light Gray Stained Glass",
		"namespacedId": "light_gray_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_stained_glass.png",
		"item": "Light Gray Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [148, 148, 153],
				"amount": 0.397
			},
			{
				"color": [124, 124, 124],
				"amount": 0.268
			},
			{
				"color": [99, 99, 100],
				"amount": 0.249
			},
			{
				"color": [132, 132, 132],
				"amount": 0.051
			},
			{
				"color": [92, 92, 92],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Light Gray Stained Glass Pane",
		"namespacedId": "light_gray_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_stained_glass_pane.png",
		"item": "Light Gray Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [89, 89, 89],
				"amount": 0.494
			},
			{
				"color": [124, 124, 124],
				"amount": 0.353
			},
			{
				"color": [142, 142, 142],
				"amount": 0.146
			}
		]
	},
	{
		"name": "Light Gray Terracotta",
		"namespacedId": "light_gray_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_terracotta.png",
		"item": "Light Gray Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [108, 84, 76],
				"amount": 0.365
			},
			{
				"color": [83, 66, 60],
				"amount": 0.327
			},
			{
				"color": [132, 105, 95],
				"amount": 0.305
			}
		]
	},
	{
		"name": "Light Gray Wall Banner",
		"namespacedId": "light_gray_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_wall_banner.png",
		"item": "Light Gray Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 1,
		"colors": [
			{
				"color": [111, 111, 106],
				"amount": 0.929
			},
			{
				"color": [84, 69, 46],
				"amount": 0.041
			},
			{
				"color": [68, 68, 68],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Light Gray Wool",
		"namespacedId": "light_gray_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_gray_wool.png",
		"item": "Light Gray Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 2,
		"colors": [
			{
				"color": [110, 110, 104],
				"amount": 0.722
			},
			{
				"color": [145, 145, 138],
				"amount": 0.198
			},
			{
				"color": [82, 82, 77],
				"amount": 0.079
			}
		]
	},
	{
		"name": "Light Weighted Pressure Plate",
		"namespacedId": "light_weighted_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/light_weighted_pressure_plate.png",
		"item": "Light Weighted Pressure Plate",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [249, 214, 59],
				"amount": 0.59
			},
			{
				"color": [147, 103, 31],
				"amount": 0.321
			},
			{
				"color": [252, 250, 152],
				"amount": 0.082
			}
		]
	},
	{
		"name": "Lightning Rod",
		"namespacedId": "lightning_rod",
		"description": "A lightning rod is a block used to divert lightning strikes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lightning_rod.png",
		"item": "Lightning Rod",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 6,
		"colors": [
			{
				"color": [205, 118, 94],
				"amount": 0.384
			},
			{
				"color": [121, 67, 51],
				"amount": 0.337
			},
			{
				"color": [168, 96, 72],
				"amount": 0.216
			},
			{
				"color": [140, 81, 68],
				"amount": 0.058
			}
		]
	},
	{
		"name": "Lilac",
		"namespacedId": "lilac",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lilac.png",
		"item": "Lilac",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [188, 118, 190],
				"amount": 0.585
			},
			{
				"color": [67, 144, 38],
				"amount": 0.378
			},
			{
				"color": [118, 113, 110],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Lily Pad",
		"namespacedId": "lily_pad",
		"description": "A lily pad is a short, flat non-solid block that can be found naturally growing only on water, in swamps and wheat farm rooms in woodland mansions.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lily_pad.png",
		"item": "Lily Pad",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [20, 74, 28],
				"amount": 0.535
			},
			{
				"color": [12, 45, 20],
				"amount": 0.33
			},
			{
				"color": [20, 84, 28],
				"amount": 0.109
			},
			{
				"color": [12, 60, 20],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Lily of the Valley",
		"namespacedId": "lily_of_the_valley",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lily_of_the_valley.png",
		"item": "Lily of the Valley",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [230, 231, 230],
				"amount": 0.522
			},
			{
				"color": [82, 154, 44],
				"amount": 0.464
			}
		]
	},
	{
		"name": "Lime Banner",
		"namespacedId": "lime_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_banner.png",
		"item": "Lime Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [91, 139, 20],
				"amount": 0.911
			},
			{
				"color": [82, 64, 41],
				"amount": 0.048
			},
			{
				"color": [59, 88, 15],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Lime Bed",
		"namespacedId": "lime_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_bed.png",
		"item": "Lime Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [214, 218, 218],
				"amount": 0.381
			},
			{
				"color": [67, 81, 30],
				"amount": 0.349
			},
			{
				"color": [140, 194, 47],
				"amount": 0.101
			},
			{
				"color": [122, 194, 27],
				"amount": 0.097
			},
			{
				"color": [102, 172, 26],
				"amount": 0.072
			}
		]
	},
	{
		"name": "Lime Candle",
		"namespacedId": "lime_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_candle.png",
		"item": "Lime Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [71, 124, 14],
				"amount": 0.659
			},
			{
				"color": [100, 166, 22],
				"amount": 0.224
			},
			{
				"color": [52, 100, 12],
				"amount": 0.074
			},
			{
				"color": [20, 20, 36],
				"amount": 0.041
			}
		]
	},
	{
		"name": "Lime Carpet",
		"namespacedId": "lime_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_carpet.png",
		"item": "Lime Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [106, 177, 26],
				"amount": 0.813
			},
			{
				"color": [66, 112, 13],
				"amount": 0.09
			},
			{
				"color": [126, 193, 31],
				"amount": 0.078
			},
			{
				"color": [86, 144, 20],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Lime Concrete",
		"namespacedId": "lime_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_concrete.png",
		"item": "Lime Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [92, 164, 27],
				"amount": 0.499
			},
			{
				"color": [76, 134, 20],
				"amount": 0.331
			},
			{
				"color": [60, 100, 12],
				"amount": 0.166
			}
		]
	},
	{
		"name": "Lime Concrete Powder",
		"namespacedId": "lime_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_concrete_powder.png",
		"item": "Lime Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [103, 155, 34],
				"amount": 0.515
			},
			{
				"color": [128, 190, 43],
				"amount": 0.355
			},
			{
				"color": [74, 113, 26],
				"amount": 0.121
			}
		]
	},
	{
		"name": "Lime Glazed Terracotta",
		"namespacedId": "lime_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_glazed_terracotta.png",
		"item": "Lime Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [100, 144, 31],
				"amount": 0.621
			},
			{
				"color": [222, 184, 80],
				"amount": 0.277
			},
			{
				"color": [149, 215, 66],
				"amount": 0.057
			},
			{
				"color": [163, 144, 61],
				"amount": 0.023
			},
			{
				"color": [156, 148, 123],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Lime Shulker Box",
		"namespacedId": "lime_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_shulker_box.png",
		"item": "Lime Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [57, 103, 12],
				"amount": 0.49
			},
			{
				"color": [101, 175, 26],
				"amount": 0.347
			},
			{
				"color": [78, 140, 20],
				"amount": 0.075
			},
			{
				"color": [92, 148, 20],
				"amount": 0.065
			},
			{
				"color": [37, 71, 12],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Lime Stained Glass",
		"namespacedId": "lime_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_stained_glass.png",
		"item": "Lime Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [124, 203, 28],
				"amount": 0.496
			},
			{
				"color": [101, 166, 20],
				"amount": 0.354
			},
			{
				"color": [76, 127, 12],
				"amount": 0.146
			}
		]
	},
	{
		"name": "Lime Stained Glass Pane",
		"namespacedId": "lime_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_stained_glass_pane.png",
		"item": "Lime Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [75, 119, 12],
				"amount": 0.553
			},
			{
				"color": [100, 164, 20],
				"amount": 0.345
			},
			{
				"color": [121, 191, 25],
				"amount": 0.098
			}
		]
	},
	{
		"name": "Lime Terracotta",
		"namespacedId": "lime_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_terracotta.png",
		"item": "Lime Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [101, 116, 52],
				"amount": 0.422
			},
			{
				"color": [63, 72, 33],
				"amount": 0.264
			},
			{
				"color": [83, 92, 44],
				"amount": 0.256
			},
			{
				"color": [84, 100, 44],
				"amount": 0.039
			},
			{
				"color": [97, 105, 45],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Lime Wall Banner",
		"namespacedId": "lime_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_wall_banner.png",
		"item": "Lime Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [91, 140, 20],
				"amount": 0.889
			},
			{
				"color": [70, 75, 28],
				"amount": 0.088
			},
			{
				"color": [70, 93, 22],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Lime Wool",
		"namespacedId": "lime_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lime_wool.png",
		"item": "Lime Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [82, 135, 18],
				"amount": 0.603
			},
			{
				"color": [116, 186, 28],
				"amount": 0.259
			},
			{
				"color": [62, 107, 12],
				"amount": 0.067
			},
			{
				"color": [98, 170, 26],
				"amount": 0.04
			},
			{
				"color": [108, 164, 27],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Lodestone",
		"namespacedId": "lodestone",
		"description": "A lodestone is a block that can be used to alter compasses to point towards it. It can be used in all three dimensions.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/lodestone.png",
		"item": "Lodestone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [88, 88, 89],
				"amount": 0.657
			},
			{
				"color": [158, 161, 167],
				"amount": 0.264
			},
			{
				"color": [39, 39, 43],
				"amount": 0.037
			},
			{
				"color": [130, 132, 140],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Loom",
		"namespacedId": "loom",
		"description": "A loom is used to apply patterns on banners. It is also used as a shepherd's job site block that is found in villages.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/loom.png",
		"item": "Loom",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [88, 65, 47],
				"amount": 0.657
			},
			{
				"color": [188, 159, 127],
				"amount": 0.17
			},
			{
				"color": [163, 143, 118],
				"amount": 0.07
			},
			{
				"color": [147, 118, 78],
				"amount": 0.064
			},
			{
				"color": [143, 127, 120],
				"amount": 0.039
			}
		]
	},
	{
		"name": "Magenta Banner",
		"namespacedId": "magenta_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_banner.png",
		"item": "Magenta Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [140, 52, 132],
				"amount": 0.912
			},
			{
				"color": [84, 67, 42],
				"amount": 0.055
			},
			{
				"color": [84, 35, 82],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Magenta Bed",
		"namespacedId": "magenta_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_bed.png",
		"item": "Magenta Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [102, 43, 84],
				"amount": 0.455
			},
			{
				"color": [214, 218, 218],
				"amount": 0.27
			},
			{
				"color": [190, 62, 180],
				"amount": 0.189
			},
			{
				"color": [180, 54, 169],
				"amount": 0.074
			},
			{
				"color": [127, 115, 109],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Magenta Candle",
		"namespacedId": "magenta_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_candle.png",
		"item": "Magenta Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [115, 33, 109],
				"amount": 0.744
			},
			{
				"color": [157, 48, 148],
				"amount": 0.131
			},
			{
				"color": [92, 25, 92],
				"amount": 0.067
			},
			{
				"color": [20, 20, 35],
				"amount": 0.054
			}
		]
	},
	{
		"name": "Magenta Carpet",
		"namespacedId": "magenta_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_carpet.png",
		"item": "Magenta Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [181, 64, 172],
				"amount": 0.881
			},
			{
				"color": [114, 40, 108],
				"amount": 0.075
			},
			{
				"color": [208, 90, 200],
				"amount": 0.026
			},
			{
				"color": [140, 44, 132],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Magenta Concrete",
		"namespacedId": "magenta_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_concrete.png",
		"item": "Magenta Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [164, 46, 156],
				"amount": 0.365
			},
			{
				"color": [100, 28, 98],
				"amount": 0.338
			},
			{
				"color": [140, 39, 132],
				"amount": 0.149
			},
			{
				"color": [132, 36, 124],
				"amount": 0.148
			}
		]
	},
	{
		"name": "Magenta Concrete Powder",
		"namespacedId": "magenta_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_concrete_powder.png",
		"item": "Magenta Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [151, 65, 145],
				"amount": 0.618
			},
			{
				"color": [114, 48, 110],
				"amount": 0.144
			},
			{
				"color": [199, 92, 191],
				"amount": 0.119
			},
			{
				"color": [187, 80, 180],
				"amount": 0.117
			}
		]
	},
	{
		"name": "Magenta Glazed Terracotta",
		"namespacedId": "magenta_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_glazed_terracotta.png",
		"item": "Magenta Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [139, 61, 130],
				"amount": 0.67
			},
			{
				"color": [228, 136, 204],
				"amount": 0.139
			},
			{
				"color": [196, 141, 161],
				"amount": 0.074
			},
			{
				"color": [197, 80, 190],
				"amount": 0.074
			},
			{
				"color": [183, 88, 172],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Magenta Shulker Box",
		"namespacedId": "magenta_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_shulker_box.png",
		"item": "Magenta Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [105, 31, 99],
				"amount": 0.535
			},
			{
				"color": [176, 56, 166],
				"amount": 0.283
			},
			{
				"color": [145, 45, 136],
				"amount": 0.115
			},
			{
				"color": [156, 46, 148],
				"amount": 0.048
			},
			{
				"color": [131, 36, 124],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Magenta Stained Glass",
		"namespacedId": "magenta_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_stained_glass.png",
		"item": "Magenta Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [148, 60, 180],
				"amount": 0.472
			},
			{
				"color": [116, 52, 140],
				"amount": 0.278
			},
			{
				"color": [179, 76, 212],
				"amount": 0.191
			},
			{
				"color": [156, 68, 188],
				"amount": 0.031
			},
			{
				"color": [108, 44, 132],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Magenta Stained Glass Pane",
		"namespacedId": "magenta_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_stained_glass_pane.png",
		"item": "Magenta Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [103, 44, 127],
				"amount": 0.477
			},
			{
				"color": [140, 60, 172],
				"amount": 0.384
			},
			{
				"color": [167, 73, 204],
				"amount": 0.126
			}
		]
	},
	{
		"name": "Magenta Terracotta",
		"namespacedId": "magenta_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_terracotta.png",
		"item": "Magenta Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [147, 85, 107],
				"amount": 0.511
			},
			{
				"color": [119, 69, 86],
				"amount": 0.358
			},
			{
				"color": [91, 52, 67],
				"amount": 0.078
			},
			{
				"color": [92, 60, 68],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Magenta Wall Banner",
		"namespacedId": "magenta_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_wall_banner.png",
		"item": "Magenta Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [140, 52, 132],
				"amount": 0.905
			},
			{
				"color": [88, 66, 49],
				"amount": 0.059
			},
			{
				"color": [87, 36, 84],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Magenta Wool",
		"namespacedId": "magenta_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magenta_wool.png",
		"item": "Magenta Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [129, 45, 122],
				"amount": 0.616
			},
			{
				"color": [194, 76, 184],
				"amount": 0.216
			},
			{
				"color": [169, 61, 161],
				"amount": 0.098
			},
			{
				"color": [180, 62, 172],
				"amount": 0.069
			}
		]
	},
	{
		"name": "Magma Block",
		"namespacedId": "magma_block",
		"description": "A magma block is a light-emitting naturally-occurring block found in the Nether and the Overworld. It causes continuous damage while being stepped on, considered fire damage, except it does not light mobs on fire.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/magma_block.png",
		"item": "Magma Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 3,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [66, 25, 25],
				"amount": 0.471
			},
			{
				"color": [209, 104, 26],
				"amount": 0.355
			},
			{
				"color": [149, 70, 17],
				"amount": 0.098
			},
			{
				"color": [109, 44, 31],
				"amount": 0.069
			}
		]
	},
	{
		"name": "Medium Amethyst Bud",
		"namespacedId": "medium_amethyst_bud",
		"description": "Amethyst buds are the first three stages of growth of amethyst clusters, which grow on budding amethyst.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/medium_amethyst_bud.png",
		"item": "Medium Amethyst Bud",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 2,
		"blastResistance": 1.5,
		"colors": [
			{
				"color": [116, 86, 176],
				"amount": 0.638
			},
			{
				"color": [217, 170, 233],
				"amount": 0.255
			},
			{
				"color": [196, 148, 234],
				"amount": 0.068
			},
			{
				"color": [163, 123, 206],
				"amount": 0.02
			},
			{
				"color": [186, 140, 224],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Melon",
		"namespacedId": "melon",
		"description": "A melon is a fruit block that grows from a fully-grown melon stem, which in turn is grown from melon seeds.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/melon.png",
		"item": "Melon",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [79, 108, 23],
				"amount": 0.661
			},
			{
				"color": [146, 151, 27],
				"amount": 0.224
			},
			{
				"color": [110, 148, 35],
				"amount": 0.06
			},
			{
				"color": [42, 73, 20],
				"amount": 0.049
			}
		]
	},
	{
		"name": "Melon Stem",
		"namespacedId": "melon_stem",
		"description": "Melon seeds are an item that can be used to grow melon plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/melon_stem.png",
		"item": "Melon Seeds",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [85, 75, 4],
				"amount": 0.704
			},
			{
				"color": [47, 41, 4],
				"amount": 0.139
			},
			{
				"color": [123, 108, 12],
				"amount": 0.074
			},
			{
				"color": [100, 92, 4],
				"amount": 0.071
			},
			{
				"color": [60, 52, 4],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Moss Block",
		"namespacedId": "moss_block",
		"description": "A moss block is a natural block that can be spread to some other blocks by using bone meal.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/moss_block.png",
		"item": "Moss Block",
		"tool": "Hoe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [57, 71, 29],
				"amount": 0.659
			},
			{
				"color": [96, 112, 47],
				"amount": 0.105
			},
			{
				"color": [106, 129, 46],
				"amount": 0.089
			},
			{
				"color": [80, 100, 40],
				"amount": 0.085
			},
			{
				"color": [80, 91, 41],
				"amount": 0.062
			}
		]
	},
	{
		"name": "Moss Carpet",
		"namespacedId": "moss_carpet",
		"description": "Moss Carpet is a thin decorative variant of the moss block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/moss_carpet.png",
		"item": "Moss Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [89, 107, 46],
				"amount": 0.651
			},
			{
				"color": [68, 88, 38],
				"amount": 0.24
			},
			{
				"color": [55, 68, 31],
				"amount": 0.072
			},
			{
				"color": [107, 140, 44],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Mossy Cobblestone",
		"namespacedId": "mossy_cobblestone",
		"description": "Mossy cobblestone is a variant of cobblestone with moss on it. It is mainly used for crafting or as building block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mossy_cobblestone.png",
		"item": "Mossy Cobblestone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [75, 84, 60],
				"amount": 0.739
			},
			{
				"color": [141, 141, 141],
				"amount": 0.185
			},
			{
				"color": [108, 108, 107],
				"amount": 0.067
			}
		]
	},
	{
		"name": "Mossy Cobblestone Slab",
		"namespacedId": "mossy_cobblestone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mossy_cobblestone_slab.png",
		"item": "Mossy Cobblestone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [79, 89, 63],
				"amount": 0.692
			},
			{
				"color": [143, 143, 143],
				"amount": 0.231
			},
			{
				"color": [108, 108, 109],
				"amount": 0.064
			}
		]
	},
	{
		"name": "Mossy Cobblestone Stairs",
		"namespacedId": "mossy_cobblestone_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mossy_cobblestone_stairs.png",
		"item": "Mossy Cobblestone Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [78, 87, 62],
				"amount": 0.711
			},
			{
				"color": [142, 142, 142],
				"amount": 0.208
			},
			{
				"color": [108, 108, 109],
				"amount": 0.072
			}
		]
	},
	{
		"name": "Mossy Cobblestone Wall",
		"namespacedId": "mossy_cobblestone_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mossy_cobblestone_wall.png",
		"item": "Mossy Cobblestone Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [75, 84, 60],
				"amount": 0.779
			},
			{
				"color": [141, 141, 142],
				"amount": 0.141
			},
			{
				"color": [106, 106, 110],
				"amount": 0.066
			},
			{
				"color": [124, 126, 119],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Mossy Stone Brick Slab",
		"namespacedId": "mossy_stone_brick_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mossy_stone_brick_slab.png",
		"item": "Mossy Stone Brick Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [78, 84, 67],
				"amount": 0.584
			},
			{
				"color": [132, 129, 133],
				"amount": 0.287
			},
			{
				"color": [108, 108, 108],
				"amount": 0.091
			},
			{
				"color": [124, 137, 92],
				"amount": 0.021
			},
			{
				"color": [115, 133, 84],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Mossy Stone Brick Stairs",
		"namespacedId": "mossy_stone_brick_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mossy_stone_brick_stairs.png",
		"item": "Mossy Stone Brick Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [76, 83, 65],
				"amount": 0.659
			},
			{
				"color": [131, 129, 131],
				"amount": 0.216
			},
			{
				"color": [105, 105, 105],
				"amount": 0.085
			},
			{
				"color": [113, 130, 85],
				"amount": 0.022
			},
			{
				"color": [124, 134, 95],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Mossy Stone Brick Wall",
		"namespacedId": "mossy_stone_brick_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mossy_stone_brick_wall.png",
		"item": "Mossy Stone Brick Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [76, 84, 64],
				"amount": 0.72
			},
			{
				"color": [134, 129, 134],
				"amount": 0.153
			},
			{
				"color": [106, 105, 107],
				"amount": 0.117
			}
		]
	},
	{
		"name": "Mossy Stone Bricks",
		"namespacedId": "mossy_stone_bricks",
		"description": "Stone bricks and the variants  cracked stone bricks,  mossy stone bricks, and  chiseled stone bricks are materials found in structures such as strongholds, igloo basements, jungle temples, ocean ruins and ruined portals.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mossy_stone_bricks.png",
		"item": "Mossy Stone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [75, 82, 65],
				"amount": 0.698
			},
			{
				"color": [132, 129, 131],
				"amount": 0.185
			},
			{
				"color": [105, 104, 105],
				"amount": 0.082
			},
			{
				"color": [113, 130, 84],
				"amount": 0.019
			},
			{
				"color": [124, 135, 94],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Moving Piston",
		"namespacedId": "moving_piston",
		"description": "A piston is a block capable of pushing blocks, players, and mobs when given a redstone pulse.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/air.png",
		"item": null,
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0,
		"colors": []
	},
	{
		"name": "Mushroom Stem",
		"namespacedId": "mushroom_stem",
		"description": "Mushroom blocks are solid blocks that make up huge mushrooms.\nThere are 3 kinds of mushroom blocks: red mushroom block, brown mushroom block and mushroom stem.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mushroom_stem.png",
		"item": "Mushroom Stem",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [129, 125, 118],
				"amount": 0.435
			},
			{
				"color": [203, 196, 187],
				"amount": 0.283
			},
			{
				"color": [172, 164, 164],
				"amount": 0.124
			},
			{
				"color": [166, 159, 151],
				"amount": 0.111
			},
			{
				"color": [188, 188, 172],
				"amount": 0.047
			}
		]
	},
	{
		"name": "Mycelium",
		"namespacedId": "mycelium",
		"description": "Mycelium is a particularly rare variant of dirt that is found naturally only in mushroom fields biomes. It has a particle effect that resembles tiny spores being released constantly from the surface.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/mycelium.png",
		"item": "Mycelium",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [94, 77, 71],
				"amount": 0.851
			},
			{
				"color": [42, 32, 22],
				"amount": 0.111
			},
			{
				"color": [139, 104, 93],
				"amount": 0.021
			},
			{
				"color": [60, 43, 28],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Nether Brick Fence",
		"namespacedId": "nether_brick_fence",
		"description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_brick_fence.png",
		"item": "Nether Brick Fence",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [32, 16, 19],
				"amount": 0.895
			},
			{
				"color": [52, 27, 32],
				"amount": 0.056
			},
			{
				"color": [44, 28, 28],
				"amount": 0.028
			},
			{
				"color": [12, 10, 12],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Nether Brick Slab",
		"namespacedId": "nether_brick_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_brick_slab.png",
		"item": "Nether Brick Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [31, 15, 19],
				"amount": 0.798
			},
			{
				"color": [62, 31, 38],
				"amount": 0.077
			},
			{
				"color": [44, 28, 28],
				"amount": 0.066
			},
			{
				"color": [52, 26, 29],
				"amount": 0.041
			},
			{
				"color": [12, 9, 12],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Nether Brick Stairs",
		"namespacedId": "nether_brick_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_brick_stairs.png",
		"item": "Nether Brick Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [31, 15, 19],
				"amount": 0.824
			},
			{
				"color": [62, 30, 37],
				"amount": 0.068
			},
			{
				"color": [44, 28, 28],
				"amount": 0.046
			},
			{
				"color": [52, 26, 29],
				"amount": 0.042
			},
			{
				"color": [12, 8, 12],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Nether Brick Wall",
		"namespacedId": "nether_brick_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_brick_wall.png",
		"item": "Nether Brick Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [35, 20, 20],
				"amount": 0.39
			},
			{
				"color": [46, 23, 28],
				"amount": 0.276
			},
			{
				"color": [29, 12, 20],
				"amount": 0.213
			},
			{
				"color": [20, 11, 12],
				"amount": 0.066
			},
			{
				"color": [61, 29, 37],
				"amount": 0.056
			}
		]
	},
	{
		"name": "Nether Bricks",
		"namespacedId": "nether_bricks",
		"description": "Nether bricks  are blocks used to form nether fortresses in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_bricks.png",
		"item": "Nether Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [31, 15, 18],
				"amount": 0.845
			},
			{
				"color": [52, 26, 29],
				"amount": 0.043
			},
			{
				"color": [63, 31, 38],
				"amount": 0.043
			},
			{
				"color": [44, 28, 28],
				"amount": 0.042
			},
			{
				"color": [12, 9, 12],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Nether Gold Ore",
		"namespacedId": "nether_gold_ore",
		"description": "Nether gold ore is a variant of gold ore found only in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_gold_ore.png",
		"item": "Nether Gold Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [79, 30, 28],
				"amount": 0.759
			},
			{
				"color": [207, 186, 72],
				"amount": 0.183
			},
			{
				"color": [191, 115, 30],
				"amount": 0.048
			}
		]
	},
	{
		"name": "Nether Portal",
		"namespacedId": "nether_portal",
		"description": "The nether portal block is the translucent part of the nether portal that teleports the player to and from the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_portal.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 11,
		"blastResistance": 0,
		"colors": [
			{
				"color": [219, 229, 229],
				"amount": 0.728
			},
			{
				"color": [141, 146, 147],
				"amount": 0.196
			},
			{
				"color": [107, 64, 170],
				"amount": 0.07
			}
		]
	},
	{
		"name": "Nether Quartz Ore",
		"namespacedId": "nether_quartz_ore",
		"description": "Nether quartz ore is ore found in the Nether, and is a source of quartz.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_quartz_ore.png",
		"item": "Nether Quartz Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [79, 35, 34],
				"amount": 0.745
			},
			{
				"color": [183, 173, 161],
				"amount": 0.205
			},
			{
				"color": [135, 98, 91],
				"amount": 0.035
			},
			{
				"color": [170, 113, 107],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Nether Sprouts",
		"namespacedId": "nether_sprouts",
		"description": "Nether sprouts are a non-solid fungi block that generate in warped forests.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_sprouts.png",
		"item": "Nether Sprouts",
		"tool": "Shears",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [20, 155, 132],
				"amount": 0.445
			},
			{
				"color": [20, 124, 132],
				"amount": 0.318
			},
			{
				"color": [20, 178, 132],
				"amount": 0.229
			}
		]
	},
	{
		"name": "Nether Wart",
		"namespacedId": "nether_wart",
		"description": "Nether wart is a fungus found in the Nether that is vital in the creation of potions.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_wart.png",
		"item": "Nether Wart",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [102, 15, 12],
				"amount": 0.75
			},
			{
				"color": [133, 14, 15],
				"amount": 0.068
			},
			{
				"color": [62, 25, 19],
				"amount": 0.067
			},
			{
				"color": [159, 35, 39],
				"amount": 0.061
			},
			{
				"color": [193, 54, 55],
				"amount": 0.053
			}
		]
	},
	{
		"name": "Nether Wart Block",
		"namespacedId": "nether_wart_block",
		"description": "Nether wart blocks are decorative blocks found in crimson forests and crafted using Nether wart.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/nether_wart_block.png",
		"item": "Nether Wart Block",
		"tool": "Hoe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [74, 4, 4],
				"amount": 0.555
			},
			{
				"color": [118, 5, 5],
				"amount": 0.203
			},
			{
				"color": [97, 4, 4],
				"amount": 0.151
			},
			{
				"color": [148, 25, 25],
				"amount": 0.068
			},
			{
				"color": [52, 4, 4],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Netherrack",
		"namespacedId": "netherrack",
		"description": "Netherrack is a rock-like block found in the Nether and in Ruined Portals.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/netherrack.png",
		"item": "Netherrack",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.4,
		"colors": [
			{
				"color": [63, 22, 22],
				"amount": 0.435
			},
			{
				"color": [113, 51, 51],
				"amount": 0.259
			},
			{
				"color": [95, 39, 39],
				"amount": 0.174
			},
			{
				"color": [83, 36, 36],
				"amount": 0.105
			},
			{
				"color": [84, 44, 44],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Note Block",
		"namespacedId": "note_block",
		"description": "A note block is a musical block that emits sounds when powered with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/note_block.png",
		"item": "Note Block",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [46, 33, 23],
				"amount": 0.487
			},
			{
				"color": [130, 81, 58],
				"amount": 0.253
			},
			{
				"color": [95, 61, 41],
				"amount": 0.201
			},
			{
				"color": [77, 49, 33],
				"amount": 0.055
			}
		]
	},
	{
		"name": "Oak Button",
		"namespacedId": "oak_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_button.png",
		"item": "Oak Button",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [142, 115, 69],
				"amount": 0.557
			},
			{
				"color": [83, 66, 36],
				"amount": 0.256
			},
			{
				"color": [182, 149, 93],
				"amount": 0.106
			},
			{
				"color": [100, 76, 44],
				"amount": 0.06
			},
			{
				"color": [105, 86, 47],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Oak Door",
		"namespacedId": "oak_door",
		"description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_door.png",
		"item": "Oak Door",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [103, 79, 47],
				"amount": 0.835
			},
			{
				"color": [134, 108, 62],
				"amount": 0.093
			},
			{
				"color": [62, 50, 37],
				"amount": 0.045
			},
			{
				"color": [164, 131, 83],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Oak Fence",
		"namespacedId": "oak_fence",
		"description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_fence.png",
		"item": "Oak Fence",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [126, 101, 60],
				"amount": 0.808
			},
			{
				"color": [180, 148, 92],
				"amount": 0.097
			},
			{
				"color": [76, 60, 33],
				"amount": 0.072
			},
			{
				"color": [92, 68, 42],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Oak Fence Gate",
		"namespacedId": "oak_fence_gate",
		"description": "A fence gate is a block that shares the functions of both the door and the fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_fence_gate.png",
		"item": "Oak Fence Gate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [132, 107, 64],
				"amount": 0.813
			},
			{
				"color": [79, 63, 36],
				"amount": 0.135
			},
			{
				"color": [195, 156, 99],
				"amount": 0.043
			}
		]
	},
	{
		"name": "Oak Leaves",
		"namespacedId": "oak_leaves",
		"description": "Leaves are natural blocks that generate as part of trees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_leaves.png",
		"item": "Oak Leaves",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [26, 64, 10],
				"amount": 0.353
			},
			{
				"color": [40, 100, 12],
				"amount": 0.345
			},
			{
				"color": [36, 83, 12],
				"amount": 0.166
			},
			{
				"color": [50, 129, 18],
				"amount": 0.106
			},
			{
				"color": [20, 44, 4],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Oak Log",
		"namespacedId": "oak_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_log.png",
		"item": "Oak Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [72, 57, 34],
				"amount": 0.538
			},
			{
				"color": [167, 135, 81],
				"amount": 0.388
			},
			{
				"color": [119, 93, 54],
				"amount": 0.064
			}
		]
	},
	{
		"name": "Oak Planks",
		"namespacedId": "oak_planks",
		"description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_planks.png",
		"item": "Oak Planks",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [109, 87, 51],
				"amount": 0.644
			},
			{
				"color": [178, 145, 89],
				"amount": 0.168
			},
			{
				"color": [147, 117, 72],
				"amount": 0.112
			},
			{
				"color": [68, 55, 31],
				"amount": 0.039
			},
			{
				"color": [156, 132, 76],
				"amount": 0.036
			}
		]
	},
	{
		"name": "Oak Pressure Plate",
		"namespacedId": "oak_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_pressure_plate.png",
		"item": "Oak Pressure Plate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [170, 139, 85],
				"amount": 0.568
			},
			{
				"color": [86, 68, 38],
				"amount": 0.315
			},
			{
				"color": [124, 98, 54],
				"amount": 0.097
			},
			{
				"color": [108, 84, 47],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Oak Sapling",
		"namespacedId": "oak_sapling",
		"description": "A sapling is a non-solid block that can be grown into a tree.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_sapling.png",
		"item": "Oak Sapling",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [94, 68, 36],
				"amount": 0.427
			},
			{
				"color": [71, 146, 51],
				"amount": 0.417
			},
			{
				"color": [22, 85, 17],
				"amount": 0.142
			},
			{
				"color": [51, 96, 31],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Oak Sign",
		"namespacedId": "oak_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_sign.png",
		"item": "Oak Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [115, 92, 53],
				"amount": 0.872
			},
			{
				"color": [68, 52, 30],
				"amount": 0.062
			},
			{
				"color": [168, 136, 82],
				"amount": 0.05
			}
		]
	},
	{
		"name": "Oak Slab",
		"namespacedId": "oak_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_slab.png",
		"item": "Oak Slab",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [115, 93, 55],
				"amount": 0.568
			},
			{
				"color": [179, 146, 91],
				"amount": 0.229
			},
			{
				"color": [73, 59, 33],
				"amount": 0.08
			},
			{
				"color": [157, 132, 78],
				"amount": 0.073
			},
			{
				"color": [149, 121, 73],
				"amount": 0.05
			}
		]
	},
	{
		"name": "Oak Stairs",
		"namespacedId": "oak_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_stairs.png",
		"item": "Oak Stairs",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [117, 94, 56],
				"amount": 0.612
			},
			{
				"color": [179, 146, 90],
				"amount": 0.163
			},
			{
				"color": [75, 60, 33],
				"amount": 0.095
			},
			{
				"color": [149, 121, 74],
				"amount": 0.069
			},
			{
				"color": [157, 132, 79],
				"amount": 0.062
			}
		]
	},
	{
		"name": "Oak Trapdoor",
		"namespacedId": "oak_trapdoor",
		"description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_trapdoor.png",
		"item": "Oak Trapdoor",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [88, 70, 40],
				"amount": 0.627
			},
			{
				"color": [158, 120, 75],
				"amount": 0.275
			},
			{
				"color": [132, 104, 63],
				"amount": 0.068
			},
			{
				"color": [44, 36, 20],
				"amount": 0.016
			},
			{
				"color": [140, 116, 67],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Oak Wall Sign",
		"namespacedId": "oak_wall_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_wall_sign.png",
		"item": "Oak Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [122, 99, 58],
				"amount": 0.865
			},
			{
				"color": [93, 71, 38],
				"amount": 0.068
			},
			{
				"color": [169, 137, 83],
				"amount": 0.044
			},
			{
				"color": [132, 116, 68],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Oak Wood",
		"namespacedId": "oak_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oak_wood.png",
		"item": "Oak Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [61, 48, 29],
				"amount": 0.405
			},
			{
				"color": [91, 73, 44],
				"amount": 0.268
			},
			{
				"color": [115, 92, 52],
				"amount": 0.167
			},
			{
				"color": [135, 105, 65],
				"amount": 0.113
			},
			{
				"color": [109, 81, 50],
				"amount": 0.047
			}
		]
	},
	{
		"name": "Observer",
		"namespacedId": "observer",
		"description": "An observer is a block that emits a redstone signal when the block or fluid it faces experiences a change.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/observer.png",
		"item": "Observer",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [48, 47, 48],
				"amount": 0.626
			},
			{
				"color": [140, 140, 142],
				"amount": 0.281
			},
			{
				"color": [116, 116, 117],
				"amount": 0.046
			},
			{
				"color": [100, 100, 100],
				"amount": 0.046
			}
		]
	},
	{
		"name": "Obsidian",
		"namespacedId": "obsidian",
		"description": "Obsidian is a dark purple block known for its high blast resistance and strength. It is most commonly found when water flows over lava. Among other things, obsidian is used to construct the frames of the nether portal and enchanting tables.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/obsidian.png",
		"item": "Obsidian",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1200,
		"colors": [
			{
				"color": [38, 28, 60],
				"amount": 0.514
			},
			{
				"color": [14, 12, 23],
				"amount": 0.226
			},
			{
				"color": [5, 4, 9],
				"amount": 0.191
			},
			{
				"color": [25, 19, 37],
				"amount": 0.056
			},
			{
				"color": [36, 20, 44],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Orange Banner",
		"namespacedId": "orange_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_banner.png",
		"item": "Orange Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [178, 91, 20],
				"amount": 0.869
			},
			{
				"color": [82, 64, 40],
				"amount": 0.069
			},
			{
				"color": [110, 61, 19],
				"amount": 0.048
			},
			{
				"color": [227, 116, 28],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Orange Bed",
		"namespacedId": "orange_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_bed.png",
		"item": "Orange Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [214, 218, 218],
				"amount": 0.367
			},
			{
				"color": [99, 60, 29],
				"amount": 0.36
			},
			{
				"color": [240, 114, 16],
				"amount": 0.154
			},
			{
				"color": [252, 148, 42],
				"amount": 0.095
			},
			{
				"color": [174, 78, 11],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Orange Candle",
		"namespacedId": "orange_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_candle.png",
		"item": "Orange Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [159, 73, 7],
				"amount": 0.69
			},
			{
				"color": [213, 104, 16],
				"amount": 0.198
			},
			{
				"color": [132, 52, 4],
				"amount": 0.071
			},
			{
				"color": [20, 20, 36],
				"amount": 0.039
			}
		]
	},
	{
		"name": "Orange Carpet",
		"namespacedId": "orange_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_carpet.png",
		"item": "Orange Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [234, 113, 17],
				"amount": 0.762
			},
			{
				"color": [145, 71, 10],
				"amount": 0.16
			},
			{
				"color": [196, 99, 17],
				"amount": 0.033
			},
			{
				"color": [244, 142, 41],
				"amount": 0.025
			},
			{
				"color": [188, 84, 6],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Orange Concrete",
		"namespacedId": "orange_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_concrete.png",
		"item": "Orange Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [180, 76, 4],
				"amount": 0.546
			},
			{
				"color": [220, 93, 4],
				"amount": 0.371
			},
			{
				"color": [138, 60, 4],
				"amount": 0.077
			}
		]
	},
	{
		"name": "Orange Concrete Powder",
		"namespacedId": "orange_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_concrete_powder.png",
		"item": "Orange Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [153, 88, 20],
				"amount": 0.573
			},
			{
				"color": [224, 130, 31],
				"amount": 0.31
			},
			{
				"color": [193, 112, 28],
				"amount": 0.104
			},
			{
				"color": [188, 142, 60],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Orange Glazed Terracotta",
		"namespacedId": "orange_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_glazed_terracotta.png",
		"item": "Orange Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [190, 100, 24],
				"amount": 0.458
			},
			{
				"color": [63, 178, 177],
				"amount": 0.313
			},
			{
				"color": [20, 112, 114],
				"amount": 0.22
			}
		]
	},
	{
		"name": "Orange Shulker Box",
		"namespacedId": "orange_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_shulker_box.png",
		"item": "Orange Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [232, 107, 10],
				"amount": 0.339
			},
			{
				"color": [141, 61, 5],
				"amount": 0.323
			},
			{
				"color": [192, 87, 7],
				"amount": 0.226
			},
			{
				"color": [165, 76, 6],
				"amount": 0.083
			},
			{
				"color": [104, 44, 4],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Orange Stained Glass",
		"namespacedId": "orange_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_stained_glass.png",
		"item": "Orange Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [209, 122, 51],
				"amount": 0.504
			},
			{
				"color": [180, 100, 44],
				"amount": 0.336
			},
			{
				"color": [135, 76, 35],
				"amount": 0.113
			},
			{
				"color": [172, 100, 44],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Orange Stained Glass Pane",
		"namespacedId": "orange_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_stained_glass_pane.png",
		"item": "Orange Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [127, 75, 28],
				"amount": 0.463
			},
			{
				"color": [172, 100, 44],
				"amount": 0.289
			},
			{
				"color": [204, 121, 46],
				"amount": 0.245
			}
		]
	},
	{
		"name": "Orange Terracotta",
		"namespacedId": "orange_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_terracotta.png",
		"item": "Orange Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [129, 68, 29],
				"amount": 0.581
			},
			{
				"color": [99, 52, 22],
				"amount": 0.213
			},
			{
				"color": [157, 82, 36],
				"amount": 0.206
			}
		]
	},
	{
		"name": "Orange Tulip",
		"namespacedId": "orange_tulip",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_tulip.png",
		"item": "Orange Tulip",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [84, 168, 44],
				"amount": 0.388
			},
			{
				"color": [224, 138, 37],
				"amount": 0.351
			},
			{
				"color": [74, 142, 41],
				"amount": 0.173
			},
			{
				"color": [22, 126, 4],
				"amount": 0.073
			},
			{
				"color": [76, 164, 44],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Orange Wall Banner",
		"namespacedId": "orange_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_wall_banner.png",
		"item": "Orange Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [178, 91, 20],
				"amount": 0.832
			},
			{
				"color": [98, 62, 27],
				"amount": 0.142
			},
			{
				"color": [225, 114, 28],
				"amount": 0.013
			},
			{
				"color": [117, 76, 32],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Orange Wool",
		"namespacedId": "orange_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/orange_wool.png",
		"item": "Orange Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [235, 116, 19],
				"amount": 0.433
			},
			{
				"color": [148, 71, 10],
				"amount": 0.273
			},
			{
				"color": [192, 93, 15],
				"amount": 0.235
			},
			{
				"color": [196, 116, 34],
				"amount": 0.046
			},
			{
				"color": [148, 92, 28],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Oxeye Daisy",
		"namespacedId": "oxeye_daisy",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oxeye_daisy.png",
		"item": "Oxeye Daisy",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [212, 228, 228],
				"amount": 0.588
			},
			{
				"color": [34, 130, 12],
				"amount": 0.27
			},
			{
				"color": [246, 193, 46],
				"amount": 0.133
			}
		]
	},
	{
		"name": "Oxidized Copper",
		"namespacedId": "oxidized_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oxidized_copper.png",
		"item": "Oxidized Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [60, 119, 98],
				"amount": 0.731
			},
			{
				"color": [88, 176, 146],
				"amount": 0.154
			},
			{
				"color": [80, 155, 133],
				"amount": 0.041
			},
			{
				"color": [84, 156, 118],
				"amount": 0.038
			},
			{
				"color": [40, 72, 60],
				"amount": 0.036
			}
		]
	},
	{
		"name": "Oxidized Cut Copper",
		"namespacedId": "oxidized_cut_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oxidized_cut_copper.png",
		"item": "Oxidized Cut Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [54, 104, 87],
				"amount": 0.673
			},
			{
				"color": [91, 172, 141],
				"amount": 0.204
			},
			{
				"color": [78, 147, 117],
				"amount": 0.062
			},
			{
				"color": [76, 149, 132],
				"amount": 0.06
			}
		]
	},
	{
		"name": "Oxidized Cut Copper Slab",
		"namespacedId": "oxidized_cut_copper_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oxidized_cut_copper_slab.png",
		"item": "Oxidized Cut Copper Slab",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [61, 118, 97],
				"amount": 0.699
			},
			{
				"color": [79, 156, 135],
				"amount": 0.125
			},
			{
				"color": [98, 183, 148],
				"amount": 0.096
			},
			{
				"color": [38, 73, 60],
				"amount": 0.079
			}
		]
	},
	{
		"name": "Oxidized Cut Copper Stairs",
		"namespacedId": "oxidized_cut_copper_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/oxidized_cut_copper_stairs.png",
		"item": "Oxidized Cut Copper Stairs",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [60, 116, 95],
				"amount": 0.756
			},
			{
				"color": [88, 174, 141],
				"amount": 0.151
			},
			{
				"color": [76, 148, 132],
				"amount": 0.047
			},
			{
				"color": [37, 70, 58],
				"amount": 0.03
			},
			{
				"color": [92, 156, 124],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Packed Ice",
		"namespacedId": "packed_ice",
		"description": "Packed ice is an opaque solid block variant of ice. Unlike regular ice, it does not melt near bright  light sources.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/packed_ice.png",
		"item": "Packed Ice",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [97, 123, 173],
				"amount": 0.658
			},
			{
				"color": [163, 194, 248],
				"amount": 0.121
			},
			{
				"color": [130, 170, 247],
				"amount": 0.101
			},
			{
				"color": [148, 188, 252],
				"amount": 0.086
			},
			{
				"color": [131, 157, 205],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Peony",
		"namespacedId": "peony",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/peony.png",
		"item": "Peony",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [223, 173, 240],
				"amount": 0.636
			},
			{
				"color": [37, 77, 39],
				"amount": 0.353
			}
		]
	},
	{
		"name": "Petrified Oak Slab",
		"namespacedId": "petrified_oak_slab",
		"description": "Petrified oak slabs are a unique type of slab only available from the Creative inventory, commands or upgrading from legacy versions - unlike all other slabs, they are unobtainable through conventional Survival gameplay.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/petrified_oak_slab.png",
		"item": "Petrified Oak Slab",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [115, 93, 55],
				"amount": 0.568
			},
			{
				"color": [179, 146, 91],
				"amount": 0.229
			},
			{
				"color": [73, 59, 33],
				"amount": 0.08
			},
			{
				"color": [157, 132, 78],
				"amount": 0.073
			},
			{
				"color": [149, 121, 73],
				"amount": 0.05
			}
		]
	},
	{
		"name": "Pink Banner",
		"namespacedId": "pink_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_banner.png",
		"item": "Pink Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [171, 99, 122],
				"amount": 0.848
			},
			{
				"color": [86, 63, 47],
				"amount": 0.111
			},
			{
				"color": [109, 65, 76],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Pink Bed",
		"namespacedId": "pink_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_bed.png",
		"item": "Pink Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [107, 60, 65],
				"amount": 0.537
			},
			{
				"color": [218, 222, 222],
				"amount": 0.213
			},
			{
				"color": [235, 121, 161],
				"amount": 0.182
			},
			{
				"color": [244, 148, 180],
				"amount": 0.058
			}
		]
	},
	{
		"name": "Pink Candle",
		"namespacedId": "pink_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_candle.png",
		"item": "Pink Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [151, 75, 104],
				"amount": 0.654
			},
			{
				"color": [204, 108, 140],
				"amount": 0.231
			},
			{
				"color": [121, 52, 84],
				"amount": 0.068
			},
			{
				"color": [20, 20, 35],
				"amount": 0.045
			}
		]
	},
	{
		"name": "Pink Carpet",
		"namespacedId": "pink_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_carpet.png",
		"item": "Pink Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [229, 133, 164],
				"amount": 0.686
			},
			{
				"color": [150, 86, 107],
				"amount": 0.209
			},
			{
				"color": [207, 100, 138],
				"amount": 0.056
			},
			{
				"color": [236, 167, 191],
				"amount": 0.043
			}
		]
	},
	{
		"name": "Pink Concrete",
		"namespacedId": "pink_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_concrete.png",
		"item": "Pink Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [172, 82, 116],
				"amount": 0.487
			},
			{
				"color": [211, 100, 140],
				"amount": 0.353
			},
			{
				"color": [132, 60, 92],
				"amount": 0.115
			},
			{
				"color": [131, 60, 84],
				"amount": 0.039
			}
		]
	},
	{
		"name": "Pink Concrete Powder",
		"namespacedId": "pink_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_concrete_powder.png",
		"item": "Pink Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [152, 100, 119],
				"amount": 0.611
			},
			{
				"color": [229, 170, 191],
				"amount": 0.144
			},
			{
				"color": [223, 144, 173],
				"amount": 0.12
			},
			{
				"color": [192, 132, 154],
				"amount": 0.114
			},
			{
				"color": [232, 156, 188],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Pink Glazed Terracotta",
		"namespacedId": "pink_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_glazed_terracotta.png",
		"item": "Pink Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [179, 122, 142],
				"amount": 0.729
			},
			{
				"color": [129, 75, 95],
				"amount": 0.11
			},
			{
				"color": [242, 163, 190],
				"amount": 0.086
			},
			{
				"color": [155, 84, 110],
				"amount": 0.064
			},
			{
				"color": [148, 92, 108],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Pink Shulker Box",
		"namespacedId": "pink_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_shulker_box.png",
		"item": "Pink Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [140, 69, 94],
				"amount": 0.508
			},
			{
				"color": [226, 121, 154],
				"amount": 0.377
			},
			{
				"color": [196, 111, 140],
				"amount": 0.061
			},
			{
				"color": [185, 94, 126],
				"amount": 0.03
			},
			{
				"color": [196, 108, 132],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Pink Stained Glass",
		"namespacedId": "pink_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_stained_glass.png",
		"item": "Pink Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [236, 124, 164],
				"amount": 0.449
			},
			{
				"color": [198, 101, 138],
				"amount": 0.427
			},
			{
				"color": [156, 76, 108],
				"amount": 0.062
			},
			{
				"color": [148, 76, 100],
				"amount": 0.062
			}
		]
	},
	{
		"name": "Pink Stained Glass Pane",
		"namespacedId": "pink_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_stained_glass_pane.png",
		"item": "Pink Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [142, 75, 97],
				"amount": 0.41
			},
			{
				"color": [196, 100, 132],
				"amount": 0.361
			},
			{
				"color": [228, 121, 156],
				"amount": 0.217
			}
		]
	},
	{
		"name": "Pink Terracotta",
		"namespacedId": "pink_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_terracotta.png",
		"item": "Pink Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [130, 62, 62],
				"amount": 0.641
			},
			{
				"color": [158, 76, 76],
				"amount": 0.228
			},
			{
				"color": [100, 52, 51],
				"amount": 0.104
			},
			{
				"color": [99, 44, 45],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Pink Tulip",
		"namespacedId": "pink_tulip",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_tulip.png",
		"item": "Pink Tulip",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [235, 199, 249],
				"amount": 0.692
			},
			{
				"color": [76, 144, 44],
				"amount": 0.153
			},
			{
				"color": [36, 130, 12],
				"amount": 0.088
			},
			{
				"color": [84, 166, 44],
				"amount": 0.066
			}
		]
	},
	{
		"name": "Pink Wall Banner",
		"namespacedId": "pink_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_wall_banner.png",
		"item": "Pink Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [170, 99, 122],
				"amount": 0.887
			},
			{
				"color": [98, 64, 61],
				"amount": 0.105
			}
		]
	},
	{
		"name": "Pink Wool",
		"namespacedId": "pink_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pink_wool.png",
		"item": "Pink Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [149, 86, 107],
				"amount": 0.418
			},
			{
				"color": [232, 140, 170],
				"amount": 0.386
			},
			{
				"color": [194, 111, 137],
				"amount": 0.126
			},
			{
				"color": [196, 140, 161],
				"amount": 0.042
			},
			{
				"color": [196, 131, 156],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Piston",
		"namespacedId": "piston",
		"description": "A piston is a block capable of pushing blocks, players, and mobs when given a redstone pulse.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/piston.png",
		"item": "Piston",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [77, 74, 68],
				"amount": 0.699
			},
			{
				"color": [183, 156, 118],
				"amount": 0.245
			},
			{
				"color": [137, 114, 75],
				"amount": 0.056
			}
		]
	},
	{
		"name": "Piston Head",
		"namespacedId": "piston_head",
		"description": "A piston is a block capable of pushing blocks, players, and mobs when given a redstone pulse.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/piston_head.png",
		"item": null,
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [87, 74, 55],
				"amount": 0.69
			},
			{
				"color": [184, 181, 180],
				"amount": 0.158
			},
			{
				"color": [173, 137, 82],
				"amount": 0.102
			},
			{
				"color": [144, 117, 74],
				"amount": 0.049
			}
		]
	},
	{
		"name": "Player Head",
		"namespacedId": "player_head",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/player_head.png",
		"item": "Player Head",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [37, 24, 13],
				"amount": 0.766
			},
			{
				"color": [166, 153, 148],
				"amount": 0.087
			},
			{
				"color": [100, 65, 46],
				"amount": 0.072
			},
			{
				"color": [130, 93, 78],
				"amount": 0.072
			}
		]
	},
	{
		"name": "Player Wall Head",
		"namespacedId": "player_wall_head",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/player_wall_head.png",
		"item": "Player Head",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [37, 24, 13],
				"amount": 0.766
			},
			{
				"color": [166, 153, 148],
				"amount": 0.087
			},
			{
				"color": [100, 65, 46],
				"amount": 0.072
			},
			{
				"color": [130, 93, 78],
				"amount": 0.072
			}
		]
	},
	{
		"name": "Podzol",
		"namespacedId": "podzol",
		"description": "Podzol is a dirt-type block that naturally blankets the surface of the old growth taiga and bamboo jungles, along with their respective variants. Grass blocks and mycelium cannot spread to this block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/podzol.png",
		"item": "Podzol",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [88, 61, 35],
				"amount": 0.865
			},
			{
				"color": [144, 97, 54],
				"amount": 0.08
			},
			{
				"color": [48, 35, 21],
				"amount": 0.046
			}
		]
	},
	{
		"name": "Pointed Dripstone",
		"namespacedId": "pointed_dripstone",
		"description": "Pointed dripstone is a block that makes up stalactites and stalagmites.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pointed_dripstone.png",
		"item": "Pointed Dripstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [123, 91, 83],
				"amount": 0.519
			},
			{
				"color": [148, 124, 100],
				"amount": 0.406
			},
			{
				"color": [161, 139, 114],
				"amount": 0.058
			}
		]
	},
	{
		"name": "Polished Andesite",
		"namespacedId": "polished_andesite",
		"description": "Andesite is a block of igneous rock, most often found in large pockets in the ground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_andesite.png",
		"item": "Polished Andesite",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [101, 102, 102],
				"amount": 0.87
			},
			{
				"color": [167, 162, 159],
				"amount": 0.061
			},
			{
				"color": [133, 139, 142],
				"amount": 0.052
			},
			{
				"color": [61, 66, 62],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Polished Andesite Slab",
		"namespacedId": "polished_andesite_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_andesite_slab.png",
		"item": "Polished Andesite Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [107, 108, 109],
				"amount": 0.906
			},
			{
				"color": [171, 167, 164],
				"amount": 0.072
			},
			{
				"color": [60, 64, 63],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Polished Andesite Stairs",
		"namespacedId": "polished_andesite_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_andesite_stairs.png",
		"item": "Polished Andesite Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [104, 106, 105],
				"amount": 0.903
			},
			{
				"color": [162, 157, 155],
				"amount": 0.074
			},
			{
				"color": [61, 66, 62],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Polished Basalt",
		"namespacedId": "polished_basalt",
		"description": "Basalt is an igneous rock found in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_basalt.png",
		"item": "Polished Basalt",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [72, 72, 73],
				"amount": 0.792
			},
			{
				"color": [120, 120, 120],
				"amount": 0.149
			},
			{
				"color": [31, 33, 40],
				"amount": 0.042
			},
			{
				"color": [100, 100, 100],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Polished Blackstone",
		"namespacedId": "polished_blackstone",
		"description": "Polished blackstone is the stone-like polished variation of blackstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone.png",
		"item": "Polished Blackstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [30, 26, 30],
				"amount": 0.675
			},
			{
				"color": [66, 65, 74],
				"amount": 0.122
			},
			{
				"color": [45, 44, 51],
				"amount": 0.119
			},
			{
				"color": [59, 52, 68],
				"amount": 0.082
			}
		]
	},
	{
		"name": "Polished Blackstone Brick Slab",
		"namespacedId": "polished_blackstone_brick_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone_brick_slab.png",
		"item": "Polished Blackstone Brick Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [28, 23, 27],
				"amount": 0.698
			},
			{
				"color": [65, 64, 72],
				"amount": 0.175
			},
			{
				"color": [49, 44, 55],
				"amount": 0.084
			},
			{
				"color": [59, 52, 68],
				"amount": 0.04
			}
		]
	},
	{
		"name": "Polished Blackstone Brick Stairs",
		"namespacedId": "polished_blackstone_brick_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone_brick_stairs.png",
		"item": "Polished Blackstone Brick Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [29, 23, 27],
				"amount": 0.595
			},
			{
				"color": [53, 46, 61],
				"amount": 0.185
			},
			{
				"color": [65, 63, 72],
				"amount": 0.159
			},
			{
				"color": [52, 44, 52],
				"amount": 0.044
			},
			{
				"color": [44, 44, 51],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Polished Blackstone Brick Wall",
		"namespacedId": "polished_blackstone_brick_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone_brick_wall.png",
		"item": "Polished Blackstone Brick Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [23, 18, 20],
				"amount": 0.509
			},
			{
				"color": [44, 44, 51],
				"amount": 0.234
			},
			{
				"color": [60, 56, 68],
				"amount": 0.213
			},
			{
				"color": [36, 33, 44],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Polished Blackstone Bricks",
		"namespacedId": "polished_blackstone_bricks",
		"description": "Polished blackstone bricks are a decorative version of polished blackstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone_bricks.png",
		"item": "Polished Blackstone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [29, 25, 29],
				"amount": 0.705
			},
			{
				"color": [63, 61, 71],
				"amount": 0.206
			},
			{
				"color": [48, 43, 55],
				"amount": 0.076
			}
		]
	},
	{
		"name": "Polished Blackstone Button",
		"namespacedId": "polished_blackstone_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone_button.png",
		"item": "Polished Blackstone Button",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [47, 42, 53],
				"amount": 0.726
			},
			{
				"color": [22, 20, 16],
				"amount": 0.187
			},
			{
				"color": [76, 75, 83],
				"amount": 0.049
			},
			{
				"color": [28, 28, 34],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Polished Blackstone Pressure Plate",
		"namespacedId": "polished_blackstone_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone_pressure_plate.png",
		"item": "Polished Blackstone Pressure Plate",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [50, 46, 52],
				"amount": 0.881
			},
			{
				"color": [26, 19, 21],
				"amount": 0.061
			},
			{
				"color": [74, 73, 81],
				"amount": 0.051
			}
		]
	},
	{
		"name": "Polished Blackstone Slab",
		"namespacedId": "polished_blackstone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone_slab.png",
		"item": "Polished Blackstone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [33, 29, 32],
				"amount": 0.425
			},
			{
				"color": [64, 61, 72],
				"amount": 0.355
			},
			{
				"color": [52, 44, 55],
				"amount": 0.169
			},
			{
				"color": [44, 43, 52],
				"amount": 0.026
			},
			{
				"color": [52, 52, 60],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Polished Blackstone Stairs",
		"namespacedId": "polished_blackstone_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone_stairs.png",
		"item": "Polished Blackstone Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [40, 37, 45],
				"amount": 0.677
			},
			{
				"color": [64, 61, 71],
				"amount": 0.262
			},
			{
				"color": [27, 20, 19],
				"amount": 0.058
			}
		]
	},
	{
		"name": "Polished Blackstone Wall",
		"namespacedId": "polished_blackstone_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_blackstone_wall.png",
		"item": "Polished Blackstone Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [33, 31, 35],
				"amount": 0.738
			},
			{
				"color": [60, 56, 68],
				"amount": 0.164
			},
			{
				"color": [50, 44, 60],
				"amount": 0.076
			},
			{
				"color": [52, 52, 60],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Polished Deepslate",
		"namespacedId": "polished_deepslate",
		"description": "Polished deepslate is the stone-like polished version of deepslate.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_deepslate.png",
		"item": "Polished Deepslate",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [52, 52, 52],
				"amount": 0.687
			},
			{
				"color": [89, 89, 89],
				"amount": 0.213
			},
			{
				"color": [75, 76, 76],
				"amount": 0.076
			},
			{
				"color": [26, 26, 26],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Polished Deepslate Slab",
		"namespacedId": "polished_deepslate_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_deepslate_slab.png",
		"item": "Polished Deepslate Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [55, 55, 56],
				"amount": 0.726
			},
			{
				"color": [89, 89, 89],
				"amount": 0.246
			},
			{
				"color": [26, 26, 26],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Polished Deepslate Stairs",
		"namespacedId": "polished_deepslate_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_deepslate_stairs.png",
		"item": "Polished Deepslate Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [55, 55, 57],
				"amount": 0.761
			},
			{
				"color": [89, 89, 89],
				"amount": 0.212
			},
			{
				"color": [26, 26, 27],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Polished Deepslate Wall",
		"namespacedId": "polished_deepslate_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_deepslate_wall.png",
		"item": "Polished Deepslate Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [54, 54, 56],
				"amount": 0.811
			},
			{
				"color": [88, 88, 88],
				"amount": 0.166
			},
			{
				"color": [26, 26, 26],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Polished Diorite",
		"namespacedId": "polished_diorite",
		"description": "Diorite is a block of igneous rock, found in large pockets in the ground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_diorite.png",
		"item": "Polished Diorite",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [147, 147, 148],
				"amount": 0.846
			},
			{
				"color": [209, 207, 209],
				"amount": 0.085
			},
			{
				"color": [77, 80, 80],
				"amount": 0.036
			},
			{
				"color": [100, 106, 100],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Polished Diorite Slab",
		"namespacedId": "polished_diorite_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_diorite_slab.png",
		"item": "Polished Diorite Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [185, 185, 187],
				"amount": 0.764
			},
			{
				"color": [89, 91, 92],
				"amount": 0.137
			},
			{
				"color": [123, 124, 125],
				"amount": 0.09
			}
		]
	},
	{
		"name": "Polished Diorite Stairs",
		"namespacedId": "polished_diorite_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_diorite_stairs.png",
		"item": "Polished Diorite Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [155, 155, 156],
				"amount": 0.817
			},
			{
				"color": [88, 91, 90],
				"amount": 0.122
			},
			{
				"color": [216, 213, 216],
				"amount": 0.046
			},
			{
				"color": [108, 110, 108],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Polished Granite",
		"namespacedId": "polished_granite",
		"description": "Granite is a block of igneous rock, found in large pockets in the ground.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_granite.png",
		"item": "Polished Granite",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [120, 82, 67],
				"amount": 0.873
			},
			{
				"color": [66, 45, 38],
				"amount": 0.059
			},
			{
				"color": [178, 136, 117],
				"amount": 0.049
			},
			{
				"color": [164, 115, 97],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Polished Granite Slab",
		"namespacedId": "polished_granite_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_granite_slab.png",
		"item": "Polished Granite Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [126, 86, 71],
				"amount": 0.824
			},
			{
				"color": [66, 44, 38],
				"amount": 0.085
			},
			{
				"color": [181, 139, 124],
				"amount": 0.069
			},
			{
				"color": [164, 114, 98],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Polished Granite Stairs",
		"namespacedId": "polished_granite_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/polished_granite_stairs.png",
		"item": "Polished Granite Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [122, 83, 68],
				"amount": 0.84
			},
			{
				"color": [172, 133, 115],
				"amount": 0.074
			},
			{
				"color": [66, 45, 38],
				"amount": 0.064
			},
			{
				"color": [164, 115, 98],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Poppy",
		"namespacedId": "poppy",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/poppy.png",
		"item": "Poppy",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [235, 52, 44],
				"amount": 0.378
			},
			{
				"color": [48, 106, 38],
				"amount": 0.251
			},
			{
				"color": [156, 36, 28],
				"amount": 0.22
			},
			{
				"color": [35, 68, 36],
				"amount": 0.099
			},
			{
				"color": [196, 38, 41],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Potatoes",
		"namespacedId": "potatoes",
		"description": "A potato is a food item that can be planted, consumed raw, or cooked in a furnace or a campfire to make baked potatoes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potatoes.png",
		"item": "Potato",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [92, 149, 52],
				"amount": 0.534
			},
			{
				"color": [73, 187, 43],
				"amount": 0.167
			},
			{
				"color": [201, 182, 89],
				"amount": 0.138
			},
			{
				"color": [94, 118, 41],
				"amount": 0.087
			},
			{
				"color": [153, 139, 62],
				"amount": 0.074
			}
		]
	},
	{
		"name": "Potted Acacia Sapling",
		"namespacedId": "potted_acacia_sapling",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_acacia_sapling.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [92, 56, 31],
				"amount": 0.493
			},
			{
				"color": [96, 115, 25],
				"amount": 0.32
			},
			{
				"color": [107, 89, 23],
				"amount": 0.136
			},
			{
				"color": [121, 68, 53],
				"amount": 0.025
			},
			{
				"color": [62, 36, 28],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Potted Allium",
		"namespacedId": "potted_allium",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_allium.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [149, 107, 187],
				"amount": 0.673
			},
			{
				"color": [92, 51, 39],
				"amount": 0.212
			},
			{
				"color": [67, 127, 39],
				"amount": 0.081
			},
			{
				"color": [131, 77, 60],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Potted Azalea",
		"namespacedId": "potted_azalea_bush",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_azalea_bush.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [72, 60, 32],
				"amount": 0.625
			},
			{
				"color": [94, 117, 41],
				"amount": 0.239
			},
			{
				"color": [79, 95, 38],
				"amount": 0.065
			},
			{
				"color": [109, 61, 45],
				"amount": 0.059
			},
			{
				"color": [42, 55, 26],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Potted Azure Bluet",
		"namespacedId": "potted_azure_bluet",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_azure_bluet.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [91, 51, 39],
				"amount": 0.441
			},
			{
				"color": [188, 193, 188],
				"amount": 0.342
			},
			{
				"color": [133, 165, 56],
				"amount": 0.176
			},
			{
				"color": [73, 118, 40],
				"amount": 0.038
			}
		]
	},
	{
		"name": "Potted Bamboo",
		"namespacedId": "potted_bamboo",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_bamboo.png",
		"item": null,
		"tool": "Sword",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [89, 50, 38],
				"amount": 0.603
			},
			{
				"color": [125, 168, 62],
				"amount": 0.163
			},
			{
				"color": [79, 117, 21],
				"amount": 0.138
			},
			{
				"color": [49, 81, 6],
				"amount": 0.06
			},
			{
				"color": [130, 74, 58],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Potted Birch Sapling",
		"namespacedId": "potted_birch_sapling",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_birch_sapling.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [89, 56, 39],
				"amount": 0.461
			},
			{
				"color": [156, 166, 115],
				"amount": 0.361
			},
			{
				"color": [87, 123, 49],
				"amount": 0.168
			}
		]
	},
	{
		"name": "Potted Blue Orchid",
		"namespacedId": "potted_blue_orchid",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_blue_orchid.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [34, 138, 192],
				"amount": 0.45
			},
			{
				"color": [92, 52, 39],
				"amount": 0.436
			},
			{
				"color": [62, 125, 36],
				"amount": 0.11
			}
		]
	},
	{
		"name": "Potted Brown Mushroom",
		"namespacedId": "potted_brown_mushroom",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_brown_mushroom.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 1,
		"blastResistance": 0,
		"colors": [
			{
				"color": [88, 52, 40],
				"amount": 0.692
			},
			{
				"color": [163, 122, 98],
				"amount": 0.236
			},
			{
				"color": [122, 77, 59],
				"amount": 0.059
			}
		]
	},
	{
		"name": "Potted Cactus",
		"namespacedId": "potted_cactus",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_cactus.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.4,
		"colors": [
			{
				"color": [75, 66, 33],
				"amount": 0.732
			},
			{
				"color": [109, 150, 64],
				"amount": 0.173
			},
			{
				"color": [81, 121, 41],
				"amount": 0.057
			},
			{
				"color": [132, 74, 60],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Potted Cornflower",
		"namespacedId": "potted_cornflower",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_cornflower.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [70, 89, 180],
				"amount": 0.502
			},
			{
				"color": [87, 49, 37],
				"amount": 0.224
			},
			{
				"color": [71, 110, 59],
				"amount": 0.179
			},
			{
				"color": [123, 68, 54],
				"amount": 0.094
			}
		]
	},
	{
		"name": "Potted Crimson Fungus",
		"namespacedId": "potted_crimson_fungus",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_crimson_fungus.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [94, 43, 35],
				"amount": 0.719
			},
			{
				"color": [225, 89, 41],
				"amount": 0.229
			},
			{
				"color": [158, 33, 31],
				"amount": 0.045
			}
		]
	},
	{
		"name": "Potted Crimson Roots",
		"namespacedId": "potted_crimson_roots",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_crimson_roots.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [86, 46, 37],
				"amount": 0.525
			},
			{
				"color": [156, 12, 40],
				"amount": 0.302
			},
			{
				"color": [116, 54, 50],
				"amount": 0.062
			},
			{
				"color": [98, 4, 39],
				"amount": 0.059
			},
			{
				"color": [125, 72, 57],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Potted Dandelion",
		"namespacedId": "potted_dandelion",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_dandelion.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [88, 54, 38],
				"amount": 0.682
			},
			{
				"color": [202, 168, 54],
				"amount": 0.244
			},
			{
				"color": [73, 140, 35],
				"amount": 0.033
			},
			{
				"color": [25, 105, 8],
				"amount": 0.025
			},
			{
				"color": [130, 74, 58],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Potted Dark Oak Sapling",
		"namespacedId": "potted_dark_oak_sapling",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_dark_oak_sapling.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [84, 51, 34],
				"amount": 0.615
			},
			{
				"color": [20, 74, 16],
				"amount": 0.233
			},
			{
				"color": [57, 122, 44],
				"amount": 0.13
			},
			{
				"color": [121, 68, 54],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Potted Dead Bush",
		"namespacedId": "potted_dead_bush",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_dead_bush.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [81, 54, 34],
				"amount": 0.73
			},
			{
				"color": [127, 84, 42],
				"amount": 0.18
			},
			{
				"color": [109, 61, 45],
				"amount": 0.061
			},
			{
				"color": [116, 84, 37],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Potted Fern",
		"namespacedId": "potted_fern",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_fern.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [49, 73, 42],
				"amount": 0.56
			},
			{
				"color": [103, 58, 43],
				"amount": 0.213
			},
			{
				"color": [76, 41, 33],
				"amount": 0.087
			},
			{
				"color": [68, 100, 60],
				"amount": 0.086
			},
			{
				"color": [132, 77, 59],
				"amount": 0.054
			}
		]
	},
	{
		"name": "Potted Flowering Azalea",
		"namespacedId": "potted_flowering_azalea_bush",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_flowering_azalea_bush.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [81, 75, 37],
				"amount": 0.822
			},
			{
				"color": [156, 89, 170],
				"amount": 0.133
			},
			{
				"color": [113, 64, 107],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Potted Jungle Sapling",
		"namespacedId": "potted_jungle_sapling",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_jungle_sapling.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [110, 60, 47],
				"amount": 0.391
			},
			{
				"color": [41, 96, 24],
				"amount": 0.221
			},
			{
				"color": [41, 53, 12],
				"amount": 0.19
			},
			{
				"color": [82, 45, 35],
				"amount": 0.154
			},
			{
				"color": [62, 37, 28],
				"amount": 0.043
			}
		]
	},
	{
		"name": "Potted Lily of the Valley",
		"namespacedId": "potted_lily_of_the_valley",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_lily_of_the_valley.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [81, 67, 36],
				"amount": 0.508
			},
			{
				"color": [195, 195, 195],
				"amount": 0.302
			},
			{
				"color": [92, 150, 56],
				"amount": 0.153
			},
			{
				"color": [132, 75, 60],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Potted Oak Sapling",
		"namespacedId": "potted_oak_sapling",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_oak_sapling.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [86, 54, 36],
				"amount": 0.654
			},
			{
				"color": [63, 127, 47],
				"amount": 0.224
			},
			{
				"color": [23, 78, 17],
				"amount": 0.1
			},
			{
				"color": [122, 68, 54],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Potted Orange Tulip",
		"namespacedId": "potted_orange_tulip",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_orange_tulip.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [88, 51, 37],
				"amount": 0.631
			},
			{
				"color": [62, 126, 34],
				"amount": 0.185
			},
			{
				"color": [177, 112, 35],
				"amount": 0.119
			},
			{
				"color": [22, 102, 4],
				"amount": 0.056
			}
		]
	},
	{
		"name": "Potted Oxeye Daisy",
		"namespacedId": "potted_oxeye_daisy",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_oxeye_daisy.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [84, 56, 36],
				"amount": 0.513
			},
			{
				"color": [180, 189, 188],
				"amount": 0.375
			},
			{
				"color": [205, 166, 56],
				"amount": 0.072
			},
			{
				"color": [69, 138, 37],
				"amount": 0.029
			},
			{
				"color": [129, 74, 57],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Potted Pink Tulip",
		"namespacedId": "potted_pink_tulip",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_pink_tulip.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [78, 63, 33],
				"amount": 0.496
			},
			{
				"color": [194, 162, 208],
				"amount": 0.308
			},
			{
				"color": [67, 138, 36],
				"amount": 0.097
			},
			{
				"color": [116, 65, 52],
				"amount": 0.056
			},
			{
				"color": [132, 75, 60],
				"amount": 0.043
			}
		]
	},
	{
		"name": "Potted Poppy",
		"namespacedId": "potted_poppy",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_poppy.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [87, 48, 36],
				"amount": 0.649
			},
			{
				"color": [174, 37, 35],
				"amount": 0.191
			},
			{
				"color": [125, 60, 48],
				"amount": 0.101
			},
			{
				"color": [67, 106, 37],
				"amount": 0.035
			},
			{
				"color": [34, 70, 34],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Potted Red Mushroom",
		"namespacedId": "potted_red_mushroom",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_red_mushroom.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [93, 49, 38],
				"amount": 0.691
			},
			{
				"color": [152, 157, 129],
				"amount": 0.162
			},
			{
				"color": [193, 29, 30],
				"amount": 0.141
			}
		]
	},
	{
		"name": "Potted Red Tulip",
		"namespacedId": "potted_red_tulip",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_red_tulip.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [86, 50, 36],
				"amount": 0.598
			},
			{
				"color": [60, 125, 33],
				"amount": 0.189
			},
			{
				"color": [184, 42, 37],
				"amount": 0.102
			},
			{
				"color": [123, 58, 47],
				"amount": 0.088
			},
			{
				"color": [20, 100, 4],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Potted Spruce Sapling",
		"namespacedId": "potted_spruce_sapling",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_spruce_sapling.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [40, 45, 28],
				"amount": 0.503
			},
			{
				"color": [109, 60, 46],
				"amount": 0.247
			},
			{
				"color": [82, 45, 35],
				"amount": 0.2
			},
			{
				"color": [49, 73, 49],
				"amount": 0.043
			}
		]
	},
	{
		"name": "Potted Warped Fungus",
		"namespacedId": "potted_warped_fungus",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_warped_fungus.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [84, 53, 46],
				"amount": 0.682
			},
			{
				"color": [24, 155, 130],
				"amount": 0.161
			},
			{
				"color": [236, 96, 21],
				"amount": 0.113
			},
			{
				"color": [132, 75, 60],
				"amount": 0.038
			}
		]
	},
	{
		"name": "Potted Warped Roots",
		"namespacedId": "potted_warped_roots",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_warped_roots.png",
		"item": null,
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [92, 52, 41],
				"amount": 0.818
			},
			{
				"color": [20, 150, 131],
				"amount": 0.102
			},
			{
				"color": [21, 103, 98],
				"amount": 0.072
			}
		]
	},
	{
		"name": "Potted White Tulip",
		"namespacedId": "potted_white_tulip",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_white_tulip.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [78, 67, 34],
				"amount": 0.508
			},
			{
				"color": [169, 182, 182],
				"amount": 0.304
			},
			{
				"color": [68, 140, 36],
				"amount": 0.099
			},
			{
				"color": [116, 65, 52],
				"amount": 0.049
			},
			{
				"color": [132, 75, 60],
				"amount": 0.04
			}
		]
	},
	{
		"name": "Potted Wither Rose",
		"namespacedId": "potted_wither_rose",
		"description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/potted_wither_rose.png",
		"item": null,
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [86, 48, 37],
				"amount": 0.706
			},
			{
				"color": [28, 30, 17],
				"amount": 0.192
			},
			{
				"color": [121, 68, 54],
				"amount": 0.055
			},
			{
				"color": [49, 51, 23],
				"amount": 0.046
			}
		]
	},
	{
		"name": "Powder Snow",
		"namespacedId": "powder_snow",
		"description": "Powder snow is a trap block that can be obtained from snowy slopes and groves biomes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/powder_snow.png",
		"item": "Powder Snow Bucket",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [246, 249, 251],
				"amount": 0.393
			},
			{
				"color": [152, 156, 156],
				"amount": 0.247
			},
			{
				"color": [212, 212, 212],
				"amount": 0.23
			},
			{
				"color": [200, 204, 212],
				"amount": 0.096
			},
			{
				"color": [196, 204, 204],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Powder Snow Cauldron",
		"namespacedId": "powder_snow_cauldron",
		"description": "A cauldron is a block that can contain water, lava and powder snow. In Bedrock Edition, it can also hold potions and dyed water. It also is a job site block used by leatherworkers in villages.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/powder_snow_cauldron.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [56, 55, 57],
				"amount": 0.587
			},
			{
				"color": [244, 250, 250],
				"amount": 0.41
			}
		]
	},
	{
		"name": "Powered Rail",
		"namespacedId": "powered_rail",
		"description": "A powered rail is a type of rail that is used to increase or decrease the velocity of moving minecarts.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/powered_rail.png",
		"item": "Powered Rail",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.7,
		"colors": [
			{
				"color": [128, 119, 103],
				"amount": 0.604
			},
			{
				"color": [199, 151, 33],
				"amount": 0.187
			},
			{
				"color": [70, 8, 5],
				"amount": 0.131
			},
			{
				"color": [88, 63, 32],
				"amount": 0.04
			},
			{
				"color": [84, 68, 44],
				"amount": 0.038
			}
		]
	},
	{
		"name": "Prismarine",
		"namespacedId": "prismarine",
		"description": "Prismarine is a type of stone that appears underwater in ruins and ocean monuments. It periodically changes color between blue and green.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/prismarine.png",
		"item": "Prismarine",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [63, 111, 99],
				"amount": 0.747
			},
			{
				"color": [131, 187, 176],
				"amount": 0.137
			},
			{
				"color": [122, 163, 155],
				"amount": 0.06
			},
			{
				"color": [94, 155, 142],
				"amount": 0.053
			}
		]
	},
	{
		"name": "Prismarine Brick Slab",
		"namespacedId": "prismarine_brick_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/prismarine_brick_slab.png",
		"item": "Prismarine Brick Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [73, 130, 120],
				"amount": 0.693
			},
			{
				"color": [118, 187, 178],
				"amount": 0.144
			},
			{
				"color": [47, 89, 78],
				"amount": 0.094
			},
			{
				"color": [92, 172, 164],
				"amount": 0.056
			},
			{
				"color": [123, 171, 163],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Prismarine Brick Stairs",
		"namespacedId": "prismarine_brick_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/prismarine_brick_stairs.png",
		"item": "Prismarine Brick Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [68, 121, 112],
				"amount": 0.761
			},
			{
				"color": [118, 187, 178],
				"amount": 0.12
			},
			{
				"color": [100, 171, 164],
				"amount": 0.082
			},
			{
				"color": [97, 162, 153],
				"amount": 0.033
			}
		]
	},
	{
		"name": "Prismarine Bricks",
		"namespacedId": "prismarine_bricks",
		"description": "Prismarine is a type of stone that appears underwater in ruins and ocean monuments. It periodically changes color between blue and green.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/prismarine_bricks.png",
		"item": "Prismarine Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [65, 116, 106],
				"amount": 0.727
			},
			{
				"color": [108, 181, 173],
				"amount": 0.202
			},
			{
				"color": [93, 154, 144],
				"amount": 0.046
			},
			{
				"color": [116, 164, 156],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Prismarine Slab",
		"namespacedId": "prismarine_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/prismarine_slab.png",
		"item": "Prismarine Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [75, 130, 117],
				"amount": 0.775
			},
			{
				"color": [131, 187, 177],
				"amount": 0.168
			},
			{
				"color": [43, 82, 71],
				"amount": 0.029
			},
			{
				"color": [124, 164, 156],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Prismarine Stairs",
		"namespacedId": "prismarine_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/prismarine_stairs.png",
		"item": "Prismarine Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [75, 128, 116],
				"amount": 0.789
			},
			{
				"color": [130, 186, 176],
				"amount": 0.139
			},
			{
				"color": [43, 82, 72],
				"amount": 0.037
			},
			{
				"color": [124, 164, 155],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Prismarine Wall",
		"namespacedId": "prismarine_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/prismarine_wall.png",
		"item": "Prismarine Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [63, 112, 100],
				"amount": 0.774
			},
			{
				"color": [128, 185, 175],
				"amount": 0.087
			},
			{
				"color": [122, 163, 155],
				"amount": 0.083
			},
			{
				"color": [96, 152, 141],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Pumpkin",
		"namespacedId": "pumpkin",
		"description": "A pumpkin is a fruit block that appears in patches in grassy biomes. Pumpkins have the same texture on all 4 sides.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pumpkin.png",
		"item": "Pumpkin",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [151, 89, 18],
				"amount": 0.684
			},
			{
				"color": [96, 50, 8],
				"amount": 0.159
			},
			{
				"color": [212, 138, 39],
				"amount": 0.112
			},
			{
				"color": [198, 112, 21],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Pumpkin Stem",
		"namespacedId": "pumpkin_stem",
		"description": "Pumpkin Seeds are an item that can be used to grow pumpkin plants.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/pumpkin_stem.png",
		"item": "Pumpkin Seeds",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [82, 74, 4],
				"amount": 0.741
			},
			{
				"color": [124, 109, 12],
				"amount": 0.135
			},
			{
				"color": [46, 44, 4],
				"amount": 0.057
			},
			{
				"color": [100, 92, 4],
				"amount": 0.054
			},
			{
				"color": [68, 52, 4],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Purple Banner",
		"namespacedId": "purple_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_banner.png",
		"item": "Purple Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [99, 36, 131],
				"amount": 0.891
			},
			{
				"color": [84, 67, 42],
				"amount": 0.08
			},
			{
				"color": [61, 21, 80],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Purple Bed",
		"namespacedId": "purple_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_bed.png",
		"item": "Purple Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [96, 35, 137],
				"amount": 0.525
			},
			{
				"color": [214, 218, 218],
				"amount": 0.344
			},
			{
				"color": [74, 55, 41],
				"amount": 0.063
			},
			{
				"color": [139, 44, 188],
				"amount": 0.061
			}
		]
	},
	{
		"name": "Purple Candle",
		"namespacedId": "purple_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_candle.png",
		"item": "Purple Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [75, 23, 113],
				"amount": 0.801
			},
			{
				"color": [107, 34, 152],
				"amount": 0.13
			},
			{
				"color": [20, 20, 35],
				"amount": 0.043
			},
			{
				"color": [60, 20, 92],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Purple Carpet",
		"namespacedId": "purple_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_carpet.png",
		"item": "Purple Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [116, 38, 165],
				"amount": 0.872
			},
			{
				"color": [73, 24, 104],
				"amount": 0.075
			},
			{
				"color": [144, 64, 199],
				"amount": 0.043
			}
		]
	},
	{
		"name": "Purple Concrete",
		"namespacedId": "purple_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_concrete.png",
		"item": "Purple Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [100, 28, 155],
				"amount": 0.442
			},
			{
				"color": [84, 28, 124],
				"amount": 0.294
			},
			{
				"color": [60, 20, 92],
				"amount": 0.184
			},
			{
				"color": [76, 28, 124],
				"amount": 0.079
			}
		]
	},
	{
		"name": "Purple Concrete Powder",
		"namespacedId": "purple_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_concrete_powder.png",
		"item": "Purple Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [86, 36, 116],
				"amount": 0.512
			},
			{
				"color": [131, 56, 176],
				"amount": 0.336
			},
			{
				"color": [112, 47, 151],
				"amount": 0.078
			},
			{
				"color": [124, 52, 162],
				"amount": 0.045
			},
			{
				"color": [108, 44, 140],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Purple Glazed Terracotta",
		"namespacedId": "purple_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_glazed_terracotta.png",
		"item": "Purple Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [87, 32, 127],
				"amount": 0.66
			},
			{
				"color": [139, 61, 192],
				"amount": 0.166
			},
			{
				"color": [37, 36, 42],
				"amount": 0.14
			},
			{
				"color": [124, 49, 167],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Purple Shulker Box",
		"namespacedId": "purple_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_shulker_box.png",
		"item": "Purple Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [62, 18, 98],
				"amount": 0.481
			},
			{
				"color": [105, 33, 156],
				"amount": 0.361
			},
			{
				"color": [92, 28, 132],
				"amount": 0.082
			},
			{
				"color": [80, 25, 128],
				"amount": 0.048
			},
			{
				"color": [46, 12, 75],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Purple Stained Glass",
		"namespacedId": "purple_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_stained_glass.png",
		"item": "Purple Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [100, 52, 148],
				"amount": 0.581
			},
			{
				"color": [124, 60, 179],
				"amount": 0.269
			},
			{
				"color": [76, 36, 112],
				"amount": 0.083
			},
			{
				"color": [108, 52, 156],
				"amount": 0.065
			}
		]
	},
	{
		"name": "Purple Stained Glass Pane",
		"namespacedId": "purple_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_stained_glass_pane.png",
		"item": "Purple Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [75, 36, 103],
				"amount": 0.452
			},
			{
				"color": [100, 52, 140],
				"amount": 0.423
			},
			{
				"color": [121, 60, 167],
				"amount": 0.12
			}
		]
	},
	{
		"name": "Purple Terracotta",
		"namespacedId": "purple_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_terracotta.png",
		"item": "Purple Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [117, 68, 84],
				"amount": 0.419
			},
			{
				"color": [73, 43, 52],
				"amount": 0.177
			},
			{
				"color": [92, 52, 68],
				"amount": 0.153
			},
			{
				"color": [100, 59, 70],
				"amount": 0.131
			},
			{
				"color": [92, 60, 68],
				"amount": 0.121
			}
		]
	},
	{
		"name": "Purple Wall Banner",
		"namespacedId": "purple_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_wall_banner.png",
		"item": "Purple Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [99, 36, 131],
				"amount": 0.895
			},
			{
				"color": [77, 51, 57],
				"amount": 0.091
			},
			{
				"color": [60, 20, 84],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Purple Wool",
		"namespacedId": "purple_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purple_wool.png",
		"item": "Purple Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [94, 32, 134],
				"amount": 0.715
			},
			{
				"color": [129, 47, 178],
				"amount": 0.203
			},
			{
				"color": [67, 20, 99],
				"amount": 0.063
			},
			{
				"color": [124, 52, 164],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Purpur Block",
		"namespacedId": "purpur_block",
		"description": "Purpur blocks and purpur pillars are decorative blocks that are naturally generated in End cities and End ships.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purpur_block.png",
		"item": "Purpur Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [117, 85, 117],
				"amount": 0.695
			},
			{
				"color": [177, 137, 177],
				"amount": 0.2
			},
			{
				"color": [164, 116, 164],
				"amount": 0.052
			},
			{
				"color": [152, 112, 151],
				"amount": 0.031
			},
			{
				"color": [156, 132, 156],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Purpur Pillar",
		"namespacedId": "purpur_pillar",
		"description": "Purpur blocks and purpur pillars are decorative blocks that are naturally generated in End cities and End ships.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purpur_pillar.png",
		"item": "Purpur Pillar",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [114, 84, 114],
				"amount": 0.593
			},
			{
				"color": [178, 138, 181],
				"amount": 0.234
			},
			{
				"color": [151, 111, 151],
				"amount": 0.079
			},
			{
				"color": [162, 137, 163],
				"amount": 0.054
			},
			{
				"color": [163, 114, 164],
				"amount": 0.04
			}
		]
	},
	{
		"name": "Purpur Slab",
		"namespacedId": "purpur_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purpur_slab.png",
		"item": "Purpur Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [162, 121, 164],
				"amount": 0.641
			},
			{
				"color": [101, 72, 102],
				"amount": 0.253
			},
			{
				"color": [116, 88, 116],
				"amount": 0.062
			},
			{
				"color": [129, 94, 129],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Purpur Stairs",
		"namespacedId": "purpur_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/purpur_stairs.png",
		"item": "Purpur Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [133, 97, 134],
				"amount": 0.722
			},
			{
				"color": [179, 137, 180],
				"amount": 0.209
			},
			{
				"color": [94, 65, 96],
				"amount": 0.044
			},
			{
				"color": [160, 135, 162],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Quartz Bricks",
		"namespacedId": "quartz_bricks",
		"description": "A block of quartz is a mineral block used only for decoration. It can be turned into a chiseled quartz block, quartz pillar, or quartz bricks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/quartz_bricks.png",
		"item": "Quartz Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [155, 150, 144],
				"amount": 0.497
			},
			{
				"color": [233, 226, 221],
				"amount": 0.332
			},
			{
				"color": [189, 187, 184],
				"amount": 0.105
			},
			{
				"color": [219, 215, 199],
				"amount": 0.059
			}
		]
	},
	{
		"name": "Quartz Pillar",
		"namespacedId": "quartz_pillar",
		"description": "A block of quartz is a mineral block used only for decoration. It can be turned into a chiseled quartz block, quartz pillar, or quartz bricks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/quartz_pillar.png",
		"item": "Quartz Pillar",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [230, 225, 222],
				"amount": 0.447
			},
			{
				"color": [144, 142, 139],
				"amount": 0.24
			},
			{
				"color": [196, 196, 195],
				"amount": 0.182
			},
			{
				"color": [188, 184, 176],
				"amount": 0.071
			},
			{
				"color": [196, 188, 188],
				"amount": 0.061
			}
		]
	},
	{
		"name": "Quartz Slab",
		"namespacedId": "quartz_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/quartz_slab.png",
		"item": "Quartz Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [225, 218, 215],
				"amount": 0.497
			},
			{
				"color": [145, 140, 138],
				"amount": 0.427
			},
			{
				"color": [191, 186, 177],
				"amount": 0.071
			}
		]
	},
	{
		"name": "Quartz Stairs",
		"namespacedId": "quartz_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/quartz_stairs.png",
		"item": "Quartz Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [193, 188, 182],
				"amount": 0.42
			},
			{
				"color": [233, 226, 223],
				"amount": 0.357
			},
			{
				"color": [145, 140, 138],
				"amount": 0.208
			},
			{
				"color": [220, 215, 204],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Rail",
		"namespacedId": "rail",
		"description": "Rails are non-solid blocks that provide a path along which minecarts can travel.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/rail.png",
		"item": "Rail",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.7,
		"colors": [
			{
				"color": [143, 143, 142],
				"amount": 0.424
			},
			{
				"color": [95, 76, 44],
				"amount": 0.326
			},
			{
				"color": [146, 116, 69],
				"amount": 0.102
			},
			{
				"color": [99, 100, 95],
				"amount": 0.096
			},
			{
				"color": [136, 106, 60],
				"amount": 0.053
			}
		]
	},
	{
		"name": "Red Banner",
		"namespacedId": "red_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_banner.png",
		"item": "Red Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [122, 35, 28],
				"amount": 0.893
			},
			{
				"color": [73, 23, 20],
				"amount": 0.083
			},
			{
				"color": [161, 43, 35],
				"amount": 0.011
			},
			{
				"color": [115, 103, 69],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Red Bed",
		"namespacedId": "red_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_bed.png",
		"item": "Red Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [119, 39, 32],
				"amount": 0.576
			},
			{
				"color": [214, 218, 218],
				"amount": 0.362
			},
			{
				"color": [188, 59, 51],
				"amount": 0.038
			},
			{
				"color": [125, 107, 87],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Red Candle",
		"namespacedId": "red_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_candle.png",
		"item": "Red Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [103, 25, 23],
				"amount": 0.783
			},
			{
				"color": [151, 43, 37],
				"amount": 0.116
			},
			{
				"color": [134, 35, 29],
				"amount": 0.071
			},
			{
				"color": [20, 20, 36],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Red Carpet",
		"namespacedId": "red_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_carpet.png",
		"item": "Red Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [151, 35, 32],
				"amount": 0.612
			},
			{
				"color": [174, 46, 38],
				"amount": 0.14
			},
			{
				"color": [100, 23, 21],
				"amount": 0.139
			},
			{
				"color": [163, 44, 36],
				"amount": 0.079
			},
			{
				"color": [128, 28, 28],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Red Concrete",
		"namespacedId": "red_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_concrete.png",
		"item": "Red Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [116, 28, 28],
				"amount": 0.441
			},
			{
				"color": [140, 31, 31],
				"amount": 0.394
			},
			{
				"color": [84, 20, 20],
				"amount": 0.164
			}
		]
	},
	{
		"name": "Red Concrete Powder",
		"namespacedId": "red_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_concrete_powder.png",
		"item": "Red Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [145, 47, 44],
				"amount": 0.628
			},
			{
				"color": [99, 31, 28],
				"amount": 0.146
			},
			{
				"color": [175, 58, 53],
				"amount": 0.137
			},
			{
				"color": [108, 36, 33],
				"amount": 0.084
			}
		]
	},
	{
		"name": "Red Glazed Terracotta",
		"namespacedId": "red_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_glazed_terracotta.png",
		"item": "Red Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [139, 42, 38],
				"amount": 0.781
			},
			{
				"color": [198, 70, 63],
				"amount": 0.114
			},
			{
				"color": [187, 126, 110],
				"amount": 0.073
			},
			{
				"color": [89, 21, 20],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Red Mushroom",
		"namespacedId": "red_mushroom",
		"description": "A mushroom is a variety of fungus that grows and spreads in dark areas. Mushrooms generate as red or brown in color, and small or huge in size.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_mushroom.png",
		"item": "Red Mushroom",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [163, 176, 156],
				"amount": 0.563
			},
			{
				"color": [213, 26, 28],
				"amount": 0.389
			},
			{
				"color": [156, 26, 32],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Red Mushroom Block",
		"namespacedId": "red_mushroom_block",
		"description": "Mushroom blocks are solid blocks that make up huge mushrooms.\nThere are 3 kinds of mushroom blocks: red mushroom block, brown mushroom block and mushroom stem.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_mushroom_block.png",
		"item": "Red Mushroom Block",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [156, 33, 31],
				"amount": 0.873
			},
			{
				"color": [224, 154, 154],
				"amount": 0.098
			},
			{
				"color": [173, 116, 116],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Red Nether Brick Slab",
		"namespacedId": "red_nether_brick_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_nether_brick_slab.png",
		"item": "Red Nether Brick Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [47, 4, 4],
				"amount": 0.748
			},
			{
				"color": [103, 19, 22],
				"amount": 0.123
			},
			{
				"color": [68, 7, 8],
				"amount": 0.061
			},
			{
				"color": [82, 11, 15],
				"amount": 0.047
			},
			{
				"color": [28, 4, 4],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Red Nether Brick Stairs",
		"namespacedId": "red_nether_brick_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_nether_brick_stairs.png",
		"item": "Red Nether Brick Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [47, 4, 4],
				"amount": 0.765
			},
			{
				"color": [102, 19, 21],
				"amount": 0.1
			},
			{
				"color": [82, 11, 16],
				"amount": 0.06
			},
			{
				"color": [68, 7, 8],
				"amount": 0.055
			},
			{
				"color": [28, 4, 4],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Red Nether Brick Wall",
		"namespacedId": "red_nether_brick_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_nether_brick_wall.png",
		"item": "Red Nether Brick Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [43, 4, 4],
				"amount": 0.62
			},
			{
				"color": [72, 10, 12],
				"amount": 0.219
			},
			{
				"color": [99, 19, 21],
				"amount": 0.078
			},
			{
				"color": [60, 4, 5],
				"amount": 0.056
			},
			{
				"color": [28, 4, 4],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Red Nether Bricks",
		"namespacedId": "red_nether_bricks",
		"description": "Nether bricks  are blocks used to form nether fortresses in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_nether_bricks.png",
		"item": "Red Nether Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [45, 4, 4],
				"amount": 0.644
			},
			{
				"color": [66, 8, 9],
				"amount": 0.163
			},
			{
				"color": [103, 19, 22],
				"amount": 0.098
			},
			{
				"color": [82, 12, 17],
				"amount": 0.063
			},
			{
				"color": [28, 4, 4],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Red Sand",
		"namespacedId": "red_sand",
		"description": "Sand is a block affected by gravity.\n Red sand is a variation of sand found in the badlands biome.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_sand.png",
		"item": "Red Sand",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [121, 64, 21],
				"amount": 0.434
			},
			{
				"color": [191, 103, 34],
				"amount": 0.296
			},
			{
				"color": [170, 91, 28],
				"amount": 0.21
			},
			{
				"color": [154, 83, 27],
				"amount": 0.06
			}
		]
	},
	{
		"name": "Red Sandstone",
		"namespacedId": "red_sandstone",
		"description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_sandstone.png",
		"item": "Red Sandstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [118, 60, 16],
				"amount": 0.485
			},
			{
				"color": [172, 92, 29],
				"amount": 0.212
			},
			{
				"color": [158, 86, 27],
				"amount": 0.188
			},
			{
				"color": [138, 76, 25],
				"amount": 0.062
			},
			{
				"color": [181, 100, 35],
				"amount": 0.052
			}
		]
	},
	{
		"name": "Red Sandstone Slab",
		"namespacedId": "red_sandstone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_sandstone_slab.png",
		"item": "Red Sandstone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [173, 93, 30],
				"amount": 0.532
			},
			{
				"color": [112, 60, 16],
				"amount": 0.348
			},
			{
				"color": [135, 68, 17],
				"amount": 0.065
			},
			{
				"color": [148, 76, 24],
				"amount": 0.049
			}
		]
	},
	{
		"name": "Red Sandstone Stairs",
		"namespacedId": "red_sandstone_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_sandstone_stairs.png",
		"item": "Red Sandstone Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [164, 87, 27],
				"amount": 0.65
			},
			{
				"color": [110, 58, 15],
				"amount": 0.189
			},
			{
				"color": [189, 100, 36],
				"amount": 0.1
			},
			{
				"color": [128, 68, 20],
				"amount": 0.046
			},
			{
				"color": [132, 60, 12],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Red Sandstone Wall",
		"namespacedId": "red_sandstone_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_sandstone_wall.png",
		"item": "Red Sandstone Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [137, 72, 21],
				"amount": 0.684
			},
			{
				"color": [192, 104, 36],
				"amount": 0.15
			},
			{
				"color": [105, 52, 11],
				"amount": 0.072
			},
			{
				"color": [166, 89, 27],
				"amount": 0.055
			},
			{
				"color": [172, 100, 36],
				"amount": 0.039
			}
		]
	},
	{
		"name": "Red Shulker Box",
		"namespacedId": "red_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_shulker_box.png",
		"item": "Red Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [89, 18, 18],
				"amount": 0.489
			},
			{
				"color": [146, 33, 33],
				"amount": 0.285
			},
			{
				"color": [120, 26, 26],
				"amount": 0.11
			},
			{
				"color": [66, 12, 12],
				"amount": 0.099
			},
			{
				"color": [108, 20, 22],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Red Stained Glass",
		"namespacedId": "red_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_stained_glass.png",
		"item": "Red Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [148, 52, 52],
				"amount": 0.322
			},
			{
				"color": [125, 44, 44],
				"amount": 0.312
			},
			{
				"color": [100, 35, 36],
				"amount": 0.269
			},
			{
				"color": [92, 28, 34],
				"amount": 0.097
			}
		]
	},
	{
		"name": "Red Stained Glass Pane",
		"namespacedId": "red_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_stained_glass_pane.png",
		"item": "Red Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [124, 44, 44],
				"amount": 0.728
			},
			{
				"color": [89, 28, 28],
				"amount": 0.176
			},
			{
				"color": [143, 46, 46],
				"amount": 0.093
			}
		]
	},
	{
		"name": "Red Terracotta",
		"namespacedId": "red_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_terracotta.png",
		"item": "Red Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [88, 36, 28],
				"amount": 0.35
			},
			{
				"color": [140, 60, 45],
				"amount": 0.327
			},
			{
				"color": [116, 49, 36],
				"amount": 0.32
			}
		]
	},
	{
		"name": "Red Tulip",
		"namespacedId": "red_tulip",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_tulip.png",
		"item": "Red Tulip",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [42, 132, 18],
				"amount": 0.362
			},
			{
				"color": [214, 45, 41],
				"amount": 0.354
			},
			{
				"color": [84, 156, 44],
				"amount": 0.203
			},
			{
				"color": [84, 171, 44],
				"amount": 0.078
			}
		]
	},
	{
		"name": "Red Wall Banner",
		"namespacedId": "red_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_wall_banner.png",
		"item": "Red Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [123, 34, 28],
				"amount": 0.865
			},
			{
				"color": [78, 34, 26],
				"amount": 0.111
			},
			{
				"color": [160, 42, 36],
				"amount": 0.013
			},
			{
				"color": [114, 105, 71],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Red Wool",
		"namespacedId": "red_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/red_wool.png",
		"item": "Red Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [97, 23, 20],
				"amount": 0.467
			},
			{
				"color": [164, 40, 36],
				"amount": 0.26
			},
			{
				"color": [127, 30, 28],
				"amount": 0.133
			},
			{
				"color": [144, 36, 30],
				"amount": 0.115
			},
			{
				"color": [116, 29, 28],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Redstone Comparator",
		"namespacedId": "comparator",
		"description": "A redstone comparator is a redstone component used to maintain, compare, or subtract signal strength, or to measure certain block states (primarily the fullness of containers).",
		"image": "https://minecraft-storage.vercel.app/images/blocks/comparator.png",
		"item": "Redstone Comparator",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [135, 136, 135],
				"amount": 0.736
			},
			{
				"color": [43, 11, 8],
				"amount": 0.117
			},
			{
				"color": [202, 198, 192],
				"amount": 0.074
			},
			{
				"color": [73, 20, 13],
				"amount": 0.056
			},
			{
				"color": [89, 70, 42],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Redstone Lamp",
		"namespacedId": "redstone_lamp",
		"description": "A redstone lamp is a block that produces light when activated with a redstone signal.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/redstone_lamp.png",
		"item": "Redstone Lamp",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [140, 82, 45],
				"amount": 0.347
			},
			{
				"color": [42, 24, 14],
				"amount": 0.316
			},
			{
				"color": [103, 59, 32],
				"amount": 0.269
			},
			{
				"color": [78, 43, 24],
				"amount": 0.052
			},
			{
				"color": [84, 52, 28],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Redstone Ore",
		"namespacedId": "redstone_ore",
		"description": "Redstone ore is the ore block from which redstone is obtained.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/redstone_ore.png",
		"item": "Redstone Ore",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 9,
		"blastResistance": 3,
		"colors": [
			{
				"color": [95, 93, 93],
				"amount": 0.765
			},
			{
				"color": [211, 56, 56],
				"amount": 0.128
			},
			{
				"color": [128, 8, 8],
				"amount": 0.072
			},
			{
				"color": [149, 121, 121],
				"amount": 0.033
			}
		]
	},
	{
		"name": "Redstone Repeater",
		"namespacedId": "repeater",
		"description": "A redstone repeater is a block used in redstone circuits to \"repeat\" redstone signals back to full strength, delay signals, prevent signals moving backwards, or to \"lock\" signals in one state.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/repeater.png",
		"item": "Redstone Repeater",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [153, 153, 152],
				"amount": 0.736
			},
			{
				"color": [54, 16, 11],
				"amount": 0.197
			},
			{
				"color": [107, 81, 48],
				"amount": 0.034
			},
			{
				"color": [84, 83, 83],
				"amount": 0.021
			},
			{
				"color": [68, 68, 68],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Redstone Torch",
		"namespacedId": "redstone_torch",
		"description": "A redstone torch is a non-solid block that can be used as a toggleable redstone power source, as well as a signal inverter.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/redstone_torch.png",
		"item": "Redstone Torch",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 7,
		"blastResistance": 0,
		"colors": [
			{
				"color": [111, 88, 55],
				"amount": 0.609
			},
			{
				"color": [252, 231, 94],
				"amount": 0.217
			},
			{
				"color": [251, 17, 4],
				"amount": 0.163
			}
		]
	},
	{
		"name": "Redstone Wall Torch",
		"namespacedId": "redstone_wall_torch",
		"description": "A redstone torch is a non-solid block that can be used as a toggleable redstone power source, as well as a signal inverter.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/redstone_wall_torch.png",
		"item": "Redstone Torch",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 7,
		"blastResistance": 0,
		"colors": [
			{
				"color": [142, 98, 62],
				"amount": 0.413
			},
			{
				"color": [251, 228, 97],
				"amount": 0.304
			},
			{
				"color": [71, 57, 35],
				"amount": 0.147
			},
			{
				"color": [251, 20, 6],
				"amount": 0.133
			}
		]
	},
	{
		"name": "Redstone Wire",
		"namespacedId": "redstone_wire",
		"description": "Redstone dust is a mineral that can transmit redstone power when placed as a block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/redstone_wire.png",
		"item": "Redstone Dust",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [76, 4, 4],
				"amount": 0.498
			},
			{
				"color": [68, 4, 4],
				"amount": 0.441
			},
			{
				"color": [60, 4, 4],
				"amount": 0.062
			}
		]
	},
	{
		"name": "Repeating Command Block",
		"namespacedId": "repeating_command_block",
		"description": "A command block is a block that can execute commands. Because it cannot be obtained or edited in Survival mode without cheats, it is primarily used on multiplayer servers, in Creative worlds, and custom maps.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/repeating_command_block.png",
		"item": "Repeating Command Block",
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3600000,
		"colors": [
			{
				"color": [93, 80, 129],
				"amount": 0.746
			},
			{
				"color": [62, 45, 50],
				"amount": 0.107
			},
			{
				"color": [171, 167, 184],
				"amount": 0.084
			},
			{
				"color": [115, 91, 192],
				"amount": 0.044
			},
			{
				"color": [164, 127, 169],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Respawn Anchor",
		"namespacedId": "respawn_anchor",
		"description": "The respawn anchor is a block that allows players to set their spawn point in The Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/respawn_anchor.png",
		"item": "Respawn Anchor",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 1200,
		"colors": [
			{
				"color": [17, 13, 25],
				"amount": 0.681
			},
			{
				"color": [90, 4, 160],
				"amount": 0.099
			},
			{
				"color": [45, 32, 68],
				"amount": 0.096
			},
			{
				"color": [84, 60, 124],
				"amount": 0.062
			},
			{
				"color": [54, 18, 106],
				"amount": 0.062
			}
		]
	},
	{
		"name": "Rooted Dirt",
		"namespacedId": "rooted_dirt",
		"description": "Rooted dirt is a natural decorative block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/rooted_dirt.png",
		"item": "Rooted Dirt",
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [108, 76, 54],
				"amount": 0.833
			},
			{
				"color": [172, 128, 102],
				"amount": 0.121
			},
			{
				"color": [146, 121, 108],
				"amount": 0.027
			},
			{
				"color": [60, 44, 32],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Rose Bush",
		"namespacedId": "rose_bush",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/rose_bush.png",
		"item": "Rose Bush",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [211, 44, 44],
				"amount": 0.388
			},
			{
				"color": [43, 93, 38],
				"amount": 0.357
			},
			{
				"color": [159, 41, 31],
				"amount": 0.182
			},
			{
				"color": [76, 145, 42],
				"amount": 0.054
			},
			{
				"color": [112, 38, 5],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Sand",
		"namespacedId": "sand",
		"description": "Sand is a block affected by gravity.\n Red sand is a variation of sand found in the badlands biome.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sand.png",
		"item": "Sand",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [148, 138, 110],
				"amount": 0.535
			},
			{
				"color": [214, 203, 160],
				"amount": 0.397
			},
			{
				"color": [183, 173, 139],
				"amount": 0.052
			},
			{
				"color": [195, 188, 152],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Sandstone",
		"namespacedId": "sandstone",
		"description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sandstone.png",
		"item": "Sandstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [138, 129, 96],
				"amount": 0.474
			},
			{
				"color": [218, 209, 166],
				"amount": 0.379
			},
			{
				"color": [174, 166, 130],
				"amount": 0.095
			},
			{
				"color": [186, 180, 148],
				"amount": 0.04
			},
			{
				"color": [193, 188, 157],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Sandstone Slab",
		"namespacedId": "sandstone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sandstone_slab.png",
		"item": "Sandstone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [212, 204, 161],
				"amount": 0.555
			},
			{
				"color": [131, 123, 92],
				"amount": 0.323
			},
			{
				"color": [162, 141, 94],
				"amount": 0.055
			},
			{
				"color": [172, 158, 120],
				"amount": 0.037
			},
			{
				"color": [140, 140, 116],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Sandstone Stairs",
		"namespacedId": "sandstone_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sandstone_stairs.png",
		"item": "Sandstone Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [204, 196, 155],
				"amount": 0.648
			},
			{
				"color": [131, 123, 92],
				"amount": 0.248
			},
			{
				"color": [164, 140, 92],
				"amount": 0.054
			},
			{
				"color": [171, 153, 116],
				"amount": 0.026
			},
			{
				"color": [140, 140, 115],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Sandstone Wall",
		"namespacedId": "sandstone_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sandstone_wall.png",
		"item": "Sandstone Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [148, 136, 103],
				"amount": 0.625
			},
			{
				"color": [217, 209, 167],
				"amount": 0.19
			},
			{
				"color": [183, 174, 135],
				"amount": 0.096
			},
			{
				"color": [188, 188, 156],
				"amount": 0.069
			},
			{
				"color": [204, 181, 138],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Scaffolding",
		"namespacedId": "scaffolding",
		"description": "Scaffolding is a block used when building structures to help the player reach higher places, or to descend safely without fall damage.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/scaffolding.png",
		"item": "Scaffolding",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [155, 125, 70],
				"amount": 0.85
			},
			{
				"color": [220, 195, 116],
				"amount": 0.07
			},
			{
				"color": [93, 70, 38],
				"amount": 0.06
			},
			{
				"color": [204, 172, 92],
				"amount": 0.02
			}
		]
	},
	{
		"name": "Sculk Sensor",
		"namespacedId": "sculk_sensor",
		"description": "The sculk sensor is a block that detects vibrations caused by actions and events, and emits a redstone signal.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sculk_sensor.png",
		"item": "Sculk Sensor",
		"tool": "Hoe",
		"flammable": false,
		"transparent": true,
		"luminance": 1,
		"blastResistance": 1.5,
		"colors": [
			{
				"color": [7, 34, 41],
				"amount": 0.831
			},
			{
				"color": [7, 70, 86],
				"amount": 0.111
			},
			{
				"color": [26, 145, 154],
				"amount": 0.048
			}
		]
	},
	{
		"name": "Sea Lantern",
		"namespacedId": "sea_lantern",
		"description": "A sea lantern is an underwater light source that appears in ocean monuments and underwater ruins.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sea_lantern.png",
		"item": "Sea Lantern",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [147, 162, 156],
				"amount": 0.652
			},
			{
				"color": [65, 104, 94],
				"amount": 0.257
			},
			{
				"color": [214, 226, 218],
				"amount": 0.072
			},
			{
				"color": [107, 124, 116],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Sea Pickle",
		"namespacedId": "sea_pickle",
		"description": "A sea pickle is a small stationary underwater block that emits light, and is typically found in colonies of up to four sea pickles.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sea_pickle.png",
		"item": "Sea Pickle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 6,
		"blastResistance": 0,
		"colors": [
			{
				"color": [228, 252, 196],
				"amount": 0.475
			},
			{
				"color": [92, 96, 36],
				"amount": 0.19
			},
			{
				"color": [61, 63, 22],
				"amount": 0.174
			},
			{
				"color": [108, 116, 44],
				"amount": 0.161
			}
		]
	},
	{
		"name": "Seagrass",
		"namespacedId": "seagrass",
		"description": "Seagrass is a non-solid plant block that generates in all oceans, except frozen oceans.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/seagrass.png",
		"item": "Seagrass",
		"tool": "Shears",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [49, 134, 4],
				"amount": 0.582
			},
			{
				"color": [36, 92, 4],
				"amount": 0.233
			},
			{
				"color": [82, 147, 42],
				"amount": 0.164
			},
			{
				"color": [65, 135, 28],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Shroomlight",
		"namespacedId": "shroomlight",
		"description": "Shroomlights are light-emitting blocks that generate in huge fungi.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/shroomlight.png",
		"item": "Shroomlight",
		"tool": "Hoe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 1,
		"colors": [
			{
				"color": [195, 115, 53],
				"amount": 0.768
			},
			{
				"color": [238, 199, 135],
				"amount": 0.153
			},
			{
				"color": [134, 42, 5],
				"amount": 0.042
			},
			{
				"color": [139, 67, 4],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Shulker Box",
		"namespacedId": "shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/shulker_box.png",
		"item": "Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [90, 63, 90],
				"amount": 0.464
			},
			{
				"color": [143, 98, 143],
				"amount": 0.267
			},
			{
				"color": [124, 85, 124],
				"amount": 0.22
			},
			{
				"color": [116, 84, 116],
				"amount": 0.037
			},
			{
				"color": [116, 76, 116],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Skeleton Skull",
		"namespacedId": "skeleton_skull",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/skeleton_skull.png",
		"item": "Skeleton Skull",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [86, 86, 86],
				"amount": 0.493
			},
			{
				"color": [186, 186, 186],
				"amount": 0.292
			},
			{
				"color": [156, 156, 156],
				"amount": 0.089
			},
			{
				"color": [141, 141, 141],
				"amount": 0.065
			},
			{
				"color": [164, 164, 164],
				"amount": 0.061
			}
		]
	},
	{
		"name": "Skeleton Wall Skull",
		"namespacedId": "skeleton_wall_skull",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/skeleton_wall_skull.png",
		"item": "Skeleton Skull",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [86, 86, 86],
				"amount": 0.493
			},
			{
				"color": [186, 186, 186],
				"amount": 0.292
			},
			{
				"color": [156, 156, 156],
				"amount": 0.089
			},
			{
				"color": [141, 141, 141],
				"amount": 0.065
			},
			{
				"color": [164, 164, 164],
				"amount": 0.061
			}
		]
	},
	{
		"name": "Slime Block",
		"namespacedId": "slime_block",
		"description": "A slime block is a translucent block that entities can bounce on. It may be used alongside a piston to move several connected blocks at once. Entities move slower on slime blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/slime_block.png",
		"item": "Slime Block",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [88, 153, 73],
				"amount": 0.534
			},
			{
				"color": [65, 113, 54],
				"amount": 0.246
			},
			{
				"color": [115, 192, 97],
				"amount": 0.194
			},
			{
				"color": [100, 165, 92],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Small Amethyst Bud",
		"namespacedId": "small_amethyst_bud",
		"description": "Amethyst buds are the first three stages of growth of amethyst clusters, which grow on budding amethyst.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/small_amethyst_bud.png",
		"item": "Small Amethyst Bud",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 1,
		"blastResistance": 1.5,
		"colors": [
			{
				"color": [111, 83, 171],
				"amount": 0.495
			},
			{
				"color": [171, 136, 234],
				"amount": 0.451
			},
			{
				"color": [140, 108, 201],
				"amount": 0.04
			}
		]
	},
	{
		"name": "Small Dripleaf",
		"namespacedId": "small_dripleaf",
		"description": "A  small dripleaf is a plant which generates in lush caves, and is used to grow big dripleaves, a platforming block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/small_dripleaf.png",
		"item": "Small Dripleaf",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [111, 138, 47],
				"amount": 0.534
			},
			{
				"color": [67, 83, 42],
				"amount": 0.225
			},
			{
				"color": [85, 107, 43],
				"amount": 0.139
			},
			{
				"color": [76, 105, 44],
				"amount": 0.093
			}
		]
	},
	{
		"name": "Smithing Table",
		"namespacedId": "smithing_table",
		"description": "A smithing table is a toolsmith's job site block that generates in villages. It can be used to upgrade diamond gear into netherite gear.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smithing_table.png",
		"item": "Smithing Table",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [35, 28, 31],
				"amount": 0.732
			},
			{
				"color": [66, 69, 86],
				"amount": 0.173
			},
			{
				"color": [103, 64, 45],
				"amount": 0.046
			},
			{
				"color": [52, 60, 68],
				"amount": 0.025
			},
			{
				"color": [74, 30, 28],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Smoker",
		"namespacedId": "smoker",
		"description": "A smoker is a type of furnace that cooks food items, similar to a furnace, but twice as fast. It also serves as a butcher's job site block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smoker.png",
		"item": "Smoker",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 13,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [71, 61, 48],
				"amount": 0.671
			},
			{
				"color": [122, 122, 122],
				"amount": 0.228
			},
			{
				"color": [30, 28, 27],
				"amount": 0.046
			},
			{
				"color": [100, 100, 99],
				"amount": 0.039
			},
			{
				"color": [122, 92, 52],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Smooth Basalt",
		"namespacedId": "smooth_basalt",
		"description": "Basalt is an igneous rock found in the Nether.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_basalt.png",
		"item": "Smooth Basalt",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [51, 50, 56],
				"amount": 0.66
			},
			{
				"color": [76, 75, 76],
				"amount": 0.135
			},
			{
				"color": [25, 28, 37],
				"amount": 0.103
			},
			{
				"color": [90, 90, 90],
				"amount": 0.099
			}
		]
	},
	{
		"name": "Smooth Quartz Block",
		"namespacedId": "smooth_quartz",
		"description": "A smooth quartz block is a mineral block used only for decoration. It is made by smelting blocks of quartz.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_quartz.png",
		"item": "Smooth Quartz Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [233, 225, 220],
				"amount": 0.37
			},
			{
				"color": [145, 140, 135],
				"amount": 0.249
			},
			{
				"color": [188, 188, 188],
				"amount": 0.217
			},
			{
				"color": [188, 188, 180],
				"amount": 0.108
			},
			{
				"color": [188, 180, 173],
				"amount": 0.055
			}
		]
	},
	{
		"name": "Smooth Quartz Slab",
		"namespacedId": "smooth_quartz_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_quartz_slab.png",
		"item": "Smooth Quartz Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [222, 214, 211],
				"amount": 0.54
			},
			{
				"color": [146, 140, 138],
				"amount": 0.424
			},
			{
				"color": [188, 188, 180],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Smooth Quartz Stairs",
		"namespacedId": "smooth_quartz_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_quartz_stairs.png",
		"item": "Smooth Quartz Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [188, 184, 180],
				"amount": 0.474
			},
			{
				"color": [233, 225, 220],
				"amount": 0.366
			},
			{
				"color": [146, 140, 136],
				"amount": 0.155
			}
		]
	},
	{
		"name": "Smooth Red Sandstone",
		"namespacedId": "smooth_red_sandstone",
		"description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_red_sandstone.png",
		"item": "Smooth Red Sandstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [155, 82, 26],
				"amount": 0.49
			},
			{
				"color": [184, 98, 33],
				"amount": 0.266
			},
			{
				"color": [116, 60, 20],
				"amount": 0.121
			},
			{
				"color": [107, 58, 19],
				"amount": 0.114
			}
		]
	},
	{
		"name": "Smooth Red Sandstone Slab",
		"namespacedId": "smooth_red_sandstone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_red_sandstone_slab.png",
		"item": "Smooth Red Sandstone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [173, 92, 30],
				"amount": 0.59
			},
			{
				"color": [112, 59, 19],
				"amount": 0.275
			},
			{
				"color": [148, 76, 28],
				"amount": 0.066
			},
			{
				"color": [136, 73, 20],
				"amount": 0.057
			},
			{
				"color": [200, 108, 36],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Smooth Red Sandstone Stairs",
		"namespacedId": "smooth_red_sandstone_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_red_sandstone_stairs.png",
		"item": "Smooth Red Sandstone Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [154, 82, 26],
				"amount": 0.454
			},
			{
				"color": [184, 98, 33],
				"amount": 0.274
			},
			{
				"color": [111, 59, 19],
				"amount": 0.257
			},
			{
				"color": [129, 68, 16],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Smooth Sandstone",
		"namespacedId": "smooth_sandstone",
		"description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_sandstone.png",
		"item": "Smooth Sandstone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [221, 213, 168],
				"amount": 0.367
			},
			{
				"color": [189, 181, 148],
				"amount": 0.286
			},
			{
				"color": [139, 132, 105],
				"amount": 0.214
			},
			{
				"color": [180, 172, 140],
				"amount": 0.12
			},
			{
				"color": [180, 172, 132],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Smooth Sandstone Slab",
		"namespacedId": "smooth_sandstone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_sandstone_slab.png",
		"item": "Smooth Sandstone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [214, 205, 163],
				"amount": 0.526
			},
			{
				"color": [138, 131, 105],
				"amount": 0.367
			},
			{
				"color": [180, 171, 132],
				"amount": 0.041
			},
			{
				"color": [180, 172, 140],
				"amount": 0.039
			},
			{
				"color": [172, 163, 127],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Smooth Sandstone Stairs",
		"namespacedId": "smooth_sandstone_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_sandstone_stairs.png",
		"item": "Smooth Sandstone Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.8,
		"colors": [
			{
				"color": [137, 131, 104],
				"amount": 0.451
			},
			{
				"color": [209, 201, 160],
				"amount": 0.401
			},
			{
				"color": [180, 171, 132],
				"amount": 0.07
			},
			{
				"color": [180, 172, 140],
				"amount": 0.059
			},
			{
				"color": [172, 161, 125],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Smooth Stone",
		"namespacedId": "smooth_stone",
		"description": "Smooth stone is a variant of stone made by smelting regular stone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_stone.png",
		"item": "Smooth Stone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [146, 146, 146],
				"amount": 0.503
			},
			{
				"color": [100, 100, 100],
				"amount": 0.255
			},
			{
				"color": [82, 82, 82],
				"amount": 0.154
			},
			{
				"color": [108, 108, 108],
				"amount": 0.072
			},
			{
				"color": [116, 116, 116],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Smooth Stone Slab",
		"namespacedId": "smooth_stone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/smooth_stone_slab.png",
		"item": "Smooth Stone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [151, 151, 152],
				"amount": 0.778
			},
			{
				"color": [100, 100, 103],
				"amount": 0.116
			},
			{
				"color": [112, 112, 112],
				"amount": 0.053
			},
			{
				"color": [79, 79, 82],
				"amount": 0.045
			}
		]
	},
	{
		"name": "Snow",
		"namespacedId": "snow",
		"description": "Snow is a ground cover block that is commonly caused by snowfall.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/snow.png",
		"item": "Snow",
		"tool": "Shovel",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [153, 157, 158],
				"amount": 0.479
			},
			{
				"color": [204, 209, 212],
				"amount": 0.194
			},
			{
				"color": [248, 251, 251],
				"amount": 0.164
			},
			{
				"color": [236, 251, 251],
				"amount": 0.153
			}
		]
	},
	{
		"name": "Snow Block",
		"namespacedId": "snow_block",
		"description": "A snow block is a full-sized block of snow.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/snow_block.png",
		"item": "Snow Block",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [208, 212, 212],
				"amount": 0.324
			},
			{
				"color": [197, 204, 212],
				"amount": 0.316
			},
			{
				"color": [245, 251, 251],
				"amount": 0.285
			},
			{
				"color": [152, 156, 156],
				"amount": 0.038
			},
			{
				"color": [161, 164, 164],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Soul Campfire",
		"namespacedId": "soul_campfire",
		"description": "A campfire is a block that can be used to cook food or act as a light source or smoke signal.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/soul_campfire.png",
		"item": "Soul Campfire",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 15,
		"blastResistance": 2,
		"colors": [
			{
				"color": [102, 84, 53],
				"amount": 0.575
			},
			{
				"color": [108, 226, 228],
				"amount": 0.334
			},
			{
				"color": [23, 172, 179],
				"amount": 0.076
			},
			{
				"color": [14, 141, 147],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Soul Fire",
		"namespacedId": "soul_fire",
		"description": "Fire is a neutral non-solid block that can spread to nearby flammable blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/soul_fire.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 10,
		"blastResistance": 0,
		"colors": [
			{
				"color": [226, 251, 251],
				"amount": 0.454
			},
			{
				"color": [5, 168, 173],
				"amount": 0.393
			},
			{
				"color": [94, 241, 246],
				"amount": 0.099
			},
			{
				"color": [40, 225, 231],
				"amount": 0.047
			}
		]
	},
	{
		"name": "Soul Lantern",
		"namespacedId": "soul_lantern",
		"description": "Lanterns are blocks that emit light.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/soul_lantern.png",
		"item": "Soul Lantern",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 15,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [45, 64, 75],
				"amount": 0.546
			},
			{
				"color": [71, 167, 170],
				"amount": 0.313
			},
			{
				"color": [168, 188, 193],
				"amount": 0.113
			},
			{
				"color": [76, 76, 100],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Soul Sand",
		"namespacedId": "soul_sand",
		"description": "Soul sand is a block found naturally only in the Nether. Soul sand usually slows down the movement of mobs and players walking on it. It is also used for growing nether wart, for crafting items that emit soul fire, and for constructing a Wither.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/soul_sand.png",
		"item": "Soul Sand",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [52, 40, 32],
				"amount": 0.528
			},
			{
				"color": [99, 75, 62],
				"amount": 0.294
			},
			{
				"color": [84, 68, 52],
				"amount": 0.098
			},
			{
				"color": [78, 60, 52],
				"amount": 0.048
			},
			{
				"color": [76, 53, 44],
				"amount": 0.033
			}
		]
	},
	{
		"name": "Soul Soil",
		"namespacedId": "soul_soil",
		"description": "Soul soil is a block naturally found only in the soul sand valley.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/soul_soil.png",
		"item": "Soul Soil",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [47, 34, 27],
				"amount": 0.52
			},
			{
				"color": [93, 69, 58],
				"amount": 0.283
			},
			{
				"color": [70, 52, 44],
				"amount": 0.171
			},
			{
				"color": [76, 60, 46],
				"amount": 0.023
			}
		]
	},
	{
		"name": "Soul Torch",
		"namespacedId": "soul_torch",
		"description": "Torches are non-solid blocks that emit light.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/soul_torch.png",
		"item": "Soul Torch",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 14,
		"blastResistance": null,
		"colors": [
			{
				"color": [117, 93, 59],
				"amount": 0.585
			},
			{
				"color": [68, 220, 223],
				"amount": 0.32
			},
			{
				"color": [248, 250, 249],
				"amount": 0.081
			},
			{
				"color": [52, 44, 20],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Soul Wall Torch",
		"namespacedId": "soul_wall_torch",
		"description": "Torches are non-solid blocks that emit light.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/soul_wall_torch.png",
		"item": "Soul Torch",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 14,
		"blastResistance": 0,
		"colors": [
			{
				"color": [112, 88, 56],
				"amount": 0.556
			},
			{
				"color": [64, 219, 222],
				"amount": 0.316
			},
			{
				"color": [245, 250, 250],
				"amount": 0.111
			},
			{
				"color": [52, 44, 20],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Spawner",
		"namespacedId": "spawner",
		"description": "A spawner (in Java Edition) or monster spawner (in Bedrock Edition), is a cage-like block that can spawn mobs. When configured, it contains a miniature, spinning version of the type of mob it spawns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spawner.png",
		"item": "Spawner",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 5,
		"colors": [
			{
				"color": [24, 32, 44],
				"amount": 0.873
			},
			{
				"color": [54, 84, 104],
				"amount": 0.064
			},
			{
				"color": [44, 67, 84],
				"amount": 0.041
			},
			{
				"color": [36, 60, 74],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Sponge",
		"namespacedId": "sponge",
		"description": "A sponge is a block that can be used to remove water around itself when placed, turning into a wet sponge in the process.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sponge.png",
		"item": "Sponge",
		"tool": "Hoe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.6,
		"colors": [
			{
				"color": [122, 119, 48],
				"amount": 0.515
			},
			{
				"color": [207, 208, 77],
				"amount": 0.179
			},
			{
				"color": [172, 171, 63],
				"amount": 0.12
			},
			{
				"color": [188, 187, 74],
				"amount": 0.116
			},
			{
				"color": [157, 151, 64],
				"amount": 0.071
			}
		]
	},
	{
		"name": "Spore Blossom",
		"namespacedId": "spore_blossom",
		"description": "A spore blossom is a ceiling-hanging decorative block that emits green particles.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spore_blossom.png",
		"item": "Spore Blossom",
		"tool": null,
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [237, 110, 186],
				"amount": 0.586
			},
			{
				"color": [113, 142, 51],
				"amount": 0.349
			},
			{
				"color": [183, 78, 145],
				"amount": 0.033
			},
			{
				"color": [134, 59, 105],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Spruce Button",
		"namespacedId": "spruce_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_button.png",
		"item": "Spruce Button",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [102, 76, 42],
				"amount": 0.504
			},
			{
				"color": [64, 46, 26],
				"amount": 0.319
			},
			{
				"color": [128, 96, 58],
				"amount": 0.113
			},
			{
				"color": [76, 52, 28],
				"amount": 0.038
			},
			{
				"color": [78, 60, 36],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Spruce Door",
		"namespacedId": "spruce_door",
		"description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_door.png",
		"item": "Spruce Door",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [76, 58, 34],
				"amount": 0.914
			},
			{
				"color": [123, 95, 61],
				"amount": 0.064
			},
			{
				"color": [40, 37, 35],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Spruce Fence",
		"namespacedId": "spruce_fence",
		"description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_fence.png",
		"item": "Spruce Fence",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [79, 58, 33],
				"amount": 0.622
			},
			{
				"color": [103, 75, 43],
				"amount": 0.134
			},
			{
				"color": [127, 95, 56],
				"amount": 0.131
			},
			{
				"color": [108, 84, 44],
				"amount": 0.065
			},
			{
				"color": [55, 40, 23],
				"amount": 0.048
			}
		]
	},
	{
		"name": "Spruce Fence Gate",
		"namespacedId": "spruce_fence_gate",
		"description": "A fence gate is a block that shares the functions of both the door and the fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_fence_gate.png",
		"item": "Spruce Fence Gate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [94, 69, 38],
				"amount": 0.795
			},
			{
				"color": [137, 100, 57],
				"amount": 0.102
			},
			{
				"color": [54, 39, 25],
				"amount": 0.073
			},
			{
				"color": [68, 44, 28],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Spruce Leaves",
		"namespacedId": "spruce_leaves",
		"description": "Leaves are natural blocks that generate as part of trees.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_leaves.png",
		"item": "Spruce Leaves",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [34, 54, 34],
				"amount": 0.701
			},
			{
				"color": [56, 88, 56],
				"amount": 0.155
			},
			{
				"color": [16, 26, 16],
				"amount": 0.066
			},
			{
				"color": [52, 76, 52],
				"amount": 0.049
			},
			{
				"color": [44, 76, 52],
				"amount": 0.029
			}
		]
	},
	{
		"name": "Spruce Log",
		"namespacedId": "spruce_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_log.png",
		"item": "Spruce Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [113, 85, 50],
				"amount": 0.613
			},
			{
				"color": [39, 26, 10],
				"amount": 0.323
			},
			{
				"color": [76, 53, 28],
				"amount": 0.058
			}
		]
	},
	{
		"name": "Spruce Planks",
		"namespacedId": "spruce_planks",
		"description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_planks.png",
		"item": "Spruce Planks",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [78, 57, 32],
				"amount": 0.648
			},
			{
				"color": [124, 92, 55],
				"amount": 0.186
			},
			{
				"color": [103, 75, 43],
				"amount": 0.081
			},
			{
				"color": [108, 84, 44],
				"amount": 0.068
			},
			{
				"color": [52, 39, 20],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Spruce Pressure Plate",
		"namespacedId": "spruce_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_pressure_plate.png",
		"item": "Spruce Pressure Plate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [120, 90, 52],
				"amount": 0.517
			},
			{
				"color": [63, 47, 25],
				"amount": 0.302
			},
			{
				"color": [84, 60, 30],
				"amount": 0.113
			},
			{
				"color": [91, 69, 37],
				"amount": 0.066
			}
		]
	},
	{
		"name": "Spruce Sapling",
		"namespacedId": "spruce_sapling",
		"description": "A sapling is a non-solid block that can be grown into a tree.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_sapling.png",
		"item": "Spruce Sapling",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [45, 70, 44],
				"amount": 0.872
			},
			{
				"color": [45, 29, 12],
				"amount": 0.055
			},
			{
				"color": [78, 56, 28],
				"amount": 0.042
			},
			{
				"color": [23, 11, 4],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Spruce Sign",
		"namespacedId": "spruce_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_sign.png",
		"item": "Spruce Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [92, 67, 39],
				"amount": 0.854
			},
			{
				"color": [39, 25, 12],
				"amount": 0.107
			},
			{
				"color": [68, 52, 32],
				"amount": 0.02
			},
			{
				"color": [122, 90, 52],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Spruce Slab",
		"namespacedId": "spruce_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_slab.png",
		"item": "Spruce Slab",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [80, 59, 33],
				"amount": 0.468
			},
			{
				"color": [125, 94, 56],
				"amount": 0.316
			},
			{
				"color": [108, 84, 44],
				"amount": 0.106
			},
			{
				"color": [102, 75, 45],
				"amount": 0.069
			},
			{
				"color": [54, 40, 22],
				"amount": 0.04
			}
		]
	},
	{
		"name": "Spruce Stairs",
		"namespacedId": "spruce_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_stairs.png",
		"item": "Spruce Stairs",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [79, 58, 33],
				"amount": 0.519
			},
			{
				"color": [125, 94, 56],
				"amount": 0.234
			},
			{
				"color": [108, 84, 44],
				"amount": 0.106
			},
			{
				"color": [103, 75, 46],
				"amount": 0.1
			},
			{
				"color": [54, 40, 21],
				"amount": 0.041
			}
		]
	},
	{
		"name": "Spruce Trapdoor",
		"namespacedId": "spruce_trapdoor",
		"description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_trapdoor.png",
		"item": "Spruce Trapdoor",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [101, 75, 43],
				"amount": 0.812
			},
			{
				"color": [59, 48, 31],
				"amount": 0.139
			},
			{
				"color": [98, 98, 99],
				"amount": 0.027
			},
			{
				"color": [76, 52, 34],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Spruce Wall Sign",
		"namespacedId": "spruce_wall_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_wall_sign.png",
		"item": "Spruce Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [93, 68, 40],
				"amount": 0.965
			},
			{
				"color": [122, 90, 52],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Spruce Wood",
		"namespacedId": "spruce_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/spruce_wood.png",
		"item": "Spruce Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [37, 24, 9],
				"amount": 0.718
			},
			{
				"color": [74, 49, 22],
				"amount": 0.143
			},
			{
				"color": [60, 44, 20],
				"amount": 0.075
			},
			{
				"color": [60, 36, 19],
				"amount": 0.039
			},
			{
				"color": [52, 32, 14],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Sticky Piston",
		"namespacedId": "sticky_piston",
		"description": "A piston is a block capable of pushing blocks, players, and mobs when given a redstone pulse.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sticky_piston.png",
		"item": "Sticky Piston",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [78, 77, 68],
				"amount": 0.678
			},
			{
				"color": [146, 191, 134],
				"amount": 0.249
			},
			{
				"color": [165, 137, 87],
				"amount": 0.048
			},
			{
				"color": [103, 142, 83],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Stone",
		"namespacedId": "stone",
		"description": "Stone is a block found underground in the Overworld or on the surface of mountains.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stone.png",
		"item": "Stone",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [78, 78, 78],
				"amount": 0.402
			},
			{
				"color": [128, 128, 128],
				"amount": 0.287
			},
			{
				"color": [116, 116, 116],
				"amount": 0.198
			},
			{
				"color": [100, 100, 100],
				"amount": 0.089
			},
			{
				"color": [108, 108, 108],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Stone Brick Slab",
		"namespacedId": "stone_brick_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stone_brick_slab.png",
		"item": "Stone Brick Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [93, 92, 93],
				"amount": 0.66
			},
			{
				"color": [143, 137, 143],
				"amount": 0.17
			},
			{
				"color": [123, 124, 125],
				"amount": 0.142
			},
			{
				"color": [55, 55, 56],
				"amount": 0.016
			},
			{
				"color": [119, 116, 124],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Stone Brick Stairs",
		"namespacedId": "stone_brick_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stone_brick_stairs.png",
		"item": "Stone Brick Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [81, 81, 82],
				"amount": 0.598
			},
			{
				"color": [141, 135, 141],
				"amount": 0.177
			},
			{
				"color": [123, 124, 124],
				"amount": 0.116
			},
			{
				"color": [111, 111, 111],
				"amount": 0.095
			},
			{
				"color": [118, 116, 124],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Stone Brick Wall",
		"namespacedId": "stone_brick_wall",
		"description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stone_brick_wall.png",
		"item": "Stone Brick Wall",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [82, 82, 82],
				"amount": 0.688
			},
			{
				"color": [138, 131, 138],
				"amount": 0.147
			},
			{
				"color": [111, 111, 111],
				"amount": 0.099
			},
			{
				"color": [124, 124, 125],
				"amount": 0.06
			}
		]
	},
	{
		"name": "Stone Bricks",
		"namespacedId": "stone_bricks",
		"description": "Stone bricks and the variants  cracked stone bricks,  mossy stone bricks, and  chiseled stone bricks are materials found in structures such as strongholds, igloo basements, jungle temples, ocean ruins and ruined portals.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stone_bricks.png",
		"item": "Stone Bricks",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [82, 81, 82],
				"amount": 0.663
			},
			{
				"color": [124, 123, 124],
				"amount": 0.134
			},
			{
				"color": [143, 138, 143],
				"amount": 0.123
			},
			{
				"color": [115, 116, 115],
				"amount": 0.045
			},
			{
				"color": [108, 107, 108],
				"amount": 0.036
			}
		]
	},
	{
		"name": "Stone Button",
		"namespacedId": "stone_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stone_button.png",
		"item": "Stone Button",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [116, 116, 116],
				"amount": 0.336
			},
			{
				"color": [74, 74, 74],
				"amount": 0.234
			},
			{
				"color": [92, 92, 92],
				"amount": 0.226
			},
			{
				"color": [100, 100, 100],
				"amount": 0.145
			},
			{
				"color": [84, 84, 84],
				"amount": 0.059
			}
		]
	},
	{
		"name": "Stone Pressure Plate",
		"namespacedId": "stone_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stone_pressure_plate.png",
		"item": "Stone Pressure Plate",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [123, 123, 123],
				"amount": 0.761
			},
			{
				"color": [76, 76, 78],
				"amount": 0.137
			},
			{
				"color": [100, 100, 100],
				"amount": 0.07
			},
			{
				"color": [92, 92, 98],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Stone Slab",
		"namespacedId": "stone_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stone_slab.png",
		"item": "Stone Slab",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [119, 119, 119],
				"amount": 0.718
			},
			{
				"color": [73, 73, 75],
				"amount": 0.169
			},
			{
				"color": [84, 84, 87],
				"amount": 0.088
			},
			{
				"color": [92, 92, 100],
				"amount": 0.013
			},
			{
				"color": [92, 92, 92],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Stone Stairs",
		"namespacedId": "stone_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stone_stairs.png",
		"item": "Stone Stairs",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [80, 80, 80],
				"amount": 0.356
			},
			{
				"color": [128, 128, 128],
				"amount": 0.308
			},
			{
				"color": [116, 116, 116],
				"amount": 0.211
			},
			{
				"color": [100, 100, 100],
				"amount": 0.097
			},
			{
				"color": [108, 108, 108],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Stonecutter",
		"namespacedId": "stonecutter",
		"description": "The stonecutter can be used to craft stone-related blocks in smaller and more precise quantities than crafting. It also serves as a stone mason's job site block.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stonecutter.png",
		"item": "Stonecutter",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3.5,
		"colors": [
			{
				"color": [103, 102, 100],
				"amount": 0.702
			},
			{
				"color": [187, 187, 187],
				"amount": 0.195
			},
			{
				"color": [63, 42, 24],
				"amount": 0.089
			},
			{
				"color": [148, 108, 52],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Stripped Acacia Log",
		"namespacedId": "stripped_acacia_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_acacia_log.png",
		"item": "Stripped Acacia Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [142, 76, 47],
				"amount": 0.565
			},
			{
				"color": [111, 58, 36],
				"amount": 0.153
			},
			{
				"color": [175, 95, 52],
				"amount": 0.139
			},
			{
				"color": [98, 53, 36],
				"amount": 0.103
			},
			{
				"color": [152, 92, 57],
				"amount": 0.04
			}
		]
	},
	{
		"name": "Stripped Acacia Wood",
		"namespacedId": "stripped_acacia_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_acacia_wood.png",
		"item": "Stripped Acacia Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [127, 67, 42],
				"amount": 0.571
			},
			{
				"color": [177, 92, 60],
				"amount": 0.254
			},
			{
				"color": [98, 53, 36],
				"amount": 0.095
			},
			{
				"color": [160, 85, 56],
				"amount": 0.067
			},
			{
				"color": [148, 84, 52],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Stripped Birch Log",
		"namespacedId": "stripped_birch_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_birch_log.png",
		"item": "Stripped Birch Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [148, 133, 88],
				"amount": 0.67
			},
			{
				"color": [201, 182, 124],
				"amount": 0.213
			},
			{
				"color": [114, 102, 66],
				"amount": 0.047
			},
			{
				"color": [179, 164, 116],
				"amount": 0.043
			},
			{
				"color": [172, 156, 116],
				"amount": 0.028
			}
		]
	},
	{
		"name": "Stripped Birch Wood",
		"namespacedId": "stripped_birch_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_birch_wood.png",
		"item": "Stripped Birch Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [129, 116, 77],
				"amount": 0.466
			},
			{
				"color": [198, 179, 121],
				"amount": 0.303
			},
			{
				"color": [164, 149, 101],
				"amount": 0.134
			},
			{
				"color": [181, 160, 108],
				"amount": 0.089
			}
		]
	},
	{
		"name": "Stripped Crimson Hyphae",
		"namespacedId": "stripped_crimson_hyphae",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_crimson_hyphae.png",
		"item": "Stripped Crimson Hyphae",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [86, 37, 56],
				"amount": 0.418
			},
			{
				"color": [109, 45, 76],
				"amount": 0.229
			},
			{
				"color": [127, 53, 84],
				"amount": 0.221
			},
			{
				"color": [147, 60, 96],
				"amount": 0.128
			}
		]
	},
	{
		"name": "Stripped Crimson Stem",
		"namespacedId": "stripped_crimson_stem",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_crimson_stem.png",
		"item": "Stripped Crimson Stem",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [85, 37, 58],
				"amount": 0.522
			},
			{
				"color": [123, 55, 84],
				"amount": 0.245
			},
			{
				"color": [134, 59, 90],
				"amount": 0.134
			},
			{
				"color": [116, 46, 76],
				"amount": 0.058
			},
			{
				"color": [108, 45, 72],
				"amount": 0.042
			}
		]
	},
	{
		"name": "Stripped Dark Oak Log",
		"namespacedId": "stripped_dark_oak_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_dark_oak_log.png",
		"item": "Stripped Dark Oak Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [55, 44, 27],
				"amount": 0.382
			},
			{
				"color": [46, 35, 21],
				"amount": 0.262
			},
			{
				"color": [70, 44, 20],
				"amount": 0.227
			},
			{
				"color": [36, 28, 20],
				"amount": 0.114
			},
			{
				"color": [60, 36, 20],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Stripped Dark Oak Wood",
		"namespacedId": "stripped_dark_oak_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_dark_oak_wood.png",
		"item": "Stripped Dark Oak Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [71, 56, 36],
				"amount": 0.727
			},
			{
				"color": [102, 79, 52],
				"amount": 0.109
			},
			{
				"color": [51, 43, 28],
				"amount": 0.105
			},
			{
				"color": [92, 76, 50],
				"amount": 0.04
			},
			{
				"color": [92, 68, 44],
				"amount": 0.019
			}
		]
	},
	{
		"name": "Stripped Jungle Log",
		"namespacedId": "stripped_jungle_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_jungle_log.png",
		"item": "Stripped Jungle Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [153, 114, 76],
				"amount": 0.469
			},
			{
				"color": [113, 89, 54],
				"amount": 0.427
			},
			{
				"color": [178, 130, 97],
				"amount": 0.098
			}
		]
	},
	{
		"name": "Stripped Jungle Wood",
		"namespacedId": "stripped_jungle_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_jungle_wood.png",
		"item": "Stripped Jungle Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [151, 119, 75],
				"amount": 0.343
			},
			{
				"color": [177, 133, 89],
				"amount": 0.233
			},
			{
				"color": [107, 83, 51],
				"amount": 0.222
			},
			{
				"color": [130, 108, 63],
				"amount": 0.166
			},
			{
				"color": [139, 100, 68],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Stripped Oak Log",
		"namespacedId": "stripped_oak_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_oak_log.png",
		"item": "Stripped Oak Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [112, 90, 53],
				"amount": 0.395
			},
			{
				"color": [174, 142, 86],
				"amount": 0.288
			},
			{
				"color": [139, 115, 68],
				"amount": 0.138
			},
			{
				"color": [150, 119, 70],
				"amount": 0.136
			},
			{
				"color": [156, 132, 77],
				"amount": 0.044
			}
		]
	},
	{
		"name": "Stripped Oak Wood",
		"namespacedId": "stripped_oak_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_oak_wood.png",
		"item": "Stripped Oak Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [111, 89, 52],
				"amount": 0.338
			},
			{
				"color": [180, 148, 88],
				"amount": 0.308
			},
			{
				"color": [151, 120, 71],
				"amount": 0.2
			},
			{
				"color": [139, 115, 68],
				"amount": 0.122
			},
			{
				"color": [161, 132, 79],
				"amount": 0.032
			}
		]
	},
	{
		"name": "Stripped Spruce Log",
		"namespacedId": "stripped_spruce_log",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_spruce_log.png",
		"item": "Stripped Spruce Log",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [72, 56, 32],
				"amount": 0.459
			},
			{
				"color": [103, 76, 44],
				"amount": 0.238
			},
			{
				"color": [122, 90, 54],
				"amount": 0.232
			},
			{
				"color": [92, 76, 44],
				"amount": 0.056
			},
			{
				"color": [92, 68, 43],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Stripped Spruce Wood",
		"namespacedId": "stripped_spruce_wood",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_spruce_wood.png",
		"item": "Stripped Spruce Wood",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [72, 56, 33],
				"amount": 0.393
			},
			{
				"color": [102, 79, 46],
				"amount": 0.316
			},
			{
				"color": [121, 92, 51],
				"amount": 0.244
			},
			{
				"color": [91, 76, 44],
				"amount": 0.035
			},
			{
				"color": [92, 68, 44],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Stripped Warped Hyphae",
		"namespacedId": "stripped_warped_hyphae",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_warped_hyphae.png",
		"item": "Stripped Warped Hyphae",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [36, 97, 95],
				"amount": 0.587
			},
			{
				"color": [62, 152, 152],
				"amount": 0.202
			},
			{
				"color": [47, 127, 123],
				"amount": 0.144
			},
			{
				"color": [50, 137, 136],
				"amount": 0.049
			},
			{
				"color": [52, 148, 140],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Stripped Warped Stem",
		"namespacedId": "stripped_warped_stem",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/stripped_warped_stem.png",
		"item": "Stripped Warped Stem",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [36, 94, 92],
				"amount": 0.54
			},
			{
				"color": [54, 141, 140],
				"amount": 0.183
			},
			{
				"color": [57, 132, 132],
				"amount": 0.151
			},
			{
				"color": [49, 124, 122],
				"amount": 0.096
			},
			{
				"color": [42, 116, 116],
				"amount": 0.03
			}
		]
	},
	{
		"name": "Structure Block",
		"namespacedId": "structure_block",
		"description": "A structure block is used to generate structures manually. They can also be used to save and load structures, alongside structure void blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/structure_block.png",
		"item": "Structure Block",
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3600000,
		"colors": [
			{
				"color": [161, 135, 161],
				"amount": 0.537
			},
			{
				"color": [24, 21, 27],
				"amount": 0.39
			},
			{
				"color": [107, 88, 107],
				"amount": 0.073
			}
		]
	},
	{
		"name": "Structure Void",
		"namespacedId": "structure_void",
		"description": "A structure void is an invisible block that allows existing blocks to remain unchanged rather than be overridden when using the structure block to load a structure.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/structure_void.png",
		"item": "Structure Void",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [16, 84, 89],
				"amount": 0.823
			},
			{
				"color": [92, 117, 125],
				"amount": 0.121
			},
			{
				"color": [64, 93, 100],
				"amount": 0.036
			},
			{
				"color": [12, 51, 56],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Sugar Cane",
		"namespacedId": "sugar_cane",
		"description": "Sugar cane is a block found as 1–4-block-tall plants near water in the Overworld. As an item, it is an important crafting ingredient.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sugar_cane.png",
		"item": "Sugar Cane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [61, 124, 35],
				"amount": 0.594
			},
			{
				"color": [83, 164, 50],
				"amount": 0.376
			},
			{
				"color": [107, 178, 89],
				"amount": 0.025
			}
		]
	},
	{
		"name": "Sunflower",
		"namespacedId": "sunflower",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sunflower.png",
		"item": "Sunflower",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [51, 130, 28],
				"amount": 0.526
			},
			{
				"color": [247, 196, 49],
				"amount": 0.435
			},
			{
				"color": [84, 164, 44],
				"amount": 0.022
			},
			{
				"color": [201, 116, 43],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Sweet Berry Bush",
		"namespacedId": "sweet_berry_bush",
		"description": "Sweet berries are a food item that are collected from sweet berry bushes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/sweet_berry_bush.png",
		"item": "Sweet Berries",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [49, 94, 59],
				"amount": 0.649
			},
			{
				"color": [172, 15, 23],
				"amount": 0.26
			},
			{
				"color": [100, 26, 32],
				"amount": 0.088
			}
		]
	},
	{
		"name": "TNT",
		"namespacedId": "tnt",
		"description": "TNT is an explosive block that can be primed to generate an explosion.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tnt.png",
		"item": "TNT",
		"tool": null,
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4,
		"colors": [
			{
				"color": [134, 34, 28],
				"amount": 0.532
			},
			{
				"color": [148, 145, 147],
				"amount": 0.246
			},
			{
				"color": [28, 27, 43],
				"amount": 0.125
			},
			{
				"color": [222, 60, 27],
				"amount": 0.075
			},
			{
				"color": [115, 106, 108],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Tall Grass",
		"namespacedId": "tall_grass",
		"description": "Grass is a non-solid plant block that has wheat seeds as a drop. Its color is biome-dependent, and matches the color of grass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tall_grass.png",
		"item": "Tall Grass",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [82, 122, 73],
				"amount": 0.314
			},
			{
				"color": [76, 108, 60],
				"amount": 0.251
			},
			{
				"color": [67, 101, 54],
				"amount": 0.196
			},
			{
				"color": [59, 88, 52],
				"amount": 0.175
			},
			{
				"color": [52, 79, 44],
				"amount": 0.063
			}
		]
	},
	{
		"name": "Tall Seagrass",
		"namespacedId": "tall_seagrass",
		"description": "Seagrass is a non-solid plant block that generates in all oceans, except frozen oceans.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tall_seagrass.png",
		"item": null,
		"tool": "Shears",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [48, 133, 5],
				"amount": 0.473
			},
			{
				"color": [36, 89, 4],
				"amount": 0.295
			},
			{
				"color": [82, 147, 42],
				"amount": 0.22
			}
		]
	},
	{
		"name": "Target",
		"namespacedId": "target",
		"description": "A target is a block that provides a temporary redstone charge when hit by a projectile. It also has utility in redstone circuitry for redirecting redstone dust, making it a useful redstone component.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/target.png",
		"item": "Target",
		"tool": "Hoe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [187, 177, 165],
				"amount": 0.621
			},
			{
				"color": [153, 41, 41],
				"amount": 0.341
			},
			{
				"color": [246, 240, 231],
				"amount": 0.019
			},
			{
				"color": [178, 109, 104],
				"amount": 0.012
			}
		]
	},
	{
		"name": "Terracotta",
		"namespacedId": "terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/terracotta.png",
		"item": "Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [124, 76, 55],
				"amount": 0.544
			},
			{
				"color": [150, 92, 68],
				"amount": 0.323
			},
			{
				"color": [92, 60, 43],
				"amount": 0.13
			}
		]
	},
	{
		"name": "Tinted Glass",
		"namespacedId": "tinted_glass",
		"description": "Tinted glass is a block that blocks light while being visually transparent.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tinted_glass.png",
		"item": "Tinted Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [32, 22, 32],
				"amount": 0.327
			},
			{
				"color": [52, 42, 59],
				"amount": 0.274
			},
			{
				"color": [40, 26, 44],
				"amount": 0.195
			},
			{
				"color": [43, 36, 44],
				"amount": 0.113
			},
			{
				"color": [44, 36, 52],
				"amount": 0.09
			}
		]
	},
	{
		"name": "Torch",
		"namespacedId": "torch",
		"description": "Torches are non-solid blocks that emit light.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/torch.png",
		"item": "Torch",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 14,
		"blastResistance": 0,
		"colors": [
			{
				"color": [114, 91, 57],
				"amount": 0.649
			},
			{
				"color": [250, 249, 220],
				"amount": 0.175
			},
			{
				"color": [251, 230, 63],
				"amount": 0.134
			},
			{
				"color": [252, 142, 6],
				"amount": 0.041
			}
		]
	},
	{
		"name": "Trapped Chest",
		"namespacedId": "trapped_chest",
		"description": "A trapped chest functions as a normal chest for item storage, but it produces redstone power when opened. It can be visually distinguished from normal chests by a red coloration around the latch.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/trapped_chest.png",
		"item": "Trapped Chest",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 2.5,
		"colors": [
			{
				"color": [106, 75, 28],
				"amount": 0.686
			},
			{
				"color": [160, 113, 44],
				"amount": 0.202
			},
			{
				"color": [43, 36, 28],
				"amount": 0.093
			}
		]
	},
	{
		"name": "Tripwire",
		"namespacedId": "tripwire",
		"description": "String is an item used in crafting recipes such as bows, fishing rods and leads. When placed as a block, string becomes tripwire, which can be combined with tripwire hooks to form a tripwire circuit.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tripwire.png",
		"item": "String",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [180, 180, 180],
				"amount": 0.6
			},
			{
				"color": [148, 148, 148],
				"amount": 0.4
			}
		]
	},
	{
		"name": "Tripwire Hook",
		"namespacedId": "tripwire_hook",
		"description": "A tripwire hook is a block that can be used to detect entities (players, mobs, items, etc.) when part of a tripwire circuit is passed through.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tripwire_hook.png",
		"item": "Tripwire Hook",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [123, 101, 63],
				"amount": 0.602
			},
			{
				"color": [137, 137, 139],
				"amount": 0.193
			},
			{
				"color": [75, 64, 42],
				"amount": 0.146
			},
			{
				"color": [177, 144, 89],
				"amount": 0.056
			}
		]
	},
	{
		"name": "Tube Coral",
		"namespacedId": "tube_coral",
		"description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tube_coral.png",
		"item": "Tube Coral",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [30, 58, 146],
				"amount": 0.53
			},
			{
				"color": [57, 90, 223],
				"amount": 0.403
			},
			{
				"color": [60, 129, 227],
				"amount": 0.046
			},
			{
				"color": [37, 68, 176],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Tube Coral Block",
		"namespacedId": "tube_coral_block",
		"description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tube_coral_block.png",
		"item": "Tube Coral Block",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [40, 70, 176],
				"amount": 0.43
			},
			{
				"color": [31, 57, 135],
				"amount": 0.266
			},
			{
				"color": [20, 42, 100],
				"amount": 0.152
			},
			{
				"color": [56, 114, 212],
				"amount": 0.081
			},
			{
				"color": [51, 81, 219],
				"amount": 0.072
			}
		]
	},
	{
		"name": "Tube Coral Fan",
		"namespacedId": "tube_coral_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tube_coral_fan.png",
		"item": "Tube Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [52, 88, 207],
				"amount": 0.518
			},
			{
				"color": [28, 58, 150],
				"amount": 0.393
			},
			{
				"color": [57, 122, 211],
				"amount": 0.047
			},
			{
				"color": [37, 71, 172],
				"amount": 0.039
			}
		]
	},
	{
		"name": "Tube Coral Wall Fan",
		"namespacedId": "tube_coral_wall_fan",
		"description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tube_coral_wall_fan.png",
		"item": "Tube Coral Fan",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [54, 90, 209],
				"amount": 0.482
			},
			{
				"color": [28, 58, 148],
				"amount": 0.378
			},
			{
				"color": [57, 122, 211],
				"amount": 0.084
			},
			{
				"color": [39, 67, 177],
				"amount": 0.047
			}
		]
	},
	{
		"name": "Tuff",
		"namespacedId": "tuff",
		"description": "Tuff is an ornamental rock formed from volcanic ash, occurring in underground blobs below Y=16.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/tuff.png",
		"item": "Tuff",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [70, 71, 65],
				"amount": 0.755
			},
			{
				"color": [132, 132, 123],
				"amount": 0.162
			},
			{
				"color": [105, 103, 102],
				"amount": 0.079
			}
		]
	},
	{
		"name": "Turtle Egg",
		"namespacedId": "turtle_egg",
		"description": "A turtle egg (in Java Edition) or sea turtle egg (in Bedrock Edition) is a block that hatches one or more baby turtles.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/turtle_egg.png",
		"item": "Turtle Egg",
		"tool": null,
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [213, 205, 180],
				"amount": 0.382
			},
			{
				"color": [55, 112, 96],
				"amount": 0.25
			},
			{
				"color": [147, 140, 115],
				"amount": 0.208
			},
			{
				"color": [148, 148, 132],
				"amount": 0.157
			}
		]
	},
	{
		"name": "Twisting Vines",
		"namespacedId": "twisting_vines",
		"description": "Twisting vines are vegetation blocks found in the Nether in warped forests.  Their \"crimson\" equivalent are weeping vines.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/twisting_vines.png",
		"item": "Twisting Vines",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [20, 100, 92],
				"amount": 0.427
			},
			{
				"color": [20, 179, 132],
				"amount": 0.243
			},
			{
				"color": [20, 125, 131],
				"amount": 0.228
			},
			{
				"color": [20, 155, 132],
				"amount": 0.094
			}
		]
	},
	{
		"name": "Twisting Vines Plant",
		"namespacedId": "twisting_vines_plant",
		"description": "Twisting vines are vegetation blocks found in the Nether in warped forests.  Their \"crimson\" equivalent are weeping vines.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/twisting_vines_plant.png",
		"item": "Twisting Vines",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [20, 126, 131],
				"amount": 0.441
			},
			{
				"color": [20, 155, 131],
				"amount": 0.281
			},
			{
				"color": [20, 178, 132],
				"amount": 0.172
			},
			{
				"color": [20, 100, 92],
				"amount": 0.104
			}
		]
	},
	{
		"name": "Vines",
		"namespacedId": "vine",
		"description": "Vines are non-solid blocks, 1⁄16 of a block in thickness that can be placed only against a vertical side of a solid block. They also can be placed beneath a solid block ceiling if adjacent to a solid vertical wall.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/vine.png",
		"item": "Vines",
		"tool": "Shears",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [27, 66, 11],
				"amount": 0.605
			},
			{
				"color": [50, 123, 18],
				"amount": 0.233
			},
			{
				"color": [36, 92, 12],
				"amount": 0.132
			},
			{
				"color": [36, 84, 12],
				"amount": 0.017
			},
			{
				"color": [40, 101, 12],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Void Air",
		"namespacedId": "void_air",
		"description": "Air is an invisible block used to define empty space where any other blocks could otherwise exist.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/air.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": []
	},
	{
		"name": "Wall Torch",
		"namespacedId": "wall_torch",
		"description": "Torches are non-solid blocks that emit light.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/wall_torch.png",
		"item": "Torch",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 14,
		"blastResistance": 0,
		"colors": [
			{
				"color": [108, 86, 54],
				"amount": 0.624
			},
			{
				"color": [251, 250, 235],
				"amount": 0.186
			},
			{
				"color": [251, 231, 70],
				"amount": 0.142
			},
			{
				"color": [249, 144, 9],
				"amount": 0.048
			}
		]
	},
	{
		"name": "Warped Button",
		"namespacedId": "warped_button",
		"description": "A button is a non-solid block that can provide temporary redstone power.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_button.png",
		"item": "Warped Button",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [36, 88, 83],
				"amount": 0.563
			},
			{
				"color": [18, 44, 44],
				"amount": 0.264
			},
			{
				"color": [48, 121, 120],
				"amount": 0.122
			},
			{
				"color": [44, 116, 108],
				"amount": 0.047
			}
		]
	},
	{
		"name": "Warped Door",
		"namespacedId": "warped_door",
		"description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_door.png",
		"item": "Warped Door",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [32, 82, 77],
				"amount": 0.864
			},
			{
				"color": [31, 125, 116],
				"amount": 0.05
			},
			{
				"color": [33, 159, 146],
				"amount": 0.038
			},
			{
				"color": [42, 108, 108],
				"amount": 0.03
			},
			{
				"color": [28, 124, 132],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Warped Fence",
		"namespacedId": "warped_fence",
		"description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_fence.png",
		"item": "Warped Fence",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [26, 64, 60],
				"amount": 0.759
			},
			{
				"color": [58, 141, 140],
				"amount": 0.108
			},
			{
				"color": [44, 107, 104],
				"amount": 0.087
			},
			{
				"color": [44, 116, 116],
				"amount": 0.045
			}
		]
	},
	{
		"name": "Warped Fence Gate",
		"namespacedId": "warped_fence_gate",
		"description": "A fence gate is a block that shares the functions of both the door and the fence.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_fence_gate.png",
		"item": "Warped Fence Gate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [26, 63, 59],
				"amount": 0.546
			},
			{
				"color": [50, 126, 125],
				"amount": 0.201
			},
			{
				"color": [44, 108, 108],
				"amount": 0.173
			},
			{
				"color": [37, 95, 87],
				"amount": 0.075
			}
		]
	},
	{
		"name": "Warped Fungus",
		"namespacedId": "warped_fungus",
		"description": "A fungus is a mushroom-like block that generates in the Nether. There are two types of fungi: crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_fungus.png",
		"item": "Warped Fungus",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [243, 109, 25],
				"amount": 0.567
			},
			{
				"color": [23, 135, 119],
				"amount": 0.358
			},
			{
				"color": [74, 38, 54],
				"amount": 0.071
			}
		]
	},
	{
		"name": "Warped Hyphae",
		"namespacedId": "warped_hyphae",
		"description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_hyphae.png",
		"item": "Warped Hyphae",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [44, 32, 50],
				"amount": 0.56
			},
			{
				"color": [17, 110, 92],
				"amount": 0.133
			},
			{
				"color": [72, 37, 55],
				"amount": 0.121
			},
			{
				"color": [48, 65, 92],
				"amount": 0.11
			},
			{
				"color": [17, 76, 71],
				"amount": 0.076
			}
		]
	},
	{
		"name": "Warped Nylium",
		"namespacedId": "warped_nylium",
		"description": "Nylium is a variant of netherrack that generates in the Nether. It has two variants: warped nylium and crimson nylium which both spawn in different biomes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_nylium.png",
		"item": "Warped Nylium",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [57, 27, 27],
				"amount": 0.514
			},
			{
				"color": [34, 133, 115],
				"amount": 0.291
			},
			{
				"color": [23, 98, 96],
				"amount": 0.118
			},
			{
				"color": [9, 74, 66],
				"amount": 0.04
			},
			{
				"color": [64, 102, 83],
				"amount": 0.037
			}
		]
	},
	{
		"name": "Warped Planks",
		"namespacedId": "warped_planks",
		"description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_planks.png",
		"item": "Warped Planks",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [27, 64, 60],
				"amount": 0.692
			},
			{
				"color": [53, 128, 125],
				"amount": 0.158
			},
			{
				"color": [41, 105, 101],
				"amount": 0.084
			},
			{
				"color": [37, 92, 81],
				"amount": 0.051
			},
			{
				"color": [44, 116, 107],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Warped Pressure Plate",
		"namespacedId": "warped_pressure_plate",
		"description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_pressure_plate.png",
		"item": "Warped Pressure Plate",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [40, 101, 92],
				"amount": 0.558
			},
			{
				"color": [19, 48, 47],
				"amount": 0.233
			},
			{
				"color": [57, 133, 133],
				"amount": 0.14
			},
			{
				"color": [27, 68, 60],
				"amount": 0.035
			},
			{
				"color": [29, 69, 68],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Warped Roots",
		"namespacedId": "warped_roots",
		"description": "Not to be confused with Nether Sprouts.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_roots.png",
		"item": "Warped Roots",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [20, 125, 131],
				"amount": 0.404
			},
			{
				"color": [20, 178, 131],
				"amount": 0.221
			},
			{
				"color": [20, 155, 131],
				"amount": 0.218
			},
			{
				"color": [20, 99, 92],
				"amount": 0.151
			}
		]
	},
	{
		"name": "Warped Sign",
		"namespacedId": "warped_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_sign.png",
		"item": "Warped Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [27, 87, 82],
				"amount": 0.916
			},
			{
				"color": [45, 26, 44],
				"amount": 0.055
			},
			{
				"color": [57, 130, 129],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Warped Slab",
		"namespacedId": "warped_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_slab.png",
		"item": "Warped Slab",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [32, 79, 74],
				"amount": 0.706
			},
			{
				"color": [54, 128, 127],
				"amount": 0.222
			},
			{
				"color": [44, 108, 108],
				"amount": 0.043
			},
			{
				"color": [14, 40, 40],
				"amount": 0.027
			}
		]
	},
	{
		"name": "Warped Stairs",
		"namespacedId": "warped_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_stairs.png",
		"item": "Warped Stairs",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [26, 64, 60],
				"amount": 0.649
			},
			{
				"color": [54, 128, 126],
				"amount": 0.173
			},
			{
				"color": [41, 106, 102],
				"amount": 0.1
			},
			{
				"color": [37, 92, 81],
				"amount": 0.063
			},
			{
				"color": [44, 116, 107],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Warped Stem",
		"namespacedId": "warped_stem",
		"description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_stem.png",
		"item": "Warped Stem",
		"tool": "Axe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [48, 124, 117],
				"amount": 0.493
			},
			{
				"color": [44, 32, 50],
				"amount": 0.38
			},
			{
				"color": [22, 81, 73],
				"amount": 0.073
			},
			{
				"color": [71, 37, 53],
				"amount": 0.051
			}
		]
	},
	{
		"name": "Warped Trapdoor",
		"namespacedId": "warped_trapdoor",
		"description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_trapdoor.png",
		"item": "Warped Trapdoor",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [33, 79, 74],
				"amount": 0.508
			},
			{
				"color": [54, 143, 138],
				"amount": 0.37
			},
			{
				"color": [41, 112, 106],
				"amount": 0.112
			}
		]
	},
	{
		"name": "Warped Wall Sign",
		"namespacedId": "warped_wall_sign",
		"description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_wall_sign.png",
		"item": "Warped Sign",
		"tool": "Axe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [28, 83, 77],
				"amount": 0.772
			},
			{
				"color": [31, 104, 103],
				"amount": 0.137
			},
			{
				"color": [55, 129, 128],
				"amount": 0.084
			}
		]
	},
	{
		"name": "Warped Wart Block",
		"namespacedId": "warped_wart_block",
		"description": "Nether wart blocks are decorative blocks found in crimson forests and crafted using Nether wart.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/warped_wart_block.png",
		"item": "Warped Wart Block",
		"tool": "Axe",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 3,
		"colors": [
			{
				"color": [12, 73, 74],
				"amount": 0.611
			},
			{
				"color": [19, 123, 127],
				"amount": 0.184
			},
			{
				"color": [17, 101, 104],
				"amount": 0.129
			},
			{
				"color": [17, 155, 123],
				"amount": 0.07
			}
		]
	},
	{
		"name": "Water",
		"namespacedId": "water",
		"description": "Water is a natural fluid that naturally generates abundantly in the Overworld.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/water.png",
		"item": "Water Bucket",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 100,
		"colors": [
			{
				"color": [125, 118, 91],
				"amount": 0.763
			},
			{
				"color": [49, 68, 103],
				"amount": 0.095
			},
			{
				"color": [189, 181, 145],
				"amount": 0.076
			},
			{
				"color": [170, 163, 130],
				"amount": 0.04
			},
			{
				"color": [80, 73, 55],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Water Cauldron",
		"namespacedId": "water_cauldron",
		"description": "A cauldron is a block that can contain water, lava and powder snow. In Bedrock Edition, it can also hold potions and dyed water. It also is a job site block used by leatherworkers in villages.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/water_cauldron.png",
		"item": null,
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [53, 53, 54],
				"amount": 0.659
			},
			{
				"color": [43, 80, 156],
				"amount": 0.298
			},
			{
				"color": [77, 87, 108],
				"amount": 0.022
			},
			{
				"color": [87, 80, 82],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Waxed Block of Copper",
		"namespacedId": "waxed_copper_block",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_copper_block.png",
		"item": "Waxed Block of Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [137, 76, 56],
				"amount": 0.713
			},
			{
				"color": [209, 121, 92],
				"amount": 0.154
			},
			{
				"color": [187, 108, 81],
				"amount": 0.053
			},
			{
				"color": [174, 99, 72],
				"amount": 0.047
			},
			{
				"color": [96, 51, 37],
				"amount": 0.033
			}
		]
	},
	{
		"name": "Waxed Cut Copper",
		"namespacedId": "waxed_cut_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_cut_copper.png",
		"item": "Waxed Cut Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [143, 78, 58],
				"amount": 0.561
			},
			{
				"color": [212, 123, 96],
				"amount": 0.201
			},
			{
				"color": [179, 102, 79],
				"amount": 0.148
			},
			{
				"color": [101, 55, 40],
				"amount": 0.087
			}
		]
	},
	{
		"name": "Waxed Cut Copper Slab",
		"namespacedId": "waxed_cut_copper_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_cut_copper_slab.png",
		"item": "Waxed Cut Copper Slab",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [149, 82, 61],
				"amount": 0.623
			},
			{
				"color": [218, 125, 100],
				"amount": 0.149
			},
			{
				"color": [102, 55, 41],
				"amount": 0.135
			},
			{
				"color": [184, 103, 80],
				"amount": 0.062
			},
			{
				"color": [196, 116, 84],
				"amount": 0.031
			}
		]
	},
	{
		"name": "Waxed Cut Copper Stairs",
		"namespacedId": "waxed_cut_copper_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_cut_copper_stairs.png",
		"item": "Waxed Cut Copper Stairs",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [144, 79, 58],
				"amount": 0.568
			},
			{
				"color": [212, 123, 96],
				"amount": 0.194
			},
			{
				"color": [102, 55, 41],
				"amount": 0.109
			},
			{
				"color": [175, 99, 73],
				"amount": 0.067
			},
			{
				"color": [187, 108, 89],
				"amount": 0.061
			}
		]
	},
	{
		"name": "Waxed Exposed Copper",
		"namespacedId": "waxed_exposed_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_exposed_copper.png",
		"item": "Waxed Exposed Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [128, 98, 82],
				"amount": 0.729
			},
			{
				"color": [86, 76, 61],
				"amount": 0.122
			},
			{
				"color": [187, 131, 119],
				"amount": 0.11
			},
			{
				"color": [147, 138, 104],
				"amount": 0.035
			}
		]
	},
	{
		"name": "Waxed Exposed Cut Copper",
		"namespacedId": "waxed_exposed_cut_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_exposed_cut_copper.png",
		"item": "Waxed Exposed Cut Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [105, 85, 70],
				"amount": 0.637
			},
			{
				"color": [153, 115, 99],
				"amount": 0.159
			},
			{
				"color": [184, 129, 118],
				"amount": 0.151
			},
			{
				"color": [136, 108, 92],
				"amount": 0.032
			},
			{
				"color": [115, 137, 96],
				"amount": 0.021
			}
		]
	},
	{
		"name": "Waxed Exposed Cut Copper Slab",
		"namespacedId": "waxed_exposed_cut_copper_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_exposed_cut_copper_slab.png",
		"item": "Waxed Exposed Cut Copper Slab",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [124, 98, 82],
				"amount": 0.736
			},
			{
				"color": [185, 130, 119],
				"amount": 0.163
			},
			{
				"color": [75, 68, 54],
				"amount": 0.072
			},
			{
				"color": [137, 141, 104],
				"amount": 0.022
			}
		]
	},
	{
		"name": "Waxed Exposed Cut Copper Stairs",
		"namespacedId": "waxed_exposed_cut_copper_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_exposed_cut_copper_stairs.png",
		"item": "Waxed Exposed Cut Copper Stairs",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [105, 85, 69],
				"amount": 0.598
			},
			{
				"color": [153, 114, 96],
				"amount": 0.202
			},
			{
				"color": [186, 129, 119],
				"amount": 0.146
			},
			{
				"color": [137, 109, 92],
				"amount": 0.027
			},
			{
				"color": [114, 135, 93],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Waxed Oxidized Copper",
		"namespacedId": "waxed_oxidized_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_oxidized_copper.png",
		"item": "Waxed Oxidized Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [60, 119, 98],
				"amount": 0.731
			},
			{
				"color": [88, 176, 146],
				"amount": 0.154
			},
			{
				"color": [80, 155, 133],
				"amount": 0.041
			},
			{
				"color": [84, 156, 118],
				"amount": 0.038
			},
			{
				"color": [40, 72, 60],
				"amount": 0.036
			}
		]
	},
	{
		"name": "Waxed Oxidized Cut Copper",
		"namespacedId": "waxed_oxidized_cut_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_oxidized_cut_copper.png",
		"item": "Waxed Oxidized Cut Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [54, 104, 87],
				"amount": 0.673
			},
			{
				"color": [91, 172, 141],
				"amount": 0.204
			},
			{
				"color": [78, 147, 117],
				"amount": 0.062
			},
			{
				"color": [76, 149, 132],
				"amount": 0.06
			}
		]
	},
	{
		"name": "Waxed Oxidized Cut Copper Slab",
		"namespacedId": "waxed_oxidized_cut_copper_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_oxidized_cut_copper_slab.png",
		"item": "Waxed Oxidized Cut Copper Slab",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [61, 118, 97],
				"amount": 0.699
			},
			{
				"color": [79, 156, 135],
				"amount": 0.125
			},
			{
				"color": [98, 183, 148],
				"amount": 0.096
			},
			{
				"color": [38, 73, 60],
				"amount": 0.079
			}
		]
	},
	{
		"name": "Waxed Oxidized Cut Copper Stairs",
		"namespacedId": "waxed_oxidized_cut_copper_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_oxidized_cut_copper_stairs.png",
		"item": "Waxed Oxidized Cut Copper Stairs",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [60, 116, 95],
				"amount": 0.756
			},
			{
				"color": [88, 174, 141],
				"amount": 0.151
			},
			{
				"color": [76, 148, 132],
				"amount": 0.047
			},
			{
				"color": [37, 70, 58],
				"amount": 0.03
			},
			{
				"color": [92, 156, 124],
				"amount": 0.015
			}
		]
	},
	{
		"name": "Waxed Weathered Copper",
		"namespacedId": "waxed_weathered_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_weathered_copper.png",
		"item": "Waxed Weathered Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [73, 101, 72],
				"amount": 0.637
			},
			{
				"color": [105, 164, 124],
				"amount": 0.202
			},
			{
				"color": [90, 137, 97],
				"amount": 0.088
			},
			{
				"color": [122, 129, 94],
				"amount": 0.048
			},
			{
				"color": [100, 148, 124],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Waxed Weathered Cut Copper",
		"namespacedId": "waxed_weathered_cut_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_weathered_cut_copper.png",
		"item": "Waxed Weathered Cut Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [72, 93, 70],
				"amount": 0.571
			},
			{
				"color": [105, 158, 119],
				"amount": 0.282
			},
			{
				"color": [124, 124, 96],
				"amount": 0.082
			},
			{
				"color": [88, 131, 95],
				"amount": 0.064
			}
		]
	},
	{
		"name": "Waxed Weathered Cut Copper Slab",
		"namespacedId": "waxed_weathered_cut_copper_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_weathered_cut_copper_slab.png",
		"item": "Waxed Weathered Cut Copper Slab",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [76, 97, 71],
				"amount": 0.592
			},
			{
				"color": [106, 164, 126],
				"amount": 0.217
			},
			{
				"color": [126, 128, 98],
				"amount": 0.111
			},
			{
				"color": [95, 139, 97],
				"amount": 0.062
			},
			{
				"color": [101, 148, 124],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Waxed Weathered Cut Copper Stairs",
		"namespacedId": "waxed_weathered_cut_copper_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/waxed_weathered_cut_copper_stairs.png",
		"item": "Waxed Weathered Cut Copper Stairs",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [75, 97, 70],
				"amount": 0.651
			},
			{
				"color": [106, 164, 125],
				"amount": 0.148
			},
			{
				"color": [124, 124, 96],
				"amount": 0.102
			},
			{
				"color": [90, 136, 95],
				"amount": 0.073
			},
			{
				"color": [100, 148, 124],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Weathered Copper",
		"namespacedId": "weathered_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/weathered_copper.png",
		"item": "Weathered Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [73, 101, 72],
				"amount": 0.637
			},
			{
				"color": [105, 164, 124],
				"amount": 0.202
			},
			{
				"color": [90, 137, 97],
				"amount": 0.088
			},
			{
				"color": [122, 129, 94],
				"amount": 0.048
			},
			{
				"color": [100, 148, 124],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Weathered Cut Copper",
		"namespacedId": "weathered_cut_copper",
		"description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/weathered_cut_copper.png",
		"item": "Weathered Cut Copper",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [72, 93, 70],
				"amount": 0.571
			},
			{
				"color": [105, 158, 119],
				"amount": 0.282
			},
			{
				"color": [124, 124, 96],
				"amount": 0.082
			},
			{
				"color": [88, 131, 95],
				"amount": 0.064
			}
		]
	},
	{
		"name": "Weathered Cut Copper Slab",
		"namespacedId": "weathered_cut_copper_slab",
		"description": "Slabs are half-height versions of their respective blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/weathered_cut_copper_slab.png",
		"item": "Weathered Cut Copper Slab",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [76, 97, 71],
				"amount": 0.592
			},
			{
				"color": [106, 164, 126],
				"amount": 0.217
			},
			{
				"color": [126, 128, 98],
				"amount": 0.111
			},
			{
				"color": [95, 139, 97],
				"amount": 0.062
			},
			{
				"color": [101, 148, 124],
				"amount": 0.017
			}
		]
	},
	{
		"name": "Weathered Cut Copper Stairs",
		"namespacedId": "weathered_cut_copper_stairs",
		"description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/weathered_cut_copper_stairs.png",
		"item": "Weathered Cut Copper Stairs",
		"tool": "Pickaxe",
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 6,
		"colors": [
			{
				"color": [75, 97, 70],
				"amount": 0.651
			},
			{
				"color": [106, 164, 125],
				"amount": 0.148
			},
			{
				"color": [124, 124, 96],
				"amount": 0.102
			},
			{
				"color": [90, 136, 95],
				"amount": 0.073
			},
			{
				"color": [100, 148, 124],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Weeping Vines",
		"namespacedId": "weeping_vines",
		"description": "Weeping vines are fungi blocks found in the Nether in crimson forest. Their \"warped\" equivalent are twisting vines.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/weeping_vines.png",
		"item": "Weeping Vines",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [108, 4, 4],
				"amount": 0.441
			},
			{
				"color": [92, 4, 4],
				"amount": 0.283
			},
			{
				"color": [124, 4, 4],
				"amount": 0.239
			},
			{
				"color": [116, 4, 4],
				"amount": 0.02
			},
			{
				"color": [100, 4, 4],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Weeping Vines Plant",
		"namespacedId": "weeping_vines_plant",
		"description": "Weeping vines are fungi blocks found in the Nether in crimson forest. Their \"warped\" equivalent are twisting vines.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/weeping_vines_plant.png",
		"item": "Weeping Vines",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [111, 4, 4],
				"amount": 0.413
			},
			{
				"color": [196, 52, 56],
				"amount": 0.306
			},
			{
				"color": [167, 37, 43],
				"amount": 0.227
			},
			{
				"color": [249, 98, 4],
				"amount": 0.039
			},
			{
				"color": [146, 28, 29],
				"amount": 0.014
			}
		]
	},
	{
		"name": "Wet Sponge",
		"namespacedId": "wet_sponge",
		"description": "A sponge is a block that can be used to remove water around itself when placed, turning into a wet sponge in the process.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/wet_sponge.png",
		"item": "Wet Sponge",
		"tool": "Hoe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.6,
		"colors": [
			{
				"color": [111, 117, 46],
				"amount": 0.579
			},
			{
				"color": [181, 188, 72],
				"amount": 0.29
			},
			{
				"color": [149, 159, 62],
				"amount": 0.093
			},
			{
				"color": [159, 174, 70],
				"amount": 0.023
			},
			{
				"color": [139, 153, 60],
				"amount": 0.016
			}
		]
	},
	{
		"name": "Wheat Crops",
		"namespacedId": "wheat",
		"description": "Wheat seeds (in Java Edition) or seeds (in Bedrock Edition) are items used in farming.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/wheat.png",
		"item": "Wheat Seeds",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [189, 166, 88],
				"amount": 0.672
			},
			{
				"color": [108, 115, 34],
				"amount": 0.185
			},
			{
				"color": [139, 133, 55],
				"amount": 0.132
			}
		]
	},
	{
		"name": "White Banner",
		"namespacedId": "white_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_banner.png",
		"item": "White Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [179, 180, 179],
				"amount": 0.872
			},
			{
				"color": [87, 70, 45],
				"amount": 0.08
			},
			{
				"color": [107, 108, 108],
				"amount": 0.035
			}
		]
	},
	{
		"name": "White Bed",
		"namespacedId": "white_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_bed.png",
		"item": "White Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [87, 76, 61],
				"amount": 0.538
			},
			{
				"color": [226, 229, 229],
				"amount": 0.36
			},
			{
				"color": [115, 117, 117],
				"amount": 0.058
			},
			{
				"color": [143, 146, 146],
				"amount": 0.031
			},
			{
				"color": [124, 132, 132],
				"amount": 0.013
			}
		]
	},
	{
		"name": "White Candle",
		"namespacedId": "white_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_candle.png",
		"item": "White Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [173, 178, 180],
				"amount": 0.594
			},
			{
				"color": [124, 132, 132],
				"amount": 0.265
			},
			{
				"color": [139, 140, 140],
				"amount": 0.08
			},
			{
				"color": [20, 19, 35],
				"amount": 0.057
			}
		]
	},
	{
		"name": "White Carpet",
		"namespacedId": "white_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_carpet.png",
		"item": "White Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [228, 231, 231],
				"amount": 0.749
			},
			{
				"color": [146, 148, 150],
				"amount": 0.214
			},
			{
				"color": [184, 188, 188],
				"amount": 0.017
			},
			{
				"color": [180, 180, 180],
				"amount": 0.012
			}
		]
	},
	{
		"name": "White Concrete",
		"namespacedId": "white_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_concrete.png",
		"item": "White Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [164, 172, 172],
				"amount": 0.462
			},
			{
				"color": [124, 132, 132],
				"amount": 0.437
			},
			{
				"color": [204, 204, 211],
				"amount": 0.044
			},
			{
				"color": [204, 212, 212],
				"amount": 0.044
			},
			{
				"color": [179, 183, 185],
				"amount": 0.014
			}
		]
	},
	{
		"name": "White Concrete Powder",
		"namespacedId": "white_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_concrete_powder.png",
		"item": "White Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [153, 154, 154],
				"amount": 0.607
			},
			{
				"color": [224, 225, 225],
				"amount": 0.266
			},
			{
				"color": [211, 214, 215],
				"amount": 0.072
			},
			{
				"color": [189, 189, 189],
				"amount": 0.051
			}
		]
	},
	{
		"name": "White Glazed Terracotta",
		"namespacedId": "white_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_glazed_terracotta.png",
		"item": "White Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [196, 199, 192],
				"amount": 0.544
			},
			{
				"color": [40, 115, 164],
				"amount": 0.32
			},
			{
				"color": [195, 166, 58],
				"amount": 0.118
			},
			{
				"color": [114, 141, 162],
				"amount": 0.015
			}
		]
	},
	{
		"name": "White Shulker Box",
		"namespacedId": "white_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_shulker_box.png",
		"item": "White Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [132, 135, 136],
				"amount": 0.522
			},
			{
				"color": [216, 220, 220],
				"amount": 0.321
			},
			{
				"color": [184, 189, 190],
				"amount": 0.13
			},
			{
				"color": [174, 176, 176],
				"amount": 0.022
			}
		]
	},
	{
		"name": "White Stained Glass",
		"namespacedId": "white_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_stained_glass.png",
		"item": "White Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [249, 249, 249],
				"amount": 0.348
			},
			{
				"color": [164, 164, 164],
				"amount": 0.303
			},
			{
				"color": [212, 212, 212],
				"amount": 0.302
			},
			{
				"color": [156, 156, 156],
				"amount": 0.026
			},
			{
				"color": [204, 204, 212],
				"amount": 0.022
			}
		]
	},
	{
		"name": "White Stained Glass Pane",
		"namespacedId": "white_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_stained_glass_pane.png",
		"item": "White Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [149, 149, 149],
				"amount": 0.574
			},
			{
				"color": [205, 205, 205],
				"amount": 0.37
			},
			{
				"color": [242, 242, 242],
				"amount": 0.052
			}
		]
	},
	{
		"name": "White Terracotta",
		"namespacedId": "white_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_terracotta.png",
		"item": "White Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [204, 173, 157],
				"amount": 0.434
			},
			{
				"color": [128, 108, 99],
				"amount": 0.326
			},
			{
				"color": [168, 142, 130],
				"amount": 0.23
			}
		]
	},
	{
		"name": "White Tulip",
		"namespacedId": "white_tulip",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_tulip.png",
		"item": "White Tulip",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [48, 133, 21],
				"amount": 0.611
			},
			{
				"color": [221, 232, 232],
				"amount": 0.24
			},
			{
				"color": [84, 167, 44],
				"amount": 0.097
			},
			{
				"color": [156, 188, 188],
				"amount": 0.052
			}
		]
	},
	{
		"name": "White Wall Banner",
		"namespacedId": "white_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_wall_banner.png",
		"item": "White Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [178, 180, 179],
				"amount": 0.91
			},
			{
				"color": [91, 74, 48],
				"amount": 0.057
			},
			{
				"color": [107, 108, 108],
				"amount": 0.026
			}
		]
	},
	{
		"name": "White Wool",
		"namespacedId": "white_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/white_wool.png",
		"item": "White Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [151, 154, 154],
				"amount": 0.507
			},
			{
				"color": [233, 235, 235],
				"amount": 0.343
			},
			{
				"color": [195, 196, 196],
				"amount": 0.093
			},
			{
				"color": [212, 220, 220],
				"amount": 0.033
			},
			{
				"color": [207, 211, 213],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Wither Rose",
		"namespacedId": "wither_rose",
		"description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/wither_rose.png",
		"item": "Wither Rose",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0,
		"colors": [
			{
				"color": [60, 61, 32],
				"amount": 0.33
			},
			{
				"color": [35, 24, 22],
				"amount": 0.281
			},
			{
				"color": [41, 49, 20],
				"amount": 0.271
			},
			{
				"color": [18, 34, 12],
				"amount": 0.116
			}
		]
	},
	{
		"name": "Wither Skeleton Skull",
		"namespacedId": "wither_skeleton_skull",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/wither_skeleton_skull.png",
		"item": "Wither Skeleton Skull",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [42, 43, 43],
				"amount": 0.392
			},
			{
				"color": [10, 10, 10],
				"amount": 0.245
			},
			{
				"color": [28, 28, 28],
				"amount": 0.196
			},
			{
				"color": [20, 20, 20],
				"amount": 0.161
			}
		]
	},
	{
		"name": "Wither Skeleton Wall Skull",
		"namespacedId": "wither_skeleton_wall_skull",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/wither_skeleton_wall_skull.png",
		"item": "Wither Skeleton Skull",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [42, 43, 43],
				"amount": 0.392
			},
			{
				"color": [10, 10, 10],
				"amount": 0.245
			},
			{
				"color": [28, 28, 28],
				"amount": 0.196
			},
			{
				"color": [20, 20, 20],
				"amount": 0.161
			}
		]
	},
	{
		"name": "Yellow Banner",
		"namespacedId": "yellow_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_banner.png",
		"item": "Yellow Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [178, 154, 43],
				"amount": 0.898
			},
			{
				"color": [82, 64, 41],
				"amount": 0.051
			},
			{
				"color": [108, 92, 29],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Yellow Bed",
		"namespacedId": "yellow_bed",
		"description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_bed.png",
		"item": "Yellow Bed",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.2,
		"colors": [
			{
				"color": [109, 83, 28],
				"amount": 0.386
			},
			{
				"color": [214, 218, 218],
				"amount": 0.303
			},
			{
				"color": [251, 205, 44],
				"amount": 0.182
			},
			{
				"color": [239, 175, 20],
				"amount": 0.125
			}
		]
	},
	{
		"name": "Yellow Candle",
		"namespacedId": "yellow_candle",
		"description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_candle.png",
		"item": "Yellow Candle",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 3,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [152, 118, 34],
				"amount": 0.853
			},
			{
				"color": [210, 167, 55],
				"amount": 0.085
			},
			{
				"color": [20, 20, 36],
				"amount": 0.041
			},
			{
				"color": [116, 92, 20],
				"amount": 0.018
			}
		]
	},
	{
		"name": "Yellow Carpet",
		"namespacedId": "yellow_carpet",
		"description": "Carpets are thin blocks which are mainly used for decoration.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_carpet.png",
		"item": "Yellow Carpet",
		"tool": null,
		"flammable": true,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.1,
		"colors": [
			{
				"color": [244, 195, 39],
				"amount": 0.705
			},
			{
				"color": [152, 121, 24],
				"amount": 0.201
			},
			{
				"color": [203, 164, 33],
				"amount": 0.043
			},
			{
				"color": [235, 172, 21],
				"amount": 0.027
			},
			{
				"color": [196, 148, 20],
				"amount": 0.024
			}
		]
	},
	{
		"name": "Yellow Concrete",
		"namespacedId": "yellow_concrete",
		"description": "Concrete is a solid block available in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_concrete.png",
		"item": "Yellow Concrete",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.8,
		"colors": [
			{
				"color": [194, 140, 20],
				"amount": 0.565
			},
			{
				"color": [236, 172, 20],
				"amount": 0.38
			},
			{
				"color": [148, 108, 12],
				"amount": 0.053
			}
		]
	},
	{
		"name": "Yellow Concrete Powder",
		"namespacedId": "yellow_concrete_powder",
		"description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_concrete_powder.png",
		"item": "Yellow Concrete Powder",
		"tool": "Shovel",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 0.5,
		"colors": [
			{
				"color": [163, 139, 37],
				"amount": 0.726
			},
			{
				"color": [231, 201, 58],
				"amount": 0.179
			},
			{
				"color": [224, 187, 46],
				"amount": 0.082
			},
			{
				"color": [216, 205, 150],
				"amount": 0.013
			}
		]
	},
	{
		"name": "Yellow Glazed Terracotta",
		"namespacedId": "yellow_glazed_terracotta",
		"description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_glazed_terracotta.png",
		"item": "Yellow Glazed Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 1.4,
		"colors": [
			{
				"color": [166, 132, 52],
				"amount": 0.561
			},
			{
				"color": [231, 215, 151],
				"amount": 0.299
			},
			{
				"color": [232, 175, 32],
				"amount": 0.071
			},
			{
				"color": [108, 78, 49],
				"amount": 0.036
			},
			{
				"color": [247, 210, 82],
				"amount": 0.034
			}
		]
	},
	{
		"name": "Yellow Shulker Box",
		"namespacedId": "yellow_shulker_box",
		"description": "A shulker box is a block that can store and transport items.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_shulker_box.png",
		"item": "Yellow Shulker Box",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": null,
		"colors": [
			{
				"color": [221, 168, 26],
				"amount": 0.669
			},
			{
				"color": [142, 104, 12],
				"amount": 0.208
			},
			{
				"color": [157, 116, 17],
				"amount": 0.063
			},
			{
				"color": [161, 124, 18],
				"amount": 0.057
			}
		]
	},
	{
		"name": "Yellow Stained Glass",
		"namespacedId": "yellow_stained_glass",
		"description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_stained_glass.png",
		"item": "Yellow Stained Glass",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [188, 188, 44],
				"amount": 0.592
			},
			{
				"color": [227, 227, 51],
				"amount": 0.32
			},
			{
				"color": [140, 140, 35],
				"amount": 0.056
			},
			{
				"color": [196, 196, 44],
				"amount": 0.026
			}
		]
	},
	{
		"name": "Yellow Stained Glass Pane",
		"namespacedId": "yellow_stained_glass_pane",
		"description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_stained_glass_pane.png",
		"item": "Yellow Stained Glass Pane",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 0.3,
		"colors": [
			{
				"color": [135, 135, 28],
				"amount": 0.477
			},
			{
				"color": [180, 180, 44],
				"amount": 0.384
			},
			{
				"color": [215, 215, 46],
				"amount": 0.126
			}
		]
	},
	{
		"name": "Yellow Terracotta",
		"namespacedId": "yellow_terracotta",
		"description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_terracotta.png",
		"item": "Yellow Terracotta",
		"tool": "Pickaxe",
		"flammable": false,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 4.2,
		"colors": [
			{
				"color": [181, 130, 35],
				"amount": 0.429
			},
			{
				"color": [115, 82, 20],
				"amount": 0.298
			},
			{
				"color": [148, 107, 28],
				"amount": 0.26
			}
		]
	},
	{
		"name": "Yellow Wall Banner",
		"namespacedId": "yellow_wall_banner",
		"description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_wall_banner.png",
		"item": "Yellow Banner",
		"tool": "Axe",
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [179, 155, 44],
				"amount": 0.913
			},
			{
				"color": [97, 80, 37],
				"amount": 0.075
			}
		]
	},
	{
		"name": "Yellow Wool",
		"namespacedId": "yellow_wool",
		"description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/yellow_wool.png",
		"item": "Yellow Wool",
		"tool": "Shears",
		"flammable": true,
		"transparent": false,
		"luminance": 0,
		"blastResistance": 2,
		"colors": [
			{
				"color": [243, 193, 38],
				"amount": 0.453
			},
			{
				"color": [199, 158, 31],
				"amount": 0.326
			},
			{
				"color": [150, 118, 21],
				"amount": 0.144
			},
			{
				"color": [156, 132, 34],
				"amount": 0.076
			}
		]
	},
	{
		"name": "Zombie Head",
		"namespacedId": "zombie_head",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/zombie_head.png",
		"item": "Zombie Head",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [68, 105, 51],
				"amount": 0.461
			},
			{
				"color": [34, 55, 25],
				"amount": 0.361
			},
			{
				"color": [55, 85, 42],
				"amount": 0.16
			},
			{
				"color": [52, 68, 44],
				"amount": 0.011
			}
		]
	},
	{
		"name": "Zombie Wall Head",
		"namespacedId": "zombie_wall_head",
		"description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
		"image": "https://minecraft-storage.vercel.app/images/blocks/zombie_wall_head.png",
		"item": "Zombie Head",
		"tool": null,
		"flammable": false,
		"transparent": true,
		"luminance": 0,
		"blastResistance": 1,
		"colors": [
			{
				"color": [68, 105, 51],
				"amount": 0.461
			},
			{
				"color": [34, 55, 25],
				"amount": 0.361
			},
			{
				"color": [55, 85, 42],
				"amount": 0.16
			},
			{
				"color": [52, 68, 44],
				"amount": 0.011
			}
		]
	}
]

const insertBlocks = async () => {
	try {
		const items = await Item.find();
		for (const block of blocks) {
			if (block.item) {
				const item = items.find(item => item.name === block.item);
				block.item = item._id;
			} else {
				console.log(block.item);
			}
			const createdBlock = await Block.create(block);
			console.log(createdBlock.name, createdBlock._id);
		}
	} catch (error) {
		console.log(`Error: ${error}`);
	}
}

insertBlocks();