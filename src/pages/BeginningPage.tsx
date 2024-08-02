import React from 'react';
import { Greetings } from '../components/greetings/Greetings';

export const BeginningPage = ({ header, background, text, id, route}) => {
  return <Greetings header={header} background={background} text={text} />
}