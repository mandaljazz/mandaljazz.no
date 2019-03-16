import React from "react";
import SpotifyPlayer from "react-spotify-player";
import classNames from "classnames";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "./Artist.css";
import { PulsInfoBox } from "../";

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
    const {
      name,
      imageName,
      paragraphs,
      spotifyUri,
      youtubeUrl,
      soundcloudUserId,
      bands,
      isPulsArtist,
      concertStartAt,
      venue
    } = artist;
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
        {isActive && (
          <div className={styles.ImageWrapper}>
            <img src={getImageUrl(imageName)} alt={name} id={id} />
          </div>
        )}
        {isActive && (
          <div className={styles.ArtistInfo}>
            <h1>{name}</h1>
            <div onClick={e => e.stopPropagation()} style={{ cursor: "text" }}>
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className={styles.ArtistInfoGrid}>
                <div className={styles.ConcertInfo}>
                  <FontAwesomeIcon icon={faClock} />
                  {capitalize(dayjs(concertStartAt).format("dddd HH:mm"))}
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {venue}
                </div>
                <div>
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
                </div>
                {isPulsArtist && <PulsInfoBox artistName={name} />}
                {spotifyUri && <SpotifyPlayer uri={spotifyUri} />}
                {soundcloudUserId && (
                  <iframe
                    title={`${name}-soundcloud-iframe`}
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "200px",
                      maxHeight: "60vh"
                    }}
                    frameBorder="0"
                    scrolling="no"
                    src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/${soundcloudUserId}&amp;color=%233cb371&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=false`}
                  />
                )}
              </div>
              {youtubeUrl && (
                <iframe
                  style={{
                    width: "100%",
                    height: "600px",
                    maxHeight: "60vh",
                    margin: "1rem 0"
                  }}
                  src={youtubeUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${name}-youtube-iframe`}
                />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Artist;
