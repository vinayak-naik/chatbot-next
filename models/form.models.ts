export interface OptionsIF {
  key: string;
  value: string;
}
export interface FormIF {
  type?: string;
  label: string;
  name: string;
  options?: OptionsIF[];
}

export interface ContactUsFormIF {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}
export interface AddBlogFormIF {
  title: string;
  tag: string;
  imageUrl: string;
  description: string;
}
