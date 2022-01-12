import { Stack } from '@chakra-ui/react';

import ScriptsCard from '~/components/scripts/ScriptsCard';
import ToolsCard from '~/components/tools/ToolsCard';

export default function ExtraContent() {
  return (
    <Stack
      maxW={'container.sm'}
      mx={'auto'}
      direction={{ base: 'column', md: 'row' }}
      mb={12}
    >
      <ToolsCard />
      <ScriptsCard />
    </Stack>
  );
}
