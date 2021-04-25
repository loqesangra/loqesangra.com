<?php

add_action( 'wp_enqueue_scripts', 'lqs_enqueue_styles' );

function lqs_enqueue_styles() {
  $parenthandle = 'twenty-twenty-one-style';
  $theme = wp_get_theme();
  wp_enqueue_style( $parenthandle, get_template_directory_uri() . '/style.css',
    array(),  // if the parent theme code has a dependency, copy it to here
    $theme->parent()->get('Version')
  );
  wp_enqueue_style( 'loqesangra', get_stylesheet_uri(),
    array( $parenthandle ),
    $theme->get('Version') // this only works if you have Version in the style header
  );
}
