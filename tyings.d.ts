export type Post = {
  _id?: string;
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

export type Overlay = {
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

export type Button = {
  label: string;
  onClick?:
  | (React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<HTMLAnchorElement>)
  | undefined;
  href?: string | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  variant: string | undefined;
};

export type CheckBox = {
  label: string;
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement> | undefined;
};

export type InputField = {
  alt: string;
  icon: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  value: string;
  iconWidth: number | undefined;
  iconHeight: number | undefined;
};
