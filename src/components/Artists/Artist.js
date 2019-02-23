import React from "react";
import SpotifyPlayer from "react-spotify-player";
import classNames from "classnames";
import { HashLink } from "react-router-hash-link";

import styles from "./Artist.css";

const getImageUrl = imageName => require(`../../assets/images/${imageName}`);

class Artist extends React.Component {
  render() {
    const {
      artist,
      className,
      id,
      isActive,
      otherIsActive,
      toggleIsActive,
      ...props
    } = this.props;
    const { name, imageName, paragraphs, spotifyUri, bands } = artist;
    const style = isActive
      ? {}
      : { backgroundImage: `url(${getImageUrl(imageName)})` };
    return (
      <div
        className={classNames(styles.Artist, className, {
          active: isActive,
          inactive: otherIsActive
        })}
        style={style}
        onClick={() => toggleIsActive(id)}
        {...props}
      >
        {!isActive && (
          <HashLink
            smooth
            to={`#${id}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
          />
        )}
        {!isActive && <h1>{name}</h1>}
        {isActive && <img src={getImageUrl(imageName)} alt={name} id={id} />}
        {isActive && (
          <div className={styles.ArtistInfo}>
            <h1>{name}</h1>
            <div onClick={e => e.stopPropagation()} style={{ cursor: "text" }}>
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around"
                }}
              >
                {Object.keys(bands).map(band => (
                  <div key={band}>
                    <h4>{band}</h4>
                    <ul>
                      {bands[band].map(musician => (
                        <li key={musician}>{musician}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {spotifyUri && (
                  <div style={{ marginBottom: "1rem" }}>
                    <SpotifyPlayer uri={spotifyUri} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Artist;
