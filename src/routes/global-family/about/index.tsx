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
                            <h1 style="padding: 0; margin: 0;">About Global Family</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Global Family</a><span class="delimiter">&gt;</span>
                                    <span class="current">About Global Family</span>
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
                                                                <img src="/images/global-family/about.jpg" alt="About Global Family" />
                                                            </div>
                                                            <span class="dropcap">B</span>

                                                            <p>eing a Charitable Organization itself, MIMC runs all its activities depending on charity and donations as its main source of income. Hence, it was thought advisable to find an income generating project that would help contribute to the smooth running of its activities. Though it is not very easy to get support for a commercial and profit-making project, once again Sister Ramona Lai understood the need and purpose of such a project and came forward to support it. She generously funded the construction of the first floor of the Global Family Guest House, which was completed in late 2012. The Guest House is furnished with 43 Rooms with attached Bathrooms and 16 Rooms with non-attached bathrooms, besides many other facilities like a library, dining hall, meditation hall and multi-purpose hall that can be used for activities like seminars and workshops. Besides our own supporters and guests, we welcome all spiritually-inclined tourists who would like to enjoy calm, serene and clean living accommodation while holidaying in Ladakh. One can attend all our daily yoga and meditation classes as well as Sunday special pujas and meditation sessions at the main meditation hall where the entire Devachan family gathers every Sunday.</p>



                                                            
                                                        
                                                            
                                                            

                                                   


                                                           





                                       
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
  title: 'About Global Family',
  meta: [
    {
      name: 'description',
      content: 'About Global Family',
    },
  ],
};