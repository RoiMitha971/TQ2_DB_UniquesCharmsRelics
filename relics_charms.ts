export interface RelicCharm {
  category: "Charm" | "Relic";
  item_name: string;
  item_type: string;
  stats: string[];
  completion_bonus: string[];
  enchantable_slots: string[];
  dropped_by?: string | null;
}

export const relicsAndCharms: RelicCharm[] = [
  {
    "category": "Charm",
    "item_name": "Beast Tail",
    "item_type": "Charm",
    "stats": [
      "8/16/24% increased Poison Damage",
      "8/16/24% increased Lightning Damage"
    ],
    "completion_bonus": [
      "+8% Poison Resistance",
      "+8% Lightning Resistance"
    ],
    "enchantable_slots": [
      "All Weapons, Talisman, Arm Armor"
    ],
    "dropped_by": "Ketos Spawn, Hippocampos Foal, Crocolisk"
  },
  {
    "category": "Charm",
    "item_name": "Blighted Essence",
    "item_type": "Charm",
    "stats": [
      "12/24/36% increased Ailment Chance"
    ],
    "completion_bonus": [
      "5% increased Ailment Power"
    ],
    "enchantable_slots": [
      "Jewelry, All Weapons"
    ],
    "dropped_by": "Skeleton - Evoker"
  },
  {
    "category": "Charm",
    "item_name": "Boarman Blood",
    "item_type": "Charm",
    "stats": [
      "3/6/9% increased Attack and Cast Speed"
    ],
    "completion_bonus": [
      "20% increased Attack Damage"
    ],
    "enchantable_slots": [
      "Arm Armor, Necklace"
    ],
    "dropped_by": "Boarman - Geomancer, Elite"
  },
  {
    "category": "Charm",
    "item_name": "Boar Hide",
    "item_type": "Charm",
    "stats": [
      "+8/16/24 Might",
      "+5/10/15% Glancing Hit Chance"
    ],
    "completion_bonus": [
      "5 Armor per Level"
    ],
    "enchantable_slots": [
      "Jewelry"
    ],
    "dropped_by": "Boar, Monstrous Boar, Boarman"
  },
  {
    "category": "Charm",
    "item_name": "Centaur Hoof",
    "item_type": "Charm",
    "stats": [
      "3/6/9% increased Movement Speed"
    ],
    "completion_bonus": [
      "10% increased Movement Skill Cooldown Rate"
    ],
    "enchantable_slots": [
      "Leg Armor"
    ],
    "dropped_by": "Centaurs"
  },
  {
    "category": "Charm",
    "item_name": "Crab Claw",
    "item_type": "Charm",
    "stats": [
      "10/20/30% increased Pierce Damage"
    ],
    "completion_bonus": [
      "+20 Fitness"
    ],
    "enchantable_slots": [
      "All Weapons, Talisman"
    ],
    "dropped_by": "Crabs"
  },
  {
    "category": "Charm",
    "item_name": "Dark Essence",
    "item_type": "Charm",
    "stats": [
      "+1/2/3% Critical Hit chance"
    ],
    "completion_bonus": [
      "3% increased Critical Hit Damage Modifier"
    ],
    "enchantable_slots": [
      "Jewelry, All Weapons"
    ],
    "dropped_by": "Ichtian Enchanter, Empusas"
  },
  {
    "category": "Charm",
    "item_name": "Feline Claw",
    "item_type": "Charm",
    "stats": [
      "8/16/24% increased Pierce Damage",
      "10/20/30% increased Bleeding Ailment Chance"
    ],
    "completion_bonus": [
      "5% Pierce penetration"
    ],
    "enchantable_slots": [
      "All Weapons, Arm Armor"
    ],
    "dropped_by": "Lions"
  },
  {
    "category": "Charm",
    "item_name": "Fetid Bile",
    "item_type": "Charm",
    "stats": [
      "+5/10/15% Vitality Resistance" 
    ],
    "completion_bonus": [
      "+10% increased Health Regeneration"
    ],
    "enchantable_slots": [
      "All Armor, Shield"
    ],
    "dropped_by": "Leeches, Undead Ichtians"
  },
  {
    "category": "Charm",
    "item_name": "Glacial Shard",
    "item_type": "Charm",
    "stats": [
      "5+3/6/9% Fire Resistance",
      "+3/6/9% Cold Resistance"
    ],
    "completion_bonus": [
      "+3 Health per Level"
    ],
    "enchantable_slots": [
      "All Armor, Shield"
    ],
    "dropped_by": "Bandit Trainee, Skeleton Evoker (ice), Frost Revenant, Ichtian Hydromancer"
  },
  {
    "category": "Charm",
    "item_name": "Hollow Essence",
    "item_type": "Charm",
    "stats": [
      "4/8/12 Energy Barrier per Level"
    ],
    "completion_bonus": [
      "+4% Magical Resistances"
    ],
    "enchantable_slots": [
      "All Armor, Talisman"
    ],
    "dropped_by": "Bandit Leader, Bandit Marauder, Skeleton Warlock, Centaur Spiritcaller, Ghosts"
  },
  {
    "category": "Charm",
    "item_name": "Hollow Fang",
    "item_type": "Charm",
    "stats": [
      "10/20/30% increased Vitality Damage"
    ],
    "completion_bonus": [
      "+15 Vigor"
    ],
    "enchantable_slots": [
      "All Weapons, Talisman"
    ],
    "dropped_by": "Giant Bat, Minyade, Cobras"
  },
  {
    "category": "Charm",
    "item_name": "Ichthian Fin",
    "item_type": "Charm",
    "stats": [
      "10/20/30% increased Cold Damage"
    ],
    "completion_bonus": [
      "20% increased Ailment Duration"
    ],
    "enchantable_slots": [
      "All Weapons, Talisman"
    ],
    "dropped_by": "Ichtians"
  },
  {
    "category": "Charm",
    "item_name": "Lupine Claw",
    "item_type": "Charm",
    "stats": [
      "10/20/30% increased Strike Damage"
    ],
    "completion_bonus": [
      "+20 Fitness"
    ],
    "enchantable_slots": [
      "All Weapons, Talisman"
    ],
    "dropped_by": "Wolves"
  },
  {
    "category": "Charm",
    "item_name": "Marble Heart",
    "item_type": "Charm",
    "stats": [
      "+5/10/15% Fire Resistance",
      "2/4/6 Strike Armor per Level"
    ],
    "completion_bonus": [
      "+8% Glancing Hits Chance"
    ],
    "enchantable_slots": [
      "Arm Armor",
      "Shoulder Armor"
    ],
    "dropped_by": "Living Statues"
  },
  {
    "category": "Charm",
    "item_name": "Mechanical Parts",
    "item_type": "Charm",
    "stats": [
      "3/6/9% increased Movement Speed"
    ],
    "completion_bonus": [
      "+10% Poison Resistance"
    ],
    "enchantable_slots": [
      "Torso Armor"
    ],
    "dropped_by": "Bandit Trapper"
  },
  {
    "category": "Charm",
    "item_name": "Membrane Wings",
    "item_type": "Charm",
    "stats": [
      "+3/6/9% Glancing Hits Chance",
      "2/4/6% increased Cast Speed"
    ],
    "completion_bonus": [
      "8% increased Attack Speed",
      "Summons have 10% increased All Speed"
    ],
    "enchantable_slots": [
      "Torso Armor",
      "Leg Armor"
    ],
    "dropped_by": "Minyades"
  },
  {
    "category": "Charm",
    "item_name": "Necrotic Bones",
    "item_type": "Charm",
    "stats": [
      "+5/10/15% Cold Resistance"
    ],
    "completion_bonus": [
      "+30 Energy"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Any Skeleton, Undead Ichtian, Ichtian Necromancer"
  },
  {
    "category": "Charm",
    "item_name": "Primal Magma",
    "item_type": "Charm",
    "stats": [
      "5/10/15% increased Fire Damage",
      "+5/10/15% Fire Resistance"
    ],
    "completion_bonus": [
      "+20% Burn Resistance",
      "Summons have 30% increased Damage"
    ],
    "enchantable_slots": [
      "Arm Armor",
      "Shoulder Armor"
    ],
    "dropped_by": "Walking Corpse Evoker, Burning Revenant"
  },
  {
    "category": "Charm",
    "item_name": "Raging Tempest",
    "item_type": "Charm",
    "stats": [
      "5/10/15% increased Lightning Damage",
      "+5/10/15% Lightning Resistance"
    ],
    "completion_bonus": [
      "+20% Shocked Resistance",
      "Summons have 30% increased Damage"
    ],
    "enchantable_slots": [
      "Head Armor",
      "Necklaces"
    ],
    "dropped_by": "Skeleton Evoker, Hippokampos Foal, Ketos Spawn"
  },
  {
    "category": "Charm",
    "item_name": "Pristine Plumage",
    "item_type": "Charm",
    "stats": [
      "+10/20/30 Agility",
      "+3/6/9% Poison Resistance"
    ],
    "completion_bonus": [
      "8% increased Strike Armor"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Gryphon, Giant Eagle"
  },
  {
    "category": "Charm",
    "item_name": "Rigid Carapace",
    "item_type": "Charm",
    "stats": [
      "+2/4/4 Pierce Armor per Level",
      "2/4/6% increased Health"
    ],
    "completion_bonus": [
      "15% increased Health Regeneration",
      "Summons have 20% increased Health"
    ],
    "enchantable_slots": [
      "Torso Armor",
      "Shields"
    ],
    "dropped_by": "Crabs, Ichtian Commanders, Scorpions"
  },
  {
    "category": "Charm",
    "item_name": "Spectral Matter",
    "item_type": "Charm",
    "stats": [
      "+10/20/30 Knowledge",
      "4/8/12% increased Energy Barrier"
    ],
    "completion_bonus": [
      "10% increased Energy Regeneration"
    ],
    "enchantable_slots": [
      "Rings",
      "Necklaces"
    ],
    "dropped_by": "Drowned Sailor, Accusing Shadow"
  },
  {
    "category": "Charm",
    "item_name": "Tortured Soul",
    "item_type": "Charm",
    "stats": [
      "+5/10/15% Vitality Resistance",
      "+5/10/15% Spirit Resistance"
    ],
    "completion_bonus": [
      "10% increased Energy Barrier"
    ],
    "enchantable_slots": [
      "Rings",
      "Necklaces"
    ],
    "dropped_by": "Accusing Shadow, Empusas"
  },
  {
    "category": "Charm",
    "item_name": "Turtle Shell",
    "item_type": "Charm",
    "stats": [
      "+3/5/7 Pierce Armor per Level"
    ],
    "completion_bonus": [
      "8% increased Health"
    ],
    "enchantable_slots": [
      "Shields",
      "Talismans"
    ],
    "dropped_by": "Turtles"
  },
  {
    "category": "Charm",
    "item_name": "Venom Sac",
    "item_type": "Charm",
    "stats": [
      "6/12/18% increased Poison Damage"
    ],
    "completion_bonus": [
      "15% increased Damage over Time"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Spiders, Cobras, Scorpions"
  },
  {
    "category": "Charm",
    "item_name": "Vile Ichor",
    "item_type": "Charm",
    "stats": [
      "3/6/9% increased Damage over Time",
      "3/6/9% increased Spell Damage"
    ],
    "completion_bonus": [
      "+20% Plagued Resistance",
      "Summons have 50% increased Damage"
    ],
    "enchantable_slots": [
      "Rings",
      "Necklaces"
    ],
    "dropped_by": "Exploding Spiders, Ichtian Alchemist"
  },
  {
    "category": "Relic",
    "item_name": "Aegis of Athena",
    "item_type": "Relic",
    "stats": [
      "+4/8/12 Armor per Level",
      "5/10/15% increased Free Barrier"
    ],
    "completion_bonus": [
      "+10% Glancing Hit Damage Reduction"
    ],
    "enchantable_slots": [
      "Shield"
    ],
    "dropped_by": "Chapter 1"
  },
  {
    "category": "Relic",
    "item_name": "Anvil of Hephaistos",
    "item_type": "Relic",
    "stats": [
      "15/40/45% increased Area Damage",
      "4/8/12% increased Base Weapon Damage",
      "-10% reduced Movement Speed (in-combat only)"
    ],
    "completion_bonus": [
      "10% Weapon Penetration"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 2"
  },
  {
    "category": "Relic",
    "item_name": "Archimede's Mirror",
    "item_type": "Relic",
    "stats": [
      "+4/8/12% Glancing Hits Chance",
      "+2/4/6% Glancing Hits Damage Reduction",
      "15/30/45% increased Retaliation Damage"
    ],
    "completion_bonus": [
      "Whenever you get hit you have a 15% chance to deal 100% Retaliation Damage to the attacker"
    ],
    "enchantable_slots": [
      "Shield, Talisman"
    ],
    "dropped_by": "Chapter 2"
  },
  {
    "category": "Relic",
    "item_name": "Artemis' Bowstring",
    "item_type": "Relic",
    "stats": [
      "20/40/60% increased Pierce Damage",
      "3/6/9% increased Attack Speed"
    ],
    "completion_bonus": [
      "20% increased Rage Effect"
    ],
    "enchantable_slots": [
      "Bow"
    ],
    "dropped_by": "Chapter 3"
  },
   {
    "category": "Relic",
    "item_name": "Atalanta's Beauty",
    "item_type": "Relic",
    "stats": [
      "10/20/30% increased Strike Damage",
      "2/4/6% increased Attack and Cast Speed",
      "7/14/21% increased Stun Duration"
    ],
    "completion_bonus": [
      "Unlocks Stagger - Stun (chance to Stun when applying Staggered Ailment)",
      "10% increased Total Strike Damage against Incapacitated Enemies",
      "+2 Maximum Staggered Stacks"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Blade of Thanatos",
    "item_type": "Relic",
    "stats": [
      "3/6/9% increased Attack Speed",
      "4/8/12% More Damage to Elite Creatures",
      "+5% Health Reserved"
    ],
    "completion_bonus": [
      "Every third Primary Attack against non-boss deals Spirit Damage (20% of missing Health)"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 2"
  },
  {
    "category": "Relic",
    "item_name": "Bow of Apollo",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Ranged Attack Damage",
      "15/30/45% increased Projectile Damage"
    ],
    "completion_bonus": [
      "20% increased Projectile Penetration",
      "8% Projectile Critical Hit chance"
    ],
    "enchantable_slots": [
      "Bow"
    ],
    "dropped_by": "Chapter 1"
  },
  {
    "category": "Relic",
    "item_name": "Charon's Obol",
    "item_type": "Relic",
    "stats": [
      "3/6/9% increased Gold and Experience gained in combat",
      "+30 Energy Reserved"
    ],
    "completion_bonus": [
      "9% increased Movement Speed"
    ],
    "enchantable_slots": [
      "Jewelry"
    ],
    "dropped_by": "Chapter 1"
  },
  {
    "category": "Relic",
    "item_name": "Chill of Tartaros",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Cold Damage",
      "3/6/9% increased Base Weapon Cold Damage",
      "-20% Cold Resistance"
    ],
    "completion_bonus": [
      "+0.6 Weapon Cold Damage per Level",
      "Convert 35% of your Weapon's damage to Cold"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 2"
  },
  {
    "category": "Relic",
    "item_name": "Courage of Theseus",
    "item_type": "Relic",
    "stats": [
      "Summons have 15/40/45% increased Damage",
      "Summons have 8/16/24% increased Health"
    ],
    "completion_bonus": [
      "Kill grants 3% increased Total Damage for 5s (stacks 5x)"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 1"
  },
  {
    "category": "Relic",
    "item_name": "Demeter's Duality",
    "item_type": "Relic",
    "stats": [
      "3/6/9% increased Health",
      "4/8/12% increased Health Regeneration",
      "-20% Cold Resistance",
      "+30 Energy Reserved"
    ],
    "completion_bonus": [
      "Gain 10% Total Damage below 50% Health",
      "Regen 1% max health/sec above 50% Health"
    ],
    "enchantable_slots": [
      "Necklaces"
    ],
    "dropped_by": "Chapter 2"
  },
  {
    "category": "Relic",
    "item_name": "Dionysos' Wineskin",
    "item_type": "Relic",
    "stats": [
      "3/6/9 Health per Level",
      "+5/10/15 Armor per Level"
    ],
    "completion_bonus": [
      "Gain 5% of your Maximum Barrier as Barrier for every 100 Energy spent",
      "Gain 20% of your Maximum Barrier as Barrier Decay Threshold",
      "50% more Barrier Decay Rate"
    ],
    "enchantable_slots": [
      "Jewelry"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Eris' Strife",
    "item_type": "Relic",
    "stats": [
      "10/20/30% increased Ailment Power",
      "3/6/9% increased Attack and Cast Speed",
      "15% more Damage taken from Ailments"
    ],
    "completion_bonus": [
      "Enemies take 3% more Damage per Ailment they suffer"
    ],
    "enchantable_slots": [
      "Head Armor"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Eternal Rose of Aphrodite",
    "item_type": "Relic",
    "stats": [
      "10/20/30% increased Vitality Damage",
      "3/6/9% increased Lifesteal",
      "20/40/60% increased Weakened Ailment Power"
    ],
    "completion_bonus": [
      "+2 Maximum Weakened Stacks",
      "10% increased Lifesteal against Weakened enemies"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Hades' Helm of Darkness",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Cold Damage",
      "3/6/9% Magical Resistances"
    ],
    "completion_bonus": [
      "10% of Energy Reserved",
      "10% more Cold Damage, 2x against Undead"
    ],
    "enchantable_slots": [
      "Head Armor"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Helios' Sun Crown",
    "item_type": "Relic",
    "stats": [
      "10/20/30% increased Cooldown Rate",
      "10/20/30% increased Fire Damage",
      "5/10/15% Fire Resistance"
    ],
    "completion_bonus": [
      "+2 Capacity to Fire Skills",
      "Enemies within 6m have -7% Fire Resistance"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Hera's Scepter",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Poison Damage",
      "20/40/60% increased Plagued Ailment Chance",
      "4/8/12% increased Plagued Ailment Duration"
    ],
    "completion_bonus": [
      "+2 Maximum Plagued Stacks"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 1"
  },
  {
    "category": "Relic",
    "item_name": "Hermes' Sandal",
    "item_type": "Relic",
    "stats": [
      "3/6/9% increased Movement Speed",
      "+8/16/24 Agility"
    ],
    "completion_bonus": [
      "+1 Dodge Cooldown Charge",
      "10% increased Movement Skill Cooldown Rate"
    ],
    "enchantable_slots": [
      "Legs"
    ],
    "dropped_by": "Chapter 1"
  },
  {
    "category": "Relic",
    "item_name": "Hestia's Cinders",
    "item_type": "Relic",
    "stats": [
      "10/20/30% increased Fire Damage",
      "10/20/30% increased Burning Ailment Power",
      "7/14/21% increased Burning Ailment Duration"
    ],
    "completion_bonus": [
      "10% increased Total Fire Damage against Burning Enemies",
      "+2 Maximum Burning Stacks"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Hypnos' Calm",
    "item_type": "Relic",
    "stats": [
      "4/8/12 Energy Regeneration per second",
      "+30 Energy Reserved"
    ],
    "completion_bonus": [
      "20% increased Energy Regeneration while below 50% Energy"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Chapter 1"
  },
  {
    "category": "Relic",
    "item_name": "Hubris of Bellerophon",
    "item_type": "Relic",
    "stats": [
      "10/20/30% increased Pierce Damage",
      "10/20/30% increased Bleeding Ailment Power",
      "7/14/21% increased Bleeding Ailment Duration"
    ],
    "completion_bonus": [
      "+2 Maximum Bleeding Stacks",
      "10% increased Total Pierce Damage against Bleeding Enemies"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Iron Will of Ajax",
    "item_type": "Relic",
    "stats": [
      "5/7/9% Armor Value",
      "+6/12/18% Spirit Resistance"
    ],
    "completion_bonus": [
      "30% chance to cleanse Hard CC and gain 8s Immunity (30s CD)"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Chapter 1"
  },
  {
    "category": "Relic",
    "item_name": "Legacy of Perseus",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Poison Damage",
      "3/6/9% increased Base Weapon Poison Damage",
      "-20% Poison Resistance"
    ],
    "completion_bonus": [
      "+0.6 Poison Weapon Damage per Level",
      "Convert 35% of Weapon Damage to Poison"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 2"
  },
   {
    "category": "Relic",
    "item_name": "Pandora's Box",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Poison Damage",
      "+4/8/12% Poison Resistance",
      "+5/10/15% Plagued Resistance"
    ],
    "completion_bonus": [
      "Every 3s, 100% chance to apply Weakened to all Enemies within a 3m radius",
      "9% increased Plagued Ailment Power"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Chapter 2"
  },
  {
    "category": "Relic",
    "item_name": "Persephone's Tears",
    "item_type": "Relic",
    "stats": [
      "+12/24/36 Energy",
      "+6/12/18% Cold Resistance"
    ],
    "completion_bonus": [
      "8% increased Energy",
      "+4% Max Cold Resistance"
    ],
    "enchantable_slots": [
      "Jewelry"
    ],
    "dropped_by": "Chapter 2"
  },
  {
    "category": "Relic",
    "item_name": "Poseidon's Trident",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Spell Damage",
      "4/8/12% Lightning Resistance",
      "30/5/10% Shocked Resistance"
    ],
    "completion_bonus": [
      "Every 3s, 100% chance to apply Weakened to all enemies within 3m area",
      "9% increased Weakened Ailment Power"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Chapter 2"
  },
  {
    "category": "Relic",
    "item_name": "Prometheus' Flame",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Fire Damage",
      "3/6/9% increased Base Weapon Fire Damage",
      "-20% Fire Resistance"
    ],
    "completion_bonus": [
      "+0.6 Fire Weapon Damage per Level",
      "Convert 35% of your Weapon's Damage to Fire"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Rage of Ares",
    "item_type": "Relic",
    "stats": [
      "20/40/60% increased Strike Damage",
      "20/40/60% increased Pierce Damage",
      "+2/4/6% Critical Hit Chance",
      "15% less Armor"
    ],
    "completion_bonus": [
      "Kill grants you and Summons 3% Speed for 10s (stacks 5x)"
    ],
    "enchantable_slots": [
      "Arm Armor"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Selene's Moonlight",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Spell Damage",
      "+5/10/15% Cold Resistance"
    ],
    "completion_bonus": [
      "Killing grants +3 Energy Regeneration for 4s (stacks 4x)"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Theia's Brilliance",
    "item_type": "Relic",
    "stats": [
      "4/8/12% increased Attributes"
    ],
    "completion_bonus": [
      "20% increased Gold gained from Elite Creatures"
    ],
    "enchantable_slots": [
      "Rings"
    ],
    "dropped_by": "Chapter 2"
  },
   {
    "category": "Relic",
    "item_name": "Typhon's Serpentine Fang",
    "item_type": "Relic",
    "stats": [
      "20/40/60% increased Fire Damage",
      "+8/16/24% Lightning Resistance",
      "-20% Fire Resistance"
    ],
    "completion_bonus": [
      "Unlock Burn - Rupture (chance to cause Rupture when applying Burn)",
      "20% increased Burning Ailment Chance"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 1"
  },
  {
    "category": "Relic",
    "item_name": "Valor of Achilles",
    "item_type": "Relic",
    "stats": [
      "15/30/45% increased Lightning Damage",
      "3/6/9% increased Base Weapon Lightning Damage",
      "-20% Lightning Resistance"
    ],
    "completion_bonus": [
      "+0.6 Lightning Weapon Damage per Level",
      "Convert 35% of Weapon Damage to Lightning"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 3"
  },
  {
    "category": "Relic",
    "item_name": "Zeus' Thunderbolt",
    "item_type": "Relic",
    "stats": [
      "3/6/9% increased Attack and Cast Speed",
      "15/30/45% increased Lightning Damage"
    ],
    "completion_bonus": [
      "10% chance to instantly kill non-boss enemy on first hit",
      "Convert 35% of Weapon Damage to Lightning"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Chapter 1"
  }
];
