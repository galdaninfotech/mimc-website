import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Slider from '~/components/starter/slider/slider';
import HomeNews from '~/components/home-news/home-news';
import HomeIntro from '~/components/home-intro';
import StrapiFetch2 from '~/components/strapi-fetch2/strapi-fetch2';

import { routeLoader$ } from '@builder.io/qwik-city';
import { getHomePage } from "~/data/loaders";

export const useHomeData = routeLoader$(async () => {
  const data = await getHomePage();
  return {...data.data};
});

export default component$(() => {
  return (
    <>
    
        <div class="content">
            <div class="content_inner">

            
                {/* <Slider /> */}
                <StrapiFetch2 />

                {/* <div class="full_width">
                    <div class="full_width_inner">
                        <section class="wpb-content-wrapper">
                            
                            <div class="vc_row wpb_row " style="text-align:center">
                                <section class="section  grid_section">
                                    <div class="section_inner clearfix">
                                        <div class="section_inner_margin clearfix">
                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="separator transparent" style="margin-top:-4px;margin-bottom:0px;"></div>


                                                        <HomeIntro />
                                                        
                                                        
                                                        <div class="separator transparent" style="margin-top:15px;margin-bottom:20px;"></div>
                                                        <div class="vc_row wpb_row vc_inner " style="text-align:left">

                                                            <div class="wpb_column vc_column_container vc_col-sm-3">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="box_image_with_border" style="color:black;">
                                                                            <div class="box_image_holder"><span class="box_image_shadow"></span><span class="image_holder_inner"><img src="images/13.jpg" alt="VISUAL PAGE BUILDER" /></span><span class="box_icon"><span class="icon-stack"><i class="icon-circle icon-stack-base" style="color: darkred;"></i><i style="color: #fff; z-index: 999; position: absolute; left: 26%; top: 26%" class="fas fa-praying-hands"></i></span></span></div>
                                                                            <h3 style="color:black; font-size: 18px; text-transform: uppercase">Founder</h3>
                                                                            Venerable Sanghasena realized that the main root cause of poverty and social unrest was illiteracy. He knew that when people were given proper...
                                                                            <span class="separator transparent" style="margin: 12px 0;"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="wpb_column vc_column_container vc_col-sm-3">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="box_image_with_border" style="color:black;">
                                                                            <div class="box_image_holder"><span class="box_image_shadow"></span><span class="image_holder_inner"><img src="images/21.jpg" alt="Mahabodhi Residential School" /></span><span class="box_icon"><span class="icon-stack"><i class="icon-circle icon-stack-base" style="color: darkred;"></i><i style="color: #fff; z-index: 999; position: absolute; left: 26%; top: 26%" class="fas fa-school"></i></span></span></div>
                                                                            <h3 style="color:black; font-size: 18px; text-transform: uppercase">Courses & Retreats</h3>
                                                                            The Sambodhi Retreat Centre offers both short and longer duration meditation courses. The tremendously popular and highly successful three-day meditation...
                                                                            <span class="separator transparent" style="margin: 12px 0;"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="wpb_column vc_column_container vc_col-sm-3">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="box_image_with_border" style="color:black;">
                                                                            <div class="box_image_holder"><span class="box_image_shadow"></span><span class="image_holder_inner"><img src="images/3.jpg" alt="Karuna Charitable Hospital" /></span><span class="box_icon"><span class="icon-stack"><i class="icon-circle icon-stack-base" style="color: darkred;"></i><i style="color: #fff; z-index: 999; position: absolute; left: 35%; top: 26%" class="fas fa-user-graduate"></i></span></span></div>
                                                                            <h3 style="color:black; font-size: 18px; text-transform: uppercase">Education</h3>
                                                                            Mahabodhi Residential School-Leh is a natural and tranquil institution away from the hustle and bustle of the city which fosters an ideal educational...
                                                                            <span class="separator transparent" style="margin: 12px 0;"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="wpb_column vc_column_container vc_col-sm-3">
                                                                <div class="vc_column-inner">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="box_image_with_border" style="color:black;">
                                                                            <div class="box_image_holder"><span class="box_image_shadow"></span><span class="image_holder_inner"><img src="images/4.jpg" alt="Visually Impaired Hostel" /></span><span class="box_icon"><span class="icon-stack"><i class="icon-circle icon-stack-base" style="color: darkred;"></i><i style="color: #fff; z-index: 999; position: absolute; left: 35%; top: 26%" class="fas fa-suitcase-rolling"></i></span></span></div>
                                                                            <h3 style="color:black; font-size: 18px; text-transform: uppercase">MIMC Travel Desk</h3>
                                                                            Whether you're an adventure seeker, a cultural explorer, or simply someone seeking solace, Mahabodhi Spiritual Adventure Travel Agency is your trusted...
                                                                            <span class="separator transparent" style="margin: 12px 0;"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div class="vc_row wpb_row " style="text-align:left">
                                <section class="section  grid_section" style="background-color:#f8f8f8; padding-bottom:10px;">
                                    <div class="section_inner clearfix">
                                        <div class="section_inner_margin clearfix">
                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper">
                                                        <div class="separator transparent" style="margin-top:-4px;margin-bottom:0px;"></div>
                                                        <span class="custom_font_holder" style=" font-size: 35px; line-height: 37px; font-style: normal; font-weight: 26; text-decoration: none; text-align: center;"><span style="color: darkred;">Bhikkhu Sanghasena </span> <span style="color: #000;"> - The Silent Reformer<br />
                                                        </span></span>
                                                        <div class="separator transparent" style="margin-top:7px;margin-bottom:8px;"></div>
                                                        <div class="wpb_text_column wpb_content_element ">
                                                            <div class="wpb_wrapper">
                                                                <p style="text-align: center; color: #000;">Transformation of lives through Compassion in Action at Mahabodhi International Meditation Centre, Leh UT Ladakh, INDIA. The documentary film is funded by Fetzer Institute, USA</p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div class="video-wrap"><iframe width="1560" height="450" src="https://www.youtube.com/embed/JS5F1b8iulk?si=FzkKXzt-_ciB4EAu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe></div>

                            



                            <HomeNews />
                            

                            

                        </section>
                    </div>
                </div>   */}
                
            </div> 
        </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome MIMC',
  meta: [
    {
      name: 'description',
      content: 'MIMC site description',
    },
  ],
};
