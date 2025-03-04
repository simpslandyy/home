
module.exports = {
	"presets": ["next/babel"], // if you're using nextJS, this preset contains everything
	"plugins": [
		"transform-define",
		[
			"module-resolver", // great for creating aliases for a project
		{
			"root": ["./"],	
			"alias": { // you’ll also need to add these aliases in tsconfig
        "@/*": "./",
        "@fonts/*":"./assets/fonts",
        "@assets/*":"./assets/*",
				"@pages/*": "./pages",
        "@styles/*": "./styles",
        "@components/*": "./src/components"
			}
		}
	]
]}