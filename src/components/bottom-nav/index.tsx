import React from 'react';
import Link from 'next/link';
import {
  DocumentPlusIcon, MagnifyingGlassIcon, StarIcon, UserCircleIcon, UserGroupIcon
} from '@heroicons/react/24/outline';

import Icon, { ICON_SIZE } from '../icon';

export const NAV_HEIGHT = 48;

const BottomNav = (): React.ReactNode => (
  <div className={`fixed bottom-0 w-full h-${NAV_HEIGHT} flex items-center justify-around py-8 px-8 md:px-16 border-t bg-white z-10 dark:bg-gray-500 dark:border-gray-900 md:hidden`}>
    <Link href="/communities"><Icon IconType={UserGroupIcon} size={ICON_SIZE.MEDIUM} title="Communities icon" /></Link>
    <Link href="/post"><Icon IconType={DocumentPlusIcon} size={ICON_SIZE.MEDIUM} title="Create post icon" /></Link>
    <Link href="/favorites"><Icon IconType={StarIcon} size={ICON_SIZE.MEDIUM} title="Favorites icon" /></Link>
    <button type="button" aria-label="Search"><Icon IconType={MagnifyingGlassIcon} size={ICON_SIZE.MEDIUM} title="Search icon" /></button>
    <Link href="/user"><Icon IconType={UserCircleIcon} size={ICON_SIZE.MEDIUM} title="User icon" /></Link>
  </div>
);

export default BottomNav;