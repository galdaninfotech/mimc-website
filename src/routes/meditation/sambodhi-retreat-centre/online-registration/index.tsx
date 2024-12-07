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
                            <h1 style="padding: 0; margin: 0;">Online Registration</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a>
                                    <a href="/">Meditation</a><span class="delimiter">&gt;</span>
                                    <a href="/">Sambodhi Retreat Centre</a><span class="delimiter">&gt;</span>
                                    <span class="delimiter">&gt;</span><span class="current">Online Registration</span>
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


                                                            <h2>Online registration for 3 day meditation courses at sambodhi retreat centre</h2>


                                                            <h3>Registration....</h3>
                                                            <p>While participating in the course, you are expected to stick on to the following rules. Please review the rules and register for the course only if you are sure you can abide by it.</p>

                                                            <p>To follow the Five Precepts which are:</p>
                                                            <div class="list number">
                                                                <ul>
                                                                    <li>To refrain from harming any living being.</li>
                                                                    <li>To refrain from taking what is not given or misusing the property of others.</li>
                                                                    <li>To observe celibacy.</li>
                                                                    <li>To refrain from lying, harsh speech, decisive speech and idle gossip (in the context of retreat, this means observing noble silence except when speaking with the teacher).</li>
                                                                    <li>To refrain from the use of intoxicants (alcohol, drugs, or any other mind altering substance). For the comfort of others, we require that you also refrain from the use of tobacco.</li>
                                                                </ul>
                                                            </div>

                                                            <p>Other Things To Follow:</p>
                                                            <div class="list number">
                                                                <ul>
                                                                    <li>In order to create a more supportive environment for meditation, we request that you dress modestly while at the Meditation Camp, refraining from wearing shorts, tank tops, and transparent or revealing clothing.</li>
                                                                    <li>You are kindly requested to attend all the classes without fail.</li>
                                                                    <li>We expect you to arrive a few minutes before the class starts and do not leave the hall until the end of the session, if at all possible.</li>
                                                                    <li>In order to create a more supportive environment we need your full cooperation.</li>
                                                                    <li>You are expected to complete the course and not allowed to leave in between.</li>
                                                                </ul>
                                                            </div>


                                                            <p>If this code of conduct is acceptable to you, then please contact our centre via email at mimc.sambodhi@gmail.com to get yourself registered online..</p>

                                                            <p><strong>Note</strong> : Please write a short description of your experience (or lack of experience with meditation) and mention your motivation for coming to this retreat.</p>



                                       
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
  title: 'Online Registration',
  meta: [
    {
      name: 'description',
      content: 'Online Registration',
    },
  ],
};