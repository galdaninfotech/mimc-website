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
                            <h1 style="padding: 0; margin: 0;">Requirements</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Education</a><span class="delimiter">&gt;</span>
                                    <span class="current">Requirements</span>
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

                                                            <span class="dropcap" style="">V</span>
                                                            <p>
                                                                enerable Bhikkhu Sanghasena was born in the remote Himalayan region of Ladakh, in the Northwest of India, high on the Tibetan plateau. He was brought up within a deeply religious family, amongst people who followed the ancient Buddhist traditions and believed in peacefulness, humility and innocence as the natural way of life. At the age of seventeen he joined the Indian Army, where he developed a strong sense of personal discipline and responsibility.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small ri
                                                                ver named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                                            </p><p>&nbsp;</p>

                                                            <p>
                                                                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The 
                                                                Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
                                                            </p><p>&nbsp;</p>

                                                            <p>
                                                                She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headl
                                                                ine of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
                                                            </p><p>&nbsp;</p>

                                                            <p>
                                                                On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind T
                                                            ext should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again.</p>

                                                            <p>
                                                                And if she hasn't been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at 
                                                                the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One.
                                                            </p><p>&nbsp;</p>


                                                            <p>
                                                                In trying to translate the compassion of Buddha into action, the Mahabodhi Residential Home for the Aged, Destitute and Disabled was started in 1995.
                                                            </p><p>&nbsp;</p>
                                                            <p>
                                                                The main objective behind this project is to render a service or a helping hand for the elderly and physically handicapped who are either abandoned or have nobody to look after in their facilities.
                                                            </p>
                                                            
                                                            <p>
                                                                They are given all the love, affection and necessary equipments required and essential for them at this stage of life. A home away from home has been created in the campus for the aged, physically and mentally challenged people.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                This home is one of its kinds in entire Ladakh. The home provides an environment resident in all respect in catering to the limited need and maximum happiness of the inmates.
                                                            </p><p>&nbsp;</p>

                                                            <p>
                                                                Presently 35 elderly and physically handicapped young adults are residing at our Old Age Home and with the humble donations and support we wish to expand the facilities to 100 people.
                                                            </p><p>&nbsp;</p>


                                                   


                                                           





                                       
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
  title: 'Requirements',
  meta: [
    {
      name: 'description',
      content: 'Requirements',
    },
  ],
};