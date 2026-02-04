import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  canonicalPath?: string;
};

export function Seo({ title, description, canonicalPath }: SeoProps) {
  const canonical =
    typeof window !== "undefined" && canonicalPath
      ? new URL(canonicalPath, window.location.origin).toString()
      : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#0ea5a4" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  );
}
