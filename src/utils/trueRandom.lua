--[[
   This module provides a true random number because it changes the seed and shouldn't
   be keep same shit when you launch the game
]]

math.randomseed(os.time())

local function randomNumber(max, start)
    if not start then
        start = 0
    end
    return math.floor(math.random() * max) + start
end

return { default = randomNumber }