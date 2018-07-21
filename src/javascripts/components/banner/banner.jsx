import React, { Component } from 'react';
import PercentBadgeIcon from 'javascripts/components/icons/percent-badge-icon';

export class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="content banner__content">
          <h1 className="banner__title arial-large">Black Friday</h1>
          <div className="banner__description">
            <h2 className="banner__subtitle arial-sub">
              Pode começar a se despedir da antiga, sua nova lavadora está aqui.
            </h2>
            <span className="banner__badge">APROVEITE</span>
          </div>
          <div className="banner__aside">
            <small className="banner__aside__small arial-sub-caps">ATÉ</small>
            <div className="banner__discount">
              <big className="banner__aside__big arial-huge">50</big>
              <PercentBadgeIcon className="banner__discount__badge" />
            </div>
            <small className="banner__aside__small arial-sub-caps">
              + BARATO QUE O MERCADO
            </small>
          </div>
        </div>
      </section>
    );
  }
}
