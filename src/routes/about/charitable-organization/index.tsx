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
                            <h1 style="padding: 0; margin: 0;">Charitable Organization</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs"><a href="https://mahabodhi=ladakh.com/">Home</a><span class="delimiter">&gt;</span><span class="current">Charitable Organization</span></div>
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
                                                                <img src="/images/about/our-motto.jpg" alt="Charitable Organization" />
                                                            </div>

                                                            <p>
                                                                Since becoming a monk, Ven. Bhikku Sanghasena has strived tirelessly to put the Buddha's teachings of compassion into action through multifarious charitable humanitarian works scattered over 210 acres of moon like desert land.
                                                            </p>

                                                            <p>He has also made the meditation techniques of the Buddha available to the common people of Ladakh through donation-based intensive Vipassana retreats.</p>

                                                            <p>Compassion in action and meditation in action are the guiding principles of his work.</p>

                                                            <p>This organization brings a wealth of education and opportunity to the people of Ladakh.</p>

                                                            <p>MIMC is a non-sectarian, non-profit institution dedicated to inter-faith harmony and understanding.</p>
                                       
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
  title: 'Charitable Organization',
  meta: [
    {
      name: 'description',
      content: 'Charitable Organization',
    },
  ],
};