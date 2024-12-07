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
                            <h1 style="padding: 0; margin: 0;">MIMC Youth Wing</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Social Welfare</a><span class="delimiter">&gt;</span>
                                    <span class="current">MIMC Youth Wing</span>
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
                                                                <img src="/images/social-welfare/mimc-youth-wing.jpg" alt="MIMC Youth Wing" />
                                                            </div>
                                                            <span class="dropcap">T</span>
                                                            <p>he aim of the MIMC Youth Wing is to help groom the youths with moral, cultural and traditional values and strengthening them to create a better tomorrow. </p>

                                                            <p>The Youth Wing also runs a Basic Buddhism Course (BBC) for students from different Schools of Leh. The Wing also has a musical band Luyangs comprising of the ex-students of Mahabodhi School performing Buddhist musical numbers.</p>

                                                            <p>The youth members have also formed the Devachan Sporting Club that participates at various local sporting tournaments held at Leh.</p>

                                                            <p>It gives members a platform where they can pursue their interest in sports and music so to grow both physical and mental harmoniously.</p>



                                                            
                                                        
                                                            
                                                            

                                                   


                                                           





                                       
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
  title: 'MIMC Youth Wing',
  meta: [
    {
      name: 'description',
      content: 'MIMC Youth Wing',
    },
  ],
};