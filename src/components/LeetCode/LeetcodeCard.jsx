import { Zap, TrendingUp, Globe, ExternalLink, Trophy } from "lucide-react";
import "./LeetcodeCard.css";
import React from "react";
const total = 107;
const easy = { solved: 31, total: 933 };
const medium = { solved: 69, total: 2029 };
const hard = { solved: 7, total: 916 };

const circumference = 2 * Math.PI * 45;

const LeetcodeCard = () => {
  const easyPct = (easy.solved / easy.total) * 100;
  const mediumPct = (medium.solved / medium.total) * 100;
  const hardPct = (hard.solved / hard.total) * 100;

  // Donut segments
  const easyArc = (easy.solved / total) * circumference;
  const mediumArc = (medium.solved / total) * circumference;
  const hardArc = (hard.solved / total) * circumference;

  return (
    <div className="leetcode-card">
      <div className="leetcode-card__header">
        <div className="leetcode-card__profile">
          <div className="leetcode-card__icon">
            <Zap className="w-5 h-5 text-stat-orange" />
          </div>
          <div>
            <div className="leetcode-card__name">Ayush Singh</div>
            <div className="leetcode-card__domain">LEETCODE.COM</div>
          </div>
        </div>
        <div className="leetcode-card__live">
          <span className="leetcode-card__live-dot" />
          LIVE
        </div>
      </div>

      <div className="leetcode-card__main">
        <div className="leetcode-card__donut-wrap">
          <svg className="leetcode-card__donut-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(220, 35%, 12%)" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="45" fill="none"
              stroke="hsl(145, 70%, 50%)" strokeWidth="8"
              strokeDasharray={`${easyArc} ${circumference - easyArc}`}
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            <circle
              cx="50" cy="50" r="45" fill="none"
              stroke="hsl(50, 90%, 55%)" strokeWidth="8"
              strokeDasharray={`${mediumArc} ${circumference - mediumArc}`}
              strokeDashoffset={`${-easyArc}`}
              strokeLinecap="round"
            />
            <circle
              cx="50" cy="50" r="45" fill="none"
              stroke="hsl(0, 75%, 55%)" strokeWidth="8"
              strokeDasharray={`${hardArc} ${circumference - hardArc}`}
              strokeDashoffset={`${-(easyArc + mediumArc)}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="leetcode-card__donut-label">
            <span className="leetcode-card__donut-value">{total}</span>
            <span className="leetcode-card__donut-text">Solved</span>
          </div>
        </div>

        <div className="leetcode-card__difficulties">
          <div className="leetcode-card__diff">
            <div className="leetcode-card__diff-header">
              <span className="leetcode-card__diff-label-green">EASY</span>
              <span className="leetcode-card__diff-count">{easy.solved} / {easy.total}</span>
            </div>
            <div className="leetcode-card__diff-bar">
              <div className="leetcode-card__diff-fill bg-stat-green" style={{ width: `${easyPct}%` }} />
            </div>
          </div>
          <div className="leetcode-card__diff">
            <div className="leetcode-card__diff-header">
              <span className="leetcode-card__diff-label-yellow">MEDIUM</span>
              <span className="leetcode-card__diff-count">{medium.solved} / {medium.total}</span>
            </div>
            <div className="leetcode-card__diff-bar">
              <div className="leetcode-card__diff-fill bg-stat-yellow" style={{ width: `${mediumPct}%` }} />
            </div>
          </div>
          <div className="leetcode-card__diff">
            <div className="leetcode-card__diff-header">
              <span className="leetcode-card__diff-label-red">HARD</span>
              <span className="leetcode-card__diff-count">{hard.solved} / {hard.total}</span>
            </div>
            <div className="leetcode-card__diff-bar">
              <div className="leetcode-card__diff-fill bg-stat-red" style={{ width: `${hardPct}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="leetcode-card__bottom-stats">
        <div className="leetcode-card__bottom-stat">
          <div className="leetcode-card__bottom-stat-label">
            <TrendingUp className="w-3.5 h-3.5" /> CONTEST RATING
          </div>
          <div className="leetcode-card__bottom-stat-value">1521</div>
        </div>
        <div className="leetcode-card__bottom-stat">
          <div className="leetcode-card__bottom-stat-label">
            <Globe className="w-3.5 h-3.5" /> GLOBAL RANK
          </div>
          <div className="leetcode-card__bottom-stat-value">#960,000</div>
        </div>
      </div>

      <a
        href="https://leetcode.com/u/Ael61SVNNu/"
        target="_blank"
        rel="noopener noreferrer"
        className="leetcode-card__link"
      >
        <Trophy className="w-4 h-4" />
        VIEW LEETCODE PROFILE
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default LeetcodeCard;
