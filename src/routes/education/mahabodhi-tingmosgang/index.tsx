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
                            <h1 style="padding: 0; margin: 0;">Mahabodhi Tingmosgang </h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Education</a><span class="delimiter">&gt;</span>
                                    <span class="current">Mahabodhi Tingmosgang</span>
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

                                                            <p>
                                                                ahabodhi Tingmosgang is a sister school of Mahabodhi Residential School which was inaugurated in 1999.
                                                            </p>

                                                            <p>
                                                                Over the years, the school has gained a reputation for providing a good standard of education and facilities and is now very popular with the local people and surrounding villages. At present there are 115 students, 11 teachers and 7 staff members. A residential hostel is also under construction for the deserving students from adjoining villages.
                                                            </p>

                                                            <p>
                                                                The Branch School currently serves the needs of Tingmosgang and the surrounding villages of Ang,Nurla, Wanlaks, Tia, Lharsa and Tserey.
                                                            </p>
                                                            
                                                            <p>
                                                                The school is doing exceptionally well in all aspects and is at par with the main school in Leh. After the completion of their education up to 8th standard, the students will then move to the Main School in Leh to continue their education.
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
  title: 'Mahabodhi Tingmosgang ',
  meta: [
    {
      name: 'description',
      content: 'Mahabodhi Tingmosgang ',
    },
  ],
};