export interface Item {
  item_name: string;
  item_type: string;
  rarity: string;
  required_level: number;
  base_stats: Record<string, any>;
  magical_properties: string[];
  unique_effects: string[];
  flavor_text: string;
  requirements: string | null;
  gold_value: number;
 }

export const items: Item[] = [
  {
    "item_name": "Aegis of Laconia",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "barrier": 361,
      "armor": 257
    },
    "magical_properties": [
      "33% increased Attack Damage",
      "+27 Might",
      "+144 Health",
      "20% increased Movement Skill Cooldown Rate"
    ],
    "unique_effects": [
      "+1 Capacity to Weapon Attacks",
      "+5% Glancing Hits Damage Reduction"
    ],
    "flavor_text": "The iconic shield of Spartan warrior, rarely found without its owner.",
    "requirements": "FIT 241",
    "gold_value": 3388
  },
  {
    "item_name": "Arch of Iris",
    "item_type": "Bow",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "250-276",
      "elemental_breakdown": "50-55 Cold, Fire, Lightning, Poison, Spirit",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "94% increased Poison Damage",
      "96% increased Lightning Damage",
      "91% increased Fire Damage",
      "90% increased Cold Damage",
      "55% increased Projectile Damage",
      "16% increased Attack and Cast Speed"
    ],
    "unique_effects": [
      "When you consume an Elemental Infusion, gain 15% All Speed and 15% Increased Total Damage for 3 seconds (Non Stackable)"
    ],
    "flavor_text": "The string of this bow is a magical band of shifting colors.",
    "requirements": "FIT 323",
    "gold_value": 10091
  },
  {
    "item_name": "Atlantean Sabre",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "pierce_damage": "48-53",
      "cold_damage": "36-40",
      "poison_damage": "36-40",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "9% increased Attributes",
      "46% increased Ailment Chance",
      "24% increased Ailment Power"
    ],
    "unique_effects": [
      "+1 Maximum Ailment stacks",
      "+3% Base Weapon Ailment Chance",
      "4% More damage per different Ailment on your target (Unique Effect)"
    ],
    "flavor_text": "A relic from a place of legends past.",
    "requirements": "FIT 241",
    "gold_value": 4804
  },
  {
    "item_name": "Barrage",
    "item_type": "Bow",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "pierce_damage": "120-132",
      "attack_speed": "1.56x"
    },
    "magical_properties": [
      "81% increased Attack Damage",
      "19% increased Attack Speed",
      "+28% Glancing Hits Chance",
      "15% increased Movement Speed"
    ],
    "unique_effects": [
      "Hitting an enemy with your Primary Attack has a 10% chance of casting an unmodified Rain of Arrows"
    ],
    "flavor_text": "Sometimes quantity is the answer after all.",
    "requirements": "FIT 298",
    "gold_value": 6784
  },
  {
    "item_name": "Blademagos Sword",
    "item_type": "Sword",
    "rarity": "Epic",
    "level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "lightning_damage": "80-89",
      "cold_damage": "40-44",
      "attack_speed": "1.4"
    },
    "magical_properties": [
      "27% increased Spell Damage",
      "39% increased Attack Damage",
      "13% increased Attack Speed",
      "12% increased Cast Speed",
      "+262 Energy Barrier",
      "+3 Energy recovered on Kill"
    ],
    "unique_effects": [
      "15% increased Total Spell Damage against close enemies (4 meters)"
    ],
    "flavor_text": "A sword made for magic users rather than warriors.",
    "requirements": "KNI 251",
    "gold_value": "4688"
  },
  {
    "item_name": "Bonesaw",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "pierce_damage": "87-96",
      "strike_damage": "58-64",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+19 Weapon Pierce Damage",
      "37% increased Strike Damage",
      "41% increased Pierce Damage",
      "14% increased Attack speed",
      "+22 Might",
      "+4% Critical Hit Chance",
      "25% increased Ailment Power"
    ],
    "unique_effects": [
      "+1 Maximum Bleeding Stacks",
      "+4% Base Weapon Ailment Chance"
    ],
    "flavor_text": "They say Asklepios used this on his patients. It now serves a more gruesome purpose.",
    "requirements": "MIG 230",
    "gold_value": 3377
  },
  {
    "item_name": "Brigand's Axe",
    "item_type": "1h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "strike_damage": "72-80",
      "poison_damage": "72-80",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+19 Weapon Poison Damage",
      "43% increased Poison Damage",
      "29% increased Weapon Damage",
      "12% increased Attack Speed",
      "+19% Poison Resistance",
      "+15% Glancing Hits Chance"
    ],
    "unique_effects": [
      "Hitting an enemy with your Primary Attack reduces Dodge Cooldown by 30% of its remaining duration (Unique Effect)"
    ],
    "flavor_text": "A well-honed blade coated in poison.",
    "requirements": "AGI 230",
    "gold_value": 3535
  },
  {
    "item_name": "Captain's Signet",
    "item_type": "Ring",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {},
    "magical_properties": [
      "+201 Armor",
      "+19 Might",
      "+157 Free Barrier",
      "Summons have 24% increased Health"
    ],
    "unique_effects": [
      "+1 Capacity to Barrier",
      "+9% to all Magical Resistances"
    ],
    "flavor_text": "The iron seal of a veteran commander",
    "requirements": "LV 35",
    "gold_value": 4683
  },
  {
    "item_name": "Cartouche Ring",
    "item_type": "Ring",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {},
    "magical_properties": [
      "45% increased Elemental Damage",
      "+16 Energy",
      "+2.7 Energy Regeneration per second"
    ],
    "unique_effects": [
      "+2 Maximum Burning Stacks",
      "+2 Maximum Chilled Stacks",
      "+2 Maximum Shocked Stacks"
    ],
    "flavor_text": "A fine gold ring with a multitude of small colorful stones.",
    "requirements": "LV 35",
    "gold_value": 4564
  },
  {
    "item_name": "Ceremonial Plate",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "barrier": 357,
      "armor": 257
    },
    "magical_properties": [
      "+335 Armor",
      "+6.3 Energy Regeneration per second",
      "Summons have 14% increased All Speed",
      "+45 Free Energy Reservation",
      "Summons have +21% to All Resistances",
      "Summons have 21% increased Health"
    ],
    "unique_effects": [
      "+1 Capacity to Summon skills"
    ],
    "flavor_text": "A large embossed bowl depicting mythical scenes of Glaukos and the people of Pyrgos.",
    "requirements": "RSV 241",
    "gold_value": 4711
  },
  {
    "item_name": "Coral Mace",
    "item_type": "1h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "strike_damage": "88-97",
      "pierce_damage": "85-94",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "+17 Weapon Cold Damage",
      "+18 Weapon Pierce Damage",
      "+39% Increased Damage over Time",
      "+27 Might",
      "+20 Health recovered on Kill",
      "47% Increased Ailment Chance"
    ],
    "unique_effects": [
      "+23% Base Weapon Ailment Chance"
    ],
    "flavor_text": "This coral is hard enough to shatter bone.",
    "requirements": "MIG 230",
    "gold_value": 3470
  },
  {
    "item_name": "Crab Shield",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "barrier": 360,
      "armor": 257
    },
    "magical_properties": [
      "+254 Pierce Retaliation",
      "+225 Armor",
      "10% increased Armor",
      "+159 Health",
      "46% increased Ailment Chance",
      "Summons have 26% increased Health"
    ],
    "unique_effects": [
      "52% increased Retaliation Damage",
      "Additionnal 15% Chance to apply Bleed when you deal Retaliation Damage"
    ],
    "flavor_text": "A shield fashioned from a sturdy crab shell.",
    "requirements": "MGT 251",
    "gold_value": 4881
  },
  {
    "item_name": "Cratus' Coil",
    "item_type": "Ring",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {},
    "magical_properties": [
      "44% increased Fire Damage",
      "24% increased Strike Damage",
      "24% increased Pierce Damage",
      "+25 Might",
      "+273 Health"
    ],
    "unique_effects": [
      "+1 Level to Warfare Rage Passives",
      "+22% Impairment Resistance",
      "+3 maximum Rage stacks"
    ],
    "flavor_text": "Touched by Strength itself, the plain looking metal emenates an aura of might and fury.",
    "requirements": "LV 35",
    "gold_value": 4551
  },
  {
    "item_name": "Crush-Stick of the Fallen God",
    "item_type": "2h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "250-276",
      "strike_damage": "250-276",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "+114 Weapon Strike Damage",
      "+38 Weapon Vitality Damage",
      "65% increased Attack Damage",
      "27% More Damage to Humanoids",
      "+34 Vigor"
    ],
    "unique_effects": [
      "Primary Attack has 15% Chance to Stun for 1 second on Hit",
      "60% increased Material Collection Range"
    ],
    "flavor_text": "A club made of junk, seemingly for a creature the size of a cyclops.",
    "requirements": "MGT 251",
    "gold_value": 9211
  },
  {
    "item_name": "Cuttlebone Standard",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "pierce_damage": "58-64",
      "cold_damage": "29-32",
      "fire_damage": "29-32",
      "lightning_damage": "29-32",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "76% increased Elemental Damage",
      "13% increased Cast Speed",
      "+39 Energy",
      "+7.2 Energy Regeneration per second",
      "+19 Knowledge"
    ],
    "unique_effects": [
      "+2 Capacity to Spells"
    ],
    "flavor_text": "A weird magical spear used in ichthian rituals.",
    "requirements": "KNO 230",
    "gold_value": 3324
  },
  {
    "item_name": "Dam Breaker",
    "item_type": "2h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "233-257",
      "strike_damage": "233-257",
      "attack_speed": "0.91x"
    },
    "magical_properties": [
      "+104 Weapon Strike Damage",
      "68% increased Strike Damage",
      "25% increased Stun Duration",
      "+163 Free Barrier",
      "+257 Health",
      "69% increased Ailment Chance"
    ],
    "unique_effects": [
      "29% increased Base Weapon Damage against Incapacitated or Channeling Enemies"
    ],
    "flavor_text": "An extremely heavy sledgehammer.",
    "requirements": "MIG 230",
    "gold_value": 6550
  },
  {
    "item_name": "Edge of Darkness",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "vitality_damage": "84-93",
      "cold_damage": "36-40",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+92 Weapon Vitality Damage",
      "41% increased Cold Damage",
      "42% increased Vitality Damage",
      "+33 Energy",
      "+26 Health recovered on Kill"
    ],
    "unique_effects": [
      "36% Increased Lifesteal",
      "+9% to all Magical Resistances"
    ],
    "flavor_text": "A cursed sword from the land of the midnight sun.",
    "requirements": "RSV 241",
    "gold_value": 4778
  },
  {
    "item_name": "Fell Blade",
    "item_type": "Dagger",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "pierce_damage": "60-66",
      "fire_damage": "60-66",
      "attack_speed": "1.56x"
    },
    "magical_properties": [
      "+28 Weapon Fire Damage",
      "+59 Weapon Pierce Damage",
      "10% increased Attack Speed",
      "46% increased Ailment Chance"
    ],
    "unique_effects": [
      "42% increased Rupture Damage",
      "Unlock Burn - Rupture"
    ],
    "flavor_text": "An sinister weapon premanently burning with unholy fire.",
    "requirements": "KNO 230",
    "gold_value": 3351
  },
  {
    "item_name": "Fotia",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "fire_damage": "173-191",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "+103 Weapon Fire Damage",
      "149% increased Fire Damage",
      "17% increased Attack and Cast Speed",
      "89% increased Ailment Chance",
      "37% increased Ailment Power"
      
    ],
    "unique_effects": [
      "+2 Capacity to Fire Skills"
    ],
    "flavor_text": "A staff infused with the very essence of fire.",
    "requirements": "KNO 230",
    "gold_value": 6938
  },
  {
    "item_name": "Frostbite",
    "item_type": "1h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "cold_damage": "97-107",
      "pierce_damage": "48-53",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+34 Weapon Cold Damage",
      "60% increased Cold Damage",
      "24% increased Freeze Duration",
      "34% increased Ailment Chance"
    ],
    "unique_effects": [
      "+1 Capacity to Cold Skills",
      "+8% Critical Hit chance against Chilled Enemies",
      "Unlock Chill - Freeze"
    ],
    "flavor_text": "An insidious weapon designed to freeze and shatter living beings.",
    "requirements": "RES 224",
    "gold_value": 3336
  },
  {
    "item_name": "Fungus Log",
    "item_type": "2h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "250-276",
      "strike_damage": "50-55",
      "poison_damage": "200-221",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "101% increased Poison Damage",
      "+213 Health",
      "25% increased Ailment Duration",
      "+15% Lightning Resistance",
      "+15% Poison Resistance"
    ],
    "unique_effects": [
      "+3 Maximum Plagued Stacks",
      "+11% Base Weapon Ailment Chance"
    ],
    "flavor_text": "Emits a cloud of spores when shaken.",
    "requirements": "FIT 160",
    "gold_value": 1903
  },
  {
    "item_name": "Grace of Eos",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "spirit_damage": "88-97",
      "cold_damage": "85-94",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "67% increased Cold Damage",
      "66% increased Spell Damage",
      "22% increased Cast Speed",
      "+53 Energy",
      "+10.3 Energy Regeneration per second",
      "13% increased Movement Speed",
      "22% More Damage to enemy Elite Creatures"
    ],
    "unique_effects": [],
    "flavor_text": "Holding this staff fills you with the vim of a new day.",
    "requirements": "KNL 251",
    "gold_value": 9715
  },
  {
    "item_name": "Gryphon Hunter Shield",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "barrier":357,
      "armor": 257
    },
    "magical_properties": [
      "+16% Bleeding Resistance",
      "+13% Poison Resistance",
      "32% Impairment Resistance",
      "29% Stun Resistance",
      "+14% Glancing Hits Chance",
      "14% More Damage to Elite Creatures"
    ],
    "unique_effects": [],
    "flavor_text": "The bigger the creature, the greater the glory.",
    "requirements": "FIT 298",
    "gold_value": 3545
  },
  {
    "item_name": "Harpe",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "fire_damage": "104-115",
      "strike_damage": "52-57",
      "pierce_damage": "17-19",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+71 Weapon Fire Damage",
      "15% increased Attack and Cast Speed",
      "+35 Energy",
      "+5.7 Energy Regeneration per second",
      "+26% Glancing Hits Chance",
      "19% increased Movement Skill Cooldown Rate"
    ],
    "unique_effects": [
      "Gain 0.4% increased Fire Damage per Agility point"
    ],
    "flavor_text": "The flames of Hephaistos's forge still burn in this weapon's blade.",
    "requirements": "AGI 230",
    "gold_value": 6933
  },
  {
    "item_name": "Hippokampos Scapula",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "208-230",
      "strike_damage": "83-92",
      "poison_damage": "64-71",
      "cold_damage": "60-67",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "+33 Weapon Cold Damage",
      "+56 Weapon Poison Damage",
      "49% increased Attack Damage",
      "+32 Energy",
      "+5.3 Energy Regeneration per second",
      "14% increased Movement Speed"
    ],
    "unique_effects": [
      "+1 Capacity to Primary Attack",
      "+7% to all Magical Resistances"
    ],
    "flavor_text": "For centuries the creature lay in wait, lurking in its prison of stone, until you slew it.",
    "requirements": "RSV 354",
    "gold_value": 10126
  },
  {
    "item_name": "Huntsman's Barb",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "pierce_damage": "144-160",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+15 Weapon Pierce Damage",
      "18% More Damage to Wildlife",
      "22% increased Attack Damage",
      "+23 Agility",
      "Summons have 35% increased Damage",
      "+22 Health recovered on Kill"
    ],
    "unique_effects": [
      "You and your Summons gain 14% increased All Speed"
    ],
    "flavor_text": "A spear that always strikes true, enchanted by Artemis as a gift to Orion.",
    "requirements": "FIT 224",
    "gold_value": 3250
  },
  {
    "item_name": "Ilektrisimos",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "lightning_damage": "173-191",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "100% increased Lightning Damage",
      "+22% Lightning Resistance",
      "+30 Energy",
      "+5.3 Energy Regeneration per second",
      "78% increased Ailment Chance",
    ],
    "unique_effects": [
      "+1 Capacity to Lightning Skills",
      "Every 3 seconds, Hitting an Enemy with a Weapon Attack or a Lightning Skill causes Lightning Arcs to Hit all Enemies within a 4m Area around your target"
    ],
    "flavor_text": "Crafting Zeus' thunderbolt took many failed attempts, some more promising than others.",
    "requirements": "CUN 298",
    "gold_value": 6581
  },
  {
    "item_name": "Kaenas' Sword",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 20,
    "base_stats": {
      "total_damage": "40-44",
      "pierce_damage": "30-33",
      "strike_damage": "10-11",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+8 Weapon Strike Damage",
      "20% increased Attack Damage",
      "13% increased Strike Damage",
      "13% increased Pierce Damage",
      "6% increased Attack Speed",
      "+9% Cold Resistance",
      "+12% Poison Resistance"
    ],
    "unique_effects": [
      "+1 Capacity to Primary Attack"
    ],
    "flavor_text": "The sword of the heroic spirit you met on the beach.",
    "requirements": "FIT 140",
    "gold_value": 514
  },
  {
    "item_name": "Katharsis",
    "item_type": "Dagger",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "lightning_damage": "60-66",
      "pierce_damage": "60-66",
      "attack_speed": "1.56x"
    },
    "magical_properties": [
      "+39 Weapon Lightning Damage",
      "64% increased Lightning Damage",
      "11% increased Attack and Cast Speed",
      "+25 Agility"
    ],
    "unique_effects": [
      "19% increased Lightning Strikes Damage", 
      "20% to Hit a random Enemy with a Lightning Strike when cleansing Overlad. (Scales with Lightning Strike chance)"
    ],
    "flavor_text": "A unique weapon, tempered by Zeus's thunderbolt. It crackles with energy.",
    "requirements": "AGI 230",
    "gold_value": 3415
  },
  {
    "item_name": "Key of Elysium",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "208-230",
      "spirit_damage": "104-115",
      "strike_damage": "62-69",
      "pierce_damage": "42-46",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "11% increased Attack and Cast Speed",
      "+5.9 Energy Regeneration per second",
      "9% increased Attributes",
      "Summons have 49% increased Damage",
      "Summons have 28% increased All Speed",
      "+186 Health"
    ],
    "unique_effects": [
      "+9% to All Magical Resistance",
      "Whenever one of your Summons dies, recover 10% of your Maximum Health over 5 seconds"
    ],
    "flavor_text": "Legend says that the strength of great heroes past lingers in this mighty weapon.",
    "requirements": "RSV 354",
    "gold_value": 9617
  },
  {
    "item_name": "Lycurgus' Wisdom",
    "item_type": "1h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "strike_damage": "173-191",
      "attack_speed": "1.12"
    },
    "magical_properties": [
      "+58 Weapon Strike Damage",
      "58% increased Strike Damage",
      "56% increased Pierce Damage",
      "8% increased Attack and Cast Speed",
      "+21 Agility",
      "+22 Might"
    ],
    "unique_effects": [
      "5% increased Combat Experience gained"
    ],
    "flavor_text": "The wise spartan knew that law work best when backed by means to enforce them",
    "requirements": "MGT 251",
    "gold_value": 4688
  },
  {
    "item_name": "Mamertine Sap",
    "item_type": "Dagger",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "strike_damage": "120-132",
      "attack_speed": "1.56"
    },
    "magical_properties": [
      "61% increased Strike Damage",
      "58% increased Pierce Damage",
      "50% increased Damage against Incapacitated Enemies",
      "+24 Might",
      "21% increased Stun Duration"
    ],
    "unique_effects": [
      "+1 Capacity to Disruption Skills",
      "+10% increased Combat Gold gained",
      "After using a Disruption Skill, gain 10% increased Movement Speed and 3 Weapon Strike damage per Level for 4 seconds"
    ],
  
    "flavor_text": "A small club used for knocking victims unconscious.",
    "requirements": "FIT 177",
    "gold_value": 5081
  },
  {
    "item_name": "Megalos",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "208-230",
      "pierce_damage": "31-34",
      "strike_damage": "125-138",
      "lightning_damage": "52-57",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "+29 Weapon Lightning Damage",
      "104% increased Lightning Damage",
      "66% increased Area Damage",
      "14% increased Attack and Cast Speed",
      "+29% Lightning Resistance"      
    ],
    "unique_effects": [
      "+2 Capacity to Lightning Skills",
      "+2 Levels to Storm Lightning Strike Passives"
    ],
    "flavor_text": "A large axe once gifted by Zeus to the king of Thracia.",
    "requirements": "FIT 177",
    "gold_value": 1258
  },
  {
    "item_name": "Moly Tea",
    "item_type": "Talisman",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "energy": "52"
    },
    "magical_properties": [
      "+27% increased Energy Potion Recharge Rate",
      "+29% increased Health Potion Recharge Rate",
      "Summons have +20% to All Resistances",
      "+20 Vigor"
    ],
    "unique_effects": [
      "+7% to all Magical Resistances",
      "Cleanse all Ailments on Health Potion use",
      "Cleanse all Incapacitation on Health Potion use"
    ],
    "flavor_text": "A pot filled with a fragrant herbal infusion that warms and refreshes.",
    "requirements": "VIG 148",
    "gold_value": 5070
  },
  {
    "item_name": "Moon Disc",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "barrier":360,
      "armor": 257
    },
    "magical_properties": [
      "33% increased Spell Damage",
      "10% increased Cast Speed",
      "+18 Energy",
      "+2.9 Energy Regeneration per second",
      "+188 Energy Barrier",
      "17% increased Movement Speed"
    ],
    "unique_effects": [
      "+1 Capacity to Spells"
    ],
    "flavor_text": "A mystical shield bearing the symbols of Hekate.",
    "requirements": "RES 224",
    "gold_value": 3474
  },
  {
    "item_name": "Moonclaw",
    "item_type": "Necklace",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {},
    "magical_properties": [
      "60% increased Pierce Damage",
      "22% increased Critical Hit Damage Multiplier",
      "+9% Critical Hit chance",
      "+15% Glancing Hits Chance"
    ],
    "unique_effects": [
      "On dealing a Critical Hit, recover 50 Energy. 3 seconds Cooldown"
    ],
    "flavor_text": "A charm fashioned from an owl's talon.",
    "requirements": "LV 45",
    "gold_value": 4421
  },
  {
    "item_name": "Mother Crab's Claw",
    "item_type": "Necklace",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {},
    "magical_properties": [
      "+220 Armor",
      "13% increased Armor",
      "+24% Cold Resistance",
      "+18% Poison Resistance",
      "8% increased Health",
      "16% increased Movement Speed"
    ],
    "unique_effects": [
      "40% More Damage against Crabs"
    ],
    "flavor_text": "Crabs seem to sense that the bearer of this trophy is a threat.",
    "requirements": "LV 14",
    "gold_value": 535
  },
  {
    "item_name": "Nessus' Rage",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "pierce_damage": "90-99",
      "strike_damage": "30-33",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+48 Weapon Strike Damage",
      "38% increased Attack Damage",
      "10% increased Attack Speed",
      "+20 Might"
    ],
    "unique_effects": [
      "+1 Capacity to Weapon Attacks",
      "+2 Level to Warfare Rage Passives"
    ],
    "flavor_text": "The bloodthirst of the mighty centaur warrior still lingers in this Khopesh.",
    "requirements": "FIT 241",
    "gold_value": 4785
  },
  {
    "item_name": "Oath Breaker",
    "item_type": "Dagger",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "pierce_damage": "120-132",
      "attack_speed": "1.56x"
    },
    "magical_properties": [
      "+18 Weapon Strike Damage",
      "23% increased Strike Damage",
      "24% increased Pierce Damage",
      "10% increased Attack Speed",
      "14% increased Cooldown Rate"
    ],
    "unique_effects": [
      "20% Chance to Trigger a Rupture on Hit against Channeling or Incapacitated Enemies. Chance is doubled on Critical Hit. Not more than once per second. (Unique Effect)",
      "+8% Base Weapon Critical Hit Chance"
    ],
    "flavor_text": "The blade was once shattered, to bury any memory of the dark role it played.",
    "requirements": "FIT 241",
    "gold_value": 5068
  },
  {
    "item_name": "Onager",
    "item_type": "1h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "strike_damage": "97-107",
      "pierce_damage": "48-53",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+45 Weapon Strike Damage", 
      "40% increased Strike Damage",
      "40% increased Pierce Damage",
      "+19% Vitality Resistance",
      "+8.4 Energy Regeneration per second", 
      "+143 Health"
    ],
    "unique_effects": [
      "65% less Health Potion Effect Amount. (Unique Effect)",
      "30% increased Total Health Regeneration",
      "Regenerate 2% Health per second"
    ],
    "flavor_text": "Named after a tenacious donkey.",
    "requirements": "KNL 148",
    "gold_value": 4949
  },
  {
    "item_name": "Perdix' Sphere",
    "item_type": "2h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "250-276",
      "lightning_damage": "200-221",
      "strike_damage": "50-55",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "59% increased Overload Skills Damage",
      "85% increased Lightning Damage",
      "+64 Energy",
      "+11.3 Energy Regeneration per second",
      "+155 Energy Barrier"
    ],
    "unique_effects": [
      "+2 Capacity to Lightning Skills",
      "Your Primary Attack has 5% Chance per Overload to Stun for 2 Seconds on Hit. Cleanse 10 Overload stacks for each Enemy stunned by this effect"
    ],
    "flavor_text": "While ingenuity ran in the family, Perdix had a special interest in iron and magnetism.",
    "requirements": "KNO 230",
    "gold_value": 7072
  },
  {
    "item_name": "Raging Bull",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "250-276",
      "strike_damage": "167-185",
      "pierce_damage": "82-91",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "+48 Weapon Strike Damage",
      "81% increased Strike Damage",
      "+213 Armor",
      "+27% Stun Resistance",
      "+186 Health"
    ],
    "unique_effects": [
      "7% increased Weapon Attack Damage and 1% increased Movement Speed per Rage Stack"
    ],
    "flavor_text": "This massive axe that once hung above the entrance to the Labyrinth in Knossos.",
    "requirements": "MIG 230",
    "gold_value": 6975
  },
  {
    "item_name": "Ram Bow II",
    "item_type": "Bow",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "173-191",
      "pierce_damage": "52-57",
      "strike_damage": "52-57",
      "fire_damage": "69-76",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+63 Weapon Fire Damage",
      "71% increased Fire Damage",
      "41% increased Strike Damage",
      "43% increased Pierce Damage",
      "+14% Bleeding Resistance",
      "+16% Poison Resistance",
      "+33 Might",
      "+25% Glancing Hits Chance",
      "72% increased Ailment Chance"
    ],
    "unique_effects": [
      "Hitting an enemy with your Primary Attack has a 20% chance of causing an explosion dealing Fire Damage in a 3m area around your target."
    ],
    "flavor_text": "A bow that hits with unusually explosive force.",
    "requirements": "MIG 230",
    "gold_value": 6839
  },
  {
    "item_name": "Ratcatcher's Stick",
    "item_type": "1h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "poison_damage": "116-128",
      "strike_damage": "29-32",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "+30 Weapon Poison Damage",
      "14% increased Attack Speed",
      "+18% Poison Resistance",
      "6% increased Movement Speed",
      "22% increased Dodge Range"
      
    ],
    "unique_effects": [
      "45% more Damage to vermin (Spiders, Bats, etc.)",
      "37% increased Cooldown Rate to Poison Skills"
    ],
    "flavor_text": "When rats were breeding in the sewers, Tegean citizens developed an unsettling mixture of volatile poisons.",
    "requirements": "KNO 230",
    "gold_value": 3365
  },
  {
    "item_name": "Rimescythe",
    "item_type": "2h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "cold_damage": "138-153",
      "pierce_damage": "35-38",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+40 Weapon Cold Damage",
      "69% increased Cold Damage",
      "12% increased Attack and Cast Speed",
      "+23% Cold Resistance",
      "+36 Energy",
      "19% increased Movement Skill Cooldown Rate"
    ],
    "unique_effects": [
      "+2 Capacity to Movement Skills"
    ],
    "flavor_text": "When Demeter lifted the eternal winter, only this axe remained.",
    "requirements": "RSV 241",
    "gold_value": 9431
  },
  {
    "item_name": "Sagaris Karkinos",
    "item_type": "1h Axe",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "pierce_damage": "101-112",
      "strike_damage": "43-48",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+26 Weapon Pierce Damage",
      "24% increased Strike Damage",
      "25% increased Pierce Damage",
      "61 Pierce Retaliation",
      "+358 Pierce Armor",
      "+16 Health recovered on Kill"
    ],
    "unique_effects": [
      "+1 Maximum Bleeding Stacks",
      "+3% Base Weapon Ailment Chance"
    ],
    "flavor_text": "An axe fashioned from razor-sharp crab claws.",
    "requirements": "MIG 322",
    "gold_value": 3387
  },
  {
    "item_name": "Shadowsting",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 45,
    "base_stats": {
      "total_damage": "144-160",
      "pierce_damage": "72-80",
      "leech_damage": "72-80",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+74 Weapon Vitality Damage",
      "14% More Damage to Undead",
      "10% increased Attack Speed",
      "+186 Health",
      "53% increased Ailment Chance"
    ],
    "unique_effects": [
      "24% increased Lifesteal",
      "+4% Base Lifesteal to Vitality Damage"
    ],
    "flavor_text": "A dark aura surrounds this old dory.",
    "requirements": "CUN 224",
    "gold_value": 3486
  },
  {
    "item_name": "Shiverblood",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "cold_damage": "108-120",
      "pierce_damage": "36-40",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+20 Weapon Cold Damage",
      "38% increased Cold Damage",
      "+212 Free Barrier",
      "38% increased Cooldown Rate to Disruption Skills"
    ],
    "unique_effects": [
      "+2 Capacity to Cold Skills",
      "Gain 25% of your Maximum Barrier as Barrier when freezing an Enemy"
    ],
    "flavor_text": "A masterpiece from the Temple of Kheimon, prime purveyor of cold-enchanted weapons and silent guardsmen.",
    "requirements": "RES 224",
    "gold_value": 3454
  },
  {
    "item_name": "Silence",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "spirit_damage": "60-66",
      "lightning_damage": "60-66",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+16 Weapon Lightning Damage",
      "63% increased Lightning Damage",
      "7% increased Attack and Cast Speed",
      "+18 Energy",
      "+2.7 Energy Regeneration per second",
      "+2 Energy recovered on Kill"
    ],
    "unique_effects": [
      "When you Silence an Enemy, generate an Explosion in a 3m radius dealing Spirit Damage and leaving all Enemies hit Vulnerable for 5 seconds (Unique Effect)",
      "Unlock Weakened - Silence (Chance to Silence Enemies when applying Weakened)"
    ],
    "flavor_text": "Created by a king to break a nymph's spell, this sword sparks fear in the hearts of magic-users.",
    "requirements": "KNO 123",
    "gold_value": 1088
  },
  {
    "item_name": "Soul Carver",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "120-132",
      "spirit_damage": "60-66",
      "pierce_damage": "60-66",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+50 Weapon Spirit Damage",
      "55% increased Spirit Damage",
      "12% increased Attack and Cast Speed",
      "16% increased Cooldown Rate"
    ],
    "unique_effects": [
      "35% increased Lifesteal",
      "+4% Base Lifesteal to Spirit Damage"
    ],
    "flavor_text": "A shining blade that wounds the spirit as much as the body.",
    "requirements": "CUN 224",
    "gold_value": 3518
  },
  {
    "item_name": "Spear of Myrine",
    "item_type": "Spear",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "pierce_damage": "97-107",
      "poison_damage": "48-53",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+15 Weapon Poison Damage",
      "28% increased Damage over Time",
      "40% increased Poison Damage",
      "Summons have 33% increased Damage",
      "Summons have 13% increased All Speed",
      "14% increased Movement Speed"
    ],
    "unique_effects": [
      "Your Summons have 8% More Damage against Bleeding Enemies"
    ],
    "flavor_text": "The legendary Amazon queen inspired her followers by leading from the front.",
    "requirements": "AGI 251",
    "gold_value": 4630
  },
  {
    "item_name": "Storm Strike",
    "item_type": "Bow",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "pierce_damage": "52-57",
      "lightning_damage": "121-134",
      "attack_speed": "1.25x"
    },
    "magical_properties": [
      "+26 Weapon Lightning Damage",
      "65% increased Lightning Damage",
      "+40 Agility",
      "16% increased Cooldown Rate",
      "16% increased Movement Speed"
    ],
    "unique_effects": [
      "After using a Non-Basic Active Skill, your Basic Skills gain 24% increased Total Lightning Damage and +10% Critical Hit Chance for 4s"
    ],
    "flavor_text": "A weapon enchanted with the power of wind and lightning.",
    "requirements": "AGI 230",
    "gold_value": 7078
  },
  {
    "item_name": "Telekinos",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "strike_damage": "173-191",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "55% increased Spell Damage",
      "101% increased Strike Damage",
      "17% increased Attack and Cast Speed",
      "+38 Energy",
      "90% increased Ailment Chance"
    ],
    "unique_effects": [
      "+2 Capacity to Physical Spells",
      "+3 Maximum Staggered Stacks",
      "Your Primary Attack consumes Vulnerable to genereate an Explosion dealing Strike Damage in a 2m area around Enemies hit. The Explosion has 20% to Stun for 1s. The Explosion is considered a Physical Spell"
    ],
    "flavor_text": "A staff that projects blunt force, useful to settle scholarly disagreements.",
    "requirements": "RES 224",
    "gold_value": 6893
  },
  {
    "item_name": "Thornwall",
    "item_type": "Shield",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "barrier": 351,
      "armor": 220
    },
    "magical_properties": [
      "+157 Pierce Retaliation",
      "+376 Poison Retaliation",
      "+14% Bleeding Resistance",
      "+13% Poison Resistance",
      "Summons have +20% to All Resistances"
    ],
    "unique_effects": [
      "58% increased Retaliation Damage",
      "13% less Damage from Beasts"
      
    ],
    "flavor_text": "Sharp poisoned spikes dampen many a creature's appetite.",
    "requirements": null,
    "gold_value": 3483
  },
  {
    "item_name": "Thorny Maul",
    "item_type": "1h Club",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "pierce_damage": "116-128",
      "strike_damage": "57-63",
      "attack_speed": "1.12x"
    },
    "magical_properties": [
      "+35 Weapon Pierce Damage",
      "24% increased Strike Damage",
      "24% increased Pierce Damage",
      "117 Pierce Retaliation",
      "+363 Strike Armor",
      "+6% Critical Hit chance"
    ],
    "unique_effects": [
      "+5% Base Weapon Critical Hit Chance"
    ],
    "flavor_text": "Block crush and impale, all with one handy tool.",
    "requirements": "FIT 241",
    "gold_value": 4732
  },
  {
    "item_name": "Thyrsus",
    "item_type": "Staff",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "173-191",
      "poison_damage": "173-191",
      "attack_speed": "1x"
    },
    "magical_properties": [
      "159% increased Poison Damage",
      "19% increased Attack and Cast Speed",
      "+5.7 Energy Regeneration per second",
      "115% increased Plagued Ailment Chance",
      "+203 Energy Barrier"
    ],
    "unique_effects": [
      "Activating Barrier creates a Poison Explosion is a 6m area around you. 300% Ailment Chance"
    ],
    "flavor_text": "A vined staff, sacred to Dionysos.",
    "requirements": "KNO 230",
    "gold_value": 6902
  },
  {
    "item_name": "Trygon's Tail",
    "item_type": "Dagger",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "total_damage": "144-160",
      "cold_damage": "72-80",
      "poison_damage": "72-80",
      "attack_speed": "1.4x"
    },
    "magical_properties": [
      "+16 Weapon Cold Damage",
      "+40 Weapon Poison Damage",
      "38% increased Cold Damage",
      "39% increased Poison Damage",
      "22% increased Ailment Power"
    ],
    "unique_effects": [
      "+1 Capacity to Cold Skills",
      "Attacks has an Additional 100% Plagued Chance against Frozen Enemies"
    ],
    "flavor_text": "The venomous tip of the lord of stingrays' tail, which slew the hero Odysseus.",
    "requirements": "FIT 224",
    "gold_value": 3505
  },
  {
    "item_name": "Venom Heart",
    "item_type": "Necklace",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {},
    "magical_properties": [
      "+45 Weapon Poison Damage",
      "40% increased Poison Damage",
      "+18% Poison Resistance",
      "63% increased Plagued Ailment Chance",
      "34% increased Plagued Ailment Power"
    ],
    "unique_effects": [
      "+1 Capacity to Poison Skills",
      "65% of Weapon Damage converted to Poison"
    ],
    "flavor_text": "A cursed amulet that once held the image of a dear spouse.",
    "requirements": "LV 45",
    "gold_value": 4406
  },
  {
    "item_name": "Wellspring",
    "item_type": "Necklace",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {},
    "magical_properties": [
      "+7.1 Energy Regeneration per second",
      "+31 Health Regeneration per second",
      "Summons have +20% to All Resistances"
    ],
    "unique_effects": [
      "+2 Capacity to Aura Skills",
      "+7% to all Magical Resistances",
      "Cleansing Overload grants 10% increased Total Health Regeneration for 3 seconds"
    ],
    "flavor_text": "Wearing this amulet makes you feel refreshed and energized.",
    "requirements": "LV 45",
    "gold_value": 4583
  }
];
