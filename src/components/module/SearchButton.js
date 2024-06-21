import React from 'react';
import styled from 'styled-components';
import btIqSearch from '../../assets/images/bt_iq_search.png';
import hideBtn from '../../assets/images/hideBtn.png';

const SearchIcon = ({ text, ...props }) => {
  return <a {...props}>{text}</a>;
};

const SearchButton = styled(SearchIcon)`
  left: ${props => (props.$show ? '-90px' : '-160px')};
  position: absolute;
  top: 14px;
  width: 54px;
  height: 54px;
  background: ${props =>
    props.$show ? `url(${hideBtn})` : `url(${btIqSearch})`};
  border-radius: 100%;
  text-indent: -9999px;
  cursor: pointer;
`;

export default SearchButton;
