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
                            <h1 style="padding: 0; margin: 0;">Past & Present Designation</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs"><a href="/">Home</a><span class="delimiter">&gt;</span><span class="current">Past & Present Designation</span></div>
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

                                                            <span class="dropcap" style="">V</span>
                                                            <p>
                                                                enerable Bhikkhu Sanghasena has devoted his adult life to the service of mankind through a number of national and international organizations, holding the following positions:
                                                            </p>
                                                            <div class="list number">
                                                                <ul>
                                                                    <li>Founder/President, Mahabodhi International Meditation Centre (MIMC), Leh, Ladakh, Indiabild6 bearb</li>
                                                                    <li>Treasurer International Buddhists Confederation (IBC), New Delhi, India</li>
                                                                    <li>Former President, Mahabodhi Society, Bangalore</li>
                                                                    <li>Former Council Member, International Association for Religious Freedom (IARF), UK</li>
                                                                    <li>Chairman, United Religious Initiative, Ladakh Branch</li>
                                                                    <li>President, International Association for Religious Freedom, Ladakh Chapter</li>
                                                                    <li>Member of the Board of Directors, Buddha’s Light International Association (BLIA), Los Angeles, USA & Taiwan</li>
                                                                    <li>Former Vice President, World Fellowship of Buddhist Youth, Bangkok, Thailand</li>
                                                                    <li>Advisor, International Association for Engaged Buddhists (INEB), Thailand</li>
                                                                    <li>Executive Member, World Buddhist Sangha Council, Taipei, Taiwanbild5 bearb</li>
                                                                    <li>Chancellor, International Association of Educators for World Peace (IAEWP), Huntsville, USA, Jammu and Kashmir State Chapter,  India</li>
                                                                    <li>Governing Body Member, Nava Nalanda Deem University, Bihar, India</li>
                                                                    <li>Patron, Kampus OnlineTM IGNOU Virtual Community College, New Delhi, India</li>
                                                                </ul>
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
  title: 'Past & Present Designation',
  meta: [
    {
      name: 'description',
      content: 'Past & Present Designation',
    },
  ],
};