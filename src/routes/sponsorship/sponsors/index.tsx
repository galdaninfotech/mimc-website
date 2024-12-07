import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Sidebar1 from '~/components/sidebar1/sidebar1';
import styles from './index.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
  return (
    <div class="content" style="min-height: 150px;">
        <div class="content_inner">
            <div class="title" style="min-height: 150px;">
                <div class="title_holder" style="opacity: 1;">
                    <div class="container">
                        <div class="container_inner clearfix" style="padding: 0;">
                            <h1 style="padding: 0; margin: 0;">Sponsors</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Sponsorship</a><span class="delimiter">&gt;</span>
                                    <span class="current">Sponsors</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="container_inner clearfix">
                    <div class="two_columns_75_25 background_color_sidebar grid2 clearfix">
                        <div class="column1">
                            <div class="column_inner">
                                <section class="wpb-content-wrapper">
                                    <div class="vc_row wpb_row " style="text-align:left">
                                        <div class="wpb_column vc_column_container vc_col-sm-12">
                                            <div class="vc_column-inner">
                                                <div class="wpb_wrapper">
                                                    <div class="wpb_text_column wpb_content_element ">
                                                        <div class="wpb_wrapper" style="color: #6c6c6c;">

                                                            <div class="image_with_text_over" style="margin-bottom: 50px;">
                                                                <div class="shader"></div>
                                                                <img src="/images/about/our-motto.jpg" alt="Sponsors" />
                                                            </div>

                                                            <h2>Germany</h2>
                                                            <p>Für Spenden oder Patenschaften von Deutschland aus, wenden Sie sich bitte an einen der folgenden Ansprechpartner:</p>
                                                            <div class="sponsors">
                                                                <img src="/images/sponsorship/buddhahaus-logo.jpg" alt="" />
                                                                <p class="address">
                                                                    <span><strong>Buddha-Haus e.V.</strong></span>
                                                                    <span><strong>Kontakt: Steffen Wendt</strong></span>
                                                                    <span>Uttenbühl 5</span>
                                                                    <span>87466 Oy-Mittelberg</span>
                                                                    <span>E-Mail:hilfsprojekt.ladakh@buddha-haus.de</span>
                                                                    <span>https://www.buddha-haus.de/mahabodhi-hilfsprojekt</span>
                                                                </p>
                                                            </div>

                                                            <div class="sponsors">
                                                                <img src="/images/sponsorship/lotus-vihara.jpg" alt="" />
                                                                <p class="address">
                                                                    <span><strong>Buddha-Haus e.V.</strong></span>
                                                                    <span><strong>Kontakt: Steffen Wendt</strong></span>
                                                                    <span>Uttenbühl 5</span>
                                                                    <span>87466 Oy-Mittelberg</span>
                                                                    <span>E-Mail:hilfsprojekt.ladakh@buddha-haus.de</span>
                                                                    <span>https://www.buddha-haus.de/mahabodhi-hilfsprojekt</span>
                                                                </p>
                                                            </div>

                                                            <div class="sponsors">
                                                                <img src="/images/sponsorship/dharma-chakra.png" alt="" />
                                                                <p class="address" style="margin-left: 42px;">
                                                                    <span><strong>Buddhistisches Zentrum Lotos-Vihara</strong></span>
                                                                    <span><strong>Neue Blumenstraße 5</strong></span>
                                                                    <span>10179 Berlin (Mitte)</span>
                                                                    <span>Tel.: +49 (0)30 - 25 76 21 64</span>
                                                                    <span>Fax: +49 (0)30 - 24 08 31 59</span>
                                                                    <span>E-Mail: info@lotos-vihara.de</span>
                                                                    <span>http://www.lotos-vihara.de/lotos-vihara-ev/mahabodhi.html</span>
                                                                </p>
                                                            </div>
                                                            


                                                            

                                       
                                                        </div>
                                                    </div>
                                                    <div class="separator transparent" style="margin-top:20px;margin-bottom:20px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div class="column2">
                            <div class="column_inner">
                                <aside>
                                    <Sidebar1 />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sponsors',
  meta: [
    {
      name: 'description',
      content: 'Sponsors',
    },
  ],
};