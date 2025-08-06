export interface TabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    activeTabStyle: string;
}

export interface TabsProps {
    activeTab: string;
    onClickTab: (tab: string) => void;
    activeTabStyle: string;
}

export interface Term {
    name: string;
}

export interface CustomFields {
    editor_name: string;
    editor_position: string;
}

export interface Post {
    slug: string;
    title: string;
    terms: Term[];
    featured_image: string;
    content?: string;
    excerpt?: string;
    custom_fields: CustomFields
}
export interface AffiliateCentre {
    image: string
    title: string;
    description: string[];
    arrow: any;
    link: string
}
type SectionArray = Section[];

interface Section {
    title: string;
    links: { text: string; link: string }[];
}

export interface GetInvolvedLinkSectionProps {
    section: Section | SectionArray;
}

// Cloudflare Turnstile types
declare global {
  interface Window {
    turnstile: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
        }
      ) => void;
    };
    onTurnstileSuccess: (token: string) => void;
  }
}
