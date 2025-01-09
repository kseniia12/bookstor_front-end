export interface PropsCustomButton {
  text: string;
  className?: string;
}

export interface PropsCustomInput {
  className?: string;
  placeholder: string;
  icon?: string;
  width: number;
}

export interface Form {
  placeholder: string;
  icon: string;
  label?: string;
}

export interface PropsCustomForm {
  fields: Form[];
  width: number;
  title?: string;
}


