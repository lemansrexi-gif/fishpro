import './Icon.css';

const ICONS = {
  camera: (
    <>
      <path d="M4 8h3l1.6-2.2h6.8L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.6" />
    </>
  ),
  assistant: (
    <>
      <path d="M5 4.5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.5L8 21v-3.5H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" />
      <path d="M12 7.6l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" />
    </>
  ),
  fish: (
    <>
      <path d="M2.5 12c2.4-4.2 7.4-5.6 11.4-3.4 1.6.9 2.8 2 3.6 3.4-.8 1.4-2 2.5-3.6 3.4-4 2.2-9 .8-11.4-3.4z" />
      <path d="M17.5 12l4-3.6v7.2z" />
      <circle cx="7.2" cy="11.2" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  album: (
    <>
      <path d="M6 3.5h12" />
      <rect x="3" y="6.5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11.5" r="1.7" />
      <path d="M4.5 19l4.7-4.4 3 2.8 3.3-3.4 4 3.8" />
    </>
  ),
  chevron: <path d="M9 6l6 6-6 6" />,
};

// name: 'camera' | 'assistant' | 'fish' | 'album' | 'chevron'
export default function Icon({ name, className = 'icon' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}
