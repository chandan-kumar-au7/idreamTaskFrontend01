import React from 'react';
import { Row, FullColumn } from '../../../components/utility/rowColumn';
import Dropzone from '../../../components/uielements/dropzone.js';
import notification from '../../../components/notification';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Papersheet from '../../../components/utility/papersheet';
import DropzoneWrapper from './dropzone.style';

export default function() {
  const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    method: true,
    showFiletypeIcon: true,
    uploadMultiple: false,
    maxFilesize: 2, // MB
    maxFiles: 2,
    dictMaxFilesExceeded: 'You can only upload upto 2 images',
    dictRemoveFile: 'Delete',
    dictCancelUploadConfirmation: 'Are you sure to cancel upload?',
    postUrl: 'no-url',
  };
  const djsConfig = { autoProcessQueue: false };
  const eventHandlers = {
    addedfile: file => notification('success', `${file.name} added`),
    success: file =>
      notification('success', `${file.name} successfully uploaded`),
    error: error => notification('error', 'Server is not set in the demo'),
  };
  return (
    <LayoutWrapper>
      <Row>
        <FullColumn>
          <Papersheet title="Dropzone Uploader">
            <DropzoneWrapper>
              <Dropzone
                config={componentConfig}
                eventHandlers={eventHandlers}
                djsConfig={djsConfig}
              />
            </DropzoneWrapper>
          </Papersheet>
        </FullColumn>
      </Row>
    </LayoutWrapper>
  );
}
