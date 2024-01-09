import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../state/hooks';

import Timer from './timer';
import { resetPrompt } from '../state/prompt.duck';
import Prompt from './prompt';
import Moves from './moves';
import { selectTrainerActive, startTraining } from '../state/trainer.duck';
import Summary from './summary';

export default function TrainerPage() {
  const dispatch = useAppDispatch();

  const isActive = useAppSelector(selectTrainerActive);

  useEffect(() => {
    dispatch(resetPrompt());
  });

  return <div className='trainer-page'>
    {isActive ?
      <>
        <Prompt />
        <Timer />
        <Moves />
      </>
    :
      <>
        <ActivateButton />
        <Summary />
      </>
    }
  </div>
}

function ActivateButton() {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(startTraining());
  }

  return <button onClick={onClick}>Start</button>
}