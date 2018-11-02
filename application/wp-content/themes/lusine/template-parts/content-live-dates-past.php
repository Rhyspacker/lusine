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
    $date = get_field('live_date_date', false, false);

    $today = strtotime(date('Ymd'));
    $end = strtotime($date);
    $outputDate = get_field('live_date_multiple_days', false, false);
  } else {
    $date = get_field('live_date_date', false, false);

    $today = strtotime(date('Ymd'));
    $end = strtotime($date);
    $outputDate = date('M j Y', $end);
  }
?>

<?php if ($end <= $today) { ?>
<div class="live-dates__row">
	<div class="live-dates__date"><?php echo $outputDate ?></div>
	<div class="live-dates__info"><?php the_field('live_date_venue'); ?>, <?php the_field('live_date_location'); ?></div>
</div>
<?php }  ?>
