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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

export const TabsPanel = (props: TabsPanelProps) => {
  const [tabValue, setTabValue] = useState<number>(0);
  const { children, titles } = props;
  if (children === undefined || !Array.isArray(children) || children.length === 0) return null;

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="customer profile tabs"
          centered
          variant="fullWidth"
        >
          {titles.map((title) => (
            <Tab
              key={title}
              label={title}
            />
          ))}
        </Tabs>
      </Box>
      {children.map((child, index) => (
        <CustomTabPanel
          key={titles[index]}
          value={tabValue}
          index={index}
        >
          {child}
        </CustomTabPanel>
      ))}
    </Box>
  );
};
