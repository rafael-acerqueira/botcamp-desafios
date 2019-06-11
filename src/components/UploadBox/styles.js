import styled from 'styled-components';

import uploadSvg from '../../images/upload.svg'

export const UploadButton = styled.img.attrs({
  src: uploadSvg,
  alt: "Anexar"
})`
  width: 38px;
  height: 38px;
  position: absolute;
  right: 67px;
  bottom: 6px;
  cursor: pointer;
`;