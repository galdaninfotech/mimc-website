import { component$, JSXChildren, JSXNode, Signal } from '@builder.io/qwik';
import { useHomeData } from '~/routes';

interface HeroSection {
  __component: string;
  id: number;
  heading: string;
  theme: string;
  image: {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
  };
  Logo: {
    id: number;
    logoText: string;
    image: any;
  };
  cta: {
    id: number;
    text: string;
    href: string;
    isExternal: boolean;
  };
}

export default component$(() => {
  const data = useHomeData();
  console.log("Data from Strapi:", data.value?.blocks);

  if (!data.value) {
    return <div>Loading...</div>;
  }

  if (!data.value.title) {
    return <div>No data available</div>;
  }

  return (
    <div style="margin-top: 40px; margin-bottom: 40px;">
      <h1 style="color:green;">{data.value.title}</h1>
      <p>{data.value.description}</p>

      <h1 style="color:green;">Blocks</h1>
      {data.value.blocks?.map((block: HeroSection) => (
        <div key={block.id} style={`background-color: ${block.theme}`}>
          <h2>{block.heading}</h2>
          <div>
            <img 
              src={block.image.url} 
              alt={block.image.alternativeText} 
              style="max-width: 300px"
            />
          </div>
          <div>
            {/* <p>{block.Logo.logoText}</p> */}
          </div>
          <a 
            href={block.cta.href}
            target={block.cta.isExternal ? "_blank" : "_self"}
            rel={block.cta.isExternal ? "noopener noreferrer" : ""}
          >
            {block.cta.text}
          </a>
        </div>
      ))}
    </div>
  );
});