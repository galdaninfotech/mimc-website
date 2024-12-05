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
                            <h1 style="padding: 0; margin: 0;">Registration Number</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs"><a href="https://mahabodhi=ladakh.com/">Home</a><span class="delimiter">&gt;</span><span class="current">Registration Number</span></div>
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
                                                                <img src="/images/about/our-motto.jpg" alt="Registration Number" />
                                                            </div>

                                                            <span class="dropcap" style="">M</span>
                                                            <p>
                                                                ahabodhi International Meditation Centre is registered as Society under the <strong>Indian Society Act 1998</strong> (1941 A.D.). Its registration no. <strong>5635-RS/1041</strong> as a charitable, non-profit, secular organization, to offer both desperately needed humanitarian services to impoverished people in the remote land of Ladakh.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Venerable Bhikkhu Sanghasena has created an integrated community at Devachan campus which provides comprehensive care to all segments of its society: Children, elderly, special needs individuals, monks, nuns, sick, as well as those seeking spiritual development. The community has become a model for the region through sustainable, ecological development.
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
  title: 'Registration Number',
  meta: [
    {
      name: 'description',
      content: 'Registration Number',
    },
  ],
};