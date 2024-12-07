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
                            <h1 style="padding: 0; margin: 0;">Mahabodhi Publication House</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Sustainable Development</a><span class="delimiter">&gt;</span>
                                    <span class="current">Mahabodhi Publication House</span>
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
                                                                <img src="/images/about/our-motto.jpg" alt="Mahabodhi Publication House" />
                                                            </div>

                                                            <span class="dropcap">I</span>

                                                            <p>n today's world of information, the media plays a crucial role in creating greater awareness in both the local as well as in global scenario.</p>

                                                            <p>Therefore, the media becomes an important part of any organization in promoting awareness on its various activities and thereby generating proper understanding in the minds of the interested individuals, especially the information shared are transparent and truthful in their own right.</p>

                                                            <p>Keeping these views in mind, Mahabodhi Publication Office was first established under the leadership of Ven. Sanghasena, solely aiming at bringing awareness to the greater community on the various spiritual and humanitarian activities undertaken by MIMC organization to uplift the spiritual and material conditions of the people in Ladakh.</p>

                                                            <p>The sole aim of this project is to create a self sustainable development in bringing about gains inboth the spiritual and material perspectives in the long run.</p>



                                                            
                                                        
                                                            
                                                            

                                                   


                                                           





                                       
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
  title: 'Mahabodhi Publication House',
  meta: [
    {
      name: 'description',
      content: 'Mahabodhi Publication House',
    },
  ],
};