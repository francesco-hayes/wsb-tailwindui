/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText } from "@wordpress/block-editor";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { steps } = attributes;

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
									<span className="relative text-white z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
										{stepIdx + 1}
									</span>
								</span>
								<span className="ml-4 flex min-w-0 flex-col">
									<RichText.Content
										tagName="span"
										className="text-sm font-medium"
										value={step.name}
									/>

									<RichText.Content
										tagName="span"
										className="text-sm text-gray-500"
										value={step.description}
									/>
								</span>
							</p>
						</>
					</li>
				))}
			</ul>
		</nav>
	);
}
