import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Sidebar1 from '~/components/sidebar1/sidebar1';

export default component$(() => {

  return (
    <div class="content" style="min-height: 150px;">
        <div class="content_inner">
            <div class="title" style="min-height: 150px;">
                <div class="title_holder" style="opacity: 1;">
                    <div class="container">
                        <div class="container_inner clearfix" style="padding: 0;">
                            <h1 style="padding: 0; margin: 0;">Brief Introduction</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a>
                                    <span class="delimiter">&gt;</span><span class="current">About</span>
                                    <span class="delimiter">&gt;</span><span class="current">Brief Introduction</span>
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
                                                                <img src="/images/about/brief-intro.jpg" alt="Brief Introduction" />
                                                            </div>

                                                            <span class="dropcap" style="">T</span>
                                                            <p>
                                                                he Mahabodhi International Meditation Centre (MIMC) had its humble beginnings in one small rented room in Leh city in 1986 when <strong>Venerable Bhikkhu Sanghasena</strong>&nbsp;realized there was a great need to offer both humanitarian and spiritual services to the people of Ladakh. From there the centre moved to the main Devachan campus in Choglamsar which is on an impressive 250 acres of desert land in 1991. Against all odds, with no water, no proper roads and just harsh desert sand, through the tenacity, compassion and resourcefulness of Venerable Sanghasena and his team, the Mahabodhi Devachan campus began to grow and flourish and his dream slowly became a reality.
                                                            </p>
                                                            <p>&nbsp;</p>
                                                            <p>
                                                                <strong>Venerable Sanghasena</strong>&nbsp;realized that the main root cause of poverty and social unrest was illiteracy. He knew that when people were given proper holistic education, the cycle of poverty and social evils could be broken. With this in mind, he started the first <strong>Residential school</strong>&nbsp; underprivileged children who came from the far flung corners of Ladakh. From this initial project, other desperately needed humanitarian services were identified and added to the Devachan campus which now houses a home for the aged, visually impaired, a <strong>monastery</strong>,&nbsp;<strong>nunnery</strong>,&nbsp;<strong>meditation</strong>,&nbsp; <strong>yoga centre</strong>&nbsp; and so on.
                                                            </p>
                                                            <p>&nbsp;</p>
                                                            


                                                            


                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-innerz" style="margin-right: 10px;">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="image_with_text_over">
                                                                            <div class="shader"></div>
                                                                            <img src="/images/about/intro-image1.jpg" alt="Intro Image 1" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-innerz" style="margin-right: 10px;">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="image_with_text_over">
                                                                            <div class="shader"></div>
                                                                            <img src="/images/about/intro-image2.jpg" alt="Intro Image 2" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-innerz" style="margin-right: 10px;">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="image_with_text_over">
                                                                            <div class="shader"></div>
                                                                            <img src="/images/about/intro-image3.jpg" alt="Intro Image 3" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            


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
  title: 'Brief Introduction',
  meta: [
    {
      name: 'description',
      content: 'Brief Introduction',
    },
  ],
};