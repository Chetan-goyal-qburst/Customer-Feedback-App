import React from 'react';
import Text from './Text';
import Number from './Number';
import TextArea from './TextArea';
import Rating from './Rating';
import Dropdown from './Dropdown';
import Radio from './Radio';
import TypeAhead from './TypeAhead';
import CheckBox from './CheckBox';

export default function SelectedOption({ answerType }) {
  switch (answerType) {
    case 'text':
      return <Text />;
    case 'number':
      return <Number/>;
    case 'textarea':
      return <TextArea/>;
    case 'rating':
      return <Rating/>;
    case 'dropdown':
      return <Dropdown/>;
    case 'radio':
      return <Radio/>;
    case 'typeahead':
      return <TypeAhead/>;
    case 'checkbox':
      return <CheckBox/>;
    default:
      return null;
  }
}
