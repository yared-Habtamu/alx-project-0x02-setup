export interface ExampleInterface {
  id: number;
  name: string;
}

export interface CardProps {
  title: string;
  content: string;
}


export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; content: string }) => void;
  }
  