function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <g fill="#0F5C3E">
        <ellipse cx="20" cy="8" rx="6" ry="7" />
        <ellipse cx="32" cy="14" rx="6" ry="7" transform="rotate(60 32 14)" />
        <ellipse cx="32" cy="26" rx="6" ry="7" transform="rotate(120 32 26)" />
        <ellipse cx="20" cy="32" rx="6" ry="7" />
        <ellipse cx="8" cy="26" rx="6" ry="7" transform="rotate(60 8 26)" />
        <ellipse cx="8" cy="14" rx="6" ry="7" transform="rotate(120 8 14)" />
      </g>
      <circle cx="20" cy="20" r="4.5" fill="#F4C430" />
    </svg>
  );
}

export default LogoMark;
