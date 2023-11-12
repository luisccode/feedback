export const Triangle = ({ color = "#fff" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" fill="none">
    <path
      fill={color}
      fillRule="evenodd"
      d="M8 0v13L0 6.5 8 0Z"
      clipRule="evenodd"
    />
  </svg>
);
