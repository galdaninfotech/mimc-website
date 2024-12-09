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
                            <h1 style="padding: 0; margin: 0;">Sunday Puja At Devachan</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Meditation</a><span class="delimiter">&gt;</span>
                                    <a href="/">Changspa Centre</a><span class="delimiter">&gt;</span>
                                    <span class="current">Sunday Puja</span>
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
                                                                <img src="/images/meditation/changspa-centre/sunday-puja.jpg" alt="Brief Introduction" />
                                                            </div>

                                                            <p>MIMC organizes a very special program for the foreign, national and local visitors, seeker of truth and lover of peace on Sunday as all the staffs, students, grandparents and the residents of Mahabodhi come together in the beautiful Buddha hall and listen to the beautiful Dhamma talk of Venerable Bhikkhu Sanghasena, practice meditation together under a very holy and positive atmosphere, share the joy of Dhamma and witness the stunning Dhamma songs from the elderly people, young monks and nuns, boys and girls of MIMC.</p>

                                                            <p>It's a golden opportunity for you to spend a day of your life with the biggest family of Ladakh called Devachan Family, so do join us this summer by registering your name at our Changspa Center.</p>

                                                            



                                       
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
  title: 'Sunday Puja At Devachan',
  meta: [
    {
      name: 'description',
      content: 'Sunday Puja At Devachan',
    },
  ],
};