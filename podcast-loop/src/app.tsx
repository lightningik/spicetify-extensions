async function main() {
    while (!Spicetify?.showNotification) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Show message on start.



    const loopbutton = new Spicetify.Playbar.Button(
        "Loop Podcast",
        "repeat",
        () => {
            Spicetify.Player.toggleRepeat()
            if (Spicetify.Player.getRepeat() == 1) {
                Spicetify.showNotification("Repeating 1 time.")
                loopbutton.icon = "repeat-once"
            }
            else if (Spicetify.Player.getRepeat() == 0)
                Spicetify.showNotification("Repeating infinitely.")
            else {
                Spicetify.showNotification("Not repeating.")
                loopbutton.icon = "repeat"
            }
        }
    )



}



export default main;