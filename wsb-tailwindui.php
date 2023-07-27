<?php
/**
 * Plugin Name:       Wsb Tailwindui
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wsb-tailwindui
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wsb_tailwindui_block_init() {
	register_block_type(__DIR__ . '/build/hero-cta');
	register_block_type(__DIR__ . '/build/testimonials');
	register_block_type(__DIR__ . '/build/stats');
	register_block_type(__DIR__ . '/build/steps');
	register_block_type(__DIR__ . '/build/cta-center');
	register_block_type(__DIR__ . '/build/customer-logos');
	register_block_type(__DIR__ . '/build/featured-section');
}
add_action( 'init', 'create_block_wsb_tailwindui_block_init' );

function block_plugin_styles()
{
	wp_enqueue_style(
		'inter-font',
		'https://rsms.me/inter/inter.css',
		array()
	);
}
add_action('enqueue_block_assets', 'block_plugin_styles');


function wsb_tailwindui_register_block_categories($categories) {

	// Adding a new category.
	$categories[] = array(
		'slug'  => 'wsb-tailwindui',
		'title' => 'Tailwind UI'
	);

	return $categories;
}
add_filter('block_categories_all', 'wsb_tailwindui_register_block_categories', 10, 2);
