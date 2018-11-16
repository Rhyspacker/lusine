<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package lusine
 */

get_header();
?>

<div class="page">
	<div class="container">

		<header class="page-header">
			<h1 class="page-header__title">Sorry that page cannot be found.</h1>
			<ul class="page-header__breadcrumb">
				<li><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>">Go to home</a></li>
			</ul>
		</header>

	</div>
</div>

<?php
get_footer();
