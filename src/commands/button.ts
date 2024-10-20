import {
	Button,
	type ButtonInteraction,
	ButtonStyle,
	LinkButton,
	Command,
	type CommandInteraction,
	Row
} from "@buape/carbon"

export default class ButtonCommand extends Command {
	// Set the name and description of the command
	name = "button"
	description = "A simple command with a button!"

	// Make the command automatically defer
	defer = true

	// Mount the components that are runnable here
	components = [ClickMeButton]

	// Run the command
	async run(interaction: CommandInteraction) {
		await interaction.reply({
			content: "Look at this button!",
			components: [new Row([new ClickMeButton(), new DocsButton()])]
		})
	}
}

// Create a button that will respond when you click on it
class ClickMeButton extends Button {
    customId = "click-me"
    label = "Click me!"
    style = ButtonStyle.Success
    async run(interaction: ButtonInteraction) {
        await interaction.reply("You clicked the button!")
    }
}

// Create a button that will show a link to the Carbon website
class DocsButton extends LinkButton {
	label = "Carbon Documentation"
	url = "https://carbon.buape.com"
}