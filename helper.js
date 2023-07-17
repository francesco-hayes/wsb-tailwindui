const fs = require("fs/promises");

const updateFileClasses = async (filePath, prefix) => {
	try {
		const data = await fs.readFile(filePath, "utf8");

		const classNames = data.match(/className\s*=\s*['"`]([^'"`]+)['"`]/g);
		if (!classNames) {
			throw new Error("No class names found in file: " + filePath);
		}

		let updatedContent = data;
		classNames.forEach((className) => {
			const originalClassName = className.replace(/className\s*=\s*['"`]/, "");

			const updatedClassName = className.includes(":")
				? originalClassName.replace(/:/g, `:${prefix}-`)
				: `${prefix}-${originalClassName}`;
			updatedContent = updatedContent.replace(
				className,
				`className="${updatedClassName}"`
			);
		});

		await fs.writeFile(filePath, updatedContent, "utf8");

	} catch (error) {
		throw new Error("Couldn't run updateFileClasses: " + error);
	}
};

updateFileClasses(process.argv[2], process.argv[3]);
