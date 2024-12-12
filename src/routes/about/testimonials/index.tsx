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
                            <h1 style="padding: 0; margin: 0;">Testimonials</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a>
                                    <span class="delimiter">&gt;</span><span class="current">About</span>
                                    <span class="delimiter">&gt;</span><span class="current">Testimonials</span>
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
                                                                <img src="/images/about/brief-intro.jpg" alt="Testimonials" />
                                                            </div>

                                                            
                                                            


                                                        </div>
                                                    </div>
                                                    <div class="separator transparent" style="margin-top:20px;margin-bottom:20px;"></div>
                                                </div>
                                            </div>


                                            
                                            <div class="vc_column-inner">
                                                <div class="wpb_wrapper">
                                                    <div class="testimonials_holder clearfix">
                                                        <div class="testimonials" style="visibility: visible;">
                                                            <div class="testimonial_container">
                                                                <div id="testimonial-1" class="testimonial_content" style="">
                                                                    <div class="testimonial_text_holder">
                                                                        <div class="testimonial_text_inner" style="background-color: #f8f8f8; border-color: ;">
                                                                            <i class="icon-quote-right pull-left"></i>
                                                                            <p>
                                                                                Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe.
                                                                            </p>
                                                                            <span class="testimonial_name">- Jacob</span>
                                                                        </div>
                                                                        <span class="testimonial_arrow" style="background-color: #f8f8f8; border-color: ;"></span><span class="transparent_arrow"></span>
                                                                    </div>
                                                                </div>
                                                                <div id="testimonial-2" class="testimonial_content" style="display: none;">
                                                                    <div class="testimonial_text_holder">
                                                                        <div class="testimonial_text_inner" style="background-color: #f8f8f8; border-color: ;">
                                                                            <i class="icon-quote-right pull-left"></i>
                                                                            <p>
                                                                                Exceptional support throughout the journey made it truly unforgettable. Highly recommended! Exceptional support throughout the journey made it truly unforgettable. Highly recommended! Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe.
                                                                            </p>
                                                                            <span class="testimonial_name">- William</span>
                                                                        </div>
                                                                        <span class="testimonial_arrow" style="background-color: #f8f8f8; border-color: ;"></span><span class="transparent_arrow"></span>
                                                                    </div>
                                                                </div>
                                                                <div id="testimonial-3" class="testimonial_content" style="display: none;">
                                                                    <div class="testimonial_text_holder">
                                                                        <div class="testimonial_text_inner" style="background-color: #f8f8f8; border-color: ;">
                                                                            <i class="icon-quote-right pull-left"></i>
                                                                            <p>
                                                                                Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe.
                                                                            </p>
                                                                            <span class="testimonial_name">- Daniel</span>
                                                                        </div>
                                                                        <span class="testimonial_arrow" style="background-color: #f8f8f8; border-color: ;"></span><span class="transparent_arrow"></span>
                                                                    </div>
                                                                </div>
                                                                <div id="testimonial-4" class="testimonial_content" style="">
                                                                    <div class="testimonial_text_holder">
                                                                        <div class="testimonial_text_inner" style="background-color: #f8f8f8; border-color: ;">
                                                                            <i class="icon-quote-right pull-left"></i>
                                                                            <p>
                                                                                Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe.
                                                                            </p>
                                                                            <span class="testimonial_name">- Michael</span>
                                                                        </div>
                                                                        <span class="testimonial_arrow" style="background-color: #f8f8f8; border-color: ;"></span><span class="transparent_arrow"></span>
                                                                    </div>
                                                                </div>
                                                                <div id="testimonial-5" class="testimonial_content" style="display: none;">
                                                                    <div class="testimonial_text_holder">
                                                                        <div class="testimonial_text_inner" style="background-color: #f8f8f8; border-color: ;">
                                                                            <i class="icon-quote-right pull-left"></i>
                                                                            <p>
                                                                                Exceptional support throughout the journey made it truly unforgettable. Highly recommended! Exceptional support throughout the journey made it truly unforgettable. Highly recommended! Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe.
                                                                            </p>
                                                                            <span class="testimonial_name">- Richard</span>
                                                                        </div>
                                                                        <span class="testimonial_arrow" style="background-color: #f8f8f8; border-color: ;"></span><span class="transparent_arrow"></span>
                                                                    </div>
                                                                </div>
                                                                <div id="testimonial-6" class="testimonial_content" style="display: none;">
                                                                    <div class="testimonial_text_holder">
                                                                        <div class="testimonial_text_inner" style="background-color: #f8f8f8; border-color: ;">
                                                                            <i class="icon-quote-right pull-left"></i>
                                                                            <p>
                                                                                Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe.
                                                                            </p>
                                                                            <span class="testimonial_name">- Robert</span>
                                                                        </div>
                                                                        <span class="testimonial_arrow" style="background-color: #f8f8f8; border-color: ;"></span><span class="transparent_arrow"></span>
                                                                    </div>
                                                                </div>
                                                                <div id="testimonial-7" class="testimonial_content" style="">
                                                                    <div class="testimonial_text_holder">
                                                                        <div class="testimonial_text_inner" style="background-color: #f8f8f8; border-color: ;">
                                                                            <i class="icon-quote-right pull-left"></i>
                                                                            <p>
                                                                                Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe.
                                                                            </p>
                                                                            <span class="testimonial_name">- Kyle</span>
                                                                        </div>
                                                                        <span class="testimonial_arrow" style="background-color: #f8f8f8; border-color: ;"></span><span class="transparent_arrow"></span>
                                                                    </div>
                                                                </div>
                                                                <div id="testimonial-8" class="testimonial_content" style="display: none;">
                                                                    <div class="testimonial_text_holder">
                                                                        <div class="testimonial_text_inner" style="background-color: #f8f8f8; border-color: ;">
                                                                            <i class="icon-quote-right pull-left"></i>
                                                                            <p>
                                                                                Exceptional support throughout the journey made it truly unforgettable. Highly recommended! Exceptional support throughout the journey made it truly unforgettable. Highly recommended! Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe.
                                                                            </p>
                                                                            <span class="testimonial_name">- Charles</span>
                                                                        </div>
                                                                        <span class="testimonial_arrow" style="background-color: #f8f8f8; border-color: ;"></span><span class="transparent_arrow"></span>
                                                                    </div>
                                                                </div>
                                                                <div id="testimonial-9" class="testimonial_content" style="display: none;">
                                                                    <div class="testimonial_text_holder">
                                                                        <div class="testimonial_text_inner" style="background-color: #f8f8f8; border-color: ;">
                                                                            <i class="icon-quote-right pull-left"></i>
                                                                            <p>
                                                                                Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe. Mahabodhi made spiritual adventure tour an extraordinary one! The well-organized itinerary, skilled meditation instructor, and stunning routes left us in awe.
                                                                            </p>
                                                                            <span class="testimonial_name">- George</span>
                                                                        </div>
                                                                        <span class="testimonial_arrow" style="background-color: #f8f8f8; border-color: ;"></span><span class="transparent_arrow"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul class="testimonial_nav">
                                                                <li class="active"><a href="#testimonial-1"><span class="testimonial_image_holder"><img width="46" height="47" src="/images/about/testimonial-aditya.jpg" class="attachment-testimonial-image size-testimonial-image wp-post-image" alt="" decoding="async" /></span></a></li>
                                                                <li class=""><a href="#testimonial-2"><span class="testimonial_image_holder"><img width="46" height="47" src="/images/about/testimonial-ankit.jpg" class="attachment-testimonial-image size-testimonial-image wp-post-image" alt="" decoding="async" loading="lazy" /></span></a></li>
                                                                <li class=""><a href="#testimonial-3"><span class="testimonial_image_holder"><img width="46" height="47" src="/images/about/testimonial-rajesh.jpg" class="attachment-testimonial-image size-testimonial-image wp-post-image" alt="" decoding="async" loading="lazy" /></span></a></li>
                                                                <li class=""><a href="#testimonial-4"><span class="testimonial_image_holder"><img width="46" height="47" src="/images/about/testimonial-aditya.jpg" class="attachment-testimonial-image size-testimonial-image wp-post-image" alt="" decoding="async" /></span></a></li>
                                                                <li class=""><a href="#testimonial-5"><span class="testimonial_image_holder"><img width="46" height="47" src="/images/about/testimonial-ankit.jpg" class="attachment-testimonial-image size-testimonial-image wp-post-image" alt="" decoding="async" loading="lazy" /></span></a></li>
                                                                <li class=""><a href="#testimonial-6"><span class="testimonial_image_holder"><img width="46" height="47" src="/images/about/testimonial-rajesh.jpg" class="attachment-testimonial-image size-testimonial-image wp-post-image" alt="" decoding="async" loading="lazy" /></span></a></li>
                                                                <li class=""><a href="#testimonial-7"><span class="testimonial_image_holder"><img width="46" height="47" src="/images/about/testimonial-aditya.jpg" class="attachment-testimonial-image size-testimonial-image wp-post-image" alt="" decoding="async" /></span></a></li>
                                                                <li class=""><a href="#testimonial-8"><span class="testimonial_image_holder"><img width="46" height="47" src="/images/about/testimonial-ankit.jpg" class="attachment-testimonial-image size-testimonial-image wp-post-image" alt="" decoding="async" loading="lazy" /></span></a></li>
                                                                <li class=""><a href="#testimonial-9"><span class="testimonial_image_holder"><img width="46" height="47" src="/images/about/testimonial-rajesh.jpg" class="attachment-testimonial-image size-testimonial-image wp-post-image" alt="" decoding="async" loading="lazy" /></span></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
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
  title: 'Testimonials',
  meta: [
    {
      name: 'description',
      content: 'Testimonials',
    },
  ],
};