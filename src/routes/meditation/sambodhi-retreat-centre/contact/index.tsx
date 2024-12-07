import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <div class="content" style="min-height: 150px;">
        <div class="content_inner">
            <div class="title" style="min-height: 150px;">
                <div class="title_holder" style="opacity: 1;">
                    <div class="container">
                        <div class="container_inner clearfix" style="padding: 0;">
                            <h1 style="padding: 0; margin: 0;">Contact Us</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="/">Home</a><span class="delimiter">&gt;</span>
                                    <a href="/">Meditation</a><span class="delimiter">&gt;</span>
                                    <a href="/">Sambodhi Retreat Centre</a><span class="delimiter">&gt;</span>
                                    <span class="current">Contact Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="container">
                <div class="container_inner clearfixfull_map">
                    <div class="two_columns_66_33 clearfix grid2">
                        <div class="column1">
                            <div class="column_inner">
                                <div class="contact_form">
                                    <h3 style="color: #000; font-size: 18px;">CONTACT US</h3>
                                    <form id="contact-form" method="post" action="">
                                        <div class="two_columns_50_50 clearfix">
                                            <div class="column1">
                                                <div class="column_inner">
                                                    <input type="text" class="requiredField placeholder" name="fname" id="fname" value="" placeholder="FIRST NAME *" />
                                                </div>
                                            </div>
                                            <div class="column2">
                                                <div class="column_inner">
                                                    <input type="text" class="requiredField placeholder" name="lname" id="lname" value="" placeholder="LAST NAME *" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="two_columns_50_50 clearfix">
                                            <div class="column1">
                                                <div class="column_inner">
                                                    <input type="text" class="requiredField email placeholder" name="email" id="email" value="" placeholder="EMAIL *" />
                                                </div>
                                            </div>
                                            <div class="column2">
                                                <div class="column_inner">
                                                    <input type="text" name="website" id="website" value="" placeholder="WEB SITE" class="placeholder" />
                                                </div>
                                            </div>
                                        </div>
                                        <textarea name="message" id="message" rows={10} placeholder="MESSAGE" class="placeholder"></textarea>
                                        <span class="submit_button_contact">
                                        <input class="qbutton with_shadow qode-contact-page-button" type="submit" value="CONTACT US" />
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="column2">
                            <div class="column_inner">
                                <div class="contact_info">
                                    <section class="wpb-content-wrapper">
                                        <div class="vc_row wpb_row " style="text-align:left">
                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner">
                                                    <div class="wpb_wrapper" style="color: #6e6e6e;">
                                                        <div class="wpb_text_column wpb_content_element ">
                                                            <div class="wpb_wrapper">
                                                                <h3 style="color: #000; font-size: 18px;">OUR OFFICES</h3>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="separator transparent" style="margin-top:0px;margin-bottom:15px;"></div>
                                                        <div class="wpb_text_column wpb_content_element ">
                                                            <div class="wpb_wrapper">
                                                                <p>Need help or do you have any Wishes or Questions? Just drop us a line and get more information!</p>
                                                            </div>
                                                        </div>

                                                        <div class="separator transparent" style="margin-top:0px;margin-bottom:15px;"></div>
                                                        <p style="margin:0;"><strong>MIMC Ladakh</strong> Box No 22</p>
                                                        <p style="margin:0;">Leh Ladakh 194101, India</p>

                                                        <div class="separator transparent" style="margin-top:0px;margin-bottom:15px;"></div>
                                                        <p style="margin:0;"><i class="fas fa-envelope-open-text" style="color: #ff5300; margin-right: 8px;"></i><a href="mailto:infomimc@gmail.com">infomimc@gmail.com</a></p>
                                                        <p style="margin:0;"><i class="fas fa-envelope-open-text" style="color: #ff5300; margin-right: 8px;"></i><a href="mailto:mimcpresidentoffice@gmail.com">mimcpresidentoffice@gmail.com</a></p>
                                                        <p style="margin:0;"><i class="fas fa-phone-square" style="color: #ff5300; margin-right: 8px;"></i><a href="tel:mahabodhiladakh@gmail.com">91-19 82-264372</a></p>
                                                        <p style="margin:0;"><i class="fas fa-phone-square" style="color: #ff5300; margin-right: 8px;"></i><a href="tel:mahabodhiladakh@gmail.com">+91-8899194610</a></p>
                                                        <p style="margin:0;"><i class="fas fa-phone-square" style="color: #ff5300; margin-right: 8px;"></i><a href="tel:mahabodhiladakh@gmail.com">+91-9906982025</a></p>
                                                        <p style="margin:0;"><i class="fas fa-fax" style="color: #ff5300; margin-right: 8px;"></i><a href="fax:mahabodhiladakh@gmail.com">91-1982-264155</a></p>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
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
  title: 'Contact Us',
  meta: [
    {
      name: 'description',
      content: 'Contact Us',
    },
  ],
};