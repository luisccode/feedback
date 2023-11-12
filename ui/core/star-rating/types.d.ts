export type StarRatingProps = {
  scale?: number;
  rating?: number;
  onChange: (rating: number) => void;
  className?: string;
};

export type StarProps = {
  number: nubmer;
  rating: nubmer;
  onChange: (rating: number) => void;
};
