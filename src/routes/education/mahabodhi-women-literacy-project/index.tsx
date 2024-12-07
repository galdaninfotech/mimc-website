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
                            <h1 style="padding: 0; margin: 0;">Mahabodhi Women Literacy Project</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Education</a><span class="delimiter">&gt;</span>
                                    <span class="current">Mahabodhi Women Literacy Project</span>
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

                                                            <span class="dropcap" style="">T</span>
                                                            <p>
                                                                he Women's Literacy Project was started in 1998 in the village of Stakmo with an enrollment of 33 learners.It was inaugurated by Ven.Sanghasena, under the guidance and supervision of Madam Tsewang Dolma Tsarpa, Madam Tsewang Dolma and Madam Kunzes Dolma.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            After the successful running of the initial project, two more projects were started at Gonpa and Saboo. So far following centres:Stakmo, Gonpa, Saboo, Nurla, Sakti, Stok,Katpa and Diskthtsal or Housing Colony have successfully completed the learning, hence all these centers have closed.

                                                            <p>
                                                                Today following centers are running in the respective villages: Choglamsar, Palam, Tukla, Yangthang, Saspotse, Ney, Umla, Skalzangling, Sankar, Chubi, Motik Market and Diskittsal.
                                                            </p>

                                                            <p>
                                                                These elderly people didn't get opportunity to go to school in their young age therefore they don't know reading and writing even local Ladakhi language (Bodyik).
                                                            </p>
                                                            <p>
                                                                Hence through this project we teach them basic knowledge of reading and writing of Bodyik language together with basic calculation of math.
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
  title: 'Mahabodhi Women Literacy Project',
  meta: [
    {
      name: 'description',
      content: 'Mahabodhi Women Literacy Project',
    },
  ],
};