import React from 'react';
import './index.scss';

const LatestUpdate = () => {
  return (
    <div className="latest-update-container">
      {/* First Box */}
      <div className="latest-update-box">
        <h3 className="latestHeader blinking-textHeader">Latest Updates</h3>
        <ul className="news-list">
          <li className="news-item">
            <span className="blinking-text">New:</span> New feature released for Aple E-Sarkar.
          </li>
          <li className="news-item">
            Update 2: Maintenance scheduled for tomorrow at 3:00 PM.
          </li>
        </ul>
      </div>

      {/* Second Box */}
      <div className="latest-update-box">
        <h3 className="latestHeader">Other Updates</h3>
        <ul className="news-list">
          <li className="news-item">
            Update 3: System upgrade scheduled for next week.
          </li>
          <li className="news-item">
            Update 4: User feedback survey available.
          </li>
        </ul>
      </div>

      {/* Third Box for Ads */}
      <div className="latest-update-box ads-box">
        <h3 className="latestHeader">Advertisements</h3>
        <ul className="news-list">
          <li className="news-item">
            <span className="blinking-text">Ad 1:</span> Check out the latest discounts on Aple products!
          </li>
          <li className="news-item">
            <span className="blinking-text">Ad 2:</span> Special offer: Get 20% off on all subscriptions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatestUpdate;
