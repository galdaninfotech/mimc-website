import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import Header from '../components/starter/header/header';
import Footer from '../components/starter/footer/footer';

import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.dev/docs/caching/
    cacheControl({
      // Always serve a cached response by default, up to a week stale
      staleWhileRevalidate: 60 * 60 * 24 * 7,
      // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
      maxAge: 5,
    });
  };


export default component$(() => {
  useStyles$(styles);
  return (
    <>
        <div class="ajax_loader">
            <div class="ajax_loader_1">
                <div class="ajax_loader_html"></div>
            </div>
        </div>



        <div class="wrapper">
            <div class="wrapper_inner">
                <Header />
                <a id="back_to_top" href="#"> <span class="icon-stack"> <i class="icon-chevron-up " style=""></i> </span> </a>
                <main>
                    <Slot />
                </main>
                <Footer />
            </div>
        </div>


      <link rel="stylesheet" id="vc_animate-css-css" href="/css/animate.min.css" type="text/css" media="all" />
        
        
        
        <script type="text/javascript" src="/js/slider-top.js" id="jquery-ui-progressbar-js"></script>

        <script type="text/javascript" src="/js/progressbar.min.js" id="jquery-ui-progressbar-js"></script>
        <script type="text/javascript" src="/js/slider.min.js" id="jquery-ui-slider-js"></script>
        <script type="text/javascript" src="/js/spinner.min.js" id="jquery-ui-spinner-js"></script>
        <script type="text/javascript" src="/js/tabs.min.js" id="jquery-ui-tabs-js"></script>
        <script type="text/javascript" src="/js/tooltip.min.js" id="jquery-ui-tooltip-js"></script>
        <script type="text/javascript" src="/js/jquery.form.min.js" id="jquery-form-js"></script>

        <script type="text/javascript" src="/js/wp-mediaelement.min.js" id="wp-mediaelement-js"></script>
        <script type="text/javascript" src="/js/doubletaptogo.js" id="doubletaptogo-js"></script>
        <script type="text/javascript" src="/js/modernizr.min.js" id="modernizr-js"></script>
        <script type="text/javascript" src="/js/jquery.appear.js" id="appear-js"></script>
        <script type="text/javascript" src="/js/hoverIntent.min.js" id="hoverIntent-js"></script>
        <script type="text/javascript" src="/js/absoluteCounter.min.js" id="absoluteCounter-js"></script>
        <script type="text/javascript" src="/js/easypiechart.js" id="easypiechart-js"></script>
        <script type="text/javascript" src="/js/mixitup.min.js" id="mixitup-js"></script>
        <script type="text/javascript" src="/js/jquery.nicescroll.min.js" id="nicescroll-js"></script>
        <script type="text/javascript" src="/js/jquery.prettyPhoto.min.js" id="prettyphoto-js"></script>
        <script type="text/javascript" src="/js/jquery.fitvids.js" id="fitvids-js"></script>
        <script type="text/javascript" src="/js/jquery.flexslider.min.js" id="flexslider-js"></script>
        <script type="text/javascript" src="/js/jquery.isotope.js" id="subway-isotope-js"></script>
        <script type="text/javascript" src="/js/jquery.waitforimages.js" id="waitforimages-js"></script>

        <script type="text/javascript" src="/js/default_dynamic.js" id="subway-default-dynamic-js"></script>
        <script type="text/javascript" src="/js/default.min.js" id="subway-default-js"></script>
    </>
  );
});
