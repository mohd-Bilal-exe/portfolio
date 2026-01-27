import { Helmet } from 'react-helmet';

type SeoProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  lang?: string;
  noIndex?: boolean;
};

export default function Seo({
  title = 'Mohammad Bilal — Portfolio',
  description = 'I engineer scalable digital experiences. Based in Lucknow, Uttar Pradesh, India.',
  url,
  image,
  lang = 'en',
  noIndex = false,
}: SeoProps) {
  // runtime-safe defaults
  const resolvedUrl = url ?? (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {resolvedUrl && <meta property="og:url" content={resolvedUrl} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
