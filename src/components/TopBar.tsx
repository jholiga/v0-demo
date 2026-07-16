import { IconButton, Avatar } from "../design-system";

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-spacer" />
      <div className="topbar-actions">
        <IconButton aria-label="Search, DPay">
          <span aria-hidden="true">⌕</span>
        </IconButton>
        <IconButton aria-label="View Notifications">
          <span aria-hidden="true">◔</span>
        </IconButton>
        <Avatar src="/avatar.svg" alt="Your Profile Photo" />
      </div>
    </header>
  );
}

export default TopBar;
