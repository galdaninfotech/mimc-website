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
                            <h1 style="padding: 0; margin: 0;">Achievement & Awards</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a>
                                    <span class="delimiter">&gt;</span><span class="current">Founder President</span>
                                    <span class="delimiter">&gt;</span><span class="current">Achievement & Awards</span>
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

                                                            <ul class="timeline">

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">1999</p>
                                                                        <h4>Included In The Prestigious Book “Marquis' Who's Who”</h4>
                                                                        <p>
                                                                            Ven. Sanghasena's name was included in the prestigious book “Marquis' Who's Who”, which believes that men and women around the globe, whose achievements influence people of today, are worthy of permanent record.
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                
                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2000</p>
                                                                        <h4>National Award for the Welfare of People with Disabilities</h4>
                                                                        <p>
                                                                            In public recognition of his selfless service to society, the Ministry of Social Justice and Empowerment, Government of India, presented him with the “National Award for the Welfare of People with Disabilities” in December, 2000.
                                                                        </p>

                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2002</p>
                                                                        <h3>Man of the Year</h3>
                                                                        <p>
                                                                            The American Biographical Institute recognized Venerable Bhikkhu Sanghasena as its “Man of the Year 2002”
                                                                        </p>

                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2004</p>
                                                                        <h3>World Peace Award</h3>
                                                                        <p>
                                                                            The Gandhi Peace Foundation, India, honored him with its prestigious “World Peace Award for the Year 2004” in recognition of his work for world peace, interfaith service, and inter-religious harmony.
                                                                        </p>

                                                                        <h3>Nominated As The Chancellor Of The International Association Of Educators</h3>
                                                                        <p>
                                                                                THe was nominated as the Chancellor of the International Association of Educators for World Peace (IAEWP), based in Huntsville, USA, for the Jammu and Kashmir State Chapter, India in the Year 2004.
                                                                        </p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2005</p>
                                                                        <h3>Peace Environment Award</h3>
                                                                        <p>
                                                                            On the occasion of the United Nations “World Environment Day, Third World Congress”, which was held in Verbania, Italy, in 2005, the “Peace Environment Award” was presented to Venerable Bhikkhu Sanghasena in recognition of his invaluable contribution to a “culture of peace through Education and international friendship”.
                                                                        </p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2006</p>
                                                                        <h3>Global Ambassador and Regional Director</h3>
                                                                        <p>
                                                                            The International Centre for Advanced Studies and Research in Global Environment and International Institute of Ecology and Environment, Delhi, appointed Venerable Bhikkhu Sanghasena as their Global Ambassador and Regional Director.
                                                                        </p>

                                                                        <h3>Rajiv Gandhi Award</h3>
                                                                        <p>
                                                                            Rajiv Gandhi Award 2006 was presented to Ven. Sanghasena by Hon'ble Chief Minister of J&K State, Jenab Ghulam Nabi Azad, in May 2006 at Chashma Shahi Bagh, Srinagar.
                                                                        </p>

                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2009</p>
                                                                        <h3>Bharat Ratna Dr. Bhim Rao Ambedkar Award</h3>
                                                                        <p>
                                                                            The Ladakh Buddhist Association presented the “Bharat Ratna Dr. Bhim Rao Ambedkar Award 2009” to Venerable Bhikkhu Sanghasena in recognition of his invaluable humanitarian and benevolent service to the needy people of Ladakh.
                                                                        </p>

                                                                        <h3>Sakyamuni Buddha International Award</h3>
                                                                        <p>
                                                                            The Ashwagosha Buddhist Foundation, based in Nagpur, India, presented the “Sakyamuni Buddha International Award 2009” to Venerable Bhikkhu Sanghasena.
                                                                        </p>

                                                                        <h3>Honorary Degree of the Doctorate of Philosophy</h3>
                                                                        <p>
                                                                            The Dharma Buddhist University of Malaysia conferred Honorary Degree of the Doctorate of Philosophy to Venerable Bhikkhu Sanghasena on 31st May, 2009.
                                                                        </p>
                                                                    </div>
                                                                </li>

                                                                                                                                
                                                            </ul>

                                                            



                                       
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
  title: 'Achievement & Awards',
  meta: [
    {
      name: 'description',
      content: 'Achievement & Awards',
    },
  ],
};