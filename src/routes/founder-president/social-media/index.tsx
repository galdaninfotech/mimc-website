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
                            <h1 style="padding: 0; margin: 0;">Connect with Bhikkhu Sanghasena on Social Media</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a>
                                    <span class="delimiter">&gt;</span><span class="current">Founder President</span>
                                    <span class="delimiter">&gt;</span><span class="current">Connect with Bhikkhu Sanghasena on Social Media</span>
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
                                                                <img src="/images/founder-president/about-founder.jpg" alt="Connect with Bhikkhu Sanghasena on Social Media" />
                                                            </div>

                                                                                                                
                                                            
                                                            

                                                   


                                                           





                                       
                                                        </div>
                                                    </div>
                                                    <div class="separator transparent" style="margin-top:20px;margin-bottom:20px;"></div>
                                                </div>
                                            </div>




                                            <div class="blog_holder small_images square with_info_box">
                                                <article id="post-36" class="post-36 post type-post status-publish format-link has-post-thumbnail hentry category-sport tag-sport tag-swimming post_format-post-format-link">
                                                    <div class="post_content_holder">
                                                        <div class="post_image">
                                                            <a href="#" title="Check Out Our Profile Page!">
                                                            <img width="212" height="212" src="/images/founder-president/social-image1.jpg" class="attachment-blog-square size-blog-square wp-post-image" alt="" decoding="async" loading="lazy" srcset="/images/founder-president/social-image1-212x212.jpg 212w, /images/founder-president/social-image1-100x100.jpg 100w, /images/founder-president/social-image1-150x150.jpg 150w, /images/founder-president/social-image1-520x520.jpg 520w, /images/founder-president/social-image1-47x47.jpg 47w" sizes="(max-width: 212px) 100vw, 212px" />						</a>
                                                        </div>
                                                        <div class="post_text">
                                                            <div class="post_text_holder">
                                                                <i class="link_mark icon-link pull-left"></i>
                                                                <div class="post_title">
                                                                    <h3><a href="https://demo.qodeinteractive.com/subway/check-it-out/" title="Check Out Our Profile Page!">Check Out Our Facebook Page!</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
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
  title: 'Connect with Bhikkhu Sanghasena on Social Media',
  meta: [
    {
      name: 'description',
      content: 'Connect with Bhikkhu Sanghasena on Social Media',
    },
  ],
};