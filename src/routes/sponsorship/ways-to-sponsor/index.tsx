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
                            <h1 style="padding: 0; margin: 0;">Ways To Sponsor</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Sponsorship</a><span class="delimiter">&gt;</span>
                                    <span class="current">Ways To Sponsor</span>
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
                                                                <img src="/images/about/our-motto.jpg" alt="Ways To Sponsor" />
                                                            </div>

                                                            <h2>Ways To Sponsor</h2>
                                                            <div class="list number">
                                                                <ul>
                                                                    <li>
                                                                        <span>Sponsoring a Child from the Hostel</span>
                                                                        <p>Thank you for helping make a miracle happen for a very special child! Your sponsorship will make a difference and help break this terrible cycle of poverty. By becoming a sponsor you can make an immediate difference in a child's life and see tangible results.</p>
                                                                    </li>

                                                                    <li>
                                                                        <span>Sponsoring a young monk / nun</span>
                                                                        <p>We take this opportunity to earnestly appeal to all generous-minded brothers and sisters to help implement the nunnery. We also need funds for the expansion of the physical facilities such as a dining hall, classrooms and accommodations to take in more nuns in the future.</p>
                                                                    </li>

                                                                    <li>
                                                                        <span>Sponsoring a Day-Boarder / child from our Branch Schools</span>
                                                                        <p>The School also has many students on its day-boarder's list and also students studying at our Branch Schools in Tinsmosgang and Bodhkharbu villages who come from very poor families.</p>
                                                                    </li>

                                                                    <li>
                                                                        <span>Sponsoring an Aged and Destitute</span>
                                                                        <p>The inmates of Mahabodhi Home for the Aged and Destitute are very humble and easy to support with a few requirements. Nevertheless, apart from the basic needs like clothing, shelter, food and medicine, Mahabodhi wishes to provide the inmates of the Home with good facilities to protect them from the rough climate of Ladakh and provide them a safe and warm surrounding. Some of the inmates are urgently in need of better medical facilities like wheel chair, mobile toilet chair or spectacles.</p>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <p>By supporting one of the inmates through a sponsorship a lot of improvements can be done and your kind help enables an old person to enjoy the last part of his/her life in a very peaceful and suitable surrounding.</p>


                                                            

                                       
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
  title: 'Ways To Sponsor',
  meta: [
    {
      name: 'description',
      content: 'Ways To Sponsor',
    },
  ],
};