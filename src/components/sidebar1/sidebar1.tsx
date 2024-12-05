import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './sidebar1.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
        <div id="search-4" class="widget widget_search posts_holder">
            <form role="search" method="get" id="searchform" class="searchform" action="https://mahabodhi=ladakh.com/subway/">
                <div>
                    <label class="screen-reader-text" for="s">Search for:</label>
                    <input type="text" value="" name="s" id="s" placeholder="SEARCH HERE" class="placeholder" />
                    <input type="submit" id="searchsubmit" value="Search" />
                </div>
            </form>
        </div>
        <div id="recent-posts-4" class="widget widget_recent_entries posts_holder">
            <h4>Recent Posts</h4>
            <ul>
                <li>
                    <a href="https://mahabodhi=ladakh.com/subway/web-development-philosophy/">Find a person to sponsor</a>
                </li>
                <li>
                    <a href="https://mahabodhi=ladakh.com/subway/check-it-out/">How we use your money</a>
                </li>
                <li>
                    <a href="https://mahabodhi=ladakh.com/subway/new-audio-post-type/">Important request to sponsors</a>
                </li>
                <li>
                    <a href="https://mahabodhi=ladakh.com/subway/workplace-that-you-will-enyoi/">Sponsorship Form</a>
                </li>
                <li>
                    <a href="https://mahabodhi=ladakh.com/subway/bisuness-for-future/">Contact For Sponsorship</a>
                </li>
            </ul>
        </div>
        <div id="categories-3" class="widget widget_categories posts_holder">
            <h4>Categories</h4>
            <ul>
                <li class="cat-item cat-item-2"><a href="https://mahabodhi=ladakh.com/subway/category/business/">Eduction</a></li>
                <li class="cat-item cat-item-10"><a href="https://mahabodhi=ladakh.com/subway/category/sport/">Welfare</a></li>
                <li class="cat-item cat-item-5"><a href="https://mahabodhi=ladakh.com/subway/category/photography/">Culture</a></li>
            </ul>    
        </div>
        <div id="tag_cloud-3" class="widget widget_tag_cloud posts_holder">
            <h4>Tags</h4>
            <div class="tagcloud"><a href="https://mahabodhi=ladakh.com/subway/tag/audio/" class="tag-cloud-link tag-link-14 tag-link-position-1" style="font-size: 8pt;" aria-label="Audio (1 item)">Education</a>
                <a href="https://mahabodhi=ladakh.com/subway/tag/business/" class="tag-cloud-link tag-link-49 tag-link-position-2" style="font-size: 22pt;" aria-label="Business (3 items)">Sponsorship</a>
                <a href="https://mahabodhi=ladakh.com/subway/tag/development/" class="tag-cloud-link tag-link-16 tag-link-position-3" style="font-size: 8pt;" aria-label="Development (1 item)">Residential School</a>
                <a href="https://mahabodhi=ladakh.com/subway/tag/opportunities/" class="tag-cloud-link tag-link-7 tag-link-position-4" style="font-size: 8pt;" aria-label="Opportunities (1 item)">Opportunities</a>
                <a href="https://mahabodhi=ladakh.com/subway/tag/sport/" class="tag-cloud-link tag-link-50 tag-link-position-5" style="font-size: 22pt;" aria-label="Sport (3 items)">Karuna Hospital</a>
                <a href="https://mahabodhi=ladakh.com/subway/tag/stress/" class="tag-cloud-link tag-link-4 tag-link-position-6" style="font-size: 16.4pt;" aria-label="Stress (2 items)">Gallery</a>
                <a href="https://mahabodhi=ladakh.com/subway/tag/swimming/" class="tag-cloud-link tag-link-15 tag-link-position-7" style="font-size: 8pt;" aria-label="Swimming (1 item)">Past IFBHL</a>
                <a href="https://mahabodhi=ladakh.com/subway/tag/video/" class="tag-cloud-link tag-link-13 tag-link-position-8" style="font-size: 16.4pt;" aria-label="Video (2 items)">Videos</a>
                <a href="https://mahabodhi=ladakh.com/subway/tag/web-design/" class="tag-cloud-link tag-link-9 tag-link-position-9" style="font-size: 8pt;" aria-label="Web Design (1 item)">Online Booking</a>
            </div>
        </div>
    </>
    );
});
