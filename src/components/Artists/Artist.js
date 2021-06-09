import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "./Artist.css";
import { PulsInfoBox, Button } from "../";

const getImageUrl = (imageName) =>
  require(`../../assets/images/artists/${imageName}`);

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
      rightAlignedParagraphs,
      spotifyUri,
      youtubeUrl,
      soundcloudId,
      bands,
      isPulsArtist,
      concertStartAt,
      vimeoId,
      venue,
      link,
      video,
      externalTicketUrl,
    } = artist;
    const style = isActive
      ? {}
      : { backgroundImage: `url(${getImageUrl(imageName)})` };
    return (
      <div
        className={classNames(styles.Artist, className, {
          active: isActive,
          inactive: otherIsActive,
        })}
        style={style}
        onClick={() => (link ? {} : toggleIsActive(id))}
        {...props}
      >
        {!isActive && link && (
          <Link
            to={link}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        )}
        {!isActive && !link && (
          <HashLink
            smooth
            to={`#${id}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        )}
        {!isActive && <h1 className="with-border-left">{name}</h1>}
        {isActive && (
          <div className={styles.ImageWrapper}>
            <img src={getImageUrl(imageName)} alt={name} id={id} />
          </div>
        )}
        {isActive && (
          <div className={styles.ArtistInfo}>
            <h1 className="with-border-left">{name}</h1>
            <div
              className={styles.ArtistInfoGrid}
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: "text" }}
            >
              <div>
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
                {rightAlignedParagraphs &&
                  rightAlignedParagraphs.map((paragraph, index) => (
                    <p
                      key={`right-aligned-${index}`}
                      style={{ direction: "rtl" }}
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
              <div>
                <div className={styles.ConcertInfo}>
                  {concertStartAt && (
                    <>
                      <FontAwesomeIcon icon={faClock} />
                      {capitalize(dayjs(concertStartAt).format("dddd HH:mm"))}
                    </>
                  )}
                  {venue && (
                    <>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      {venue}
                    </>
                  )}
                </div>
                {externalTicketUrl && (
                  <Button
                    asLink
                    style={{ margin: "2rem 1rem" }}
                    linkProps={{
                      href: externalTicketUrl,
                    }}
                  >
                    Kjøp billett hos Buen
                  </Button>
                )}
                {bands && (
                  <div>
                    {Object.keys(bands).map((band) => (
                      <div key={band}>
                        <h4>{band}</h4>
                        <ul>
                          {bands[band].map((musician) => (
                            <li key={musician}>{musician}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {spotifyUri && (
                  <iframe
                    className="SpotifyPlayer"
                    title="spotify"
                    src={`https://open.spotify.com/embed/${spotifyUri}`}
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  />
                )}
                {soundcloudId && (
                  <iframe
                    title={`${name}-soundcloud-iframe`}
                    style={{
                      width: "100%",
                      height: "320px",
                      minHeight: "200px",
                      maxHeight: "60vh",
                    }}
                    frameBorder="0"
                    scrolling="no"
                    src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/${soundcloudId}&amp;color=%233cb371&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=true&amp;show_teaser=false`}
                  />
                )}
                {isPulsArtist && <PulsInfoBox artistName={name} />}
              </div>
            </div>
            {vimeoId && (
              <iframe
                style={{
                  width: "100%",
                  height: "600px",
                  maxHeight: "60vh",
                  margin: "1rem 0",
                }}
                src={`https://player.vimeo.com/video/${vimeoId}`}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title={`${name}-vimeo-iframe`}
              />
            )}
            {youtubeUrl && (
              <iframe
                style={{
                  width: "100%",
                  height: "600px",
                  maxHeight: "60vh",
                  margin: "1rem 0",
                }}
                src={youtubeUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${name}-youtube-iframe`}
              />
            )}
            {video && (
              <video
                controls
                style={{
                  width: "100%",
                  height: "600px",
                  maxHeight: "60vh",
                  margin: "1rem 0",
                }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                controlsList="nodownload"
                onClick={(e) => e.stopPropagation()}
              >
                <source
                  src={require(`../../assets/videos/${video}`)}
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Artist;
