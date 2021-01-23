const wandura = require("exotic-mod/planets/wandura");

const lastStand = new SectorPreset("last-stand", wandura, 69);
lastStand.localizedName = "Last Stand";
lastStand.difficulty = 25;
lastStand.captureWave = 150;
lastStand.alwaysUnlocked = false;

const overgrownBattleground = new SectorPreset("overgrown-battleground", wandura, 41);
overgrownBattleground.localizedName = "Overgrown Battleground";
overgrownBattleground.difficulty = 6;
overgrownBattleground.captureWave = 25;
overgrownBattleground.alwaysUnlocked = true;
