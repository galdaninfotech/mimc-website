import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <div class="container_inner clearfixfull_map">
        <div class="two_columns_33_66 clearfix grid2">
            <div class="column1">
                <div class="column_inner">
                    <div class="contact_form">
                        <h3 style="display: flex; color: #000; font-size: 28px; line-height: 40px; margin-top: 54px; text-align: left; letter-spacing: 2px;">Welcome to the Mahabodhi International Meditation Centre home page.</h3>                       
                    </div>
                </div>
            </div>

            <div class="column2">
                <div class="column_inner">
                    <div class="contact_info">
                        <section class="wpb-content-wrapper">
                            <div class="vc_row wpb_row " style="text-align:left">
                                <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="vc_column-inner">
                                        <div class="wpb_wrapper" style="color: #6e6e6e;">
                                            <div class="wpb_text_column wpb_content_element ">
                                                <div class="wpb_wrapper">
                                                    <h3 style="color: #000; font-size: 18px;">Mahabodhi International Meditation </h3>
                                                </div>
                                            </div>
                                            
                                            <div class="separator transparent" style="margin-top:0px;margin-bottom:15px;"></div>
                                            <p>
                                                The Mahabodhi International Meditation Centre (MIMC) had its humble beginnings in one small rented room in Leh city in 1986 when Venerable Bhikkhu Sanghasena realized there was a great need to offer both humanitarian and spiritual services to the people of Ladakh. From there the centre moved to the main Devachan campus in Choglamsar which is on an impressive 250 acres of desert land in 1991. Against all odds, with no water, no proper roads and just harsh desert sand, through the tenacity, compassion and resourcefulness of Venerable Sanghasena and his team, the Mahabodhi Devachan campus began to grow and flourish and his dream slowly became a reality.
                                            </p>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
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