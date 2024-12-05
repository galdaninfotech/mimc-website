import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import Sidebar1 from '~/components/sidebar1/sidebar1';

export default component$(() => {

  return (
    <div class="content" style="min-height: 150px;">
        <div class="content_inner">
            <div class="title" style="min-height: 150px;">
                <div class="title_holder" style="opacity: 1;">
                    <div class="container">
                        <div class="container_inner clearfix" style="padding: 0;">
                            <h1 style="padding: 0; margin: 0;">Our Motto</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs"><a href="https://mahabodhi=ladakh.com/">Home</a><span class="delimiter">&gt;</span><span class="current">Our Motto</span></div>
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
                                                                <img src="/images/about/our-motto.jpg" alt="Our Motto" />
                                                            </div>

                                                            <div class="list number">
                                                                <ul>
                                                                    <li>We the members of Mahabodhi International Meditation Centre (MIMC), always endeavour to pay our highest homage to the Triple Gem with utmost reverence and actively devote our lives to the propagation of the beautiful messages of love, peace, compassion and wisdom taught by the Lord Buddha.</li>
                                                                    <li>We uphold the humanistic, scientific, rational and non-sectarian principles contained in the Buddha's teachings based on right understanding and right view.</li>
                                                                    <li>We practise the Buddha's teachings in our everyday lives and shares the merits of this practice with all beings.</li>
                                                                    <li>We welcome all people, irrespective of caste, creed, religion or nationality, to join us as honourable members of our organization and we greet them warmly on every occasion.</li>
                                                                    <li>We practise Panca Sila, the five Buddhist moral precepts, and Samatha & Vipassana meditation in our daily lives for the eradication of ignorance and defilements, to thereby enjoy real peace, happiness and harmony.</li>
                                                                    <li>We make the very best use of our time and seize every opportunity to work with diligence for the welfare and happiness of all beings through spiritual and humanitarian services and activities. Thus, we consider ourselves to be truly non-sectarian, socially-engaged Buddhists.</li>
                                                                    <li>We show equal respect for all the different Buddhist traditions and pledge to live and work in unity to propagate the sublime teachings of the Supremely Enlightened One, the Buddha, for the peace and happiness of all.</li>
                                                                    <li>We show deep respect for all religions and cultures of all nations, and we actively promote inter-religious and inter-cultural harmony and co-existence to achieve genuine lasting world peace.</li>
                                                                    <li>We spare no effort in striving for the eradication of illiteracy and poverty through all possible means and methods, particularly by providing holistic education for children, who are the architect of our future world.</li>
                                                                    <li>We promote equality, fraternity, liberty, spirituality, amity and unity in society.</li>
                                                                    <li>We always remain grateful to the mother earth, water, trees and animals, and try not to consume or use more of these precious natural resources than are strictly necessary.</li>
                                                                    <li>We pledge to take utmost care to preserve and protect the natural environment for the good of all living beings.</li>
                                                                    <li>We pledge to work for the creation of Global Family.</li>
                                                                    <li>We fully endorse the United Nation's 17 Millennium sustainable development Goals.</li>
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
  title: 'Our Motto',
  meta: [
    {
      name: 'description',
      content: 'Our Motto',
    },
  ],
};