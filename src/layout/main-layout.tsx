import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Footer } from 'layout/footer';
import { MainNavbar } from 'layout/main-navbar';
import { MainSidebar } from 'layout/main-sidebar';
import useTranslation from 'next-translate/useTranslation';
import { MenuType } from 'types/menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InterestsIcon from '@mui/icons-material/Interests';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CollectionsIcon from '@mui/icons-material/Collections';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ForumIcon from '@mui/icons-material/Forum';
import SubjectIcon from '@mui/icons-material/Subject';
import ComputerIcon from '@mui/icons-material/Computer';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export const getMenuList = () => {
  const viewBox : string = '2 0 25 25';
  const {t} = useTranslation('common');
  const sections : MenuType[] = [
    {title: t('About Us'),
    icon: <AccountBoxIcon viewBox={viewBox}/>,
    links:[
      {
        title: t('PortPolio'),
        links: [
            {
              title: t('MinNyeon'),
              icon: <ComputerIcon/>,
              href: '#'
            },
            {
              title: t('YeonJin'),
              icon: <HealthAndSafetyIcon/>,
              href: '#'
            }
          ]
        }
      ]
    },
    {
      title: t('For Us'),
      icon: <InterestsIcon viewBox={viewBox}/>,
      links:[
        {
          title: t('Community'),
          links: [
            {
              title: t('Chatting'),
              icon: <ForumIcon/>,
              href: '#'
            },
            {
              title: t('Forum'),
              icon: <SubjectIcon/>,
              href: '#'
            }
          ]
        },
        {
          title: t('Planning'),
          links: [
            {
              title: t('Study'),
              icon: <AutoStoriesIcon/>,
              href: '#'
            },
            {
              title: t('Calendar'),
              icon: <CalendarMonthIcon/>,
              href: '#'
            }
          ]
        },
        {
          title: t('Memories'),
          links : [
            {
              title: t('Travels'),
              icon: <FlightTakeoffIcon/>,
              href: '#'
            },
            {
              title: t('Gallery'),
              icon: <CollectionsIcon/>,
              href: '#'
            },
          ]
        }
      ]
    },
    {
      title: t('ManageToUs'),
      icon: <SettingsIcon viewBox={viewBox}/>,
      links: [
        {
          title: t('Management'),
          links: [
            {
              title: t('Users'),
              icon: <ManageAccountsIcon/>,
              href: '#'
            },
            {
              title: t('Group'),
              icon: <GroupIcon/>,
              href: '#'
            },
            {
              title: t('DashBoard'),
              icon: <DashboardIcon/>,
              href: '#'
            }
          ]
        }
      ]
    },
  ];
  return sections;
}



interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: '100%',
    paddingTop: 64
  })
);

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <MainLayoutRoot>
      <MainNavbar onOpenSidebar={(): void => setIsSidebarOpen(true)} />
      <MainSidebar
        onClose={(): void => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
      {children}
      <Footer />
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};
