import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
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
                            <h1 style="padding: 0; margin: 0;">Gallery</h1>
                            <div class="breadcrumb">
                                <div class="breadcrumbs">
                                    <a href="https://mahabodhi=ladakh.com/subway/">Home</a>
                                    <span class="delimiter">&gt;</span><span class="current">About</span>
                                    <span class="delimiter">&gt;</span><span class="current">Gallery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="container">
                <div class="container_inner clearfix">
                    <div class="portfolio_single">
                        <div class="portfolio_gallery">
                            <a class="lightbox_single_portfolio v3" title="Image Title" href="/images/gallery/image1.jpg" data-rel="prettyPhoto[single_pretty_photo]" rel="prettyPhoto[single_pretty_photo]">
                                <span class="gallery_text_holder">
                                    <span class="gallery_text_inner"> <h4>Image Title</h4> </span>
                                </span>
                                <img src="/images/gallery/image1.jpg" alt="" />
                            </a>

                            <a class="lightbox_single_portfolio v3" title="Image Title" href="/images/gallery/image2.jpg" data-rel="prettyPhoto[single_pretty_photo]" rel="prettyPhoto[single_pretty_photo]">
                                <span class="gallery_text_holder">
                                    <span class="gallery_text_inner"> <h4>Image Title</h4> </span>
                                </span>
                                <img src="/images/gallery/image2.jpg" alt="" />
                            </a>

                            <a class="lightbox_single_portfolio v3" title="Image Title" href="/images/gallery/image3.jpg" data-rel="prettyPhoto[single_pretty_photo]" rel="prettyPhoto[single_pretty_photo]">
                                <span class="gallery_text_holder">
                                    <span class="gallery_text_inner"> <h4>Image Title</h4> </span>
                                </span>
                                <img src="/images/gallery/image3.jpg" alt="" />
                            </a>

                            <a class="lightbox_single_portfolio v3" title="Image Title" href="/images/gallery/image4.jpg" data-rel="prettyPhoto[single_pretty_photo]" rel="prettyPhoto[single_pretty_photo]">
                                <span class="gallery_text_holder">
                                    <span class="gallery_text_inner"> <h4>Image Title</h4> </span>
                                </span>
                                <img src="/images/gallery/image4.jpg" alt="" />
                            </a>

                            <a class="lightbox_single_portfolio v3" title="Image Title" href="/images/gallery/image5.jpg" data-rel="prettyPhoto[single_pretty_photo]" rel="prettyPhoto[single_pretty_photo]">
                                <span class="gallery_text_holder">
                                    <span class="gallery_text_inner"> <h4>Image Title</h4> </span>
                                </span>
                                <img src="/images/gallery/image5.jpg" alt="" />
                            </a>

                            <a class="lightbox_single_portfolio v3" title="Image Title" href="/images/gallery/image6.jpg" data-rel="prettyPhoto[single_pretty_photo]" rel="prettyPhoto[single_pretty_photo]">
                                <span class="gallery_text_holder">
                                    <span class="gallery_text_inner"> <h4>Image Title</h4> </span>
                                </span>
                                <img src="/images/gallery/image6.jpg" alt="" />
                            </a>

                            <a class="lightbox_single_portfolio v3" title="Image Title" href="/images/gallery/image7.jpg" data-rel="prettyPhoto[single_pretty_photo]" rel="prettyPhoto[single_pretty_photo]">
                                <span class="gallery_text_holder">
                                    <span class="gallery_text_inner"> <h4>Image Title</h4> </span>
                                </span>
                                <img src="/images/gallery/image7.jpg" alt="" />
                            </a>

                            <a class="lightbox_single_portfolio v3" title="Image Title" href="/images/gallery/image8.jpg" data-rel="prettyPhoto[single_pretty_photo]" rel="prettyPhoto[single_pretty_photo]">
                                <span class="gallery_text_holder">
                                    <span class="gallery_text_inner"> <h4>Image Title</h4> </span>
                                </span>
                                <img src="/images/gallery/image8.jpg" alt="" />
                            </a>

                            <a class="lightbox_single_portfolio v3" title="Image Title" href="/images/gallery/image9.jpg" data-rel="prettyPhoto[single_pretty_photo]" rel="prettyPhoto[single_pretty_photo]">
                                <span class="gallery_text_holder">
                                    <span class="gallery_text_inner"> <h4>Image Title</h4> </span>
                                </span>
                                <img src="/images/gallery/image9.jpg" alt="" />
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
             
        </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Gallery',
  meta: [
    {
      name: 'description',
      content: 'Gallery',
    },
  ],
};