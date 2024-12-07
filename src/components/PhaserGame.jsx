import React, { useEffect, useRef } from 'react';
import game from '../game/index';

const PhaserGame = () => {
  const gameContainer = useRef(null);

  useEffect(() => {
    game.parent = gameContainer.current;
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameContainer} style={{ width: '100%', height: '100%' }} />;
};

export default PhaserGame;
