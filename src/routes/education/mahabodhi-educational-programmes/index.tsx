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
                            <h1 style="padding: 0; margin: 0;">Mahabodhi Educational Programmes</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Education</a><span class="delimiter">&gt;</span>
                                    <span class="current">Mahabodhi Educational Programmes</span>
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

                                                            <blockquote style="width: 100%;"><i class="icon-quote-right pull-left"></i><h5>CHILDHOOD is the foundation stone upon which the whole life structure stands. The seed sown in childhood blossoms into the tree of life. </h5><div>By Bhikkhu Sanghasena</div></blockquote>

                                                            <p>
                                                                The education which is imparted in childhood is more important than the education which is received in colleges and universities. In the process of human growth, proper guidance along with environmental learning is important.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Spiritual Education Deserves greater Emphasis than Academics.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                The fundamental objectives of education should be to bring moral discipline, training and purify the mind and developing the illuminating wisdom. Without practicing all the values of education in daily life, life of the students would be like plastic flowers, a fruits without taste! Bee hive without honey !
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Education program must pay attention not merely to the material and intellectual progress of the students but ever more to their inner moral and spiritual values. Education should help man to live a meaningful and purposeful life. Education should not focus all efforts to acquire just a livelihood alone.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                True education should foster more and spiritual excellence. Neglecting and ignoring spirituality means neglecting the very heart of education. Knowledge gained through education should help the students to serve and promote welfare of the family, community, nation and the world at large.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Just as two wings are essential for a bird to fly high in the sky, two wheels for a motorcycle to move forward; so, also, the two types of education are needed in balance for students to attain the highest goal of life.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                Only when the students are equipped with these two aspects of education. can they be deserving of full respect and adoration in society. Possession of these two aspects of education will bring not only respect in society, but also inner satisfaction and contentment. The head oriented worldly education has very little value and it is ephemeral. Spiritual education is for entire life, even after this life, whereas worldly education is for just a temporary living.
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <p>
                                                                The modern sciences can provide us only material comforts such as good food, stylish clothing, fancy car luxurious home and such like Combination of Spiritual science material Science alone can bring complete meaning and purpose of education; that the highest and true wisdom. The Great Scientist Albert Einstein said "Science without religion is lame, religion without science is blind”
                                                            </p>
                                                            <p>&nbsp;</p>

                                                            <div class="list-number">
                                                                <ul>
                                                                    <li><i class="fa fa-dharmachakra"></i>Education, Science and spirituality</li>
                                                                    <li><i class="fa fa-dharmachakra"></i>Religion and science</li>
                                                                    <li><i class="fa fa-dharmachakra"></i>Materiality and spirituality</li>
                                                                    <li><i class="fa fa-dharmachakra"></i>Inner and outer values</li>
                                                                    <li><i class="fa fa-dharmachakra"></i>Head and heart</li>
                                                                    <li><i class="fa fa-dharmachakra"></i>Physics and metaphysics</li>
                                                                    <li><i class="fa fa-dharmachakra"></i>Psychology and ecology </li>
                                                                    <li><i class="fa fa-dharmachakra"></i>Philosophy and technology</li>
                                                                    <li><i class="fa fa-dharmachakra"></i>Meditation and medication</li> 
                                                                </ul>
                                                            </div>
                                                            
                                                            <p>
                                                                All must work in balance and harmony! Scientists must learn meditation to avoid misuse of scientific technology; Religious masters must make their religions scientific to avoid blind faith. Religious people must be scientifically religious and scientists must be religiously scientists. They must work in consultation with each other. Synthesis of these two; Religion and Science will bring greatest blessings to the world.
                                                            </p>
                                                            <p>&nbsp;</p>
                                                            


                                                        
                                                            
                                                            

                                                   


                                                           





                                       
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
  title: 'Mahabodhi Educational Programmes',
  meta: [
    {
      name: 'description',
      content: 'Mahabodhi Educational Programmes',
    },
  ],
};