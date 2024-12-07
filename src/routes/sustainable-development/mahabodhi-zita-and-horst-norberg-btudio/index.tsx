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
                            <h1 style="padding: 0; margin: 0;">Mahabodhi Zita and Horst Norberg Studio</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Sustainable Development</a><span class="delimiter">&gt;</span>
                                    <span class="current">Mahabodhi Zita and Horst Norberg Studio</span>
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
                                                                <img src="/images/about/our-motto.jpg" alt="Mahabodhi Zita and Horst Norberg Studio" />
                                                            </div>

                                                            <p>The Mahabodhi organization believes in presenting Ladakh’s culture and Buddhist history through cinema.</p>
                                                            MIMC Zita and Horst Norbert studio aims in producing documentaries and films on the Mahabodhi community, Ladakh and Buddhist related videos, creates videos and audios for the promotion of rich Ladakh art & culture giving opportunities to the budding talent of Ladakh to pursue careers in such areas.
 
                                                            <p>We are trying to produce many traditional music, hymn, and chanting and recordings for that we are seeking some financial assistance from the Govt. and well wishers.</p>
 
                                                            <p>We are also encouraging our students especially the drop out ones to take part in this lively extracurricular activity.</p>
 
                                                            <p>Apart from the direction for the self sustenance, this studio will be boon to school dropout students to showcase their talents.</p>


                                                            
                                                        
                                                            
                                                            

                                                   


                                                           





                                       
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
  title: 'Mahabodhi Zita and Horst Norberg Studio',
  meta: [
    {
      name: 'description',
      content: 'Mahabodhi Zita and Horst Norberg Studio',
    },
  ],
};