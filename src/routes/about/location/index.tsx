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
                            <h1 style="padding: 0; margin: 0;">Location</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="https://mahabodhi=ladakh.com/">Home</a>
                                    <span class="delimiter">&gt;</span><span class="current">About</span>
                                    <span class="delimiter">&gt;</span><span class="current">Location</span>
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
                                                                <img src="/images/about/our-motto.jpg" alt="Location" />
                                                            </div>

                                                            <span class="dropcap" style="">M</span>
                                                            <p>
                                                                IMC is located 12 km from Leh city, nestled at an altitude of <strong>3,500 meters</strong> (11,482.94 foot) above the sea level, deep within the mighty Himalayan Mountains in Union territory Ladakh, of India.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Leh being the largest city of Ladakh, enjoys the maximum tourism and also one of the few remaining Buddhist destinations in South Asia. Ladakh is a cold desert, this arid terrain experiences drastic weather changes.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                The temperatures are so extreme that in winters, it drops below -30 degree Celsius, and in summers, it rises near 30 degree Celsius. The latitude and longitude of Leh, India is: 34° 10' 0" N / 77° 35' 0" E. Leh city is well connected by air and road.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                A number of major airlines now operate regular flights into Leh from Delhi, Jammu and Srinagar. Through Srinagar, Leh can be reached either by state bus or taxi covering 434 km and through Manali in Himachal Pradesh, it will have 473 km.
                                                            </p>

                                                            <p>There are regular taxi services available from Leh to MIMC.</p>

                                                            
                                                            

                                                                                                                     
                                                            
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
  title: 'Location',
  meta: [
    {
      name: 'description',
      content: 'Location',
    },
  ],
};