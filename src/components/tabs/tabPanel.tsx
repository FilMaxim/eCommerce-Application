import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import type { TabPanelProps, TabsPanelProps } from '../../utils/types';

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${String(index)}`}
      aria-labelledby={`simple-tab-${String(index)}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export const TabsPanel = (props: TabsPanelProps) => {
  const { children1, children2, children3 } = props;
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="customer profile tabs"
        >
          <Tab label="Personal Information" />
          <Tab label="Addresses" />
          <Tab label="Change Password" />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={tabValue}
        index={0}
      >
        {children1}
      </CustomTabPanel>
      <CustomTabPanel
        value={tabValue}
        index={1}
      >
        {children2}
      </CustomTabPanel>
      <CustomTabPanel
        value={tabValue}
        index={2}
      >
        {children3}
      </CustomTabPanel>
    </Box>
  );
};
