import React from 'react';
// FA icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  isPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  playSongHandler,
  skipTrackHandler,
  currentSong,
}) => {
  const dragHandler = (e) => {
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };
  // style
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  const linear = {
    backgroundImage: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  return (
    <div className='player-container'>
      <div className='time-control'>
        <pre>{getTime(songInfo.currentTime)}</pre>
        <div className='track' style={linear}>
          <input
            type='range'
            min={0}
            max={songInfo.duration ? songInfo.duration : '0:00'}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div className='animate-track' style={trackAnim}></div>
        </div>
        <pre>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</pre>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size='2x'
          className='skip-back'
          onClick={() => skipTrackHandler('skip-back')}
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size='2x'
          className='play'
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size='2x'
          className='skip-forward'
          onClick={() => skipTrackHandler('skip-forward')}
        />
      </div>
    </div>
  );
};

export default Player;
