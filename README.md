# TQ2_DB_UniquesCharmsRelics

Source files used for the items, relics and charms database of TQ2 : https://kubasemi.github.io/TQ-2-database/

This is meant to be a collaborative space, for anyone to submit changes and correction to entries efficiently, especially along the development of the game in Early Access.

# How to Contribute

### 1 - Create your own fork of the repository

While the project is public, you will have to create your own fork of the repository in order to edit the files. Your changes will then be reviewed before being added in the database.

### 2 - Edit the files 

Make sure to respect the structure format. be careful about commas, indentation, etc. You can use "//" to add comments to your changes.

### 3 - Commit your changes

Name your commit based on the following template : TBD (please give an explicit name).
In the description field, please detail which entries (charm, relic or item) you've added or modified, so that we can keep track of changes and avoid duplicates.

### 4 - Submit your changes

Click on the green button "Propose Changes" and then "Create pull request".

# Data Template 

You can copy these templates to add new entries to the database. 
Make sure to add commas correctly and always double-check the indentation.

### Item 
  {
    "item_name": "Name goes here",
    "item_type": "Sword",
    "rarity": "Epic",
    "required_level": 50,
    "base_stats": {
      "stat_name": "X-Y"
    },
    "magical_properties": [
      "Stat goes here"
    ],
    "unique_effects": [],
    "flavor_text": "Lorem Ipsum",
    "requirements": "FIT 999",
    "gold_value": 999999
  },

### Charm / Relic

  {
    "category": "Charm",
    "item_name": "Name goes here",
    "item_type": "Charm",
    "stats": [
      "Stat goes here"
    ],
    "completion_bonus": [
      "Stat goes here"
    ],
    "enchantable_slots": [
      "Slot goes here"
    ],
    "dropped_by": "X" //Remove for relics
  },

# FAQ

### I don't understand X/Y/Z, what should I do ?
Please reach out to me on Discord, attach screenshots of what you see, if possible. This ReadMe will get improved over time and all questions are welcome to improve on that.
