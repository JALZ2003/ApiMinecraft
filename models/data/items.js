import "dotenv/config.js";
import "../../config/connectionDb.js";
import Item from "../Item.js";

const items = [
  {
    "name": "Acacia Boat",
    "namespacedId": "acacia_boat",
    "description": "A boat is both an item and a vehicle entity used primarily for fast transport of players and passenger mobs over bodies of water.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_boat.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Acacia Button",
    "namespacedId": "acacia_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Door",
    "namespacedId": "acacia_door",
    "description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_door.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Fence",
    "namespacedId": "acacia_fence",
    "description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_fence.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Fence Gate",
    "namespacedId": "acacia_fence_gate",
    "description": "A fence gate is a block that shares the functions of both the door and the fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_fence_gate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Leaves",
    "namespacedId": "acacia_leaves",
    "description": "Leaves are natural blocks that generate as part of trees.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_leaves.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Log",
    "namespacedId": "acacia_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Planks",
    "namespacedId": "acacia_planks",
    "description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_planks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Pressure Plate",
    "namespacedId": "acacia_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Sapling",
    "namespacedId": "acacia_sapling",
    "description": "A sapling is a non-solid block that can be grown into a tree.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_sapling.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Sign",
    "namespacedId": "acacia_sign",
    "description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_sign.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Acacia Slab",
    "namespacedId": "acacia_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Stairs",
    "namespacedId": "acacia_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Trapdoor",
    "namespacedId": "acacia_trapdoor",
    "description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_trapdoor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Acacia Wood",
    "namespacedId": "acacia_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/acacia_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Activator Rail",
    "namespacedId": "activator_rail",
    "description": "An activator rail is a type of rail that can \"activate\" certain minecarts.",
    "image": "https://minecraft-storage.vercel.app/images/items/activator_rail.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Allium",
    "namespacedId": "allium",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/allium.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Amethyst Cluster",
    "namespacedId": "amethyst_cluster",
    "description": "Amethyst buds are the first three stages of growth of amethyst clusters, which grow on budding amethyst.",
    "image": "https://minecraft-storage.vercel.app/images/items/amethyst_cluster.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Amethyst Shard",
    "namespacedId": "amethyst_shard",
    "description": "An amethyst shard is a crystal obtained from mining a fully grown amethyst cluster.",
    "image": "https://minecraft-storage.vercel.app/images/items/amethyst_shard.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Ancient Debris",
    "namespacedId": "ancient_debris",
    "description": "Ancient debris is a rare ore found in the Nether, and is the main source of netherite scraps. Its high blast resistance makes it immune to normal explosions. In item form, it floats on lava and cannot be burned by any form of fire.",
    "image": "https://minecraft-storage.vercel.app/images/items/ancient_debris.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Andesite",
    "namespacedId": "andesite",
    "description": "Andesite is a block of igneous rock, most often found in large pockets in the ground.",
    "image": "https://minecraft-storage.vercel.app/images/items/andesite.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Andesite Slab",
    "namespacedId": "andesite_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/andesite_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Andesite Stairs",
    "namespacedId": "andesite_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/andesite_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Andesite Wall",
    "namespacedId": "andesite_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/andesite_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Anvil",
    "namespacedId": "anvil",
    "description": "An anvil is a block that allows players to repair items, rename items, and combine enchantments.",
    "image": "https://minecraft-storage.vercel.app/images/items/anvil.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Apple",
    "namespacedId": "apple",
    "description": "Apples are food items that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/apple.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Armor Stand",
    "namespacedId": "armor_stand",
    "description": "Armor stands are entities that are able to hold and display wearable items.",
    "image": "https://minecraft-storage.vercel.app/images/items/armor_stand.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Arrow",
    "namespacedId": "arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Fire Resistance",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_fire_resistance.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Harming",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_harming.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Healing",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_healing.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Invisibility",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_invisibility.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Leaping",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_leaping.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Luck",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_luck.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Arrow of Night Vision",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_night_vision.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Poison",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_poison.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Regeneration",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_regeneration.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Slow Falling",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_slow_falling.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Slowness",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_slowness.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Splashing",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_splashing.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Strength",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_strength.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Swiftness",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_swiftness.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Water Breathing",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_water_breathing.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of Weakness",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_weakness.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Arrow of the Turtle Master",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/arrow_of_the_turtle_master.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Awkward Lingering Potion",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/awkward_lingering_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Awkward Potion",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/awkward_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Awkward Splash Potion",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/awkward_splash_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Axolotl Spawn Egg",
    "namespacedId": "axolotl_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/axolotl_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Azalea",
    "namespacedId": "azalea",
    "description": "An azalea is a solid block that can be grown into an azalea tree.",
    "image": "https://minecraft-storage.vercel.app/images/items/azalea.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Azalea Leaves",
    "namespacedId": "azalea_leaves",
    "description": "Leaves are natural blocks that generate as part of trees.",
    "image": "https://minecraft-storage.vercel.app/images/items/azalea_leaves.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Azure Bluet",
    "namespacedId": "azure_bluet",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/azure_bluet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Baked Potato",
    "namespacedId": "baked_potato",
    "description": "A baked potato is a food item that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/baked_potato.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bamboo",
    "namespacedId": "bamboo",
    "description": "Bamboo is a plant found in jungles, and can be used as fuel for smelting or cooking, to breed pandas, or in crafting scaffolding and sticks. Bamboo is the fastest growing plant in Minecraft.",
    "image": "https://minecraft-storage.vercel.app/images/items/bamboo.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Banner Pattern (Creeper Charge)",
    "namespacedId": "creeper_banner_pattern",
    "description": "Banner patterns are items used to customize banners inside looms.\nThere are six patterns in Java Edition and seven in Bedrock Edition.",
    "image": "https://minecraft-storage.vercel.app/images/items/banner_pattern.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Banner Pattern (Flower Charge)",
    "namespacedId": "flower_banner_pattern",
    "description": "Banner patterns are items used to customize banners inside looms.\nThere are six patterns in Java Edition and seven in Bedrock Edition.",
    "image": "https://minecraft-storage.vercel.app/images/items/banner_pattern.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Banner Pattern (Globe)",
    "namespacedId": "globe_banner_pattern",
    "description": "Banner patterns are items used to customize banners inside looms.\nThere are six patterns in Java Edition and seven in Bedrock Edition.",
    "image": "https://minecraft-storage.vercel.app/images/items/banner_pattern.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Banner Pattern (Skull Charge)",
    "namespacedId": "skull_banner_pattern",
    "description": "Banner patterns are items used to customize banners inside looms.\nThere are six patterns in Java Edition and seven in Bedrock Edition.",
    "image": "https://minecraft-storage.vercel.app/images/items/banner_pattern.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Banner Pattern (Snout)",
    "namespacedId": "piglin_banner_pattern",
    "description": "Banner patterns are items used to customize banners inside looms.\nThere are six patterns in Java Edition and seven in Bedrock Edition.",
    "image": "https://minecraft-storage.vercel.app/images/items/banner_pattern.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Banner Pattern (Thing)",
    "namespacedId": "mojang_banner_pattern",
    "description": "Banner patterns are items used to customize banners inside looms.\nThere are six patterns in Java Edition and seven in Bedrock Edition.",
    "image": "https://minecraft-storage.vercel.app/images/items/banner_pattern.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Barrel",
    "namespacedId": "barrel",
    "description": "A barrel is a fisherman's job site block, used to store items. It functions like a single chest although it requires no air space above it to be opened.",
    "image": "https://minecraft-storage.vercel.app/images/items/barrel.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Barrier",
    "namespacedId": "barrier",
    "description": "A barrier is an invisible block used to create solid boundaries.",
    "image": "https://minecraft-storage.vercel.app/images/items/barrier.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Basalt",
    "namespacedId": "basalt",
    "description": "Basalt is an igneous rock found in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/basalt.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bat Spawn Egg",
    "namespacedId": "bat_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/bat_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Beacon",
    "namespacedId": "beacon",
    "description": "A beacon is a block that projects a light beam skyward and can provide status effects such as Speed, Jump Boost, Haste, Regeneration, Resistance, or Strength to nearby players.",
    "image": "https://minecraft-storage.vercel.app/images/items/beacon.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bedrock",
    "namespacedId": "bedrock",
    "description": "Bedrock is a block that is normally indestructible in Survival.",
    "image": "https://minecraft-storage.vercel.app/images/items/bedrock.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Bee Nest",
    "namespacedId": "bee_nest",
    "description": "Bee nests are naturally generated blocks that house bees.",
    "image": "https://minecraft-storage.vercel.app/images/items/bee_nest.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bee Spawn Egg",
    "namespacedId": "bee_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/bee_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Beehive",
    "namespacedId": "beehive",
    "description": "Bee nests are naturally generated blocks that house bees.",
    "image": "https://minecraft-storage.vercel.app/images/items/beehive.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Beetroot",
    "namespacedId": "beetroot",
    "description": "A beetroot is a food and dye ingredient.",
    "image": "https://minecraft-storage.vercel.app/images/items/beetroot.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Beetroot Seeds",
    "namespacedId": "beetroot_seeds",
    "description": "Beetroot seeds are items that can be used to plant beetroot crops.",
    "image": "https://minecraft-storage.vercel.app/images/items/beetroot_seeds.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Beetroot Soup",
    "namespacedId": "beetroot_soup",
    "description": "Beetroot soup is an unstackable food item.",
    "image": "https://minecraft-storage.vercel.app/images/items/beetroot_soup.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Bell",
    "namespacedId": "bell",
    "description": "A bell is a transparent animated block entity that produces a sound when used. Unlike most utility blocks, bells cannot be crafted.",
    "image": "https://minecraft-storage.vercel.app/images/items/bell.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Big Dripleaf",
    "namespacedId": "big_dripleaf",
    "description": "A big dripleaf is a plant that generates within lush caves. It may be used as a block for parkour and platforming.",
    "image": "https://minecraft-storage.vercel.app/images/items/big_dripleaf.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Boat",
    "namespacedId": "birch_boat",
    "description": "A boat is both an item and a vehicle entity used primarily for fast transport of players and passenger mobs over bodies of water.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_boat.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Birch Button",
    "namespacedId": "birch_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Door",
    "namespacedId": "birch_door",
    "description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_door.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Fence",
    "namespacedId": "birch_fence",
    "description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_fence.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Fence Gate",
    "namespacedId": "birch_fence_gate",
    "description": "A fence gate is a block that shares the functions of both the door and the fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_fence_gate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Leaves",
    "namespacedId": "birch_leaves",
    "description": "Leaves are natural blocks that generate as part of trees.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_leaves.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Log",
    "namespacedId": "birch_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Planks",
    "namespacedId": "birch_planks",
    "description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_planks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Pressure Plate",
    "namespacedId": "birch_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Sapling",
    "namespacedId": "birch_sapling",
    "description": "A sapling is a non-solid block that can be grown into a tree.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_sapling.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Sign",
    "namespacedId": "birch_sign",
    "description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_sign.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Birch Slab",
    "namespacedId": "birch_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Stairs",
    "namespacedId": "birch_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Trapdoor",
    "namespacedId": "birch_trapdoor",
    "description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_trapdoor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Birch Wood",
    "namespacedId": "birch_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/birch_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Black Banner",
    "namespacedId": "black_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Black Bed",
    "namespacedId": "black_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Black Candle",
    "namespacedId": "black_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Black Carpet",
    "namespacedId": "black_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Black Concrete",
    "namespacedId": "black_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Black Concrete Powder",
    "namespacedId": "black_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Black Dye",
    "namespacedId": "black_dye",
    "description": "Black dye is a primary color dye similar to an ink sac.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Black Glazed Terracotta",
    "namespacedId": "black_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Black Shulker Box",
    "namespacedId": "black_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Black Stained Glass",
    "namespacedId": "black_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Black Stained Glass Pane",
    "namespacedId": "black_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Black Terracotta",
    "namespacedId": "black_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Black Wool",
    "namespacedId": "black_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/black_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blackstone",
    "namespacedId": "blackstone",
    "description": "Blackstone is a dark-colored block that functions similar to cobblestone or cobbled deepslate. It can be found only in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/blackstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blackstone Slab",
    "namespacedId": "blackstone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/blackstone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blackstone Stairs",
    "namespacedId": "blackstone_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/blackstone_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blackstone Wall",
    "namespacedId": "blackstone_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/blackstone_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blast Furnace",
    "namespacedId": "blast_furnace",
    "description": "A blast furnace is a block that smelts ores, raw metals, iron and gold armor and tools, similar to a furnace, but at twice the rate. It also serves as an armorer's job site block.",
    "image": "https://minecraft-storage.vercel.app/images/items/blast_furnace.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blaze Powder",
    "namespacedId": "blaze_powder",
    "description": "Blaze powder is an item made from a blaze rod obtained from blazes. Its main uses are to fuel brewing stands, to brew strength potions, and to make eyes of ender to take the player to the End.",
    "image": "https://minecraft-storage.vercel.app/images/items/blaze_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blaze Rod",
    "namespacedId": "blaze_rod",
    "description": "Blaze rods are items exclusively obtained from blazes. They act as an essential ingredient in brewing, as a fuel for both brewing and smelting, and for crafting the eye of ender that leads the player to the End.",
    "image": "https://minecraft-storage.vercel.app/images/items/blaze_rod.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blaze Spawn Egg",
    "namespacedId": "blaze_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/blaze_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Block of Amethyst",
    "namespacedId": "amethyst_block",
    "description": "A block of amethyst is a decorative block crafted from four amethyst shards.",
    "image": "https://minecraft-storage.vercel.app/images/items/amethyst_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Block of Coal",
    "namespacedId": "coal_block",
    "description": "A block of coal is a mineral block that can also be used as a fuel.",
    "image": "https://minecraft-storage.vercel.app/images/items/coal_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Block of Copper",
    "namespacedId": "copper_block",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/copper_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Block of Diamond",
    "namespacedId": "diamond_block",
    "description": "A block of diamond is a precious mineral block equivalent to nine diamonds.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_block.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Block of Emerald",
    "namespacedId": "emerald_block",
    "description": "A block of emerald is a precious mineral block.",
    "image": "https://minecraft-storage.vercel.app/images/items/emerald_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Block of Gold",
    "namespacedId": "gold_block",
    "description": "A block of gold is a precious metal block equivalent to nine gold ingots.",
    "image": "https://minecraft-storage.vercel.app/images/items/gold_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Block of Iron",
    "namespacedId": "iron_block",
    "description": "A block of iron is a precious metal block equivalent to nine iron ingots.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Block of Lapis Lazuli",
    "namespacedId": "lapis_block",
    "description": "A block of lapis lazuli is a decorative mineral block that is crafted from lapis lazuli. It is a medium blue color, with darker and lighter blue markings on it.",
    "image": "https://minecraft-storage.vercel.app/images/items/lapis_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Block of Netherite",
    "namespacedId": "netherite_block",
    "description": "A block of netherite is a precious metal block made from nine netherite ingots. Unlike most items, it is resistant to fire and lava.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_block.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Block of Quartz",
    "namespacedId": "quartz_block",
    "description": "A block of quartz is a mineral block used only for decoration. It can be turned into a chiseled quartz block, quartz pillar, or quartz bricks.",
    "image": "https://minecraft-storage.vercel.app/images/items/quartz_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Block of Raw Copper",
    "namespacedId": "raw_copper_block",
    "description": "A block of raw copper is a raw metal block equivalent to nine raw copper.",
    "image": "https://minecraft-storage.vercel.app/images/items/raw_copper_block.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Block of Raw Gold",
    "namespacedId": "raw_gold_block",
    "description": "A block of raw gold is a raw metal block equivalent to nine raw gold.",
    "image": "https://minecraft-storage.vercel.app/images/items/raw_gold_block.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Block of Raw Iron",
    "namespacedId": "raw_iron_block",
    "description": "A block of raw iron is a raw metal block equivalent to nine raw iron.",
    "image": "https://minecraft-storage.vercel.app/images/items/raw_iron_block.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Block of Redstone",
    "namespacedId": "redstone_block",
    "description": "A block of redstone is a mineral block equivalent to nine redstone dust. It acts as a permanently powered redstone power source that can be pushed by pistons.",
    "image": "https://minecraft-storage.vercel.app/images/items/redstone_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Banner",
    "namespacedId": "blue_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Blue Bed",
    "namespacedId": "blue_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Blue Candle",
    "namespacedId": "blue_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Carpet",
    "namespacedId": "blue_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Concrete",
    "namespacedId": "blue_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Concrete Powder",
    "namespacedId": "blue_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Dye",
    "namespacedId": "blue_dye",
    "description": "Blue dye is a primary dye color.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Glazed Terracotta",
    "namespacedId": "blue_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Blue Ice",
    "namespacedId": "blue_ice",
    "description": "Blue ice is a solid block similar to packed ice and ice, but much more slippery.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_ice.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Orchid",
    "namespacedId": "blue_orchid",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_orchid.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Shulker Box",
    "namespacedId": "blue_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Blue Stained Glass",
    "namespacedId": "blue_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Stained Glass Pane",
    "namespacedId": "blue_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Blue Terracotta",
    "namespacedId": "blue_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Blue Wool",
    "namespacedId": "blue_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/blue_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bone",
    "namespacedId": "bone",
    "description": "A bone is an item primarily obtained as a drop from skeletons and their variants.",
    "image": "https://minecraft-storage.vercel.app/images/items/bone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bone Block",
    "namespacedId": "bone_block",
    "description": "Bone blocks are storage blocks equivalent to nine pieces of bone meal.",
    "image": "https://minecraft-storage.vercel.app/images/items/bone_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bone Meal",
    "namespacedId": "bone_meal",
    "description": "Bone meal is a material that can be used as a fertilizer for most plants, as well as a crafting ingredient for dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/bone_meal.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Book",
    "namespacedId": "book",
    "description": "Books are items used in enchanting and crafting.",
    "image": "https://minecraft-storage.vercel.app/images/items/book.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Book and Quill",
    "namespacedId": "writable_book",
    "description": "A book and quill is an item used to write written books.",
    "image": "https://minecraft-storage.vercel.app/images/items/writable_book.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Bookshelf",
    "namespacedId": "bookshelf",
    "description": "Bookshelves are decorative blocks that primarily serve to enhance enchanting with an enchanting table.",
    "image": "https://minecraft-storage.vercel.app/images/items/bookshelf.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bottle o' Enchanting",
    "namespacedId": "experience_bottle",
    "description": "A bottle o' enchanting is a bottle that releases experience orbs when thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/experience_bottle.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bow",
    "namespacedId": "bow",
    "description": "A bow is a ranged weapon that shoots arrows.",
    "image": "https://minecraft-storage.vercel.app/images/items/bow.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Bowl",
    "namespacedId": "bowl",
    "description": "Bowls are containers that can hold certain foods.",
    "image": "https://minecraft-storage.vercel.app/images/items/bowl.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brain Coral",
    "namespacedId": "brain_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/brain_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brain Coral Block",
    "namespacedId": "brain_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/brain_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brain Coral Fan",
    "namespacedId": "brain_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/brain_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bread",
    "namespacedId": "bread",
    "description": "Bread is a food item that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/bread.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brewing Stand",
    "namespacedId": "brewing_stand",
    "description": "A brewing stand is a block used for brewing potions, splash potions and lingering potions. They are a cleric's job site block generated in village churches.",
    "image": "https://minecraft-storage.vercel.app/images/items/brewing_stand.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brick",
    "namespacedId": "brick",
    "description": "Brick is an item used to craft the bricks block and flower pots.",
    "image": "https://minecraft-storage.vercel.app/images/items/brick.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brick Slab",
    "namespacedId": "brick_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/brick_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brick Stairs",
    "namespacedId": "brick_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/brick_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brick Wall",
    "namespacedId": "brick_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/brick_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bricks",
    "namespacedId": "bricks",
    "description": "Bricks are a decorative building block.",
    "image": "https://minecraft-storage.vercel.app/images/items/bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Banner",
    "namespacedId": "brown_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Brown Bed",
    "namespacedId": "brown_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Brown Candle",
    "namespacedId": "brown_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Carpet",
    "namespacedId": "brown_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Concrete",
    "namespacedId": "brown_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Concrete Powder",
    "namespacedId": "brown_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Dye",
    "namespacedId": "brown_dye",
    "description": "Brown dye is a primary color dye derived from cocoa beans.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Glazed Terracotta",
    "namespacedId": "brown_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Brown Mushroom",
    "namespacedId": "brown_mushroom",
    "description": "A mushroom is a variety of fungus that grows and spreads in dark areas. Mushrooms generate as red or brown in color, and small or huge in size.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_mushroom.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Mushroom Block",
    "namespacedId": "brown_mushroom_block",
    "description": "Mushroom blocks are solid blocks that make up huge mushrooms.\nThere are 3 kinds of mushroom blocks: red mushroom block, brown mushroom block and mushroom stem.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_mushroom_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Shulker Box",
    "namespacedId": "brown_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Brown Stained Glass",
    "namespacedId": "brown_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Stained Glass Pane",
    "namespacedId": "brown_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Brown Terracotta",
    "namespacedId": "brown_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Brown Wool",
    "namespacedId": "brown_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/brown_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bubble Coral",
    "namespacedId": "bubble_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/bubble_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bubble Coral Block",
    "namespacedId": "bubble_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/bubble_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bubble Coral Fan",
    "namespacedId": "bubble_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/bubble_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Bucket",
    "namespacedId": "bucket",
    "description": "Buckets are tools used to carry water, lava, milk, powder snow, live fish (cod, pufferfish, salmon, and tropical fish), and axolotls.",
    "image": "https://minecraft-storage.vercel.app/images/items/bucket.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Bucket of Axolotl",
    "namespacedId": "axolotl_bucket",
    "description": "A bucket of aquatic mob is a form of a water bucket with a mob inside.",
    "image": "https://minecraft-storage.vercel.app/images/items/axolotl_bucket.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Bucket of Cod",
    "namespacedId": "cod_bucket",
    "description": "A bucket of aquatic mob is a form of a water bucket with a mob inside.",
    "image": "https://minecraft-storage.vercel.app/images/items/cod_bucket.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Bucket of Pufferfish",
    "namespacedId": "pufferfish_bucket",
    "description": "A bucket of aquatic mob is a form of a water bucket with a mob inside.",
    "image": "https://minecraft-storage.vercel.app/images/items/pufferfish_bucket.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Bucket of Salmon",
    "namespacedId": "salmon_bucket",
    "description": "A bucket of aquatic mob is a form of a water bucket with a mob inside.",
    "image": "https://minecraft-storage.vercel.app/images/items/salmon_bucket.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Bucket of Tropical Fish",
    "namespacedId": "tropical_fish_bucket",
    "description": "A bucket of aquatic mob is a form of a water bucket with a mob inside.",
    "image": "https://minecraft-storage.vercel.app/images/items/tropical_fish_bucket.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Budding Amethyst",
    "namespacedId": "budding_amethyst",
    "description": "Budding amethyst is a block found in amethyst geodes that grows amethyst clusters.",
    "image": "https://minecraft-storage.vercel.app/images/items/budding_amethyst.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Bundle",
    "namespacedId": "bundle",
    "description": "A bundle is a storage item that can be used for managing items inside the player's inventory, and allows for combination of multiple item types within single inventory slots.",
    "image": "https://minecraft-storage.vercel.app/images/items/bundle.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Buried Treasure Map",
    "namespacedId": "filled_map",
    "description": "An explorer map is a special map used to aid in finding rare generated structures, including woodland mansions, ocean monuments, and buried treasures.",
    "image": "https://minecraft-storage.vercel.app/images/items/buried_treasure_map.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cactus",
    "namespacedId": "cactus",
    "description": "A cactus is a plant block that generates naturally in dry areas and causes damage.",
    "image": "https://minecraft-storage.vercel.app/images/items/cactus.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cake",
    "namespacedId": "cake",
    "description": "Cake is a food and a block that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/cake.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Calcite",
    "namespacedId": "calcite",
    "description": "Calcite is a carbonate mineral, currently used as a decorative block.",
    "image": "https://minecraft-storage.vercel.app/images/items/calcite.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Campfire",
    "namespacedId": "campfire",
    "description": "A campfire is a block that can be used to cook food or act as a light source or smoke signal.",
    "image": "https://minecraft-storage.vercel.app/images/items/campfire.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Candle",
    "namespacedId": "candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Carrot",
    "namespacedId": "carrot",
    "description": "A carrot is a food item that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/carrot.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Carrot on a Stick",
    "namespacedId": "carrot_on_a_stick",
    "description": "A carrot on a stick is an item that can be used to control saddled pigs.",
    "image": "https://minecraft-storage.vercel.app/images/items/carrot_on_a_stick.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Cartography Table",
    "namespacedId": "cartography_table",
    "description": "A cartography table is a cartographer's job site block that generates in villages. It is used for cloning, zooming out and locking maps.",
    "image": "https://minecraft-storage.vercel.app/images/items/cartography_table.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Carved Pumpkin",
    "namespacedId": "carved_pumpkin",
    "description": "A pumpkin is a fruit block that appears in patches in grassy biomes. Pumpkins have the same texture on all 4 sides.",
    "image": "https://minecraft-storage.vercel.app/images/items/carved_pumpkin.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cat Spawn Egg",
    "namespacedId": "cat_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/cat_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cauldron",
    "namespacedId": "cauldron",
    "description": "A cauldron is a block that can contain water, lava and powder snow. In Bedrock Edition, it can also hold potions and dyed water. It also is a job site block used by leatherworkers in villages.",
    "image": "https://minecraft-storage.vercel.app/images/items/cauldron.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cave Spider Spawn Egg",
    "namespacedId": "cave_spider_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/cave_spider_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Chain",
    "namespacedId": "chain",
    "description": "Chains are metallic decoration blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/chain.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chain Command Block",
    "namespacedId": "chain_command_block",
    "description": "A command block is a block that can execute commands. Because it cannot be obtained or edited in Survival mode without cheats, it is primarily used on multiplayer servers, in Creative worlds, and custom maps.",
    "image": "https://minecraft-storage.vercel.app/images/items/chain_command_block.gif",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Chainmail Boots",
    "namespacedId": "chainmail_boots",
    "description": "Boots are a type of armor that covers the feet of the player. There are six types of boots: leather boots, chainmail boots, iron boots, diamond boots, gold boots, and netherite boots.",
    "image": "https://minecraft-storage.vercel.app/images/items/chainmail_boots.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Chainmail Chestplate",
    "namespacedId": "chainmail_chestplate",
    "description": "Chestplates are a type of armor that covers the upper body of the player. There are six types of chestplates: leather, chainmail, iron, diamond, gold and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/chainmail_chestplate.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Chainmail Helmet",
    "namespacedId": "chainmail_helmet",
    "description": "Helmets are a type of armor that covers the head of the player. There are seven types of helmets: leather cap, chainmail helmet, iron helmet, diamond helmet, gold helmet, netherite helmet, and turtle shell.",
    "image": "https://minecraft-storage.vercel.app/images/items/chainmail_helmet.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Chainmail Leggings",
    "namespacedId": "chainmail_leggings",
    "description": "Leggings are a type of armor that covers the lower body of the player. There are six types of leggings: leather pants, chainmail leggings, iron leggings, diamond leggings, gold leggings and netherite leggings.",
    "image": "https://minecraft-storage.vercel.app/images/items/chainmail_leggings.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Charcoal",
    "namespacedId": "charcoal",
    "description": "Charcoal is an item obtained by smelting logs or wood. It is used as fuel, or for crafting torches and campfires. Unlike coal, charcoal cannot be traded with villagers or crafted into a block of coal. Coal and charcoal also cannot stack together. It is a good substitute for coal.",
    "image": "https://minecraft-storage.vercel.app/images/items/charcoal.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chest",
    "namespacedId": "chest",
    "description": "A chest is a block that stores items.",
    "image": "https://minecraft-storage.vercel.app/images/items/chest.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chicken Spawn Egg",
    "namespacedId": "chicken_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/chicken_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Chipped Anvil",
    "namespacedId": "chipped_anvil",
    "description": "An anvil is a block that allows players to repair items, rename items, and combine enchantments.",
    "image": "https://minecraft-storage.vercel.app/images/items/chipped_anvil.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chiseled Deepslate",
    "namespacedId": "chiseled_deepslate",
    "description": "Chiseled deepslate is the chiseled version of deepslate.",
    "image": "https://minecraft-storage.vercel.app/images/items/chiseled_deepslate.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Chiseled Nether Bricks",
    "namespacedId": "chiseled_nether_bricks",
    "description": "Nether bricks  are blocks used to form nether fortresses in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/chiseled_nether_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chiseled Polished Blackstone",
    "namespacedId": "chiseled_polished_blackstone",
    "description": "Polished blackstone is the stone-like polished variation of blackstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/chiseled_polished_blackstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chiseled Quartz Block",
    "namespacedId": "chiseled_quartz_block",
    "description": "A block of quartz is a mineral block used only for decoration. It can be turned into a chiseled quartz block, quartz pillar, or quartz bricks.",
    "image": "https://minecraft-storage.vercel.app/images/items/chiseled_quartz_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chiseled Red Sandstone",
    "namespacedId": "chiseled_red_sandstone",
    "description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
    "image": "https://minecraft-storage.vercel.app/images/items/chiseled_red_sandstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chiseled Sandstone",
    "namespacedId": "chiseled_sandstone",
    "description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
    "image": "https://minecraft-storage.vercel.app/images/items/chiseled_sandstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chiseled Stone Bricks",
    "namespacedId": "chiseled_stone_bricks",
    "description": "Stone bricks and the variants  cracked stone bricks,  mossy stone bricks, and  chiseled stone bricks are materials found in structures such as strongholds, igloo basements, jungle temples, ocean ruins and ruined portals.",
    "image": "https://minecraft-storage.vercel.app/images/items/chiseled_stone_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chorus Flower",
    "namespacedId": "chorus_flower",
    "description": "Chorus flowers are plants that are found in the End. They grow on chorus plants.",
    "image": "https://minecraft-storage.vercel.app/images/items/chorus_flower.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Chorus Fruit",
    "namespacedId": "chorus_fruit",
    "description": "Chorus fruit is a food item native to the End that can be eaten, or cooked into popped chorus fruit. It can be eaten even when the hunger bar is full, and eating it may teleport the player up to 8 blocks in any direction.",
    "image": "https://minecraft-storage.vercel.app/images/items/chorus_fruit.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Clay",
    "namespacedId": "clay",
    "description": "Clay is a block that can be smelted to form terracotta and is usually found in locations where sand or dirt and water are present, most commonly appearing in shallow water, especially along the coast of island groups. When mined, four clay balls will drop; those can be smelted into bricks.",
    "image": "https://minecraft-storage.vercel.app/images/items/clay.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Clay Ball",
    "namespacedId": "clay_ball",
    "description": "A clay ball is the item obtained from clay blocks used for crafting or making bricks.",
    "image": "https://minecraft-storage.vercel.app/images/items/clay_ball.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Clock",
    "namespacedId": "clock",
    "description": "Clocks are time telling devices that display the current in-game position of the sun and the moon. Clocks only function properly in the Overworld.",
    "image": "https://minecraft-storage.vercel.app/images/items/clock.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Coal",
    "namespacedId": "coal",
    "description": "Coal is a mineral item mainly obtained by harvesting coal ore. It is used as fuel, for crafting torches and campfires, or for trading with villagers.",
    "image": "https://minecraft-storage.vercel.app/images/items/coal.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Coal Ore",
    "namespacedId": "coal_ore",
    "description": "Coal ore is a mineral block that drops coal when mined.",
    "image": "https://minecraft-storage.vercel.app/images/items/coal_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Coarse Dirt",
    "namespacedId": "coarse_dirt",
    "description": "Coarse dirt is a variation of dirt on which grass blocks cannot spread.",
    "image": "https://minecraft-storage.vercel.app/images/items/coarse_dirt.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cobbled Deepslate",
    "namespacedId": "cobbled_deepslate",
    "description": "Cobbled deepslate is a stone variant that functions similar to cobblestone or blackstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/cobbled_deepslate.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cobbled Deepslate Slab",
    "namespacedId": "cobbled_deepslate_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/cobbled_deepslate_slab.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cobbled Deepslate Stairs",
    "namespacedId": "cobbled_deepslate_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/cobbled_deepslate_stairs.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cobbled Deepslate Wall",
    "namespacedId": "cobbled_deepslate_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/cobbled_deepslate_wall.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cobblestone",
    "namespacedId": "cobblestone",
    "description": "Cobblestone is a common block, obtained from mining stone.  It is mainly used for crafting or as a building block.",
    "image": "https://minecraft-storage.vercel.app/images/items/cobblestone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cobblestone Slab",
    "namespacedId": "cobblestone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/cobblestone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cobblestone Stairs",
    "namespacedId": "cobblestone_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/cobblestone_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cobblestone Wall",
    "namespacedId": "cobblestone_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/cobblestone_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cobweb",
    "namespacedId": "cobweb",
    "description": "A cobweb is a block that slows down entity movements.",
    "image": "https://minecraft-storage.vercel.app/images/items/cobweb.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cocoa Beans",
    "namespacedId": "cocoa_beans",
    "description": "Cocoa beans are a food ingredient obtained from cocoa that can be used to craft cookies and brown dye. Cocoa beans are mainly found in the jungle biomes.",
    "image": "https://minecraft-storage.vercel.app/images/items/cocoa_beans.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cod Spawn Egg",
    "namespacedId": "cod_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/cod_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Command Block",
    "namespacedId": "command_block",
    "description": "A command block is a block that can execute commands. Because it cannot be obtained or edited in Survival mode without cheats, it is primarily used on multiplayer servers, in Creative worlds, and custom maps.",
    "image": "https://minecraft-storage.vercel.app/images/items/command_block.gif",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Compass",
    "namespacedId": "compass",
    "description": "A compass is an item used to point to the world spawn or to a lodestone.",
    "image": "https://minecraft-storage.vercel.app/images/items/compass.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Composter",
    "namespacedId": "composter",
    "description": "A composter is a block that converts some biological material into bone meal. It also serves as a farmer villager's job site block.",
    "image": "https://minecraft-storage.vercel.app/images/items/composter.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Conduit",
    "namespacedId": "conduit",
    "description": "A conduit is a beacon-like block that provides Conduit Power and attacks hostile mobs underwater.",
    "image": "https://minecraft-storage.vercel.app/images/items/conduit.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cooked Chicken",
    "namespacedId": "cooked_chicken",
    "description": "Cooked chicken is a food item that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/cooked_chicken.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cooked Cod",
    "namespacedId": "cooked_cod",
    "description": "Cooked cod is a food item obtained by cooking raw cod.",
    "image": "https://minecraft-storage.vercel.app/images/items/cooked_cod.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cooked Mutton",
    "namespacedId": "cooked_mutton",
    "description": "Cooked mutton is a food item obtained from cooking raw mutton.",
    "image": "https://minecraft-storage.vercel.app/images/items/cooked_mutton.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cooked Porkchop",
    "namespacedId": "cooked_porkchop",
    "description": "Cooked porkchop is a food item that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/cooked_porkchop.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cooked Rabbit",
    "namespacedId": "cooked_rabbit",
    "description": "Cooked rabbit is a food item that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/cooked_rabbit.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cooked Salmon",
    "namespacedId": "cooked_salmon",
    "description": "Cooked salmon is a food item obtained by cooking raw salmon. It is a nutritious and easily obtainable early-game food source.",
    "image": "https://minecraft-storage.vercel.app/images/items/cooked_salmon.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cookie",
    "namespacedId": "cookie",
    "description": "Cookies are food items that can be obtained in large quantities, but do not restore hunger or saturation significantly.",
    "image": "https://minecraft-storage.vercel.app/images/items/cookie.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Copper Ingot",
    "namespacedId": "copper_ingot",
    "description": "Copper ingots are metal ingots obtained from smelting raw copper or killing drowned.",
    "image": "https://minecraft-storage.vercel.app/images/items/copper_ingot.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Copper Ore",
    "namespacedId": "copper_ore",
    "description": "Copper ore is a mineral block found underground.",
    "image": "https://minecraft-storage.vercel.app/images/items/copper_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cornflower",
    "namespacedId": "cornflower",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/cornflower.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cow Spawn Egg",
    "namespacedId": "cow_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/cow_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cracked Deepslate Bricks",
    "namespacedId": "cracked_deepslate_bricks",
    "description": "Deepslate bricks are the brick version of deepslate.",
    "image": "https://minecraft-storage.vercel.app/images/items/cracked_deepslate_bricks.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cracked Deepslate Tiles",
    "namespacedId": "cracked_deepslate_tiles",
    "description": "Deepslate tiles are a decorative variant of deepslate.",
    "image": "https://minecraft-storage.vercel.app/images/items/cracked_deepslate_tiles.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cracked Nether Bricks",
    "namespacedId": "cracked_nether_bricks",
    "description": "Nether bricks  are blocks used to form nether fortresses in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/cracked_nether_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cracked Polished Blackstone Bricks",
    "namespacedId": "cracked_polished_blackstone_bricks",
    "description": "Polished blackstone bricks are a decorative version of polished blackstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/cracked_polished_blackstone_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cracked Stone Bricks",
    "namespacedId": "cracked_stone_bricks",
    "description": "Stone bricks and the variants  cracked stone bricks,  mossy stone bricks, and  chiseled stone bricks are materials found in structures such as strongholds, igloo basements, jungle temples, ocean ruins and ruined portals.",
    "image": "https://minecraft-storage.vercel.app/images/items/cracked_stone_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crafting Table",
    "namespacedId": "crafting_table",
    "description": "A crafting table is a utility block that allows the player to craft a variety of blocks and items.",
    "image": "https://minecraft-storage.vercel.app/images/items/crafting_table.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Creeper Head",
    "namespacedId": "creeper_head",
    "description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
    "image": "https://minecraft-storage.vercel.app/images/items/creeper_head.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Creeper Spawn Egg",
    "namespacedId": "creeper_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/creeper_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Crimson Button",
    "namespacedId": "crimson_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Door",
    "namespacedId": "crimson_door",
    "description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_door.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Fence",
    "namespacedId": "crimson_fence",
    "description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_fence.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Fence Gate",
    "namespacedId": "crimson_fence_gate",
    "description": "A fence gate is a block that shares the functions of both the door and the fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_fence_gate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Fungus",
    "namespacedId": "crimson_fungus",
    "description": "A fungus is a mushroom-like block that generates in the Nether. There are two types of fungi: crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_fungus.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Hyphae",
    "namespacedId": "crimson_hyphae",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_hyphae.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Nylium",
    "namespacedId": "crimson_nylium",
    "description": "Nylium is a variant of netherrack that generates in the Nether. It has two variants: warped nylium and crimson nylium which both spawn in different biomes.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_nylium.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Crimson Planks",
    "namespacedId": "crimson_planks",
    "description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_planks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Pressure Plate",
    "namespacedId": "crimson_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Roots",
    "namespacedId": "crimson_roots",
    "description": "Not to be confused with Nether Sprouts.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_roots.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Sign",
    "namespacedId": "crimson_sign",
    "description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_sign.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Crimson Slab",
    "namespacedId": "crimson_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Stairs",
    "namespacedId": "crimson_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Stem",
    "namespacedId": "crimson_stem",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_stem.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crimson Trapdoor",
    "namespacedId": "crimson_trapdoor",
    "description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
    "image": "https://minecraft-storage.vercel.app/images/items/crimson_trapdoor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Crossbow",
    "namespacedId": "crossbow",
    "description": "A crossbow is a ranged weapon similar to a bow that uses arrows or fireworks as ammunition.",
    "image": "https://minecraft-storage.vercel.app/images/items/crossbow.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Crying Obsidian",
    "namespacedId": "crying_obsidian",
    "description": "Crying obsidian is a luminous variant of obsidian that can be used to craft a respawn anchor and produces purple particles when placed.",
    "image": "https://minecraft-storage.vercel.app/images/items/crying_obsidian.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cut Copper",
    "namespacedId": "cut_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/cut_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cut Copper Slab",
    "namespacedId": "cut_copper_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/cut_copper_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cut Copper Stairs",
    "namespacedId": "cut_copper_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/cut_copper_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cut Red Sandstone",
    "namespacedId": "cut_red_sandstone",
    "description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
    "image": "https://minecraft-storage.vercel.app/images/items/cut_red_sandstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cut Red Sandstone Slab",
    "namespacedId": "cut_red_sandstone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/cut_red_sandstone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cut Sandstone",
    "namespacedId": "cut_sandstone",
    "description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
    "image": "https://minecraft-storage.vercel.app/images/items/cut_sandstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cut Sandstone Slab",
    "namespacedId": "cut_sandstone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/cut_sandstone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cyan Banner",
    "namespacedId": "cyan_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Cyan Bed",
    "namespacedId": "cyan_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Cyan Candle",
    "namespacedId": "cyan_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cyan Carpet",
    "namespacedId": "cyan_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cyan Concrete",
    "namespacedId": "cyan_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cyan Concrete Powder",
    "namespacedId": "cyan_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cyan Dye",
    "namespacedId": "cyan_dye",
    "description": "Cyan dye is a secondary dye color.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cyan Glazed Terracotta",
    "namespacedId": "cyan_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cyan Shulker Box",
    "namespacedId": "cyan_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Cyan Stained Glass",
    "namespacedId": "cyan_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cyan Stained Glass Pane",
    "namespacedId": "cyan_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Cyan Terracotta",
    "namespacedId": "cyan_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Cyan Wool",
    "namespacedId": "cyan_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/cyan_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Damaged Anvil",
    "namespacedId": "damaged_anvil",
    "description": "An anvil is a block that allows players to repair items, rename items, and combine enchantments.",
    "image": "https://minecraft-storage.vercel.app/images/items/damaged_anvil.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dandelion",
    "namespacedId": "dandelion",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/dandelion.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Boat",
    "namespacedId": "dark_oak_boat",
    "description": "A boat is both an item and a vehicle entity used primarily for fast transport of players and passenger mobs over bodies of water.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_boat.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Dark Oak Button",
    "namespacedId": "dark_oak_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Door",
    "namespacedId": "dark_oak_door",
    "description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_door.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Fence",
    "namespacedId": "dark_oak_fence",
    "description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_fence.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Fence Gate",
    "namespacedId": "dark_oak_fence_gate",
    "description": "A fence gate is a block that shares the functions of both the door and the fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_fence_gate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Leaves",
    "namespacedId": "dark_oak_leaves",
    "description": "Leaves are natural blocks that generate as part of trees.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_leaves.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Log",
    "namespacedId": "dark_oak_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Planks",
    "namespacedId": "dark_oak_planks",
    "description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_planks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Pressure Plate",
    "namespacedId": "dark_oak_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Sapling",
    "namespacedId": "dark_oak_sapling",
    "description": "A sapling is a non-solid block that can be grown into a tree.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_sapling.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Sign",
    "namespacedId": "dark_oak_sign",
    "description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_sign.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Dark Oak Slab",
    "namespacedId": "dark_oak_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Stairs",
    "namespacedId": "dark_oak_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Trapdoor",
    "namespacedId": "dark_oak_trapdoor",
    "description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_trapdoor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Oak Wood",
    "namespacedId": "dark_oak_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_oak_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Prismarine",
    "namespacedId": "dark_prismarine",
    "description": "Prismarine is a type of stone that appears underwater in ruins and ocean monuments. It periodically changes color between blue and green.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_prismarine.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Prismarine Slab",
    "namespacedId": "dark_prismarine_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_prismarine_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dark Prismarine Stairs",
    "namespacedId": "dark_prismarine_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/dark_prismarine_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Daylight Detector",
    "namespacedId": "daylight_detector",
    "description": "A daylight detector is a block that outputs a redstone signal based on sunlight.",
    "image": "https://minecraft-storage.vercel.app/images/items/daylight_detector.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Brain Coral",
    "namespacedId": "dead_brain_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_brain_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Brain Coral Block",
    "namespacedId": "dead_brain_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_brain_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Brain Coral Fan",
    "namespacedId": "dead_brain_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_brain_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Bubble Coral",
    "namespacedId": "dead_bubble_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_bubble_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Bubble Coral Block",
    "namespacedId": "dead_bubble_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_bubble_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Bubble Coral Fan",
    "namespacedId": "dead_bubble_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_bubble_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Bush",
    "namespacedId": "dead_bush",
    "description": "Dead bushes are transparent blocks in the form of an aesthetic plant.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_bush.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Dead Fire Coral",
    "namespacedId": "dead_fire_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_fire_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Fire Coral Block",
    "namespacedId": "dead_fire_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_fire_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Fire Coral Fan",
    "namespacedId": "dead_fire_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_fire_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Horn Coral",
    "namespacedId": "dead_horn_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_horn_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Horn Coral Block",
    "namespacedId": "dead_horn_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_horn_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Horn Coral Fan",
    "namespacedId": "dead_horn_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_horn_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Tube Coral",
    "namespacedId": "dead_tube_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_tube_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Tube Coral Block",
    "namespacedId": "dead_tube_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_tube_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dead Tube Coral Fan",
    "namespacedId": "dead_tube_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/dead_tube_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Debug Stick",
    "namespacedId": "debug_stick",
    "description": "The debug stick is an item used to edit the block states of blocks. It is visually identical to a regular stick, but with a glint (as if enchanted). The debug stick's text is not italic.",
    "image": "https://minecraft-storage.vercel.app/images/items/debug_stick.gif",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Deepslate",
    "namespacedId": "deepslate",
    "description": "Deepslate is a stone type found deep underground in the Overworld that functions similarly to regular stone, but is significantly more difficult to break.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Brick Slab",
    "namespacedId": "deepslate_brick_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_brick_slab.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Brick Stairs",
    "namespacedId": "deepslate_brick_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_brick_stairs.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Brick Wall",
    "namespacedId": "deepslate_brick_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_brick_wall.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Bricks",
    "namespacedId": "deepslate_bricks",
    "description": "Deepslate bricks are the brick version of deepslate.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_bricks.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Coal Ore",
    "namespacedId": "deepslate_coal_ore",
    "description": "Coal ore is a mineral block that drops coal when mined.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_coal_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Copper Ore",
    "namespacedId": "deepslate_copper_ore",
    "description": "Copper ore is a mineral block found underground.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_copper_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Diamond Ore",
    "namespacedId": "deepslate_diamond_ore",
    "description": "Diamond ore is a rare ore that generates deep underground, and is the only reliable source of diamonds.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_diamond_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Emerald Ore",
    "namespacedId": "deepslate_emerald_ore",
    "description": "Emerald ore is a rare mineral block that generates only in mountains and windswept hills biomes. It drops emeralds when mined, or itself if mined with a pickaxe with the Silk Touch enchantment.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_emerald_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Gold Ore",
    "namespacedId": "deepslate_gold_ore",
    "description": "Gold ore is a rare mineral block found underground.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_gold_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Iron Ore",
    "namespacedId": "deepslate_iron_ore",
    "description": "Iron ore is a mineral block found underground. It is a source of raw iron, which can be smelted into iron ingots.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_iron_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Lapis Lazuli Ore",
    "namespacedId": "deepslate_lapis_ore",
    "description": "Lapis lazuli ore is the ore block from which lapis lazuli is obtained.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_lapis_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Deepslate Redstone Ore",
    "namespacedId": "deepslate_redstone_ore",
    "description": "Redstone ore is the ore block from which redstone is obtained.",
    "image": "https://minecraft-storage.vercel.app/images/items/deepslate_redstone_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Detector Rail",
    "namespacedId": "detector_rail",
    "description": "A detector rail is a block that can transport minecarts and can be used as a switchable redstone power source.",
    "image": "https://minecraft-storage.vercel.app/images/items/detector_rail.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Diamond",
    "namespacedId": "diamond",
    "description": "A diamond is a rare mineral obtained from diamond ore or loot chests. They are mainly used to craft high-tier tools and armor, enchanting tables, blocks of diamond, and jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Diamond Axe",
    "namespacedId": "diamond_axe",
    "description": "An axe is a tool mainly used to hasten the breaking of wood-based blocks, remove the surface layer of certain blocks, and as a melee weapon.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_axe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Diamond Boots",
    "namespacedId": "diamond_boots",
    "description": "Boots are a type of armor that covers the feet of the player. There are six types of boots: leather boots, chainmail boots, iron boots, diamond boots, gold boots, and netherite boots.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_boots.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Diamond Chestplate",
    "namespacedId": "diamond_chestplate",
    "description": "Chestplates are a type of armor that covers the upper body of the player. There are six types of chestplates: leather, chainmail, iron, diamond, gold and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_chestplate.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Diamond Helmet",
    "namespacedId": "diamond_helmet",
    "description": "Helmets are a type of armor that covers the head of the player. There are seven types of helmets: leather cap, chainmail helmet, iron helmet, diamond helmet, gold helmet, netherite helmet, and turtle shell.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_helmet.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Diamond Hoe",
    "namespacedId": "diamond_hoe",
    "description": "A hoe is a tool used to till dirt and grass blocks into farmland, as well as to harvest certain plant-based blocks quickly.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_hoe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Diamond Horse Armor",
    "namespacedId": "diamond_horse_armor",
    "description": "Horse armor[note 1] is a special type of armor that can be given to a horse to wear.  Only normal horses can wear armor; donkey, mule and undead variants such as skeleton horses and zombie horses cannot be equipped with armor. Horse armor decreases damage done to horses when hit by melee attack or a ranged attack from the player or another mob. Horse armor does not decrease the fall damage of a horse or its speed when worn.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_horse_armor.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Diamond Leggings",
    "namespacedId": "diamond_leggings",
    "description": "Leggings are a type of armor that covers the lower body of the player. There are six types of leggings: leather pants, chainmail leggings, iron leggings, diamond leggings, gold leggings and netherite leggings.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_leggings.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Diamond Ore",
    "namespacedId": "diamond_ore",
    "description": "Diamond ore is a rare ore that generates deep underground, and is the only reliable source of diamonds.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Diamond Pickaxe",
    "namespacedId": "diamond_pickaxe",
    "description": "A pickaxe is one of the most commonly used tools in the game, being required to mine all ores, rock, rock-based blocks and metal-based blocks. A pickaxe allows the player to mine blocks at faster speeds, depending on the material it is made from. Specific pickaxe materials are also required to harvest certain types of blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_pickaxe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Diamond Shovel",
    "namespacedId": "diamond_shovel",
    "description": "Shovels are tools used to ease the process of collecting dirt, sand and other blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_shovel.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Diamond Sword",
    "namespacedId": "diamond_sword",
    "description": "A sword is a melee weapon that is mainly used to damage entities and for cutting cobwebs or bamboo. A sword is made from one of six materials, in order of increasing quality and expense: wood, gold, stone, iron, diamond and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/diamond_sword.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Diorite",
    "namespacedId": "diorite",
    "description": "Diorite is a block of igneous rock, found in large pockets in the ground.",
    "image": "https://minecraft-storage.vercel.app/images/items/diorite.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Diorite Slab",
    "namespacedId": "diorite_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/diorite_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Diorite Stairs",
    "namespacedId": "diorite_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/diorite_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Diorite Wall",
    "namespacedId": "diorite_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/diorite_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dirt",
    "namespacedId": "dirt",
    "description": "Dirt is a block found abundantly in most biomes under a layer of grass blocks at the top of the Overworld.",
    "image": "https://minecraft-storage.vercel.app/images/items/dirt.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dirt Path",
    "namespacedId": "dirt_path",
    "description": "Dirt paths are decorative blocks. They are mainly found in villages.",
    "image": "https://minecraft-storage.vercel.app/images/items/dirt_path.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Dispenser",
    "namespacedId": "dispenser",
    "description": "A dispenser is a solid block used as a redstone component to dispense items.",
    "image": "https://minecraft-storage.vercel.app/images/items/dispenser.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dolphin Spawn Egg",
    "namespacedId": "dolphin_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/dolphin_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Donkey Spawn Egg",
    "namespacedId": "donkey_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/donkey_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Dragon Egg",
    "namespacedId": "dragon_egg",
    "description": "The dragon egg is a decorative block or a \"trophy item\", and is the rarest item obtainable in the game, as it generates once (or twice in Bedrock Edition).[1]",
    "image": "https://minecraft-storage.vercel.app/images/items/dragon_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Dragon Head",
    "namespacedId": "dragon_head",
    "description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
    "image": "https://minecraft-storage.vercel.app/images/items/dragon_head.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Dragon's Breath",
    "namespacedId": "dragon_breath",
    "description": "The dragon's breath is a brewing item that is used solely to make lingering potions.",
    "image": "https://minecraft-storage.vercel.app/images/items/dragon_breath.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dried Kelp",
    "namespacedId": "dried_kelp",
    "description": "Dried kelp is a food item that can be quickly eaten by the player. It can also be crafted into dried kelp blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/dried_kelp.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dried Kelp Block",
    "namespacedId": "dried_kelp_block",
    "description": "Dried kelp blocks are blocks primarily used as fuel in furnaces.",
    "image": "https://minecraft-storage.vercel.app/images/items/dried_kelp_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dripstone Block",
    "namespacedId": "dripstone_block",
    "description": "The dripstone block is a rock block that allows pointed dripstone to grow beneath it.",
    "image": "https://minecraft-storage.vercel.app/images/items/dripstone_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Dropper",
    "namespacedId": "dropper",
    "description": "A dropper is a block that can be used to eject items or to push items into another container.",
    "image": "https://minecraft-storage.vercel.app/images/items/dropper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Drowned Spawn Egg",
    "namespacedId": "drowned_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/drowned_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Egg",
    "namespacedId": "egg",
    "description": "An egg is an item that can be used to craft food items, or as a throwable entity to spawn chicks.",
    "image": "https://minecraft-storage.vercel.app/images/items/egg.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Elder Guardian Spawn Egg",
    "namespacedId": "elder_guardian_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/elder_guardian_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Elytra",
    "namespacedId": "elytra",
    "description": "Elytra ( /ˈɛl ɪ trə/ ᴇʟ-i-trə) are rare wings found in end ships that are the only single-item source of flight in Survival mode.",
    "image": "https://minecraft-storage.vercel.app/images/items/elytra.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Emerald",
    "namespacedId": "emerald",
    "description": "Emeralds are rare minerals that are used primarily as the currency for trading with villagers and wandering traders. Naturally-occurring emeralds are rarer than diamonds.",
    "image": "https://minecraft-storage.vercel.app/images/items/emerald.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Emerald Ore",
    "namespacedId": "emerald_ore",
    "description": "Emerald ore is a rare mineral block that generates only in mountains and windswept hills biomes. It drops emeralds when mined, or itself if mined with a pickaxe with the Silk Touch enchantment.",
    "image": "https://minecraft-storage.vercel.app/images/items/emerald_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Empty Map",
    "namespacedId": "map",
    "description": "A map is an item used to view explored terrain and mark landmarks.",
    "image": "https://minecraft-storage.vercel.app/images/items/map.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Empty Map",
    "namespacedId": "filled_map",
    "description": "A map is an item used to view explored terrain and mark landmarks.",
    "image": "https://minecraft-storage.vercel.app/images/items/empty_map.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Enchanted Book",
    "namespacedId": "enchanted_book",
    "description": "An enchanted book is an item that lets players add enchantments to certain items using an anvil.",
    "image": "https://minecraft-storage.vercel.app/images/items/enchanted_book.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Enchanted Golden Apple",
    "namespacedId": "enchanted_golden_apple",
    "description": "The enchanted golden apple‌[Java Edition only] or the enchanted apple‌[Bedrock Edition only] is a rare, uncraftable variant of the golden apple that has stronger effects.",
    "image": "https://minecraft-storage.vercel.app/images/items/enchanted_golden_apple.gif",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Enchanting Table",
    "namespacedId": "enchanting_table",
    "description": "An enchanting table is a block that allows players to spend their experience point levels to enchant tools, weapons, books, armor, and certain other items.",
    "image": "https://minecraft-storage.vercel.app/images/items/enchanting_table.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "End Crystal",
    "namespacedId": "end_crystal",
    "description": "An end crystal is both an item and an entity found in the End.",
    "image": "https://minecraft-storage.vercel.app/images/items/end_crystal.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "End Portal Frame",
    "namespacedId": "end_portal_frame",
    "description": "An end portal frame is a block that resembles end stone with a decorative bluish-green top, with sides decorated in hollow rounded rectangles with the same color as the top.",
    "image": "https://minecraft-storage.vercel.app/images/items/end_portal_frame.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "End Rod",
    "namespacedId": "end_rod",
    "description": "An end rod is a decorative light source that emits white particles.",
    "image": "https://minecraft-storage.vercel.app/images/items/end_rod.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "End Stone",
    "namespacedId": "end_stone",
    "description": "End stone is a block that appears in The End and, apart from generated structures, makes up all of the solid ground that exists in that dimension.",
    "image": "https://minecraft-storage.vercel.app/images/items/end_stone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "End Stone Brick Slab",
    "namespacedId": "end_stone_brick_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/end_stone_brick_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "End Stone Brick Stairs",
    "namespacedId": "end_stone_brick_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/end_stone_brick_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "End Stone Brick Wall",
    "namespacedId": "end_stone_brick_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/end_stone_brick_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "End Stone Bricks",
    "namespacedId": "end_stone_bricks",
    "description": "End stone bricks are an end stone-based brick.",
    "image": "https://minecraft-storage.vercel.app/images/items/end_stone_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Ender Chest",
    "namespacedId": "ender_chest",
    "description": "Ender chests are a type of chest whose contents are exclusive to each player, and can be accessed from anywhere in the world.",
    "image": "https://minecraft-storage.vercel.app/images/items/ender_chest.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Ender Pearl",
    "namespacedId": "ender_pearl",
    "description": "An ender pearl is a smooth, greenish-blue item used to teleport and to make an eye of ender.",
    "image": "https://minecraft-storage.vercel.app/images/items/ender_pearl.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Enderman Spawn Egg",
    "namespacedId": "enderman_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/enderman_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Endermite Spawn Egg",
    "namespacedId": "endermite_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/endermite_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Evoker Spawn Egg",
    "namespacedId": "evoker_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/evoker_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Exposed Copper",
    "namespacedId": "exposed_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/exposed_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Exposed Cut Copper",
    "namespacedId": "exposed_cut_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/exposed_cut_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Exposed Cut Copper Slab",
    "namespacedId": "exposed_cut_copper_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/exposed_cut_copper_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Exposed Cut Copper Stairs",
    "namespacedId": "exposed_cut_copper_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/exposed_cut_copper_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Eye of Ender",
    "namespacedId": "ender_eye",
    "description": "An eye of ender is a craftable item used to locate strongholds and activate the end portals within them.",
    "image": "https://minecraft-storage.vercel.app/images/items/ender_eye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Farmland",
    "namespacedId": "farmland",
    "description": "Farmland is a block on which seeds, root vegetables, and most saplings can be planted and grown.",
    "image": "https://minecraft-storage.vercel.app/images/items/farmland.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Feather",
    "namespacedId": "feather",
    "description": "Feathers are items dropped by chickens and parrots, as well as tamed cats as morning gifts.",
    "image": "https://minecraft-storage.vercel.app/images/items/feather.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Fermented Spider Eye",
    "namespacedId": "fermented_spider_eye",
    "description": "A fermented spider eye is a brewing ingredient.",
    "image": "https://minecraft-storage.vercel.app/images/items/fermented_spider_eye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Fern",
    "namespacedId": "fern",
    "description": "Grass is a non-solid plant block that has wheat seeds as a drop. Its color is biome-dependent, and matches the color of grass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/fern.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Fire Charge",
    "namespacedId": "fire_charge",
    "description": "Fire charges are combat items that light fires when used.",
    "image": "https://minecraft-storage.vercel.app/images/items/fire_charge.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Fire Coral",
    "namespacedId": "fire_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/fire_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Fire Coral Block",
    "namespacedId": "fire_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/fire_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Fire Coral Fan",
    "namespacedId": "fire_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/fire_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Firework Rocket",
    "namespacedId": "firework_rocket",
    "description": "A firework rocket is an item (and entity) used for creating decorative explosions, boosting when flying with elytra, and loading into a crossbow as ammunition.",
    "image": "https://minecraft-storage.vercel.app/images/items/firework_rocket.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Firework Star",
    "namespacedId": "firework_star",
    "description": "Firework stars are items used to determine the color, effect, and shape of firework rockets.",
    "image": "https://minecraft-storage.vercel.app/images/items/firework_star.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Fishing Rod",
    "namespacedId": "fishing_rod",
    "description": "A fishing rod is a tool used primarily for fishing.",
    "image": "https://minecraft-storage.vercel.app/images/items/fishing_rod.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Fletching Table",
    "namespacedId": "fletching_table",
    "description": "A fletching table is a fletcher's job site block that can generate naturally in villages. The fletching table is used to turn an unemployed villager into a Fletcher.",
    "image": "https://minecraft-storage.vercel.app/images/items/fletching_table.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Flint",
    "namespacedId": "flint",
    "description": "Flint is a mineral obtained from gravel.",
    "image": "https://minecraft-storage.vercel.app/images/items/flint.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Flint and Steel",
    "namespacedId": "flint_and_steel",
    "description": "A flint and steel is a tool used to light fires.",
    "image": "https://minecraft-storage.vercel.app/images/items/flint_and_steel.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Flower Pot",
    "namespacedId": "flower_pot",
    "description": "A flower pot is a decorative block that can contain flowers, bamboo, saplings, cacti, mushrooms, fungi, and other reasonably sized plants.",
    "image": "https://minecraft-storage.vercel.app/images/items/flower_pot.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Flowering Azalea",
    "namespacedId": "flowering_azalea",
    "description": "An azalea is a solid block that can be grown into an azalea tree.",
    "image": "https://minecraft-storage.vercel.app/images/items/flowering_azalea.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Flowering Azalea Leaves",
    "namespacedId": "flowering_azalea_leaves",
    "description": "Leaves are natural blocks that generate as part of trees.",
    "image": "https://minecraft-storage.vercel.app/images/items/flowering_azalea_leaves.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Fox Spawn Egg",
    "namespacedId": "fox_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/fox_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Furnace",
    "namespacedId": "furnace",
    "description": "A furnace is a utility block used for the smelting of blocks and items.",
    "image": "https://minecraft-storage.vercel.app/images/items/furnace.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Ghast Spawn Egg",
    "namespacedId": "ghast_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/ghast_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Ghast Tear",
    "namespacedId": "ghast_tear",
    "description": "Ghast tears are brewing items dropped by ghasts.",
    "image": "https://minecraft-storage.vercel.app/images/items/ghast_tear.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gilded Blackstone",
    "namespacedId": "gilded_blackstone",
    "description": "Gilded blackstone is a variant of blackstone that can drop itself or gold nuggets when mined.",
    "image": "https://minecraft-storage.vercel.app/images/items/gilded_blackstone.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Glass",
    "namespacedId": "glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Glass Bottle",
    "namespacedId": "glass_bottle",
    "description": "A glass bottle is an item that can hold water, potions, honey, or dragon's breath.",
    "image": "https://minecraft-storage.vercel.app/images/items/glass_bottle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Glass Pane",
    "namespacedId": "glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Glistering Melon Slice",
    "namespacedId": "glistering_melon_slice",
    "description": "A glistering melon slice is an inedible item used for brewing potions of healing. It is also one of the many potion ingredients that can be used to make mundane potions.",
    "image": "https://minecraft-storage.vercel.app/images/items/glistering_melon_slice.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Glow Berries",
    "namespacedId": "glow_berries",
    "description": "Glow berries are a food item that is collected from cave vines and can be used to plant them.",
    "image": "https://minecraft-storage.vercel.app/images/items/glow_berries.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Glow Ink Sac",
    "namespacedId": "glow_ink_sac",
    "description": "A glow ink sac is an item dropped by a glow squid upon death. Unlike regular ink sacs, it can be added to signs to make glowing text, and can be used to craft glow item frames.",
    "image": "https://minecraft-storage.vercel.app/images/items/glow_ink_sac.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Glow Item Frame",
    "namespacedId": "glow_item_frame",
    "description": "An item frame is an entity‌[JE only] or block entity‌[BE only] that displays the item or block that is inside it.",
    "image": "https://minecraft-storage.vercel.app/images/items/glow_item_frame.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Glow Lichen",
    "namespacedId": "glow_lichen",
    "description": "A glow lichen is a non-solid, light-emitting fungi growth that resembles sparse moss that is 1⁄16 of a block thick. It can generate, or be placed, on any side of a solid block.",
    "image": "https://minecraft-storage.vercel.app/images/items/glow_lichen.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Glow Squid Spawn Egg",
    "namespacedId": "glow_squid_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/glow_squid_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Glowstone",
    "namespacedId": "glowstone",
    "description": "Glowstone is a light-emitting block that occurs in branching structures, found hanging from ceilings and overhangs in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/glowstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Glowstone Dust",
    "namespacedId": "glowstone_dust",
    "description": "Glowstone dust is an item obtained from mining glowstone, and is mainly used to create potions with increased strength and decreased duration.",
    "image": "https://minecraft-storage.vercel.app/images/items/glowstone_dust.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Goat Spawn Egg",
    "namespacedId": "goat_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/goat_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Gold Ingot",
    "namespacedId": "gold_ingot",
    "description": "A gold ingot is a metal ingot used to craft various items, and also used as currency for bartering with piglins.",
    "image": "https://minecraft-storage.vercel.app/images/items/gold_ingot.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gold Nugget",
    "namespacedId": "gold_nugget",
    "description": "Gold nuggets are items used to make gold ingots and other various golden items. One gold nugget is effectively worth one-ninth of a gold ingot.",
    "image": "https://minecraft-storage.vercel.app/images/items/gold_nugget.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gold Ore",
    "namespacedId": "gold_ore",
    "description": "Gold ore is a rare mineral block found underground.",
    "image": "https://minecraft-storage.vercel.app/images/items/gold_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Golden Apple",
    "namespacedId": "golden_apple",
    "description": "The golden apple is a special food item that bestows beneficial effects when consumed.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_apple.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Golden Axe",
    "namespacedId": "golden_axe",
    "description": "An axe is a tool mainly used to hasten the breaking of wood-based blocks, remove the surface layer of certain blocks, and as a melee weapon.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_axe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Golden Boots",
    "namespacedId": "golden_boots",
    "description": "Boots are a type of armor that covers the feet of the player. There are six types of boots: leather boots, chainmail boots, iron boots, diamond boots, gold boots, and netherite boots.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_boots.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Golden Carrot",
    "namespacedId": "golden_carrot",
    "description": "A golden carrot is a valuable food item and brewing ingredient. It provides the second most saturation in the game, behind suspicious stew crafted with either a dandelion or blue orchid.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_carrot.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Golden Chestplate",
    "namespacedId": "golden_chestplate",
    "description": "Chestplates are a type of armor that covers the upper body of the player. There are six types of chestplates: leather, chainmail, iron, diamond, gold and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_chestplate.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Golden Helmet",
    "namespacedId": "golden_helmet",
    "description": "Helmets are a type of armor that covers the head of the player. There are seven types of helmets: leather cap, chainmail helmet, iron helmet, diamond helmet, gold helmet, netherite helmet, and turtle shell.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_helmet.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Golden Hoe",
    "namespacedId": "golden_hoe",
    "description": "A hoe is a tool used to till dirt and grass blocks into farmland, as well as to harvest certain plant-based blocks quickly.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_hoe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Golden Horse Armor",
    "namespacedId": "golden_horse_armor",
    "description": "Horse armor[note 1] is a special type of armor that can be given to a horse to wear.  Only normal horses can wear armor; donkey, mule and undead variants such as skeleton horses and zombie horses cannot be equipped with armor. Horse armor decreases damage done to horses when hit by melee attack or a ranged attack from the player or another mob. Horse armor does not decrease the fall damage of a horse or its speed when worn.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_horse_armor.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Golden Leggings",
    "namespacedId": "golden_leggings",
    "description": "Leggings are a type of armor that covers the lower body of the player. There are six types of leggings: leather pants, chainmail leggings, iron leggings, diamond leggings, gold leggings and netherite leggings.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_leggings.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Golden Pickaxe",
    "namespacedId": "golden_pickaxe",
    "description": "A pickaxe is one of the most commonly used tools in the game, being required to mine all ores, rock, rock-based blocks and metal-based blocks. A pickaxe allows the player to mine blocks at faster speeds, depending on the material it is made from. Specific pickaxe materials are also required to harvest certain types of blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_pickaxe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Golden Shovel",
    "namespacedId": "golden_shovel",
    "description": "Shovels are tools used to ease the process of collecting dirt, sand and other blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_shovel.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Golden Sword",
    "namespacedId": "golden_sword",
    "description": "A sword is a melee weapon that is mainly used to damage entities and for cutting cobwebs or bamboo. A sword is made from one of six materials, in order of increasing quality and expense: wood, gold, stone, iron, diamond and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/golden_sword.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Granite",
    "namespacedId": "granite",
    "description": "Granite is a block of igneous rock, found in large pockets in the ground.",
    "image": "https://minecraft-storage.vercel.app/images/items/granite.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Granite Slab",
    "namespacedId": "granite_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/granite_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Granite Stairs",
    "namespacedId": "granite_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/granite_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Granite Wall",
    "namespacedId": "granite_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/granite_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Grass",
    "namespacedId": "grass",
    "description": "Grass is a non-solid plant block that has wheat seeds as a drop. Its color is biome-dependent, and matches the color of grass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/grass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Grass Block",
    "namespacedId": "grass_block",
    "description": "A grass block is a natural block that generates abundantly across the surface of the Overworld.",
    "image": "https://minecraft-storage.vercel.app/images/items/grass_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gravel",
    "namespacedId": "gravel",
    "description": "Gravel is a block that is affected by gravity.",
    "image": "https://minecraft-storage.vercel.app/images/items/gravel.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gray Banner",
    "namespacedId": "gray_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Gray Bed",
    "namespacedId": "gray_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Gray Candle",
    "namespacedId": "gray_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gray Carpet",
    "namespacedId": "gray_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gray Concrete",
    "namespacedId": "gray_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gray Concrete Powder",
    "namespacedId": "gray_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gray Dye",
    "namespacedId": "gray_dye",
    "description": "Gray dye is a secondary color dye.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gray Glazed Terracotta",
    "namespacedId": "gray_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Gray Shulker Box",
    "namespacedId": "gray_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Gray Stained Glass",
    "namespacedId": "gray_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gray Stained Glass Pane",
    "namespacedId": "gray_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Gray Terracotta",
    "namespacedId": "gray_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Gray Wool",
    "namespacedId": "gray_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/gray_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Green Banner",
    "namespacedId": "green_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Green Bed",
    "namespacedId": "green_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Green Candle",
    "namespacedId": "green_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Green Carpet",
    "namespacedId": "green_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Green Concrete",
    "namespacedId": "green_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Green Concrete Powder",
    "namespacedId": "green_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Green Dye",
    "namespacedId": "green_dye",
    "description": "Green dye is a primary color dye.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Green Glazed Terracotta",
    "namespacedId": "green_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Green Shulker Box",
    "namespacedId": "green_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Green Stained Glass",
    "namespacedId": "green_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Green Stained Glass Pane",
    "namespacedId": "green_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Green Terracotta",
    "namespacedId": "green_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Green Wool",
    "namespacedId": "green_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/green_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Grindstone",
    "namespacedId": "grindstone",
    "description": "A grindstone is a block that repairs items and tools as well as removing enchantments from them. It also serves as a weaponsmith's job site block.",
    "image": "https://minecraft-storage.vercel.app/images/items/grindstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Guardian Spawn Egg",
    "namespacedId": "guardian_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/guardian_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Gunpowder",
    "namespacedId": "gunpowder",
    "description": "Gunpowder is an item that is used for explosion-related recipes.",
    "image": "https://minecraft-storage.vercel.app/images/items/gunpowder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Hanging Roots",
    "namespacedId": "hanging_roots",
    "description": "Hanging roots are a natural decorative block found underground in the lush caves biome.",
    "image": "https://minecraft-storage.vercel.app/images/items/hanging_roots.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Hay Bale",
    "namespacedId": "hay_block",
    "description": "Hay bales are decorative, flammable blocks that can also be used to feed horses, breed llamas, reduce fall damage, and extend campfire smokes.",
    "image": "https://minecraft-storage.vercel.app/images/items/hay_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Heart of the Sea",
    "namespacedId": "heart_of_the_sea",
    "description": "A heart of the sea is a rare item that can be crafted into a conduit.",
    "image": "https://minecraft-storage.vercel.app/images/items/heart_of_the_sea.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Heavy Weighted Pressure Plate",
    "namespacedId": "heavy_weighted_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/heavy_weighted_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Hoglin Spawn Egg",
    "namespacedId": "hoglin_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/hoglin_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Honey Block",
    "namespacedId": "honey_block",
    "description": "Honey blocks are sticky blocks craftable from honey bottles. Honey blocks can slow entities, similar to soul sand and slime block.",
    "image": "https://minecraft-storage.vercel.app/images/items/honey_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Honey Bottle",
    "namespacedId": "honey_bottle",
    "description": "A honey bottle is a consumable drink item obtainable by using a glass bottle on a beehive.  Honey bottles can also be used to craft honey blocks and sugar.",
    "image": "https://minecraft-storage.vercel.app/images/items/honey_bottle.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Honeycomb",
    "namespacedId": "honeycomb",
    "description": "Honeycombs are items obtained from bee nests and beehives.",
    "image": "https://minecraft-storage.vercel.app/images/items/honeycomb.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Honeycomb Block",
    "namespacedId": "honeycomb_block",
    "description": "Honeycomb blocks are decorative blocks crafted from honeycombs.",
    "image": "https://minecraft-storage.vercel.app/images/items/honeycomb_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Hopper",
    "namespacedId": "hopper",
    "description": "A hopper is a block that can be used to catch item entities, or to transfer items into and out of containers.",
    "image": "https://minecraft-storage.vercel.app/images/items/hopper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Horn Coral",
    "namespacedId": "horn_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/horn_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Horn Coral Block",
    "namespacedId": "horn_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/horn_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Horn Coral Fan",
    "namespacedId": "horn_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/horn_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Horse Spawn Egg",
    "namespacedId": "horse_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/horse_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Husk Spawn Egg",
    "namespacedId": "husk_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/husk_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Ice",
    "namespacedId": "ice",
    "description": "Ice is a translucent solid block.",
    "image": "https://minecraft-storage.vercel.app/images/items/ice.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Infested Chiseled Stone Bricks",
    "namespacedId": "infested_chiseled_stone_bricks",
    "description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
    "image": "https://minecraft-storage.vercel.app/images/items/infested_chiseled_stone_bricks.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Infested Cobblestone",
    "namespacedId": "infested_cobblestone",
    "description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
    "image": "https://minecraft-storage.vercel.app/images/items/infested_cobblestone.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Infested Cracked Stone Bricks",
    "namespacedId": "infested_cracked_stone_bricks",
    "description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
    "image": "https://minecraft-storage.vercel.app/images/items/infested_cracked_stone_bricks.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Infested Deepslate",
    "namespacedId": "infested_deepslate",
    "description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
    "image": "https://minecraft-storage.vercel.app/images/items/infested_deepslate.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Infested Mossy Stone Bricks",
    "namespacedId": "infested_mossy_stone_bricks",
    "description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
    "image": "https://minecraft-storage.vercel.app/images/items/infested_mossy_stone_bricks.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Infested Stone",
    "namespacedId": "infested_stone",
    "description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
    "image": "https://minecraft-storage.vercel.app/images/items/infested_stone.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Infested Stone Bricks",
    "namespacedId": "infested_stone_bricks",
    "description": "Infested blocks are blocks disguised as stone, cobblestone, deepslate, or any stone bricks variants, but spawn silverfish when broken in Survival or Adventure mode.",
    "image": "https://minecraft-storage.vercel.app/images/items/infested_stone_bricks.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Ink Sac",
    "namespacedId": "ink_sac",
    "description": "An ink sac is an item dropped by a squid upon death used to create black dye, dark prismarine and book and quill.",
    "image": "https://minecraft-storage.vercel.app/images/items/ink_sac.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Iron Axe",
    "namespacedId": "iron_axe",
    "description": "An axe is a tool mainly used to hasten the breaking of wood-based blocks, remove the surface layer of certain blocks, and as a melee weapon.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_axe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Iron Bars",
    "namespacedId": "iron_bars",
    "description": "Iron bars are blocks that serve a similar purpose to glass panes, but made of iron instead of glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_bars.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Iron Boots",
    "namespacedId": "iron_boots",
    "description": "Boots are a type of armor that covers the feet of the player. There are six types of boots: leather boots, chainmail boots, iron boots, diamond boots, gold boots, and netherite boots.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_boots.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Iron Chestplate",
    "namespacedId": "iron_chestplate",
    "description": "Chestplates are a type of armor that covers the upper body of the player. There are six types of chestplates: leather, chainmail, iron, diamond, gold and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_chestplate.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Iron Door",
    "namespacedId": "iron_door",
    "description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_door.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Iron Helmet",
    "namespacedId": "iron_helmet",
    "description": "Helmets are a type of armor that covers the head of the player. There are seven types of helmets: leather cap, chainmail helmet, iron helmet, diamond helmet, gold helmet, netherite helmet, and turtle shell.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_helmet.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Iron Hoe",
    "namespacedId": "iron_hoe",
    "description": "A hoe is a tool used to till dirt and grass blocks into farmland, as well as to harvest certain plant-based blocks quickly.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_hoe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Iron Horse Armor",
    "namespacedId": "iron_horse_armor",
    "description": "Horse armor[note 1] is a special type of armor that can be given to a horse to wear.  Only normal horses can wear armor; donkey, mule and undead variants such as skeleton horses and zombie horses cannot be equipped with armor. Horse armor decreases damage done to horses when hit by melee attack or a ranged attack from the player or another mob. Horse armor does not decrease the fall damage of a horse or its speed when worn.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_horse_armor.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Iron Ingot",
    "namespacedId": "iron_ingot",
    "description": "Iron ingots are versatile metal ingots used extensively in crafting.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_ingot.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Iron Leggings",
    "namespacedId": "iron_leggings",
    "description": "Leggings are a type of armor that covers the lower body of the player. There are six types of leggings: leather pants, chainmail leggings, iron leggings, diamond leggings, gold leggings and netherite leggings.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_leggings.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Iron Nugget",
    "namespacedId": "iron_nugget",
    "description": "Iron nuggets are pieces of iron that can be obtained by smelting iron tools/weapons or iron/chainmail armor. One iron nugget is worth one-ninth of an iron ingot.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_nugget.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Iron Ore",
    "namespacedId": "iron_ore",
    "description": "Iron ore is a mineral block found underground. It is a source of raw iron, which can be smelted into iron ingots.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Iron Pickaxe",
    "namespacedId": "iron_pickaxe",
    "description": "A pickaxe is one of the most commonly used tools in the game, being required to mine all ores, rock, rock-based blocks and metal-based blocks. A pickaxe allows the player to mine blocks at faster speeds, depending on the material it is made from. Specific pickaxe materials are also required to harvest certain types of blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_pickaxe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Iron Shovel",
    "namespacedId": "iron_shovel",
    "description": "Shovels are tools used to ease the process of collecting dirt, sand and other blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_shovel.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Iron Sword",
    "namespacedId": "iron_sword",
    "description": "A sword is a melee weapon that is mainly used to damage entities and for cutting cobwebs or bamboo. A sword is made from one of six materials, in order of increasing quality and expense: wood, gold, stone, iron, diamond and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_sword.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Iron Trapdoor",
    "namespacedId": "iron_trapdoor",
    "description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
    "image": "https://minecraft-storage.vercel.app/images/items/iron_trapdoor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Item Frame",
    "namespacedId": "item_frame",
    "description": "An item frame is an entity‌[JE only] or block entity‌[BE only] that displays the item or block that is inside it.",
    "image": "https://minecraft-storage.vercel.app/images/items/item_frame.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jack o'Lantern",
    "namespacedId": "jack_o_lantern",
    "description": "A jack o'lantern is a solid block that provides light.",
    "image": "https://minecraft-storage.vercel.app/images/items/jack_o_lantern.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jigsaw Block",
    "namespacedId": "jigsaw",
    "description": "Jigsaw blocks are technical blocks used in the generation of some structures.",
    "image": "https://minecraft-storage.vercel.app/images/items/jigsaw.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Jukebox",
    "namespacedId": "jukebox",
    "description": "A jukebox is a block used to play music discs.",
    "image": "https://minecraft-storage.vercel.app/images/items/jukebox.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Jungle Boat",
    "namespacedId": "jungle_boat",
    "description": "A boat is both an item and a vehicle entity used primarily for fast transport of players and passenger mobs over bodies of water.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_boat.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Jungle Button",
    "namespacedId": "jungle_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Door",
    "namespacedId": "jungle_door",
    "description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_door.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Fence",
    "namespacedId": "jungle_fence",
    "description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_fence.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Fence Gate",
    "namespacedId": "jungle_fence_gate",
    "description": "A fence gate is a block that shares the functions of both the door and the fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_fence_gate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Leaves",
    "namespacedId": "jungle_leaves",
    "description": "Leaves are natural blocks that generate as part of trees.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_leaves.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Log",
    "namespacedId": "jungle_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Planks",
    "namespacedId": "jungle_planks",
    "description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_planks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Pressure Plate",
    "namespacedId": "jungle_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Sapling",
    "namespacedId": "jungle_sapling",
    "description": "A sapling is a non-solid block that can be grown into a tree.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_sapling.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Sign",
    "namespacedId": "jungle_sign",
    "description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_sign.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Jungle Slab",
    "namespacedId": "jungle_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Stairs",
    "namespacedId": "jungle_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Trapdoor",
    "namespacedId": "jungle_trapdoor",
    "description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_trapdoor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Jungle Wood",
    "namespacedId": "jungle_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/jungle_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Kelp",
    "namespacedId": "kelp",
    "description": "Kelp is an underwater plant that generates in most oceans.",
    "image": "https://minecraft-storage.vercel.app/images/items/kelp.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Knowledge Book",
    "namespacedId": "knowledge_book",
    "description": "A knowledge book is a utility item that reveals available crafting recipes to the player when used.",
    "image": "https://minecraft-storage.vercel.app/images/items/knowledge_book.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Ladder",
    "namespacedId": "ladder",
    "description": "Ladders are wooden blocks used for climbing walls either vertically or horizontally. They can be placed only on the sides of other blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/ladder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lantern",
    "namespacedId": "lantern",
    "description": "Lanterns are blocks that emit light.",
    "image": "https://minecraft-storage.vercel.app/images/items/lantern.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lapis Lazuli",
    "namespacedId": "lapis_lazuli",
    "description": "Lapis lazuli is a mineral used for enchanting and decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/lapis_lazuli.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lapis Lazuli Ore",
    "namespacedId": "lapis_ore",
    "description": "Lapis lazuli ore is the ore block from which lapis lazuli is obtained.",
    "image": "https://minecraft-storage.vercel.app/images/items/lapis_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Large Amethyst Bud",
    "namespacedId": "large_amethyst_bud",
    "description": "Amethyst buds are the first three stages of growth of amethyst clusters, which grow on budding amethyst.",
    "image": "https://minecraft-storage.vercel.app/images/items/large_amethyst_bud.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Large Fern",
    "namespacedId": "large_fern",
    "description": "Grass is a non-solid plant block that has wheat seeds as a drop. Its color is biome-dependent, and matches the color of grass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/large_fern.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Lava Bucket",
    "namespacedId": "lava_bucket",
    "description": "A lava bucket is a bucket filled with lava.",
    "image": "https://minecraft-storage.vercel.app/images/items/lava_bucket.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lead",
    "namespacedId": "lead",
    "description": "Leads are tools used to leash and lead passive and neutral animals, golems and some monsters.",
    "image": "https://minecraft-storage.vercel.app/images/items/lead.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Leather",
    "namespacedId": "leather",
    "description": "Leather is an item used to make item frames, armor and books.",
    "image": "https://minecraft-storage.vercel.app/images/items/leather.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Leather Boots",
    "namespacedId": "leather_boots",
    "description": "Boots are a type of armor that covers the feet of the player. There are six types of boots: leather boots, chainmail boots, iron boots, diamond boots, gold boots, and netherite boots.",
    "image": "https://minecraft-storage.vercel.app/images/items/leather_boots.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Leather Cap",
    "namespacedId": "leather_helmet",
    "description": "Helmets are a type of armor that covers the head of the player. There are seven types of helmets: leather cap, chainmail helmet, iron helmet, diamond helmet, gold helmet, netherite helmet, and turtle shell.",
    "image": "https://minecraft-storage.vercel.app/images/items/leather_helmet.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Leather Horse Armor",
    "namespacedId": "leather_horse_armor",
    "description": "Horse armor[note 1] is a special type of armor that can be given to a horse to wear.  Only normal horses can wear armor; donkey, mule and undead variants such as skeleton horses and zombie horses cannot be equipped with armor. Horse armor decreases damage done to horses when hit by melee attack or a ranged attack from the player or another mob. Horse armor does not decrease the fall damage of a horse or its speed when worn.",
    "image": "https://minecraft-storage.vercel.app/images/items/leather_horse_armor.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Leather Pants",
    "namespacedId": "leather_leggings",
    "description": "Leggings are a type of armor that covers the lower body of the player. There are six types of leggings: leather pants, chainmail leggings, iron leggings, diamond leggings, gold leggings and netherite leggings.",
    "image": "https://minecraft-storage.vercel.app/images/items/leather_leggings.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Leather Tunic",
    "namespacedId": "leather_chestplate",
    "description": "Chestplates are a type of armor that covers the upper body of the player. There are six types of chestplates: leather, chainmail, iron, diamond, gold and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/leather_chestplate.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lectern",
    "namespacedId": "lectern",
    "description": "A lectern is a librarian's job site block found in villages. It is used to hold books for multiple players to read in multiplayer.",
    "image": "https://minecraft-storage.vercel.app/images/items/lectern.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lever",
    "namespacedId": "lever",
    "description": "A lever is a non-solid block that can provide switchable redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/lever.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light",
    "namespacedId": "light",
    "description": "Light blocks (in Bedrock Edition) or lights (in Java Edition) are invisible blocks, primarily intended for map makers, that can produce any light level from 0 to 15. The light block is also the only light-emitting block capable of producing light level 8.",
    "image": "https://minecraft-storage.vercel.app/images/items/light.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Light Blue Banner",
    "namespacedId": "light_blue_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Light Blue Bed",
    "namespacedId": "light_blue_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Light Blue Candle",
    "namespacedId": "light_blue_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Blue Carpet",
    "namespacedId": "light_blue_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Blue Concrete",
    "namespacedId": "light_blue_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Blue Concrete Powder",
    "namespacedId": "light_blue_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Blue Dye",
    "namespacedId": "light_blue_dye",
    "description": "Light blue dye is a quasi-primary dye.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Blue Glazed Terracotta",
    "namespacedId": "light_blue_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Light Blue Shulker Box",
    "namespacedId": "light_blue_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Light Blue Stained Glass",
    "namespacedId": "light_blue_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Blue Stained Glass Pane",
    "namespacedId": "light_blue_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Blue Terracotta",
    "namespacedId": "light_blue_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Light Blue Wool",
    "namespacedId": "light_blue_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_blue_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Gray Banner",
    "namespacedId": "light_gray_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Light Gray Bed",
    "namespacedId": "light_gray_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Light Gray Candle",
    "namespacedId": "light_gray_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Gray Carpet",
    "namespacedId": "light_gray_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Gray Concrete",
    "namespacedId": "light_gray_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Gray Concrete Powder",
    "namespacedId": "light_gray_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Gray Dye",
    "namespacedId": "light_gray_dye",
    "description": "Light gray dye is a quasi-primary dye.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Gray Glazed Terracotta",
    "namespacedId": "light_gray_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Light Gray Shulker Box",
    "namespacedId": "light_gray_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Light Gray Stained Glass",
    "namespacedId": "light_gray_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Gray Stained Glass Pane",
    "namespacedId": "light_gray_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Gray Terracotta",
    "namespacedId": "light_gray_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Light Gray Wool",
    "namespacedId": "light_gray_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/light_gray_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Light Weighted Pressure Plate",
    "namespacedId": "light_weighted_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/light_weighted_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lightning Rod",
    "namespacedId": "lightning_rod",
    "description": "A lightning rod is a block used to divert lightning strikes.",
    "image": "https://minecraft-storage.vercel.app/images/items/lightning_rod.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lilac",
    "namespacedId": "lilac",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/lilac.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lily Pad",
    "namespacedId": "lily_pad",
    "description": "A lily pad is a short, flat non-solid block that can be found naturally growing only on water, in swamps and wheat farm rooms in woodland mansions.",
    "image": "https://minecraft-storage.vercel.app/images/items/lily_pad.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lily of the Valley",
    "namespacedId": "lily_of_the_valley",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/lily_of_the_valley.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lime Banner",
    "namespacedId": "lime_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Lime Bed",
    "namespacedId": "lime_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lime Candle",
    "namespacedId": "lime_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lime Carpet",
    "namespacedId": "lime_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lime Concrete",
    "namespacedId": "lime_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lime Concrete Powder",
    "namespacedId": "lime_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lime Dye",
    "namespacedId": "lime_dye",
    "description": "Lime dye is a quasi-primary dye obtained by combining one green dye and one white dye in a crafting square, or by smelting a sea pickle.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lime Glazed Terracotta",
    "namespacedId": "lime_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Lime Shulker Box",
    "namespacedId": "lime_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lime Stained Glass",
    "namespacedId": "lime_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lime Stained Glass Pane",
    "namespacedId": "lime_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lime Terracotta",
    "namespacedId": "lime_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Lime Wool",
    "namespacedId": "lime_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/lime_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Lingering Potion of Fire Resistance",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_fire_resistance.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Harming",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_harming.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Healing",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_healing.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Invisibility",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_invisibility.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Leaping",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_leaping.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Luck",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_luck.gif",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Night Vision",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_night_vision.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Poison",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_poison.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Regeneration",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_regeneration.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Slow Falling",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_slow_falling.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Slowness",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_slowness.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Strength",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_strength.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Swiftness",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_swiftness.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Water Breathing",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_water_breathing.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of Weakness",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_weakness.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Potion of the Turtle Master",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_potion_of_the_turtle_master.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Lingering Water Bottle",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/lingering_water_bottle.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Llama Spawn Egg",
    "namespacedId": "llama_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/llama_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Lodestone",
    "namespacedId": "lodestone",
    "description": "A lodestone is a block that can be used to alter compasses to point towards it. It can be used in all three dimensions.",
    "image": "https://minecraft-storage.vercel.app/images/items/lodestone.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Loom",
    "namespacedId": "loom",
    "description": "A loom is used to apply patterns on banners. It is also used as a shepherd's job site block that is found in villages.",
    "image": "https://minecraft-storage.vercel.app/images/items/loom.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magenta Banner",
    "namespacedId": "magenta_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Magenta Bed",
    "namespacedId": "magenta_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Magenta Candle",
    "namespacedId": "magenta_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magenta Carpet",
    "namespacedId": "magenta_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magenta Concrete",
    "namespacedId": "magenta_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magenta Concrete Powder",
    "namespacedId": "magenta_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magenta Dye",
    "namespacedId": "magenta_dye",
    "description": "Magenta dye is a quasi-primary color dye.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magenta Glazed Terracotta",
    "namespacedId": "magenta_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Magenta Shulker Box",
    "namespacedId": "magenta_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Magenta Stained Glass",
    "namespacedId": "magenta_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magenta Stained Glass Pane",
    "namespacedId": "magenta_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magenta Terracotta",
    "namespacedId": "magenta_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Magenta Wool",
    "namespacedId": "magenta_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/magenta_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magma Block",
    "namespacedId": "magma_block",
    "description": "A magma block is a light-emitting naturally-occurring block found in the Nether and the Overworld. It causes continuous damage while being stepped on, considered fire damage, except it does not light mobs on fire.",
    "image": "https://minecraft-storage.vercel.app/images/items/magma_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magma Cream",
    "namespacedId": "magma_cream",
    "description": "Magma cream is an item used in brewing to create potions of Fire Resistance, and to manually craft magma blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/magma_cream.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Magma Cube Spawn Egg",
    "namespacedId": "magma_cube_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/magma_cube_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Map",
    "namespacedId": "filled_map",
    "description": "A map is an item used to view explored terrain and mark landmarks.",
    "image": "https://minecraft-storage.vercel.app/images/items/filled_map.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Map",
    "namespacedId": "filled_map",
    "description": "A map is an item used to view explored terrain and mark landmarks.",
    "image": "https://minecraft-storage.vercel.app/images/items/map.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Medium Amethyst Bud",
    "namespacedId": "medium_amethyst_bud",
    "description": "Amethyst buds are the first three stages of growth of amethyst clusters, which grow on budding amethyst.",
    "image": "https://minecraft-storage.vercel.app/images/items/medium_amethyst_bud.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Melon",
    "namespacedId": "melon",
    "description": "A melon is a fruit block that grows from a fully-grown melon stem, which in turn is grown from melon seeds.",
    "image": "https://minecraft-storage.vercel.app/images/items/melon.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Melon Seeds",
    "namespacedId": "melon_seeds",
    "description": "Melon seeds are an item that can be used to grow melon plants.",
    "image": "https://minecraft-storage.vercel.app/images/items/melon_seeds.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Melon Slice",
    "namespacedId": "melon_slice",
    "description": "A melon slice is a food item that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/melon_slice.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Milk Bucket",
    "namespacedId": "milk_bucket",
    "description": "A milk bucket is a drink and ingredient obtained from cows, mooshrooms, and goats.",
    "image": "https://minecraft-storage.vercel.app/images/items/milk_bucket.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Minecart",
    "namespacedId": "minecart",
    "description": "A minecart is a train-like vehicle entity that runs on rails.",
    "image": "https://minecraft-storage.vercel.app/images/items/minecart.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Minecart with Chest",
    "namespacedId": "chest_minecart",
    "description": "A minecart with chest is a minecart with a chest inside it.",
    "image": "https://minecraft-storage.vercel.app/images/items/chest_minecart.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Minecart with Command Block",
    "namespacedId": "command_block_minecart",
    "description": "A minecart with command block is an impulse‌[JE only] or repeating‌[BE & EE only] command block inside a minecart.",
    "image": "https://minecraft-storage.vercel.app/images/items/command_block_minecart.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Minecart with Furnace",
    "namespacedId": "furnace_minecart",
    "description": "A minecart with furnace is a self-propelling minecart with a furnace inside. They can be used to move other minecarts.",
    "image": "https://minecraft-storage.vercel.app/images/items/furnace_minecart.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Minecart with Hopper",
    "namespacedId": "hopper_minecart",
    "description": "A minecart with hopper is a hopper inside a minecart.",
    "image": "https://minecraft-storage.vercel.app/images/items/hopper_minecart.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Minecart with TNT",
    "namespacedId": "tnt_minecart",
    "description": "A minecart with TNT is a block of TNT inside a minecart.",
    "image": "https://minecraft-storage.vercel.app/images/items/tnt_minecart.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Mooshroom Spawn Egg",
    "namespacedId": "mooshroom_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/mooshroom_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Moss Block",
    "namespacedId": "moss_block",
    "description": "A moss block is a natural block that can be spread to some other blocks by using bone meal.",
    "image": "https://minecraft-storage.vercel.app/images/items/moss_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Moss Carpet",
    "namespacedId": "moss_carpet",
    "description": "Moss Carpet is a thin decorative variant of the moss block.",
    "image": "https://minecraft-storage.vercel.app/images/items/moss_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mossy Cobblestone",
    "namespacedId": "mossy_cobblestone",
    "description": "Mossy cobblestone is a variant of cobblestone with moss on it. It is mainly used for crafting or as building block.",
    "image": "https://minecraft-storage.vercel.app/images/items/mossy_cobblestone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mossy Cobblestone Slab",
    "namespacedId": "mossy_cobblestone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/mossy_cobblestone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mossy Cobblestone Stairs",
    "namespacedId": "mossy_cobblestone_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/mossy_cobblestone_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mossy Cobblestone Wall",
    "namespacedId": "mossy_cobblestone_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/mossy_cobblestone_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mossy Stone Brick Slab",
    "namespacedId": "mossy_stone_brick_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/mossy_stone_brick_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mossy Stone Brick Stairs",
    "namespacedId": "mossy_stone_brick_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/mossy_stone_brick_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mossy Stone Brick Wall",
    "namespacedId": "mossy_stone_brick_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/mossy_stone_brick_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mossy Stone Bricks",
    "namespacedId": "mossy_stone_bricks",
    "description": "Stone bricks and the variants  cracked stone bricks,  mossy stone bricks, and  chiseled stone bricks are materials found in structures such as strongholds, igloo basements, jungle temples, ocean ruins and ruined portals.",
    "image": "https://minecraft-storage.vercel.app/images/items/mossy_stone_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mule Spawn Egg",
    "namespacedId": "mule_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/mule_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Mundane Lingering Potion",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/mundane_lingering_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Mundane Potion",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/mundane_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Mundane Splash Potion",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/mundane_splash_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Mushroom Stem",
    "namespacedId": "mushroom_stem",
    "description": "Mushroom blocks are solid blocks that make up huge mushrooms.\nThere are 3 kinds of mushroom blocks: red mushroom block, brown mushroom block and mushroom stem.",
    "image": "https://minecraft-storage.vercel.app/images/items/mushroom_stem.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Mushroom Stew",
    "namespacedId": "mushroom_stew",
    "description": "Mushroom stew is a food item.",
    "image": "https://minecraft-storage.vercel.app/images/items/mushroom_stew.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - 11)",
    "namespacedId": "music_disc_11",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_11.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - 13)",
    "namespacedId": "music_disc_13",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_13.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - blocks)",
    "namespacedId": "music_disc_blocks",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_blocks.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - cat)",
    "namespacedId": "music_disc_cat",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_cat.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - chirp)",
    "namespacedId": "music_disc_chirp",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_chirp.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - far)",
    "namespacedId": "music_disc_far",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_far.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - mall)",
    "namespacedId": "music_disc_mall",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_mall.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - mellohi)",
    "namespacedId": "music_disc_mellohi",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_mellohi.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - stal)",
    "namespacedId": "music_disc_stal",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_stal.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - strad)",
    "namespacedId": "music_disc_strad",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_strad.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - wait)",
    "namespacedId": "music_disc_wait",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_wait.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (C418 - ward)",
    "namespacedId": "music_disc_ward",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_ward.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Music Disc (Lena Raine - Pigstep)",
    "namespacedId": "music_disc_pigstep",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_pigstep.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Music Disc (Lena Raine - otherside)",
    "namespacedId": "music_disc_otherside",
    "description": "Music discs are 14 unique items that can be played in jukeboxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/music_disc_otherside.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Mycelium",
    "namespacedId": "mycelium",
    "description": "Mycelium is a particularly rare variant of dirt that is found naturally only in mushroom fields biomes. It has a particle effect that resembles tiny spores being released constantly from the surface.",
    "image": "https://minecraft-storage.vercel.app/images/items/mycelium.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Name Tag",
    "namespacedId": "name_tag",
    "description": "A name tag is an item used to name mobs in the world and prevent them from despawning naturally.",
    "image": "https://minecraft-storage.vercel.app/images/items/name_tag.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nautilus Shell",
    "namespacedId": "nautilus_shell",
    "description": "A nautilus shell is an item that is used for crafting conduits.",
    "image": "https://minecraft-storage.vercel.app/images/items/nautilus_shell.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Brick",
    "namespacedId": "nether_brick",
    "description": "A nether brick is an item made by smelting netherrack in a furnace.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_brick.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Brick Fence",
    "namespacedId": "nether_brick_fence",
    "description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_brick_fence.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Brick Slab",
    "namespacedId": "nether_brick_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_brick_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Brick Stairs",
    "namespacedId": "nether_brick_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_brick_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Brick Wall",
    "namespacedId": "nether_brick_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_brick_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Bricks",
    "namespacedId": "nether_bricks",
    "description": "Nether bricks  are blocks used to form nether fortresses in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Gold Ore",
    "namespacedId": "nether_gold_ore",
    "description": "Nether gold ore is a variant of gold ore found only in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_gold_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Nether Quartz",
    "namespacedId": "quartz",
    "description": "Nether quartz is a white mineral found in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/quartz.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Quartz Ore",
    "namespacedId": "nether_quartz_ore",
    "description": "Nether quartz ore is ore found in the Nether, and is a source of quartz.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_quartz_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Nether Sprouts",
    "namespacedId": "nether_sprouts",
    "description": "Nether sprouts are a non-solid fungi block that generate in warped forests.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_sprouts.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Star",
    "namespacedId": "nether_star",
    "description": "The nether star is a rare item dropped by the wither that is used solely to craft beacons.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_star.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Wart",
    "namespacedId": "nether_wart",
    "description": "Nether wart is a fungus found in the Nether that is vital in the creation of potions.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_wart.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Wart",
    "namespacedId": "nether_wart",
    "description": "Nether wart is a fungus found in the Nether that is vital in the creation of potions.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_wart.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Nether Wart Block",
    "namespacedId": "nether_wart_block",
    "description": "Nether wart blocks are decorative blocks found in crimson forests and crafted using Nether wart.",
    "image": "https://minecraft-storage.vercel.app/images/items/nether_wart_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Netherite Axe",
    "namespacedId": "netherite_axe",
    "description": "An axe is a tool mainly used to hasten the breaking of wood-based blocks, remove the surface layer of certain blocks, and as a melee weapon.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_axe.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Netherite Boots",
    "namespacedId": "netherite_boots",
    "description": "Boots are a type of armor that covers the feet of the player. There are six types of boots: leather boots, chainmail boots, iron boots, diamond boots, gold boots, and netherite boots.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_boots.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Netherite Chestplate",
    "namespacedId": "netherite_chestplate",
    "description": "Chestplates are a type of armor that covers the upper body of the player. There are six types of chestplates: leather, chainmail, iron, diamond, gold and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_chestplate.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Netherite Helmet",
    "namespacedId": "netherite_helmet",
    "description": "Helmets are a type of armor that covers the head of the player. There are seven types of helmets: leather cap, chainmail helmet, iron helmet, diamond helmet, gold helmet, netherite helmet, and turtle shell.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_helmet.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Netherite Hoe",
    "namespacedId": "netherite_hoe",
    "description": "A hoe is a tool used to till dirt and grass blocks into farmland, as well as to harvest certain plant-based blocks quickly.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_hoe.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Netherite Ingot",
    "namespacedId": "netherite_ingot",
    "description": "Netherite ingots are items obtained from crafting netherite scraps and gold ingots together, as well as loot from bastion remnant loot chests.  Unlike other items, they are immune to fire and lava damage. They are primarily used to upgrade diamond gear and craft lodestones.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_ingot.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Netherite Leggings",
    "namespacedId": "netherite_leggings",
    "description": "Leggings are a type of armor that covers the lower body of the player. There are six types of leggings: leather pants, chainmail leggings, iron leggings, diamond leggings, gold leggings and netherite leggings.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_leggings.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Netherite Pickaxe",
    "namespacedId": "netherite_pickaxe",
    "description": "A pickaxe is one of the most commonly used tools in the game, being required to mine all ores, rock, rock-based blocks and metal-based blocks. A pickaxe allows the player to mine blocks at faster speeds, depending on the material it is made from. Specific pickaxe materials are also required to harvest certain types of blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_pickaxe.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Netherite Scrap",
    "namespacedId": "netherite_scrap",
    "description": "Netherite scrap is a material smelted from ancient debris, which is found in the Nether. It is used solely for crafting netherite ingots. Like most netherite-related items, it is not flammable.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_scrap.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Netherite Shovel",
    "namespacedId": "netherite_shovel",
    "description": "Shovels are tools used to ease the process of collecting dirt, sand and other blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_shovel.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Netherite Sword",
    "namespacedId": "netherite_sword",
    "description": "A sword is a melee weapon that is mainly used to damage entities and for cutting cobwebs or bamboo. A sword is made from one of six materials, in order of increasing quality and expense: wood, gold, stone, iron, diamond and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherite_sword.png",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Netherrack",
    "namespacedId": "netherrack",
    "description": "Netherrack is a rock-like block found in the Nether and in Ruined Portals.",
    "image": "https://minecraft-storage.vercel.app/images/items/netherrack.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Note Block",
    "namespacedId": "note_block",
    "description": "A note block is a musical block that emits sounds when powered with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/note_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Boat",
    "namespacedId": "oak_boat",
    "description": "A boat is both an item and a vehicle entity used primarily for fast transport of players and passenger mobs over bodies of water.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_boat.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Oak Button",
    "namespacedId": "oak_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Door",
    "namespacedId": "oak_door",
    "description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_door.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Fence",
    "namespacedId": "oak_fence",
    "description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_fence.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Fence Gate",
    "namespacedId": "oak_fence_gate",
    "description": "A fence gate is a block that shares the functions of both the door and the fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_fence_gate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Leaves",
    "namespacedId": "oak_leaves",
    "description": "Leaves are natural blocks that generate as part of trees.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_leaves.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Log",
    "namespacedId": "oak_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Planks",
    "namespacedId": "oak_planks",
    "description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_planks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Pressure Plate",
    "namespacedId": "oak_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Sapling",
    "namespacedId": "oak_sapling",
    "description": "A sapling is a non-solid block that can be grown into a tree.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_sapling.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Sign",
    "namespacedId": "oak_sign",
    "description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_sign.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Oak Slab",
    "namespacedId": "oak_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Stairs",
    "namespacedId": "oak_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Trapdoor",
    "namespacedId": "oak_trapdoor",
    "description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_trapdoor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oak Wood",
    "namespacedId": "oak_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/oak_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Observer",
    "namespacedId": "observer",
    "description": "An observer is a block that emits a redstone signal when the block or fluid it faces experiences a change.",
    "image": "https://minecraft-storage.vercel.app/images/items/observer.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Obsidian",
    "namespacedId": "obsidian",
    "description": "Obsidian is a dark purple block known for its high blast resistance and strength. It is most commonly found when water flows over lava. Among other things, obsidian is used to construct the frames of the nether portal and enchanting tables.",
    "image": "https://minecraft-storage.vercel.app/images/items/obsidian.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Ocean Explorer Map",
    "namespacedId": "filled_map",
    "description": "An explorer map is a special map used to aid in finding rare generated structures, including woodland mansions, ocean monuments, and buried treasures.",
    "image": "https://minecraft-storage.vercel.app/images/items/ocean_explorer_map.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Ocelot Spawn Egg",
    "namespacedId": "ocelot_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/ocelot_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Orange Banner",
    "namespacedId": "orange_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Orange Bed",
    "namespacedId": "orange_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Orange Candle",
    "namespacedId": "orange_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Orange Carpet",
    "namespacedId": "orange_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Orange Concrete",
    "namespacedId": "orange_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Orange Concrete Powder",
    "namespacedId": "orange_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Orange Dye",
    "namespacedId": "orange_dye",
    "description": "Orange dye is a quasi-primary dye crafted from orange tulips, or by combining one red dye with one yellow dye.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Orange Glazed Terracotta",
    "namespacedId": "orange_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Orange Shulker Box",
    "namespacedId": "orange_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Orange Stained Glass",
    "namespacedId": "orange_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Orange Stained Glass Pane",
    "namespacedId": "orange_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Orange Terracotta",
    "namespacedId": "orange_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Orange Tulip",
    "namespacedId": "orange_tulip",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_tulip.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Orange Wool",
    "namespacedId": "orange_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/orange_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oxeye Daisy",
    "namespacedId": "oxeye_daisy",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/oxeye_daisy.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oxidized Copper",
    "namespacedId": "oxidized_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/oxidized_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oxidized Cut Copper",
    "namespacedId": "oxidized_cut_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/oxidized_cut_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oxidized Cut Copper Slab",
    "namespacedId": "oxidized_cut_copper_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/oxidized_cut_copper_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Oxidized Cut Copper Stairs",
    "namespacedId": "oxidized_cut_copper_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/oxidized_cut_copper_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Packed Ice",
    "namespacedId": "packed_ice",
    "description": "Packed ice is an opaque solid block variant of ice. Unlike regular ice, it does not melt near bright  light sources.",
    "image": "https://minecraft-storage.vercel.app/images/items/packed_ice.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Painting",
    "namespacedId": "painting",
    "description": "Paintings are decorative entities that hang on walls.",
    "image": "https://minecraft-storage.vercel.app/images/items/painting.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Panda Spawn Egg",
    "namespacedId": "panda_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/panda_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Paper",
    "namespacedId": "paper",
    "description": "Paper is an item crafted from sugar cane.",
    "image": "https://minecraft-storage.vercel.app/images/items/paper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Parrot Spawn Egg",
    "namespacedId": "parrot_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/parrot_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Peony",
    "namespacedId": "peony",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/peony.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Petrified Oak Slab",
    "namespacedId": "petrified_oak_slab",
    "description": "Petrified oak slabs are a unique type of slab only available from the Creative inventory, commands or upgrading from legacy versions - unlike all other slabs, they are unobtainable through conventional Survival gameplay.",
    "image": "https://minecraft-storage.vercel.app/images/items/petrified_oak_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Phantom Membrane",
    "namespacedId": "phantom_membrane",
    "description": "Phantom membranes are leathery skins obtained from killing phantoms.",
    "image": "https://minecraft-storage.vercel.app/images/items/phantom_membrane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Phantom Spawn Egg",
    "namespacedId": "phantom_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/phantom_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Pig Spawn Egg",
    "namespacedId": "pig_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/pig_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Piglin Brute Spawn Egg",
    "namespacedId": "piglin_brute_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/piglin_brute_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Piglin Spawn Egg",
    "namespacedId": "piglin_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/piglin_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Pillager Spawn Egg",
    "namespacedId": "pillager_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/pillager_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Pink Banner",
    "namespacedId": "pink_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Pink Bed",
    "namespacedId": "pink_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Pink Candle",
    "namespacedId": "pink_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pink Carpet",
    "namespacedId": "pink_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pink Concrete",
    "namespacedId": "pink_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pink Concrete Powder",
    "namespacedId": "pink_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pink Dye",
    "namespacedId": "pink_dye",
    "description": "Pink dye is a quasi-primary color dye.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pink Glazed Terracotta",
    "namespacedId": "pink_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Pink Shulker Box",
    "namespacedId": "pink_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Pink Stained Glass",
    "namespacedId": "pink_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pink Stained Glass Pane",
    "namespacedId": "pink_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pink Terracotta",
    "namespacedId": "pink_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Pink Tulip",
    "namespacedId": "pink_tulip",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_tulip.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pink Wool",
    "namespacedId": "pink_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/pink_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Piston",
    "namespacedId": "piston",
    "description": "A piston is a block capable of pushing blocks, players, and mobs when given a redstone pulse.",
    "image": "https://minecraft-storage.vercel.app/images/items/piston.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Player Head",
    "namespacedId": "player_head",
    "description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
    "image": "https://minecraft-storage.vercel.app/images/items/player_head.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Podzol",
    "namespacedId": "podzol",
    "description": "Podzol is a dirt-type block that naturally blankets the surface of the old growth taiga and bamboo jungles, along with their respective variants. Grass blocks and mycelium cannot spread to this block.",
    "image": "https://minecraft-storage.vercel.app/images/items/podzol.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pointed Dripstone",
    "namespacedId": "pointed_dripstone",
    "description": "Pointed dripstone is a block that makes up stalactites and stalagmites.",
    "image": "https://minecraft-storage.vercel.app/images/items/pointed_dripstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Poisonous Potato",
    "namespacedId": "poisonous_potato",
    "description": "A poisonous potato is a type of potato that can poison the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/poisonous_potato.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polar Bear Spawn Egg",
    "namespacedId": "polar_bear_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/polar_bear_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Polished Andesite",
    "namespacedId": "polished_andesite",
    "description": "Andesite is a block of igneous rock, most often found in large pockets in the ground.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_andesite.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Andesite Slab",
    "namespacedId": "polished_andesite_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_andesite_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Andesite Stairs",
    "namespacedId": "polished_andesite_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_andesite_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Basalt",
    "namespacedId": "polished_basalt",
    "description": "Basalt is an igneous rock found in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_basalt.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone",
    "namespacedId": "polished_blackstone",
    "description": "Polished blackstone is the stone-like polished variation of blackstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone Brick Slab",
    "namespacedId": "polished_blackstone_brick_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone_brick_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone Brick Stairs",
    "namespacedId": "polished_blackstone_brick_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone_brick_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone Brick Wall",
    "namespacedId": "polished_blackstone_brick_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone_brick_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone Bricks",
    "namespacedId": "polished_blackstone_bricks",
    "description": "Polished blackstone bricks are a decorative version of polished blackstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone Button",
    "namespacedId": "polished_blackstone_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone Pressure Plate",
    "namespacedId": "polished_blackstone_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone Slab",
    "namespacedId": "polished_blackstone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone Stairs",
    "namespacedId": "polished_blackstone_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Blackstone Wall",
    "namespacedId": "polished_blackstone_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_blackstone_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Deepslate",
    "namespacedId": "polished_deepslate",
    "description": "Polished deepslate is the stone-like polished version of deepslate.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_deepslate.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Polished Deepslate Slab",
    "namespacedId": "polished_deepslate_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_deepslate_slab.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Polished Deepslate Stairs",
    "namespacedId": "polished_deepslate_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_deepslate_stairs.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Polished Deepslate Wall",
    "namespacedId": "polished_deepslate_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_deepslate_wall.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Polished Diorite",
    "namespacedId": "polished_diorite",
    "description": "Diorite is a block of igneous rock, found in large pockets in the ground.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_diorite.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Diorite Slab",
    "namespacedId": "polished_diorite_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_diorite_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Diorite Stairs",
    "namespacedId": "polished_diorite_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_diorite_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Granite",
    "namespacedId": "polished_granite",
    "description": "Granite is a block of igneous rock, found in large pockets in the ground.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_granite.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Granite Slab",
    "namespacedId": "polished_granite_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_granite_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Polished Granite Stairs",
    "namespacedId": "polished_granite_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/polished_granite_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Popped Chorus Fruit",
    "namespacedId": "popped_chorus_fruit",
    "description": "Popped chorus fruit is an item obtained by smelting chorus fruit, and used to craft end rods and purpur blocks. Unlike raw chorus fruit, the popped fruit is inedible.",
    "image": "https://minecraft-storage.vercel.app/images/items/popped_chorus_fruit.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Poppy",
    "namespacedId": "poppy",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/poppy.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Potato",
    "namespacedId": "potato",
    "description": "A potato is a food item that can be planted, consumed raw, or cooked in a furnace or a campfire to make baked potatoes.",
    "image": "https://minecraft-storage.vercel.app/images/items/potato.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Potion of Fire Resistance",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_fire_resistance.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Harming",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_harming.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Healing",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_healing.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Invisibility",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_invisibility.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Leaping",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_leaping.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Luck",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_luck.gif",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Potion of Night Vision",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_night_vision.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Poison",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_poison.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Regeneration",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_regeneration.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Slow Falling",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_slow_falling.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Slowness",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_slowness.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Strength",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_strength.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Swiftness",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_swiftness.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Water Breathing",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_water_breathing.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of Weakness",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_weakness.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Potion of the Turtle Master",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/potion_of_the_turtle_master.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Powder Snow Bucket",
    "namespacedId": "powder_snow_bucket",
    "description": "A powder snow bucket is a bucket with powder snow inside.",
    "image": "https://minecraft-storage.vercel.app/images/items/powder_snow_bucket.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Powered Rail",
    "namespacedId": "powered_rail",
    "description": "A powered rail is a type of rail that is used to increase or decrease the velocity of moving minecarts.",
    "image": "https://minecraft-storage.vercel.app/images/items/powered_rail.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Prismarine",
    "namespacedId": "prismarine",
    "description": "Prismarine is a type of stone that appears underwater in ruins and ocean monuments. It periodically changes color between blue and green.",
    "image": "https://minecraft-storage.vercel.app/images/items/prismarine.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Prismarine Brick Slab",
    "namespacedId": "prismarine_brick_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/prismarine_brick_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Prismarine Brick Stairs",
    "namespacedId": "prismarine_brick_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/prismarine_brick_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Prismarine Bricks",
    "namespacedId": "prismarine_bricks",
    "description": "Prismarine is a type of stone that appears underwater in ruins and ocean monuments. It periodically changes color between blue and green.",
    "image": "https://minecraft-storage.vercel.app/images/items/prismarine_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Prismarine Crystals",
    "namespacedId": "prismarine_crystals",
    "description": "Prismarine crystals are items obtained by defeating guardians or elder guardians. They are used along with prismarine shards to craft sea lanterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/prismarine_crystals.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Prismarine Shard",
    "namespacedId": "prismarine_shard",
    "description": "A prismarine shard is an item obtained by defeating guardians or elder guardians. It can be used to craft various prismarine blocks as well as sea lanterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/prismarine_shard.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Prismarine Slab",
    "namespacedId": "prismarine_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/prismarine_slab.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Prismarine Stairs",
    "namespacedId": "prismarine_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/prismarine_stairs.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Prismarine Wall",
    "namespacedId": "prismarine_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/prismarine_wall.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pufferfish",
    "namespacedId": "pufferfish",
    "description": "A pufferfish is a poisonous type of fish that is used to brew water breathing potions.",
    "image": "https://minecraft-storage.vercel.app/images/items/pufferfish.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pufferfish Spawn Egg",
    "namespacedId": "pufferfish_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/pufferfish_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Pumpkin",
    "namespacedId": "pumpkin",
    "description": "A pumpkin is a fruit block that appears in patches in grassy biomes. Pumpkins have the same texture on all 4 sides.",
    "image": "https://minecraft-storage.vercel.app/images/items/pumpkin.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pumpkin Pie",
    "namespacedId": "pumpkin_pie",
    "description": "Pumpkin pie is a food item that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/pumpkin_pie.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Pumpkin Seeds",
    "namespacedId": "pumpkin_seeds",
    "description": "Pumpkin Seeds are an item that can be used to grow pumpkin plants.",
    "image": "https://minecraft-storage.vercel.app/images/items/pumpkin_seeds.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purple Banner",
    "namespacedId": "purple_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Purple Bed",
    "namespacedId": "purple_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Purple Candle",
    "namespacedId": "purple_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purple Carpet",
    "namespacedId": "purple_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purple Concrete",
    "namespacedId": "purple_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purple Concrete Powder",
    "namespacedId": "purple_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purple Dye",
    "namespacedId": "purple_dye",
    "description": "Purple dye is a secondary dye color created by combining red dye and blue dye in a crafting grid.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purple Glazed Terracotta",
    "namespacedId": "purple_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Purple Shulker Box",
    "namespacedId": "purple_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Purple Stained Glass",
    "namespacedId": "purple_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purple Stained Glass Pane",
    "namespacedId": "purple_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purple Terracotta",
    "namespacedId": "purple_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Purple Wool",
    "namespacedId": "purple_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/purple_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purpur Block",
    "namespacedId": "purpur_block",
    "description": "Purpur blocks and purpur pillars are decorative blocks that are naturally generated in End cities and End ships.",
    "image": "https://minecraft-storage.vercel.app/images/items/purpur_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purpur Pillar",
    "namespacedId": "purpur_pillar",
    "description": "Purpur blocks and purpur pillars are decorative blocks that are naturally generated in End cities and End ships.",
    "image": "https://minecraft-storage.vercel.app/images/items/purpur_pillar.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purpur Slab",
    "namespacedId": "purpur_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/purpur_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Purpur Stairs",
    "namespacedId": "purpur_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/purpur_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Quartz Bricks",
    "namespacedId": "quartz_bricks",
    "description": "A block of quartz is a mineral block used only for decoration. It can be turned into a chiseled quartz block, quartz pillar, or quartz bricks.",
    "image": "https://minecraft-storage.vercel.app/images/items/quartz_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Quartz Pillar",
    "namespacedId": "quartz_pillar",
    "description": "A block of quartz is a mineral block used only for decoration. It can be turned into a chiseled quartz block, quartz pillar, or quartz bricks.",
    "image": "https://minecraft-storage.vercel.app/images/items/quartz_pillar.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Quartz Slab",
    "namespacedId": "quartz_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/quartz_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Quartz Stairs",
    "namespacedId": "quartz_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/quartz_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Rabbit Hide",
    "namespacedId": "rabbit_hide",
    "description": "Rabbit hide is an item dropped by rabbits.",
    "image": "https://minecraft-storage.vercel.app/images/items/rabbit_hide.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Rabbit Spawn Egg",
    "namespacedId": "rabbit_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/rabbit_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Rabbit Stew",
    "namespacedId": "rabbit_stew",
    "description": "Rabbit stew is a food item that can be eaten by the player.",
    "image": "https://minecraft-storage.vercel.app/images/items/rabbit_stew.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Rabbit's Foot",
    "namespacedId": "rabbit_foot",
    "description": "A rabbit's foot is a brewing item obtained from rabbits.",
    "image": "https://minecraft-storage.vercel.app/images/items/rabbit_foot.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Rail",
    "namespacedId": "rail",
    "description": "Rails are non-solid blocks that provide a path along which minecarts can travel.",
    "image": "https://minecraft-storage.vercel.app/images/items/rail.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Ravager Spawn Egg",
    "namespacedId": "ravager_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/ravager_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Raw Beef",
    "namespacedId": "beef",
    "description": "Raw beef is a food item that can be eaten by the player or cooked in a furnace, smoker, or campfire to make steak.",
    "image": "https://minecraft-storage.vercel.app/images/items/beef.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Raw Chicken",
    "namespacedId": "chicken",
    "description": "Raw chicken is a food item that can be eaten by the player. It can be cooked in a furnace, smoker, or a campfire to make cooked chicken.",
    "image": "https://minecraft-storage.vercel.app/images/items/chicken.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Raw Cod",
    "namespacedId": "cod",
    "description": "Raw cod is a food item that can be found when fishing. It restores 2 hunger and can be cooked to become cooked cod.",
    "image": "https://minecraft-storage.vercel.app/images/items/cod.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Raw Copper",
    "namespacedId": "raw_copper",
    "description": "Raw copper is a raw metal resource obtained from mining copper ore.",
    "image": "https://minecraft-storage.vercel.app/images/items/raw_copper.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Raw Gold",
    "namespacedId": "raw_gold",
    "description": "Raw gold is a raw metal resource obtained from mining gold ore.",
    "image": "https://minecraft-storage.vercel.app/images/items/raw_gold.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Raw Iron",
    "namespacedId": "raw_iron",
    "description": "Raw iron is a raw metal resource obtained from mining iron ore.",
    "image": "https://minecraft-storage.vercel.app/images/items/raw_iron.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Raw Mutton",
    "namespacedId": "mutton",
    "description": "Raw mutton is a food item dropped by sheep when killed.",
    "image": "https://minecraft-storage.vercel.app/images/items/mutton.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Raw Porkchop",
    "namespacedId": "porkchop",
    "description": "A raw porkchop is a food item that can be eaten by the player or cooked to make a cooked porkchop.",
    "image": "https://minecraft-storage.vercel.app/images/items/porkchop.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Raw Rabbit",
    "namespacedId": "rabbit",
    "description": "Raw rabbit is a food item that can be eaten by the player, or cooked in a furnace or a campfire to make cooked rabbit.",
    "image": "https://minecraft-storage.vercel.app/images/items/rabbit.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Raw Salmon",
    "namespacedId": "salmon",
    "description": "Raw salmon is a food item.",
    "image": "https://minecraft-storage.vercel.app/images/items/salmon.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Banner",
    "namespacedId": "red_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Red Bed",
    "namespacedId": "red_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Red Candle",
    "namespacedId": "red_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Carpet",
    "namespacedId": "red_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Concrete",
    "namespacedId": "red_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Concrete Powder",
    "namespacedId": "red_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Dye",
    "namespacedId": "red_dye",
    "description": "Red dye is a primary color dye created primarily from flowers.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Glazed Terracotta",
    "namespacedId": "red_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Red Mushroom",
    "namespacedId": "red_mushroom",
    "description": "A mushroom is a variety of fungus that grows and spreads in dark areas. Mushrooms generate as red or brown in color, and small or huge in size.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_mushroom.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Mushroom Block",
    "namespacedId": "red_mushroom_block",
    "description": "Mushroom blocks are solid blocks that make up huge mushrooms.\nThere are 3 kinds of mushroom blocks: red mushroom block, brown mushroom block and mushroom stem.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_mushroom_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Nether Brick Slab",
    "namespacedId": "red_nether_brick_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_nether_brick_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Nether Brick Stairs",
    "namespacedId": "red_nether_brick_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_nether_brick_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Nether Brick Wall",
    "namespacedId": "red_nether_brick_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_nether_brick_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Nether Bricks",
    "namespacedId": "red_nether_bricks",
    "description": "Nether bricks  are blocks used to form nether fortresses in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_nether_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Sand",
    "namespacedId": "red_sand",
    "description": "Sand is a block affected by gravity.\n Red sand is a variation of sand found in the badlands biome.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_sand.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Sandstone",
    "namespacedId": "red_sandstone",
    "description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_sandstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Sandstone Slab",
    "namespacedId": "red_sandstone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_sandstone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Sandstone Stairs",
    "namespacedId": "red_sandstone_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_sandstone_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Sandstone Wall",
    "namespacedId": "red_sandstone_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_sandstone_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Shulker Box",
    "namespacedId": "red_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Red Stained Glass",
    "namespacedId": "red_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Stained Glass Pane",
    "namespacedId": "red_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Terracotta",
    "namespacedId": "red_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Red Tulip",
    "namespacedId": "red_tulip",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_tulip.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Red Wool",
    "namespacedId": "red_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/red_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Redstone Comparator",
    "namespacedId": "comparator",
    "description": "A redstone comparator is a redstone component used to maintain, compare, or subtract signal strength, or to measure certain block states (primarily the fullness of containers).",
    "image": "https://minecraft-storage.vercel.app/images/items/comparator.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Redstone Dust",
    "namespacedId": "redstone",
    "description": "Redstone dust is a mineral that can transmit redstone power when placed as a block.",
    "image": "https://minecraft-storage.vercel.app/images/items/redstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Redstone Lamp",
    "namespacedId": "redstone_lamp",
    "description": "A redstone lamp is a block that produces light when activated with a redstone signal.",
    "image": "https://minecraft-storage.vercel.app/images/items/redstone_lamp.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Redstone Ore",
    "namespacedId": "redstone_ore",
    "description": "Redstone ore is the ore block from which redstone is obtained.",
    "image": "https://minecraft-storage.vercel.app/images/items/redstone_ore.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Redstone Repeater",
    "namespacedId": "repeater",
    "description": "A redstone repeater is a block used in redstone circuits to \"repeat\" redstone signals back to full strength, delay signals, prevent signals moving backwards, or to \"lock\" signals in one state.",
    "image": "https://minecraft-storage.vercel.app/images/items/repeater.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Redstone Torch",
    "namespacedId": "redstone_torch",
    "description": "A redstone torch is a non-solid block that can be used as a toggleable redstone power source, as well as a signal inverter.",
    "image": "https://minecraft-storage.vercel.app/images/items/redstone_torch.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Repeating Command Block",
    "namespacedId": "repeating_command_block",
    "description": "A command block is a block that can execute commands. Because it cannot be obtained or edited in Survival mode without cheats, it is primarily used on multiplayer servers, in Creative worlds, and custom maps.",
    "image": "https://minecraft-storage.vercel.app/images/items/repeating_command_block.gif",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Respawn Anchor",
    "namespacedId": "respawn_anchor",
    "description": "The respawn anchor is a block that allows players to set their spawn point in The Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/respawn_anchor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Rooted Dirt",
    "namespacedId": "rooted_dirt",
    "description": "Rooted dirt is a natural decorative block.",
    "image": "https://minecraft-storage.vercel.app/images/items/rooted_dirt.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Rose Bush",
    "namespacedId": "rose_bush",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/rose_bush.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Rotten Flesh",
    "namespacedId": "rotten_flesh",
    "description": "Rotten flesh is a food item that can be eaten by the player, at the high risk of inflicting Hunger.",
    "image": "https://minecraft-storage.vercel.app/images/items/rotten_flesh.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Saddle",
    "namespacedId": "saddle",
    "description": "A saddle is an item that can be placed on rideable mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/saddle.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Salmon Spawn Egg",
    "namespacedId": "salmon_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/salmon_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Sand",
    "namespacedId": "sand",
    "description": "Sand is a block affected by gravity.\n Red sand is a variation of sand found in the badlands biome.",
    "image": "https://minecraft-storage.vercel.app/images/items/sand.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sandstone",
    "namespacedId": "sandstone",
    "description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
    "image": "https://minecraft-storage.vercel.app/images/items/sandstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sandstone Slab",
    "namespacedId": "sandstone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/sandstone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sandstone Stairs",
    "namespacedId": "sandstone_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/sandstone_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sandstone Wall",
    "namespacedId": "sandstone_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/sandstone_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Scaffolding",
    "namespacedId": "scaffolding",
    "description": "Scaffolding is a block used when building structures to help the player reach higher places, or to descend safely without fall damage.",
    "image": "https://minecraft-storage.vercel.app/images/items/scaffolding.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sculk Sensor",
    "namespacedId": "sculk_sensor",
    "description": "The sculk sensor is a block that detects vibrations caused by actions and events, and emits a redstone signal.",
    "image": "https://minecraft-storage.vercel.app/images/items/sculk_sensor.gif",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Scute",
    "namespacedId": "scute",
    "description": "Scutes are items that baby turtles drop when they grow into adults. They can be used to craft turtle shells which can be used to brew the potion of the Turtle Master.",
    "image": "https://minecraft-storage.vercel.app/images/items/scute.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sea Lantern",
    "namespacedId": "sea_lantern",
    "description": "A sea lantern is an underwater light source that appears in ocean monuments and underwater ruins.",
    "image": "https://minecraft-storage.vercel.app/images/items/sea_lantern.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sea Pickle",
    "namespacedId": "sea_pickle",
    "description": "A sea pickle is a small stationary underwater block that emits light, and is typically found in colonies of up to four sea pickles.",
    "image": "https://minecraft-storage.vercel.app/images/items/sea_pickle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Seagrass",
    "namespacedId": "seagrass",
    "description": "Seagrass is a non-solid plant block that generates in all oceans, except frozen oceans.",
    "image": "https://minecraft-storage.vercel.app/images/items/seagrass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Shears",
    "namespacedId": "shears",
    "description": "Shears are tools used primarily to shear sheep to get wool and mine a few types of blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/shears.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Sheep Spawn Egg",
    "namespacedId": "sheep_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/sheep_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Shield",
    "namespacedId": "shield",
    "description": "A shield is a tool used for protecting the player against attacks.",
    "image": "https://minecraft-storage.vercel.app/images/items/shield.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Shroomlight",
    "namespacedId": "shroomlight",
    "description": "Shroomlights are light-emitting blocks that generate in huge fungi.",
    "image": "https://minecraft-storage.vercel.app/images/items/shroomlight.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Shulker Box",
    "namespacedId": "shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Shulker Shell",
    "namespacedId": "shulker_shell",
    "description": "Shulker shells are items dropped by shulkers that are used solely to craft shulker boxes.",
    "image": "https://minecraft-storage.vercel.app/images/items/shulker_shell.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Shulker Spawn Egg",
    "namespacedId": "shulker_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/shulker_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Silverfish Spawn Egg",
    "namespacedId": "silverfish_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/silverfish_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Skeleton Horse Spawn Egg",
    "namespacedId": "skeleton_horse_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/skeleton_horse_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Skeleton Skull",
    "namespacedId": "skeleton_skull",
    "description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
    "image": "https://minecraft-storage.vercel.app/images/items/skeleton_skull.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Skeleton Spawn Egg",
    "namespacedId": "skeleton_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/skeleton_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Slime Block",
    "namespacedId": "slime_block",
    "description": "A slime block is a translucent block that entities can bounce on. It may be used alongside a piston to move several connected blocks at once. Entities move slower on slime blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/slime_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Slime Spawn Egg",
    "namespacedId": "slime_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/slime_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Slimeball",
    "namespacedId": "slime_ball",
    "description": "A slimeball is a crafting ingredient commonly dropped by slimes, and can be sneezed out by pandas.",
    "image": "https://minecraft-storage.vercel.app/images/items/slime_ball.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Small Amethyst Bud",
    "namespacedId": "small_amethyst_bud",
    "description": "Amethyst buds are the first three stages of growth of amethyst clusters, which grow on budding amethyst.",
    "image": "https://minecraft-storage.vercel.app/images/items/small_amethyst_bud.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Small Dripleaf",
    "namespacedId": "small_dripleaf",
    "description": "A  small dripleaf is a plant which generates in lush caves, and is used to grow big dripleaves, a platforming block.",
    "image": "https://minecraft-storage.vercel.app/images/items/small_dripleaf.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smithing Table",
    "namespacedId": "smithing_table",
    "description": "A smithing table is a toolsmith's job site block that generates in villages. It can be used to upgrade diamond gear into netherite gear.",
    "image": "https://minecraft-storage.vercel.app/images/items/smithing_table.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smoker",
    "namespacedId": "smoker",
    "description": "A smoker is a type of furnace that cooks food items, similar to a furnace, but twice as fast. It also serves as a butcher's job site block.",
    "image": "https://minecraft-storage.vercel.app/images/items/smoker.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Basalt",
    "namespacedId": "smooth_basalt",
    "description": "Basalt is an igneous rock found in the Nether.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_basalt.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Quartz Block",
    "namespacedId": "smooth_quartz",
    "description": "A smooth quartz block is a mineral block used only for decoration. It is made by smelting blocks of quartz.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_quartz.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Quartz Slab",
    "namespacedId": "smooth_quartz_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_quartz_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Quartz Stairs",
    "namespacedId": "smooth_quartz_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_quartz_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Red Sandstone",
    "namespacedId": "smooth_red_sandstone",
    "description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_red_sandstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Red Sandstone Slab",
    "namespacedId": "smooth_red_sandstone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_red_sandstone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Red Sandstone Stairs",
    "namespacedId": "smooth_red_sandstone_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_red_sandstone_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Sandstone",
    "namespacedId": "smooth_sandstone",
    "description": "Sandstone is a solid block commonly found in deserts and beaches underneath sand.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_sandstone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Sandstone Slab",
    "namespacedId": "smooth_sandstone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_sandstone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Sandstone Stairs",
    "namespacedId": "smooth_sandstone_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_sandstone_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Stone",
    "namespacedId": "smooth_stone",
    "description": "Smooth stone is a variant of stone made by smelting regular stone.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_stone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Smooth Stone Slab",
    "namespacedId": "smooth_stone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/smooth_stone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Snow",
    "namespacedId": "snow",
    "description": "Snow is a ground cover block that is commonly caused by snowfall.",
    "image": "https://minecraft-storage.vercel.app/images/items/snow.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Snow Block",
    "namespacedId": "snow_block",
    "description": "A snow block is a full-sized block of snow.",
    "image": "https://minecraft-storage.vercel.app/images/items/snow_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Snowball",
    "namespacedId": "snowball",
    "description": "Snowballs are throwable combat items.",
    "image": "https://minecraft-storage.vercel.app/images/items/snowball.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Soul Campfire",
    "namespacedId": "soul_campfire",
    "description": "A campfire is a block that can be used to cook food or act as a light source or smoke signal.",
    "image": "https://minecraft-storage.vercel.app/images/items/soul_campfire.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Soul Lantern",
    "namespacedId": "soul_lantern",
    "description": "Lanterns are blocks that emit light.",
    "image": "https://minecraft-storage.vercel.app/images/items/soul_lantern.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Soul Sand",
    "namespacedId": "soul_sand",
    "description": "Soul sand is a block found naturally only in the Nether. Soul sand usually slows down the movement of mobs and players walking on it. It is also used for growing nether wart, for crafting items that emit soul fire, and for constructing a Wither.",
    "image": "https://minecraft-storage.vercel.app/images/items/soul_sand.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Soul Soil",
    "namespacedId": "soul_soil",
    "description": "Soul soil is a block naturally found only in the soul sand valley.",
    "image": "https://minecraft-storage.vercel.app/images/items/soul_soil.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Soul Torch",
    "namespacedId": "soul_torch",
    "description": "Torches are non-solid blocks that emit light.",
    "image": "https://minecraft-storage.vercel.app/images/items/soul_torch.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spawner",
    "namespacedId": "spawner",
    "description": "A spawner (in Java Edition) or monster spawner (in Bedrock Edition), is a cage-like block that can spawn mobs. When configured, it contains a miniature, spinning version of the type of mob it spawns.",
    "image": "https://minecraft-storage.vercel.app/images/items/spawner.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Spectral Arrow",
    "namespacedId": "spectral_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/spectral_arrow.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spider Eye",
    "namespacedId": "spider_eye",
    "description": "A spider eye is a poisonous food and brewing item.",
    "image": "https://minecraft-storage.vercel.app/images/items/spider_eye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spider Spawn Egg",
    "namespacedId": "spider_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/spider_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Splash Potion of Fire Resistance",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_fire_resistance.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Harming",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_harming.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Healing",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_healing.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Invisibility",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_invisibility.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Leaping",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_leaping.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Luck",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_luck.gif",
    "renewable": false,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Night Vision",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_night_vision.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Poison",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_poison.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Regeneration",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_regeneration.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Slow Falling",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_slow_falling.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Slowness",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_slowness.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Strength",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_strength.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Swiftness",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_swiftness.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Water Breathing",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_water_breathing.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of Weakness",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_weakness.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Potion of the Turtle Master",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_potion_of_the_turtle_master.gif",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Splash Water Bottle",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/splash_water_bottle.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Sponge",
    "namespacedId": "sponge",
    "description": "A sponge is a block that can be used to remove water around itself when placed, turning into a wet sponge in the process.",
    "image": "https://minecraft-storage.vercel.app/images/items/sponge.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Spore Blossom",
    "namespacedId": "spore_blossom",
    "description": "A spore blossom is a ceiling-hanging decorative block that emits green particles.",
    "image": "https://minecraft-storage.vercel.app/images/items/spore_blossom.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Spruce Boat",
    "namespacedId": "spruce_boat",
    "description": "A boat is both an item and a vehicle entity used primarily for fast transport of players and passenger mobs over bodies of water.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_boat.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Spruce Button",
    "namespacedId": "spruce_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Door",
    "namespacedId": "spruce_door",
    "description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_door.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Fence",
    "namespacedId": "spruce_fence",
    "description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_fence.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Fence Gate",
    "namespacedId": "spruce_fence_gate",
    "description": "A fence gate is a block that shares the functions of both the door and the fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_fence_gate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Leaves",
    "namespacedId": "spruce_leaves",
    "description": "Leaves are natural blocks that generate as part of trees.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_leaves.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Log",
    "namespacedId": "spruce_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Planks",
    "namespacedId": "spruce_planks",
    "description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_planks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Pressure Plate",
    "namespacedId": "spruce_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Sapling",
    "namespacedId": "spruce_sapling",
    "description": "A sapling is a non-solid block that can be grown into a tree.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_sapling.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Sign",
    "namespacedId": "spruce_sign",
    "description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_sign.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Spruce Slab",
    "namespacedId": "spruce_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Stairs",
    "namespacedId": "spruce_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Trapdoor",
    "namespacedId": "spruce_trapdoor",
    "description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_trapdoor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spruce Wood",
    "namespacedId": "spruce_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/spruce_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Spyglass",
    "namespacedId": "spyglass",
    "description": "A spyglass is an item that can be used for zooming in on specific locations.",
    "image": "https://minecraft-storage.vercel.app/images/items/spyglass.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Squid Spawn Egg",
    "namespacedId": "squid_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/squid_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Steak",
    "namespacedId": "cooked_beef",
    "description": "Steak (in Java Edition) or cooked beef (in Bedrock Edition) is a food item obtained from cows or from cooking raw beef.",
    "image": "https://minecraft-storage.vercel.app/images/items/cooked_beef.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stick",
    "namespacedId": "stick",
    "description": "A stick is an item used for crafting many tools and items.",
    "image": "https://minecraft-storage.vercel.app/images/items/stick.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sticky Piston",
    "namespacedId": "sticky_piston",
    "description": "A piston is a block capable of pushing blocks, players, and mobs when given a redstone pulse.",
    "image": "https://minecraft-storage.vercel.app/images/items/sticky_piston.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone",
    "namespacedId": "stone",
    "description": "Stone is a block found underground in the Overworld or on the surface of mountains.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone Axe",
    "namespacedId": "stone_axe",
    "description": "An axe is a tool mainly used to hasten the breaking of wood-based blocks, remove the surface layer of certain blocks, and as a melee weapon.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_axe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Stone Brick Slab",
    "namespacedId": "stone_brick_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_brick_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone Brick Stairs",
    "namespacedId": "stone_brick_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_brick_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone Brick Wall",
    "namespacedId": "stone_brick_wall",
    "description": "A wall is a decorative block. Like fences, they can be used to create boundaries, because players and most mobs cannot climb or jump over them.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_brick_wall.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone Bricks",
    "namespacedId": "stone_bricks",
    "description": "Stone bricks and the variants  cracked stone bricks,  mossy stone bricks, and  chiseled stone bricks are materials found in structures such as strongholds, igloo basements, jungle temples, ocean ruins and ruined portals.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_bricks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone Button",
    "namespacedId": "stone_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone Hoe",
    "namespacedId": "stone_hoe",
    "description": "A hoe is a tool used to till dirt and grass blocks into farmland, as well as to harvest certain plant-based blocks quickly.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_hoe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Stone Pickaxe",
    "namespacedId": "stone_pickaxe",
    "description": "A pickaxe is one of the most commonly used tools in the game, being required to mine all ores, rock, rock-based blocks and metal-based blocks. A pickaxe allows the player to mine blocks at faster speeds, depending on the material it is made from. Specific pickaxe materials are also required to harvest certain types of blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_pickaxe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Stone Pressure Plate",
    "namespacedId": "stone_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone Shovel",
    "namespacedId": "stone_shovel",
    "description": "Shovels are tools used to ease the process of collecting dirt, sand and other blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_shovel.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Stone Slab",
    "namespacedId": "stone_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone Stairs",
    "namespacedId": "stone_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stone Sword",
    "namespacedId": "stone_sword",
    "description": "A sword is a melee weapon that is mainly used to damage entities and for cutting cobwebs or bamboo. A sword is made from one of six materials, in order of increasing quality and expense: wood, gold, stone, iron, diamond and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/stone_sword.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Stonecutter",
    "namespacedId": "stonecutter",
    "description": "The stonecutter can be used to craft stone-related blocks in smaller and more precise quantities than crafting. It also serves as a stone mason's job site block.",
    "image": "https://minecraft-storage.vercel.app/images/items/stonecutter.gif",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stray Spawn Egg",
    "namespacedId": "stray_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/stray_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Strider Spawn Egg",
    "namespacedId": "strider_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/strider_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "String",
    "namespacedId": "string",
    "description": "String is an item used in crafting recipes such as bows, fishing rods and leads. When placed as a block, string becomes tripwire, which can be combined with tripwire hooks to form a tripwire circuit.",
    "image": "https://minecraft-storage.vercel.app/images/items/string.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Acacia Log",
    "namespacedId": "stripped_acacia_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_acacia_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Acacia Wood",
    "namespacedId": "stripped_acacia_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_acacia_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Birch Log",
    "namespacedId": "stripped_birch_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_birch_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Birch Wood",
    "namespacedId": "stripped_birch_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_birch_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Crimson Hyphae",
    "namespacedId": "stripped_crimson_hyphae",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_crimson_hyphae.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Crimson Stem",
    "namespacedId": "stripped_crimson_stem",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_crimson_stem.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Dark Oak Log",
    "namespacedId": "stripped_dark_oak_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_dark_oak_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Dark Oak Wood",
    "namespacedId": "stripped_dark_oak_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_dark_oak_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Jungle Log",
    "namespacedId": "stripped_jungle_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_jungle_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Jungle Wood",
    "namespacedId": "stripped_jungle_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_jungle_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Oak Log",
    "namespacedId": "stripped_oak_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_oak_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Oak Wood",
    "namespacedId": "stripped_oak_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_oak_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Spruce Log",
    "namespacedId": "stripped_spruce_log",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_spruce_log.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Spruce Wood",
    "namespacedId": "stripped_spruce_wood",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_spruce_wood.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Warped Hyphae",
    "namespacedId": "stripped_warped_hyphae",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_warped_hyphae.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Stripped Warped Stem",
    "namespacedId": "stripped_warped_stem",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/stripped_warped_stem.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Structure Block",
    "namespacedId": "structure_block",
    "description": "A structure block is used to generate structures manually. They can also be used to save and load structures, alongside structure void blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/structure_block.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Structure Void",
    "namespacedId": "structure_void",
    "description": "A structure void is an invisible block that allows existing blocks to remain unchanged rather than be overridden when using the structure block to load a structure.",
    "image": "https://minecraft-storage.vercel.app/images/items/structure_void.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Sugar",
    "namespacedId": "sugar",
    "description": "Sugar is a food ingredient and brewing ingredient made from sugar canes.",
    "image": "https://minecraft-storage.vercel.app/images/items/sugar.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sugar Cane",
    "namespacedId": "sugar_cane",
    "description": "Sugar cane is a block found as 1–4-block-tall plants near water in the Overworld. As an item, it is an important crafting ingredient.",
    "image": "https://minecraft-storage.vercel.app/images/items/sugar_cane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Sunflower",
    "namespacedId": "sunflower",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/sunflower.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Suspicious Stew",
    "namespacedId": "suspicious_stew",
    "description": "Suspicious stew is a food item that can give the player a status effect that depends on the flower used to craft it.",
    "image": "https://minecraft-storage.vercel.app/images/items/suspicious_stew.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Sweet Berries",
    "namespacedId": "sweet_berries",
    "description": "Sweet berries are a food item that are collected from sweet berry bushes.",
    "image": "https://minecraft-storage.vercel.app/images/items/sweet_berries.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "TNT",
    "namespacedId": "tnt",
    "description": "TNT is an explosive block that can be primed to generate an explosion.",
    "image": "https://minecraft-storage.vercel.app/images/items/tnt.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Tall Grass",
    "namespacedId": "tall_grass",
    "description": "Grass is a non-solid plant block that has wheat seeds as a drop. Its color is biome-dependent, and matches the color of grass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/tall_grass.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Target",
    "namespacedId": "target",
    "description": "A target is a block that provides a temporary redstone charge when hit by a projectile. It also has utility in redstone circuitry for redirecting redstone dust, making it a useful redstone component.",
    "image": "https://minecraft-storage.vercel.app/images/items/target.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Terracotta",
    "namespacedId": "terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/terracotta.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Thick Lingering Potion",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/thick_lingering_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Thick Potion",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/thick_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Thick Splash Potion",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/thick_splash_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Tinted Glass",
    "namespacedId": "tinted_glass",
    "description": "Tinted glass is a block that blocks light while being visually transparent.",
    "image": "https://minecraft-storage.vercel.app/images/items/tinted_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Tipped Arrow",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/tipped_arrow.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Torch",
    "namespacedId": "torch",
    "description": "Torches are non-solid blocks that emit light.",
    "image": "https://minecraft-storage.vercel.app/images/items/torch.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Totem of Undying",
    "namespacedId": "totem_of_undying",
    "description": "A totem of undying is an uncommon combat item that can save holders from death. It is dropped from evokers, which spawn in woodland mansions and raids.",
    "image": "https://minecraft-storage.vercel.app/images/items/totem_of_undying.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Trader Llama Spawn Egg",
    "namespacedId": "trader_llama_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/trader_llama_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Trapped Chest",
    "namespacedId": "trapped_chest",
    "description": "A trapped chest functions as a normal chest for item storage, but it produces redstone power when opened. It can be visually distinguished from normal chests by a red coloration around the latch.",
    "image": "https://minecraft-storage.vercel.app/images/items/trapped_chest.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Trident",
    "namespacedId": "trident",
    "description": "A trident is a weapon used in both melee and ranged combat and is a rare drop from drowned.",
    "image": "https://minecraft-storage.vercel.app/images/items/trident.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Tripwire Hook",
    "namespacedId": "tripwire_hook",
    "description": "A tripwire hook is a block that can be used to detect entities (players, mobs, items, etc.) when part of a tripwire circuit is passed through.",
    "image": "https://minecraft-storage.vercel.app/images/items/tripwire_hook.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Tropical Fish",
    "namespacedId": "tropical_fish",
    "description": "Tropical fish is a food item that cannot be cooked.",
    "image": "https://minecraft-storage.vercel.app/images/items/tropical_fish.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Tropical Fish Spawn Egg",
    "namespacedId": "tropical_fish_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/tropical_fish_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Tube Coral",
    "namespacedId": "tube_coral",
    "description": "Coral is a type of non-solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/tube_coral.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Tube Coral Block",
    "namespacedId": "tube_coral_block",
    "description": "A coral block is a solid block that comes in five variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/tube_coral_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Tube Coral Fan",
    "namespacedId": "tube_coral_fan",
    "description": "Coral fans are non-solid blocks that come in 5 variants: tube, brain, bubble, fire, and horn.",
    "image": "https://minecraft-storage.vercel.app/images/items/tube_coral_fan.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Tuff",
    "namespacedId": "tuff",
    "description": "Tuff is an ornamental rock formed from volcanic ash, occurring in underground blobs below Y=16.",
    "image": "https://minecraft-storage.vercel.app/images/items/tuff.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Turtle Egg",
    "namespacedId": "turtle_egg",
    "description": "A turtle egg (in Java Edition) or sea turtle egg (in Bedrock Edition) is a block that hatches one or more baby turtles.",
    "image": "https://minecraft-storage.vercel.app/images/items/turtle_egg.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Turtle Shell",
    "namespacedId": "turtle_helmet",
    "description": "Helmets are a type of armor that covers the head of the player. There are seven types of helmets: leather cap, chainmail helmet, iron helmet, diamond helmet, gold helmet, netherite helmet, and turtle shell.",
    "image": "https://minecraft-storage.vercel.app/images/items/turtle_helmet.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Turtle Spawn Egg",
    "namespacedId": "turtle_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/turtle_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Twisting Vines",
    "namespacedId": "twisting_vines",
    "description": "Twisting vines are vegetation blocks found in the Nether in warped forests.  Their \"crimson\" equivalent are weeping vines.",
    "image": "https://minecraft-storage.vercel.app/images/items/twisting_vines.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Uncraftable Lingering Potion",
    "namespacedId": "lingering_potion",
    "description": "Lingering potions are variants of splash potions that can be thrown to leave clouds with status effects that linger on the ground in an area.",
    "image": "https://minecraft-storage.vercel.app/images/items/uncraftable_lingering_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Uncraftable Potion",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/uncraftable_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Uncraftable Splash Potion",
    "namespacedId": "splash_potion",
    "description": "Splash potions are a variant of potions that can be thrown.",
    "image": "https://minecraft-storage.vercel.app/images/items/uncraftable_splash_potion.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Uncraftable Tipped Arrow",
    "namespacedId": "tipped_arrow",
    "description": "An arrow serves as ammunition for bows, crossbows, and dispensers. Arrows can be modified to imbue status effects on players and mobs.",
    "image": "https://minecraft-storage.vercel.app/images/items/uncraftable_tipped_arrow.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Vex Spawn Egg",
    "namespacedId": "vex_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/vex_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Villager Spawn Egg",
    "namespacedId": "villager_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/villager_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Vindicator Spawn Egg",
    "namespacedId": "vindicator_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/vindicator_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Vines",
    "namespacedId": "vine",
    "description": "Vines are non-solid blocks, 1⁄16 of a block in thickness that can be placed only against a vertical side of a solid block. They also can be placed beneath a solid block ceiling if adjacent to a solid vertical wall.",
    "image": "https://minecraft-storage.vercel.app/images/items/vine.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Wandering Trader Spawn Egg",
    "namespacedId": "wandering_trader_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/wandering_trader_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Warped Button",
    "namespacedId": "warped_button",
    "description": "A button is a non-solid block that can provide temporary redstone power.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_button.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Door",
    "namespacedId": "warped_door",
    "description": "A door is a block that can be used as a barrier that can be opened by hand or with redstone.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_door.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Fence",
    "namespacedId": "warped_fence",
    "description": "A fence is a barrier block that cannot normally be jumped over, similar to a wall. Unlike a wall, a player (but not mobs) can see through the openings in a fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_fence.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Fence Gate",
    "namespacedId": "warped_fence_gate",
    "description": "A fence gate is a block that shares the functions of both the door and the fence.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_fence_gate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Fungus",
    "namespacedId": "warped_fungus",
    "description": "A fungus is a mushroom-like block that generates in the Nether. There are two types of fungi: crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_fungus.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Fungus on a Stick",
    "namespacedId": "warped_fungus_on_a_stick",
    "description": "A warped fungus on a stick is an item that can be used to control saddled striders.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_fungus_on_a_stick.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Warped Hyphae",
    "namespacedId": "warped_hyphae",
    "description": "Wood or hyphae is a block that has the log's \"bark\" texture on all six sides. It comes in 8 types: oak, spruce, birch, jungle, acacia, dark oak, crimson, and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_hyphae.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Nylium",
    "namespacedId": "warped_nylium",
    "description": "Nylium is a variant of netherrack that generates in the Nether. It has two variants: warped nylium and crimson nylium which both spawn in different biomes.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_nylium.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Warped Planks",
    "namespacedId": "warped_planks",
    "description": "Planks are common blocks used as building blocks and in crafting recipes. They are one of the first things that a player can craft in Survival and Adventure modes. Two categories of planks can be differentiated: flammable Overworld planks made from tree logs, and nonflammable Nether planks made from huge fungus stems.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_planks.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Pressure Plate",
    "namespacedId": "warped_pressure_plate",
    "description": "A pressure plate is a non-solid block that can be used to detect players, mobs, items, etc. It has four variants:",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_pressure_plate.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Roots",
    "namespacedId": "warped_roots",
    "description": "Not to be confused with Nether Sprouts.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_roots.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Sign",
    "namespacedId": "warped_sign",
    "description": "A sign is a non-solid block that can display text. A sign can also be used to block or redirect the flow of water or lava while still allowing entities to pass.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_sign.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Warped Slab",
    "namespacedId": "warped_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Stairs",
    "namespacedId": "warped_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Stem",
    "namespacedId": "warped_stem",
    "description": "A log or stem is a naturally occurring block found in trees or huge fungi, primarily used as a building block, and to create planks, a versatile crafting ingredient. It comes in eight types: oak, spruce, birch, jungle, acacia, dark oak, crimson and warped.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_stem.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Trapdoor",
    "namespacedId": "warped_trapdoor",
    "description": "A trapdoor is a solid, transparent block that can be used as an openable 1x1 barrier.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_trapdoor.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Warped Wart Block",
    "namespacedId": "warped_wart_block",
    "description": "Nether wart blocks are decorative blocks found in crimson forests and crafted using Nether wart.",
    "image": "https://minecraft-storage.vercel.app/images/items/warped_wart_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Water Bottle",
    "namespacedId": "potion",
    "description": "Potions are bottled substances. Most of them are brewable items, many of which give the consumer a time-limited effect when drank.",
    "image": "https://minecraft-storage.vercel.app/images/items/water_bottle.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Water Bucket",
    "namespacedId": "water_bucket",
    "description": "A water bucket is a bucket filled with water.",
    "image": "https://minecraft-storage.vercel.app/images/items/water_bucket.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Waxed Block of Copper",
    "namespacedId": "waxed_copper_block",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_copper_block.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Cut Copper",
    "namespacedId": "waxed_cut_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_cut_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Cut Copper Slab",
    "namespacedId": "waxed_cut_copper_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_cut_copper_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Cut Copper Stairs",
    "namespacedId": "waxed_cut_copper_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_cut_copper_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Exposed Copper",
    "namespacedId": "waxed_exposed_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_exposed_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Exposed Cut Copper",
    "namespacedId": "waxed_exposed_cut_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_exposed_cut_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Exposed Cut Copper Slab",
    "namespacedId": "waxed_exposed_cut_copper_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_exposed_cut_copper_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Exposed Cut Copper Stairs",
    "namespacedId": "waxed_exposed_cut_copper_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_exposed_cut_copper_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Oxidized Copper",
    "namespacedId": "waxed_oxidized_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_oxidized_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Oxidized Cut Copper",
    "namespacedId": "waxed_oxidized_cut_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_oxidized_cut_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Oxidized Cut Copper Slab",
    "namespacedId": "waxed_oxidized_cut_copper_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_oxidized_cut_copper_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Oxidized Cut Copper Stairs",
    "namespacedId": "waxed_oxidized_cut_copper_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_oxidized_cut_copper_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Weathered Copper",
    "namespacedId": "waxed_weathered_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_weathered_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Weathered Cut Copper",
    "namespacedId": "waxed_weathered_cut_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_weathered_cut_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Weathered Cut Copper Slab",
    "namespacedId": "waxed_weathered_cut_copper_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_weathered_cut_copper_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Waxed Weathered Cut Copper Stairs",
    "namespacedId": "waxed_weathered_cut_copper_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/waxed_weathered_cut_copper_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Weathered Copper",
    "namespacedId": "weathered_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/weathered_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Weathered Cut Copper",
    "namespacedId": "weathered_cut_copper",
    "description": "The block of copper is a decorative block that oxidizes over time, gaining a verdigris appearance. It can be crafted into a waxed version that does not oxidize. It can also be crafted back into nine copper ingots unless it is in a fully or partly oxidized state or has been crafted into the cut variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/weathered_cut_copper.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Weathered Cut Copper Slab",
    "namespacedId": "weathered_cut_copper_slab",
    "description": "Slabs are half-height versions of their respective blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/weathered_cut_copper_slab.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Weathered Cut Copper Stairs",
    "namespacedId": "weathered_cut_copper_stairs",
    "description": "Stairs are blocks that allow mobs and players to change elevation without jumping.",
    "image": "https://minecraft-storage.vercel.app/images/items/weathered_cut_copper_stairs.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Weeping Vines",
    "namespacedId": "weeping_vines",
    "description": "Weeping vines are fungi blocks found in the Nether in crimson forest. Their \"warped\" equivalent are twisting vines.",
    "image": "https://minecraft-storage.vercel.app/images/items/weeping_vines.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Wet Sponge",
    "namespacedId": "wet_sponge",
    "description": "A sponge is a block that can be used to remove water around itself when placed, turning into a wet sponge in the process.",
    "image": "https://minecraft-storage.vercel.app/images/items/wet_sponge.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Wheat",
    "namespacedId": "wheat",
    "description": "Wheat is an item primarily obtained by farming.",
    "image": "https://minecraft-storage.vercel.app/images/items/wheat.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Wheat Seeds",
    "namespacedId": "wheat_seeds",
    "description": "Wheat seeds (in Java Edition) or seeds (in Bedrock Edition) are items used in farming.",
    "image": "https://minecraft-storage.vercel.app/images/items/wheat_seeds.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "White Banner",
    "namespacedId": "white_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "White Bed",
    "namespacedId": "white_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "White Candle",
    "namespacedId": "white_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "White Carpet",
    "namespacedId": "white_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "White Concrete",
    "namespacedId": "white_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "White Concrete Powder",
    "namespacedId": "white_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "White Dye",
    "namespacedId": "white_dye",
    "description": "White dye is a primary color dye similar to bone meal.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "White Glazed Terracotta",
    "namespacedId": "white_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "White Shulker Box",
    "namespacedId": "white_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "White Stained Glass",
    "namespacedId": "white_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "White Stained Glass Pane",
    "namespacedId": "white_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "White Terracotta",
    "namespacedId": "white_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "White Tulip",
    "namespacedId": "white_tulip",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_tulip.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "White Wool",
    "namespacedId": "white_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/white_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Witch Spawn Egg",
    "namespacedId": "witch_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/witch_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Wither Rose",
    "namespacedId": "wither_rose",
    "description": "Flowers are non-solid plants that occur in a variety of shapes and colors. They are primarily used for decoration and crafted into dyes.",
    "image": "https://minecraft-storage.vercel.app/images/items/wither_rose.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Wither Skeleton Skull",
    "namespacedId": "wither_skeleton_skull",
    "description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
    "image": "https://minecraft-storage.vercel.app/images/items/wither_skeleton_skull.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Wither Skeleton Spawn Egg",
    "namespacedId": "wither_skeleton_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/wither_skeleton_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Wolf Spawn Egg",
    "namespacedId": "wolf_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/wolf_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Wooden Axe",
    "namespacedId": "wooden_axe",
    "description": "An axe is a tool mainly used to hasten the breaking of wood-based blocks, remove the surface layer of certain blocks, and as a melee weapon.",
    "image": "https://minecraft-storage.vercel.app/images/items/wooden_axe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Wooden Hoe",
    "namespacedId": "wooden_hoe",
    "description": "A hoe is a tool used to till dirt and grass blocks into farmland, as well as to harvest certain plant-based blocks quickly.",
    "image": "https://minecraft-storage.vercel.app/images/items/wooden_hoe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Wooden Pickaxe",
    "namespacedId": "wooden_pickaxe",
    "description": "A pickaxe is one of the most commonly used tools in the game, being required to mine all ores, rock, rock-based blocks and metal-based blocks. A pickaxe allows the player to mine blocks at faster speeds, depending on the material it is made from. Specific pickaxe materials are also required to harvest certain types of blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/wooden_pickaxe.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Wooden Shovel",
    "namespacedId": "wooden_shovel",
    "description": "Shovels are tools used to ease the process of collecting dirt, sand and other blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/wooden_shovel.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Wooden Sword",
    "namespacedId": "wooden_sword",
    "description": "A sword is a melee weapon that is mainly used to damage entities and for cutting cobwebs or bamboo. A sword is made from one of six materials, in order of increasing quality and expense: wood, gold, stone, iron, diamond and netherite.",
    "image": "https://minecraft-storage.vercel.app/images/items/wooden_sword.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Woodland Explorer Map",
    "namespacedId": "filled_map",
    "description": "An explorer map is a special map used to aid in finding rare generated structures, including woodland mansions, ocean monuments, and buried treasures.",
    "image": "https://minecraft-storage.vercel.app/images/items/woodland_explorer_map.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Written Book",
    "namespacedId": "written_book",
    "description": "A written book is an item created after a book and quill is signed. It appears the same as a regular book, but without the quill, and has an enchanted-looking glint.",
    "image": "https://minecraft-storage.vercel.app/images/items/written_book.gif",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Yellow Banner",
    "namespacedId": "yellow_banner",
    "description": "Banners are tall decorative blocks, featuring a field that is highly customizable using dyes and banner patterns.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_banner.png",
    "renewable": true,
    "stackSize": 16
  },
  {
    "name": "Yellow Bed",
    "namespacedId": "yellow_bed",
    "description": "A bed is a block that allows a player to sleep and to reset their spawn point to within a few blocks of the bed in the Overworld. If the bed is obstructed or removed, the player spawns at the default world spawning location.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_bed.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Yellow Candle",
    "namespacedId": "yellow_candle",
    "description": "A candle is a light source, which exists in an uncolored variant and 16 dyed ones. Candles can be lit with flint and steel and extinguished by water or by right-clicking. They can also be waterlogged, but cannot be lit while waterlogged.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_candle.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Yellow Carpet",
    "namespacedId": "yellow_carpet",
    "description": "Carpets are thin blocks which are mainly used for decoration.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_carpet.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Yellow Concrete",
    "namespacedId": "yellow_concrete",
    "description": "Concrete is a solid block available in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_concrete.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Yellow Concrete Powder",
    "namespacedId": "yellow_concrete_powder",
    "description": "Concrete powder is a gravity-affected block that is converted to concrete when touching water. It comes in the 16 regular dye colors.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_concrete_powder.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Yellow Dye",
    "namespacedId": "yellow_dye",
    "description": "Yellow dye is a primary dye created by placing a dandelion or sunflower into a crafting square.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_dye.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Yellow Glazed Terracotta",
    "namespacedId": "yellow_glazed_terracotta",
    "description": "Glazed terracotta is a vibrant solid block that comes in the 16 regular dye colors, obtained by smelting colored terracotta.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_glazed_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Yellow Shulker Box",
    "namespacedId": "yellow_shulker_box",
    "description": "A shulker box is a block that can store and transport items.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_shulker_box.png",
    "renewable": true,
    "stackSize": 1
  },
  {
    "name": "Yellow Stained Glass",
    "namespacedId": "yellow_stained_glass",
    "description": "Glass is a decorative and fully transparent solid block that can be dyed into stained glass, or crafted into tinted glass.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_stained_glass.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Yellow Stained Glass Pane",
    "namespacedId": "yellow_stained_glass_pane",
    "description": "A glass pane is a transparent block that can be used as a more efficient alternative to glass blocks.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_stained_glass_pane.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Yellow Terracotta",
    "namespacedId": "yellow_terracotta",
    "description": "Terracotta is a block formed from clay, with a hardness and blast resistance comparable to stone. It comes in the 16 dye colors, but more dull and earthen.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_terracotta.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Yellow Wool",
    "namespacedId": "yellow_wool",
    "description": "Wool is a block obtained from sheep that can be dyed in any of the 16 different colors, which are white, orange, magenta, light blue, yellow, lime, pink, gray, light gray, cyan, purple, blue, brown, green, red, and black. Unlike blocks such as terracotta, there is no undyed wool variant.",
    "image": "https://minecraft-storage.vercel.app/images/items/yellow_wool.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Zoglin Spawn Egg",
    "namespacedId": "zoglin_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/zoglin_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Zombie Head",
    "namespacedId": "zombie_head",
    "description": "A head is a decorative block. There are six types of heads: player (only Steve's head), zombie, skeleton, wither skeleton, creeper, and dragon.",
    "image": "https://minecraft-storage.vercel.app/images/items/zombie_head.png",
    "renewable": true,
    "stackSize": 64
  },
  {
    "name": "Zombie Horse Spawn Egg",
    "namespacedId": "zombie_horse_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/zombie_horse_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Zombie Spawn Egg",
    "namespacedId": "zombie_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/zombie_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Zombie Villager Spawn Egg",
    "namespacedId": "zombie_villager_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/zombie_villager_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  },
  {
    "name": "Zombified Piglin Spawn Egg",
    "namespacedId": "zombified_piglin_spawn_egg",
    "description": "A spawn egg is an item used to spawn mobs directly.",
    "image": "https://minecraft-storage.vercel.app/images/items/zombified_piglin_spawn_egg.png",
    "renewable": false,
    "stackSize": 64
  }
]

Item.insertMany(items);