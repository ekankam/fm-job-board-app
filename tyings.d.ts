export type Post = {
  _id?: string;
  slug?: {
    current: string;
  };
  postedAt: string;
  position: string;
  contract: string;
  company: string;
  location: string;
  logo: string;
  logoBackgroundColor: string;
};

export type Posts = {
  data: Post[];
};

export interface PostDetails extends Post {
  websiteLink: string;
  applicationLink: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export type OverlayProps = {
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onCheck: React.MouseEventHandler<HTMLInputElement> | undefined;
  onSearch:
  | (React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<HTMLAnchorElement>)
  | undefined;
  value: string;
  isModalOpen: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
};

export type ButtonProps = {
  label: string;
  onClick?:
  | (React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<HTMLAnchorElement>)
  | undefined;
  href?: string | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  variant: string | undefined;
  className?: string;
};

export type CheckBoxProps = {
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement> | undefined;
};

export type InputFieldProps = {
  alt: string;
  icon: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  value: string;
  iconWidth: number | undefined;
  iconHeight: number | undefined;
};
