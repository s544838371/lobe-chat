import { PropsWithChildren } from 'react';

import ServerLayout from '@/components/server/ServerLayout';

import Desktop from './_layout/Desktop';
import Mobile from './_layout/Mobile';

const MainLayout = ServerLayout<PropsWithChildren>({ Desktop, Mobile });

MainLayout.displayName = 'DiscoverStoreLayout';

export default MainLayout;

export const dynamic = 'force-static';
