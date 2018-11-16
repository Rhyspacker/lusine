<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lusine
 */

  // If live date is multiple days then output the text field, else get the default date and output
  //
  if (get_field('live_date_multiple_days')) {
    $outputDate = get_field('live_date_multiple_days', false, false);
  } else {
    $live_date_date = get_field('live_date_date', false, false);
    $date = strtotime($live_date_date);
    $outputDate = date('M j Y', $date);
  }
?>

<div class="live-dates__row">
	<div class="live-dates__date"><?php echo $outputDate ?></div>
	<div class="live-dates__info"><?php the_field('live_date_venue'); ?>, <?php the_field('live_date_location'); ?></div>
	<?php if (get_field('live_date_ticket_link')) : ?><div class="live-dates__btn"><a href="<?php the_field('live_date_ticket_link'); ?>" class="btn btn--light btn--sm" target="_blank">Buy tickets</a></div><?php endif; ?>
</div>
