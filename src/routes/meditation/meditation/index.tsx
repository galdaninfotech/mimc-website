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
                            <h1 style="padding: 0; margin: 0;">Mahabodhi Meditation Program</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a>
                                    <span class="delimiter">&gt;</span><span class="current">Meditation</span>
                                    <span class="delimiter">&gt;</span><span class="current">Mahabodhi Meditation Program</span>
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
                                                                <img src="/images/about/brief-intro.jpg" alt="Mahabodhi Meditation Program" />
                                                            </div>

                                                            <span class="dropcap">T</span>
                                                            <p>
                                                                he incredibly beautiful Sambodhi Retreat Centre, an inspiring oasis of tranquil contemplation, is situated in a secluded corner of the transformative Mahabodhi International Meditation Centre campus.
                                                            </p>

                                                            <p>
                                                                The centre is dominated by Rocky Mountains on one side and golden sand dunes on the other. The sweet scent of fragrant and jewel-like flowers, which line the footpaths of the centre, play joyfully on the senses, while enigmatic stupas, reclusive meditation kuties, abundant prayer flags, and the most sacred and eye-catching Milarepa rock cave provide silent spiritual encouragement.
                                                            </p>

                                                            <p>
                                                                The Sambodhi Retreat Centre is exceptionally well designed and very thoughtfully appointed. In fact, our most revered spiritual guide and meditation teacher, Venerable Bhikkhu Sanghasena, has personally overseen all aspects of the centre's design, construction and management with a singularly humanitarian vision: to create a unique, world-renowned contemplative venue, which is appealing to all seekers of truth and lovers of peace, irrespective of their religious inclinations, caste or creed. As a consequence, the centre provides an incredibly warm welcome to all genuine seekers who are looking to incorporate timeless and universal spiritual truths into their daily lives.
                                                            </p>
                                                            <br />
                                                            <br />
                                                            <br />


                                                            
                                                            


                                                            


                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-innerz" style="margin-right: 10px;">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="image_with_text_over">
                                                                            <div class="shader"></div>
                                                                            <img src="/images/meditation/meditation-image1.jpg" alt="Meditation Image1" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-innerz" style="margin-right: 10px;">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="image_with_text_over">
                                                                            <div class="shader"></div>
                                                                            <img src="/images/meditation/meditation-image2.jpg" alt="Meditation Image2" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="wpb_column vc_column_container vc_col-sm-4">
                                                                <div class="vc_column-innerz" style="margin-right: 10px;">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="image_with_text_over">
                                                                            <div class="shader"></div>
                                                                            <img src="/images/meditation/meditation-image3.jpg" alt="Meditation Image3" />
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
  title: 'Mahabodhi Meditation Program',
  meta: [
    {
      name: 'description',
      content: 'Mahabodhi Meditation Program',
    },
  ],
};