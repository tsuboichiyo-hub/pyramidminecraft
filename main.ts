// Pyramid building function (note: can not make 1 block pyramids due to the way it is programmed)
function MakePyramid (Width: number) {
    // Simple check for the genius who thinks building a pyramid with even sides is a good idea
    if (0 == Width % 2) {
        // Don't make agent sad
        player.say("This number not odd. Agent sad :(")
    } else {
        // Start up (initialisation)
        PyramidWidth = Width
        CurrentLayerwidth = PyramidWidth
        // Change this to change pyramid material
        agent.setItem(SANDSTONE, 64, 1)
        // Jump up the make sure agent does not build pyramid into the ground
        agent.move(UP, 1)
        // First loop for each Layers
        // Math to find the amount of layers in a pyramid excluding the final layer
        for (let index = 0; index <= Math.round(PyramidWidth / 2) - 1; index++) {
            // Second loop to make 4 lines, forming a square
            for (let index2 = 0; index2 < 4; index2++) {
                // Third loop for making each line
                for (let index2 = 0; index2 < CurrentLayerwidth - 1; index2++) {
                    // Basic two block loop to place blocks
                    agent.move(FORWARD, 1)
                    agent.place(DOWN)
                }
                // Turn after each making one line
                agent.turn(LEFT_TURN)
            }
            // End check to make sure agent does not place an extra block at the top
            if (1 < CurrentLayerwidth) {
                // Goes forward, up and left to make the next layer
                agent.move(FORWARD, 1)
                agent.move(UP, 1)
                agent.move(LEFT, 1)
                agent.place(DOWN)
                CurrentLayerwidth += -2
            }
        }
        player.say("Pyramid Complete")
    }
}
let CurrentLayerwidth = 0
let PyramidWidth = 0
agent.teleportToPlayer()
// Function caller, change this number to change pyramid size. Don't get in agents way please.
MakePyramid(5)
