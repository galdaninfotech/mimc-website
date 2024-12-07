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
                            <h1 style="padding: 0; margin: 0;">Find A Person To Sponsor</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Sponsorship</a><span class="delimiter">&gt;</span>
                                    <span class="current">Find A Person To Sponsor</span>
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
                                                                <img src="/images/about/our-motto.jpg" alt="Find A Person To Sponsor" />
                                                            </div>

                                                            <p>If you decide to sponsor a child for more than a year, you will be entitled to become a member of the Bridge Program.</p>
                                                            <p>Benefits of this program include:</p>
                                                            <div class="list number">
                                                                <ul>
                                                                    <li>Letters from your child and an updated photo & academic report card each year.</li>
                                                                    <li>The opportunity to write to your child as often as you like, as well as send birthday and other presents.</li>
                                                                    <li>Learning about Buddhist philosophy and meditation at the Mahabodhi International Meditation Centre.</li>
                                                                    <li>Receiving personalized correspondence from your sponsored child and regular updates of his/her academic progress.</li>
                                                                </ul>
                                                            </div>
                                                            <p>We pledge that your donation will be utilized judiciously for the purpose it is meant for. If you decide to sponsor a child, we will send you the child's case history and photograph. Funds are also needed for the expansion of school and hostel facilities to accommodate more children.</p>


                                                            

                                       
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
  title: 'Find A Person To Sponsor',
  meta: [
    {
      name: 'description',
      content: 'Find A Person To Sponsor',
    },
  ],
};