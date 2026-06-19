import { useTranslation } from "react-i18next";
import { supportedLngs } from "../../i18n";

const languageNames: Record<string, string> = {
  en: "English",
  es: "Español",
};

function Settings() {
  const { t, i18n } = useTranslation();

  return (
    <div className="view">
      <h1 className="view-title">{t("settings.title")}</h1>

      <section className="panel">
        <label className="field">
          <span className="field-label">{t("settings.language")}</span>
          <select
            className="field-input"
            value={i18n.resolvedLanguage}
            onChange={(event) => i18n.changeLanguage(event.target.value)}
          >
            {supportedLngs.map((lng) => (
              <option key={lng} value={lng}>
                {languageNames[lng]}
              </option>
            ))}
          </select>
        </label>

        <div className="settings-actions">
          <button className="btn btn-secondary">{t("settings.signOut")}</button>
        </div>
      </section>

      {/* Hardcoded regulatory disclosure */}
      <footer className="legal">
        Meridian is a financial technology company, not a bank. Banking services
        are provided by partner banks, Members FDIC.
      </footer>
    </div>
  );
}

export default Settings;
