import { GitFork, Users, ExternalLink, Code2 } from "lucide-react";
import "./GithubCard.css";
import React from "react";
const languages = [
  { name: "HTML", color: "hsl(0, 75%, 55%)", repos: 6 },
  { name: "JavaScript", color: "hsl(50, 90%, 55%)", repos: 5 },
  { name: "Java", color: "hsl(145, 81%, 25%)", repos: 1},
  { name: "PHP", color: "hsl(210, 70%, 55%)", repos: 1 },
];
const maxRepos = Math.max(...languages.map((l) => l.repos));

const GithubCard = () => {
  return (
    <div className="github-card">
      <div className="github-card__header">
        <div className="github-card__profile">
          <div className="github-card__icon">
            <GitFork className="w-5 h-5 text-stat-green" />
          </div>
          <div>
            <div className="github-card__name">Ayush Singh</div>
            <div className="github-card__domain">GITHUB.COM</div>
          </div>
        </div>
        <div className="github-card__live">
          <span className="github-card__live-dot" />
          LIVE
        </div>
      </div>

      <div className="github-card__stats">
        <div className="github-card__stat">
          <div className="github-card__stat-icon">
            <GitFork className="w-5 h-5 mx-auto" />
          </div>
          <div className="github-card__stat-value">15</div>
          <div className="github-card__stat-label">Repos</div>
        </div>
        <div className="github-card__stat">
          <div className="github-card__stat-icon">
            <Code2 className="w-5 h-5 mx-auto" />
          </div>
          <div className="github-card__stat-value">94</div>
          <div className="github-card__stat-label">Contributions</div>
        </div>
        <div className="github-card__stat">
          <div className="github-card__stat-icon">
            <Users className="w-5 h-5 mx-auto" />
          </div>
          <div className="github-card__stat-value">4</div>
          <div className="github-card__stat-label">Followers</div>
        </div>
      </div>

      <div className="github-card__languages-title">
        <Code2 className="w-4 h-4" /> TOP LANGUAGES
      </div>

      {languages.map((lang) => (
        <div className="github-card__lang" key={lang.name}>
          <span
            className="github-card__lang-dot"
            style={{ background: lang.color }}
          />
          <span className="github-card__lang-name">{lang.name}</span>
          <div className="github-card__lang-bar">
            <div
              className="github-card__lang-fill"
              style={{
                width: `${(lang.repos / maxRepos) * 100}%`,
                background: lang.color,
              }}
            />
          </div>
          <span className="github-card__lang-count">{lang.repos}</span>
        </div>
      ))}

      <a
        href="https://github.com/SINGHAYUSH24"
        target="_blank"
        rel="noopener noreferrer"
        className="github-card__link"
      >
        <GitFork className="w-4 h-4" />
        VIEW GITHUB PROFILE
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default GithubCard;
