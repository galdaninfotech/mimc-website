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
                            <h1 style="padding: 0; margin: 0;">Higher Education Program</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Education</a><span class="delimiter">&gt;</span>
                                    <span class="current">Higher Education Program</span>
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

                                                            <span class="dropcap" style="">O</span>
                                                            <p>
                                                                ver the last two decades, there has been a positive major overhaul of the school education system in Ladakh with the help of private institutions and organizations keen to help in the economic and social development of the region.
                                                            </p>
                                                            <p>&nbsp;</p>
                                                            

                                                            <p>However despite this, the students who complete their schooling here face several problems when they move to other parts of India to pursue higher education.</p>

                                                            <p>This is because Ladakh has its own unique culture and language and the students find it difficult to gain entry into institutions outside of Ladakh. By keeping this in mind Mahabodhi started a Higher Education program which aims to help the students who like to pursue their higher education in colleges and universities in the places like Chandigarh, Jammu, Delhi, Bangalore, etc.</p>

                                                            <p>Mahabodhi would certainly like to see a great many more students pursue their further education in the many fine higher learning institutions throughout India or overseas.</p>

                                                            <p>
                                                                However this needs careful planning and adequate funding and we sincerely appeal to well-wishes to help us in this noble cause as most certainly, education is the key to economic and social freedom for the needy.
                                                            </p>

                                                            <p>
                                                                Your charity dollars would help bring much needed new skills and technologies back when these young people finish their studies and return to Ladakh.
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
  title: 'Higher Education Program',
  meta: [
    {
      name: 'description',
      content: 'Higher Education Program',
    },
  ],
};