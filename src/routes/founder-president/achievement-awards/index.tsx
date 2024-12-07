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

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2010</p>
                                                                        <h3>Lifetime Achievement Award</h3>
                                                                        <p>
                                                                            On the occasion of the "World Management Congress", Venerable Bhikkhu Sanghasena was awarded with the "Lifetime Achievement Award" New Delhi in Dec, 2010.
                                                                        </p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2011</p>
                                                                        <h3>Tripitaka Grantha Visharada</h3>
                                                                        <p>
                                                                            Awarded with Honorary Title of "Tripitaka Grantha Visharada" in May 2011 in Sri Lanka.
                                                                        </p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2011</p>
                                                                        <h3>Tripitaka Grantha Visharada</h3>
                                                                        <p>
                                                                            Awarded with Honorary Title of "Tripitaka Grantha Visharada" in May 2011 in Sri Lanka.
                                                                        </p>

                                                                        <h3>Chief Sangha Nayaka</h3>
                                                                        <p>Prestigious Title Chief Sangha Nayaka of Northern India presented in Colombo in 2011.</p>

                                                                        <h3>President Commendation Award</h3>
                                                                        <p>Awarded with "President Commendation Award" by President of Sri Lanka, in 2011.</p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2014</p>
                                                                        <h3>World Buddhist Outstanding Leader Award</h3>
                                                                        <p>
                                                                            Awarded the World Buddhist Outstanding Leader Award 2014 by World Buddhist Fellowship Youth, Thailand.
                                                                        </p>

                                                                        <h3>TARA AWARD</h3>
                                                                        <p>Awarded with "TARA AWARD" by most Ven. Mae Chee Sansanee Sthirasuta, the founder of Sathira-Dhammasathan Savika Sikkhalaya, Thailand.</p>

                                                                        <h3>World Peace Ambassador Award 2014</h3>
                                                                        <p>Awarded with "World Peace Ambassador Award 2014" by Master Sattitham Pensuk, Founder President 'Save the World Foundation, Thailand' in September 2014.</p>

                                                                        <h3>World Spiritual Education and Development Award</h3>
                                                                        <p>The World Spiritual Education and Development Award 2014 was presented by His Excellency Governor of Gujarat State, Prof. Om Prakash Kohli in December, 2014, New Delhi.</p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2015</p>
                                                                        <h3>Buddhism Today Award</h3>
                                                                        <p>
                                                                            Buddhism Today Award was presented by Ven. Dr.Thich Nhat Tu, Founder of Buddhism Today Association and is and abbot of Giac Ngo Temple, Vietnam in January, 2019.
                                                                        </p>

                                                                        <h3>Sangratan Puruskar</h3>
                                                                        <p>Venerable Bhikkhu Sanghasena was presented a prestigious award of "Sangratan Puruskar" by the organizers in recognition of his outstanding contribution for the revival of Buddhism in its birth place, India.</p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2016</p>
                                                                        <h3>Ambassador for peace award</h3>
                                                                        <p>
                                                                            "Ambassador for peace award" given in Dec 2016, by INTERNATIONAL HUMAN RIGHTS DAY '2016 and INTERNATIONAL HUMAN RIGHTS AWARDS "6th BHARTIYA MANAVA ADHIKAR SAMMAN'2016 for Peace, Harmony, Protecting and Promoting Human Rights, with "National Council Of News & Broadcasting (NCNB), Asian Human.
                                                                        </p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2017</p>
                                                                        <h3>Ambassador of Global Harmony Award</h3>
                                                                        <p>
                                                                            Conferred with the "Ambassador of Global Harmony Award" by the Founder President of the Anand Asharam Foundation (Affiliated to the United Nation through its Department of Public Information) during a huge convention gathered for the Mahakaruna Day Celebration on the 25th of April 2017in Bali, Indonesia.
                                                                        </p>

                                                                        <h3>Bhim-Ratna Prestigious Award 2017</h3>
                                                                        <p>Ven. Bhikkhu Sanghasena was honored with the "Bhim-Ratna Prestigious Award 2017" by the Golden Jubilee committee Bauddha Sahitya & Bodhisattva Dr. B.R Ambedkar Sahitya Chima Sammelan committee honoring him for his remarkable work in the fields of Buddha Dhamma and Dr.B.R Ambedkar's Mission of revival of Buddhism in its birthplace "India" and for his contribution in bringing about Peace and Harmony in the world.</p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2018</p>
                                                                        <h3>National Gaurav Award-2018</h3>
                                                                        <p>
                                                                            Most Ven. Bhikkhu Sanghasena was awarded with the "National Gaurav Award-2018" by the Indian Brave Heart organization at the Vigyan Bhavan, New Delhi in Dec 2017 for promoting world peace, interfaith and Mahakaruna at national and international level for the last 30 years.
                                                                        </p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2019</p>
                                                                        <h3>World Book of Records</h3>
                                                                        <p>
                                                                            Honored by the World Book of Records on June 28th for promoting world Peace.
                                                                        </p>

                                                                        <h3>Respect Age International Award of Excellence</h3>
                                                                        <p>Honored and awarded with the "Respect Age International Award of Excellence"- 2019 at a program held at India International Centre on 30th Nov, 2019. This award was presented to him for his tireless services to the people of Ladakh particularly the old and destitute.</p>

                                                                        <h3>Urjaa Ratan Award</h3>
                                                                        <p>Ven. Bhikkhu Sanghasena was honoured with the "Urjaa Ratan Award by the Urjaa World Foundation for his contribution in promoting World Peace and Religious Harmony during an event 'Maha Urjaa Mahotsav' in Jaipur in Dec, 2019.</p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2020</p>
                                                                        <h3>International Excellence Awards</h3>
                                                                        <p>
                                                                            Nisha Foundation presented "International Excellence Awards" to Bhikkhu Sanghasena in Spain on 27th February 2020, for his outstanding contribution to bring harmony and peace in world & playing a vital role in promoting Buddhism globally.
                                                                        </p>

                                                                        <h3>World Record Star 2020 Certificate and Awards</h3>
                                                                        <p>World Book of Records-London (United Kingdom), a certified company from Quality Certification Limited, London with their World Record Star 2020 Certificate and Awards for his outstanding and tremendous contribution and spreading a spirit of positivity and hope during these testing times of Corona Pandemic on 30th april</p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2021</p>
                                                                        <h3> Dr. APJ Abdul Kalam Award</h3>
                                                                        <p>
                                                                            Was awarded with the 7th Dr. APJ Abdul Kalam Award, on the occasion of UN International Day of Peace for his incredible effort in promoting peace and fostering human values of integrity, compassionate care, brotherly solidarity, and social responsibility extensively on local, national and international level by the All India Council of Human Right, Liberties and Social Justice, Delhi in September 2021.
                                                                        </p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2022</p>
                                                                        <h3> Atal Foundation</h3>
                                                                        <p>
                                                                            Ven. Bhikkhu Sanghasena was honored by Atal Foundation for his outstanding Contribution to society in March 2022, in Indore, Madhya Pradesh.
                                                                        </p>

                                                                        <h3>BHARAT KRITIMAN ALANKARAN</h3>
                                                                        <p>Ven. Bhikkhu Sanghasena was honored with BHARAT KRITIMAN ALANKARAN for is outstanding contributions towards the mother nation by World Book of Records, London in March 2022, at Indore, Madhya Pradesh.</p>

                                                                        <h3>International Festival of Yoga & Meditation</h3>
                                                                        <p>The World Book of Records, London certified and honored MIMC for organizing a mass meditation programme as "International Festival of Yoga & Meditation" at Pangong Lake at a height of 4,225 meters being world's highest saltwater lake on 23 June 2022 involving 500 participants from national and international spheres.</p>

                                                                        <h3>Quality Certification Limited an Int'l Quality Certification body certified MIMC</h3>
                                                                        <p>Quality Certification Limited an Int'l Quality Certification body certified MIMC founded by Ven. Bhikkhu Sanghasena for maintaining quality services and management performance in providing high quality holistic education, fostering, and promoting social and mental harmony, world peace, imparting basic education and empowerment with quality management to fulfill international norms.</p>

                                                                        <h3>Prime Minister's Award for outstanding contribution towards the Development and Promotion of Yoga & Meditation</h3>
                                                                        <p>On the occasion of the Int'l Yoga Day 2022, the Govt. of India has announced the 'Prime Minister's Award for outstanding contribution towards the Development and Promotion of Yoga & Meditation' for 2021 to Ven. Bhikkhu Sanghasena of Ladakh in recognition of his contribution in this sphere.</p>

                                                                        <h3>Swami Rama Humanitarian Award 2022</h3>
                                                                        <p>The Swami Rama Himalayan Institute Hospital Trust and the Swami Rama Himalayan University conferred the 'Swami Rama Humanitarian Award 2022' to Bhikkhu Sanghasena for his outstanding contribution and service to Humanity on 13th of November, 2022 during the Mahasamadhi Diwas of H.H Swami Rama at the Swami Rama Himalayan University. The Award carries an amount of Rs. 5,00,000 (Rupees Five Lakh), a Citation and a Gold medal.</p>
                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2023</p>
                                                                        <h3>Ven. Acharya Buddharakkhita Mahathera International Award</h3>
                                                                        <p>
                                                                            The "Ven. Acharya Buddharakkhita Mahathera International Award" was conferred upon Bhikkhu Sanghasena by the Mahabodhi Society organisations, Bengaluru on the occasion of the Offering of Tribute Ceremony to Ven. Dr. Acharya Buddharakkhita at Mahabodhi Society of Bengaluru.
                                                                        </p>

                                                                        <h3>Katannuta National Award</h3>
                                                                        <p>On the occasion of the Mahakaruna Diwas Celebrations at Kaalamandira, Mysuru, the "Katannuta National Award" was conferred upon Bhikkhu Sanghasena by Kannada & Culture, Gov't of Karnataka & District Minority, Gov't of Karnataka in collaborations with the Mahabodhi Organizations.</p>

                                                                        <h3>World Peacekeeper Award</h3>
                                                                        <p>2023: On the occasion of the FAB DISCON 2023 organized by the Rotary International District 3142 at Hotel Westin Powai, Mumbai, the Rotary International District 3142 presented and honored Bhikkhu Sanghasena with the "World Peacekeeper Award" for inspiring the world with spiritual excellence and creating positive peace in the world by alleviating physical and mental misery in the lives of the people through his various humanitarian and spiritual services over the past more than 30 years.</p>

                                                                        <h3>World Spirituality Promotion Award 2023</h3>
                                                                        <p>On the occasion of the World Spiritual Parliament, Spiritual and Value Education Summit 2023, held at India International centre, New Delhi, on 13th March 2023, Bhikkhu Sanghasena was conferred the prestigious "World Spirituality Promotion Award 2023" for his outstanding contribution in promoting Spirituality for world peace.</p>

                                                                        <h3>EduFuture Excellence Award</h3>
                                                                        <p>on  The prestigious Zee Media "EduFuture Excellence Award conferred to Mahabodhi Residential School for providing quality education to most inaccessible region of country</p>

                                                                        <h3>IAWEP universal peace award</h3>
                                                                        <p>on 16th- 17th July, The prestigious IAWEP universal peace award were conferred to Ven. Bhikkhu Sanghasena for his outstanding contribution in the area of Interfaith studies, Peace promotion and research.</p>

                                                                        <h3>Lifetime Membership</h3>
                                                                        <p>on 12th December The International Film and Television Club, which is a part of the Asian Academy of Film and Television, honored Bhikkhu Sanghasena with its Lifetime Membership.</p>

                                                                    </div>
                                                                </li>

                                                                <li class="timeline-event">
                                                                    <label class="timeline-event-icon"></label>
                                                                    <div class="timeline-event-copy">
                                                                        <p class="timeline-event-thumbnail">2024</p>
                                                                        <h3>𝐏𝐈𝐍𝐍𝐀𝐂𝐋𝐄 𝐎𝐅 𝐏𝐄𝐃𝐀𝐆𝐎𝐆𝐘 𝐀𝐖𝐀𝐑𝐃 𝐅𝐎𝐑 𝐏𝐑𝐎𝐌𝐎𝐓𝐈𝐎𝐍 𝐎𝐅 𝐂𝐎𝐌𝐏𝐀𝐒𝐒𝐈𝐎𝐍</h3>
                                                                        <p>
                                                                            Bhikkhu Sanghasena was conferred with the very prestigious award: "𝐏𝐈𝐍𝐍𝐀𝐂𝐋𝐄 𝐎𝐅 𝐏𝐄𝐃𝐀𝐆𝐎𝐆𝐘 𝐀𝐖𝐀𝐑𝐃 𝐅𝐎𝐑 𝐏𝐑𝐎𝐌𝐎𝐓𝐈𝐎𝐍 𝐎𝐅 𝐂𝐎𝐌𝐏𝐀𝐒𝐒𝐈𝐎𝐍" for his outstanding contribution in the field of education, ecology and world peace.
                                                                        </p>

                                                                        <h3>Mahasaddhammajotikadhaja</h3>
                                                                        <p>On January 4, 2024, the Government of the Republic of the Union of Myanmar awarded Ven. Bhikkhu Sanghasena the title of Mahasaddhammajotikadhaja in recognition of his significant contributions to the purification, perpetuation, and propagation of the Buddha Dhamma.</p>

                                                                        <h3>World Book of Records</h3>
                                                                        <p>World Book of Records, London for holding mass Yoga demonstration at the highest altitude with a maximum number (1000) of participants at the Pangong Tso Lake, Ladakh on 25 June 2024.</p>

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