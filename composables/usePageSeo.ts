type PageSeoOptions = {
	title: string;
	description: string;
	path: string;
	noindex?: boolean;
};

const siteName = "Fewzed";
const siteUrl = "https://www.fewzed.co.uk";

/** Sets the metadata shared by every public page. */
export const usePageSeo = ({ title, description, path, noindex = false }: PageSeoOptions) => {
	const canonicalUrl = new URL(path, siteUrl).toString();
	const pageTitle = title === siteName ? siteName : `${title} | ${siteName}`;
	const robots = noindex ? "noindex, nofollow" : "index, follow";

	useSeoMeta({
		title: pageTitle,
		description,
		robots,
		ogTitle: pageTitle,
		ogDescription: description,
		ogType: "website",
		ogUrl: canonicalUrl,
		ogSiteName: siteName,
		twitterCard: "summary",
		twitterTitle: pageTitle,
		twitterDescription: description,
	});

	useHead({
		link: [{ rel: "canonical", href: canonicalUrl }],
	});
};