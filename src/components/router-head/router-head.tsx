import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

import { component$ } from '@builder.io/qwik';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" id="layerslider-css" href="/css/layerslider.css" type="text/css" media="all" />
        <link rel="stylesheet" id="ls-google-fonts-css" href="https://fonts.googleapis.com/css?family=Lato:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7COpen+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7CIndie+Flower:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7COswald:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" type="text/css" media="all" />
        <link rel="stylesheet" id="wp-block-library-css" href="/css/style.min.css" type="text/css" media="all" />
        <link rel="stylesheet" id="wc-blocks-vendors-style-css" href="/css/wc-blocks-vendors-style.css" type="text/css" media="all" />
        <link rel="stylesheet" id="wc-blocks-style-css" href="/css/wc-blocks-style.css" type="text/css" media="all" />
        <link rel="stylesheet" id="classic-theme-styles-css" href="/css/classic-themes.min.css" type="text/css" media="all" />
        
        
        <link rel="stylesheet" id="titan-adminbar-styles-css" href="/css/admin-bar.css" type="text/css" media="all" />
        <link rel="stylesheet" id="rabbit_css-css" href="/css/rbt-modules.css" type="text/css" media="all" />
        
        
        <link rel="stylesheet" id="mediaelement-css" href="/css/mediaelementplayer-legacy.min.css" type="text/css" media="all" />
        <link rel="stylesheet" id="wp-mediaelement-css" href="/css/wp-mediaelement.min.css" type="text/css" media="all" />
        <link rel="stylesheet" id="subway-default-style-css" href="/css/style.css" type="text/css" media="all" />
        <link rel="stylesheet" id="subway-font-awesome-css" href="/css/font-awesome.min.css" type="text/css" media="all" />
        <link rel="stylesheet" id="subway-stylesheet-css" href="/css/stylesheet.min.css" type="text/css" media="all" />
        <link rel="stylesheet" id="subway-woocommerce-responsive-css" href="/css/woocommerce_responsive.min.css" type="text/css" media="all" />
        <link rel="stylesheet" id="subway-style-dynamic-css" href="/css/style_dynamic.css" type="text/css" media="all" />
        <link rel="stylesheet" id="subway-responsive-css" href="/css/responsive.min.css" type="text/css" media="all" />
        <link rel="stylesheet" id="subway-style-dynamic-responsive-css" href="/css/style_dynamic_responsive.css" type="text/css" media="all" />
        
        <link rel="stylesheet" id="subway-toolbar-css" href="/css/toolbar.css" type="text/css" media="all" />
        <link rel="stylesheet" id="subway-google-fonts-css" href="https://fonts.googleapis.com/css?family=Oswald%3A100%2C200%2C300%2C300i%2C400%2C400i%2C500%2C600%2C700%2C800%7CPT+Sans%3A100%2C200%2C300%2C300i%2C400%2C400i%2C500%2C600%2C700%2C800&amp;subset=latin%2Clatin-ext&amp;ver=1.0.0" type="text/css" media="all" />
        <link rel="stylesheet" id="js_composer_front-css" href="/css/js_composer.min.css" type="text/css" media="all" />
        
        <script type="text/javascript" src="/js/jquery.min.js" id="jquery-core-js"></script>
        <script type="text/javascript" src="/js/jquery-migrate.min.js" id="jquery-migrate-js"></script>
        <script type="text/javascript" src="/js/layerslider.utils.js" id="layerslider-utils-js"></script>
        <script type="text/javascript" src="/js/layerslider.kreaturamedia.jquery.js" id="layerslider-js"></script>
        <script type="text/javascript" src="/js/layerslider.transitions.js" id="layerslider-transitions-js"></script>
        <script type="text/javascript" src="/js/jquery.blockUI.min.js" id="jquery-blockui-js"></script>

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  );
});
