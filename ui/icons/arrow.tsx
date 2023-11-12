export const Arrow = ({ color = "#fff" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} fill="none">
    <path
      fill={color}
      fillRule="evenodd"
      d="M0 7a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6A.99.99 0 0 0 24 7.004V7c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L20.586 6H1a1 1 0 0 0-1 1Z"
      clipRule="evenodd"
    />
  </svg>
);
