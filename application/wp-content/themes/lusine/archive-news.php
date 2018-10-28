<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lusine
 */

get_header();
?>

<div class="page">
  <div class="container">

    <header class="page-header">
      <h1 class="page-header__title">News</h1>
      <ul class="page-header__breadcrumb">
        <li><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>">Home</a></li>
        <li>News</li>
      </ul>
    </header>
    <section class="section mw-950">
      <div class="section__block">
    		<?php
        if ( have_posts() ) :
    		/* Start the Loop */
    		while ( have_posts() ) :
    			the_post();

    			/*
    			 * Include the Post-Type-specific template for the content.
    			 * If you want to override this in a child theme, then include a file
    			 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
    			 */
    			get_template_part( 'template-parts/content-news', get_post_type() );

    		endwhile;
    		endif;
    		?>
      </div>
    </section>
	</div>
</div>

<?php
get_footer();
