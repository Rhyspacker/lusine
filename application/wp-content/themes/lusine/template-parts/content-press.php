<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lusine
 */

?>

<div class="post" id="<?php echo $post->ID ?>">
	<h2 class="h2 post__title"><?php the_title(); ?></h2>
	<p class="small post__subtitle"><?php the_field("press_item_author") ?></p>
	<p class="post__body">
		<?php
		the_content( sprintf(
			wp_kses(
				/* translators: %s: Name of current post. Only visible to screen readers */
				__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'lusine' ),
				array(
					'span' => array(
						'class' => array(),
					),
				)
			),
			get_the_title()
		) );
		?>
	</p>
	<?php if (get_field("press_item_link")) :?><a href="<?php the_field("press_item_link") ?>" class="btn btn--light btn--external" target="_blank">Read More</a><?php endif ?>
</div>
