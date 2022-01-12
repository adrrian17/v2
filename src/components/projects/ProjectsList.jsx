import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import ComicsGrid from '~/components/projects/ComicsGrid';

export default function ProjectsLists() {
  return (
    <Tabs align={'center'} variant={'soft-rounded'} color={'brand.500'}>
      <TabList>
        <Tab>Cómics</Tab>
        <Tab>Guiones</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ComicsGrid />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
