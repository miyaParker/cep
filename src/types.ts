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
