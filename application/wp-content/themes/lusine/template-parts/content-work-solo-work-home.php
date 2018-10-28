<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lusine
 */

?>

<div class="col-md-4">
	<div class="figure box-border">
		<a href="<?php the_field('album_link'); ?>" class="" target="_blank">
			<picture class="figure__media">
				<img src="<?php the_field('album_image'); ?>" alt="<?php the_field('album_title'); ?>">
			</picture>
		</a>
	</div>
</div>
