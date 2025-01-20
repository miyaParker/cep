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
