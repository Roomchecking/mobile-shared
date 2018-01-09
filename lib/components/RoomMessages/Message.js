import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import get from 'lodash/get';

import { unixPrettyDate } from 'rc-mobile-base/lib/utils/dates';
import { typeMap } from './utils';

import Button from './Button';

import {
  MessageContainer,
  MessageContainerColumnSM,
  MessageContainerColumnLG,
  MessageToggleContainer,
  MessageFocusDetailsRow,
  MessageFocusMessageRow,
  MessageFocusUserRow,
  MessageTypeText,
  MessageDatesUserText,
  MessageMessageText,
  MessageAvatarContainer,
  MessageAvatarImage,
  Spacer
} from './styles';

import { grey, greyDk, grey100, blueLt } from 'rc-mobile-base/lib/styles';

export default Message = ({ message, indexedUsers, index, checkedMessages, toggleMessage }) => (
  <MessageContainer>
    <MessageContainerColumnSM>
      <MessageToggleContainer onPress={() => toggleMessage(message.messageId)}>
      { checkedMessages.includes(message.messageId) ? 
        <Icon name="check-square-o" size={24} color={blueLt.color} />
        :
        <Icon name="square-o" size={24} color={grey.color} />
      }
      </MessageToggleContainer>
      
    </MessageContainerColumnSM>
    <MessageContainerColumnLG>
      
      <MessageFocusDetailsRow>
        <MessageTypeText>
          { get(typeMap, message.messageType, '').toUpperCase() }
        </MessageTypeText>
        <MessageDatesUserText>
          { `· ${unixPrettyDate(message.dateTs)} - ${moment(message.endDate).format('ll')}`.toUpperCase() }
        </MessageDatesUserText>
      </MessageFocusDetailsRow>

      <MessageFocusMessageRow>
        <MessageMessageText>
          { message.message }
        </MessageMessageText>
      </MessageFocusMessageRow>
      
      <MessageFocusUserRow>
        <MessageAvatarContainer>
          { message.userId && get(indexedUsers, [message.userId, 'image']) ?
            <MessageAvatarImage
              source={{ uri: get(indexedUsers, [message.userId, 'thumbnail']) || get(indexedUsers, [message.userId, 'image']) || '' }}
              />
            : null
          }
        </MessageAvatarContainer>
        <MessageDatesUserText>
          { message.userId ?
            `${get(indexedUsers, [message.userId, 'first_name'])} ${get(indexedUsers, [message.userId, 'last_name'])}`
            : null
          }
        </MessageDatesUserText>

        <Spacer />

        <Button color={greyDk.color} icon="pencil-square-o">Edit</Button>
      </MessageFocusUserRow>
    </MessageContainerColumnLG>
  </MessageContainer>
) 