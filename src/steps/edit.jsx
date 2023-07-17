/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText } from "@wordpress/block-editor";

import { Button } from "@wordpress/components";

import { useState } from "@wordpress/element";

import { XMarkIcon } from "@heroicons/react/24/outline";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Edit({ attributes, setAttributes }) {
	const { steps } = attributes;

	const [isHovered, setIsHovered] = useState(null);

	const setStep = (index, key, value) => {
		const newSteps = [...steps];

		newSteps[index][key] = value;

		setAttributes({ steps: newSteps });
	};

	const addStep = () => {
		setAttributes({ steps: [...steps, { name: "", description: "" }] });
	};

	const removeStep = (index) => {
		const newSteps = [...steps];

		newSteps.splice(index, 1);

		setAttributes({ steps: newSteps });
	};

	const handleMouseOver = (index) => {
		setIsHovered(index);
	};

	const handleMouseOut = () => {
		setIsHovered(null);
	};

	return (
		<nav aria-label="Progress">
			<ul role="list" className="overflow-hidden list-none">
				{steps.map((step, stepIdx) => (
					<li
						key={step.name}
						className={classNames(
							stepIdx !== steps.length - 1 ? "pb-10" : "",
							"relative"
						)}
					>
						<>
							{stepIdx !== steps.length - 1 ? (
								<div
									className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
									aria-hidden="true"
								/>
							) : null}
							<p className="group relative flex items-start">
								<span className="flex h-9 items-center">
									<span
										onMouseOver={() => handleMouseOver(stepIdx)}
										onMouseOut={handleMouseOut}
										className="relative text-white z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800 group-hover:cursor-pointer"
										onClick={() => removeStep(stepIdx)}
									>
										{isHovered === stepIdx ? (
											<XMarkIcon
												className="h-5 w-5 text-white"
												aria-hidden="true"
											/>
										) : (
											stepIdx + 1
										)}
									</span>
								</span>
								<span className="ml-4 flex min-w-0 flex-col">
									<RichText
										tagName="span"
										className="text-sm font-medium"
										value={step.name}
										onChange={(content) => setStep(stepIdx, "name", content)}
										placeholder={__("Step name...")}
									/>

									<RichText
										tagName="span"
										className="text-sm text-gray-500"
										value={step.description}
										onChange={(content) =>
											setStep(stepIdx, "description", content)
										}
										placeholder={__("Step description...")}
									/>
								</span>
							</p>
						</>
					</li>
				))}
				<li>
					<Button onClick={addStep}>Add Step</Button>
				</li>
			</ul>
		</nav>
	);
}
