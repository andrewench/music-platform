import React from 'react';
import {
  IoPersonOutline,
  IoChatbubblesOutline,
  IoPeopleOutline,
  IoRadioOutline,
  IoHeartOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

interface ISideBarItems {
  to: string;
  label: string;
  icon: unknown;
}

export const SideBarItems: ISideBarItems[] = [
  {
    to: '/account',
    label: 'My account',
    icon: <IoPersonOutline size={18} />,
  },
  {
    to: '/messenger',
    label: 'Messenger',
    icon: <IoChatbubblesOutline size={18} />,
  },
  {
    to: '/friends',
    label: 'Friends',
    icon: <IoPeopleOutline size={18} />,
  },
  {
    to: '/subscriptions',
    label: 'Subscriptions',
    icon: <IoRadioOutline size={18} />,
  },
  {
    to: '/favourites',
    label: 'Liked songs',
    icon: <IoHeartOutline size={18} />,
  },
  {
    to: '/settings',
    label: 'Settings',
    icon: <IoSettingsOutline size={18} />,
  },
];
