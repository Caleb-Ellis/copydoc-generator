import * as markup from "./markup";

const stripTypes = [
  {
    name: "hero",
    label: "Hero"
  },
  {
    name: "key-features",
    label: "Key features"
  },
  {
    name: "proposition",
    label: "Proposition"
  },
  {
    name: "detail",
    label: "Detail"
  },
  {
    name: "embed",
    label: "Embed"
  },
  {
    name: "comparison",
    label: "Comparison"
  },
  {
    name: "credibility",
    label: "Credibility"
  },
  {
    name: "links",
    label: "Links"
  },
  {
    name: "instructions",
    label: "Instructions"
  },
  {
    name: "tail",
    label: "Tail"
  },
  {
    name: "footer",
    label: "Footer"
  }
];

const stripExamples = [
  {
    type: "hero",
    name: "Basic with image",
    description: "Basic hero strip with an image of the product/service",
    jsx: markup.HeroBasic,
    title: "Headline in six words broken nicely",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia doloremque aspernatur soluta quidem eos dolor laudantium recusandae explicabo, labore excepturi consequuntur, deserunt, veritatis ab alias unde velit amet illum fugiat ipsa. Laborum et blanditiis aspernatur dolorem odit assumenda porro enim minus ad quod, beatae obcaecati quae corporis quos eveniet.",
    imageSrc: "https://via.placeholder.com/275"
  },
  {
    type: "hero",
    name: "Video",
    description: "Hero with a small video",
    jsx: markup.HeroVideo
  },
  {
    type: "key-features",
    name: "Grid icons 3 x 3",
    description:
      "Needs a uniform set of monochrome icons. Icons not usually links",
    jsx: markup.KeyFeaturesGridIcons3x3
  },
  {
    type: "key-features",
    name: "Grid text only 3 x 3",
    description: "~20 words for each key point",
    jsx: markup.KeyFeaturesGridTextOnly3x3
  },
  {
    type: "key-features",
    name: "Tick list black",
    description: "Simple ticked list of a product or service's key features",
    jsx: markup.KeyFeaturesTickListBlack
  },
  {
    type: "key-features",
    name: "Tick list large orange",
    description: "Short sentence ticklist. Usually orange.",
    jsx: markup.KeyFeaturesTickListLargeOrange
  },
  {
    type: "proposition",
    name: "Feature benefit",
    description: "Feature-benefit tree as used on maas.io",
    jsx: markup.PropositionFeatureBenefit
  },
  {
    type: "proposition",
    name: "Short with learn more",
    description: "Use in sets of two or three",
    jsx: markup.PropositionShortWithLearnMore
  },
  {
    type: "proposition",
    name: "Sub group with pair",
    description: "Two sub-headed paragraphs",
    jsx: markup.PropositionSubGroupWithPair
  },
  {
    type: "proposition",
    name: "Three themes",
    description: "Use with photography or illustration",
    jsx: markup.Proposition3Themes
  },
  {
    type: "detail",
    name: "Text L image R",
    description: "Text with related image",
    jsx: markup.DetailTextLImageR
  },
  {
    type: "detail",
    name: "Text L text R",
    description: "",
    jsx: markup.DetailTextLTextR
  },
  {
    type: "embed",
    name: "Code",
    description: "Multi line code sample, for cutting and pasting",
    jsx: markup.EmbedCode
  },
  {
    type: "comparison",
    name: "Feature price table",
    description: "Granular presense or absence, feature by feature",
    jsx: markup.ComparisionFeaturePriceTable
  },
  {
    type: "comparison",
    name: "Feature price cards",
    description:
      "Cards declare make the main choice clear, then detail the features",
    jsx: markup.ComparisonFeaturePriceCards
  },
  {
    type: "credibility",
    name: "Logo cloud",
    description: "Logos of partners, for example",
    jsx: markup.CredibilityLogoCloud
  },
  {
    type: "credibility",
    name: "Quote supporting claim",
    description: "The quotes shuold directly support the text",
    jsx: markup.CredibilityQuoteSupportingClaimLong
  },
  {
    type: "credibility",
    name: "Three quotes",
    description: "Two sentences ~40 words, max for each of the three quotes",
    jsx: markup.CredibilityThreeQuotes
  },
  {
    type: "links",
    name: "Three blog posts with date",
    description: "Blogposts, or other dated links, needing regular updates",
    jsx: markup.Links3BlogPostsWithDate
  },
  {
    type: "links",
    name: "Three resources category icons",
    description:
      "Variety of kinds of link made clear with iconography. Typically for evergreen resources",
    jsx: markup.Links3ResourcesCategoryIcons
  },
  {
    type: "links",
    name: "Cards grid 2 x 2",
    description:
      "Shows longer links to content that need longer ~30 word intros",
    jsx: markup.LinksCardsGrid2x2
  },
  {
    type: "instructions",
    name: "Numbered steps",
    description: "",
    jsx: markup.InstructionsNumberedSteps
  },
  {
    type: "tail",
    name: "Three col CTA reading",
    description: "Provide choice of onward journeys at the end of the page",
    jsx: markup.Tail3ColCTAReading
  },
  {
    type: "tail",
    name: "Headline CTA",
    description:
      "Headline and call to action, e.g. Install, Try now, Learn more",
    jsx: markup.TailHeadlineCTA
  },
  {
    type: "tail",
    name: "Micro nav",
    description:
      "Stand-alone sites can offer a mini-sitemap at the end of the page",
    jsx: markup.TailMicronav
  },
  {
    type: "footer",
    name: "Legal",
    description:
      "Optionally add build details, thank-yous, support and feedback links",
    jsx: markup.FooterLegal
  }
];

export { stripTypes, stripExamples };
