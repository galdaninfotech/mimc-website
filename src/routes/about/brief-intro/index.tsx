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
                                                                <img src="/images/about/our-motto.jpg" alt="Brief Introduction" />
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
                                                            <p>
                                                                Today the Devachan campus has become a home and refuge for thousands of deserving people who live happily and peacefully together. A dedicated team of social workers, teachers, doctors, monks, nuns, community leaders and care-providers have created an integrated community at Devachan which provides comprehensive care to all segments of society: children, the elderly, special needs individuals, monks and nuns, the sick, as well as those seeking spiritual development. The community has become a model for the region through harmonious sustainable and ecological development.
                                                            </p>
                                                            <p>&nbsp;</p>
                                                            <p>
                                                                In fact, people from various parts of the world have come to learn and want to emulate a similar community in their own countries. With the continued support of like minded sponsors from all over the world, we hope to be able to contribute our part towards this goal by serving the people of Ladakh. We welcome anyone who would also like to be a part of this initiative.
                                                            </p>
                                                            <p>&nbsp;</p>
                                                            <p>
                                                                MIMC is indeed a great example of one man's vision turning into reality. His great vision of love and compassion for the underprivileged people of Ladakh has been materialized in the very formation of MIMC.
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
  title: 'Brief Introduction',
  meta: [
    {
      name: 'description',
      content: 'Brief Introduction',
    },
  ],
};