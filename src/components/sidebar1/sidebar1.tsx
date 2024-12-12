import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './sidebar1.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
        <div id="recent-posts-4" class="widget widget_recent_entries posts_holder">
            <h4>Recent Posts</h4>
            <ul>
                <li>
                    <a href="https://mahabodhi=ladakh.com/">Find a person to sponsor</a>
                </li>
                <li>
                    <a href="https://mahabodhi=ladakh.com/">How we use your money</a>
                </li>
                <li>
                    <a href="https://mahabodhi=ladakh.com/">Important request to sponsors</a>
                </li>
                <li>
                    <a href="https://mahabodhi=ladakh.com/">Sponsorship Form</a>
                </li>
                <li>
                    <a href="https://mahabodhi=ladakh.com/">Contact For Sponsorship</a>
                </li>
            </ul>
        </div>
        <div id="categories-3" class="widget widget_categories posts_holder">
            <h4>Categories</h4>
            <ul>
                <li class="cat-item cat-item-2"><a href="https://mahabodhi=ladakh.com/">Eduction</a></li>
                <li class="cat-item cat-item-5"><a href="https://mahabodhi=ladakh.com/">Culture</a></li>
                <li class="cat-item cat-item-10"><a href="https://mahabodhi=ladakh.com/">Welfare</a></li>
                <li class="cat-item cat-item-5"><a href="https://mahabodhi=ladakh.com/">Health</a></li>
                <li class="cat-item cat-item-5"><a href="https://mahabodhi=ladakh.com/">Meditation</a></li>
                <li class="cat-item cat-item-5"><a href="https://mahabodhi=ladakh.com/">Yoga</a></li>
            </ul>    
        </div>
        <div id="tag_cloud-3" class="widget widget_tag_cloud posts_holder">
            <h4>Tags</h4>
            <div class="tagcloud"><a href="https://mahabodhi=ladakh.com/" class="tag-cloud-link tag-link-14 tag-link-position-1" style="font-size: 8pt;" aria-label="Audio (1 item)">Education</a>
                <a href="https://mahabodhi=ladakh.com/" class="tag-cloud-link tag-link-49 tag-link-position-2" style="font-size: 22pt;" aria-label="Business (3 items)">Sponsorship</a>
                <a href="https://mahabodhi=ladakh.com/" class="tag-cloud-link tag-link-16 tag-link-position-3" style="font-size: 8pt;" aria-label="Development (1 item)">Residential School</a>
                <a href="https://mahabodhi=ladakh.com/" class="tag-cloud-link tag-link-7 tag-link-position-4" style="font-size: 8pt;" aria-label="Opportunities (1 item)">Opportunities</a>
                <a href="https://mahabodhi=ladakh.com/" class="tag-cloud-link tag-link-50 tag-link-position-5" style="font-size: 22pt;" aria-label="Sport (3 items)">Karuna Hospital</a>
                <a href="https://mahabodhi=ladakh.com/" class="tag-cloud-link tag-link-4 tag-link-position-6" style="font-size: 16.4pt;" aria-label="Stress (2 items)">Gallery</a>
                <a href="https://mahabodhi=ladakh.com/" class="tag-cloud-link tag-link-15 tag-link-position-7" style="font-size: 8pt;" aria-label="Swimming (1 item)">Past IFBHL</a>
                <a href="https://mahabodhi=ladakh.com/" class="tag-cloud-link tag-link-13 tag-link-position-8" style="font-size: 16.4pt;" aria-label="Video (2 items)">Videos</a>
                <a href="https://mahabodhi=ladakh.com/" class="tag-cloud-link tag-link-9 tag-link-position-9" style="font-size: 8pt;" aria-label="Web Design (1 item)">Online Booking</a>
            </div>
        </div>
    </>
    );
});
