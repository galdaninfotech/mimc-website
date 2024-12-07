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
                            <h1 style="padding: 0; margin: 0;">Introduction</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Education</a><span class="delimiter">&gt;</span>
                                    <a href="/">Mahabodhi Residential School</a><span class="delimiter">&gt;</span>
                                    <span class="current">Introduction</span>
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
                                                                ahabodhi Residential School-Leh is a natural and tranquil institution away from the hustle and bustle of the city which fosters an ideal educational environment for both students and teachers.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                              
                                                            <p>
                                                                Set amidst the beautiful snowcapped mountains, the school nurtures students coming together from the widespread hamlets scattered across the length and breadth of Ladakh. Mahabodhi Residential School-Leh is a natural and tranquil institution away from the hustle and bustle of the city which fosters an ideal educational environment for both students and teachers.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Set amidst the beautiful snowcapped mountains, the school nurtures students coming together from the widespread hamlets scattered across the length and breadth of Ladakh.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                The Mahabodhi Residential School began with 25 children who were selected from areas which till today, are isolated from the basic conveniences and necessities of life like electricity, roads, modern education and medical care.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                The school laid its foundation with its first batch of students lodged in a single multipurpose room with three teachers-cum-support staff.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Over the years, the school has grown in size and infrastructure and now caters to the educational needs of around 850 students.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Around 68 students reside in the boy's hostel, 140 girls reside in the gir'ss hostel, 12 monks in the Jetavana Monastery, 10 nuns in the Phandeyling Nunnery, and in the children home and the remaining are day scholars.
                                                            </p>
                                                            <p>&nbsp;</p>


                                                        
                                                            
                                                            

                                                   


                                                           





                                       
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
  title: 'Introduction',
  meta: [
    {
      name: 'description',
      content: 'Introduction',
    },
  ],
};