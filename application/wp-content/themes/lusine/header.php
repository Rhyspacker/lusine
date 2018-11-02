<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package lusine
 */

global $wp;
$current_url = home_url( add_query_arg( array(), $wp->request ) );

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<link rel="canonical" href="lusineweb.com/home.html">
	<meta name="description" content="" />
	<meta name="name" content="<?php bloginfo('name'); ?>"/>

	<meta property="og:site_name" content="<?php bloginfo('name'); ?>" />
	<meta property="og:url" content="<?php echo $current_url ?>" />
	<meta property="og:title" content="<?php wp_title('-',true,'right');?><?php bloginfo('name'); ?>" />
	<meta property="og:description" content="" />
	<meta property="og:image" content="<?php echo home_url() ?>/wp-content/themes/lusine/img/content/share-default.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="<?php echo home_url() ?>" />
	<meta name="twitter:title" content="<?php wp_title('-',true,'right');?><?php bloginfo('name'); ?>" />
	<meta name="twitter:description" content="" />
	<meta name="twitter:image" content="<?php echo home_url() ?>/wp-content/themes/lusine/img/content/share-default.jpg" />
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo home_url() ?>/wp-content/themes/lusine/img/icons/apple-touch-icon.png">
	<link rel="icon" type="image/png" href="<?php echo home_url() ?>/wp-content/themes/lusine/img/icons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="<?php echo home_url() ?>/wp-content/themes/lusine/img/icons/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="<?php echo home_url() ?>/wp-content/themes/lusine/img/icons/manifest.json">
	<link rel="mask-icon" href="<?php echo home_url() ?>/wp-content/themes/lusine/img/icons/safari-pinned-tab.svg" color="#ffffff">
	<link rel="shortcut icon" href="<?php echo home_url() ?>/wp-content/themes/lusine/img/icons/favicon.ico">
	<meta name="msapplication-config" content="<?php echo home_url() ?>/wp-content/themes/lusine/img/icons/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">
	<?php wp_head(); ?>
</head>

<body <?php if ( is_front_page() ) :?>class="home"<?php endif; ?>>
	<header class="header">
		<div class="header__wpr">
			<a class="header__logo" href="">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3364.99 680" aria-hidden="true" class="icon icon--logo" width="100" height="25">
					<defs>
						<linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" >
							<stop offset="0%" stop-color="#6b6b6b">
									<animate attributeName="stop-color" values="#6b6b6b; #aaaaaa; #6b6b6b" dur="4s" repeatCount="indefinite"></animate>
							</stop>
							<stop offset="100%" stop-color="#898989">
									<animate attributeName="stop-color" values="#898989; #6b6b6b; #f4f4f4; #898989" dur="5s" repeatCount="indefinite"></animate>
							</stop>
						</linearGradient>
					</defs>
					<path fill="url('#logo-gradient')" d="M511 500c-8 39-28 137-37 165H0v-32c85-7 95-14 95-99V145c0-85-9-91-87-97V15h289v33c-77 6-86 12-86 97v393c0 49 4 68 24 77 18 8 47 10 82 10 48 0 83-6 106-33 19-20 37-52 54-100l34 8zM1207 48c-57 3-81 21-86 59-4 29-7 68-7 147v99c0 110-17 195-74 255-46 48-114 72-183 72-63 0-124-14-171-50-57-45-85-119-85-236V153c0-93-9-98-85-105V15h286v33c-75 6-84 12-84 105v221c0 154 57 243 171 243 128 0 178-101 178-268v-95c0-78-5-118-9-149-6-36-28-53-97-57V15h246v33zM1614.99 174c-20-63-54-135-137-135-63 0-102 46-102 102 0 62 41 95 126 137 95 48 175 100 175 204 0 111-94 198-236 198-38 0-72-6-99-15-27-8-45-15-57-21-9-24-22-108-29-164l34-10c18 63 72 171 170 171 67 0 108-44 108-111 0-64-48-101-123-140-89-46-171-99-171-201 0-104 83-189 220-189 58 0 109 17 135 25 4 37 10 79 18 142l-32 7zM1736 665v-32c77-7 86-13 86-98V146c0-85-9-92-86-98V15h287v33c-77 6-85 13-85 98v389c0 84 8 91 85 98v32h-287zM2783.99 47c-54 3-76 17-81 62-4 30-8 77-8 167v399h-42l-420-508h-2v235c0 89 4 134 7 164 5 47 24 63 96 67v32h-242v-32c56-4 80-19 85-64 3-33 8-78 8-167V189c0-68-1-82-20-105-20-25-41-33-86-37V15h172l395 461h3V276c0-90-5-137-7-166-6-43-27-59-99-63V15h241v32zM3364.99 502c-6 40-26 133-35 163h-500v-32c87-7 96-14 96-98V146c0-88-9-92-82-98V15h461c1 20 6 90 10 148l-34 5c-9-38-21-67-37-86s-43-26-105-26h-58c-35 0-38 2-38 34v217h77c86 0 96-6 109-75h34v198h-34c-13-72-23-76-109-76h-77v178c0 48 5 71 24 82 18 10 53 11 94 11 61 0 94-7 117-33 19-21 37-54 54-96l33 6z"/>
				</svg>
			</a>
			<ul class="header__nav">
				<li class="header__nav__li"><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>">Home</a></li>
				<li class="header__nav__li"><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>news">News</a></li>
				<li class="header__nav__li"><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>work">Work</a></li>
				<li class="header__nav__li"><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>live-dates">Live Dates</a></li>
				<li class="header__nav__li"><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>press">Press</a></li>
				<li class="header__nav__li"><a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Home' ) ) ); ?>contact">Contact</a></li>
			</ul>
			<div class="header__social">
				<div class="socialicons socialicons--header">
					<span class="socialicon">
						<a href="http://www.facebook.com/pages/Lusine/276561268164" target="_blank" rel="noopener">
							<span class="socialicon__icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  height="26" width="26"><rect height="512" rx="64" ry="64" width="512" fill="#fff"/><path d="M286.97 456V273.54h61.24l9.17-71.1h-70.41v-45.4c0-20.59 5.72-34.62 35.23-34.62l37.66-.01V58.8C353.35 57.93 331 56 304.99 56c-54.29 0-91.45 33.15-91.45 94v52.44h-61.4v71.1h61.4V456h73.43z"/></svg>
				</span>
						</a>
					</span>
					<span class="socialicon">
						<a href="https://soundcloud.com/lusine-official" target="_blank" rel="noopener">
							<span class="socialicon__icon"><svg aria-hidden="true"  height="26" width="26" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect height="512" rx="64" ry="64" width="512" fill="#fff"/><path d="M56 296.1a43.98 43.98 0 0 0 15.86 33.77v-67.52A43.94 43.94 0 0 0 56 296.11m32.63-42.64v85.26a46.46 46.46 0 0 0 12.45 1.71h4.33v-88.46a46 46 0 0 0-16.78 1.5m37.05 5.53a40.04 40.04 0 0 0-3.51-2.03v83.46h16.77V228.8a68.89 68.89 0 0 0-13.26 30.2m30.04-45.9v127.34h16.77v-135.6a71.53 71.53 0 0 0-16.77 8.26m33.54-11.72v139.06h16.78V201.9a71.76 71.76 0 0 0-16.78-.51m42.8 9.8a71.58 71.58 0 0 0-17.63-7.51v136.78h25.16V201.08a86.08 86.08 0 0 0-7.53 10.1m15.92-18.5v147.75h159.34v-.19C440.87 338.1 456 317.3 456 291.9c0-26.82-20.28-48.56-47.57-48.56-7 0-12.77 1.45-18.86 4.06-4.37-42.58-40.5-75.83-84.99-75.83a85.66 85.66 0 0 0-56.6 21.13"/></svg>
				</span>
						</a>
					</span>
					<span class="socialicon">
						<a href="https://open.spotify.com/artist/2fMe9lZs5HGGOwh8cMSIub" target="_blank" rel="noopener">
							<span class="socialicon__icon"><svg aria-hidden="true"  height="26" width="26" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M45 1H5C2.8 1 1 2.8 1 5v40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V5c0-2.2-1.8-4-4-4z" fill="#fff"/><path d="M25 10c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm6.1 22.1c-.2 0-.4-.1-.6-.2-2.2-1.3-4.9-2-7.8-2-1.6 0-3.2.2-4.7.5-.2.1-.6.1-.7.1a.9.9 0 0 1-.9-.9c0-.6.4-.9.8-1 1.9-.4 3.7-.7 5.6-.7 3.3 0 6.2.8 8.7 2.3.4.2.6.4.6 1-.1.5-.5.9-1 .9zm1.6-4c-.3 0-.5-.1-.8-.3-2.4-1.4-5.8-2.4-9.5-2.4-1.9 0-3.5.3-4.9.6-.3.1-.5.2-.7.2-.6 0-1.2-.5-1.2-1.2 0-.6.3-1.1.9-1.3 1.7-.5 3.4-.8 5.9-.8 3.9 0 7.7 1 10.7 2.8.5.3.7.6.7 1.2.1.7-.4 1.2-1.1 1.2zm1.9-4.6c-.3 0-.5-.1-.8-.2-2.7-1.6-6.9-2.5-11-2.5-2 0-4.1.2-6 .7-.2.1-.5.2-.8.2-.8 0-1.4-.6-1.4-1.4 0-.8.5-1.3 1-1.4 2.1-.6 4.5-.9 7.1-.9 4.4 0 9 .9 12.4 2.9.5.3.8.6.8 1.4.1.6-.6 1.2-1.3 1.2z"/></svg>
				</span>
						</a>
					</span>
					<span class="socialicon hidden">
						<a href="" target="_blank" rel="noopener">
							<span class="socialicon__icon"><svg aria-hidden="true"  height="26" width="26" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect height="512" rx="64" ry="64" width="512" fill="#fff"/><path d="M366.43 76H145.58A69.65 69.65 0 0 0 76 145.58V366.43A69.64 69.64 0 0 0 145.58 436h220.85A69.64 69.64 0 0 0 436 366.43V145.55A69.64 69.64 0 0 0 366.43 76zm19.95 41.49l7.96-.03V178.47l-60.82.2-.2-61.01 53.06-.17zM204.61 219.04a63.35 63.35 0 0 1 51.4-26.4 63.29 63.29 0 0 1 51.36 26.4 63.03 63.03 0 0 1 12 36.95 63.46 63.46 0 0 1-63.38 63.37 63.44 63.44 0 0 1-63.36-63.37 63.17 63.17 0 0 1 11.98-36.95zm196.3 147.38a34.52 34.52 0 0 1-34.48 34.5H145.58a34.52 34.52 0 0 1-34.5-34.5V219.04h53.74a97.84 97.84 0 0 0-7.25 36.95c0 54.26 44.15 98.44 98.43 98.44 54.29 0 98.44-44.18 98.44-98.44a97.99 97.99 0 0 0-7.27-36.95h53.75v147.38z"/></svg>
				</span>
						</a>
					</span>
				</div>
			</div>
		</div>
	</header>

	<button class="header__nav__trigger">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</button>
