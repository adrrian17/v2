import {
  Flex,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Link,
} from '@chakra-ui/react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import data from '~/content/tools.json';

export default function ToolLists() {
  const headerColor = useColorModeValue('gray.800', 'whiteAlpha.400');
  const linkColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const acordionColor = useColorModeValue('gray.50', 'whiteAlpha.100');

  return (
    <Accordion defaultIndex={0}>
      {data.map((toolList, index) => (
        <AccordionItem key={index} borderTop={'0'} borderBottom={'0'} my={6}>
          {({ isExpanded }) => (
            <>
              <AccordionButton
                borderTopRadius={'xl'}
                borderBottomRadius={isExpanded ? 0 : 'xl'}
                _expanded={{ bg: headerColor, color: 'white' }}
                _focus={{ ring: 0 }}
              >
                <Text mr={4}>{toolList.icon}</Text>
                <Text
                  flex="1"
                  textAlign="left"
                  fontSize={'xl'}
                  fontWeight={700}
                >
                  {toolList.header}
                </Text>
                {isExpanded ? (
                  <FiMinus fontSize="12px" />
                ) : (
                  <FiPlus fontSize="12px" />
                )}
              </AccordionButton>
              <AccordionPanel
                pb={4}
                bg={acordionColor}
                borderBottomRadius={'xl'}
              >
                {toolList.tools.map((tool, index) => (
                  <Flex key={index} my={6}>
                    <Flex flex={1} direction={'row'}>
                      <Link
                        isExternal
                        href={tool.url}
                        fontSize={'lg'}
                        fontWeight={700}
                        color={linkColor}
                        textDecoration={'underline 2px'}
                        _hover={{
                          textDecoration: 'underline 2px ',
                        }}
                      >
                        {tool.name}
                      </Link>
                    </Flex>
                    <Flex flex={2} align={'center'}>
                      <Text>{tool.description}</Text>
                    </Flex>
                  </Flex>
                ))}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
