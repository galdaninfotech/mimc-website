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
                            <h1 style="padding: 0; margin: 0;">Facilities At Sambodhi Retreat Centre</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Meditation</a><span class="delimiter">&gt;</span>
                                    <a href="/">Sambodhi Retreat Centre</a><span class="delimiter">&gt;</span>
                                    <span class="current">Facilities</span>
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
                                                                <img src="/images/meditation/sambodhi-retreat-centre/facilities.jpg" alt="Facilities" />
                                                            </div>

                                                            <p>
                                                                The Centre is blessed with a beautiful meditation hall; separate dormitories which can accommodate 40-50 male and female residents at a time; a delightful dining hall for more than 50 people and a beautiful garden where meditators can practice walking meditation and yoga or simply rest on the lawn under many fruits trees.
                                                            </p>

                                                            <p>
                                                                It is also intriguing to see different types of birds wandering in the garden and among the trees.
                                                            </p>

                                                            <p>
                                                                In addition to the spacious accommodation and the first-rate facilities for groups, the Sambodhi Retreat Centre has a number of comfortable meditation kutis (with attached bathroom, small kitchen, bedroom and meditation room) for experienced solitary practitioners.
                                                            </p>

                                                            



                                       
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
  title: 'Facilities At Sambodhi Retreat Centre',
  meta: [
    {
      name: 'description',
      content: 'Facilities At Sambodhi Retreat Centre',
    },
  ],
};