import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.module.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
        <div class="footer_top_holder">
            <div class="footer_top">
                <div class="container" style="padding: 60px 0 0 0;">
                    <div class="container_inner" style="padding-bottom: 30px;">
                        <div class="four_columns clearfix">

                            <div class="column1">
                                <div class="column_inner">
                                    <div id="text-2" class="widget widget_text">
                                        <div class="textwidget" style="text-align: justify; font-size: 12px; color: burlywood;">
                                            <img class="alignnone size-full wp-image-310" alt="logo" src="/images/logo_footer.png" width="117" height="28" />
                                            <div class="separator transparent" style="margin-top:10px;margin-bottom:5px;"></div>
                                            The Mahabodhi International Meditation Centre had its humble beginnings in one small rented room in Leh in 1986 when Venerable Bhikkhu Sanghasena realized there was a great need to offer both humanitarian and spiritual services to the people of Ladakh.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column2">
                                <div class="column_inner">
                                    <div id="nav_menu-2" class="widget widget_nav_menu">
                                        <h3>MORE LINKS</h3>
                                        <div class="menu-footer_menu-container">
                                            <ul id="menu-footer_menu" class="menu">
                                                <li id="menu-item-2543" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2543"><a href="/about-us/"><i class="fa fa-dharmachakra"></i>About MIMC</a></li>
                                                <li id="menu-item-2544" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2544"><a href="/home-parallax/"><i class="fa fa-dharmachakra"></i>Sambodhi Retreat Centre</a></li>
                                                <li id="menu-item-2545" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2545"><a href="/home-product/"><i class="fa fa-dharmachakra"></i>Mahabodhi Residential School</a></li>
                                                <li id="menu-item-2546" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2546"><a href="/home-shop-3/"><i class="fa fa-dharmachakra"></i>Karuna Charitable Hospital</a></li>
                                                <li id="menu-item-2547" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2547"><a href="/portfolio/five-columns-wide/"><i class="fa fa-dharmachakra"></i>Visually Impaired Hostel</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column3">
                                <div class="column_inner">
                                    <div id="recent-posts-3" class="widget widget_nav_menu">
                                        <h3>SPONSORSHIP</h3>
                                        <ul id="menu-footer_menu" class="menu">
                                            <li id="menu-item-2543" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2543"><a href="/about-us/"><i class="fa fa-dharmachakra"></i>Ways to sponsor</a></li>
                                            <li id="menu-item-2544" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2544"><a href="/home-parallax/"><i class="fa fa-dharmachakra"></i>Find a person to sponsor</a></li>
                                            <li id="menu-item-2545" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2545"><a href="/home-product/"><i class="fa fa-dharmachakra"></i>Mahabodhi Residential School</a></li>
                                            <li id="menu-item-2546" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2546"><a href="/home-shop-3/"><i class="fa fa-dharmachakra"></i>How we use your money</a></li>
                                            <li id="menu-item-2547" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2547"><a href="/portfolio/five-columns-wide/"><i class="fa fa-dharmachakra"></i>Contact Sponsorship</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="column4">
                                <div class="column_inner">
                                    <div id="recent-posts-3" class="widget widget_recent_entries">
                                        <h3>RECENT NEWS</h3>
                                        <ul style="padding: 0;">
                                            <li>
                                                <div>
                                                    <i class="fa fa-dharmachakra" style="margin-right: 8px; color: #ff5300;"></i>
                                                    <a href="/web-development-philosophy/">Hon'ble President at MIMC Campus</a>
                                                </div>
                                                <span class="post-date" style="margin-left: 21px;">21st of August, 2017</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <i class="fa fa-dharmachakra" style="margin-right: 8px; color: #ff5300;"></i>
                                                    <a href="/check-it-out/">Bhikkhu Sanghasena met PM Modi</a>
                                                </div>
                                                <span class="post-date" style="margin-left: 21px;">4th of October, 2019</span>
                                            </li>
                                            <li>
                                                <div>
                                                    <i class="fa fa-dharmachakra" style="margin-right: 8px; color: #ff5300;"></i>
                                                    <a href="/new-audio-post-type/">MIMC participated in Jambudvipa-Suvarnabhumi</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="container_inner" style="border-top: 1px solid rgba(255, 83, 0, .3);">
                        <div class="three_columns clearfix">

                            <div class="column1">
                                <div class="column_inner" style="border: 0;">
                                    <div id="text-2" class="widget widget_text">
                                        <div class="textwidget">
                                            <h3>GET IN TOUCH</h3>
                                            <div class="separator transparent" style="margin-top:10px;margin-bottom:5px;"></div>
                                            <p style="margin:0;"><strong>MIMC Ladakh</strong>, P.O. Box No 22</p>
                                            <p style="margin:0;">Leh Ladakh 194101, India</p>
                                            <p style="margin:0;"><i class="fas fa-envelope-open-text" style="color: #ff5300; margin-right: 8px;"></i><a href="mailto:infomimc@gmail.com">infomimc@gmail.com</a></p>
                                            <p style="margin:0;"><i class="fas fa-phone-square" style="color: #ff5300; margin-right: 8px;"></i><a href="tel:8899194610">+91-8899194610</a></p>
                                            <p style="margin:0;"><i class="fas fa-fax" style="color: #ff5300; margin-right: 8px;"></i><a href="fax:mahabodhiladakh@gmail.com">91-1982-264155</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column2">
                                <div class="column_inner" style="border: 0;">
                                    <div id="nav_menu-2" class="widget widget_nav_menu">
                                        <h3>DOWNLOAD OUR FREE MOBILE APPS</h3>
                                        <div class="menu-footer_menu-container">
                                            <ul>
                                                <li><a href="#"><span class="sprite sprite-android"><img src="/images/android.png" alt="Android App" /></span></a>
                                                </li>
                                                <li><a href="#"><span class="sprite sprite-ios"><img src="/images/ios.png" alt="IOS App" /></span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column3">
                                <div class="column_inner" style="border: 0;">
                                    <div id="recent-posts-3" class="widget widget_recent_entries">
                                        <h3>SOCIAL MEDIA</h3>
                                        <div class="social-icons">
                                            <a href="https://www.facebook.com/mimcladakh"  title="facebook"> <i class="fab fa-facebook-square" aria-hidden="true"></i> </a>
                                            <a href="https://twitter.com/mimc_ladakh" title="twitter"> <i class="fab fa-twitter-square" aria-hidden="true"></i> </a>
                                            <a href="https://instagram.com/mahabodhiladakh" title="instagram"> <i class="fab fa-instagram" aria-hidden="true"></i> </a>
                                            <a href="https://youtube.com/mahabodhiladakh" title="youtube"> <i class="fab fa-youtube-square" aria-hidden="true"></i> </a>
                                            <a href="https://whatsapp.com/mahabodhiladakh" title="whatsapp"> <i class="fab fa-whatsapp social  whatsapp fa-3x"></i> </a>
                                            <a href="#" title="linkedin"> <i class="fab fa-linkedin"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class="vc_row wpb_row " style="text-align:left">
            <section class="section  grid_section" style="background-color:#a30404; border-color:#a30404; padding-top:20px; padding-bottom:20px; height: 55px;">
                <div class="section_inner clearfix">
                    <div class="section_inner_margin clearfix">
                        <div class="wpb_column vc_column_container vc_col-sm-6">
                            <div class="vc_column-inner">
                                <div class="wpb_wrapper">
                                    <div class="wpb_text_column wpb_content_element ">
                                        <div class="wpb_wrapper">
                                            <div class="text-left"><span>© Copyright <a href="https://mahabodhiladakh.org" rel="nofollow noopener" target="_blank"><span style="color:#edc8c8;">Mahabodhi International Meditation Centre</span></a></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-6">
                            <div class="vc_column-inner">
                                <div class="wpb_wrapper">
                                    <div class="vc_row wpb_row vc_inner " style="text-align:right">
                                        <div class="wpb_column vc_column_container vc_col-sm-12">
                                            <div class="vc_column-inner">
                                                <div class="text-right"><span>Developed By <a href="tel:9596690135" rel="nofollow noopener" target="_blank"><span style="color:#edc8c8;">Galdan Infotech</span></a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </footer>
  );
});
