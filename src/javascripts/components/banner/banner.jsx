import React, { Component } from 'react';

export class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="content">
          <h1 className="banner__title">Black Friday</h1>
          <div className="banner__description">
            <h2 className="banner__subtitle">
              Pode começar a se despedir da antiga, sua nova lavadora está aqui.
            </h2>
            <span className="banner__badge">APROVEITE</span>
          </div>
          <div className="banner__aside">
            <small className="banner__aside__small">ATÉ</small>
            <big className="banner__aside__big">50%</big>
            <small className="banner__aside__small">
              + BARATO QUE O MERCADO
            </small>
          </div>
        </div>
      </section>
    );
  }
}
