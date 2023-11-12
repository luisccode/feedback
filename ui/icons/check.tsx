export const Check = ({ color = "#F45D6F" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <g clipPath="url(#a)">
      <path
        fill={color}
        fillRule="evenodd"
        d="M23.378 2.054c.73.603.832 1.683.23 2.413L9.823 21.146l-.004.005a3.298 3.298 0 0 1-4.006.839 3.297 3.297 0 0 1-1.135-.934l-.003-.004L.36 15.505A1.714 1.714 0 0 1 3.067 13.4l4.224 5.43L20.964 2.282a1.714 1.714 0 0 1 2.414-.23Z"
        clipRule="evenodd"
      />
    </g>

    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
