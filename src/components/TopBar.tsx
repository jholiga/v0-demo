function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-spacer" />
      <div className="topbar-actions">
        {/* Hardcoded labels — not yet localized */}
        <button className="icon-button" aria-label="Search Ditto Pay">
          <span aria-hidden="true">⌕</span>
        </button>
        <button className="icon-button" aria-label="View notifications">
          <span aria-hidden="true">◔</span>
        </button>
        <button className="avatar-button" aria-label="Open account menu">
          <img src="/avatar.svg" alt="Your profile photo" className="avatar" />
        </button>
      </div>
    </header>
  );
}

export default TopBar;
