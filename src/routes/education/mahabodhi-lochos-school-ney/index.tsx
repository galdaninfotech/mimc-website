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
                            <h1 style="padding: 0; margin: 0;">Mahabodhi Lochos School - Ney</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Education</a><span class="delimiter">&gt;</span>
                                    <span class="current">Mahabodhi Lochos School - Ney</span>
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
                                                                <img src="/images/about/our-motto.jpg" alt="Brief Introduction" />
                                                            </div>

                                                            <span class="dropcap" style="">M</span>
                                                            <p>ahabodhi Lochos School - Ney The School was established with the unreserved and generous support of philanthropists like Roland Wieser & Gunther Endres of the Takcholing Charitable Organization, Germany.</p>

                                                            <p>At present the school is affiliated to the Mahabodhi Residential School and the academic part of the school is looked after by us.</p>

                                                            <p>With the positive support of the villagers of Ney, there are 60 students who are studying at the School and are guided by 6 well qualified teachers along with 3 non-teaching staff.</p>

                                                            <p>Presently the classes are up to the 5th standard with plans to extend to higher classes in the future.</p>


                                       
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
  title: 'Mahabodhi Lochos School - Ney',
  meta: [
    {
      name: 'description',
      content: 'Mahabodhi Lochos School - Ney',
    },
  ],
};